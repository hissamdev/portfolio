import { db } from "@/lib/db";
import { blogTable } from "@/lib/db/schema";
import { NextResponse } from "next/server";

export async function GET() {
    const posts = await db.select().from(blogTable)

    return NextResponse.json(posts)
}