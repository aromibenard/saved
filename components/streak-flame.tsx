"use client"

import { getStreakTier } from "@/lib/utils"
import { motion } from "framer-motion"
import { Flame } from "lucide-react"
import { use } from "react"

export type StreakProps = {
    streakPromise: Promise<number>
}


const flameSize = {
    warm: 18,
    hot: 22,
    blazing: 24,
    inferno: 26,
}

const flameColor = {
    warm: "text-orange-400",
    hot: "text-orange-500",
    blazing: "text-red-500",
    inferno: "text-red-600 drop-shadow-[0_0_12px_rgba(255,80,0,0.6)]",
}

const flameAnimation = {
    warm: { scale: [1, 1.05, 1] },
    hot: { scale: [1, 1.1, 1] },
    blazing: { scale: [1, 1.15, 1] },
    inferno: {
        scale: [1, 1.2, 1],
        rotate: [-2, 2, -2],
    },
}

export function StreakFlame({ streakPromise }: StreakProps) {
    const streak = use(streakPromise)

    const tier = getStreakTier(streak)

    if (tier === "none") {
        return (
            <div className="rounded-lg border border-border/50 bg-muted/40 p-2 text-center">
                    <p className="text-muted-foreground">Streak</p>
                <Flame size={24} />
                <span>0</span>
            </div>
        )
    }

    return (
        <div className="border border-border/50 bg-muted/40 p-2 text-center">
            <p className="text-muted-foreground ">Streak</p>
            <div className="flex items-center gap-2 rounded-lg ">
                <motion.div
                    animate={flameAnimation[tier]}
                    transition={{ 
                        duration: 1.2,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                >
                    <Flame
                        size={flameSize[tier]}
                        className={flameColor[tier]}
                        fill="currentColor"
                    />
                </motion.div>

                <span className="font-semibold">
                    {streak}d 
                </span>
            </div>
        </div>
    )
}
