'use client';

import { useState } from "react";
import { Card, CardBody } from "@nextui-org/card";
import { Button } from "@nextui-org/button";
import { Input, Textarea } from "@nextui-org/input";
import { RadioGroup, Radio } from "@nextui-org/radio";
import { motion } from "framer-motion";
import { FaHeart, FaHandshake, FaGraduationCap, FaBuilding } from "react-icons/fa";
import { ToastContainer, ToastState } from "@/components/ui/Toast";

// Google Sheets Web App URL
const GOOGLE_SHEETS_SUPPORT_URL = process.env.NEXT_PUBLIC_GOOGLE_SHEETS_SUPPORT_URL || "";

const supportTypes = [
  { key: "financial", label: "Financial Sponsorship", icon: "💰", description: "Monetary support for equipment, travel, and competitions" },
  { key: "inkind", label: "In-Kind Contribution", icon: "🔧", description: "Equipment, materials, or services" },
  { key: "mentorship", label: "Technical Mentorship", icon: "🎓", description: "Expert guidance and knowledge sharing" },
  { key: "partnership", label: "Corporate Partnership", icon: "🤝", description: "Long-term strategic collaboration" },
  { key: "other", label: "Other", icon: "📋", description: "Any other form of support" },
];

const impactStats = [
  { icon: FaHeart, value: "100%", label: "Goes to Projects" },
  { icon: FaHandshake, value: "10+", label: "Partners & Sponsors" },
  { icon: FaGraduationCap, value: "25+", label: "Students Impacted" },
  { icon: FaBuilding, value: "5+", label: "Active Projects" },
];

export default function SupportPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [toast, setToast] = useState<ToastState | null>(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    organization: "",
    supportType: "",
    message: "",
    website: "",
  });

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const showToast = (message: string, type: 'success' | 'error') => {
    setToast({ message, type });
    setTimeout(() => setToast(null), 5000);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    // Validate required fields
    if (!formData.name || !formData.email || !formData.supportType || !formData.message) {
      setError("Please fill in all required fields.");
      showToast("Please fill in all required fields.", "error");
      setIsSubmitting(false);
      return;
    }

    // Check if URL is configured
    if (!GOOGLE_SHEETS_SUPPORT_URL) {
      setError("Form submission is not configured. Please contact the administrator.");
      showToast("Form not configured. Please contact admin.", "error");
      setIsSubmitting(false);
      return;
    }

    try {
      // Create form data for URL-encoded submission (works better with Google Apps Script)
      const formBody = new URLSearchParams();
      formBody.append('data', JSON.stringify({
        ...formData,
        type: "support",
        timestamp: new Date().toISOString(),
      }));

      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 15000); // 15 second timeout

      const response = await fetch(GOOGLE_SHEETS_SUPPORT_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: formBody.toString(),
        signal: controller.signal,
      });

      clearTimeout(timeoutId);

      if (response.ok) {
        setIsSubmitted(true);
        showToast("Thank you! Your support request has been submitted. 💖", "success");
        setFormData({
          name: "",
          email: "",
          phone: "",
          organization: "",
          supportType: "",
          message: "",
          website: "",
        });
      } else {
        throw new Error(`Server responded with status: ${response.status}`);
      }
    } catch (err: any) {
      console.error("Submission error:", err);
      
      let errorMessage = "Failed to submit. Please try again.";
      
      if (err.name === 'AbortError') {
        errorMessage = "Request timed out. Please check your connection and try again.";
      } else if (err.message?.includes('Failed to fetch') || err.message?.includes('NetworkError')) {
        errorMessage = "Network error. Please check your internet connection.";
      }
      
      setError(errorMessage);
      showToast(errorMessage, "error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen">
      {/* Toast Notification */}
      <ToastContainer toast={toast} onClose={() => setToast(null)} />

      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[#E34333]/10 to-[#A41C14]/10 text-[#E34333] text-sm font-medium mb-6">
          <FaHeart className="w-4 h-4" />
          Make a Difference
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Support{" "}
          <span className="bg-gradient-to-r from-[#E34333] to-[#A41C14] bg-clip-text text-transparent">
            Team ZENITH
          </span>
        </h1>
        <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
          Your support helps us push the boundaries of robotics and space exploration. 
          Every contribution makes a difference in our journey.
        </p>
      </motion.div>

      {/* Impact Stats */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12"
      >
        {impactStats.map((stat, index) => (
          <Card key={index} className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
            <CardBody className="p-4 text-center">
              <stat.icon className="w-6 h-6 mx-auto mb-2 text-[#E34333]" />
              <p className="text-2xl font-bold text-slate-800 dark:text-white">{stat.value}</p>
              <p className="text-xs text-slate-600 dark:text-slate-400">{stat.label}</p>
            </CardBody>
          </Card>
        ))}
      </motion.div>

      {/* Form */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <Card className="bg-white dark:bg-slate-800 shadow-xl border border-slate-200 dark:border-slate-700">
          <CardBody className="p-8 md:p-12">
            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12"
              >
                <div className="w-24 h-24 mx-auto mb-6 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center">
                  <span className="text-5xl">💖</span>
                </div>
                <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-4">
                  Thank You for Your Support!
                </h2>
                <p className="text-slate-600 dark:text-slate-400 mb-8 max-w-md mx-auto">
                  We truly appreciate your interest in supporting Team ZENITH. Our team will reach out to you shortly to discuss how we can work together!
                </p>
                <Button 
                  className="btn-zenith"
                  onClick={() => setIsSubmitted(false)}
                >
                  Submit Another Request
                </Button>
              </motion.div>
            ) : (
              <>
                <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-2 text-center">
                  Support Request Form
                </h2>
                <p className="text-slate-600 dark:text-slate-400 mb-8 text-center">
                  Tell us how you&apos;d like to support our mission
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Contact Info */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-slate-800 dark:text-white border-b border-slate-200 dark:border-slate-700 pb-2">
                      Contact Information
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <Input
                        label="Your Name"
                        placeholder="Enter your full name"
                        value={formData.name}
                        onChange={(e) => handleChange("name", e.target.value)}
                        isRequired
                        variant="bordered"
                        classNames={{
                          inputWrapper: "border-slate-300 dark:border-slate-600",
                        }}
                      />
                      <Input
                        label="Email"
                        placeholder="your.email@example.com"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleChange("email", e.target.value)}
                        isRequired
                        variant="bordered"
                        classNames={{
                          inputWrapper: "border-slate-300 dark:border-slate-600",
                        }}
                      />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <Input
                        label="Phone Number (Optional)"
                        placeholder="+880 1XXX-XXXXXX"
                        value={formData.phone}
                        onChange={(e) => handleChange("phone", e.target.value)}
                        variant="bordered"
                        classNames={{
                          inputWrapper: "border-slate-300 dark:border-slate-600",
                        }}
                      />
                      <Input
                        label="Organization/Company (Optional)"
                        placeholder="Your company or organization"
                        value={formData.organization}
                        onChange={(e) => handleChange("organization", e.target.value)}
                        variant="bordered"
                        classNames={{
                          inputWrapper: "border-slate-300 dark:border-slate-600",
                        }}
                      />
                    </div>
                    <Input
                      label="Website (Optional)"
                      placeholder="https://..."
                      value={formData.website}
                      onChange={(e) => handleChange("website", e.target.value)}
                      variant="bordered"
                      classNames={{
                        inputWrapper: "border-slate-300 dark:border-slate-600",
                      }}
                    />
                  </div>

                  {/* Support Type */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-slate-800 dark:text-white border-b border-slate-200 dark:border-slate-700 pb-2">
                      How would you like to support us?
                    </h3>
                    <RadioGroup
                      value={formData.supportType}
                      onValueChange={(value) => handleChange("supportType", value)}
                      classNames={{
                        wrapper: "gap-3",
                      }}
                    >
                      {supportTypes.map((type) => (
                        <Radio
                          key={type.key}
                          value={type.key}
                          classNames={{
                            base: "border border-slate-200 dark:border-slate-700 rounded-xl p-4 m-0 max-w-full hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors data-[selected=true]:border-[#E34333] data-[selected=true]:bg-[#E34333]/5",
                            label: "text-slate-700 dark:text-slate-300",
                          }}
                        >
                          <div className="flex items-start gap-3">
                            <span className="text-2xl">{type.icon}</span>
                            <div>
                              <p className="font-medium">{type.label}</p>
                              <p className="text-sm text-slate-500 dark:text-slate-400">{type.description}</p>
                            </div>
                          </div>
                        </Radio>
                      ))}
                    </RadioGroup>
                  </div>

                  {/* Message */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-slate-800 dark:text-white border-b border-slate-200 dark:border-slate-700 pb-2">
                      Your Message
                    </h3>
                    <Textarea
                      label="Tell us more"
                      placeholder="Share any details about how you'd like to support Team ZENITH, specific areas of interest, or any questions you have..."
                      value={formData.message}
                      onChange={(e) => handleChange("message", e.target.value)}
                      isRequired
                      variant="bordered"
                      minRows={5}
                      classNames={{
                        inputWrapper: "border-slate-300 dark:border-slate-600",
                      }}
                    />
                  </div>

                  {error && (
                    <p className="text-red-500 text-sm text-center">{error}</p>
                  )}

                  <div className="flex justify-center pt-4">
                    <Button 
                      className="btn-zenith text-lg px-12 py-6"
                      type="submit"
                      isLoading={isSubmitting}
                      size="lg"
                    >
                      Submit Request
                    </Button>
                  </div>
                </form>
              </>
            )}
          </CardBody>
        </Card>
      </motion.div>

      {/* Additional Info */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="mt-12 text-center"
      >
        <Card className="bg-gradient-to-r from-slate-50 to-slate-100 dark:from-slate-800 dark:to-slate-900 border border-slate-200 dark:border-slate-700">
          <CardBody className="p-8">
            <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-4">
              Why Support Team ZENITH?
            </h3>
            <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              Your support directly contributes to developing cutting-edge robotics projects, 
              enabling students to participate in national and international competitions, 
              and fostering the next generation of engineers and innovators at RUET.
            </p>
          </CardBody>
        </Card>
      </motion.div>
    </div>
  );
}
