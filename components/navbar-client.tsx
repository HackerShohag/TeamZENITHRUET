"use client";

import { ReactNode } from "react";

import {
    Navbar as NextUINavbar,
    NavbarMenu,
    NavbarMenuItem,
} from "@nextui-org/navbar";
import NextLink from "next/link";
import { siteConfig } from "@/config/site";
import { useDisclosure } from "@nextui-org/react";
import { usePathname } from "next/navigation";

export interface NavbarClientProps {
    children: ReactNode;
}

export function NavbarClient({ children }: NavbarClientProps) {

    const pathname = usePathname();
    const { isOpen, onOpenChange, onClose } = useDisclosure();

    return (
        <NextUINavbar isMenuOpen={isOpen} onMenuOpenChange={onOpenChange} maxWidth="xl" position="sticky" isBordered isBlurred={false}>

            {children}

            <NavbarMenu>
                <div className="mt-2 flex flex-col gap-2">
                    {siteConfig.navMenuItems.map((item, index) => (
                        <NavbarMenuItem key={`${item}-${index}`}>

                            <NextLink
                                color={
                                    pathname === item.href
                                        ? "primary"
                                        : "foreground"
                                }
                                className="px-2"
                                href={item.href}
                                onClick={onClose}
                            >
                                {item.label}
                            </NextLink>

                        </NavbarMenuItem>
                    ))}
                </div>
            </NavbarMenu>
        </NextUINavbar>
    );
}
