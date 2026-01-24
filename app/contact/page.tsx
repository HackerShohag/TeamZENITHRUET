import ContactForm from "@/components/contactform";
import { title } from "@/components/primitives";

export default function ContactPage() {
	return (
		<div className="flex flex-col w-full mb-10">
			<h1 className={title({color:'pink'})}>Contact Us</h1>
			<div className="border-indigo-700 border-l-2 pl-2 mt-3">Get in touch with team</div>

			<div className="grid grid-col-1 sm:grid-cols-3 w-full mt-20">
				<div className="flex flex-col gap-2 p-5 px-6 bg-gray-100 dark:bg-gray-900 rounded-lg">
					<div className="flex flex-col gap-10">
						<div className="flex flex-col">
							<h1 className="text-3xl mb-5">You&apos;re always welcome!</h1>
							<span className="text-justify">
								Feel free to reach out with any questions, proposals, or agreements. We look forward to hearing from you and, as always, you are most welcome!							</span>
						</div>
						<div className="flex flex-col">
							<h1 className="text-3xl mb-5">Contact info</h1>
							<div>RUET, Rajshahi - Dhaka Highway</div>
							<div>Mobile: +880 1773 979259</div>
							<div>E-mail:
								<a href="mailto:contact@teamzenithruet.info" className="text-rose-500" > contact@teamzenithruet.info</a>
							</div>
						</div>
					</div>
				</div>
				<div className="flex flex-col col-span-2 items-center sm:ml-10 sm:mr-10">
					<h1 className="text-3xl mt-20 sm:mt-0">Get in touch</h1>
					<ContactForm />
				</div>
			</div>
			<div className="flex flex-col w-full items-center mt-20">
				<div className="w-full mt-10 rounded-lg">
					<iframe
						className="rounded-lg"
						src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7268.7857330440565!2d88.634951!3d24.367633!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39fbefd0a55ea957%3A0x2f9cac3357d62617!2sRajshahi%20University%20of%20Engineering%20%26%20Technology!5e0!3m2!1sen!2sbd!4v1708970104287!5m2!1sen!2sbd"
						width="100%"
						height="450"
						style={{ border: 0 }}
						allowFullScreen={true}
						loading="lazy"
					/>
				</div>
			</div>
		</div>
	);
}
