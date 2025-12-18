"use server"

import { revalidatePath } from "next/cache"
import { savingsLogSchema } from "@/lib/savings.schema"
import { createClient } from "../supabase/server"
import { Database } from "@/database.types"


export type LogsSavingsResult = 
    | { ok: true , amount: number }
    | { ok: false; error: string }

export async function logSavings(input: unknown): Promise<LogsSavingsResult> {
    const parsed = savingsLogSchema.safeParse(input)
    if (!parsed.success) {
        return { ok: false, error: "Invalid amount" }
    }
    
    const { amount } = savingsLogSchema.parse(input)
    const supabase = await createClient<Database>()


    const { error } = await supabase
        .from("savings_log")
        .insert([{ amount, created_at: new Date().toISOString() }])

    if (error) {
        console.error("logSavings failed:", error)
        return { ok: false, error: "Failed to save log" }
    }

    revalidatePath("/")

    return { ok: true, amount }

}