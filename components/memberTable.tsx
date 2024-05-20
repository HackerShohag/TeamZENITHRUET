import React from 'react';
import TeamMemberInfo, { TeamMemberInfoProps } from '@/components/userInfo';

interface MemberTableProps {
    teamMembers: TeamMemberInfoProps[];
}

export default function MemberTable({ teamMembers }: MemberTableProps) {
    return (
        <div className='flex flex-row flex-wrap gap-20'>
            {teamMembers.map((member, index) => (
                <TeamMemberInfo key={index} userInfo={member} />
            ))}
        </div>
    )
}
