"use client"

import { useOptimistic, useTransition, useRef } from "react"
import { logSavings } from "@/lib/actions/log-savings"

type PendingOp = {
  id: string
  amount: number
}

export function useSavingsActions(serverBalance: number) {
  const [isPending, startTransition] = useTransition()

  // Track pending ops explicitly
  const pending = useRef<PendingOp[]>([])

  const [balance, updateOptimistic] = useOptimistic(
    serverBalance,
    (current, action: { type: "add" | "remove"; op: PendingOp }) => {
      if (action.type === "add") {
        return current + action.op.amount
      }
      return current - action.op.amount
    }
  )

  function submit(amount: number) {
    const op: PendingOp = {
      id: crypto.randomUUID(),
      amount,
    }



    // 2️⃣ server action
    startTransition(async () => {
        // 1️⃣ optimistic add
        pending.current.push(op)
        updateOptimistic({ type: "add", op })
        const result = await logSavings({ amount })

      if (!result.ok) {
        // 🔁 rollback
        pending.current = pending.current.filter(p => p.id !== op.id)
        updateOptimistic({ type: "remove", op })
      }
    })
  }

  return {
    balance,
    isPending,
    save: (amount: number) => submit(Math.abs(amount)),
    withdraw: (amount: number) => submit(-Math.abs(amount)),
  }
}
