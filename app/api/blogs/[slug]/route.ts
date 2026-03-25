import { db } from "@/lib/db";
import { blogTable } from "@/lib/db/schema";
import { eq } from "drizzle-orm";
import { NextResponse } from "next/server";

export async function GET(req: Request, { params }: { params: Promise<{ slug: string }> }) {
    const{ slug } = await params;

    const post = await db.select().from(blogTable).where(eq(blogTable.slug, slug))
    if (!post) return NextResponse.json({ message: "Post not found" }, { status: 404 })

    return NextResponse.json(post);
}