import {
	NavbarContent,
	NavbarMenuToggle,
	NavbarBrand,
	NavbarItem,
} from "@nextui-org/navbar";

import { Button } from "@nextui-org/button";

import NextLink from "next/link";

import { ThemeSwitch } from "@/components/theme-switch";

import { Logo } from "@/components/icons";
import { NavbarClient, NavLinks } from "./navbar-client";

export const Navbar = () => {

	return (
		<NavbarClient>
			<NavbarContent className="basis-1/5 sm:basis-full" justify="start">
				<NavbarBrand as="li" className="w-12 h-12">
					<NextLink className="flex justify-center items-center gap-2 group h-full w-full" href="/">
						<Logo size={50} />
					</NextLink>
				</NavbarBrand>
				<NavLinks />
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
