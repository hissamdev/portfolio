export default function AbstractFlexbox() {
    return (
        <section className="py-26">
            <div className="max-w-361.5 w-full aspect-30/6 mx-auto flex flex-col gap-7.75">
                <div className="flex h-full gap-7.75">
                    <div className="bg-gray-200 flex-2 rounded-[23px]"></div>
                    <div className="bg-gray-200 flex-1 rounded-[23px] "></div>
                </div>
                <div className="flex h-full gap-7.75">
                    <div className="bg-gray-200 flex-1 rounded-[23px]"></div>
                    <div className="bg-gray-200 flex-2 rounded-[23px]"></div>
                </div>
            </div>
        </section>
    );
}
