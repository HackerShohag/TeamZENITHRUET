import { title } from "@/components/primitives";
import { Project } from "@/types/project";
import ImageSlideShow from "@/components/slideshow";
import { Button } from "@nextui-org/button";
import { Link } from "@nextui-org/link";


export default function ProjectItem({ project }: { project: Project }) {

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 border rounded-lg p-5 items-center gap-5">
            <div className="text-left">
                <h1 className={title()}>{project.title}</h1>
               {
                project.date &&  <p className="text-gray-500 my-2">Date: {project.date}</p>
               }
                <p className="text-gray-500 my-2">{project.description}</p>
                <Link isExternal className="w-full" href={project.href}>
                    <Button fullWidth>Read More</Button>
                </Link>
            </div>
            <ImageSlideShow images={project.images} />
        </div>
    );
}