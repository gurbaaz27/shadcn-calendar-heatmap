import { Code } from "@/components/code"

const tsx = `import { CalendarHeatmap } from "@/components/ui/calendar-heatmap"

// Github-style streak pattern
<CalendarHeatmap
  variantClassnames={[
    "text-white hover:text-white bg-green-400 hover:bg-green-400",
    "text-white hover:text-white bg-green-500 hover:bg-green-500",
    "text-white hover:text-white bg-green-700 hover:bg-green-700",
  ]}
  datesPerVariant={[
    [new Date('Jan 1, 2024'), new Date('Jan 15, 2024'), new Date('Feb 18, 2024')],
    [new Date('Jun 12, 2024'), new Date('July 1, 2024'), new Date('Feb 29, 2024'), new Date('May 4, 2024')],
    [new Date('Jan 19, 2024'), new Date('Apr 14, 2024')],
  ]}
/>

// Or you may simply pass weighted array of dates,
// and they would be slotted to different variants based on length of \`variantClassnames\`
<CalendarHeatmap
  variantClassnames={[
    "text-white hover:text-white bg-green-400 hover:bg-green-400",
    "text-white hover:text-white bg-green-500 hover:bg-green-500",
    "text-white hover:text-white bg-green-700 hover:bg-green-700",
  ]}
  weightedDates={[
    { date: new Date('Jan 1, 2024'), weight: 2 }, { date : new Date('Jan 15, 2024'), weight: 1.5 },
    { date: new Date('Jun 12, 2024'), weight: 8 } , { date: new Date('July 1, 2024'), weight: 5 },
    { date: new Date('Jan 19, 2024'), weight: 6 }, { date: new Date('Apr 19, 2024'), weight: 13.5 }
  ]}
/>

// Component code at https://github.com/gurbaaz27/shadcn-calendar-heatmap/blob/main/components/ui/calendar-heatmap.tsx
`

const code = `\`\`\`tsx /maxLength={6}/ /render/ /slots/1 /.map((slot, idx)/1 /Slot/2,3,4 /props.char/2 /<FakeCaret />/
${tsx}
\`\`\``

export function ExampleCode() {
  return (
    <div className="relative code-example w-full overflow-hidden lg:opacity-0 lg:animate-fade-in [animation-delay:5000ms] animate-none">
      <div className="w-full">
        <Code dark={false} code={code} toCopy={tsx} />
        <Code dark={true} code={code} toCopy={tsx} />
      </div>

      <div className="hidden lg:[display:unset] absolute inset-x-0 top-0 -bottom-full code-example-overlay pointer-events-none z-20 [animation-delay:5000ms]"></div>

      {/* Anchor */}
      <div className="code-example-anchor absolute pointer-events-none w-px h-px -top-[5.5rem]" />
    </div>
  )
}
