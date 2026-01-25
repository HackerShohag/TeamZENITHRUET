'use client';

import { motion } from "framer-motion";
import { title } from "@/components/primitives";
import { AcknowledgementProps, isCompanyContributor, isPersonalContributor } from "@/types/acknowledgement";
import CompanyCard from "./CompanyCard";
import PersonalCard from "./PersonalCard";

interface AcknowledgementSectionProps {
  title: string;
  contributors: AcknowledgementProps[];
  emptyMessage?: string;
}

export default function AcknowledgementSection({
  title: sectionTitle,
  contributors,
  emptyMessage,
}: AcknowledgementSectionProps) {
  if (contributors.length === 0 && !emptyMessage) return null;

  const companyContributors = contributors.filter(isCompanyContributor);
  const personalContributors = contributors.filter(isPersonalContributor);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="flex w-full flex-col items-center justify-center my-10"
    >
      <div className="flex max-w-xl text-center justify-center font-bold mb-8">
        <h2 className={title({ size: "sm", color: "zenith", className: "font-black" })}>
          {sectionTitle}
        </h2>
      </div>
      
      {contributors.length > 0 ? (
        <div className="w-full space-y-12">
            <div className="w-full">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
                {companyContributors.length > 0 && companyContributors.map((company, index) => (
                  <CompanyCard key={`company-${company.name}-${index}`} company={company} />
                ))}
                {personalContributors.length > 0 && personalContributors.map((person, index) => (
                  <PersonalCard key={`personal-${person.name}-${index}`} person={person} />
                ))}
              </div>
            </div>
        </div>
      ) : (
        emptyMessage && (
          <p className="text-slate-500 dark:text-slate-400 italic">{emptyMessage}</p>
        )
      )}
    </motion.div>
  );
}
