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
            <div className='grid grid-cols-1 sm:grid-cols-2 justify-center'>
                {teamHead.map((member, index) => (
                    <TeamMemberInfo key={index} userInfo={member} />
                ))}
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-30 mt-10'>
                {teamMembers.map((member, index) => (
                    <TeamMemberInfo key={index} userInfo={member} />
                ))}
            </div>
        </div>
    )
}
