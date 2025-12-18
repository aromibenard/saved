"use client"

import { motion } from "framer-motion"
import { Plus, Minus } from "lucide-react"
import { useState } from "react"
import { Card, CardContent } from "@/components/ui/8bit/card"
import { Button } from "@/components/ui/button"
import { Input } from "./ui/8bit/input"

export default function SavingsCard({
    onSave,
    onWithdraw,
    disabled,
}: {
    onSave: (amount: number) => void
    onWithdraw: (amount: number) => void
    disabled?: boolean
}) {
    const [amount, setAmount] = useState("")

    return (
        <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="w-full max-w-md"
        >
        <Card className="relative overflow-hidden rounded-2xl border border-border/40 bg-gradient-to-br from-background via-background to-muted shadow-lg">
            <CardContent className="flex flex-col gap-5 p-5 sm:p-6">
            {/* Header */}
            <div className="flex items-center justify-between">
                <div>
                <p className="text-sm font-medium text-muted-foreground">
                    Quick Action
                </p>
                <p className="text-xs text-muted-foreground">
                    Log today’s savings
                </p>
                </div>
            </div>

            {/* Input */}
                <div className="flex items-center gap-2">
                    <Input
                        type="number"
                        value={amount}
                        onChange={(e) => setAmount(Number(e.target.value))}
                        className="w-full border border-border bg-background px-3 py-2 text-lg font-semibold outline-none"
                    />
                    <span className="text-sm text-muted-foreground">KES</span>
                </div>

            {/* Actions */}
            <div className="grid grid-cols-2 gap-3">
                <Button
                disabled={disabled}
                className="h-11 gap-2"
                onClick={() => onSave(amount)}
                >
                <Plus className="h-4 w-4" />
                Save
                </Button>

                <Button
                disabled={disabled}
                variant="outline"
                className="h-11 gap-2"
                onClick={() => onWithdraw(amount)}
                >
                <Minus className="h-4 w-4" />
                Withdraw
                </Button>
            </div>
            </CardContent>
        </Card>
        </motion.div>
    )
}
