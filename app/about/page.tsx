"use client";

import { Image } from "@nextui-org/image";
import { Card, CardBody, CardHeader } from "@nextui-org/card";
import { Chip } from "@nextui-org/chip";
import { motion } from "framer-motion";
import { title } from "@/components/primitives";
import { aboutData } from "@/lib/data/about";
import rover from '@/public/gallery/rover-rendered.png';
import { FaRocket, FaCog, FaBolt, FaGamepad, FaFlask, FaPalette, FaEye, FaBullseye } from "react-icons/fa";
import { MdTimeline } from "react-icons/md";

const teamIcons: Record<string, React.ReactNode> = {
  design: <FaPalette className="text-2xl" />,
  electrical: <FaBolt className="text-2xl" />,
  mechanical: <FaCog className="text-2xl" />,
  control: <FaGamepad className="text-2xl" />,
  science: <FaFlask className="text-2xl" />,
};

export default function AboutPage() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <motion.section 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h1 className={title({ className: "font-black text-5xl md:text-6xl" })}>
          <span className="text-gradient">{aboutData.teamName}</span>
        </h1>
        <p className="text-xl text-slate-600 dark:text-slate-400 mt-4 max-w-2xl mx-auto">
          {aboutData.tagline}
        </p>
        <div className="section-divider mt-6" />
      </motion.section>

      {/* Description and Rover Image */}
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20"
      >
        <div className="relative order-2 lg:order-1">
          <div className="animate-float">
            <Image
              className="w-full max-w-lg mx-auto drop-shadow-2xl"
              src={rover.src}
              alt="ZENITH Rover"
            />
          </div>
          <div className="absolute -bottom-5 -left-5 w-32 h-32 bg-gradient-to-r from-[#E34333]/20 to-[#A41C14]/20 rounded-full blur-2xl" />
        </div>
        <div className="order-1 lg:order-2">
          <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed text-justify mb-8">
            {aboutData.description}
          </p>
          
          {/* Vision & Mission */}
          <div className="space-y-4">
            <Card className="card-hover bg-white dark:bg-slate-800 border-l-4 border-[#E34333]">
              <CardBody className="flex flex-row items-start gap-4">
                <div className="p-3 bg-red-50 dark:bg-slate-700 rounded-lg">
                  <FaEye className="text-2xl text-[#E34333]" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-800 dark:text-white mb-2">Our Vision</h3>
                  <p className="text-slate-600 dark:text-slate-400">{aboutData.vision}</p>
                </div>
              </CardBody>
            </Card>
            
            <Card className="card-hover bg-white dark:bg-slate-800 border-l-4 border-[#E34333]">
              <CardBody className="flex flex-row items-start gap-4">
                <div className="p-3 bg-red-50 dark:bg-slate-700 rounded-lg">
                  <FaBullseye className="text-2xl text-[#E34333]" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-800 dark:text-white mb-2">Our Mission</h3>
                  <p className="text-slate-600 dark:text-slate-400">{aboutData.mission}</p>
                </div>
              </CardBody>
            </Card>
          </div>
        </div>
      </motion.section>

      {/* Timeline/Milestones */}
      <motion.section 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-20"
      >
        <div className="text-center mb-12">
          <h2 className={title({ size: "sm", className: "font-black" })}>
            <span className="text-gradient">Our Journey</span>
          </h2>
          <div className="section-divider" />
        </div>
        
        <div className="relative max-w-4xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-[#E34333] to-[#A41C14] rounded-full hidden md:block" />
          
          {aboutData.milestones.map((milestone, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`flex items-center mb-8 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
            >
              <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                <Card className="card-hover bg-white dark:bg-slate-800">
                  <CardBody className="p-4">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-2xl">{milestone.icon}</span>
                      <Chip color="danger" variant="flat" size="sm">{milestone.year}</Chip>
                    </div>
                    <p className="text-slate-700 dark:text-slate-300 font-medium">{milestone.event}</p>
                  </CardBody>
                </Card>
              </div>
              {/* Center dot */}
              <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-[#E34333] rounded-full border-4 border-white dark:border-slate-900" />
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Rover Section */}
      <motion.section 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-20"
      >
        <div className="text-center mb-12">
          <h2 className={title({ size: "sm", className: "font-black" })}>
            <span className="text-gradient">{aboutData.rover.name}</span>
          </h2>
          <div className="section-divider" />
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-3xl mx-auto mt-4">
            {aboutData.rover.description}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {aboutData.rover.features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <Card className="card-hover h-full bg-gradient-to-br from-white to-gray-50 dark:from-slate-800 dark:to-slate-900">
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-red-50 dark:bg-slate-700 rounded-lg">
                      <FaRocket className="text-xl text-[#E34333]" />
                    </div>
                    <h3 className="text-lg font-bold text-slate-800 dark:text-white">{feature.name}</h3>
                  </div>
                </CardHeader>
                <CardBody className="pt-0">
                  <p className="text-slate-600 dark:text-slate-400">{feature.description}</p>
                </CardBody>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Drone Section */}
      <motion.section 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-20"
      >
        <div className="bg-gradient-to-r from-[#E34333]/10 to-[#A41C14]/10 dark:from-[#E34333]/5 dark:to-[#A41C14]/5 rounded-3xl p-8 md:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className={title({ size: "sm", className: "font-black mb-4" })}>
                <span className="text-gradient">{aboutData.drone.name}</span>
              </h2>
              <p className="text-lg text-slate-700 dark:text-slate-300 mb-6">
                {aboutData.drone.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {aboutData.drone.features.map((feature, index) => (
                  <Chip key={index} color="danger" variant="flat" size="sm">
                    {feature}
                  </Chip>
                ))}
              </div>
            </div>
            <div className="flex justify-center">
              <div className="text-9xl">🛸</div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Sub-Teams Section */}
      <motion.section 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-20"
      >
        <div className="text-center mb-12">
          <h2 className={title({ size: "sm", className: "font-black" })}>
            <span className="text-gradient">Our Sub-Teams</span>
          </h2>
          <div className="section-divider" />
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto mt-4">
            Each sub-team brings specialized expertise to create our innovative robotic systems
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Object.entries(aboutData.teams).map(([key, team], index) => (
            <motion.div
              key={key}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <Card className="card-hover h-full bg-white dark:bg-slate-800 border border-gray-100 dark:border-slate-700">
                <CardHeader className="flex flex-col items-start pb-0">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-3 bg-gradient-to-r from-[#E34333] to-[#A41C14] rounded-xl text-white">
                      {teamIcons[key]}
                    </div>
                    <div>
                      <span className="text-2xl">{team.icon}</span>
                      <h3 className="text-xl font-bold text-slate-800 dark:text-white">{team.name}</h3>
                    </div>
                  </div>
                </CardHeader>
                <CardBody>
                  <p className="text-slate-600 dark:text-slate-400 mb-4 text-sm">
                    {team.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {team.highlights.map((highlight, idx) => (
                      <Chip key={idx} size="sm" variant="flat" className="bg-red-50 dark:bg-slate-700 text-[#E34333]">
                        {highlight}
                      </Chip>
                    ))}
                  </div>
                </CardBody>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* History Section */}
      <motion.section 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-20"
      >
        <div className="text-center mb-12">
          <h2 className={title({ size: "sm", className: "font-black" })}>
            <span className="text-gradient">Our Story</span>
          </h2>
          <div className="section-divider" />
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            {aboutData.history.map((item, idx) => (
              <p key={idx} className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed text-justify mb-4">
                {item.text}
              </p>
            ))}
          </div>
          <div className="grid grid-cols-2 gap-4">
            {aboutData.images.slice(0, 2).map((image, index) => (
              <div key={index} className="relative rounded-xl overflow-hidden card-hover">
                <Image
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3">
                  <p className="text-white text-sm font-medium">{image.caption}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.section>
    </div>
  );
}