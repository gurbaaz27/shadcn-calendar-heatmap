import { siteConfig } from "@/config/site"
import { IndexPageClient } from "./(components)/client"

async function getRepoStarCount() {
  const res = await fetch(`https://api.github.com/repos/${siteConfig.name}`)
  const data = await res.json()
  const starCount = data.stargazers_count

  if (starCount > 999) {
    return (starCount / 1000).toFixed(1) + "K"
  }

  return starCount
}

export default async function IndexPage() {
  const starCount = await getRepoStarCount()

  return <IndexPageClient starCount={starCount} />
}

export const revalidate = 3600
