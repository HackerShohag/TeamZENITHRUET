import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import AcknowledgementsSection from "@/components/sections/AcknowledgementsSection";

export default function Home() {
	return (
		<div className="flex flex-col -mx-6 -mt-10">
			{/* Hero Section */}
			<HeroSection />
			
			{/* About Section */}
			<AboutSection />
			
			{/* Projects Section */}
			<ProjectsSection />
			
			{/* Acknowledgements Section */}
			<AcknowledgementsSection />
		</div>
	);
}
