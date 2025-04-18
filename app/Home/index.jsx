import React from "react";
import {
	DollarSign,
	DotIcon,
	TrainTrack,
	Wallet,
	CalendarClock,
	Users,
	BarChart2,
	Pencil,
	CreditCard,
	SlidersHorizontal,
	Star,
	ArrowUpRight,
} from "lucide-react";
import PaymentsWidget from "../../modules/Widgets/PaymentsWidget";
import FAQSection from "../../modules/FaqSection";

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

const testimonials = Array(4).fill({
	quote:
		"Id sem viverra porttitor tincidunt vel id. In malesuada nibh sed leo.",
	name: "Ronald Richards",
	company: "R Consult",
});

const Home = () => {
	return (
		<div className="w-full mx-auto p-4 sm:p-8 md:p-20">
			<section className="mb-16 sm:mb-24">
				<div className="my-10 sm:my-20 text-center max-w-4xl mx-auto">
					<span className="w-fit animate-pulse text-pink-400 flex items-center justify-center mx-auto bg-zinc-800 px-4 py-2 border border-zinc-700 rounded-full my-4 text-sm">
						<DotIcon /> Version 4.0 released
					</span>
					<p className="text-4xl sm:text-5xl md:text-7xl font-bold font-sans">
						Gather all marketing activities in one place
					</p>
					<p className="mt-4 text-sm sm:text-base">
						Lorem Ipsum Donor sit amor donor itemsie, Orci molestie nam
						vulputate nunc habitant gravida. Interdum vitae vivamus ipsum
						aliquet consectetur aliquam.
					</p>
					<br />
					<button className="inline-flex items-center px-4 py-2 text-base sm:text-lg rounded text-black bg-pink-200 hover:bg-pink-300 hover:scale-105 focus:outline-none transition-all duration-100 ease-in cursor-pointer">
						Get Started
					</button>
				</div>
				<img className="w-full h-full object-contain" src="./banner.svg" />
			</section>
			<section className="mb-16 sm:mb-24 flex flex-col justify-center items-center gap-6 sm:gap-10 max-w-7xl mx-auto rounded-xl bg-black/10 py-10 sm:py-20">
				<p className="max-w-4xl text-3xl sm:text-4xl md:text-5xl py-6 sm:py-10 text-center font-semibold">
					Gather is a multi functional all-in-one platform for teams
				</p>
				<div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-10 p-6 sm:p-10 rounded-xl bg-black/10 hover:bg-black/20 transition-all duration-100 ease-in">
					<div className="text-center">
						<p className="text-5xl sm:text-7xl font-bold text-zinc-200">120+</p>
						<p className="text-gray-400">Widgets</p>
					</div>
					<div className="h-px sm:h-40 w-full sm:w-px bg-zinc-700"></div>
					<div className="text-center">
						<p className="text-5xl sm:text-7xl font-bold text-zinc-200">20+</p>
						<p className="text-gray-400">Integrations</p>
					</div>
					<div className="h-px sm:h-40 w-full sm:w-px bg-zinc-700"></div>
					<div className="text-center">
						<p className="text-5xl sm:text-7xl font-bold text-zinc-200">50+</p>
						<p className="text-gray-400">Features</p>
					</div>
				</div>
			</section>
			<section className="mb-16 sm:mb-24 grid grid-cols-1 md:grid-cols-2 justify-center items-center max-w-7xl mx-auto gap-6 sm:gap-10">
				<div className="flex flex-col gap-2 rounded-xl p-2">
					<span className="w-fit text-sm font-medium uppercase bg-white/5 text-white/70 px-3 py-1 rounded-full">
						Budget control
					</span>
					<p className="text-white text-3xl sm:text-4xl md:text-5xl font-bold font-sans">
						Nice one app to manage{" "}
					</p>
					<p className="max-w-xl text-base sm:text-lg">
						Lorem ispum donot sit amor de sit ame pe ius pe ispum donot sit amor
						de Lorem ionot sit amor de sit ame pe ius
					</p>
					<div className="flex flex-col sm:flex-row gap-2">
						<span className="flex gap-2 py-4 px-4 hover:bg-zinc-800 rouned-xl w-fit">
							<DollarSign />
							<p>Payments</p>
						</span>
						<span className="flex gap-2 py-4 px-4 hover:bg-zinc-800 rouned-xl w-fit">
							<Wallet />
							<p>Budgets</p>
						</span>
						<span className="flex gap-2 py-4 px-4 hover:bg-zinc-800 rouned-xl w-fit">
							<TrainTrack />
							<p>Tracking</p>
						</span>
					</div>
				</div>
				<div className="flex flex-col gap-2 items-center rounded-xl p-4">
					<img src="./teams-tasks-image.png" className="w-full" />
				</div>
			</section>
			<section className="mb-16 sm:mb-24 text-white p-4 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 sm:gap-10 rounded-xl max-w-7xl mx-auto">
				{/* Left side - Image with stats */}
				<div className="relative w-full md:w-auto">
					<div className="p-1 w-full sm:w-72 h-72 sm:h-96 flex items-end justify-center">
						<img
							src="https://firebasestorage.googleapis.com/v0/b/ihatereading-4ba52.appspot.com/o/public%2Fusers%2Fdownload.jpeg?alt=media&token=45387c9c-560c-4b54-919c-0037cdb4432b"
							alt="Team Member"
							className="rounded-2xl object-cover h-full w-full"
						/>
					</div>

					{/* Floating stat card */}
					<div className="absolute bottom-4 left-[-1.5rem] bg-[#111] rounded-xl px-5 py-4 shadow-xl">
						<div className="text-2xl font-semibold">51</div>
						<div className="text-sm text-gray-400">New orders this week</div>
						<div className="flex items-center gap-1 mt-2 text-green-400 text-sm">
							<ArrowUpRight className="w-4 h-4" />
							5.8%
						</div>
					</div>
				</div>

				{/* Right side - Text content */}
				<div className="max-w-lg space-y-6">
					<h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
						Powerful and light <br /> weight task management
					</h2>
					<p className="text-gray-400 text-sm sm:text-base">
						Orci molestie nam vulputate nunc habitant gravida. Interdum vitae
						vivamus ipsum aliquet consectetur.
					</p>

					<div className="space-y-4">
						<div className="flex items-start gap-4">
							<div className="text-2xl font-bold">200+</div>
							<p className="text-gray-400 text-sm sm:text-base">
								Orci molestie nam vulputate nunc habitant gravida. Interdum
								vitae vivamus ipsum aliquet
							</p>
						</div>
						<div className="flex items-start gap-4">
							<div className="text-2xl font-bold">200+</div>
							<p className="text-gray-400 text-sm sm:text-base">
								Orci molestie nam vulputate nunc habitant gravida. Interdum
								vitae vivamus ipsum aliquet
							</p>
						</div>
					</div>
				</div>
			</section>
			<section className="mb-16 sm:mb-24 relative max-w-7xl mx-auto bg-black/10 text-white px-4 sm:px-6 py-20 sm:py-40 text-center overflow-hidden rounded-3xl">
				{/* Background SVG Lines */}
				<svg
					className="absolute inset-0 w-full h-full animate-spin duration-500"
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

					<h1 className="text-3xl sm:text-4xl md:text-5xl font-bold max-w-2xl">
						The future is here. Start your free trial
					</h1>

					<div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center">
						<button className="bg-pink-300 text-black hover:bg-pink-400 font-medium py-2 px-4 rounded-xl transition">
							Get started today
						</button>
						<button className="bg-zinc-900 text-white hover:bg-white hover:text-black font-medium py-2 px-4 rounded-xl transition">
							Compare plans
						</button>
					</div>
				</div>
			</section>
			<section className="mb-16 sm:mb-24 relative text-white px-4 md:px-12 overflow-hidden max-w-7xl mx-auto">
				{/* Background SVG lines */}
				<svg
					className="absolute left-0 top-0 h-full w-full opacity-5 z-0"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 800 800"
					fill="none"
				>
					<circle cx="400" cy="400" r="300" stroke="white" strokeWidth="0.5" />
					<circle cx="400" cy="400" r="400" stroke="white" strokeWidth="0.3" />
				</svg>

				{/* Section header */}
				<div className="relative z-10 text-center max-w-3xl mx-auto my-10 sm:my-20 mb-8 sm:mb-12">
					<span className="text-sm font-medium uppercase bg-white/5 text-white/70 px-3 py-1 rounded-full">
						Testimonials
					</span>
					<h2 className="mt-4 text-3xl sm:text-4xl md:text-7xl font-bold">
						Don't take our words for it <br /> - listen to our clients
					</h2>
				</div>

				{/* Testimonials grid */}
				<div className="relative z-10 grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-2 max-w-4xl mx-auto">
					{testimonials.map((testimonial, index) => (
						<div
							key={index}
							className="bg-black/10 rounded-2xl p-5 text-sm text-white space-y-3"
						>
							<div className="flex space-x-1">
								{Array(5)
									.fill(0)
									.map((_, i) => (
										<Star
											key={i}
											className="w-4 h-4 text-pink-200 fill-pink-200"
										/>
									))}
							</div>
							<p className="text-sm">{testimonial.quote}</p>
							<div>
								<p className="font-semibold">{testimonial.name}</p>
								<p className="text-xs text-white/50">{testimonial.company}</p>
							</div>
						</div>
					))}
				</div>
			</section>
			<section className="mb-16 sm:mb-24 grid grid-cols-1 md:grid-cols-2 justify-center items-center max-w-7xl mx-auto gap-6 sm:gap-10">
				<div className="flex flex-col gap-2 rounded-xl p-2">
					<span className="w-fit text-sm font-medium uppercase bg-white/5 text-white/70 px-3 py-1 rounded-full">
						Team management
					</span>
					<p className="text-white text-3xl sm:text-4xl md:text-7xl font-bold font-sans">
						Easily manage your team's
					</p>
					<p className="max-w-xl text-base sm:text-lg">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
						varius enim in eros elementum tristique.
					</p>
					<span>
						<button className="bg-pink-300 text-black hover:bg-pink-400 font-medium py-2 px-4 rounded-xl transition">
							Get started today
						</button>
					</span>
				</div>
				<div className="flex flex-col gap-2 items-center rounded-xl p-4">
					<PaymentsWidget />
				</div>
			</section>
			<section className="mb-16 sm:mb-24 container mx-auto">
				<div className="w-fit mx-auto text-center text-sm font-medium uppercase bg-white/5 text-white/70 px-3 py-1 rounded-full">
					Features
				</div>
				<p className="text-3xl sm:text-5xl md:text-7xl font-extrabold text-white text-center max-w-4xl mx-auto my-6 sm:my-10">
					A bunch of great features to get you started
				</p>
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
					{features.map((feature, index) => (
						<div
							key={index}
							className="bg-black/20 rounded-2xl p-6 hover:bg-black/10 hover:scale-105 duration-100 ease-in transition"
						>
							<div className="bg-zinc-800 w-10 h-10 flex items-center justify-center rounded-xl mb-4">
								{feature.icon}
							</div>
							<h3 className="text-white text-2xl sm:text-3xl font-semibold my-4">
								{feature.title}
							</h3>
							<p className="text-zinc-400 text-base sm:text-lg my-2">
								{feature.description}
							</p>
						</div>
					))}
				</div>
			</section>
			<section className="mb-16 sm:mb-24">
				<FAQSection />
				<section className="relative overflow-hidden bg-black/10 rounded-3xl px-4 sm:px-6 py-10 sm:py-20 text-white text-center">
					<svg
						className="absolute inset-0 w-full h-full pointer-events-none"
						xmlns="http://www.w3.org/2000/svg"
						preserveAspectRatio="xMidYMid slice"
					>
						<defs>
							<pattern
								id="pattern-circles"
								x="0"
								y="0"
								width="200"
								height="200"
								patternUnits="userSpaceOnUse"
							>
								<path
									d="M100,0 A100,100 0 0,1 200,100"
									stroke="#272727"
									strokeWidth="1"
									fill="none"
								/>
							</pattern>
						</defs>
						<rect width="100%" height="100%" fill="url(#pattern-circles)" />
					</svg>

					{/* Content */}
					<div className="relative z-10 max-w-2xl mx-auto space-y-6">
						<span className="inline-block bg-[#191919] text-sm text-white/70 rounded-full px-4 py-1 border border-white/10">
							Newsletter
						</span>
						<h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
							Sign up to get our monthly mail with tips and tricks
						</h2>
						<form className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
							<input
								type="email"
								placeholder="Your email"
								className="bg-zinc-800 border border-zinc-800 focus:ring focus:ring-zinc-800 placeholder-gray-400 px-5 py-3 rounded w-full sm:w-80 focus:outline-none"
							/>
							<button
								type="submit"
								className="bg-pink-200 text-black hover:bg-pink-400 px-6 py-3 transition rounded w-full sm:w-auto"
							>
								Sign me up
							</button>
						</form>
					</div>
				</section>
			</section>
		</div>
	);
};
export default Home;
