import {
  currentMonthFirstDate,
  currentMonthLastDate,
  randomDate,
} from "@/lib/utils"

export const GithubStreak = [
  "text-white hover:text-white bg-green-400 hover:bg-green-400",
  "text-white hover:text-white bg-green-500 hover:bg-green-500",
  "text-white hover:text-white bg-green-700 hover:bg-green-700",
]

export const GithubStreakDates = [
  [...Array(12)].map((_) =>
    randomDate(currentMonthFirstDate(), currentMonthLastDate(3))
  ),
  [...Array(9)].map((_) =>
    randomDate(currentMonthFirstDate(), currentMonthLastDate(3))
  ),
  [...Array(6)].map((_) =>
    randomDate(currentMonthFirstDate(), currentMonthLastDate(3))
  ),
]

export const Heatmap = [
  "text-white hover:text-white bg-blue-300 hover:bg-blue-300",
  "text-white hover:text-white bg-green-500 hover:bg-green-500",
  "text-white hover:text-white bg-amber-400 hover:bg-amber-400",
  "text-white hover:text-white bg-red-700 hover:bg-red-700",
]

export const HeatmapDatesWeight = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]

export const Rainbow = [
  "text-white hover:text-white bg-violet-400 hover:bg-violet-400",
  "text-white hover:text-white bg-indigo-400 hover:bg-indigo-400",
  "text-white hover:text-white bg-blue-400 hover:bg-blue-400",
  "text-white hover:text-white bg-green-400 hover:bg-green-400",
  "text-white hover:text-white bg-yellow-400 hover:bg-yellow-400",
  "text-white hover:text-white bg-orange-400 hover:bg-orange-400",
  "text-white hover:text-white bg-red-400 hover:bg-red-400",
]

export const RainbowDates = [
  [...Array(3)].map((_) =>
    randomDate(currentMonthFirstDate(), currentMonthLastDate(2))
  ),
  [...Array(2)].map((_) =>
    randomDate(currentMonthFirstDate(), currentMonthLastDate(2))
  ),
  [...Array(1)].map((_) =>
    randomDate(currentMonthFirstDate(), currentMonthLastDate(2))
  ),
  [...Array(3)].map((_) =>
    randomDate(currentMonthFirstDate(), currentMonthLastDate(2))
  ),
  [...Array(2)].map((_) =>
    randomDate(currentMonthFirstDate(), currentMonthLastDate(2))
  ),
  [...Array(1)].map((_) =>
    randomDate(currentMonthFirstDate(), currentMonthLastDate(2))
  ),
  [...Array(3)].map((_) =>
    randomDate(currentMonthFirstDate(), currentMonthLastDate(2))
  ),
]
