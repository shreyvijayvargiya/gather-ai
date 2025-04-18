import React from "react";
import "tailwindcss/tailwind.css";
import "../globals.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import AppBody from "../modules/Body";

function MyApp({ Component, pageProps }) {
	return (
		<div>
			<AppBody>
				<ToastContainer />
				<Component {...pageProps} />
			</AppBody>
		</div>
	);
}

export default MyApp;
