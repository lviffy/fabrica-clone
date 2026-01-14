"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useState } from "react";

export function BottomBlurOverlay() {
    const { scrollY } = useScroll();
    const opacity = useTransform(scrollY, [0, 500], [0, 1]);
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) return null;

    return (
        <motion.div
            style={{
                opacity,
                maskImage: 'linear-gradient(to top, black 20%, transparent 100%)',
                WebkitMaskImage: 'linear-gradient(to top, black 20%, transparent 100%)'
            }}
            className="pointer-events-none fixed bottom-0 left-0 z-[100] h-24 w-full bg-gradient-to-t from-background to-transparent backdrop-blur-[2px]"
        />
    );
}
