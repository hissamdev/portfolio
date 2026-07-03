import { MoveUpRight } from "lucide-react";

export default function CircleCTA() {
    return (
        <div className="p-12 w-fit self-end border bg-white rounded-full md:-translate-y-10 cursor-pointer">
            <svg
                viewBox="0 0 200 200"
                className="absolute inset-0 animate-spin"
            >
                <defs>
                    <path
                        id="circlePath"
                        d="
                            M 100, 100
                            m -75,0
                            a 75,75 0 1,1 150,0
                            a 75,75 0 1,1 -150,0
                        "
                    />
                </defs>
                <text fill="black" fontSize="16" letterSpacing="7.7">
                    <textPath href="#circlePath">
                        HIRE ME NOW • HIRE ME NOW •
                    </textPath>
                </text>
            </svg>

            <div className="bg-blue-400 aspect-square w-20 flex justify-center items-center rounded-full group">
                <MoveUpRight
                    size={35}
                    strokeWidth={1}
                    className="text-white group-hover:rotate-45 duration-300"
                />
            </div>
        </div>
    );
}
