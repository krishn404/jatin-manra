import { chromium } from "playwright"

const url = "http://localhost:3000"

function parseOklchLightness(color) {
  const m = color.match(/oklch\(\s*([0-9.]+)/i)
  return m ? Number(m[1]) : null
}

const browser = await chromium.launch({ headless: true })
const page = await browser.newPage({ viewport: { width: 1280, height: 800 } })
const errors = []

page.on("pageerror", (err) => errors.push(String(err)))

await page.goto(url, { waitUntil: "networkidle" })
await page.waitForTimeout(800)

const toggle = page.getByRole("button", { name: /switch to (light|dark) theme/i })
if (!(await toggle.count())) {
  throw new Error("Theme toggle button not found")
}

async function snapshot() {
  return page.evaluate(() => {
    const html = document.documentElement
    const body = document.body
    const styles = getComputedStyle(body)
    return {
      className: html.className,
      colorScheme: html.style.colorScheme || getComputedStyle(html).colorScheme,
      background: styles.backgroundColor,
      color: styles.color,
      stored: localStorage.getItem("theme"),
      hasLenis: Boolean(html.classList.contains("lenis") || document.documentElement.hasAttribute("data-lenis-prevent")),
      lenisClass: html.className,
    }
  })
}

const before = await snapshot()
const lightBgBefore = parseOklchLightness(before.background)

await toggle.click()
await page.waitForTimeout(400)
const after = await snapshot()
const lightBgAfter = parseOklchLightness(after.background)

await toggle.click()
await page.waitForTimeout(400)
const restored = await snapshot()

const htmlClass = await page.evaluate(() => document.documentElement.className)
const lenisPresent = htmlClass.includes("lenis") || (await page.evaluate(() => Boolean(window.lenis)))

const headingAnimated = await page.locator("h1 span").count()

const persisted = after.stored === "dark" || after.stored === "light"

await browser.close()

const switched =
  before.className.includes("dark") !== after.className.includes("dark") ||
  (lightBgBefore != null && lightBgAfter != null && Math.abs(lightBgBefore - lightBgAfter) > 0.2)

const results = {
  toggleFound: true,
  switched,
  persisted,
  restoredOpposite: restored.className.includes("dark") === before.className.includes("dark"),
  headingWordSpans: headingAnimated,
  htmlClass,
  before,
  after,
  restored,
  pageErrors: errors,
  lenisPresent,
}

console.log(JSON.stringify(results, null, 2))

if (!switched) {
  process.exitCode = 1
}
