import { siteConfig } from "@/config/site";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Contact Us",
	description: "Get in touch with us",
};

export default function ContactPageLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<section className="flex flex-col justify-center gap-4 py-8 md:py-10">
			<div className="inline-block max-full justify-center">
				{children}
			</div>
		</section>
	);
}
