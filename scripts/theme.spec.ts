import { test, expect } from "@playwright/test"

test("theme toggle, lenis, and motion headings", async ({ page }) => {
  const errors: string[] = []
  page.on("pageerror", (err) => errors.push(String(err)))

  await page.goto("http://localhost:3000")
  await page.waitForSelector("h1")

  const toggle = page.getByRole("button", { name: /switch to (light|dark) theme/i })
  await expect(toggle).toBeVisible()

  const before = await page.evaluate(() => ({
    dark: document.documentElement.classList.contains("dark"),
    bg: getComputedStyle(document.body).backgroundColor,
  }))

  await toggle.click()
  await page.waitForTimeout(350)

  const after = await page.evaluate(() => ({
    dark: document.documentElement.classList.contains("dark"),
    bg: getComputedStyle(document.body).backgroundColor,
    stored: localStorage.getItem("theme"),
    htmlClass: document.documentElement.className,
  }))

  expect(after.dark).not.toBe(before.dark)
  expect(after.bg).not.toBe(before.bg)
  expect(after.stored === "light" || after.stored === "dark").toBeTruthy()
  expect(after.htmlClass.includes("lenis")).toBeTruthy()

  await expect(page.locator("h1 span").first()).toBeVisible()
  await expect(page.locator("#about, #skills, #services").first()).toBeVisible()

  await page.getByRole("link", { name: "Services" }).click()
  await page.waitForTimeout(700)

  expect(errors).toEqual([])
})
