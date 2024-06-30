import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
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

export function currentMonthLastDate(month: number = 1) {
  const date = new Date()
  return new Date(date.getFullYear(), date.getMonth() + month, 0)
}
