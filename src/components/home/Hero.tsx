"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function Hero() {
    return (
        <section className="relative px-2 pt-[48px] pb-2">
            {/* Main Container with rounded corners */}
            <div className="relative w-full min-h-[90vh] rounded-[30px] md:rounded-[40px] overflow-hidden flex flex-col justify-between p-6 md:p-12 text-white">

                {/* Background Video inside the container */}
                <div className="absolute inset-0 -z-20">
                    <video
                        src="https://framerusercontent.com/assets/G0NwzP4bivPvK55b3ubxNslUs.mp4"
                        poster="https://framerusercontent.com/images/ZJ6HLYoAxMXsbBJCnggXHSRug.jpg"
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full h-full object-cover filter grayscale opacity-70"
                    />
                </div>
                {/* Noise Overlay */}
                <div
                    className="absolute inset-0 -z-10 opacity-[0.05] pointer-events-none"
                    style={{ backgroundImage: 'url("https://framerusercontent.com/images/rR6HYXBrMmX4cRpXfXUOvpvpB0.png")' }}
                ></div>

                {/* Main Content */}
                <div className="w-full flex-1 flex flex-col pt-10">
                    {/* Title Area */}
                    <div className="w-full relative">
                        <h1 className="text-[24vw] leading-[0.75] font-bold tracking-tighter uppercase font-sans text-white mx-[-2vw]">
                            fabrica
                        </h1>
                        {/* Registered Symbol */}
                        <div className="absolute top-[8%] right-[12%] w-[12vw] h-[12vw] border-[0.8vw] border-white rounded-full flex items-center justify-center">
                            <span className="text-[8vw] font-bold leading-none translate-y-[-5%] font-sans">R</span>
                        </div>
                    </div>

                    <div className="w-full grid grid-cols-12 gap-4 mt-8 relative">
                        {/* Grid Markers */}
                        <div className="absolute -top-12 left-0 w-full flex justify-between px-2 text-white/50 text-2xl font-light">
                            <span>+</span>
                            <span>+</span>
                            <span>+</span>
                            <span>+</span>
                        </div>

                        {/* Studio Text */}
                        <div className="col-span-12 md:col-span-6 flex justify-center md:justify-end pr-[10vw]">
                            <span className="text-[8vw] font-semibold tracking-tighter leading-none -mt-[4vw]">Studio</span>
                        </div>

                        {/* Right column placeholder/spacer */}
                        <div className="col-span-6 hidden md:block"></div>
                    </div>

                    {/* Content Grid */}
                    <div className="w-full grid grid-cols-1 md:grid-cols-12 gap-6 mt-auto pb-12 items-end">
                        {/* Left Text */}
                        <div className="col-span-12 md:col-span-5 relative">
                            {/* Marker above text */}
                            <div className="absolute -top-24 left-0 text-white/50 text-2xl font-light">+</div>

                            <h3 className="text-xl md:text-2xl font-medium leading-tight tracking-tight max-w-md">
                                No generic websites. No empty <br />
                                <span className="font-bold text-white">marketing promises.</span> <span className="text-neutral-400">Just tools and strategies that help your business grow and your brand shine.</span>
                            </h3>
                            <div className="mt-6 text-xs text-neutral-500 font-mono">
                                © 2025 fabrica® Studio
                            </div>
                        </div>

                        {/* Center Spacer / Marker */}
                        <div className="col-span-12 md:col-span-2 flex justify-center items-end pb-24 relative">
                            <div className="absolute top-0 text-white/50 text-2xl font-light">+</div>
                        </div>

                        {/* Right Side: Services & Card */}
                        <div className="col-span-12 md:col-span-5 flex flex-col items-end gap-20 relative">
                            {/* Services List */}
                            <div className="text-right flex flex-col gap-1 text-base md:text-lg font-medium leading-relaxed mr-12">
                                <p>Branding and Identity</p>
                                <p>Social Media Marketing</p>
                                <p>Web Design and Development</p>
                                <p>SEO Optimization</p>
                            </div>

                            {/* Marker above card */}
                            <div className="absolute top-0 right-full mr-12 text-white/50 text-2xl font-light">+</div>

                            {/* Team Card */}
                            <div className="bg-white rounded-[24px] p-2 pr-6 flex items-center gap-5 max-w-sm">
                                <div className="relative w-20 h-24 rounded-[18px] overflow-hidden shrink-0 bg-neutral-200">
                                    <Image
                                        src="https://framerusercontent.com/images/XBirhPxPnqDiGkAtvDrRCiK4pS8.jpg"
                                        alt="Team Lead"
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <div className="flex flex-col justify-center min-w-[140px]">
                                    <div className="text-[11px] font-bold text-black uppercase tracking-wide mb-0.5">Team Lead</div>
                                    <div className="text-[10px] text-neutral-400 font-bold mb-1">at fabrica®</div>
                                    <div className="text-xl font-bold text-black tracking-tight leading-none mb-3">Lauren Thompson</div>

                                    <button className="bg-black text-white text-[10px] font-bold rounded-full py-1.5 px-4 flex items-center justify-between w-28 group hover:bg-neutral-800 transition-colors">
                                        <span>Let's talk</span>
                                        <div className="w-1.5 h-1.5 rounded-full bg-white ml-2" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
