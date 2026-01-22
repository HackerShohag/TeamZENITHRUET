import { title } from "@/components/primitives";
import AdvisorTable from "@/components/advisorTable";
import { advisors } from "@/lib/data/avisors";


export default function AdvisorPage() {
	return (
		<div>
			<div className="inline-block max-w-lg text-center justify-center font-bold">
				<h1 className={title({ className: "font-black" })}>
					ADVISOR PANNEL
				</h1>
			</div>
			<div className="flex my-10">
				<AdvisorTable advisors={advisors} />
			</div>
		</div>
	);
}
