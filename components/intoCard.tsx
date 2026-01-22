import Image from 'next/image'
import React from 'react'
import { FiGlobe, FiMail } from 'react-icons/fi'
import { FaFacebookF, FaLinkedinIn } from 'react-icons/fa'
import { AdvisorInfoProps, TeamMemberInfoProps } from '@/types/member'

type Props = { person?: TeamMemberInfoProps | AdvisorInfoProps }

export default function IntroCard({ person }: Props) {
    // Avoid broad destructuring with {} fallback to keep correct union typing
    const name = person?.name ?? 'Name'
    const avatarSrc = person?.avatarSrc ?? '/placeholder.jpg'
    const designation = person?.designation ?? 'Designation'
    // team only exists on TeamMemberInfoProps
    const team = person && 'team' in person ? (person as TeamMemberInfoProps).team : undefined
    const email = person?.email
    const linkedin = person?.linkedin
    const facebook = person?.facebook
    const website = person?.website

    const badgeText = designation === 'Team Member' ? (team || 'Team') : designation
    // const description = team || 'Consectetur adipiscing elit, sed do eiusmod tempor.'

    return (
        <article
            className="
                flex gap-3 items-start max-w-sm rounded-2xl"
        >
            <div className="relative w-2/6 flex-shrink-0 self-stretch rounded-b-full overflow-hidden">
                <Image
                    src={avatarSrc}
                    alt={name + ' avatar'}
                    className="rounded-xl object-cover"
                    fill
                    sizes="220px"
                    priority
                />
            </div>

            <div className="flex-1 p-4 rounded-2xl shadow dark:shadow-none bg-gray-50 dark:bg-slate-800">
                <div className="flex items-start justify-between">
                    <div>
                        <h3 className="font-serif italic text-lg text-slate-800 dark:text-slate-100">
                            {name}
                        </h3>
                        <span
                            className="
                                mt-1 inline-block text-[11px] font-medium px-3 py-1 rounded-full
                                bg-gradient-to-r from-teal-500 to-cyan-500 text-white
                                shadow-sm
                            "
                        >
                            {badgeText}
                        </span>
                    </div>
                </div>

                <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                    {/* {description} */}
                </p>

                <div className="mt-4 flex items-center gap-3 text-sm">
                    {email && (
                        <a
                            href={`mailto:${email}`}
                            className="
                                flex items-center gap-2 text-slate-600 dark:text-slate-300
                                hover:text-teal-600 dark:hover:text-teal-400 transition-colors
                            "
                            aria-label="Email"
                        >
                            <span className="w-8 h-8 inline-flex items-center justify-center rounded-full bg-teal-50 dark:bg-slate-700 text-teal-600 dark:text-teal-300">
                                <FiMail />
                            </span>
                        </a>
                    )}

                    {linkedin && (
                        <a
                            href={linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="
                                    flex items-center gap-2 text-slate-600 dark:text-slate-300
                                    hover:text-teal-600 dark:hover:text-teal-400 transition-colors
                                "
                            aria-label="LinkedIn"
                        >
                            <span className="w-8 h-8 inline-flex items-center justify-center rounded-full bg-teal-50 dark:bg-slate-700 text-teal-600 dark:text-teal-300">
                                <FaLinkedinIn />
                            </span>
                        </a>
                    )}
                    {facebook && (
                        <a
                            href={facebook}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="
                                flex items-center gap-2 text-slate-600 dark:text-slate-300
                                hover:text-teal-600 dark:hover:text-teal-400 transition-colors
                            "
                            aria-label="Facebook"
                        >
                            <span className="w-8 h-8 inline-flex items-center justify-center rounded-full bg-teal-50 dark:bg-slate-700 text-teal-600 dark:text-teal-300">
                                <FaFacebookF />
                            </span>
                        </a>
                    )}

                    {website && (
                        <a
                            href={website}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="
                                flex items-center gap-2 text-slate-600 dark:text-slate-300
                                hover:text-teal-600 dark:hover:text-teal-400 transition-colors
                            "
                            aria-label="Website"
                        >
                            <span className="w-8 h-8 inline-flex items-center justify-center rounded-full bg-teal-50 dark:bg-slate-700 text-teal-600 dark:text-teal-300">
                                <FiGlobe />
                            </span>
                        </a>
                    )}
                </div>
            </div>
        </article>
    )
}
