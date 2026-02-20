import { Menu, Sun } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [animatingBorder, setAnimatingBorder] = useState(false);
    const isScrolledRef = useRef(false); // Important to avoid spam

    useEffect(() => {
      const handleScroll = () => {
        const scrollLocation = window.scrollY;

        if (!isScrolledRef.current && scrollLocation > 120) {
          isScrolledRef.current = true;
          setIsScrolled(true);

          setAnimatingBorder(true);
          setTimeout(() => setAnimatingBorder(false), 300)

        } else if (isScrolledRef.current && scrollLocation < 110) {
          isScrolledRef.current = false;
          setIsScrolled(false);

          setAnimatingBorder(true);
          setTimeout(() => setAnimatingBorder(false), 300)
        };
      }

      window.addEventListener('scroll', handleScroll, { passive: true });
      return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            <header className={`px-2.5 md:px-[43px] fixed top-0 w-full flex justify-center items-center z-50 backdrop-blur-sm
                transition-all duration-300 ease-in-out
                ${isScrolled ? "h-[55px]" : "h-[91px]"}`}>

                <div className="w-6xl flex justify-between items-center">
                    <div className="header-left flex items-center gap-[19px]">
                        <div className="icon-div w-[35px] aspect-square flex justify-center items-center rounded-[10.5px] bg-[linear-gradient(-50deg,#6366F1,#9333EA)]">
                            <p className="text-white text-[17px] leading-[21px] font-bold">AH</p>
                        </div>
                    
                        <Sun color="#FACC15" size={28} />
                    </div>
                    <div>
                        <Menu color="black" size={28} />
                    </div>
                </div>
            </header>
        </>
    )
}