"use client"
import '@splidejs/react-splide/css';
import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';
import { LuChevronLeft, LuChevronRight, LuQuote } from "react-icons/lu";


export default function TestimonialSlider({ slides }) {
    //Guard Clause
    if (!slides) throw new Error("No slider items found")

    return (
        <Splide
            hasTrack={false}

            options={{
                width: "100vw",
                type: 'loop',
                rewind: true,
                autoplay: true,
                interval: 5000,
                perMove: 1,
                perPage: 1,
                gap: '1rem',
                speed: 1000,
            }}

            aria-label="Customer testimonials"
        >

            <SplideTrack className="h-120">
                {slides.map(testimonial => {
                    return (
                        <SplideSlide key={testimonial.id} className="flex items-center justify-center">
                            <div className="flex flex-col items-end max-w-125 p-6 text-fit-ff ">
                                <blockquote className='italic font-inter'>
                                    <LuQuote className="float-left mr-4 size-8 text-fit-reg rotate-180" />
                                    {testimonial.text}
                                    <LuQuote className="float-end m-2 size-8 text-fit-reg" />
                                </blockquote>
                                <address className="text-xl not-italic font-poppins">{testimonial.name}</address>
                            </div>
                        </SplideSlide>
                    )
                })}
            </SplideTrack>

            {/* Custom slider controls */}
            <div className="splide__arrows absolute w-80 left-1/2 -translate-x-1/2 bottom-12">
                {/* Splide rotates the left button by default so they can use the same icon */}
                <button className="splide__arrow splide__arrow--prev transform-none bottom-0 ring-2 ring-fit-ff bg-transparent! opacity-100!"><LuChevronRight className="text-fit-ff! mr-1" /></button>
                <button className="splide__arrow splide__arrow--next transform-none bottom-0 ring-2 ring-fit-ff bg-transparent! opacity-100!"><LuChevronRight className="text-fit-ff! ml-1" /></button>
            </div>

            {/* Custom slider progress bard */}
            <div className="splide__progress absolute w-16 left-1/2 -translate-x-1/2 bg-fit-ff/25 bottom-20 rounded-2xl">
                <div className="splide__progress__bar rounded bg-fit-ff!"></div>
            </div>

        </Splide>

    )
}