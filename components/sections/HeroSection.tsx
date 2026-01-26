'use client';

import { Image } from "@nextui-org/image";
import { Button } from "@nextui-org/button";
import { motion } from "framer-motion";
import NextLink from "next/link";
import zenithDarkLogo from '@/public/zenith-black.png';
import zenithWhiteLogo from '@/public/zenith-white.png';
import rover from '@/public/gallery/rover-rendered.png';
import { formattedStats } from "@/lib/data/stats";

export default function HeroSection() {
    return (
        <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
            {/* Background Pattern */}
            {/* <div className="absolute inset-0 hero-pattern opacity-50" /> */}
            
            {/* Gradient Overlay */}
            {/* <div className="absolute inset-0 bg-gradient-to-br from-white via-transparent to-red-50 dark:from-slate-900 dark:via-slate-900/50 dark:to-slate-800" /> */}
            
            <div className="relative z-10 container mx-auto px-4 py-20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Left Content */}
                    <motion.div 
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center lg:text-left"
                    >
                        {/* Mobile Logo */}
                        <div className="flex justify-center lg:hidden mb-8">
                            <Image 
                                className="hidden dark:block w-48" 
                                src={zenithWhiteLogo.src} 
                                alt="Zenith Logo" 
                            />
                            <Image 
                                className="dark:hidden w-48" 
                                src={zenithDarkLogo.src} 
                                alt="Zenith Logo" 
                            />
                        </div>

                        {/* Team Name */}
                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-black mb-4">
                            <span className="text-gradient">Team ZENITH</span>
                            <br />
                            <span className="text-slate-800 dark:text-white">RUET</span>
                        </h1>

                        {/* Motto */}
                        <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 font-medium mb-8">
                            🚀 Reaching New Heights in Innovation
                        </p>

                        {/* Description */}
                        <p className="text-lg text-slate-600 dark:text-slate-400 mb-10 max-w-xl mx-auto lg:mx-0">
                            A student-led engineering team dedicated to advancing robotics and space exploration 
                            through innovation, research, and practical application.
                        </p>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                            <NextLink href="/support">
                                <Button 
                                    className="btn-zenith text-lg px-8 py-6"
                                    size="lg"
                                >
                                    💖 Support Us
                                </Button>
                            </NextLink>
                            <NextLink href="/join">
                                <Button 
                                    className="btn-zenith-outline text-lg px-8 py-6"
                                    size="lg"
                                    variant="bordered"
                                >
                                    🤝 Join Us
                                </Button>
                            </NextLink>
                        </div>

                        {/* Stats */}
                        <div className="flex flex-wrap justify-center lg:justify-start gap-8 mt-12">
                            <div className="text-center">
                                <span className="text-4xl font-bold text-gradient">{formattedStats.foundedYear}</span>
                                <p className="text-slate-600 dark:text-slate-400">Founded</p>
                            </div>
                            <div className="text-center">
                                <span className="text-4xl font-bold text-gradient">{formattedStats.memberCount}</span>
                                <p className="text-slate-600 dark:text-slate-400">Members</p>
                            </div>
                            <div className="text-center">
                                <span className="text-4xl font-bold text-gradient">{formattedStats.competitionCount}</span>
                                <p className="text-slate-600 dark:text-slate-400">Competitions</p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Content - Rover Image */}
                    <motion.div 
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="relative"
                    >
                        {/* Desktop Logo */}
                        <div className="hidden animate-float lg:flex absolute -top-2 right-24 z-20">
                            <Image 
                                className="hidden dark:block w-32 opacity-80" 
                                src={zenithWhiteLogo.src} 
                                alt="Zenith Logo" 
                            />
                            <Image 
                                className="dark:hidden w-32 opacity-80" 
                                src={zenithDarkLogo.src} 
                                alt="Zenith Logo" 
                            />
                        </div>

                        {/* Rover Image */}
                        <div className="relative animate-float">
                            {/* <div className="absolute inset-0 bg-gradient-to-r from-[#E34333]/20 to-[#A41C14]/10 rounded-full blur-3xl" /> */}
                            <Image
                                src={rover.src}
                                alt="ZENITH Rover"
                                className="relative z-10 w-full max-w-lg mx-auto drop-shadow-2xl"
                            />
                        </div>

                        {/* Decorative Elements */}
                        <div className="absolute -bottom-10 -left-10 w-24 h-24 bg-gradient-to-r from-[#E34333]/30 to-[#A41C14]/30 rounded-full blur-2xl" />
                        <div className="absolute -top-10 right-10 w-24 h-24 bg-gradient-to-r from-[#E34333]/20 to-[#A41C14]/20 rounded-full blur-xl" />
                    </motion.div>
                </div>
            </div>

            {/* Scroll indicator */}
            <motion.div 
                className="absolute bottom-8 left-1/2 -translate-x-1/2"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
            >
                <div className="w-6 h-10 border-2 border-slate-400 dark:border-slate-600 rounded-full flex justify-center">
                    <div className="w-1 h-3 bg-[#E34333] rounded-full mt-2" />
                </div>
            </motion.div>
        </section>
    );
}
