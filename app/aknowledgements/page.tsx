"use client";

import { motion } from "framer-motion";
import { title } from "@/components/primitives";
import {
  AcknowledgementSection,
  ThanksBanner,
  SupportCTA,
} from "@/components/acknowledgements";
import {
  sponsors,
  acknowledgementData,
} from "@/lib/data/acknowledgements";

export default function AcknowledgementsPage() {
  return (
    <div className="flex flex-col w-full items-center justify-center">
      {/* Header */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex flex-col items-center justify-center mb-12"
      >
        <h1 className={title({ className: "font-black text-5xl md:text-6xl" })}>
          <span className="text-gradient">{acknowledgementData.title}</span>
        </h1>
        <div className="section-divider" />
        <p className="max-w-3xl text-center text-slate-600 dark:text-slate-400 mt-4 px-4">
          {acknowledgementData.description}
        </p>
      </motion.div>

      {/* Special Thanks Banner */}
      <ThanksBanner />

      {/* Contributors Section */}
      <div className="w-full">
        <AcknowledgementSection
          title="Our Supporters"
          contributors={sponsors}
        />
      </div>

      {/* Call to Action */}
      <SupportCTA />
    </div>
  );
}