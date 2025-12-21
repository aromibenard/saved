'use server'

import { createClient } from "../supabase/server"
import { Database } from "@/database.types"

export default async function getCurrentStreak(): Promise<number> {
    const supabase = await createClient<Database>()
    const { data, error } = await supabase
        .from("daily_savings")
        .select("streak_index")
        .order("date", { ascending: false })
        .limit(1)
        .single()

    if (error) {
        console.error("getSreak failed:", error)
        return 0
    }

    return data?.streak_index ?? 0
}