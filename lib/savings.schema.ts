// lib/savings.schema.ts
import { z } from "zod"

export const savingsLogSchema = z.object({
    amount: z
        .number()
        .int()
        .min(-1_000_000)
        .max(1_000_000)
        .refine((val) => Number.isFinite(val), { message: "Invalid Amount " }),
})

export type SavingsLogInput = z.infer<typeof savingsLogSchema>
