import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

type StreakTier = "none" | "warm" | "hot" | "blazing" | "inferno"

export function getStreakTier(streak: number): StreakTier {
  if (streak <= 0) return "none"
  if (streak <= 2) return "warm"
  if (streak <= 6) return "hot"
  if (streak <= 13) return "blazing"
  return "inferno"
}



