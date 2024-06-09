import { Image } from "@nextui-org/image";
import { title } from "@/components/primitives";

import annexeDarkLogo from "@/public/annexe-black.png";
import annexeWhiteLogo from "@/public/annexe-white.png";

import fkdc5 from "@/public/gallery/fkdc5.jpg";
import recruitment1 from "@/public/gallery/nasa5.jpg";
import chegRepublic1 from "@/public/gallery/chegRepublic1.jpg";

export default function AboutPage() {
  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className={title({ className: "font-black" })}>Team ANNEXE RUET</h1>
      <h3 className="text-center text-lg py-2">
        A Student-Led Engineering Team with a Future-Oriented Vision can be
        summarized in one word TEAM ANNEX RUET.
      </h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 max-w-6xl my-10">
        <div className="flex w-full rounded-md items-center justify-center">
          <Image
            classNames={{ wrapper: "hidden dark:flex" }}
            className="hidden dark:flex w-auto"
            width={700}
            src={annexeWhiteLogo.src}
            alt="Annexe Logo"
          />
          <Image
            classNames={{ wrapper: "dark:hidden" }}
            className="dark:hidden w-auto"
            width={700}
            src={annexeDarkLogo.src}
            alt="Annexe Logo"
          />
        </div>
        <div>
          <h2 className="text-lg py-5 text-justify mx-5">
            We are a passionate and ambitious student team at RUET (Rajshahi
            University of Engineering & Technology), specializing in automotive
            projects including Formula Student Go Kart and NASA Human Rover
            challenges. With dedication and creativity at their core, they
            tirelessly pursue their dreams, pushing the boundaries of innovation
            in engineering. Through teamwork and perseverance, Team Annexe
            strives to make a mark in the world of automotive design and
            competition, embodying the spirit of determination and ingenuity.
          </h2>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center text-lg py-15 text-justify">
        <div className="flex items-center justify-center flex-col md:flex-row">
          <div className="flex flex-col max-w-3xl pr-5 p-3">
            <p>
              {" "}
              A group of bright and enthusiastic young engineering students from
              RUET formed the team in 2019 with the goal of designing,
              constructing, and participating in various engineering contests
              across the world. For the very first time, the team aimed to
              compete in the Formulae Student Design competition, which is
              regarded as one of the most renowned engineering contests in the
              world. The crew was encouraged by their accomplishments to
              continue competing in engineering challenges, such as the NASA
              Human Rover Challenge, Formula Czech Republic 2020 championship,
              Formulae Kart Design Challenge Season-7, etc.
            </p>
            <p className="py-2">
              {" "}
              This competitions not only have gained respect and admiration from
              our peers and business experts but also have helped to build a
              strong background in automotive, business, rover design sector.
              These sets of skills and experiences along with teamwork are going
              to help us further more to accomplish our next goal.
            </p>
          </div>
          <div className="flex flex-col p-2">
            <Image radius="none" src={fkdc5.src} alt="FKDC5" width={1000} />
            <h6 className="text-center text-lg font-bold pt-2">
              Formula Kart Design Challenge S7
            </h6>
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-10 p-2">
          <div className="flex flex-col">
            <Image
              radius="none"
              className="h-full sm:h-96"
              src={chegRepublic1.src}
              alt="FKDC5"
              width={1000}
            />
            <h6 className="text-center text-lg font-bold pt-2">
              Formula Student Czech Republic 2020
            </h6>
          </div>
          <div className="flex flex-col">
            <Image
              radius="none"
              className="h-full sm:h-96"
              src={recruitment1.src}
              alt="FKDC5"
              width={1000}
            />
            <h6 className="text-center text-lg font-bold pt-2">
              NASA Human Rover Challenge
            </h6>
          </div>
        </div>
      </div>
    </div>
  );
}
