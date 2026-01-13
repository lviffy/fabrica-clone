"use client";

import Image from "next/image";

const stats = [
    { value: "5+", label: "Years of experience", id: "01" },
    { value: "27+", label: "Successful projects", id: "02" },
    { value: "99%", label: "Client satisfaction", id: "03" },
    { value: "12+", label: "Industry awards", id: "04" }
];

export function Experiences() {
    return (
        <section className="py-24 px-4 md:px-6 bg-[#0a0a0a] text-white">
            {/* Header */}
            <div className="flex flex-col md:flex-row justify-between items-start mb-16">
                <div className="flex flex-col gap-2 mb-6 md:mb-0">
                    <div className="w-10 h-10 rounded-full bg-neutral-800 flex items-center justify-center">
                        <div className="w-4 h-4 bg-white rounded-sm" />
                    </div>
                    <span className="font-medium">Our journey</span>
                </div>

                <div className="flex flex-col items-end">
                    <h2 className="text-4xl md:text-6xl font-semibold tracking-tighter">Experiences.</h2>
                    <span className="text-xl md:text-2xl font-semibold opacity-40">(8)</span>
                </div>
            </div>

            {/* Main Content */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
                <div>
                    <h3 className="text-3xl md:text-5xl font-semibold leading-tight tracking-tight mb-8">
                        We bring together creativity,{" "}
                        <span className="opacity-50">
                            strategy, and technology to deliver exceptional digital experiences.
                        </span>
                    </h3>
                </div>

                <div className="flex flex-col gap-6">
                    <p className="text-lg text-neutral-400 leading-relaxed">
                        With years of experience across industries, we understand what it takes to create impactful digital solutions. Our team combines creative vision with technical expertise to help businesses grow and thrive in the digital landscape.
                    </p>
                    <p className="text-lg text-neutral-400 leading-relaxed">
                        From startups to established enterprises, we've partnered with clients worldwide to transform their digital presence and achieve measurable results.
                    </p>
                </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                {stats.map((stat) => (
                    <div
                        key={stat.id}
                        className="bg-neutral-900 rounded-[30px] p-6 md:p-8 flex flex-col justify-between aspect-square"
                    >
                        <div className="flex justify-between items-start">
                            <span className="text-4xl md:text-5xl font-semibold tracking-tighter">{stat.value}</span>
                            <span className="text-xs font-semibold opacity-40">{stat.id}</span>
                        </div>
                        <p className="text-sm font-medium opacity-60 text-right mt-auto">{stat.label}</p>
                    </div>
                ))}
            </div>

            {/* Testimonial Card */}
            <div className="mt-12 bg-neutral-900 rounded-[30px] p-6 md:p-8 flex flex-col md:flex-row gap-6 items-start">
                <div className="relative w-20 h-20 rounded-2xl overflow-hidden shrink-0">
                    <Image
                        src="https://framerusercontent.com/images/XBirhPxPnqDiGkAtvDrRCiK4pS8.jpg"
                        alt="Client"
                        fill
                        className="object-cover"
                    />
                </div>
                <div className="flex-1">
                    <p className="text-lg md:text-xl text-neutral-300 leading-relaxed mb-4">
                        "Working with fabrica® was a game-changer for our business. Their attention to detail and strategic approach helped us achieve results beyond our expectations."
                    </p>
                    <div className="flex items-center gap-2">
                        <span className="font-semibold">Michael Chen</span>
                        <span className="text-neutral-500">– CEO at TechFlow</span>
                    </div>
                </div>
            </div>
        </section>
    );
}
