import Image from "next/image";

type ZigZagProps = {
    title: string;
    text: string;
    tags: string[];
    reversed: boolean;
    imageAlt: string;
    imageUrl: string;
};

export function ZigZag({
    title,
    text,
    tags,
    reversed,
    imageAlt,
    imageUrl,
}: ZigZagProps) {
    return (
        <div
            className={`flex justify-between items-center md:gap-14 ${reversed ? "flex-row-reverse" : "flex-row"}`}
        >
            <div>
                <div className="relative aspect-613/367 w-140">
                    <Image
                        alt={imageAlt}
                        src={imageUrl}
                        fill
                        className="object-contain"
                    />
                </div>
            </div>
            <div>
                <h3 className="text-3xl font-medium">{title}</h3>
                <p className="max-w-177.25 mt-4 text-[20px] leading-8 ">
                    {text}
                </p>
            </div>
        </div>
    );
}

export default function FeaturedProjects() {
    return (
        <section className="py-12">
            <div className="max-w-320 w-full mx-auto">
                <h3 className="text-center uppercase text-[#5856E6] text-lg font-urbanist">
                    Driving Impact
                </h3>
                <h2 className="mt-3 text-center text-5xl font-medium">
                    My Featured Work
                </h2>
                <p className="mt-4 text-center">
                    High impact projects that influence sales
                </p>

                <div className="md:mt-20 flex flex-col md:gap-12">
                    <ZigZag
                        title="Title Goes Here and is Awesome"
                        text="I'm Ahmed Hissam, a World-Class Senior Full-Stack
                            Engineer based in New York City. My journey in tech
                            started over 8 years ago, driven by a fascination with
                            how code can build entirely new digital worlds."
                        tags={["React", "TypeScript"]}
                        reversed={false}
                        imageAlt="SEO Website Audit Template"
                        imageUrl="/assets/stylish-ecommerce-scores.png"
                    />
                    <ZigZag
                        title="Title Goes Here and is Awesome"
                        text="I'm Ahmed Hissam, a World-Class Senior Full-Stack
                            Engineer based in New York City. My journey in tech
                            started over 8 years ago, driven by a fascination with
                            how code can build entirely new digital worlds."
                        tags={["React", "TypeScript"]}
                        reversed={true}
                        imageAlt="SEO Website Audit Template"
                        imageUrl="/assets/website-audit.png"
                    />
                    <ZigZag
                        title="Title Goes Here and is Awesome"
                        text="I'm Ahmed Hissam, a World-Class Senior Full-Stack
                            Engineer based in New York City. My journey in tech
                            started over 8 years ago, driven by a fascination with
                            how code can build entirely new digital worlds."
                        tags={["React", "TypeScript"]}
                        reversed={false}
                        imageAlt="SEO Website Audit Template"
                        imageUrl="/assets/portfolio-about-old.png"
                    />
                </div>
            </div>
        </section>
    );
}
