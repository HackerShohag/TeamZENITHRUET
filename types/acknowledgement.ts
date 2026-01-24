export type AcknowledgementProps = {
    name: string;
    designation?: string;
    company?: string;
    companyUrl?: string;
    avatarSrc?: string;
    contribution: string;
    contributionType: "donation" | "sponsorship" | "crowdfunding" | "in-kind";
    email?: string;
    linkedin?: string;
    facebook?: string;
    website?: string;
    message?: string;
}
