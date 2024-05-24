import { subtitle, title } from "@/components/primitives";
import { Image } from "@nextui-org/image";
import { Link } from "@nextui-org/link";
import { button as buttonStyles } from "@nextui-org/theme";

import SlideCard from "@/components/slideCard";
import annexeDarkLogo from '@/public/annexe-black.png';
import annexeWhiteLogo from '@/public/annexe-white.png';

const images = [
	'/gallery/nasa1.jpg',
	'/gallery/fkdc1.jpg',
	'/gallery/chegRepublic1.jpg',
	'/gallery/nasa2.jpg',
	'/gallery/chegRepublic2.jpg',
	'/gallery/recruitment1.jpg',
	'/gallery/fkdc2.jpg',
	'/gallery/fkdc3.jpg',
	'/gallery/nasa3.jpg',
	'/gallery/seminar2.jpg',
	'/gallery/nasa6.jpg',
	'/gallery/chegRepublic3.jpg',
	'/gallery/fkdc4.jpg',
	'/gallery/nasa4.jpg',
	'/gallery/seminar1.jpg',
	'/gallery/nasa5.jpg',
	'/gallery/fkdc5.jpg',
];

export default function Home() {

	return (
		<section className="flex flex-col items-center justify-center gap-4 py-5 md:py-10">

			<Image className="hidden dark:flex dark:sm:hidden h-auto" width={250} src={annexeWhiteLogo.src} alt="Annexe Logo" />
			<Image className="dark:hidden sm:hidden h-auto" width={250} src={annexeDarkLogo.src} alt="Annexe Logo" />

			<div className="flex flex-row w-full justify-between">
				<div className="flex flex-col w-full">
					<div className="flex flex-row justify-between items-center">
						<div className="">
							<h1 className={title({ size: 'lg', class: "font-black" })}>
								Team ANNEXE RUET
							</h1>
							<br />
							<h2 className={subtitle({ class: "text-gray-800 dark:text-gray-200 max-w-3xl" })}>
								Our team consists of young, experienced and interactual individuals who have the experience of the work and invention.
							</h2>
						</div>
						<Image classNames={{ wrapper: "hidden dark:sm:flex max-sm:hidden" }} className="hidden dark:flex max-sm:hidden w-auto max-w-80" width={400} src={annexeWhiteLogo.src} alt="Annexe Logo" />
						<Image classNames={{ wrapper: "dark:hidden max-sm:hidden" }} className="dark:hidden max-sm:hidden w-auto max-w-80" width={400} src={annexeDarkLogo.src} alt="Annexe Logo" />
					</div>
				</div>

			</div>
			<div className="flex w-full gap-3">
				<Link isExternal href="/" className={buttonStyles({ class: "rounded text-white font-bold", color: "success", radius: "full", variant: "shadow", size: 'lg' })}>Join the team</Link>
				{/* <Link isExternal href="/" className={buttonStyles({ class: "rounded", variant: "bordered", radius: "full" })}>{props.buttons?.at(1)?.label}</Link> */}
			</div>

			{/* <ImageSlideShow images={images} /> */}
			<SlideCard images={images} />

		</section>
	);
}
