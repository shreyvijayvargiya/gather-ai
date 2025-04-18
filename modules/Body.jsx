import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const AppBody = ({ children }) => {
	return (
		<div className="bg-black bg-opacity-90 h-full relative text-white">
			<Navbar />
			<div>{children}</div>
			<Footer />
		</div>
	);
};
export default AppBody;
