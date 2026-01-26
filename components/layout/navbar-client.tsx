"use client";

import { ReactNode } from "react";

import {
    Navbar as NextUINavbar,
    NavbarMenu,
    NavbarMenuItem,
    NavbarItem,
} from "@nextui-org/navbar";
import { Button } from "@nextui-org/button";
import NextLink from "next/link";
import { siteConfig } from "@/config/site";
import { useDisclosure } from "@nextui-org/react";
import { usePathname } from "next/navigation";
import clsx from "clsx";

export interface NavbarClientProps {
    children: ReactNode;
}

// Client component for nav links with active state
export function NavLinks() {
    const pathname = usePathname();
    
    return (
        <ul className="hidden lg:flex gap-1 justify-start ml-4">
            {siteConfig.navItems.map((item) => (
                <NavbarItem key={item.href}>
                    <NextLink
                        className={clsx(
                            "px-4 py-2 rounded-full text-sm font-medium transition-all duration-200",
                            pathname === item.href
                                ? "bg-gradient-to-r from-[#E34333] to-[#A41C14] text-white"
                                : "text-slate-700 dark:text-slate-300 hover:text-[#E34333] dark:hover:text-[#E34333] hover:bg-red-50 dark:hover:bg-slate-800"
                        )}
                        href={item.href}
                    >
                        {item.label}
                    </NextLink>
                </NavbarItem>
            ))}
        </ul>
    );
}

export function NavbarClient({ children }: NavbarClientProps) {

    const pathname = usePathname();
    const { isOpen, onOpenChange, onClose } = useDisclosure();

    return (
        <NextUINavbar 
            isMenuOpen={isOpen} 
            onMenuOpenChange={onOpenChange} 
            maxWidth="xl" 
            position="sticky" 
            isBordered 
            isBlurred={true}
            classNames={{
                base: "bg-white/80 dark:bg-slate-900/80 backdrop-blur-lg",
                wrapper: "px-4",
            }}
        >

            {children}

            <NavbarMenu className="pt-6 bg-white/95 dark:bg-slate-900/95 backdrop-blur-lg">
                <div className="flex flex-col gap-3">
                    {siteConfig.navMenuItems.map((item, index) => (
                        <NavbarMenuItem key={`${item}-${index}`}>
                            <NextLink
                                className={clsx(
                                    "block w-full px-4 py-3 rounded-xl text-lg font-medium transition-all duration-200",
                                    pathname === item.href
                                        ? "bg-gradient-to-r from-[#E34333] to-[#A41C14] text-white"
                                        : "text-slate-700 dark:text-slate-300 hover:bg-red-50 dark:hover:bg-slate-800",
                                )}
                                href={item.href}
                                onClick={onClose}
                            >
                                {item.label}
                            </NextLink>
                        </NavbarMenuItem>
                    ))}
                </div>
                
                {/* Mobile CTA */}
                <div className="mt-6 px-4">
                    <NextLink href="/contact" onClick={onClose}>
                        <Button 
                            className="w-full btn-zenith"
                            size="lg"
                        >
                            Get in Touch
                        </Button>
                    </NextLink>
                </div>
            </NavbarMenu>
        </NextUINavbar>
    );
}
