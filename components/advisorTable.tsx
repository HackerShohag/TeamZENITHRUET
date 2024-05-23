import React from 'react';
import TeamMemberInfo from '@/components/userInfo';
import { TeamMemberInfoProps } from '@/types/member';

interface MemberTableProps {
    advisorMembers: TeamMemberInfoProps[];
}

export default function AdvisorTable({ advisorMembers }: MemberTableProps) {

    return (
        <div className="block">
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-45 mt-10'>
                {advisorMembers.map((member, index) => (
                    <TeamMemberInfo key={index} userInfo={member} />
                ))}
            </div>
        </div>
    )
}
