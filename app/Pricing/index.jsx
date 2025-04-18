

const PricingPage = () => {
	const pricingPlans = [
		{
			name: "Starter",
			price: "20",
			period: "/month",
			yearlyPrice: "€199 a year",
			features: [
				"2 team members",
				"3 integrations",
				"5 active campaigns",
				"2 budget plans",
				"Live stats",
			],
			recommended: false,
		},
		{
			name: "Professional",
			price: "49",
			period: "/month",
			yearlyPrice: "€499 a year",
			features: [
				"10 team members",
				"10 integrations",
				"10 active campaigns",
				"10 budget plans",
				"Live stats",
				"Analytics",
			],
			recommended: true,
		},
		{
			name: "Enterprise",
			price: "79",
			period: "/month",
			yearlyPrice: "€799 a year",
			features: [
				"Unlimited team members",
				"Unlimited integrations",
				"Unlimited campaigns",
				"Unlimited budget plans",
				"Live stats",
				"Analytics",
				"Monthly reports",
			],
			recommended: false,
		},
	];

	return (
		<div className="pricing-section text-white py-20 px-4">
			<div className="max-w-7xl mx-auto">
				<div className="text-center mb-20">
					<h1 className="pricing-title text-5xl md:text-6xl font-bold mb-6">
						Find the plan that suits
						<br />
						your team's needs
					</h1>
					<p className="text-zinc-400 text-lg max-w-2xl mx-auto">
						Orci molestie nam vulputate nunc habitant gravida. Interdum vitae
						vivamus ipsum aliquet consectetur aliquam.
					</p>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
					{pricingPlans.map((plan, index) => (
						<div
							key={plan.name}
							className={`pricing-card rounded-2xl p-8 ${
								plan.recommended
									? "bg-zinc-800 border-2 border-pink-400"
									: "bg-zinc-800/50"
							} transition-all duration-300 hover:transform hover:-translate-y-2`}
						>
							<div className="flex flex-col h-full">
								<div>
									<span
										className="inline-block px-4 py-1 rounded-full text-sm font-medium mb-4 
                    ${plan.recommended ? 'bg-pink-200 text-pink-400' : 'bg-zinc-700 text-zinc-300'}"
									>
										{plan.name}
										{plan.recommended && (
											<span className="ml-2 text-pink-400">Recommended</span>
										)}
									</span>
									<div className="flex items-baseline mb-2">
										<span className="text-5xl font-bold">${plan.price}</span>
										<span className="text-zinc-400 ml-2">{plan.period}</span>
									</div>
									<p className="text-zinc-400 text-sm mb-8">
										{plan.yearlyPrice}
									</p>
								</div>

								<div className="flex-grow">
									<ul className="space-y-4 mb-8">
										{plan.features.map((feature, featureIndex) => (
											<li key={featureIndex} className="flex items-center">
												<svg
													className="w-5 h-5 text-pink-400 mr-3"
													fill="none"
													stroke="currentColor"
													viewBox="0 0 24 24"
												>
													<path
														strokeLinecap="round"
														strokeLinejoin="round"
														strokeWidth="2"
														d="M5 13l4 4L19 7"
													/>
												</svg>
												<span className="text-zinc-300">{feature}</span>
											</li>
										))}
									</ul>
								</div>

								<button
									className={`w-full py-3 px-6 rounded-xl font-medium transition-colors duration-200 
                    ${
											plan.recommended
												? "bg-pink-300 hover:bg-pink-400 text-black"
												: "bg-zinc-700 hover:bg-zinc-600 text-zinc-300"
										}`}
								>
									Choose this plan
								</button>
							</div>
						</div>
					))}
				</div>
			</div>
			
		</div>
	);
};

export default PricingPage;
