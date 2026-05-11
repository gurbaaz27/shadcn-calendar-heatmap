"use client";

import * as React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { DayPicker } from "react-day-picker";

import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

// type utilities
type UnionKeys<T> = T extends T ? keyof T : never;
type Expand<T> = T extends T ? { [K in keyof T]: T[K] } : never;
type OneOf<T extends {}[]> = {
  [K in keyof T]: Expand<
    T[K] & Partial<Record<Exclude<UnionKeys<T[number]>, keyof T[K]>, never>>
  >;
}[number];

// types
export type Classname = string;
export type WeightedDateEntry = {
  date: Date;
  weight: number;
};

interface IDatesPerVariant {
  datesPerVariant: Date[][];
}
interface IWeightedDatesEntry {
  weightedDates: WeightedDateEntry[];
}

type VariantDatesInput = OneOf<[IDatesPerVariant, IWeightedDatesEntry]>;

export type CalendarProps = React.ComponentProps<typeof DayPicker> & {
  variantClassnames: Classname[];
  showToday?: boolean;
} & VariantDatesInput;

/// utlity functions
function useModifers(
  variantClassnames: Classname[],
  datesPerVariant: Date[][]
): [Record<string, Date[]>, Record<string, string>] {
  const noOfVariants = variantClassnames.length;

  const variantLabels = [...Array(noOfVariants)].map(
    (_, idx) => `__variant${idx}`
  );

  const modifiers = variantLabels.reduce((acc, key, index) => {
    acc[key] = datesPerVariant[index];
    return acc;
  }, {} as Record<string, Date[]>);

  const modifiersClassNames = variantLabels.reduce((acc, key, index) => {
    acc[key] = variantClassnames[index];
    return acc;
  }, {} as Record<string, string>);

  return [modifiers, modifiersClassNames];
}

function categorizeDatesPerVariant(
  weightedDates: WeightedDateEntry[],
  noOfVariants: number
) {
  // Return array of empty arrays if weightedDates is empty
  if (!weightedDates.length) {
    return [...Array(noOfVariants)].map(() => [] as Date[]);
  }

  const sortedEntries = weightedDates.sort((a, b) => a.weight - b.weight);
  const categorizedRecord = [...Array(noOfVariants)].map(() => [] as Date[]);

  const minNumber = sortedEntries[0].weight;
  const maxNumber = sortedEntries[sortedEntries.length - 1].weight;
  const range =
    minNumber === maxNumber ? 1 : (maxNumber - minNumber) / noOfVariants;

  sortedEntries.forEach((entry) => {
    const category = Math.min(
      Math.floor((entry.weight - minNumber) / range),
      noOfVariants - 1
    );
    categorizedRecord[category].push(entry.date);
  });

  return categorizedRecord;
}

function CalendarHeatmap({
  variantClassnames,
  datesPerVariant,
  weightedDates,
  className,
  classNames,
  showOutsideDays = true,
  showToday = false,
  ...props
}: CalendarProps) {
  const noOfVariants = variantClassnames.length;

  weightedDates = weightedDates ?? [];
  datesPerVariant =
    datesPerVariant ?? categorizeDatesPerVariant(weightedDates, noOfVariants);

  const [modifiers, modifiersClassNames] = useModifers(
    variantClassnames,
    datesPerVariant
  );

  return (
    <DayPicker
      modifiers={modifiers}
      modifiersClassNames={modifiersClassNames}
      showOutsideDays={showOutsideDays}
      className={cn("p-3", className)}
      classNames={{
        months: "flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0",
        month: "space-y-4",
        caption: "flex justify-center pt-1 relative items-center",
        caption_label: "text-sm font-medium",
        nav: "space-x-1 flex items-center",
        nav_button: cn(
          buttonVariants({ variant: "outline" }),
          "h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100"
        ),
        nav_button_previous: "absolute left-1",
        nav_button_next: "absolute right-1",
        table: "w-full border-collapse space-y-1",
        head_row: "flex",
        head_cell:
          "text-muted-foreground rounded-md w-9 font-normal text-[0.8rem]",
        row: "flex w-full mt-2",
        cell: "h-9 w-9 text-center text-sm p-0 relative [&:has([aria-selected].day-range-end)]:rounded-r-md [&:has([aria-selected].day-outside)]:bg-accent/50 [&:has([aria-selected])]:bg-accent first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20",
        day: cn(
          buttonVariants({ variant: "ghost" }),
          "h-9 w-9 p-0 font-normal aria-selected:opacity-100"
        ),
        day_range_end: "day-range-end",
        day_today: showToday ? "bg-accent text-accent-foreground" : "",
        day_outside:
          "day-outside text-muted-foreground opacity-50 aria-selected:bg-accent/50 aria-selected:text-muted-foreground aria-selected:opacity-30",
        day_disabled: "text-muted-foreground opacity-50",
        day_range_middle:
          "aria-selected:bg-accent aria-selected:text-accent-foreground",
        day_hidden: "invisible",
        ...classNames,
      }}
      components={{
        IconLeft: ({ ...props }) => <ChevronLeft className="h-4 w-4" />,
        IconRight: ({ ...props }) => <ChevronRight className="h-4 w-4" />,
      }}
      {...props}
    />
  );
}
CalendarHeatmap.displayName = "CalendarHeatmap";

export { CalendarHeatmap };
