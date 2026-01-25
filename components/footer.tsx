import React from 'react';
import { Link } from "@nextui-org/link";
import NextLink from 'next/link';
import { Divider } from "@nextui-org/react";
import { siteConfig } from '@/config/site';
import { FaFacebook, FaGithub, FaLinkedinIn, FaEnvelope, FaHeart } from 'react-icons/fa';
import { Image } from "@nextui-org/image";

import zenithWhiteLogo from '@/public/zenith-white.png';
import { teamHead } from '@/lib/data/team-members';
import { contactInfo, socialLinks } from '@/lib/data/stats';
import mars_cover from '@/public/gallery/mars-cover.jpg';

function FooterSection() {
    return (
        <footer 
            className="w-full relative"
            style={{ 
                backgroundImage: `url(${mars_cover.src})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
            }}
        >
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/90 to-black/70"></div>
            
            <div className="relative z-10 w-full">
                {/* Main Footer Content */}
                <div className="container mx-auto max-w-7xl px-6 py-12">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {/* Brand */}
                        <div className="lg:col-span-1">
                            <NextLink href="/" className="inline-block mb-4">
                                <Image className="w-24" radius='none' src={zenithWhiteLogo.src} alt="Zenith Logo" />
                            </NextLink>
                            <p className="text-gray-400 text-sm mb-4">
                                A student-led engineering team dedicated to advancing robotics and space exploration.
                            </p>
                            <div className="flex gap-3">
                                <Link 
                                    isExternal 
                                    href={socialLinks.facebook} 
                                    className="w-10 h-10 bg-white/10 hover:bg-[#E34333] rounded-full flex items-center justify-center transition-all"
                                >
                                    <FaFacebook className="text-white" />
                                </Link>
                                <Link 
                                    isExternal 
                                    href={socialLinks.linkedin}
                                    className="w-10 h-10 bg-white/10 hover:bg-[#E34333] rounded-full flex items-center justify-center transition-all"
                                >
                                    <FaLinkedinIn className="text-white" />
                                </Link>
                                <Link 
                                    isExternal 
                                    href={socialLinks.github}
                                    className="w-10 h-10 bg-white/10 hover:bg-[#E34333] rounded-full flex items-center justify-center transition-all"
                                >
                                    <FaGithub className="text-white" />
                                </Link>
                            </div>
                        </div>

                        {/* Quick Links */}
                        <div>
                            <h3 className="text-white font-bold mb-4">Quick Links</h3>
                            <ul className="space-y-2">
                                {siteConfig.navItems.map((item) => (
                                    <li key={item.href}>
                                        <NextLink
                                            className="text-gray-400 hover:text-[#E34333] transition-colors text-sm"
                                            href={item.href}
                                        >
                                            {item.label}
                                        </NextLink>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Contact Info */}
                        <div>
                            <h3 className="text-white font-bold mb-4">Contact</h3>
                            <ul className="space-y-3 text-sm">
                                <li className="text-gray-400">
                                    📍 {contactInfo.university}, {contactInfo.city}
                                </li>
                                <li className="text-gray-400">
                                    📞 {contactInfo.phone}
                                </li>
                                <li>
                                    <Link 
                                        href={`mailto:${contactInfo.email}`} 
                                        className="text-gray-400 hover:text-[#E34333] transition-colors flex items-center gap-2"
                                    >
                                        <FaEnvelope /> {contactInfo.email}
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        {/* Team Leads */}
                        <div>
                            <h3 className="text-white font-bold mb-4">Team Leadership</h3>
                            <div className="space-y-4">
                                {teamHead.slice(0, 2).map((member, index) => (
                                    <div key={index} className="text-sm">
                                        <p className="text-white font-medium">{member.name}</p>
                                        <p className="text-gray-500">{member.designation}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <Divider className="bg-white/10" />
                <div className="container mx-auto max-w-7xl px-6 py-6">
                    <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                        <p className="text-gray-500 text-sm text-center sm:text-left">
                            © {new Date().getFullYear()} Team ZENITH RUET. All rights reserved.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default FooterSection