import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function splitRecord<U, V>(
  original: Record<string, [U, V]>
): [Record<string, U>, Record<string, V>] {
  return Object.entries(original).reduce(
    (acc, [key, [u, v]]) => {
      acc[0][key] = u
      acc[1][key] = v
      return acc
    },
    [{} as Record<string, U>, {} as Record<string, V>]
  )
}

export function randomDate(start: Date, end: Date) {
  return new Date(
    start.getTime() + Math.random() * (end.getTime() - start.getTime())
  )
}

export function currentMonthFirstDate() {
  const date = new Date()
  return new Date(date.getFullYear(), date.getMonth(), 1)
}

export function currentMonthLastDate(months: number) {
  const date = new Date()
  return new Date(date.getFullYear(), date.getMonth() + months, 0)
}
