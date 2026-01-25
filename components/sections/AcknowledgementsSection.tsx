'use client';

import { motion } from "framer-motion";
import { Link } from "@nextui-org/link";
import { Button } from "@nextui-org/button";
import { Card, CardBody, CardHeader } from "@nextui-org/card";
import { Image } from "@nextui-org/image";
import { FaHeart, FaBuilding, FaUser } from "react-icons/fa";
import { sponsors, acknowledgementData } from "@/lib/data/acknowledgements";
import { isCompanyContributor } from "@/types/acknowledgement";

export default function AcknowledgementsSection() {
    return (
        <section className="py-20 relative overflow-hidden">
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
                        <span className="text-gradient">Acknowledgements</span>
                    </h2>
                    <div className="section-divider" />
                    <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto mt-4">
                        {acknowledgementData.description}
                    </p>
                </motion.div>

                {/* Thanks Banner */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="max-w-3xl mx-auto mb-12"
                >
                    <div className="bg-gradient-to-r from-[#EB5443] to-[#A41C14] rounded-2xl p-6 shadow-lg">
                        <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-white">
                            <FaHeart className="text-4xl animate-pulse" />
                            <div className="text-center md:text-left">
                                <h3 className="text-2xl font-bold">Thank You for Your Support!</h3>
                                <p className="text-red-100">
                                    Every contribution helps us achieve our mission.
                                </p>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Sponsors Preview */}
                {sponsors.length > 0 && (
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
                    >
                        {sponsors.slice(0, 3).map((sponsor, index) => {
                            const isCompany = isCompanyContributor(sponsor);
                            return (
                                <Card 
                                    key={index} 
                                    className="card-hover bg-white dark:bg-slate-800/50 border border-gray-100 dark:border-slate-700"
                                >
                                    <CardHeader className="flex gap-4 pb-0">
                                        {sponsor.avatarSrc ? (
                                            <Image
                                                src={sponsor.avatarSrc}
                                                alt={sponsor.name}
                                                className={`${isCompany ? 'rounded-xl' : 'rounded-full'} object-cover w-16 h-16`}
                                                width={64}
                                                height={64}
                                            />
                                        ) : (
                                            <div className={`w-16 h-16 ${isCompany ? 'rounded-xl' : 'rounded-full'} bg-gradient-to-br from-[#E34333] to-[#A41C14] flex items-center justify-center`}>
                                                {isCompany ? (
                                                    <FaBuilding className="text-white text-2xl" />
                                                ) : (
                                                    <FaUser className="text-white text-2xl" />
                                                )}
                                            </div>
                                        )}
                                        <div>
                                            <div className="flex items-center gap-2 mb-1">
                                                {isCompany ? (
                                                    <FaBuilding className="text-[#E34333] text-xs" />
                                                ) : (
                                                    <FaUser className="text-blue-500 text-xs" />
                                                )}
                                                <span className={`text-xs font-medium ${isCompany ? 'text-[#E34333]' : 'text-blue-500'} uppercase tracking-wide`}>
                                                    {isCompany ? 'Company' : 'Individual'}
                                                </span>
                                            </div>
                                            <h4 className="text-lg font-bold text-slate-800 dark:text-white">
                                                {sponsor.name}
                                            </h4>
                                            {!isCompany && 'designation' in sponsor && (
                                                <p className="text-sm text-slate-600 dark:text-slate-400">
                                                    {sponsor.designation}
                                                </p>
                                            )}
                                        </div>
                                    </CardHeader>
                                    <CardBody>
                                        <div className="flex items-center gap-2 mb-2">
                                            <FaHeart className="text-red-500" />
                                            <span className="font-semibold text-slate-700 dark:text-slate-300">
                                                {sponsor.contribution}
                                            </span>
                                        </div>
                                        {sponsor.message && (
                                            <p className="text-sm text-slate-600 dark:text-slate-400 italic line-clamp-2">
                                                &quot;{sponsor.message}&quot;
                                            </p>
                                        )}
                                    </CardBody>
                                </Card>
                            );
                        })}
                    </motion.div>
                )}

                {/* See More Button */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="text-center"
                >
                    <Link href="/aknowledgements">
                        <Button className="btn-zenith">
                            View All Acknowledgements →
                        </Button>
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}
