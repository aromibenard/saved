
"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/8bit/card"
import { useAnimatedNumber } from "@/hooks/useAnimatedNumber"
import { Streak } from "./streak"

interface BalanceCardProps {
  balance: number
  currency?: string
  label?: string
  sublabel?: string
  streak?: number
  bestDay?: number
  monthTotal?: number
  streakPromise: Promise<number>
}

export default function BalanceCard({
  balance,
  currency = "KES",
  label = "Total Savings",
  sublabel = "Updated today",
  bestDay = 0,
  monthTotal = 0,
  streakPromise
}: BalanceCardProps) {
  const animatedBalance = useAnimatedNumber(balance)

  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
      className="w-full max-w-md"
    >
      <Card
        className="
          relative overflow-hidden rounded-2xl
          border border-border/40
          bg-linear-to-br from-background via-background to-muted
          shadow-xl
        "
      >
        {/* 🔥 Pulse glow — remounts on balance change */}
        <span
          key={balance}
          className="
            pointer-events-none absolute inset-0
            bg-primary/10
          "
        />

        {/* Arcade glow */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-24 -left-24 h-64 w-64 rounded-full bg-primary/20 blur-3xl" />
          <div className="absolute bottom-0 right-0 h-48 w-48 rounded-full bg-primary/10 blur-2xl" />
        </div>

        <CardContent className="relative z-10 flex flex-col gap-6 p-6">
          {/* Header */}
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium text-muted-foreground">
              {label}
            </span>
            <span className="rounded-md border border-primary/30 bg-primary/10 px-2 py-1 text-xs font-semibold text-primary">
              ARCADE
            </span>
          </div>

          {/* Balance */}
          <div className="space-y-1">
            <div className="flex items-baseline gap-2">
              <span className="text-3xl font-bold tracking-tight tabular-nums">
                {animatedBalance.toLocaleString()}
              </span>
              <span className="text-sm font-semibold text-muted-foreground">
                {currency}
              </span>
            </div>
            <p className="text-xs text-muted-foreground">{sublabel}</p>
          </div>

          <div className="h-px w-full bg-linear-to-r from-transparent via-border to-transparent" />

          <div className="grid grid-cols-3 gap-3 text-xs">
            <Streak  streakPromise={streakPromise} />
            <Stat label="Best Day" value={bestDay.toLocaleString()} />
            <Stat label="This Month" value={monthTotal.toLocaleString()} />
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-lg border border-border/50 bg-muted/40 p-2 text-center">
      <p className="text-muted-foreground">{label}</p>
      <p className="font-semibold text-foreground">{value}</p>
    </div>
  )
}
