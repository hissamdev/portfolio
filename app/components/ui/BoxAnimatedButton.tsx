import Link from "next/link";

type Props = {
    text: string;
    link: string;
    textSize: number;
};

export default function BoxAnimatedButton({
    text,
    link,
    textSize = 12,
}: Props) {
    return (
        <Link
            href={link}
            className={`relative px-5 py-2 md:px-4 md:py-2.5 bg-white text-black text-sm inline-block group overflow-hidden`}
        >
            <span
                className={`inline-block group-hover:scale-70 duration-250`}
                style={{ fontSize: textSize }}
            >
                {text}
            </span>
            <span
                className="absolute inset-0 flex items-center justify-center translate-y-full scale-70 text-white bg-black rounded-4xl group-hover:translate-y-0 ease-out duration-250 group-hover:scale-100"
                style={{ fontSize: textSize }}
            >
                {text}
            </span>
        </Link>
    );
}
