import { socialLinks, contactInfo, teamStats } from "@/lib/data/stats";

export type SiteConfig = typeof siteConfig;

export const siteConfig = {
	name: "Team ZENITH RUET",
	description: "A student-led engineering team at RUET dedicated to advancing robotics and space exploration through innovation, research, and practical application.",
	navItems: [
		{
			label: "Home",
			href: "/",
		},
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
			label: "Acknowledgements",
			href: "/aknowledgements",
		},
		{
			label: "Contact",
			href: "/contact",
		}
	],
	navMenuItems: [
		{
			label: "Home",
			href: "/",
		},
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
			label: "Acknowledgements",
			href: "/aknowledgements",
		},
		{
			label: "Contact",
			href: "/contact",
		}
	],
	links: {
		linkedIn: socialLinks.linkedin,
		github: socialLinks.github,
		facebook: socialLinks.facebook,
		mail: contactInfo.email,
		docs: '',
		joinForm: teamStats.joinFormUrl,
	},
};
