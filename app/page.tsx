import {
  PageActions,
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
  PageHeaderNotifier,
} from "@/components/page-header"
import { buttonVariants } from "@/components/ui/button"
import { siteConfig } from "@/config/site"
import {
  cn,
  currentMonthFirstDate,
  currentMonthLastDate,
  randomDate,
} from "@/lib/utils"
import Link from "next/link"
import { CalendarHeatmap } from "@/components/ui/calendar-heatmap"
import { Icons } from "@/components/icons"
import { Star } from "lucide-react"
import { ExampleCode } from "./(components)/example-code"
import {
  GithubStreak,
  GithubStreakDates,
  Heatmap,
  HeatmapDatesWeight,
  Rainbow,
  RainbowDates,
} from "./(components)/example-variants"

const fadeUpClassname =
  "lg:motion-safe:opacity-0 lg:motion-safe:animate-fade-up"

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

  return (
    <div className="container relative flex-1 flex flex-col justify-center items-center">
      <PageHeader>
        <PageHeaderNotifier>
          Excited to officially launch our new shadcn-based component!
          <span className="mx-2">🎉</span>
        </PageHeaderNotifier>

        <PageHeaderHeading className={cn(fadeUpClassname)}>
          Modern alternative to primitive react heatmaps.
        </PageHeaderHeading>

        <CalendarHeatmap
          className={cn(
            fadeUpClassname,
            "lg:motion-safe:[animation-delay:1000ms]"
          )}
          variantClassnames={GithubStreak}
          datesPerVariant={GithubStreakDates}
        />

        <PageHeaderDescription
          className={cn(
            fadeUpClassname,
            "lg:motion-safe:[animation-delay:3000ms]"
          )}
        >
          Showcase Github streaks. Visualise user growth. Understand global
          warming trends. <br></br>
          Convey more with less.
          <br></br>
          Unstyled. Customizable. Open Source.
        </PageHeaderDescription>

        <PageActions
          className={cn(
            fadeUpClassname,
            "lg:motion-safe:[animation-delay:3000ms]"
          )}
        >
          <Link
            target="_blank"
            rel="noreferrer"
            href={siteConfig.links.github}
            className={cn(
              "relative !py-0 group",
              buttonVariants({ variant: "outline" })
            )}
          >
            <Icons.gitHub className="mr-2 h-4 w-4" />
            <div className="flex items-center h-full">
              <div className="hidden md:[display:unset]">{siteConfig.name}</div>
              <div className="hidden md:[display:unset] h-full w-px bg-input group-hover:bg-foregrounds mx-4" />
              <Star size={16} className="mr-2" />
              <div>{starCount}</div>
            </div>
          </Link>
        </PageActions>
      </PageHeader>

      <ExampleCode />

      <PageHeader>
        <PageHeaderHeading
          className={cn(
            fadeUpClassname,
            "lg:motion-safe:[animation-delay:4000ms]",
            "text-3xl md:text-4xl",
            "py-4"
          )}
        >
          Examples
        </PageHeaderHeading>

        <PageHeaderHeading
          className={cn(
            fadeUpClassname,
            "lg:motion-safe:[animation-delay:4000ms]",
            "text-xl md:text-2xl"
          )}
        >
          Github Streaks
        </PageHeaderHeading>

        <CalendarHeatmap
          className={cn(
            fadeUpClassname,
            "lg:motion-safe:[animation-delay:1000ms]"
          )}
          numberOfMonths={3}
          variantClassnames={GithubStreak}
          datesPerVariant={GithubStreakDates}
        />

        <PageHeaderHeading
          className={cn(
            fadeUpClassname,
            "lg:motion-safe:[animation-delay:4000ms]",
            "text-xl md:text-2xl"
          )}
        >
          Temperature Heatmap
        </PageHeaderHeading>

        <CalendarHeatmap
          className={cn(
            fadeUpClassname,
            "lg:motion-safe:[animation-delay:4000ms]"
          )}
          variantClassnames={Heatmap}
          weightedDates={HeatmapDatesWeight.map((wgt) => ({
            date: randomDate(currentMonthFirstDate(), currentMonthLastDate()),
            weight: wgt,
          }))}
        />

        <PageHeaderHeading
          className={cn(
            fadeUpClassname,
            "lg:motion-safe:[animation-delay:4000ms]",
            "text-xl md:text-2xl"
          )}
        >
          Rainbow Colors
        </PageHeaderHeading>

        <CalendarHeatmap
          className={cn(
            fadeUpClassname,
            "lg:motion-safe:[animation-delay:4000ms]"
          )}
          numberOfMonths={2}
          variantClassnames={Rainbow}
          datesPerVariant={RainbowDates}
        />
      </PageHeader>
    </div>
  )
}

export const revalidate = 3600
