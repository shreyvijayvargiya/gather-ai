import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const FAQSection = () => {
	const [openIndex, setOpenIndex] = useState(null);

	const faqs = [
		{
			question: "What is Gather AI and how does it help my business?",
			answer:
				"Gather AI is a comprehensive analytics and campaign management platform that helps businesses streamline their operations. It combines team collaboration, budget tracking, campaign analytics, and performance monitoring in one integrated solution, making it easier to make data-driven decisions and optimize your business growth.",
		},
		{
			question: "How does the team collaboration feature work?",
			answer:
				"Our team collaboration feature allows multiple team members to work together seamlessly. You can assign tasks, share resources, track progress, and communicate within the platform. Team members can access real-time updates, share insights, and collaborate on campaigns efficiently.",
		},
		{
			question: "What types of analytics and reporting are available?",
			answer:
				"Gather AI provides comprehensive analytics including campaign performance metrics, budget tracking, ROI analysis, and custom reports. You get access to real-time dashboards, detailed performance insights, and automated reporting features that help you understand your business metrics at a glance.",
		},
		{
			question: "Can I integrate Gather AI with other tools we use?",
			answer:
				"Yes! Gather AI offers extensive integration capabilities with popular business tools and platforms. Whether you're using CRM systems, marketing tools, or project management software, our platform can integrate seamlessly to create a unified workflow.",
		},
		{
			question: "How does the pricing structure work?",
			answer:
				"We offer flexible pricing plans to suit businesses of all sizes. Starting from our Starter plan at $20/month for small teams, to our Professional plan at $49/month for growing businesses, and Enterprise plan at $79/month for larger organizations. Each plan includes different features and capabilities to match your needs.",
		},
		{
			question: "Is there a free trial available?",
			answer:
				"Yes, we offer a free trial period where you can explore all the features of our Professional plan. This allows you to test our platform's capabilities and see how it can benefit your business before making a commitment.",
		},
		{
			question: "How secure is my data with Gather AI?",
			answer:
				"Security is our top priority. We implement industry-standard encryption, regular security audits, and strict data protection protocols. Your data is stored securely, and we comply with major data protection regulations to ensure your information remains safe and confidential.",
		},
		{
			question: "What kind of support do you offer?",
			answer:
				"We provide comprehensive support including 24/7 customer service, detailed documentation, video tutorials, and dedicated account managers for Enterprise plans. Our support team is always ready to help you make the most of our platform.",
		},
	];

	return (
		<div className="min-h-screen py-20 px-4">
			<div className="max-w-4xl mx-auto">
				<div className="text-center mb-16">
					<div className="text-sm w-fit mx-auto text-center font-medium uppercase bg-white/5 text-white/70 px-3 py-2 rounded-full">
						FAQ
					</div>
					<br />
					<h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
						Frequently asked questions
					</h2>
					<p className="text-zinc-400 text-lg">
						Everything you need to know about Gather AI and its features.
					</p>
				</div>

				<div className="space-y-5">
					{faqs.map((faq, index) => (
						<div
							key={index}
							className="border border-zinc-800 rounded-xl overflow-hidden bg-black/10 max-w-3xl mx-auto"
						>
							<button
								onClick={() => setOpenIndex(openIndex === index ? null : index)}
								className="w-full p-6 text-left flex items-center justify-between hover:bg-zinc-800 transition-colors duration-200"
							>
								<span className="text-lg font-medium text-white">
									{faq.question}
								</span>
								<ChevronDown
									className={`w-5 h-5 text-zinc-400 transition-transform duration-200 ${
										openIndex === index ? "rotate-180" : ""
									}`}
								/>
							</button>
							<AnimatePresence>
								{openIndex === index && (
									<motion.div
										initial={{ height: 0, opacity: 0 }}
										animate={{ height: "auto", opacity: 1 }}
										exit={{ height: 0, opacity: 0 }}
										transition={{ duration: 0.2 }}
										className="overflow-hidden"
									>
										<div className="p-6 pt-0 text-zinc-400">{faq.answer}</div>
									</motion.div>
								)}
							</AnimatePresence>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default FAQSection;
