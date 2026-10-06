export function getSiteUrl() {
  const configuredUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim()
  if (configuredUrl) {
    const normalizedUrl = configuredUrl.includes("://")
      ? configuredUrl
      : `https://${configuredUrl}`
    return new URL(normalizedUrl).origin
  }

  const vercelProductionUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL?.trim()
  if (vercelProductionUrl) return `https://${vercelProductionUrl}`

  return "http://localhost:3000"
}
