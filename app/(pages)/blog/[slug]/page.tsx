import { db } from "@/lib/db"
import { blogTable } from "@/lib/db/schema"
import { eq } from "drizzle-orm"
import { notFound } from "next/navigation"
import Post from "@/app/content/post.mdx"

import { unified } from 'unified'
import remarkParse from 'remark-parse'
import remarkRehype from 'remark-rehype'
import rehypeSanitize from 'rehype-sanitize'
import rehypeStringify from 'rehype-stringify'


export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params
    console.log("Reached dynamic route")

    const post = await db.select({ content: blogTable.content }).from(blogTable).where(eq(blogTable.slug, slug))
    const firstPost = post[0]?.content

    // const firstPost = "# Hello world"
    if (!firstPost) return notFound()

    const postHtml = await unified()
        .use(remarkParse)
        .use(remarkRehype)
        .use(rehypeSanitize)
        .use(rehypeStringify)
        .process(firstPost)
    const stringHtml = String(postHtml)

    return (
        <main className="md:pt-[91px] md:max-w-6xl w-full md:mx-auto grid grid-cols-1 lg:grid-cols-3">
            <article className="md:pt-[64px] lg:col-span-2">
                <header>
                    <p className="md:text-[11.2px] text-[#954B00] font-bold uppercase tracking-[1.12px]">{slug}</p>
                    <h1 className="md:pt-4 md:text-[60px] md:leading-[60px] font-bold">The Architecture of Absence</h1>

                    <div className="mt-4 py-[21px] flex gap-7 items-center">
                        <div className="flex items-center gap-4">
                            <div className="image">
                                <div className="w-10 aspect-square rounded-full bg-black"></div>
                            </div>
                            <div>
                                <p className="text-[12px] leading-[18px] font-bold text-[#1A1A1A] ">Author Name</p>
                                <p className="text-[12.8px] leading-[19.2px] text-[#666666] uppercase ">Lead Author</p>
                            </div>
                        </div>

                        <div>
                            <p className="text-[9.6px] leading-[14.4px] font-bold text-[#666666] uppercase ">Published</p>
                            <p className="text-[14.4px] leading-[21.6px] text-[#1A1A1A] ">Date here</p>
                        </div>

                        <div>
                            <p className="text-[9.6px] leading-[14.4px] font-bold text-[#666666] uppercase ">Reading Time</p>
                            <p className="text-[14.4px] leading-[21.6px] text-[#1A1A1A] ">5 Minutes</p>
                        </div>

                        <div>
                            <p className="text-[9.6px] leading-[14.4px] font-bold text-[#666666] uppercase ">Topics</p>
                            <div className="flex gap-2">
                                <p className="text-[14.4px] leading-[21.6px] text-[#1A1A1A] ">Lifestyle</p>
                                <p className="text-[14.4px] leading-[21.6px] text-[#1A1A1A] ">Sports</p>
                            </div>
                        </div>
                    </div>
                </header>

                <section className="md:pt-[12px] pr-12 prose prose-li:marker:text-black">
                    <div dangerouslySetInnerHTML={{ __html: stringHtml }} />
                </section>
            </article>

            <aside className="mt-30 col-span-1">
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