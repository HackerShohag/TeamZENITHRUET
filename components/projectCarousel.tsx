'use client';

import { useState, useEffect, useCallback } from 'react';
import { Project } from "@/types/project";
import ProjectCard from './projectCard';

interface ProjectCarouselProps {
    projects: Project[];
}

export default function ProjectCarousel({ projects }: ProjectCarouselProps) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(false);
    
    const totalProjects = projects.length;
    
    // Get 5 visible indices (circular)
    const getVisibleIndices = useCallback(() => {
        const indices = [];
        for (let i = -2; i <= 2; i++) {
            let index = (currentIndex + i + totalProjects) % totalProjects;
            indices.push(index);
        }
        return indices;
    }, [currentIndex, totalProjects]);

    const visibleIndices = getVisibleIndices();

    const goToNext = useCallback(() => {
        if (isTransitioning) return;
        setIsTransitioning(true);
        setCurrentIndex((prev) => (prev + 1) % totalProjects);
        setTimeout(() => setIsTransitioning(false), 500);
    }, [isTransitioning, totalProjects]);

    const goToPrev = useCallback(() => {
        if (isTransitioning) return;
        setIsTransitioning(true);
        setCurrentIndex((prev) => (prev - 1 + totalProjects) % totalProjects);
        setTimeout(() => setIsTransitioning(false), 500);
    }, [isTransitioning, totalProjects]);

    // Auto-advance carousel every 3 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            goToNext();
        }, 3000);
        return () => clearInterval(interval);
    }, [goToNext]);

    // Scale and opacity based on position from center
    const getCardStyles = (position: number) => {
        // position: -2, -1, 0 (center), 1, 2
        const absPos = Math.abs(position);
        
        const scales = {
            0: 1,      // Center - biggest
            1: 0.85,   // Adjacent
            2: 0.7,    // Edges
        };
        
        const opacities = {
            0: 1,
            1: 0.8,
            2: 0.5,
        };

        const zIndexes = {
            0: 30,
            1: 20,
            2: 10,
        };

        return {
            scale: scales[absPos as keyof typeof scales] || 0.7,
            opacity: opacities[absPos as keyof typeof opacities] || 0.5,
            zIndex: zIndexes[absPos as keyof typeof zIndexes] || 10,
        };
    };

    // Position offset based on position from center
    const getTranslateX = (position: number) => {
        // Spread cards out from center
        const baseOffset = position * 320; // Base spacing
        const extraSpread = position * 20; // Extra spacing for depth effect
        return baseOffset + extraSpread;
    };

    return (
        <div className="relative w-full py-8 overflow-hidden">
            {/* Navigation Buttons */}
            <button
                onClick={goToPrev}
                className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-40 w-12 h-12 rounded-full bg-white dark:bg-slate-800 shadow-lg flex items-center justify-center text-slate-700 dark:text-slate-200 hover:bg-[#E34333] hover:text-white transition-all duration-300 group"
                aria-label="Previous"
            >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
            </button>
            
            <button
                onClick={goToNext}
                className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-40 w-12 h-12 rounded-full bg-white dark:bg-slate-800 shadow-lg flex items-center justify-center text-slate-700 dark:text-slate-200 hover:bg-[#E34333] hover:text-white transition-all duration-300 group"
                aria-label="Next"
            >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
            </button>

            {/* Cards Container */}
            <div className="relative h-[420px] md:h-[450px] flex items-center justify-center">
                {visibleIndices.map((projectIndex, i) => {
                    const position = i - 2; // -2, -1, 0, 1, 2
                    const styles = getCardStyles(position);
                    const translateX = getTranslateX(position);
                    
                    return (
                        <div
                            key={`${projectIndex}-${i}`}
                            className="absolute transition-all duration-500 ease-out"
                            style={{
                                transform: `translateX(${translateX}px) scale(${styles.scale})`,
                                opacity: styles.opacity,
                                zIndex: styles.zIndex,
                                width: '300px',
                            }}
                        >
                            <ProjectCard project={projects[projectIndex]} />
                        </div>
                    );
                })}
            </div>

            {/* Dots Indicator */}
            <div className="flex justify-center gap-2 mt-6">
                {projects.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => {
                            if (!isTransitioning) {
                                setIsTransitioning(true);
                                setCurrentIndex(index);
                                setTimeout(() => setIsTransitioning(false), 500);
                            }
                        }}
                        className={`w-2 h-2 rounded-full transition-all duration-300 ${
                            index === currentIndex 
                                ? 'w-8 bg-[#E34333]' 
                                : 'bg-slate-300 dark:bg-slate-600 hover:bg-[#E34333]/50'
                        }`}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>
        </div>
    );
}