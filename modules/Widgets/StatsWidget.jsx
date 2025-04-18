import { Users, DollarSign, TrendingUp, ArrowUpRight } from "lucide-react";

const stats = [
	{
		id: 1,
		title: "Total Signups",
		value: "30K",
		icon: Users,
		change: "+12%",
		trend: "up",
		description: "New users this month",
		previousValue: "26.8K",
		growthRate: 12,
		timeFrame: "month",
		category: "user-growth",
		iconColor: "text-pink-400",
		trendIcon: ArrowUpRight,
		trendColor: "text-green-500",
	},
	{
		title: "Total Revenue",
		value: "$45K",
		icon: DollarSign,
		trend: "up",
		description: "Revenue this month",
	},
];

const StatsWidget = () => {
	return (
		<div className="flex flex-col justify-center items-center w-full">
			<div className="p-6 rounded-xl max-w-lg mx-auto w-full">
				<div className="flex items-center justify-between mb-6">
					<h2 className="text-lg font-semibold text-zinc-100">
						Analytics Overview
					</h2>
					<div className="flex items-center gap-2 text-sm text-zinc-500">
						<TrendingUp size={16} />
						<span>Last 30 days</span>
					</div>
				</div>
				<div className="grid grid-cols-1 md:grid-cols-1 gap-6">
					{stats.map((stat, index) => (
						<div
							key={index}
							className="bg-zinc-50 p-4 rounded-xl hover:p-6 hover:bg-zinc-50 transition-all duration-200 ease-in-out"
						>
							<div className="flex items-center justify-between">
								<span
									className={`text-sm font-medium ${
										stat.trend === "up" ? "text-green-500" : "text-red-500"
									}`}
								>
									{stat.change}
								</span>
							</div>
							<h3 className="text-xl font-bold text-zinc-900 mb-1">
								{stat.value}
							</h3>
							<p className="text-zinc-600 font-medium mb-2">{stat.title}</p>
							<p className="text-sm text-zinc-500">{stat.description}</p>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default StatsWidget;
