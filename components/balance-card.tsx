'use client'

import { motion } from "framer-motion"
import { Card, CardContent } from "./ui/8bit/card"


export default function BalanceCard({
  balance = 125430,
  currency = "KES",
  label = "Total Savings",
  sublabel = "Updated today",
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="w-full max-w-md"
    >
      <Card
        className="relative overflow-hidden rounded-2xl border border-border/40 
        bg-gradient-to-br from-background via-background to-muted 
        shadow-xl"
      >
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
              <span className="text-3xl font-bold tracking-tight text-foreground">
                {balance.toLocaleString()}
              </span>
              <span className="text-sm font-semibold text-muted-foreground">
                {currency}
              </span>
            </div>
            <p className="text-xs text-muted-foreground">{sublabel}</p>
          </div>

          {/* Divider */}
          <div className="h-px w-full bg-linear-to-r from-transparent via-border to-transparent" />

          {/* Footer stats */}
          <div className="grid grid-cols-3 gap-3 text-xs">
            <div className="rounded-lg border border-border/50 bg-muted/40 p-2 text-center">
              <p className="text-muted-foreground">Streak</p>
              <p className="font-semibold text-foreground">🔥 7d</p>
            </div>
            <div className="rounded-lg border border-border/50 bg-muted/40 p-2 text-center">
              <p className="text-muted-foreground">Best Day</p>
              <p className="font-semibold text-foreground">12,000</p>
            </div>
            <div className="rounded-lg border border-border/50 bg-muted/40 p-2 text-center">
              <p className="text-muted-foreground">This Month</p>
              <p className="font-semibold text-foreground">45,300</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}
