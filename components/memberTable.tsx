import React from 'react';
import TeamMemberInfo from '@/components/userInfo';
import { TeamMemberInfoProps } from '@/types/member';

interface MemberTableProps {
    teamMembers: TeamMemberInfoProps[];
    teamHead: TeamMemberInfoProps[];
}

export default function MemberTable({ teamMembers, teamHead }: MemberTableProps) {

    return (
        <div className="block">
            <div className='flex flex-row flex-wrap justify-center gap-20'>
                {teamHead.map((member, index) => (
                    <TeamMemberInfo key={index} userInfo={member} />
                ))}
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-20 mt-10'>
                {teamMembers.map((member, index) => (
                    <TeamMemberInfo key={index} userInfo={member} />
                ))}
            </div>
        </div>
    )
}
