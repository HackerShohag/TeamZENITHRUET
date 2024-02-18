export type SiteConfig = typeof siteConfig;

export const siteConfig = {
	name: "Team ANNEXE RUET",
	description: "Our team consists of young, experienced and intellectual individuals who have the experience of work.",
	navItems: [
		{
			label: "About",
			href: "/about",
		},
		{
			label: "Projects",
			href: "/projects",
		},
		{
			label: "Team",
			href: "/team",
		},
		{
			label: "Contact Us",
			href: "/contact",
		}
	],
	navMenuItems: [
		{
			label: "Profile",
			href: "/profile",
		},
		{
			label: "Dashboard",
			href: "/dashboard",
		},
		{
			label: "Projects",
			href: "/projects",
		},
		{
			label: "Team",
			href: "/team",
		},
		{
			label: "Calendar",
			href: "/calendar",
		},
		{
			label: "Settings",
			href: "/settings",
		},
		{
			label: "Help & Feedback",
			href: "/help-feedback",
		},
	],
	links: {
		linkedIn: "https://www.linkedin.com/company/annexe-ruet/",
		github: "https://github.com/Team-Annexe-RUET",
		facebook: "https://www.facebook.com/annexe.ruet",
	},
};
