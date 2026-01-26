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
      initial={{ opacity: 0, y: 50, x: '-50%' }}
      animate={{ opacity: 1, y: 0, x: '-50%' }}
      exit={{ opacity: 0, y: 50, x: '-50%' }}
      className={`fixed bottom-6 left-1/2 z-50 flex items-center gap-3 px-6 py-4 rounded-xl shadow-2xl ${
        type === 'success' 
          ? 'bg-green-500 text-white' 
          : 'bg-red-500 text-white'
      }`}
    >
      {type === 'success' ? (
        <FaCheckCircle className="w-5 h-5" />
      ) : (
        <FaExclamationCircle className="w-5 h-5" />
      )}
      <span className="font-medium">{message}</span>
      <button onClick={onClose} className="ml-2 hover:opacity-70 transition-opacity">✕</button>
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
