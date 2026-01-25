'use client';

import { motion } from "framer-motion";
import { FaHeart } from "react-icons/fa";

export default function ThanksBanner() {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="w-full max-w-4xl bg-gradient-to-r from-[#EB5443] to-[#A41C14] rounded-2xl p-6 mb-12 shadow-lg"
    >
      <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-white">
        <FaHeart className="text-4xl animate-pulse" />
        <div className="text-center md:text-left">
          <h3 className="text-2xl font-bold">Thank You for Your Support!</h3>
          <p className="text-red-100">
            Every contribution, big or small, helps us achieve our mission.
          </p>
        </div>
      </div>
    </motion.div>
  );
}
