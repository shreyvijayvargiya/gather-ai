import { Sparkles, StarIcon, Menu, X } from "lucide-react";
import colors from "tailwindcss/colors";
import { useState } from "react";

const Navbar = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	return (
		<nav className="text-white">
			<div className="flex justify-center items-center gap-2 p-4 bg-zinc-800/50">
				<StarIcon color={colors.pink[200]} />
				Sign up today and get the first month for free
			</div>
			<div className="md:w-full mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex items-center justify-between h-16 flex-wrap">
					{/* Logo and Title */}
					<div className="flex items-center group gap-10">
						<a href="/" className="flex cursor-pointer">
							<Sparkles className="h-8 w-8 text-pink-200 group-hover:rotate-180 transition-all duration-100 ease-in" />
							<span className="ml-2 text-xl font-bold text-pink-200 group-hover:font-extrabold">
								Gather
							</span>
						</a>
						{/* Center Links - Hidden on mobile */}
						<div className="hidden md:flex gap-10">
							<a
								href="/features"
								className="text-gray-200 hover:text-white hover:font-medium transition-colors cursor-pointer"
							>
								Features
							</a>
							<a
								href="/blog"
								className="text-gray-200 hover:text-white hover:font-medium transition-colors cursor-pointer"
							>
								Blog
							</a>
							<a
								href="/pricing"
								className="text-gray-200 hover:text-white hover:font-medium transition-colors cursor-pointer"
							>
								Pricing
							</a>
							<a
								href="/contact"
								className="text-gray-200 hover:text-white hover:font-medium transition-colors cursor-pointer"
							>
								Contact
							</a>
						</div>
					</div>
					{/* Mobile Menu Button */}
					<div className="md:hidden">
						<button
							onClick={toggleMenu}
							className="text-gray-200 hover:text-white focus:outline-none"
						>
							{isMenuOpen ? (
								<X className="h-6 w-6" />
							) : (
								<Menu className="h-6 w-6" />
							)}
						</button>
					</div>
					{/* Login Button */}
					<div className="hidden md:flex items-center gap-2">
						<a
							href="/login"
							className="inline-flex items-center px-4 py-2 text-sm font-medium rounded text-black bg-zinc-100 hover:bg-white hover:scale-105 focus:outline-none transition-all duration-100 ease-in cursor-pointer"
						>
							Login
						</a>
						<a
							href="/signup"
							className="inline-flex items-center px-4 py-2 text-sm font-medium rounded bg-pink-300 text-black hover:bg-pink-400 hover:scale-105 focus:outline-none transition-all duration-100 ease-in cursor-pointer"
						>
							Get Started
						</a>
					</div>
				</div>
			</div>

			{/* Mobile Menu Modal */}
			{isMenuOpen && (
				<div className="md:hidden fixed inset-0 bg-zinc-800 z-50">
					<div className="flex flex-col items-center justify-center h-full space-y-6">
						<button
							onClick={toggleMenu}
							className="text-gray-200 hover:text-white focus:outline-none"
						>
							{isMenuOpen ? (
								<X className="h-6 w-6" />
							) : (
								<Menu className="h-6 w-6" />
							)}
						</button>
						<a
							href="/features"
							className="text-2xl text-gray-200 hover:text-white transition-colors"
							onClick={toggleMenu}
						>
							Features
						</a>
						<a
							href="/blog"
							className="text-2xl text-gray-200 hover:text-white transition-colors"
							onClick={toggleMenu}
						>
							Blog
						</a>
						<a
							href="/pricing"
							className="text-2xl text-gray-200 hover:text-white transition-colors"
							onClick={toggleMenu}
						>
							Pricing
						</a>
						<a
							href="/contact"
							className="text-2xl text-gray-200 hover:text-white transition-colors"
							onClick={toggleMenu}
						>
							Contact
						</a>
						<div className="flex flex-col gap-4 mt-6">
							<a
								href="/login"
								className="inline-flex items-center justify-center px-6 py-3 text-base font-medium rounded text-black bg-zinc-100 hover:bg-white hover:scale-105 focus:outline-none transition-all duration-100 ease-in cursor-pointer"
								onClick={toggleMenu}
							>
								Login
							</a>
							<a
								href="/signup"
								className="inline-flex items-center justify-center px-6 py-3 text-base font-medium rounded bg-pink-300 text-black hover:bg-pink-400 hover:scale-105 focus:outline-none transition-all duration-100 ease-in cursor-pointer"
								onClick={toggleMenu}
							>
								Get Started
							</a>
						</div>
					</div>
				</div>
			)}
		</nav>
	);
};

export default Navbar;
