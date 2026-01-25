'use client';

import { motion } from "framer-motion";
import { Link } from "@nextui-org/link";
import { Button } from "@nextui-org/button";
import { aboutData } from "@/lib/data/about";
import { FaRocket, FaEye, FaBullseye } from "react-icons/fa";

export default function AboutSection() {
    return (
        <section className="py-20 relative overflow-hidden">
            {/* Background */}
            {/* <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white dark:from-slate-800 dark:to-slate-900" /> */}
            
            <div className="relative z-10 container mx-auto px-4">
                {/* Section Header */}
                <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-black mb-4">
                        <span className="text-gradient">About Us</span>
                    </h2>
                    <div className="section-divider" />
                    <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto mt-4">
                        {aboutData.tagline}
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <p className="text-lg text-slate-700 dark:text-slate-300 mb-8 leading-relaxed text-justify">
                            {aboutData.description}
                        </p>

                        {/* Vision & Mission Cards */}
                        <div className="space-y-4 mb-8">
                            <div className="flex items-start gap-4 p-4 bg-white dark:bg-slate-800 rounded-xl shadow-lg border-l-4 border-[#E34333]">
                                <div className="p-3 bg-red-50 dark:bg-slate-700 rounded-lg">
                                    <FaEye className="text-2xl text-[#E34333]" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-slate-800 dark:text-white mb-2">Our Vision</h3>
                                    <p className="text-slate-600 dark:text-slate-400">
                                        To become a leading robotics and space exploration team in Bangladesh, 
                                        inspiring the next generation of engineers and innovators.
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4 p-4 bg-white dark:bg-slate-800 rounded-xl shadow-lg border-l-4 border-[#E34333]">
                                <div className="p-3 bg-red-50 dark:bg-slate-700 rounded-lg">
                                    <FaBullseye className="text-2xl text-[#E34333]" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-slate-800 dark:text-white mb-2">Our Mission</h3>
                                    <p className="text-slate-600 dark:text-slate-400">
                                        To push the boundaries of engineering excellence through innovative 
                                        robotics solutions and competing at international platforms.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <Link href="/about">
                            <Button className="btn-zenith">
                                Learn More About Us →
                            </Button>
                        </Link>
                    </motion.div>

                    {/* Stats/Highlights Grid */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="grid grid-cols-2 gap-4"
                    >
                        {[
                            { icon: "🤖", title: "Mars Rover", desc: "IRDC 2024 Competitor" },
                            { icon: "⚽", title: "Soccer Bots", desc: "Multiple Competition Wins" },
                            { icon: "🛸", title: "Line Followers", desc: "Advanced LFR Systems" },
                            { icon: "🎓", title: "RUET Pride", desc: "Top Engineering Team" },
                        ].map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: 0.1 * index }}
                                className="card-hover p-6 bg-white dark:bg-slate-800 rounded-2xl shadow-lg text-center"
                            >
                                <span className="text-4xl mb-4 block">{item.icon}</span>
                                <h4 className="text-lg font-bold text-slate-800 dark:text-white mb-1">
                                    {item.title}
                                </h4>
                                <p className="text-sm text-slate-600 dark:text-slate-400">
                                    {item.desc}
                                </p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
