const payments = [
	{
		name: "Figma",
		date: "3 March 2025",
		amount: "$12",
		image:
			"https://firebasestorage.googleapis.com/v0/b/ihatereading-4ba52.appspot.com/o/public%2Fbrands%2FLogo.png-2.png?alt=media&token=b9c55419-1463-4a3d-89e3-4f5c74d2db90",
	},
	{
		name: "Slack",
		date: "4 March 2025",
		amount: "$15",
		image:
			"https://firebasestorage.googleapis.com/v0/b/ihatereading-4ba52.appspot.com/o/public%2Fbrands%2FLogo.png-1.png?alt=media&token=42f6c0ad-e6a4-426f-81b7-9b980a7228e1",
	},
	{
		name: "Google",
		date: "5 March 2025",
		amount: "$20",
		image:
			"https://firebasestorage.googleapis.com/v0/b/ihatereading-4ba52.appspot.com/o/public%2Fbrands%2FLogo.png-3.png?alt=media&token=ad19be3c-a464-4869-adb1-75b13df1522d",
	},
	{
		name: "Spotify",
		date: "14 March 2025",
		amount: "$10",
		image:
			"https://firebasestorage.googleapis.com/v0/b/ihatereading-4ba52.appspot.com/o/public%2Fbrands%2FLogo.png-5.png?alt=media&token=50fea414-9b0b-439c-9b55-cad0daaf6df3",
	},
];

const PaymentsWidget = () => {
	return (
		<div className="flex flex-col justify-center items-center w-full">
			<div className="p-6 rounded-xl max-w-lg mx-auto w-full">
				<h2 className="text-lg font-semibold text-zinc-100 mb-4">Payments</h2>
				<div className="space-y-3">
					{payments.map((payment, index) => (
						<div
							key={index}
							className="w-full flex items-center justify-between cursor-pointer bg-zinc-50 hover:bg-white p-3 rounded-xl hover:px-6 transition-all duration-100 ease-in"
						>
							<div className="flex items-center gap-3">
								<img
									src={payment.image}
									alt={payment.name}
									className="w-auto max-w-sm h-10"
								/>
								<div>
									<p className="text-gray-900 font-medium">{payment.name}</p>
									<p className="text-gray-500 text-sm">{payment.date}</p>
								</div>
							</div>
							<div>
								<p className="font-semibold text-gray-800 text-sm">
									-{payment.amount}
								</p>{" "}
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default PaymentsWidget;
