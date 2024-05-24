import Project from "@/components/project";
import { projects } from "@/lib/data/projects";

export default function ProjectsPage() {
	const currentDate = new Date().toLocaleDateString();
	return (
		<>
			<h1 className="text-3xl font-bold text-center my-4">Projects</h1>
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