import { title } from "@/components/primitives";
import AdvisorTable from "@/components/advisorTable";
import { advisorMembers } from "@/lib/data/avisor-members";


export default function AdvisorPage() {
	return (
		<div>
			<div className="inline-block max-w-lg text-center justify-center font-bold">
				<h1 className={title({ className: "font-black" })}>
					ADVISOR PANNEL
				</h1>
			</div>
			<div className="flex my-10">
				<AdvisorTable advisorMembers={advisorMembers} />
			</div>
		</div>
	);
}
