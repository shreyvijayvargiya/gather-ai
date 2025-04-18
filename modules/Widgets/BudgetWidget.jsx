import { useState } from "react";
import { motion } from "framer-motion";

const BudgetWidget = () => {
	const [progress, setProgress] = useState(40);

	const handleProgressChange = (e) => {
		const value = Math.min(100, Math.max(0, parseInt(e.target.value) || 0));
		setProgress(value);
	};

	const circumference = 2 * Math.PI * 45; // radius of 45
	const offset = circumference - (progress / 100) * circumference;

	return (
		<div className="flex flex-col justify-center items-center w-full">
			<div className="p-6 max-w-lg mx-auto w-full rounded-xl">
				<h2 className="text-lg font-semibold text-center text-zinc-100 mb-4">
					Budget
				</h2>

				{/* Circular Progress Bar */}
				<div className="flex justify-center items-center mb-6">
					<div className="relative w-32 h-32">
						<svg className="w-full h-full" viewBox="0 0 100 100">
							{/* Background Circle */}
							<circle
								className="text-zinc-200"
								strokeWidth="8"
								stroke="currentColor"
								fill="transparent"
								r="45"
								cx="50"
								cy="50"
							/>
							{/* Progress Circle */}
							<motion.circle
								className="text-pink-400"
								strokeWidth="8"
								strokeLinecap="round"
								stroke="currentColor"
								fill="transparent"
								r="45"
								cx="50"
								cy="50"
								initial={{ strokeDashoffset: circumference }}
								animate={{ strokeDashoffset: offset }}
								transition={{ duration: 0.5 }}
								style={{
									strokeDasharray: circumference,
								}}
							/>
						</svg>
						{/* Progress Text */}
						<div className="absolute inset-0 flex items-center justify-center">
							<span className="text-2xl font-bold text-white">{progress}%</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default BudgetWidget;
