import { title } from "@/components/primitives";
import MemberTable from "@/components/memberTable";
import { teamMembers, teamHead } from "@/lib/data/team-members";


export default function AlumniPage() {
	return (
		<div>
			<div className="inline-block max-w-lg text-center justify-center font-bold">
				<h1 className={title({ className: "font-black" })}>MEET&nbsp;</h1>
				<h1 className={title({ color: "green", className: "font-black" })}>OUR&nbsp;</h1>
				<h1 className={title({ className: "font-black" })}>
					TEAM
				</h1>
			</div>
			<div className="flex my-10">
				<MemberTable teamMembers={teamMembers} teamHead={teamHead} />
			</div>
		</div>
	);
}
