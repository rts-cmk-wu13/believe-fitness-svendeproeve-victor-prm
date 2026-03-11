
"use client"
import { useRef, useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";


export default function CardList({ children, variant = "vertical", }) {
    const scrollRef = useRef(null);
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(false);
    const [showItems, setShowItems] = useState(false);


    // Update scroll buttons visibility
    const updateScrollButtons = () => {
        if (!scrollRef.current) return;
        const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
        setCanScrollLeft(scrollLeft > 0);
        setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 1); // -1 for rounding errors
    };

    const scrollByCard = (direction) => {
        if (!scrollRef.current) return;
        const scrollAmount = 200;
        scrollRef.current.scrollBy({
            left: direction === "right" ? scrollAmount : -scrollAmount,
            behavior: "smooth",
        });
    };

    useEffect(() => {
        const el = scrollRef.current;
        if (!el) return;

        updateScrollButtons(); // initial check
        const handler = () => updateScrollButtons();
        el.addEventListener("scroll", handler);
        window.addEventListener("resize", handler);
        return () => {
            el.removeEventListener("scroll", handler);
            window.removeEventListener("resize", handler);
        };
    }, []);


    const listClass =
        variant === "horizontal"
            ? "grid grid-flow-col auto-cols-[clamp(16rem,32vw,24rem)] gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory"
            : "grid grid-cols-[repeat(auto-fill,minmax(clamp(172px,20vw,240px),1fr))] gap-2";

    return (
        <div className="">
            {/* List */}
            <div ref={scrollRef} className={`${listClass} auto-rows-fr`}>
                {children}
            </div>

            {/* Buttons if horizontal */}
            {
                variant === "horizontal" && (
                    <div className="flex w-full justify-between py-2">
                        {canScrollLeft && (
                            <button
                                className="
                    flex justify-center items-center cursor-pointer border border-fit-reg text-fit-reg 
                    size-8 rounded-full bg-iplay-white/10 hover:opacity-80"
                                onClick={() => scrollByCard("left")}
                            >
                                <FaChevronLeft className="size-3" />
                            </button>
                        )}
                        {canScrollRight && (
                            <button
                                className="
                    flex justify-center items-center cursor-pointer border border-fit-reg text-fit-reg 
                    size-8 rounded-full bg-iplay-white/10 hover:opacity-80 ml-auto"
                                onClick={() => scrollByCard("right")}
                            >
                                <FaChevronRight className="size-3" />
                            </button>
                        )}
                    </div>
                )
            }
        </div>
    );
}