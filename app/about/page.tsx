import { Image } from "@nextui-org/image";
import { title } from "@/components/primitives";
import { aboutData } from "@/lib/data/about";
import rover from '@/public/gallery/rover-rendered.png';

export default function AboutPage() {
  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className={title({ className: "font-black" })}>{aboutData.teamName}</h1>
      <h3 className="text-center text-lg py-2">{aboutData.tagline}</h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 max-w-6xl my-10">
        <div className="flex w-full rounded-md items-center justify-center">
          <Image
            classNames={{ wrapper: "flex" }}
            className="flex w-auto"
            width={700}
            src={rover.src}
            alt="Zenith Rover Rendered"
          />
          {/* <Image
            classNames={{ wrapper: "dark:hidden" }}
            className="dark:hidden w-auto"
            width={700}
            src={aboutData.logos.light}
            alt="Annexe Logo"
          /> */}
        </div>
        <div>
          <h2 className="text-lg py-5 text-justify mx-5">{aboutData.description}</h2>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center text-lg py-15 text-justify">
        <div className="flex items-center justify-center flex-col md:flex-row object-cover overflow-hidden">
          <div className="flex flex-col max-w-3xl pr-5 p-3">
            {aboutData.history.map((item, idx) => (
              <p key={idx} className={idx === 1 ? "py-2" : ""}>
                {item.text}
              </p>
            ))}
          </div>
          <div className="flex flex-col p-2 object-cover">
            <Image className="w-full object-cover" src={aboutData.images[0].src} alt={aboutData.images[0].alt} width={900} />
            <h6 className="text-center text-lg font-bold pt-2">{aboutData.images[0].caption}</h6>
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-10 p-2">
          <div className="flex flex-col">
            <Image
              className="h-full w-full sm:h-96"
              src={aboutData.images[1].src}
              alt={aboutData.images[1].alt}
              sizes="220px"
            />
            <h6 className="text-center text-lg font-bold pt-2">{aboutData.images[1].caption}</h6>
          </div>
          <div className="flex flex-col">
            {/* <Image
              radius="none"
              className="h-full sm:h-96"
              src={aboutData.images[2].src}
              alt={aboutData.images[2].alt}
              width={1000}
            /> */}
            {/* <h6 className="text-center text-lg font-bold pt-2">{aboutData.images[2].caption}</h6> */}
          </div>
        </div>
      </div>
    </div>
  );
}