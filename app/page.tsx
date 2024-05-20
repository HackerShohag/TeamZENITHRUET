import ImageSlideShow from "@/components/slideshow";

export default function Home() {

	const images = [
		'/gallery/1.jpg',
		'/gallery/2.jpg',
		'/gallery/3.jpg',
		'/gallery/4.jpg',
	];


	return (
		<section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">

			<ImageSlideShow images={images} />

		</section>
	);
}
