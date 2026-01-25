'use client';

import { Card, CardBody, CardHeader } from "@nextui-org/card";
import { Image } from "@nextui-org/image";
import { Link } from "@nextui-org/link";
import { FiMail, FiGlobe } from "react-icons/fi";
import { FaFacebookF, FaLinkedinIn, FaHeart, FaUser } from "react-icons/fa";
import { PersonalContributor } from "@/types/acknowledgement";
import ContributionBadge from "./ContributionBadge";

interface PersonalCardProps {
  person: PersonalContributor;
}

export default function PersonalCard({ person }: PersonalCardProps) {
  return (
    <Card className="w-full max-w-md bg-gradient-to-br from-white to-gray-50 dark:from-slate-800 dark:to-slate-900 shadow-lg card-hover border border-gray-100 dark:border-slate-700">
      <CardHeader className="flex gap-4 pb-0">
        <div className="relative w-20 h-20 flex-shrink-0">
          {person.avatarSrc ? (
            <Image
              src={person.avatarSrc}
              alt={person.name}
              className="rounded-full object-cover w-20 h-20"
              width={80}
              height={80}
            />
          ) : (
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#E34333] to-[#A41C14] flex items-center justify-center">
              <FaUser className="text-white text-3xl" />
            </div>
          )}
        </div>
        <div className="flex flex-col items-start text-left">
          <div className="flex items-center gap-2">
            <FaUser className="text-blue-500 text-sm" />
            <span className="text-xs font-medium text-blue-500 uppercase tracking-wide">Individual</span>
          </div>
          <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 mt-1">
            {person.name}
          </h3>
          <p className="text-sm text-slate-600 dark:text-slate-400">
            {person.designation}
          </p>
          {person.company && (
            <Link
              href={person.companyUrl || "#"}
              isExternal={!!person.companyUrl}
              showAnchorIcon={!!person.companyUrl}
              className="text-sm font-medium text-red-600 dark:text-red-400"
            >
              {person.company}
            </Link>
          )}
        </div>
      </CardHeader>
      <CardBody className="pt-4">
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-2">
            <span className="font-semibold text-slate-700 dark:text-slate-300">
              {person.contribution}
            </span>
          </div>
          
          <ContributionBadge type={person.contributionType} />

          {person.message && (
            <p className="text-sm text-slate-600 dark:text-slate-400 text-justify mt-2 italic">
              &quot;{person.message}&quot;
            </p>
          )}

          <div className="flex items-center gap-3 mt-3">
            {person.email && (
              <Link
                href={`mailto:${person.email}`}
                className="w-9 h-9 inline-flex items-center justify-center rounded-full bg-red-50 dark:bg-slate-700 text-red-600 dark:text-red-300 hover:bg-red-100 dark:hover:bg-slate-600 transition-colors"
                aria-label="Email"
              >
                <FiMail />
              </Link>
            )}
            {person.linkedin && (
              <Link
                href={person.linkedin}
                isExternal
                className="w-9 h-9 inline-flex items-center justify-center rounded-full bg-red-50 dark:bg-slate-700 text-red-600 dark:text-red-300 hover:bg-red-100 dark:hover:bg-slate-600 transition-colors"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn />
              </Link>
            )}
            {person.facebook && (
              <Link
                href={person.facebook}
                isExternal
                className="w-9 h-9 inline-flex items-center justify-center rounded-full bg-red-50 dark:bg-slate-700 text-red-600 dark:text-red-300 hover:bg-red-100 dark:hover:bg-slate-600 transition-colors"
                aria-label="Facebook"
              >
                <FaFacebookF />
              </Link>
            )}
            {person.website && (
              <Link
                href={person.website}
                isExternal
                className="w-9 h-9 inline-flex items-center justify-center rounded-full bg-red-50 dark:bg-slate-700 text-red-600 dark:text-red-300 hover:bg-red-100 dark:hover:bg-slate-600 transition-colors"
                aria-label="Website"
              >
                <FiGlobe />
              </Link>
            )}
          </div>
        </div>
      </CardBody>
    </Card>
  );
}
