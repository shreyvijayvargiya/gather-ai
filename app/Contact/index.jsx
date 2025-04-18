import React from "react";
import { Mail, Send, Phone, MapPin, X } from "lucide-react";
import colors from "tailwindcss/colors";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";

const BackgroundDots = () => {
	return (
		<div className="absolute inset-0 w-full h-[50vh]">
			<div className="absolute inset-0 ">
				<div
					className="absolute inset-0 opacity-30"
					style={{
						backgroundImage: `
							linear-gradient(to right, ${colors.zinc[800]} 1px, transparent 1px),
							linear-gradient(to bottom, ${colors.zinc[800]} 1px, transparent 1px)
						`,
						backgroundSize: "4rem 4rem",
					}}
				/>
			</div>
		</div>
	);
};

const ContactPage = () => (
	<div className=" relative">
		<main className="relative min-h-screen container mx-auto">
			<BackgroundDots />
			<div className="lg:w-1/3 md:w-1/2 sm:w-1/2 xxs:w-1/3 xs:w-1/3 mx-auto">
				<div className="relative grid grid-cols-1 gap-12 mx-auto py-20">
					<div className="space-y-8">
						<div className="relative">
							<p className="text-5xl">Contact us</p>
						</div>
						<p className="text-zinc-200 mb-8">
							We're Here to Help!. We'd love to hear from you. Send us a message
							and we'll respond as soon as possible.
						</p>
						<div>
							<form className="space-y-6">
								{["name", "email", "message"].map((field, index) => (
									<div key={index}>
										<label
											htmlFor={field}
											className="block text-sm font-medium text-zinc-200 mb-1"
										>
											{field.charAt(0).toUpperCase() + field.slice(1)}
										</label>
										{field === "message" ? (
											<textarea
												id={field}
												rows="4"
												className="w-full px-4 py-2 border border-zinc-700 bg-zinc-800 text-white outline-none rounded focus:outline-none focus:ring-zinc-700 focus:ring"
												placeholder={`Your ${field}`}
											></textarea>
										) : (
											<input
												type={field === "email" ? "email" : "text"}
												id={field}
												className="w-full px-4 py-2 border border-zinc-700 bg-zinc-800 text-white outline-none rounded focus:outline-none focus:ring-zinc-700 focus:ring"
												placeholder={`Your ${field}`}
											/>
										)}
									</div>
								))}
								<button
									type="submit"
									className="w-full bg-pink-300 text-black hover:bg-pink-400 py-2 px-4 rounded flex items-center justify-center gap-2"
								>
									<Send className="w-4 h-4" /> Send Message
								</button>
							</form>
						</div>
						<hr className="border-zinc-800" />
						<div className="space-y-4">
							<p>Contact us</p>
							{[
								{
									icon: <Mail className="w-6 h-6 text-zinc-400" />,
									label: "Email",
									value: "contact@gatherai.com",
								},
								{
									icon: <Phone className="w-6 h-6 text-zinc-400" />,
									label: "Phone",
									value: "+1 (555) 123-4567",
								},
								{
									icon: <MapPin className="w-6 h-6 text-zinc-400" />,
									label: "Address",
									value: "123 AI Street, Tech Valley, CA 94025",
								},
							].map(({ icon, label, value }, index) => (
								<div key={index} className="flex items-center gap-4">
									{icon}
									<div>
										<p className="font-medium">{label}</p>
										<p className="text-zinc-400">{value}</p>
									</div>
								</div>
							))}
						</div>
						<hr className="border-zinc-800" />
						<div className="space-y-4">
							<p>Social media</p>
							<div className="flex gap-4">
								{[FaLinkedin, BsTwitterX, FaGithub].map((Icon, index) => (
									<a
										key={index}
										href="#"
										className="text-zinc-400 hover:text-zinc-300"
									>
										<Icon className="w-6 h-6" />
									</a>
								))}
							</div>
						</div>
					</div>
				</div>
			</div>
		</main>
	</div>
);
export default ContactPage;
