import React from "react";
import colors from "tailwindcss/colors";

const BackgroundDots = () => {
	return (
		<div className="absolute inset-0 w-full h-[50vh]">
			<div className="absolute inset-0 bg-transparent">
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

const ResetPassword = () => {
	return (
		<div className="container relative mx-auto py-20">
			<BackgroundDots />
			<div className="flex flex-col justify-center items-center md:py-10 flex-wrap mx-auto">
				<div className="relative md:w-1/2 lg:w-1/3 mx-auto py-10 md:py-20">
					<p className="text-xl font-semibold px-8">Reset Your Password</p>
					<p className="text-zinc-400 mb-2 px-8">
						Enter your email address below and we'll send you a link to reset
						your password.
					</p>
					<form className="mx-auto p-8 w-full">
						<div className="mb-4">
							<label
								className="block text-zinc-400 text-sm font-bold mb-2"
								htmlFor="email"
							>
								Email
							</label>
							<input
								type="email"
								id="email"
								className="shadow appearance-none border border-zinc-700 bg-zinc-800 text-white w-full py-2 px-3 leading-tight focus:outline-none focus:ring focus:ring-zinc-800"
								placeholder="Email"
								required
							/>
						</div>
						<button
							type="submit"
							className="bg-pink-300 text-black hover:bg-pink-400 w-full font-bold py-3 px-4 rounded focus:outline-none focus:shadow-outline"
						>
							Send Reset Link
						</button>
					</form>
				</div>
			</div>
		</div>
	);
};

export default ResetPassword;
