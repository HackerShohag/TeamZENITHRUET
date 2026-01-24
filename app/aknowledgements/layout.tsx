import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Acknowledgements",
	description: "Thank you to all our supporters, sponsors, and donors",
};

export default function AcknowledgementsLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
			<div className="inline-block w-full max-w-6xl text-center justify-center">
				{children}
			</div>
		</section>
	);
}
