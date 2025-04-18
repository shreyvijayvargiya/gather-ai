import React from "react";

const posts = [
	{
		title: "New features coming soon to Gather",
		tag: "Feature updates",
		date: "June 7, 2022",
		image: "/post-1.jpeg",
		description:
			"Et sit molestias distinctio quia totam magni eaque ipsum placeat.",
	},
	{
		title: "7 Must Have Tools For Web Designers",
		tag: "Insights",
		date: "June 7, 2022",
		image: "/post-2.jpeg",
		description:
			"Et sit molestias distinctio quia totam magni eaque ipsum placeat.",
	},
	{
		title: "Great tools and integrations for you",
		tag: "Feature updates",
		date: "June 7, 2022",
		image: "/post-3.jpeg",
		description:
			"Et sit molestias distinctio quia totam magni eaque ipsum placeat.",
	},
	{
		title: "New features coming soon to Gather",
		tag: "Feature updates",
		date: "June 7, 2022",
		image: "/post-1.jpeg",
		description:
			"Et sit molestias distinctio quia totam magni eaque ipsum placeat.",
	},
	{
		title: "7 Must Have Tools For Web Designers",
		tag: "Insights",
		date: "June 7, 2022",
		image: "/post-2.jpeg",
		description:
			"Et sit molestias distinctio quia totam magni eaque ipsum placeat.",
	},
	{
		title: "Great tools and integrations for you",
		tag: "Feature updates",
		date: "June 7, 2022",
		image: "/post-3.jpeg",
		description:
			"Et sit molestias distinctio quia totam magni eaque ipsum placeat.",
	},
	{
		title: "New features coming soon to Gather",
		tag: "Feature updates",
		date: "June 7, 2022",
		image: "/post-1.jpeg",
		description:
			"Et sit molestias distinctio quia totam magni eaque ipsum placeat.",
	},
	{
		title: "7 Must Have Tools For Web Designers",
		tag: "Insights",
		date: "June 7, 2022",
		image: "/post-2.jpeg",
		description:
			"Et sit molestias distinctio quia totam magni eaque ipsum placeat.",
	},
	{
		title: "Great tools and integrations for you",
		tag: "Feature updates",
		date: "June 7, 2022",
		image: "/post-3.jpeg",
		description:
			"Et sit molestias distinctio quia totam magni eaque ipsum placeat.",
	},
];

const Blog = () => {
	return (
		<div>
			<section className="text-white px-4 py-20">
				<div className="max-w-4xl mx-auto text-center space-y-4">
					<h2 className="text-7xl md:text-5xl font-bold">
						The latest insights and stories from us
					</h2>
					<p className="text-gray-400 text-base md:text-lg">
						Stay updated with our latest blog posts covering product updates, industry insights, and best practices for marketing teams.
					</p>
				</div>

				<div className="mt-14 max-w-6xl mx-auto grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
					{posts.map((post, idx) => (
						<div key={idx} className="space-y-3">
							<img
								src={post.image}
								alt={post.title}
								className="rounded-2xl w-full object-center hover:scale-105 h-60 transition-all duration-100 ease-in cursor-pointer my-4"
							/>
							<span className="inline-block text-sm text-white/70 rounded-full px-3 py-1">
								{post.tag}
							</span>
							<h3 className="text-lg font-semibold">{post.title}</h3>
							<p className="text-sm text-white/60">{post.description}</p>
							<p className="text-xs text-pink-200">{post.date}</p>
						</div>
					))}
				</div>
			</section>
		</div>
	);
};
export default Blog;
