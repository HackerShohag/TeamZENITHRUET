import { AcknowledgementProps, PersonalContributor, CompanyContributor } from "@/types/acknowledgement";
import technowrenLogo from "@/public/sponsors/technowren.png";

// Company sponsors/contributors
export const companyContributors: CompanyContributor[] = [
  {
    type: "company",
    name: "Technowren",
    companyUrl: "https://technowren.com",
    avatarSrc: technowrenLogo.src,
    contribution: "All 3D Printed Parts",
    contributionType: "in-kind",
    email: "contact@technowren.com",
    linkedin: "https://www.linkedin.com/company/technowren/",
    facebook: "https://www.facebook.com/technowren/",
    website: "https://technowren.com",
    message: "Donated all 3D printed parts required for our projects, enabling us to bring our mechanical designs to life.",
  },
];

// Personal sponsors/contributors
export const personalContributors: PersonalContributor[] = [
  // {
  //   type: "personal",
  //   name: "Md. Saiam Bin Islam",
  //   designation: "System Architect",
  //   company: "Technowren",
  //   companyUrl: "https://technowren.com",
  //   avatarSrc: "/members/arch/meshkat.png",
  //   contribution: "Technical Consultation & Support",
  //   contributionType: "in-kind",
  //   email: "meshkatsaiam@gmail.com",
  //   linkedin: "https://www.linkedin.com/in/md-saiam-bin-islam-3b0824367/",
  //   facebook: "https://www.facebook.com/saiam.meshkat/",
  //   website: "https://technowren.com",
  //   message: "Provided valuable technical consultation and support throughout our project development.",
  // },
];

// All contributors combined
export const sponsors: AcknowledgementProps[] = [...companyContributors, ...personalContributors];

export const acknowledgementData = {
  title: "We are grateful to you!",
  subtitle: "With Gratitude",
  description: "We extend our heartfelt thanks to all the individuals and organizations who have supported Team ZENITH RUET through their generous contributions, sponsorships, and donations. Your support helps us push the boundaries of innovation and achieve our goals.",
};
