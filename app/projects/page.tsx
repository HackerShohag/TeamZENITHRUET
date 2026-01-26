"use client";

import { motion } from "framer-motion";
import { title } from "@/components/primitives";
import ProjectCard from "@/components/cards/projectCard";
import { projects } from "@/lib/data/projects";
import { teamStats } from "@/lib/data";

export default function ProjectsPage() {
	return (
		<div className="flex flex-col w-full">
			{/* Header */}
			<motion.div
				initial={{ opacity: 0, y: 30 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.6 }}
				className="text-center mb-12"
			>
				<h1 className={title({ className: "font-black text-5xl md:text-6xl" })}>
					<span className="text-gradient">Our Projects</span>
				</h1>
				<div className="section-divider" />
				<p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto mt-4">
					Explore our journey through various robotics competitions and innovative projects.
					Click on any project to learn more about our experiences.
				</p>
			</motion.div>

			{/* Projects Grid */}
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
				{projects.map((project, index) => (
					<motion.div
						key={index}
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.4, delay: index * 0.1 }}
					>
						<ProjectCard project={project} />
					</motion.div>
				))}
			</div>

			{/* Stats Section */}
			<motion.div
				initial={{ opacity: 0, y: 30 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true }}
				transition={{ duration: 0.6 }}
				className="mt-20 bg-gradient-to-r from-[#E34333]/10 to-[#A41C14]/10 dark:from-[#E34333]/5 dark:to-[#A41C14]/5 rounded-3xl p-8 md:p-12"
			>
				<div className="text-center mb-8">
					<h2 className={title({ size: "sm", className: "font-black" })}>
						<span className="text-gradient">Our Achievements</span>
					</h2>
					<div className="section-divider" />
				</div>

				<div className="grid grid-cols-2 md:grid-cols-4 gap-6">
					{[
						{ number: `${projects.length}+`, label: "Competitions" },
						{ number: `${teamStats.totalMembers}+`, label: "Team Members" },
						{ number: `${teamStats.achievementsCount}+`, label: "Robot Types" },
						{ number: `${new Date().getFullYear() - teamStats.foundedYear}+`, label: "Years Experience" },
					].map((stat, index) => (
						<motion.div
							key={index}
							initial={{ opacity: 0, scale: 0.9 }}
							whileInView={{ opacity: 1, scale: 1 }}
							viewport={{ once: true }}
							transition={{ duration: 0.4, delay: index * 0.1 }}
							className="text-center p-6 bg-white dark:bg-slate-800 rounded-2xl shadow-lg card-hover"
						>
							<span className="text-4xl md:text-5xl font-black text-gradient">
								{stat.number}
							</span>
							<p className="text-slate-600 dark:text-slate-400 mt-2 font-medium">
								{stat.label}
							</p>
						</motion.div>
					))}
				</div>
			</motion.div>
		</div>
	);
}