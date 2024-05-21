import React from 'react';
import TeamMemberInfo, { TeamMemberInfoProps } from '@/components/userInfo';

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
            <div className='flex flex-row flex-wrap gap-20 mt-10'>
                {teamMembers.map((member, index) => (
                    <TeamMemberInfo key={index} userInfo={member} />
                ))}
            </div>
        </div>
    )
}
