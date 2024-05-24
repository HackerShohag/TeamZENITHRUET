import { Image } from "@nextui-org/image";
import { title } from "@/components/primitives";

import annexeDarkLogo from '@/public/annexe-black.png';
import annexeWhiteLogo from '@/public/annexe-white.png';


export default function AboutPage() {
	return (
		<div>
			<h1 className={title()}>Team Annexe RUET</h1>

			{/* Team Annexe RUET */}
			{/* <h2 className="text-2xl py-5"></h2> */}
			<div className="grid grid-cols-1 sm:grid-cols-2 max-w-6xl my-10">
				<div className="flex w-full border rounded-md items-center justify-center">
					<Image classNames={{ wrapper: "hidden dark:sm:flex max-sm:hidden" }} className="hidden dark:flex max-sm:hidden w-auto" width={700} src={annexeWhiteLogo.src} alt="Annexe Logo" />
					<Image classNames={{ wrapper: "dark:hidden max-sm:hidden" }} className="dark:hidden max-sm:hidden w-auto" width={700} src={annexeDarkLogo.src} alt="Annexe Logo" />
				</div>
				<div>
					<h2 className="text-lg py-5 text-left mx-5">
						We are a passionate and ambitious student team at RUET (Rajshahi University of Engineering & Technology), specializing in automotive projects including Formula Student Go Kart and NASA Human Rover challenges. With dedication and creativity at their core, they tirelessly pursue their dreams, pushing the boundaries of innovation in engineering. Through teamwork and perseverance, Team Annexe strives to make a mark in the world of automotive design and competition, embodying the spirit of determination and ingenuity.
					</h2>
				</div>
			</div>
		</div>
	);
}
