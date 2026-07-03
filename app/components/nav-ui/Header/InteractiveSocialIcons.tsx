import { useMotionValue, motion, useSpring } from "framer-motion";
import { Linkedin } from "lucide-react";

export default function InteractiveSocialIcons() {
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const springX = useSpring(x, { stiffness: 150, damping: 15 });
    const springY = useSpring(y, { stiffness: 150, damping: 15 });

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const rect = e.currentTarget.getBoundingClientRect();

        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const moveX = (mouseX - centerX) * 0.4;
        const moveY = (mouseY - centerY) * 0.4;

        x.set(moveX);
        y.set(moveY);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <div>
            <motion.div
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                style={{ x: springX, y: springY }}
                className="p-7 cursor-pointer"
            >
                <Linkedin className="w-4.5" />
            </motion.div>
        </div>
    );
}
