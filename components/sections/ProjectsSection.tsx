'use client';

import { motion } from "framer-motion";
import { Link } from "@nextui-org/link";
import { Button } from "@nextui-org/button";
import { projects } from "@/lib/data/projects";
import ProjectCarousel from "../projectCarousel";

export default function ProjectsSection() {
    return (
        <section className="py-20 relative overflow-hidden">
            {/* Background */}
            {/* <div className="absolute inset-0 bg-white dark:bg-slate-900" /> */}
            
            <div className="relative z-10 container mx-auto px-4">
                {/* Section Header */}
                <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-4xl md:text-5xl font-black mb-4">
                        <span className="text-gradient">Our Projects</span>
                    </h2>
                    <div className="section-divider" />
                    <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto mt-4">
                        Explore our journey through various robotics competitions and innovative projects
                    </p>
                </motion.div>

                {/* Projects Carousel */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    <ProjectCarousel projects={projects} />
                </motion.div>

                {/* See More Button */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="text-center mt-8"
                >
                    <Link href="/projects">
                        <Button className="btn-zenith">
                            View All Projects →
                        </Button>
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}
