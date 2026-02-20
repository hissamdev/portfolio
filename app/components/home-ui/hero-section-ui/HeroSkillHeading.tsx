'use client'

export default function HeroSkillHeading({ text, scrollPosition }: { text: string, scrollPosition: number }) {
    const scrollToProjects = () => {
        window.scrollTo({
            top: scrollPosition,
            behavior: 'smooth',
        })
    }

    return (
        <h3 onClick={scrollToProjects} className="self-start text-[17.5px] leading-[21px] font-bold cursor-pointer">{text}</h3>
    )
}