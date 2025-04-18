import React from "react";
import { BsGithub } from "react-icons/bs";
import { BiLogoGoogle } from "react-icons/bi";
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

const Login = () => {
	return (
		<div className="container relative mx-auto py-20">
			<BackgroundDots />
			<div className="flex flex-col justify-center items-center md:py-10 flex-wrap mx-auto">
				<div className="relative md:w-1/2 lg:w-1/3 mx-auto py-10 md:py-20">
					<p className="text-xl font-semibold px-8">Login</p>
					<p className="text-zinc-400 mb-2 px-8">
						One click to get started easily
					</p>
					<form className="mx-auto p-8 w-full">
						{["email", "password"].map((field, index) => (
							<div className="mb-4" key={index}>
								<label
									className="block text-zinc-400 text-sm font-bold mb-2"
									htmlFor={field}
								>
									{field.charAt(0).toUpperCase() + field.slice(1)}
								</label>
								<input
									type={field}
									id={field}
									className="appearance-none border border-zinc-700 bg-zinc-800 text-white w-full py-2 px-3 leading-tight focus:outline-none focus:ring-zinc-700 focus:ring"
									placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
									required
								/>
							</div>
						))}

						<button
							type="submit"
							className="bg-pink-300 text-black hover:bg-pink-400 w-full py-3 px-4 rounded focus:outline-none focus:shadow-outline"
						>
							Login
						</button>
					</form>

					<p className="text-zinc-400 text-sm text-center p-4">
						or continue with
					</p>
					<div className="flex justify-center flex-wrap gap-2">
						{[
							{
								icon: <BiLogoGoogle className="mr-2" />,
								text: "Login with Google",
							},
							{
								icon: <BsGithub className="mr-2" />,
								text: "Login with GitHub",
							},
						].map((item, index) => (
							<button
								key={index}
								className="flex items-center bg-transparent border border-zinc-800 rounded px-4 py-2 hover:bg-zinc-100 hover:text-black"
							>
								{item.icon}
								{item.text}
							</button>
						))}
					</div>
					<p className="p-4 text-center text-sm">
						<a href="/reset-password" className="text-pink-400 underline">
							click here
						</a>{" "}
						to reset your password
					</p>
				</div>
			</div>
		</div>
	);
};

export default Login;
