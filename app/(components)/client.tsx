"use client"

import { CopyNpmCommandButton } from "@/components/copy-button"
import {
  PageActions,
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
  PageHeaderNotifier,
} from "@/components/page-header"
import { buttonVariants } from "@/components/ui/button"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
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
import { useState } from "react"

export const IndexPageClient = ({ starCount }: { starCount: string }) => {
  const [months, setMonths] = useState(1)

  return (
    <div className="container relative flex-1 flex flex-col justify-center items-center">
      <PageHeader>
        <PageHeaderNotifier>Work in progress 🚧</PageHeaderNotifier>

        <PageHeaderHeading>
          Modern alternative to primitive react heatmaps.
        </PageHeaderHeading>

        <Select onValueChange={(e) => setMonths(+e)}>
          <SelectTrigger className="w-[250px] my-4">
            <SelectValue placeholder="Select number of months" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Months</SelectLabel>
              {[...Array(4)].map((_, idx) => (
                <SelectItem key={idx} value={`${idx + 1}`}>
                  {idx + 1}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>

        <CalendarHeatmap
          numberOfMonths={months}
          datesStylingMap={{
            low: [
              [...Array(3)].map((dt) =>
                randomDate(
                  currentMonthFirstDate(),
                  currentMonthLastDate(months)
                )
              ),
              "text-white hover:text-white bg-green-400 hover:bg-green-400",
            ],
            mid: [
              [...Array(3)].map((dt) =>
                randomDate(
                  currentMonthFirstDate(),
                  currentMonthLastDate(months)
                )
              ),
              "text-white hover:text-white bg-green-500 hover:bg-green-500",
            ],
            high: [
              [...Array(3)].map((dt) =>
                randomDate(
                  currentMonthFirstDate(),
                  currentMonthLastDate(months)
                )
              ),
              "text-white hover:text-white bg-green-700 hover:bg-green-700",
            ],
          }}
        />

        <PageHeaderDescription>
          Showcase Github streaks. Present climate stats. <br></br>
          Convey more with less.
          <br></br>
          Unstyled. Customizable. Open Source.
        </PageHeaderDescription>

        <PageActions>
          <div className={buttonVariants({ variant: "outline" })}>
            <div className="text-muted-foreground pr-1">
              <span className="text-foreground">npm</span> install
              shadcn-calendar-heatmap
            </div>
            <CopyNpmCommandButton
              commands={{
                __npmCommand__: "npm install input-otp",
                __yarnCommand__: "yarn add input-otp",
                __pnpmCommand__: "pnpm add input-otp",
                __bunCommand__: "bun add input-otp",
              }}
            />
          </div>
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
              <div className="hidden md:[display:unset]">Github</div>
              <div className="hidden md:[display:unset] h-full w-px bg-input group-hover:bg-foregrounds mx-4" />
              <div>{starCount}</div>
            </div>
          </Link>
        </PageActions>
      </PageHeader>

      {/* <ExampleCode /> */}
    </div>
  )
}
