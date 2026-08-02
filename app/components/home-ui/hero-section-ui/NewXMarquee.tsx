export default function NewXMarquee() {
    return (
        <section className="relative h-100 border overflow-hidden">
            <div className="absolute w-[110vw] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 -rotate-9 border z-10 bg-white">
                <div
                    className="w-max py-4 flex items-center
                            font-urbanist text-6xl uppercase [-webkit-text-stroke:1px_gray] text-transparent whitespace-nowrap cross-marquee-scroll
                            "
                >
                    <div className="flex shrink-0 pr-4">
                        <span>
                            Each single line should be at least as wide as the
                            visible area of the screen
                        </span>
                    </div>
                    <div className="flex shrink-0 pr-4">
                        <span>
                            Each single line should be at least as wide as the
                            visible area of the screen
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
}
