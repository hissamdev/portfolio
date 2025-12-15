'use client';

export default function ConstructionBar({ closeBar }: {closeBar: () => void}) {

    return (
        <>
            <div className="fixed w-full bg-red-500 flex justify-center z-500">
                    <div className="py-2">
                        <p className="text-center text-white md:text-[17px] leading-4">This site is still under construction and uses no-index tags</p>
                    </div>
                    {/*<button onClick={() => { document.cookie = "constructionHidden=true; path=/"; closeBar(); }} className="absolute top-1 right-24 cursor-pointer px-2 py-0 text-white">X</button>*/}
            </div>

            <div className="h-[32px]"></div>
        </>
    )
}