'use client';

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaCheckCircle, FaExclamationCircle } from "react-icons/fa";

export interface ToastProps {
  message: string;
  type: 'success' | 'error';
  onClose: () => void;
}

export interface ToastState {
  message: string;
  type: 'success' | 'error';
}

export function Toast({ message, type, onClose }: ToastProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 50 }}
      className={`fixed bottom-4 left-4 right-4 md:left-1/2 md:right-auto md:-translate-x-1/2 z-50 flex items-center gap-2 md:gap-3 px-4 py-3 md:px-6 md:py-4 rounded-xl shadow-2xl max-w-[calc(100vw-2rem)] md:max-w-md ${
        type === 'success' 
          ? 'bg-green-500 text-white' 
          : 'bg-red-500 text-white'
      }`}
    >
      {type === 'success' ? (
        <FaCheckCircle className="w-4 h-4 md:w-5 md:h-5 flex-shrink-0" />
      ) : (
        <FaExclamationCircle className="w-4 h-4 md:w-5 md:h-5 flex-shrink-0" />
      )}
      <span className="text-sm md:text-base font-medium flex-1">{message}</span>
      <button 
        onClick={onClose} 
        className="ml-1 md:ml-2 p-1 hover:opacity-70 transition-opacity flex-shrink-0 text-lg md:text-xl"
        aria-label="Close"
      >
        ✕
      </button>
    </motion.div>
  );
}

export function ToastContainer({ toast, onClose }: { toast: ToastState | null; onClose: () => void }) {
  return (
    <AnimatePresence>
      {toast && (
        <Toast 
          message={toast.message} 
          type={toast.type} 
          onClose={onClose} 
        />
      )}
    </AnimatePresence>
  );
}

// Hook for toast management
export function useToast(duration = 5000) {
  const [toast, setToast] = useState<ToastState | null>(null);

  const showToast = (message: string, type: 'success' | 'error') => {
    setToast({ message, type });
    setTimeout(() => setToast(null), duration);
  };

  const hideToast = () => setToast(null);

  return { toast, showToast, hideToast };
}
