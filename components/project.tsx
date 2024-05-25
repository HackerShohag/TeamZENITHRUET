import { title } from "@/components/primitives";
import { Project } from "@/types/project";
import ImageSlideShow from "@/components/slideshow";
import { Button } from "@nextui-org/button";


export default function ProjectItem({ project }: { project: Project }) {
    const currentDate = new Date().toLocaleDateString();
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 border rounded-lg p-5 items-center gap-5">
            <div className="text-left">
                <h1 className={title()}>{project.title}</h1>
                <p className="text-gray-500 my-2">Date: {currentDate}</p>
                <p className="text-gray-500">{project.description}</p>
                <Button>Read More</Button>
            </div>
            <ImageSlideShow images={project.images} />
        </div>
    );
}