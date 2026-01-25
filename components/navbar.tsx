import {
	NavbarContent,
	NavbarMenu,
	NavbarMenuToggle,
	NavbarBrand,
	NavbarItem,
	NavbarMenuItem,
} from "@nextui-org/navbar";

import { link as linkStyles } from "@nextui-org/theme";
import { Button } from "@nextui-org/button";

import { siteConfig } from "@/config/site";
import NextLink from "next/link";
import clsx from "clsx";

import { ThemeSwitch } from "@/components/theme-switch";

import { Logo } from "@/components/icons";
import { NavbarClient } from "./navbar-client";

export const Navbar = () => {

	return (
		<NavbarClient>
			<NavbarContent className="basis-1/5 sm:basis-full" justify="start">
				<NavbarBrand as="li" className="w-12 h-12">
					<NextLink className="flex justify-center items-center gap-2 group h-full w-full" href="/">
						<Logo size={50} />
					</NextLink>
				</NavbarBrand>
				<ul className="hidden lg:flex gap-1 justify-start ml-4">
					{siteConfig.navItems.map((item) => (
						<NavbarItem key={item.href}>
							<NextLink
								className={clsx(
									"px-4 py-2 rounded-full text-sm font-medium transition-all duration-200",
									"text-slate-700 dark:text-slate-300 hover:text-[#E34333] dark:hover:text-[#E34333]",
									"hover:bg-red-50 dark:hover:bg-slate-800"
								)}
								color="foreground"
								href={item.href}
							>
								{item.label}
							</NextLink>
						</NavbarItem>
					))}
				</ul>
			</NavbarContent>

			<NavbarContent
				className="hidden sm:flex basis-1/5 sm:basis-full"
				justify="end"
			>
				<NavbarItem className="hidden sm:flex gap-3 items-center">
					<ThemeSwitch />
					<NextLink href="/contact">
						<Button 
							className="btn-zenith text-sm px-6"
							size="sm"
						>
							Get in Touch
						</Button>
					</NextLink>
				</NavbarItem>
			</NavbarContent>

			<NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
				<ThemeSwitch />
				<NavbarMenuToggle />
			</NavbarContent>

		</NavbarClient>
	);
};
