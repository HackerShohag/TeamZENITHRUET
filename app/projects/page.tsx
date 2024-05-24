import { title } from "@/components/primitives";
import Project from "@/components/project";
import { projects } from "@/lib/data/projects";

export default function ProjectsPage() {
	return (
		<>
			<h1 className={title({ className: "font-black" })}>
				Projects
			</h1>
			<h1 className="text-3xl font-bold text-center my-4"></h1>
			<div className="flex flex-col gap-5">
				{
					projects.map((project, index) => (
						<Project key={index} project={project} />
					))
				}
			</div>
		</>
	);
}