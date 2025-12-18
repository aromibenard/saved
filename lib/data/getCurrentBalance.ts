'use server'

import { createClient } from "../supabase/server"
import { Database } from "@/database.types"

export default async function getCurrentBalance(): Promise<number> {
    const supabase = await createClient<Database>()
    const { data, error } = await supabase
        .from("savings_log")
        .select("amount")

    if (error) {
        console.error("getCurrentBalance failed:", error)
        return 0
    }
    const balance = data?.reduce((acc, log) => acc + log.amount, 0) || 0
    return balance
}