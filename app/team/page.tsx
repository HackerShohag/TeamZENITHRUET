"use client";

import { motion } from "framer-motion";
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
import { advisors } from "@/lib/data/avisors";

const subTeams = [
	{ title: "Business Sub-Team", members: businessTeamMembers, icon: "💼" },
	{ title: "Mechanical Sub-Team", members: mechaTeamMembers, icon: "⚙️" },
	{ title: "Electrical Sub-Team", members: electricalTeamMembers, icon: "⚡" },
	{ title: "Control Sub-Team", members: controlTeamMembers, icon: "🎮" },
	{ title: "Science Sub-Team", members: scienceTeamMembers, icon: "🔬" },
];

export default function TeamPage() {
	return (
		<div className="flex flex-col w-full items-center justify-center">
			{/* Header */}
			<motion.div
				initial={{ opacity: 0, y: 30 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.6 }}
				className="text-center mb-16"
			>
				<h1 className={title({ className: "font-black text-5xl md:text-6xl" })}>
					<span className="text-gradient">Meet Our Team</span>
				</h1>
				<div className="section-divider" />
				<p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto mt-4">
					A talented group of engineers, designers, and innovators working together to push the boundaries of robotics
				</p>
			</motion.div>

			{/* Advisors */}
			<motion.section
				initial={{ opacity: 0, y: 30 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true }}
				transition={{ duration: 0.6 }}
				className="w-full mb-16"
			>
				<div className="text-center mb-8">
					<div className="inline-flex items-center gap-2 px-6 py-2 bg-white dark:bg-slate-800 rounded-full shadow-md mb-4">
						<span className="text-2xl">🎓</span>
						<h2 className={title({ size: "xs", className: "font-black text-slate-800 dark:text-white" })}>
							Our Advisors
						</h2>
					</div>
				</div>
				<MemberTable teamMembers={advisors} />
			</motion.section>

			{/* System Architects */}
			<motion.section
				initial={{ opacity: 0, y: 30 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true }}
				transition={{ duration: 0.6 }}
				className="w-full mb-16"
			>
				<div className="text-center mb-8">
					<div className="inline-flex items-center gap-2 px-6 py-2 bg-white dark:bg-slate-800 rounded-full shadow-md mb-4">
						<span className="text-2xl">🏗️</span>
						<h2 className={title({ size: "xs", className: "font-black text-slate-800 dark:text-white" })}>
							System Architects
						</h2>
					</div>
				</div>
				<MemberTable teamMembers={sysArchitects} />
			</motion.section>

			{/* Team Heads */}
			<motion.section
				initial={{ opacity: 0, y: 30 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true }}
				transition={{ duration: 0.6 }}
				className="w-full mb-16"
			>
				<div className="text-center mb-8">
					<div className="inline-flex items-center gap-2 px-6 py-2 bg-white dark:bg-slate-800 rounded-full shadow-md mb-4">
						<span className="text-2xl">👥</span>
						<h2 className={title({ size: "xs", className: "font-black text-slate-800 dark:text-white" })}>
							Team Leadership
						</h2>
					</div>
				</div>
				<MemberTable teamMembers={teamHead} />
			</motion.section>

			{/* Sub Teams */}
			{subTeams.map((team, index) => (
				team.members && team.members.length > 0 && (
					<motion.section
						key={index}
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6, delay: index * 0.1 }}
						className="w-full mb-16"
					>
						<div className="text-center mb-8">
							<div className="inline-flex items-center gap-2 px-6 py-2 bg-white dark:bg-slate-800 rounded-full shadow-md mb-4">
								<span className="text-2xl">{team.icon}</span>
								<h2 className={title({ size: "xs", className: "font-black text-slate-800 dark:text-white" })}>
									{team.title}
								</h2>
							</div>
						</div>
						<MemberTable teamMembers={team.members} />
					</motion.section>
				)
			))}

			{/* Join CTA */}
			<motion.section
				initial={{ opacity: 0, y: 30 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true }}
				transition={{ duration: 0.6 }}
				className="w-full max-w-2xl text-center mt-8 mb-16"
			>
				<div className="bg-gradient-to-r from-[#E34333] to-[#A41C14] rounded-3xl p-8 md:p-12 text-white">
					<h3 className="text-2xl md:text-3xl font-bold mb-4">
						Want to Join Our Team?
					</h3>
					<p className="text-red-100 mb-6">
						We&apos;re always looking for passionate individuals to join our mission. 
						Apply now and be part of something extraordinary!
					</p>
					<a 
						href="https://forms.gle/YOUR_FORM_ID" 
						target="_blank" 
						rel="noopener noreferrer"
						className="inline-block px-8 py-3 bg-white text-[#E34333] font-bold rounded-full hover:bg-red-50 transition-all shadow-lg hover:shadow-xl"
					>
						Apply Now →
					</a>
				</div>
			</motion.section>
		</div>
	);
}
