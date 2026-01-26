"use client";

import { websiteDevelopers } from "@/lib/data/team-members";
import { Card, CardBody } from "@nextui-org/card";
import { Avatar } from "@nextui-org/avatar";
import { Button } from "@nextui-org/button";
import { Link } from "@nextui-org/link";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaFacebook, FaGlobe, FaEnvelope, FaCode, FaHeart } from "react-icons/fa";

export default function DevelopersPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[#E34333]/10 to-[#A41C14]/10 text-[#E34333] text-sm font-medium mb-6">
          <FaCode className="w-4 h-4" />
          Built with passion
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Meet the{" "}
          <span className="bg-gradient-to-r from-[#E34333] to-[#A41C14] bg-clip-text text-transparent">
            Developers
          </span>
        </h1>
        <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
          The creative minds behind Team ZENITH&apos;s digital presence. We built this website
          to showcase our team&apos;s journey and achievements.
        </p>
      </motion.div>

      {/* Developers Cards */}
      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
        {websiteDevelopers.map((developer, index) => (
          <motion.div
            key={developer.name}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <Card className="bg-white dark:bg-slate-800 shadow-xl hover:shadow-2xl transition-all duration-300 border border-slate-200 dark:border-slate-700 overflow-hidden">
              {/* Gradient Top Border */}
              <div className="h-2 bg-gradient-to-r from-[#E34333] to-[#A41C14]" />
              
              <CardBody className="p-8">
                <div className="flex flex-col items-center text-center">
                  {/* Avatar with Ring */}
                  <div className="relative mb-6">
                    <div className="absolute inset-0 bg-gradient-to-r from-[#E34333] to-[#A41C14] rounded-full blur-md opacity-50 scale-110" />
                    <Avatar
                      src={developer.avatarSrc}
                      className="w-32 h-32 relative ring-4 ring-white dark:ring-slate-800"
                      isBordered
                      color="danger"
                    />
                  </div>

                  {/* Info */}
                  <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-1">
                    {developer.name}
                  </h2>
                  <p className="text-[#E34333] font-semibold mb-2">
                    {developer.designation}
                  </p>
                  <p className="text-slate-600 dark:text-slate-400 text-sm mb-4">
                    {developer.department}
                  </p>

                  {/* Role Badge */}
                  <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-gradient-to-r from-[#E34333]/10 to-[#A41C14]/10 text-[#E34333] text-xs font-medium mb-6">
                    <FaCode className="w-3 h-3" />
                    {developer.team}
                  </span>

                  {/* Social Links */}
                  <div className="flex gap-3 flex-wrap justify-center">
                    {developer.github && (
                      <Link href={developer.github} isExternal>
                        <Button
                          isIconOnly
                          variant="flat"
                          className="bg-slate-100 dark:bg-slate-700 hover:bg-[#E34333] hover:text-white transition-all"
                          size="sm"
                        >
                          <FaGithub className="w-4 h-4" />
                        </Button>
                      </Link>
                    )}
                    {developer.linkedin && (
                      <Link href={developer.linkedin} isExternal>
                        <Button
                          isIconOnly
                          variant="flat"
                          className="bg-slate-100 dark:bg-slate-700 hover:bg-[#0077B5] hover:text-white transition-all"
                          size="sm"
                        >
                          <FaLinkedin className="w-4 h-4" />
                        </Button>
                      </Link>
                    )}
                    {developer.facebook && (
                      <Link href={developer.facebook} isExternal>
                        <Button
                          isIconOnly
                          variant="flat"
                          className="bg-slate-100 dark:bg-slate-700 hover:bg-[#1877F2] hover:text-white transition-all"
                          size="sm"
                        >
                          <FaFacebook className="w-4 h-4" />
                        </Button>
                      </Link>
                    )}
                    {developer.website && (
                      <Link href={developer.website} isExternal>
                        <Button
                          isIconOnly
                          variant="flat"
                          className="bg-slate-100 dark:bg-slate-700 hover:bg-[#E34333] hover:text-white transition-all"
                          size="sm"
                        >
                          <FaGlobe className="w-4 h-4" />
                        </Button>
                      </Link>
                    )}
                    <Link href={`mailto:${developer.email}`}>
                      <Button
                        isIconOnly
                        variant="flat"
                        className="bg-slate-100 dark:bg-slate-700 hover:bg-[#E34333] hover:text-white transition-all"
                        size="sm"
                      >
                        <FaEnvelope className="w-4 h-4" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </CardBody>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Tech Stack Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="text-center"
      >
        <Card className="bg-gradient-to-r from-slate-50 to-slate-100 dark:from-slate-800 dark:to-slate-900 border border-slate-200 dark:border-slate-700 max-w-2xl mx-auto">
          <CardBody className="p-8">
            <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-4">
              Built With Modern Technologies
            </h3>
            <div className="flex flex-wrap gap-3 justify-center mb-6">
              {["Next.js", "React", "TypeScript", "Tailwind CSS", "NextUI", "Framer Motion"].map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 rounded-full bg-white dark:bg-slate-700 text-slate-700 dark:text-slate-300 text-sm font-medium shadow-sm border border-slate-200 dark:border-slate-600"
                >
                  {tech}
                </span>
              ))}
            </div>
          </CardBody>
        </Card>
      </motion.div>
    </div>
  );
}
