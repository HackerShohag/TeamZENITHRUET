'use client';

import { useState } from 'react';
import { Project } from "@/types/project";
import { Image } from "@nextui-org/image";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure } from "@nextui-org/modal";
import { Button } from "@nextui-org/button";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

interface ProjectCardProps {
    project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();

    const handleClick = () => {
        if (project.description) {
            onOpen();
        }
    };

    return (
        <>
            <div
                onClick={handleClick}
                className={`project-card card-hover bg-white dark:bg-slate-800/50 rounded-2xl overflow-hidden shadow-lg border border-gray-100 dark:border-slate-700 ${project.description ? 'cursor-pointer' : 'cursor-default'}`}
            >
                {/* Image Container */}
                <div className="relative h-48 overflow-hidden group">
                    <Image
                        src={project.images[0]}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        radius="none"
                        removeWrapper
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    {/* Hover overlay with view details */}
                    {project.description && (
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <span className="px-4 py-2 bg-white/90 dark:bg-slate-800/90 rounded-full text-sm font-semibold text-[#E34333]">
                                View Details
                            </span>
                        </div>
                    )}
                </div>

                {/* Content */}
                <div className="p-5">
                    <h3 className="text-lg font-bold text-slate-800 dark:text-slate-100 mb-2 line-clamp-2">
                        {project.title}
                    </h3>
                    {project.date && (
                        <p className="text-sm text-[#E34333] font-medium mb-2">
                            📅 {project.date}
                        </p>
                    )}
                    {project.description && (
                        <p className="text-sm text-slate-600 dark:text-slate-400 line-clamp-3">
                            {project.description}
                        </p>
                    )}
                </div>
            </div>

            {/* Modal Dialog */}
            <Modal 
                isOpen={isOpen} 
                onOpenChange={onOpenChange}
                size="3xl"
                scrollBehavior="inside"
                classNames={{
                    backdrop: "modal-backdrop",
                    base: "bg-white dark:bg-slate-900",
                    header: "border-b border-gray-200 dark:border-slate-700",
                    body: "py-6",
                    footer: "border-t border-gray-200 dark:border-slate-700"
                }}
            >
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1">
                                <h2 className="text-2xl font-bold text-gradient">
                                    {project.title}
                                </h2>
                                {project.date && (
                                    <p className="text-sm text-slate-500 dark:text-slate-400">
                                        📅 {project.date}
                                    </p>
                                )}
                            </ModalHeader>
                            <ModalBody>
                                {/* Image Carousel */}
                                {project.images.length > 0 && (
                                    <div className="mb-6 rounded-xl overflow-hidden">
                                        <Swiper
                                            pagination={{ clickable: true }}
                                            navigation
                                            autoplay={{
                                                delay: 4000,
                                                disableOnInteraction: false,
                                            }}
                                            modules={[Pagination, Navigation, Autoplay]}
                                            className="w-full aspect-video"
                                        >
                                            {project.images.map((image, index) => (
                                                <SwiperSlide key={index}>
                                                    <Image
                                                        src={image}
                                                        alt={`${project.title} - Image ${index + 1}`}
                                                        className="w-full h-full object-cover"
                                                        radius="none"
                                                        removeWrapper
                                                    />
                                                </SwiperSlide>
                                            ))}
                                        </Swiper>
                                    </div>
                                )}
                                
                                {/* Description */}
                                <div className="prose dark:prose-invert max-w-none">
                                    <p className="text-slate-700 dark:text-slate-300 text-justify leading-relaxed">
                                        {project.description}
                                    </p>
                                </div>
                            </ModalBody>
                            <ModalFooter>
                                <Button 
                                    color="danger" 
                                    variant="light" 
                                    onPress={onClose}
                                >
                                    Close
                                </Button>
                                {project.href && (
                                    <Button 
                                        className="btn-zenith"
                                        onPress={() => window.open(project.href, '_blank')}
                                    >
                                        Learn More
                                    </Button>
                                )}
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </>
    );
}
