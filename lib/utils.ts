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
