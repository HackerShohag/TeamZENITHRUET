"use client";

import { title } from "@/components/primitives";
import { Card, CardBody, CardHeader } from "@nextui-org/card";
import { Image } from "@nextui-org/image";
import { Link } from "@nextui-org/link";
import { Chip } from "@nextui-org/chip";
import { FiMail, FiGlobe, FiExternalLink } from "react-icons/fi";
import { FaFacebookF, FaLinkedinIn, FaHeart } from "react-icons/fa";
import {
  sponsors,
  donors,
  crowdfunders,
  acknowledgementData,
} from "@/lib/data/acknowledgements";
import { AcknowledgementProps } from "@/types/acknowledgement";

function ContributionBadge({ type }: { type: AcknowledgementProps["contributionType"] }) {
  const colors: Record<string, "success" | "primary" | "secondary" | "warning"> = {
    donation: "success",
    sponsorship: "primary",
    crowdfunding: "secondary",
    "in-kind": "warning",
  };

  const labels: Record<string, string> = {
    donation: "Donation",
    sponsorship: "Sponsorship",
    crowdfunding: "Crowdfunding",
    "in-kind": "In-Kind Contribution",
  };

  return (
    <Chip color={colors[type]} size="sm" variant="flat">
      {labels[type]}
    </Chip>
  );
}

function AcknowledgementCard({ person }: { person: AcknowledgementProps }) {
  return (
    <Card className="w-full max-w-md bg-gradient-to-br from-gray-50 to-gray-100 dark:from-slate-800 dark:to-slate-900 shadow-lg hover:shadow-xl transition-shadow duration-300">
      <CardHeader className="flex gap-4 pb-0">
        <div className="relative w-20 h-20 flex-shrink-0">
          <Image
            src={person.avatarSrc || "/placeholder.jpg"}
            alt={person.name}
            className="rounded-full object-cover w-20 h-20"
            width={80}
            height={80}
          />
        </div>
        <div className="flex flex-col items-start text-left">
          <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100">
            {person.name}
          </h3>
          {person.designation && (
            <p className="text-sm text-slate-600 dark:text-slate-400">
              {person.designation}
            </p>
          )}
          {person.company && (
            <Link
              href={person.companyUrl || "#"}
              isExternal
              showAnchorIcon
              className="text-sm font-medium text-rose-600 dark:text-rose-400"
            >
              {person.company}
            </Link>
          )}
        </div>
      </CardHeader>
      <CardBody className="pt-4">
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-2">
            <FaHeart className="text-rose-500" />
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
                className="w-9 h-9 inline-flex items-center justify-center rounded-full bg-rose-50 dark:bg-slate-700 text-rose-600 dark:text-rose-300 hover:bg-rose-100 dark:hover:bg-slate-600 transition-colors"
                aria-label="Email"
              >
                <FiMail />
              </Link>
            )}
            {person.linkedin && (
              <Link
                href={person.linkedin}
                isExternal
                className="w-9 h-9 inline-flex items-center justify-center rounded-full bg-rose-50 dark:bg-slate-700 text-rose-600 dark:text-rose-300 hover:bg-rose-100 dark:hover:bg-slate-600 transition-colors"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn />
              </Link>
            )}
            {person.facebook && (
              <Link
                href={person.facebook}
                isExternal
                className="w-9 h-9 inline-flex items-center justify-center rounded-full bg-rose-50 dark:bg-slate-700 text-rose-600 dark:text-rose-300 hover:bg-rose-100 dark:hover:bg-slate-600 transition-colors"
                aria-label="Facebook"
              >
                <FaFacebookF />
              </Link>
            )}
            {person.website && (
              <Link
                href={person.website}
                isExternal
                className="w-9 h-9 inline-flex items-center justify-center rounded-full bg-rose-50 dark:bg-slate-700 text-rose-600 dark:text-rose-300 hover:bg-rose-100 dark:hover:bg-slate-600 transition-colors"
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

function AcknowledgementSection({
  title: sectionTitle,
  contributors,
  emptyMessage,
}: {
  title: string;
  contributors: AcknowledgementProps[];
  emptyMessage?: string;
}) {
  if (contributors.length === 0 && !emptyMessage) return null;

  return (
    <div className="flex w-full flex-col items-center justify-center my-10">
      <div className="flex max-w-xl text-center justify-center font-bold mb-8">
        <h2 className={title({ size: "sm", color: "pink", className: "font-black" })}>
          {sectionTitle}
        </h2>
      </div>
      {contributors.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center w-full">
          {contributors.map((person, index) => (
            <AcknowledgementCard key={`${person.name}-${index}`} person={person} />
          ))}
        </div>
      ) : (
        emptyMessage && (
          <p className="text-slate-500 dark:text-slate-400 italic">{emptyMessage}</p>
        )
      )}
    </div>
  );
}

export default function AcknowledgementsPage() {
  return (
    <div className="flex flex-col w-full items-center justify-center">
      {/* Header */}
      <div className="flex flex-col items-center justify-center mb-10">
        <h1 className={title({ color: "pink", className: "font-black" })}>
          {acknowledgementData.title}
        </h1>
        <p className="text-lg text-slate-600 dark:text-slate-400 mt-2">
          {acknowledgementData.subtitle}
        </p>
        <p className="max-w-3xl text-center text-slate-600 dark:text-slate-400 mt-4 px-4">
          {acknowledgementData.description}
        </p>
      </div>

      {/* Special Thanks Banner */}
      <div className="w-full max-w-4xl bg-gradient-to-r from-rose-500 to-pink-500 rounded-2xl p-6 mb-10 shadow-lg">
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-white">
          <FaHeart className="text-4xl animate-pulse" />
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold">Thank You for Your Support!</h3>
            <p className="text-rose-100">
              Every contribution, big or small, helps us achieve our mission.
            </p>
          </div>
        </div>
      </div>

      {/* Sponsors Section */}
      <AcknowledgementSection
        title="Sponsors & In-Kind Contributors"
        contributors={sponsors}
      />

      {/* Donors Section */}
      {donors.length > 0 && (
        <AcknowledgementSection
          title="Our Generous Donors"
          contributors={donors}
        />
      )}

      {/* Crowdfunders Section */}
      {crowdfunders.length > 0 && (
        <AcknowledgementSection
          title="Crowdfunding Supporters"
          contributors={crowdfunders}
        />
      )}

      {/* Call to Action */}
      <div className="flex flex-col items-center justify-center mt-16 mb-10 p-8 bg-gray-50 dark:bg-slate-800 rounded-2xl max-w-2xl">
        <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-100 mb-4">
          Want to Support Us?
        </h3>
        <p className="text-slate-600 dark:text-slate-400 text-center mb-6">
          If you&apos;d like to support Team ZENITH RUET through donations, sponsorships, or in-kind contributions, we&apos;d love to hear from you!
        </p>
        <Link
          href="/contact"
          className="px-6 py-3 bg-gradient-to-r from-rose-500 to-pink-500 text-white font-semibold rounded-full hover:from-rose-600 hover:to-pink-600 transition-all shadow-md hover:shadow-lg"
        >
          Get in Touch
        </Link>
      </div>
    </div>
  );
}
