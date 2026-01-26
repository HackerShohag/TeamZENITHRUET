'use client';

import { useState } from "react";
import { Card, CardBody } from "@nextui-org/card";
import { Button } from "@nextui-org/button";
import { Input, Textarea } from "@nextui-org/input";
import { Select, SelectItem } from "@nextui-org/select";
import { motion } from "framer-motion";
import { FaRocket, FaUsers, FaLightbulb } from "react-icons/fa";
import { ToastContainer, ToastState } from "@/components/ui/Toast";

// Google Sheets Web App URL
const GOOGLE_SHEETS_JOIN_URL = process.env.NEXT_PUBLIC_GOOGLE_SHEETS_JOIN_URL || "";

const departments = [
  "Computer Science & Engineering",
  "Electrical & Electronic Engineering",
  "Electronics & Telecommunication Engineering",
  "Mechanical Engineering",
  "Civil Engineering",
  "Chemical Engineering",
  "Industrial & Production Engineering",
  "Materials Science & Engineering",
  "Mechatronics Engineering",
  "Glass & Ceramic Engineering",
  "Urban & Regional Planning",
  "Architecture",
  "Other",
];

const teams = [
  "Mechanical Team",
  "Electrical Team",
  "Control Team",
  "Science Team",
  "Business & Marketing Team",
  "Any Team (Let us decide)",
];

const years = ["1st Year", "2nd Year", "3rd Year", "4th Year", "Masters", "Other"];

const benefits = [
  { icon: FaRocket, title: "Hands-on Experience", description: "Work on real robotics and space exploration projects" },
  { icon: FaUsers, title: "Amazing Community", description: "Join a passionate team of innovators and engineers" },
  { icon: FaLightbulb, title: "Learn & Grow", description: "Develop technical and leadership skills" },
];

export default function JoinPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [toast, setToast] = useState<ToastState | null>(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    department: "",
    year: "",
    preferredTeam: "",
    skills: "",
    motivation: "",
    portfolio: "",
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
    if (!formData.name || !formData.email || !formData.phone || !formData.department || !formData.year || !formData.preferredTeam || !formData.skills || !formData.motivation) {
      setError("Please fill in all required fields.");
      showToast("Please fill in all required fields.", "error");
      setIsSubmitting(false);
      return;
    }

    // Check if URL is configured
    if (!GOOGLE_SHEETS_JOIN_URL) {
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
        type: "join",
        timestamp: new Date().toISOString(),
      }));

      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 15000); // 15 second timeout

      const response = await fetch(GOOGLE_SHEETS_JOIN_URL, {
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
        showToast("Application submitted successfully! 🎉", "success");
        setFormData({
          name: "",
          email: "",
          phone: "",
          department: "",
          year: "",
          preferredTeam: "",
          skills: "",
          motivation: "",
          portfolio: "",
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
          <FaUsers className="w-4 h-4" />
          Be Part of Something Amazing
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Join{" "}
          <span className="bg-gradient-to-r from-[#E34333] to-[#A41C14] bg-clip-text text-transparent">
            Team ZENITH
          </span>
        </h1>
        <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
          Ready to push the boundaries of robotics and space exploration? 
          Fill out the form below and start your journey with us!
        </p>
      </motion.div>

      {/* Benefits */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="grid md:grid-cols-3 gap-6 mb-12"
      >
        {benefits.map((benefit, index) => (
          <Card key={index} className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
            <CardBody className="p-6 text-center">
              <div className="w-12 h-12 mx-auto mb-4 bg-gradient-to-r from-[#E34333]/10 to-[#A41C14]/10 rounded-full flex items-center justify-center">
                <benefit.icon className="w-6 h-6 text-[#E34333]" />
              </div>
              <h3 className="font-bold text-slate-800 dark:text-white mb-2">{benefit.title}</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">{benefit.description}</p>
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
                  <span className="text-5xl">✅</span>
                </div>
                <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-4">
                  Application Submitted Successfully!
                </h2>
                <p className="text-slate-600 dark:text-slate-400 mb-8 max-w-md mx-auto">
                  Thank you for your interest in joining Team ZENITH! We&apos;ll review your application and get back to you soon.
                </p>
                <Button 
                  className="btn-zenith"
                  onClick={() => setIsSubmitted(false)}
                >
                  Submit Another Application
                </Button>
              </motion.div>
            ) : (
              <>
                <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-2 text-center">
                  Application Form
                </h2>
                <p className="text-slate-600 dark:text-slate-400 mb-8 text-center">
                  Fill in your details below. Fields marked with * are required.
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Personal Info */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-slate-800 dark:text-white border-b border-slate-200 dark:border-slate-700 pb-2">
                      Personal Information
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <Input
                        label="Full Name"
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
                        label="Phone Number"
                        placeholder="+880 1XXX-XXXXXX"
                        value={formData.phone}
                        onChange={(e) => handleChange("phone", e.target.value)}
                        isRequired
                        variant="bordered"
                        classNames={{
                          inputWrapper: "border-slate-300 dark:border-slate-600",
                        }}
                      />
                      <Input
                        label="Portfolio/LinkedIn/GitHub (Optional)"
                        placeholder="https://..."
                        value={formData.portfolio}
                        onChange={(e) => handleChange("portfolio", e.target.value)}
                        variant="bordered"
                        classNames={{
                          inputWrapper: "border-slate-300 dark:border-slate-600",
                        }}
                      />
                    </div>
                  </div>

                  {/* Academic Info */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-slate-800 dark:text-white border-b border-slate-200 dark:border-slate-700 pb-2">
                      Academic Information
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <Select
                        label="Department"
                        placeholder="Select your department"
                        selectedKeys={formData.department ? [formData.department] : []}
                        onChange={(e) => handleChange("department", e.target.value)}
                        isRequired
                        variant="bordered"
                        classNames={{
                          trigger: "border-slate-300 dark:border-slate-600",
                        }}
                      >
                        {departments.map((dept) => (
                          <SelectItem key={dept} value={dept}>
                            {dept}
                          </SelectItem>
                        ))}
                      </Select>
                      <Select
                        label="Year of Study"
                        placeholder="Select your year"
                        selectedKeys={formData.year ? [formData.year] : []}
                        onChange={(e) => handleChange("year", e.target.value)}
                        isRequired
                        variant="bordered"
                        classNames={{
                          trigger: "border-slate-300 dark:border-slate-600",
                        }}
                      >
                        {years.map((year) => (
                          <SelectItem key={year} value={year}>
                            {year}
                          </SelectItem>
                        ))}
                      </Select>
                    </div>
                  </div>

                  {/* Team Preference */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-slate-800 dark:text-white border-b border-slate-200 dark:border-slate-700 pb-2">
                      Team Preference
                    </h3>
                    <Select
                      label="Preferred Team"
                      placeholder="Which team would you like to join?"
                      selectedKeys={formData.preferredTeam ? [formData.preferredTeam] : []}
                      onChange={(e) => handleChange("preferredTeam", e.target.value)}
                      isRequired
                      variant="bordered"
                      classNames={{
                        trigger: "border-slate-300 dark:border-slate-600",
                      }}
                    >
                      {teams.map((team) => (
                        <SelectItem key={team} value={team}>
                          {team}
                        </SelectItem>
                      ))}
                    </Select>
                  </div>

                  {/* Skills & Motivation */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-slate-800 dark:text-white border-b border-slate-200 dark:border-slate-700 pb-2">
                      Skills & Motivation
                    </h3>
                    <Textarea
                      label="Skills & Experience"
                      placeholder="Tell us about your relevant skills, projects, or experience..."
                      value={formData.skills}
                      onChange={(e) => handleChange("skills", e.target.value)}
                      isRequired
                      variant="bordered"
                      minRows={4}
                      classNames={{
                        inputWrapper: "border-slate-300 dark:border-slate-600",
                      }}
                    />
                    <Textarea
                      label="Why do you want to join Team ZENITH?"
                      placeholder="What motivates you to join us? What do you hope to achieve?"
                      value={formData.motivation}
                      onChange={(e) => handleChange("motivation", e.target.value)}
                      isRequired
                      variant="bordered"
                      minRows={4}
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
                      Submit Application
                    </Button>
                  </div>
                </form>
              </>
            )}
          </CardBody>
        </Card>
      </motion.div>
    </div>
  );
}
