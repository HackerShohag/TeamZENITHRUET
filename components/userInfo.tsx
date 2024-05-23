import React from 'react'
import { Link, User } from '@nextui-org/react'
import { FaEnvelope, FaFacebook, FaGlobe, FaLinkedin } from 'react-icons/fa'

export interface TeamMemberInfoProps {
    name: string;
    designation: string;
    avatarSrc?: string;
    email?: string;
    linkedin?: string;
    facebook?: string;
    website?: string;
}

export default function TeamMemberInfo({ userInfo }: { userInfo: TeamMemberInfoProps | undefined }) {
    const { name, designation, avatarSrc, email, linkedin, facebook, website } = userInfo || {};

    return (
        <div>
            <User
                name={name}
                description={designation}
                className='flex flex-col items-center my-1'
                classNames={{
                    wrapper: "flex flex-col items-center",
                    name: "text-2xl font-bold",
                    description: "text-lg"
                }}
                avatarProps={{
                    isBordered: true,
                    color: "success",
                    src: avatarSrc,
                    className: "w-40 h-40 text-large"
                }}
            />
            <div className="flex flex-row w-full gap-3 justify-center">
                <Link href={`mailto:${email}`} isExternal><FaEnvelope className="text-lg text-gray-600" /></Link>
                {linkedin && <Link href={linkedin} isExternal> <FaLinkedin className="text-lg text-gray-600" /></Link>}
                {facebook && <Link href={facebook} isExternal> <FaFacebook className="text-lg text-gray-600" /></Link>}
                {website && <Link href={website} isExternal> <FaGlobe className="text-lg text-gray-600" /></Link>}
            </div>
        </div>
    )
}
