// Centralized team statistics and information
// Update these values in one place to reflect changes across the entire website

import { 
  sysArchitects, 
  teamHead, 
  businessTeamMembers, 
  mechaTeamMembers, 
  electricalTeamMembers, 
  controlTeamMembers, 
  scienceTeamMembers 
} from "./team-members";
import { projects } from "./projects";
import { sponsors } from "./acknowledgements";

// ============================================
// TEAM STATISTICS - Edit these values as needed
// ============================================

export const teamStats = {
  // Founding year
  foundedYear: 2023,
  
  // This will be calculated automatically from team-members.ts
  get totalMembers() {
    return (
      sysArchitects.length +
      teamHead.length +
      businessTeamMembers.length +
      mechaTeamMembers.length +
      electricalTeamMembers.length +
      controlTeamMembers.length +
      scienceTeamMembers.length
    );
  },
  
  // Number of competitions participated (update manually)
  competitionsCount: 5,
  
  // This will be calculated automatically from projects.ts
  get projectsCount() {
    return projects.length;
  },
  
  // This will be calculated automatically from acknowledgements.ts
  get sponsorsCount() {
    return sponsors.length;
  },
  
  // Sub-team counts (calculated automatically)
  get subTeamCounts() {
    return {
      architects: sysArchitects.length,
      heads: teamHead.length,
      business: businessTeamMembers.length,
      mechanical: mechaTeamMembers.length,
      electrical: electricalTeamMembers.length,
      control: controlTeamMembers.length,
      science: scienceTeamMembers.length,
    };
  },
  
  // Total sub-teams
  subTeamsCount: 5, // Design/Mechanical, Electrical, Control, Science, Business
  
  // Awards/Achievements count (update manually)
  achievementsCount: 3,
  
  // Google Form URL for joining the team
  joinFormUrl: "https://forms.gle/YOUR_FORM_ID", // Replace with actual Google Form URL
};

// ============================================
// SOCIAL LINKS - Centralized social media links
// ============================================

export const socialLinks = {
  facebook: "https://www.facebook.com/teamzenithruet",
  linkedin: "https://www.linkedin.com/company/team-zenith-ruet",
  github: "https://github.com/TeamZENITHRUET",
  instagram: "https://instagram.com/teamzenithruet",
  youtube: "https://youtube.com/@teamzenithruet",
  email: "contact@teamzenithruet.info",
};

// ============================================
// CONTACT INFO - Centralized contact information  
// ============================================

export const contactInfo = {
  email: "contact@teamzenithruet.info",
  phone: "+880 1980-827568", // Update with actual phone
  address: "Rajshahi University of Engineering & Technology (RUET), Rajshahi-6204, Bangladesh",
  university: "Rajshahi University of Engineering & Technology",
  universityShort: "RUET",
  city: "Rajshahi",
  country: "Bangladesh",
};

// ============================================
// BRAND ASSETS - Logos and colors
// ============================================

export const brandAssets = {
  logos: {
    dark: "/zenith-white.png",   // Logo for dark mode
    light: "/zenith-black.png",  // Logo for light mode
  },
  colors: {
    primary: "#E34333",
    primaryDark: "#A41C14",
    secondary: "#CC2C1C",
  },
};

// ============================================
// FORMATTED VALUES - Pre-formatted for display
// ============================================

export const formattedStats = {
  get foundedYear() {
    return teamStats.foundedYear.toString();
  },
  get memberCount() {
    return `${teamStats.totalMembers}+`;
  },
  get competitionCount() {
    return `${teamStats.competitionsCount}+`;
  },
  get projectCount() {
    return `${teamStats.projectsCount}+`;
  },
};
