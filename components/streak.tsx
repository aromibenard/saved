import { Suspense } from "react"
import { StreakFlame } from "./streak-flame"

export function Streak({
    streakPromise
}: { streakPromise: Promise<number> }) {

    return (
        <>
            <Suspense fallback={<div className="h-8 w-8 animate-pulse rounded-full bg-muted" />}>
                <StreakFlame 
                    streakPromise={streakPromise}
                />
            </Suspense>
        </>
    )
}
