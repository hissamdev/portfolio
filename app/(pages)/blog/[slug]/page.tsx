import { db } from "@/lib/db"
import { blogTable } from "@/lib/db/schema"
import { eq } from "drizzle-orm"

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params

    const post = await db.select().from(blogTable).where(eq(blogTable.slug, slug))

    return (
        <main className="md:pt-[91px] md:max-w-6xl w-full md:mx-auto grid grid-cols-1 lg:grid-cols-3">
            <article className="md:pt-[64px] lg:col-span-2">
                <header>
                    <p className="md:text-[11.2px] text-[#954B00] font-bold uppercase tracking-[1.12px]">{slug}</p>
                    <h1 className="md:pt-4 md:text-[60px] md:leading-[60px] font-bold">The Architecture of Absence</h1>

                    <div className="mt-4 py-[21px] flex gap-10">
                        <div className="flex items-center gap-4">
                            <div className="image">
                                <div className="w-8 aspect-square rounded-full bg-black"></div>
                            </div>
                            <div>
                                <p>Author Name</p>
                                <p>Title</p>
                            </div>
                        </div>

                        <div>
                            <p>Published</p>
                            <p>Date here</p>
                        </div>

                        <div>
                            <p>Reading Time</p>
                            <p>5 Minutes</p>
                        </div>
                    </div>
                </header>

                <section className="md:pl-[21px] md:pt-[48px]">
                    <p>Content here</p>
                </section>
            </article>

            <aside className="mt-30 col-span-1 border">
                <section>
                    <h3>Related Posts</h3>

                    <div>
                        <h4>Post title here</h4>
                        <p>Post description</p>
                    </div>

                    <div>
                        <h4>Post title here</h4>
                        <p>Post description</p>
                    </div>
                </section>
            </aside>
        </main>
    )
}