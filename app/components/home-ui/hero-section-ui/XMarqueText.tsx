export default function XMarqueText() {
    return (
        <div className="relative h-100 overflow-hidden">
            <div className="absolute inset-0 flex justify-center items-center">
                <div className="rotate-8 bg-white border-t border-b py-4 border-gray-300">
                    <p className="marque-scroll font-urbanist text-7xl text-center text-transparent [-webkit-text-stroke:1px_gray] whitespace-nowrap">
                        Next.js . React . TypeScript . Tailwind .
                    </p>
                    <p className="marque-scroll font-urbanist text-7xl text-center text-transparent [-webkit-text-stroke:1px_gray] whitespace-nowrap">
                        REACT DEVELOPER . REACT DEVELOPER . REACT DEVELOPER .
                    </p>
                </div>
            </div>
            <div className="absolute inset-0 flex justify-center items-center">
                <div className="-rotate-8 w-[150%] bg-white border-t border-b py-4 border-gray-300">
                    <p className=" font-urbanist text-7xl text-center text-transparent [-webkit-text-stroke:1px_gray] whitespace-nowrap">
                        REACT DEVELOPER . REACT DEVELOPER . REACT DEVELOPER .
                    </p>
                </div>
            </div>
        </div>
    );
}
