'use client';

import { motion } from "framer-motion";
import { Link } from "@nextui-org/link";

export default function SupportCTA() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="flex flex-col items-center justify-center mt-16 mb-10 p-8 bg-gradient-to-br from-gray-50 to-white dark:from-slate-800 dark:to-slate-900 rounded-3xl max-w-2xl border border-gray-100 dark:border-slate-700 shadow-lg"
    >
      <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-100 mb-4">
        Want to Support Us?
      </h3>
      <p className="text-slate-600 dark:text-slate-400 text-center mb-6">
        If you&apos;d like to support Team ZENITH RUET through donations, sponsorships, or in-kind contributions, we&apos;d love to hear from you!
      </p>
      <Link
        href="/contact"
        className="btn-zenith"
      >
        Get in Touch →
      </Link>
    </motion.div>
  );
}
