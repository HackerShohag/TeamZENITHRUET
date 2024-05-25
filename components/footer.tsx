import React from 'react';
import { Link } from "@nextui-org/link";
import { Divider } from "@nextui-org/react";
import { siteConfig } from '@/config/site';
import { FaFacebook, FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { Image } from "@nextui-org/image";

import annexeWhiteLogo from '@/public/annexe-white.png';
import { teamHead } from '@/lib/data/team-members';

function FooterSection() {
    return (
        <div className="flex flex-col items-center w-full h-max justify-center bg-gray-600 dark:bg-gray-900 p-7">
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
                    <Link
                        className='text-gray-300 dark:text-gray-400 hover:text-slate-100 hover:font-bold transition-colors duration-200'
                        href="/"
                    >
                        Home
                    </Link>
                    <Link
                        className='text-gray-300 dark:text-gray-400 hover:text-slate-100 hover:font-bold transition-colors duration-200'
                        href="/projects"
                    >
                        Projects
                    </Link>
                    <Link
                        className='text-gray-300 dark:text-gray-400 hover:text-slate-100 hover:font-bold transition-colors duration-200'
                        href="/team"
                    >
                        Team
                    </Link>
                    <Link
                        className='text-gray-300 dark:text-gray-400 hover:text-slate-100 hover:font-bold transition-colors duration-200'
                        href="/advisor"
                    >
                        Advisors
                    </Link>
                    <Link
                        className='text-gray-300 dark:text-gray-400 hover:text-slate-100 hover:font-bold transition-colors duration-200'
                        href="/contact"
                    >
                        Contact Us
                    </Link>
                </div>

                <Divider className='bg-gray-500 my-5' />

                <div className="grid grid-cols-2">
                    {
                        teamHead.map((member, index) => (
                            <div key={index} className="flex items-center gap-5 mx-3">
                                <div>
                                    <p className="text-gray-300 dark:text-gray-400 font-bold">{member.name}</p>
                                    <p className="text-gray-400 dark:text-gray-500">{member.designation}</p>
                                    <Link href={`mailto:${member.email}`} className="text-gray-400 dark:text-gray-500">{member.email}</Link>
                                </div>
                                {
                                    index === teamHead.length - 1 ? null : <Divider className='bg-gray-500 my-5' orientation='vertical' />
                                }
                            </div>
                        ))
                    }
                </div>
                <Link href={`mailto:${siteConfig.links.mail}`} className="my-3 text-gray-300 dark:text-gray-400">{siteConfig.links.mail}</Link>
                <Image className="max-w-36" radius='none' src={annexeWhiteLogo.src} alt="Annexe Logo" />
            </div>
        </div>
    )
}

export default FooterSection