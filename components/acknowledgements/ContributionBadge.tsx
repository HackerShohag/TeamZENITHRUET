'use client';

import { Chip } from "@nextui-org/chip";
import { AcknowledgementProps } from "@/types/acknowledgement";

interface ContributionBadgeProps {
  type: AcknowledgementProps["contributionType"];
}

export default function ContributionBadge({ type }: ContributionBadgeProps) {
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
