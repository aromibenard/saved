"use client"

import BalanceCard from "./balance-card"
import { useSavingsActions } from "./savings-action-client"
import SavingsCard from "./savings-card"

export default function SavingsDashboard({ initialBalance,
    streakPromise
 }: { initialBalance: number, streakPromise: Promise<number> }) {
    const { balance, save, withdraw, isPending } =
        useSavingsActions(initialBalance)

    return (
        <>
            <BalanceCard 
                balance={balance} 
                streakPromise={streakPromise}
            />
            <SavingsCard
                onSave={save}
                onWithdraw={withdraw}
                disabled={isPending}
            />
        </>
    )
}
