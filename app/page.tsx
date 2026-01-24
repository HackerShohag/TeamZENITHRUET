import { subtitle, title } from "@/components/primitives";
import { Image } from "@nextui-org/image";
import { Link } from "@nextui-org/link";
import { button as buttonStyles } from "@nextui-org/theme";

import SlideCard from "@/components/slideCard";
import zenithDarkLogo from '@/public/zenith-black.png';
import zenithWhiteLogo from '@/public/zenith-white.png';

const images = [
	'/gallery/grinding.jpg',
	'/gallery/members-24-25.jpg',
	'/gallery/grinding.jpg',
	'/gallery/cuet1.jpg',
	'/gallery/brac.jpg',
	'/gallery/cuet2.jpg',
	'/gallery/cuet5.jpg',
	'/gallery/members-24-25.jpg',

];

export default function Home() {

	return (
		<section className="flex flex-col items-center justify-center gap-4 py-5 md:py-10">

			<Image className="hidden dark:flex dark:sm:hidden h-auto" width={250} src={zenithWhiteLogo.src} alt="Zenith Logo" />
			<Image className="dark:hidden sm:hidden h-auto" width={250} src={zenithDarkLogo.src} alt="Zenith Logo" />

			<div className="flex flex-row w-full justify-between">
				<div className="flex flex-col w-full">
					<div className="flex flex-row justify-between items-center">
						<div className="">
							<h1 className={title({ size: 'lg', class: "font-black", color: "pink"})}>
								Team ZENITH RUET
							</h1>
							<br />
							<h2 className={subtitle({ class: "text-gray-800 dark:text-gray-200 max-w-3xl" })}>
								Our team consists of young, experienced and interactual individuals who have the experience of the work and invention.
							</h2>
						</div>
						<Image classNames={{ wrapper: "hidden dark:sm:flex max-sm:hidden" }} className="hidden dark:flex max-sm:hidden w-auto max-w-80" width={400} src={zenithWhiteLogo.src} alt="Zenith Logo" />
						<Image classNames={{ wrapper: "dark:hidden max-sm:hidden" }} className="dark:hidden max-sm:hidden w-auto max-w-80" width={400} src={zenithDarkLogo.src} alt="Zenith Logo" />
					</div>
				</div>

			</div>
			<div className="flex w-full gap-3">
				<Link isExternal href="/" className={buttonStyles({ class: "rounded text-white font-bold", color: "danger", radius: "full", variant: "shadow", size: 'lg' })}>Join the team</Link>
				{/* <Link isExternal href="/" className={buttonStyles({ class: "rounded", variant: "bordered", radius: "full" })}>{props.buttons?.at(1)?.label}</Link> */}
			</div>

			{/* <ImageSlideShow images={images} /> */}
			<SlideCard images={images} />

		</section>
	);
}
