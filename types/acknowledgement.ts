// Base type for common properties
type BaseAcknowledgement = {
    name: string;
    avatarSrc?: string;
    contribution: string;
    contributionType: "donation" | "sponsorship" | "crowdfunding" | "in-kind";
    email?: string;
    linkedin?: string;
    facebook?: string;
    website?: string;
    message?: string;
}

// Personal contributor type - requires designation
export type PersonalContributor = BaseAcknowledgement & {
    type: "personal";
    designation: string;
    company?: string;
    companyUrl?: string;
}

// Company contributor type - no designation needed
export type CompanyContributor = BaseAcknowledgement & {
    type: "company";
    companyUrl?: string;
}

// Union type for all acknowledgements
export type AcknowledgementProps = PersonalContributor | CompanyContributor;

// Type guard functions
export const isPersonalContributor = (contributor: AcknowledgementProps): contributor is PersonalContributor => {
    return contributor.type === "personal";
}

export const isCompanyContributor = (contributor: AcknowledgementProps): contributor is CompanyContributor => {
    return contributor.type === "company";
}
