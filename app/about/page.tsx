import { Image } from "@nextui-org/image";
import { title } from "@/components/primitives";

import annexeDarkLogo from '@/public/annexe-black.png';
import annexeWhiteLogo from '@/public/annexe-white.png';


export default function AboutPage() {
	return (
		<div>
			<h1 className={title({ className: "font-black" })}>
				Team ANNEXE RUET
			</h1>

			<div className="grid grid-cols-1 sm:grid-cols-2 max-w-6xl my-10">
				<div className="flex w-full border rounded-md items-center justify-center">
					<Image classNames={{ wrapper: "hidden dark:sm:flex" }} className="hidden dark:flex w-auto" width={700} src={annexeWhiteLogo.src} alt="Annexe Logo" />
					<Image classNames={{ wrapper: "dark:hidden" }} className="dark:hidden w-auto" width={700} src={annexeDarkLogo.src} alt="Annexe Logo" />
				</div>
				<div>
					<h2 className="text-lg py-5 text-justify mx-5">
						We are a passionate and ambitious student team at RUET (Rajshahi University of Engineering & Technology), specializing in automotive projects including Formula Student Go Kart and NASA Human Rover challenges. With dedication and creativity at their core, they tirelessly pursue their dreams, pushing the boundaries of innovation in engineering. Through teamwork and perseverance, Team Annexe strives to make a mark in the world of automotive design and competition, embodying the spirit of determination and ingenuity.
					</h2>
				</div>
			</div>
		</div>
	);
}
