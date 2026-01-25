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
          console.log("Header has been shrunk");

        } else if (isScrolledRef.current && scrollLocation < 110) {
          isScrolledRef.current = false;
          setIsScrolled(false);

          setAnimatingBorder(true);
          setTimeout(() => setAnimatingBorder(false), 300)
          console.log("Header has been expanded");
        };
      }

      window.addEventListener('scroll', handleScroll, { passive: true });
      return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            <header className={`px-[43px] fixed top-0 w-full z-50 flex justify-between items-center bg-[#0b0e14]/85 backdrop-blur-sm
                transition-all duration-300 ease-in-out
                ${isScrolled ? "h-[55px]" : "h-[91px]"}
                ${animatingBorder ? "border-b border-white" : "border-b border-gray-700"}`}>

                <div className="header-left flex items-center gap-[19px]">
                    <div className="icon-div w-[35px] aspect-square flex justify-center items-center rounded-[10.5px] bg-[linear-gradient(-50deg,#6366F1,#9333EA)]">
                        <p className="text-white text-[17px] leading-[21px] font-bold">AH</p>
                    </div>
                    
                    <Sun color="#FACC15" size={28} />
                </div>

                <div>
                    <Menu color="white" size={28} />
                </div>
            </header>
        </>
    )
}