"use client";

import { motion } from "framer-motion";
import ContactForm from "@/components/contactform";
import { title } from "@/components/primitives";
import { Card, CardBody } from "@nextui-org/card";
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaFacebook, FaLinkedin, FaGithub } from "react-icons/fa";
import { siteConfig } from "@/config/site";
import { Link } from "@nextui-org/link";
import { contactInfo } from "@/lib/data/stats";

export default function ContactPage() {
	return (
		<div className="flex flex-col w-full">
			{/* Header */}
			<motion.div
				initial={{ opacity: 0, y: 30 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.6 }}
				className="text-center mb-12"
			>
				<h1 className={title({ className: "font-black text-5xl md:text-6xl" })}>
					<span className="text-gradient">Contact Us</span>
				</h1>
				<div className="section-divider" />
				<p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto mt-4">
					Have questions, proposals, or want to collaborate? We&apos;d love to hear from you!
				</p>
			</motion.div>

			{/* Contact Info Cards */}
			<motion.div
				initial={{ opacity: 0, y: 30 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.6, delay: 0.1 }}
				className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
			>
				<Card className="card-hover bg-gradient-to-br from-white to-gray-50 dark:from-slate-800 dark:to-slate-900 border border-gray-100 dark:border-slate-700">
					<CardBody className="text-center py-8">
						<div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-[#E34333] to-[#A41C14] rounded-full flex items-center justify-center">
							<FaMapMarkerAlt className="text-2xl text-white" />
						</div>
						<h3 className="text-lg font-bold text-slate-800 dark:text-white mb-2">Location</h3>
						<p className="text-slate-600 dark:text-slate-400">
							{contactInfo.universityShort}, {contactInfo.city}<br />
							{contactInfo.country}
						</p>
					</CardBody>
				</Card>

				<Card className="card-hover bg-gradient-to-br from-white to-gray-50 dark:from-slate-800 dark:to-slate-900 border border-gray-100 dark:border-slate-700">
					<CardBody className="text-center py-8">
						<div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-[#E34333] to-[#A41C14] rounded-full flex items-center justify-center">
							<FaPhone className="text-2xl text-white" />
						</div>
						<h3 className="text-lg font-bold text-slate-800 dark:text-white mb-2">Phone</h3>
						<p className="text-slate-600 dark:text-slate-400">
							{contactInfo.phone}
						</p>
					</CardBody>
				</Card>

				<Card className="card-hover bg-gradient-to-br from-white to-gray-50 dark:from-slate-800 dark:to-slate-900 border border-gray-100 dark:border-slate-700">
					<CardBody className="text-center py-8">
						<div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-[#E34333] to-[#A41C14] rounded-full flex items-center justify-center">
							<FaEnvelope className="text-2xl text-white" />
						</div>
						<h3 className="text-lg font-bold text-slate-800 dark:text-white mb-2">Email</h3>
						<a href={`mailto:${contactInfo.email}`} className="text-[#E34333] hover:underline">
							{contactInfo.email}
						</a>
					</CardBody>
				</Card>
			</motion.div>

			{/* Main Content */}
			<motion.div
				initial={{ opacity: 0, y: 30 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.6, delay: 0.2 }}
				className="grid grid-cols-1 lg:grid-cols-5 gap-8 mb-16"
			>
				{/* Left Side - Info */}
				<div className="lg:col-span-2">
					<Card className="h-full bg-gradient-to-br from-[#E34333] to-[#A41C14] text-white">
						<CardBody className="p-8">
							<h2 className="text-3xl font-bold mb-6">Let&apos;s Connect!</h2>
							<p className="text-red-100 mb-8">
								Feel free to reach out with any questions, proposals, or agreements. 
								We look forward to hearing from you and, as always, you are most welcome!
							</p>

							<div className="space-y-6 mb-8">
								<div className="flex items-start gap-4">
									<FaMapMarkerAlt className="text-xl mt-1" />
									<div>
										<h4 className="font-semibold">Visit Us</h4>
										<p className="text-red-100">{contactInfo.university}</p>
									</div>
								</div>
								<div className="flex items-start gap-4">
									<FaPhone className="text-xl mt-1" />
									<div>
										<h4 className="font-semibold">Call Us</h4>
										<p className="text-red-100">{contactInfo.phone}</p>
									</div>
								</div>
								<div className="flex items-start gap-4">
									<FaEnvelope className="text-xl mt-1" />
									<div>
										<h4 className="font-semibold">Email Us</h4>
										<p className="text-red-100">{contactInfo.email}</p>
									</div>
								</div>
							</div>

							{/* Social Links */}
							<div>
								<h4 className="font-semibold mb-4">Follow Us</h4>
								<div className="flex gap-4">
									<Link 
										isExternal 
										href={siteConfig.links.facebook}
										className="w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-colors"
									>
										<FaFacebook className="text-white" />
									</Link>
									<Link 
										isExternal 
										href={siteConfig.links.linkedIn}
										className="w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-colors"
									>
										<FaLinkedin className="text-white" />
									</Link>
									<Link 
										isExternal 
										href={siteConfig.links.github}
										className="w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-colors"
									>
										<FaGithub className="text-white" />
									</Link>
								</div>
							</div>
						</CardBody>
					</Card>
				</div>

				{/* Right Side - Form */}
				<div className="lg:col-span-3">
					<Card className="bg-white dark:bg-slate-800 border border-gray-100 dark:border-slate-700">
						<CardBody className="p-8">
							<h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6">
								Send us a Message
							</h2>
							<ContactForm />
						</CardBody>
					</Card>
				</div>
			</motion.div>

			{/* Map */}
			<motion.div
				initial={{ opacity: 0, y: 30 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true }}
				transition={{ duration: 0.6 }}
				className="mb-10"
			>
				<div className="text-center mb-8">
					<h2 className={title({ size: "sm", className: "font-black" })}>
						<span className="text-gradient">Find Us</span>
					</h2>
					<div className="section-divider" />
				</div>
				<div className="rounded-2xl overflow-hidden shadow-lg">
					<iframe
						src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7268.7857330440565!2d88.634951!3d24.367633!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39fbefd0a55ea957%3A0x2f9cac3357d62617!2sRajshahi%20University%20of%20Engineering%20%26%20Technology!5e0!3m2!1sen!2sbd!4v1708970104287!5m2!1sen!2sbd"
						width="100%"
						height="450"
						style={{ border: 0 }}
						allowFullScreen={true}
						loading="lazy"
					/>
				</div>
			</motion.div>
		</div>
	);
}
