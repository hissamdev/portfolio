import { db } from "@/lib/db"
import { blogTable } from "@/lib/db/schema"
import { eq } from "drizzle-orm"
import { notFound } from "next/navigation"

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params

    const post = await db.select().from(blogTable).where(eq(blogTable.slug, slug))
    // if (!post[0]) return notFound()

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

                <section className="md:pt-[12px] pr-12">
                    <p>
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec risus libero, lacinia vitae convallis et, accumsan vitae lectus. In et nisi placerat, bibendum quam a, iaculis nunc. Vestibulum vitae imperdiet ipsum. Cras ac mi et lectus efficitur placerat id ut arcu. Aenean ut euismod diam. Nunc dictum, felis hendrerit sagittis sagittis, nibh mauris fermentum sapien, eu convallis purus sem nec turpis. Vivamus nec molestie massa. Curabitur efficitur risus quis consequat pellentesque. Donec maximus, libero ac ullamcorper venenatis, tortor nulla pellentesque odio, vitae molestie risus tortor sit amet nulla. Nulla posuere porttitor sodales. Curabitur vulputate nisl a tincidunt dapibus. Quisque libero tortor, hendrerit sed velit et, pharetra suscipit sapien. Ut vitae gravida magna. Nunc a tincidunt magna. Integer vestibulum ipsum sit amet rhoncus congue. In ut condimentum ex.
<br /><br />
Integer eget augue erat. Mauris in hendrerit mi. Integer sed metus sit amet enim lobortis venenatis. Nulla faucibus odio urna, ut feugiat arcu ultricies vel. Donec congue ex euismod, cursus turpis ac, pharetra nisi. Nunc at feugiat erat, non pharetra nulla. Curabitur condimentum aliquam tellus, sit amet mattis erat semper tincidunt. Aliquam dictum consequat massa quis pulvinar. Curabitur mauris nibh, aliquet nec varius nec, faucibus tincidunt urna. Proin a volutpat ipsum. In vel nulla mauris.
<br /><br />
Fusce ullamcorper non enim eu iaculis. Vivamus et lacus a orci fermentum euismod. Aenean dapibus, est ut posuere porta, libero dolor tincidunt turpis, quis sodales nisl nisl vel massa. Fusce mollis feugiat tincidunt. Cras hendrerit quam ullamcorper nulla maximus, ac sollicitudin lorem pretium. Vestibulum laoreet, diam a tincidunt aliquet, nibh nisi eleifend elit, nec posuere arcu libero et mi. Sed non sem a arcu interdum lacinia et ornare lorem. Mauris quis massa varius, tempus justo at, euismod erat. Ut et nunc ante. Ut dui odio, aliquam sit amet dui eget, mattis semper urna. Suspendisse at consectetur nulla. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Maecenas venenatis mattis dolor, sit amet placerat nibh faucibus nec.
<br /><br />
Nam non dui sed turpis venenatis iaculis. Phasellus eros mauris, commodo id condimentum sit amet, tempus eu lorem. Proin ut est ut ex blandit laoreet sit amet et leo. Curabitur sodales ligula quis lorem congue dapibus. Duis viverra pretium mauris, quis ultrices mauris tempor a. Nullam cursus, massa et porta vulputate, tellus turpis ultrices arcu, in auctor tellus mi id ante. Praesent justo tellus, iaculis ac sagittis nec, varius quis nisi. Donec convallis tellus at augue hendrerit dictum a ut eros. Phasellus a eros vitae risus aliquet aliquet vel id lacus.
<br /><br />
Integer cursus ut mauris ultricies molestie. Etiam id viverra lacus. Phasellus dapibus erat est. Donec vitae interdum mauris. Duis mollis erat ligula, non imperdiet dui consectetur vel. Ut tincidunt ex risus, a porttitor arcu dignissim ac. Donec non ipsum et massa tincidunt venenatis. Fusce bibendum tincidunt congue. Sed luctus sed nunc sit amet fermentum. Integer luctus sapien at odio ornare laoreet. Duis tristique finibus pharetra. Quis</p>
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