import { title } from "@/components/primitives";
import Project from "@/components/project";
import { projects } from "@/lib/data/projects";

export default function ProjectsPage() {
	return (
		<div className="flex flex-col">
			<h1 className={title({ className: "font-black mb-10" })}>
				Projects
			</h1>
			<div className="flex flex-col gap-5">
				{
					projects.map((project, index) => (
						<Project key={index} project={project} />
					))
				}
			</div>
		</div>
	);
}