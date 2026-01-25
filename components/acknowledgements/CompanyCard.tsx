'use client';

import { Card, CardBody, CardHeader } from "@nextui-org/card";
import { Image } from "@nextui-org/image";
import { Link } from "@nextui-org/link";
import { FiMail, FiGlobe } from "react-icons/fi";
import { FaFacebookF, FaLinkedinIn, FaHeart, FaBuilding } from "react-icons/fa";
import { CompanyContributor } from "@/types/acknowledgement";
import ContributionBadge from "./ContributionBadge";

interface CompanyCardProps {
  company: CompanyContributor;
}

export default function CompanyCard({ company }: CompanyCardProps) {
  return (
    <Card className="w-full max-w-md bg-gradient-to-br from-white to-gray-50 dark:from-slate-800 dark:to-slate-900 shadow-lg card-hover border border-gray-100 dark:border-slate-700">
      <CardHeader className="flex gap-4 pb-0">
        <div className="relative w-20 h-20 flex-shrink-0">
          {company.avatarSrc ? (
            <Image
              src={company.avatarSrc}
              alt={company.name}
              className="rounded-xl object-cover w-20 h-20"
              width={80}
              height={80}
            />
          ) : (
            <div className="w-20 h-20 rounded-xl bg-gradient-to-br from-[#E34333] to-[#A41C14] flex items-center justify-center">
              <FaBuilding className="text-white text-3xl" />
            </div>
          )}
        </div>
        <div className="flex flex-col items-start text-left">
          <div className="flex items-center gap-2">
            <FaBuilding className="text-[#E34333] text-sm" />
            <span className="text-xs font-medium text-[#E34333] uppercase tracking-wide">Company</span>
          </div>
          <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 mt-1">
            {company.name}
          </h3>
          {company.companyUrl && (
            <Link
              href={company.companyUrl}
              isExternal
              showAnchorIcon
              className="text-sm font-medium text-red-600 dark:text-red-400"
            >
              Visit Website
            </Link>
          )}
        </div>
      </CardHeader>
      <CardBody className="pt-4">
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-2">
            <span className="font-semibold text-slate-700 dark:text-slate-300">
              {company.contribution}
            </span>
          </div>
          
          <ContributionBadge type={company.contributionType} />

          {company.message && (
            <p className="text-sm text-slate-600 dark:text-slate-400 text-justify mt-2 italic">
              &quot;{company.message}&quot;
            </p>
          )}

          <div className="flex items-center gap-3 mt-3">
            {company.email && (
              <Link
                href={`mailto:${company.email}`}
                className="w-9 h-9 inline-flex items-center justify-center rounded-full bg-red-50 dark:bg-slate-700 text-red-600 dark:text-red-300 hover:bg-red-100 dark:hover:bg-slate-600 transition-colors"
                aria-label="Email"
              >
                <FiMail />
              </Link>
            )}
            {company.linkedin && (
              <Link
                href={company.linkedin}
                isExternal
                className="w-9 h-9 inline-flex items-center justify-center rounded-full bg-red-50 dark:bg-slate-700 text-red-600 dark:text-red-300 hover:bg-red-100 dark:hover:bg-slate-600 transition-colors"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn />
              </Link>
            )}
            {company.facebook && (
              <Link
                href={company.facebook}
                isExternal
                className="w-9 h-9 inline-flex items-center justify-center rounded-full bg-red-50 dark:bg-slate-700 text-red-600 dark:text-red-300 hover:bg-red-100 dark:hover:bg-slate-600 transition-colors"
                aria-label="Facebook"
              >
                <FaFacebookF />
              </Link>
            )}
            {company.website && (
              <Link
                href={company.website}
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
