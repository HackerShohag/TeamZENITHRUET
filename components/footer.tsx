import React from 'react';
import { Link } from "@nextui-org/link";
import NextLink from 'next/link';
import { Divider } from "@nextui-org/react";
import { siteConfig } from '@/config/site';
import { FaFacebook, FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { Image } from "@nextui-org/image";

import zenithWhiteLogo from '@/public/zenith-white.png';
import { teamHead } from '@/lib/data/team-members';

function FooterSection() {
    return (
        <div className="flex flex-col items-center w-full h-max justify-center bg-rose-950/80 dark:bg-rose-950/80 p-7">
            <div className="flex flex-col items-center justify-center">
                <div className="flex justify-center gap-5 mb-3">
                    <Link isExternal href={siteConfig.links.facebook} aria-label="Twitter">
                        <FaFacebook className="text-2xl text-default-300 dark:text-default-500" />
                    </Link>
                    <Link isExternal href={siteConfig.links.linkedIn} aria-label="Discord">
                        <FaLinkedinIn className="text-2xl text-default-300 dark:text-default-500" />
                    </Link>
                    <Link isExternal href={siteConfig.links.github} aria-label="Github">
                        <FaGithub className="text-2xl text-default-300 dark:text-default-500" />
                    </Link>
                </div>

                <div className="flex justify-center gap-3 flex-wrap">
                    <NextLink
                        className='text-gray-300 dark:text-gray-400 hover:text-slate-100 hover:font-bold transition-colors duration-200'
                        href="/"
                        aria-label='Home Page'
                    >
                        Home
                    </NextLink>
                    <NextLink
                        className='text-gray-300 dark:text-gray-400 hover:text-slate-100 hover:font-bold transition-colors duration-200'
                        href="/projects"
                        aria-label='Projects Page'
                    >
                        Projects
                    </NextLink>
                    <NextLink
                        className='text-gray-300 dark:text-gray-400 hover:text-slate-100 hover:font-bold transition-colors duration-200'
                        href="/team"
                        aria-label='Team Page'
                    >
                        Team
                    </NextLink>
                    {/* <NextLink
                        className='text-gray-300 dark:text-gray-400 hover:text-slate-100 hover:font-bold transition-colors duration-200'
                        href="/advisor"
                        aria-label='Advisor Page'
                    >
                        Advisors
                    </NextLink> */}
                    <NextLink
                        className='text-gray-300 dark:text-gray-400 hover:text-slate-100 hover:font-bold transition-colors duration-200'
                        href="/contact"
                        aria-label='Contact Us'
                    >
                        Contact Us
                    </NextLink>
                </div>

                <Divider className='bg-gray-500 my-3' />

                <div className="grid grid-cols-1 sm:grid-cols-2">
                    {
                        teamHead.map((member, index) => (
                            <>
                                <div key={index} className="flex items-center gap-5 mx-3">
                                    <div className={`w-full ${index === 0 ? 'text-center sm:text-right' : 'text-center sm:text-left'}`}>
                                        <p className="text-gray-300 dark:text-gray-400 font-bold">{member.name}</p>
                                        <p className="text-gray-400 dark:text-gray-500">{member.designation}</p>
                                        <Link href={`mailto:${member.email}`} className="text-gray-400 dark:text-gray-500">{member.email}</Link>
                                    </div>
                                    {
                                        index === teamHead.length - 1 || <Divider className='bg-gray-500 my-5 hidden sm:flex' orientation='vertical' />
                                    }
                                </div>
                                {
                                    index === teamHead.length - 1 || <Divider className='flex bg-gray-500 my-3 sm:hidden' />
                                }

                            </>
                        ))
                    }
                </div>
                <Divider className='bg-gray-500 my-3' />

                <Link href={`mailto:${siteConfig.links.mail}`} className="mb-3 text-gray-300 dark:text-gray-400">{siteConfig.links.mail}</Link>
                <Image className="max-w-36" radius='none' src={zenithWhiteLogo.src} alt="Zenith Logo" />
            </div>
        </div>
    )
}

export default FooterSection