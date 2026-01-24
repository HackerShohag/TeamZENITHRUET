import { title } from "@/components/primitives";
import MemberTable from "@/components/memberTable";
import {
	sysArchitects,
	teamHead,
	businessTeamMembers,
	mechaTeamMembers,
	electricalTeamMembers,
	controlTeamMembers,
	scienceTeamMembers,
} from "@/lib/data/team-members";
import TeamMemberInfo from "@/components/userInfo";
import { advisors } from "@/lib/data/avisors";

export default function ProjectsPage() {
	return (
		<div className="flex flex-col w-full items-center justify-center">

			{/* Advisors */}
			<div className="flex w-full flex-col items-center justify-center">
				<div className="flex max-w-xl text-center justify-center font-bold">
					<h1 className={title({ color: "zenith", className: "font-black" })}>
						OUR ADVISORS&nbsp;
					</h1>
				</div>
				<div className="flex w-full justify-center">
					<div className="flex justify-center items-center w-full my-10 mb-20">
						<MemberTable teamMembers={advisors} />
					</div>
				</div>
			</div>

			{/* System Architects */}
			<div className="flex w-full flex-col items-center justify-center">
				<div className="flex max-w-xl text-center justify-center font-bold">
					<h1 className={title({ color: "zenith", className: "font-black" })}>
						SYSTEM ARCHITECTS&nbsp;
					</h1>
				</div>
				<div className="flex w-full justify-center">
					<div className="flex justify-center items-center w-full my-10 mb-20">
						<MemberTable teamMembers={sysArchitects} />
					</div>
				</div>
			</div>

			{/* Team Members */}

			<div className="flex w-full flex-col items-center justify-center">
				<div className="flex w-full max-w-lg text-center justify-center font-bold">
					{/* <h1 className={title({ className: "font-black" })}>MEET&nbsp;</h1> */}
					<h1 className={title({ color: "zenith", className: "font-black" })}>
						OUR TEAM
					</h1>
					{/* <h1 className={title({ className: "font-black" })}>TEAM</h1> */}
				</div>
				<div className="flex w-full justify-center my-10">
					<MemberTable teamMembers={teamHead} />
				</div>
			</div>

			<h2 className={title({ size: "sm", className: "font-black" })}>Business Sub-Team</h2>
			<div className="flex w-full justify-center my-10">
				<MemberTable teamMembers={businessTeamMembers} />
			</div>

			<h2 className={title({ size: "sm", className: "font-black" })}>Mechanical Sub-Team</h2>
			<div className="flex w-full justify-center my-10">
				<MemberTable teamMembers={mechaTeamMembers} />
			</div>

			<h2 className={title({ size: "sm", className: "font-black" })}>Electrical Sub-Team</h2>
			<div className="flex w-full justify-center my-10">
				<MemberTable teamMembers={electricalTeamMembers} />
			</div>

			<h2 className={title({ size: "sm", className: "font-black" })}>Control Sub-Team</h2>
			<div className="flex w-full justify-center my-10">
				<MemberTable teamMembers={controlTeamMembers} />
			</div>

			<h2 className={title({ size: "sm", className: "font-black" })}>Science Sub-Team</h2>
			<div className="flex w-full justify-center my-10">
				<MemberTable teamMembers={scienceTeamMembers} />
			</div>
		</div>
	);
}
