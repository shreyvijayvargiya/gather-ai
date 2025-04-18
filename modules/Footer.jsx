import { Sparkles } from "lucide-react";

const Footer = () => {
	return (
		<nav className="bg-transparent text-white p-30 min-h-96 py-40">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex items-center justify-between h-16">
					{/* Logo and Title */}
					<div className="space-y-5">
						<div className="flex items-center group">
							<Sparkles className="h-8 w-8 text-pink-400 group-hover:rotate-180 transition-all duration-100 ease-in" />
							<span className="ml-2 text-xl font-bold text-pink-400 group-hover:font-extrabold">
								Gather
							</span>
						</div>
						<p>All in one marketing platform</p>
						<a
							className="hover:text-pink-400 cursor-pointer text-white"
							href="www.mailtoconnect@ihatereading.in"
							target="_blank"
						>
							Send us email
						</a>
						<p className="text-gray-400">@copyright 2025</p>
						<p className="text-gray-400">All rights reserved</p>
					</div>

					{/* Center Links */}
					<div className="flex flex-col gap-5">
						<p className="font-medium text-lg text-gray-400">Products</p>
						<a
							to="/features"
							className="text-gray-200 hover:text-white cursor-pointer transition-colors"
						>
							Features
						</a>
						<a
							to="/pricing"
							className="text-gray-200 hover:text-white cursor-pointer transition-colors"
						>
							Pricing
						</a>
						<a
							to="/contact"
							className="text-gray-200 hover:text-white cursor-pointer transition-colors"
						>
							Contact
						</a>
					</div>

					{/* Social Media Links */}
					<div className="flex flex-col gap-5">
						<p className="font-medium text-lg rounded-md text-gray-400 transition-colors">
							Social media
						</p>
						<a className="text-gray-200 hover:text-white cursor-pointer transition-colors">
							Linkedin
						</a>
						<a className="text-gray-200 hover:text-white cursor-pointer transition-colors">
							Twitter
						</a>
						<p className="text-gray-200 hover:text-white cursor-pointer transition-colors">
							Youtube
						</p>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Footer;
