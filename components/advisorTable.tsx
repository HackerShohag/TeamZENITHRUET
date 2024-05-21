import React from 'react';
import TeamMemberInfo, { TeamMemberInfoProps } from '@/components/userInfo';

interface MemberTableProps {
    advisorMembers: TeamMemberInfoProps[];
}

export default function AdvisorTable({ advisorMembers }: MemberTableProps) {

    return (
        <div className="block">
            <div className='flex flex-row flex-wrap gap-20 mt-10'>
                {advisorMembers.map((member, index) => (
                    <TeamMemberInfo key={index} userInfo={member} />
                ))}
            </div>
        </div>
    )
}
