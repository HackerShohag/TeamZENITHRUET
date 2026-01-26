import React from 'react';
import { AdvisorInfoProps, TeamMemberInfoProps } from '@/types/member';
import IntroCard from '@/components/cards/intoCard';

interface MemberTableProps {
    teamMembers: TeamMemberInfoProps[] | AdvisorInfoProps[];
}

export default function MemberTable({ teamMembers }: MemberTableProps) {
    if (!teamMembers?.length) return null;

    return (
        <div className="grid w-full items-start justify-evenly gap-x-4 gap-y-8 py-4 grid-cols-[repeat(auto-fill,minmax(320px,2fr))]">
            {teamMembers.map((member, idx) => (
            <div key={(member as any).id ?? idx} className="h-full">
                <IntroCard person={member} />
            </div>
            ))}
        </div>
    );
}
