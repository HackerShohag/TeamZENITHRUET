import { title } from "@/components/primitives";
import MemberTable from "@/components/memberTable";
import { teamMembers } from "@/lib/data/team-members";


export default function ProjectsPage() {
	return (
		<div>
			<h1 className={title({ className: 'text-center' })}>Meet the team</h1>
			<div className="flex my-10">
				<MemberTable teamMembers={teamMembers} />
			</div>
		</div>
	);
}
