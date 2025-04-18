import { useEffect } from "react";
import { gsap } from "gsap";
import {
	CalendarClock,
	Users,
	BarChart2,
	Pencil,
	CreditCard,
	SlidersHorizontal,
} from "lucide-react";
import FAQSection from "../../modules/FaqSection";

const FeaturesPage = () => {
	useEffect(() => {
		gsap.from(".feature-card", {
			y: 50,
			opacity: 0,
			duration: 0.8,
			stagger: 0.2,
			ease: "power3.out",
		});
	}, []);

	const features = [
		{
			icon: <CalendarClock className="h-5 w-5 text-pink-200" />,
			title: "Campaign schedule",
			description:
				"Orci molestie nam vulputate nunc habitant gravida. Interdum vitae vivamus ipsum aliquet.",
		},
		{
			icon: <Users className="h-5 w-5 text-pink-200" />,
			title: "Team management",
			description:
				"Orci molestie nam vulputate nunc habitant gravida. Interdum vitae vivamus ipsum aliquet.",
		},
		{
			icon: <SlidersHorizontal className="h-5 w-5 text-pink-200" />,
			title: "Fully customizable",
			description:
				"Orci molestie nam vulputate nunc habitant gravida. Interdum vitae vivamus ipsum aliquet.",
		},
		{
			icon: <BarChart2 className="h-5 w-5 text-pink-200" />,
			title: "Live statistics",
			description:
				"Orci molestie nam vulputate nunc habitant gravida. Interdum vitae vivamus ipsum aliquet.",
		},
		{
			icon: <CreditCard className="h-5 w-5 text-pink-200" />,
			title: "Budget management",
			description:
				"Orci molestie nam vulputate nunc habitant gravida. Interdum vitae vivamus ipsum aliquet.",
		},
		{
			icon: <Pencil className="h-5 w-5 text-pink-200" />,
			title: "Task management",
			description:
				"Orci molestie nam vulputate nunc habitant gravida. Interdum vitae vivamus ipsum aliquet.",
		},
	];

	return (
		<div className="min-h-screen text-white py-20 px-4">
			<div className="max-w-7xl mx-auto">
				<div className="my-10 py-10">
					<div className="text-sm w-fit mx-auto text-center font-medium uppercase bg-white/5 text-white/70 px-3 py-2 rounded-full">
						Features
					</div>
					<p className="text-7xl font-extrabold text-white text-center max-w-4xl mx-auto my-10">
						A bunch of great features to get you started
					</p>
					<div className="py-10 px-6">
						<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
							{features.map((feature, index) => (
								<div
									key={index}
									className="bg-black/20 rounded-2xl p-6 hover:bg-black/10 hover:scale-105 duration-100 ease-in transition"
								>
									<div className="bg-zinc-800 w-10 h-10 flex items-center justify-center rounded-xl mb-4">
										{feature.icon}
									</div>
									<h3 className="text-white text-3xl font-semibold my-4">
										{feature.title}
									</h3>
									<p className="text-zinc-400 text-lg my-2">
										{feature.description}
									</p>
								</div>
							))}
						</div>
					</div>
				</div>
				<section className="relative bg-black/10 text-white px-6 py-24 text-center overflow-hidden rounded-3xl">
					{/* Background SVG Lines */}
					<svg
						className="absolute inset-0 w-full h-full"
						xmlns="http://www.w3.org/2000/svg"
						preserveAspectRatio="none"
					>
						<g stroke="rgba(255,255,255,0.05)" strokeWidth="1">
							<circle cx="25%" cy="50%" r="300" fill="none" />
							<circle cx="75%" cy="50%" r="300" fill="none" />
						</g>
					</svg>

					{/* Overlay to ensure content is readable */}
					<div className="relative z-10 flex flex-col items-center justify-center gap-4">
						<span className="text-xs uppercase tracking-wide border border-white/10 text-white/70 rounded-full px-3 py-1">
							What's next?
						</span>

						<h1 className="text-4xl md:text-5xl font-bold max-w-2xl">
							The future is here. Start your free trial
						</h1>

						<div className="mt-6 flex gap-4 flex-wrap justify-center">
							<button className="bg-pink-300 text-black hover:bg-pink-400 font-medium py-2 px-4 rounded-xl transition">
								Get started today
							</button>
							<button className="bg-zinc0-900 border border-white/10 hover:border-white/20 text-white font-medium py-2 px-4 rounded-xl transition">
								Compare plans
							</button>
						</div>
					</div>
				</section>

				<section>
					<FAQSection />
				</section>
			</div>
		</div>
	);
};

export default FeaturesPage;
