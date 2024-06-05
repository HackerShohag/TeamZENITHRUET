import { title } from "@/components/primitives";
import MemberTable from "@/components/memberTable";
import { teamLeaders, teamHead, businessTeamMembers, technicalTeamMembers, electricalTeamMembers, designTeamMembers } from "@/lib/data/team-members";

export default function ProjectsPage() {

	return (
		<div className="flex flex-col">
			<div>
				<div className="inline-block max-w-lg text-center justify-center font-bold">
					<h1 className={title({ className: "font-black" })}>MEET&nbsp;</h1>
					<h1 className={title({ color: "green", className: "font-black" })}>OUR&nbsp;</h1>
					<h1 className={title({ className: "font-black" })}>
						TEAM
					</h1>
				</div>
				<div className="flex my-10 mb-20">
					<MemberTable teamMembers={teamLeaders} teamHead={teamHead} />
				</div>
			</div>
			<h2 className={title({ className: "font-black" })}>Business Team</h2>
			<div className="flex mb-20">
				<MemberTable teamMembers={businessTeamMembers} />
			</div>
			<h2 className={title({ className: "font-black" })}>Technical Team</h2>
			<div className="flex mb-20">
				<MemberTable teamMembers={technicalTeamMembers} />
			</div>
			<h2 className={title({ className: "font-black" })}>Electrical Team</h2>
			<div className="flex mb-20">
				<MemberTable teamMembers={electricalTeamMembers} />
			</div>
			<h2 className={title({ className: "font-black" })}>Design Team</h2>
			<div className="flex mb-20">
				<MemberTable teamMembers={designTeamMembers} />
			</div>
		</div>
	);
}
