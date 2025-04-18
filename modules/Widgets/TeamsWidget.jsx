import { useState } from "react";
import { BotMessageSquareIcon, MoreVertical, PenIcon, Trash } from "lucide-react";

const teamMembers = [
	{
		name: "Devon Lane",
		role: "Marketing",
		image:
			"https://firebasestorage.googleapis.com/v0/b/ihatereading-4ba52.appspot.com/o/public%2Fusers%2Fuser-1.png?alt=media&token=9c572853-fd83-42c7-8f28-3b4bdb1fd247",
	},
	{
		name: "Cody Fisher",
		role: "Marketing",
		image:
			"https://firebasestorage.googleapis.com/v0/b/ihatereading-4ba52.appspot.com/o/public%2Fusers%2Fdownload.jpeg?alt=media&token=45387c9c-560c-4b54-919c-0037cdb4432b",
	},
	{
		name: "Ralph Edwards",
		role: "Marketing",
		image:
			"https://firebasestorage.googleapis.com/v0/b/ihatereading-4ba52.appspot.com/o/public%2Fusers%2Fdownload%20(1).jpeg?alt=media&token=246c25b6-58f1-427c-94c4-b9f884cc9941",
	},
	{
		name: "Jerome Bell",
		role: "Marketing",
		image:
			"https://firebasestorage.googleapis.com/v0/b/ihatereading-4ba52.appspot.com/o/public%2Fusers%2FRectangle%2026.png?alt=media&token=5e2d025c-2152-4a7b-9a23-ba296c1ecde2",
	},
];

const TeamsWidgets = () => {
	const [show, setShow] = useState(false);

	return (
		<div className="flex flex-col justify-center items-center w-full">
			<div className="p-6 rounded-xl max-w-lg mx-auto w-full">
				<h2 className="text-lg font-semibold text-zinc-100 mb-4">
					Team members
				</h2>
				<div className="space-y-3">
					{teamMembers.map((member, index) => (
						<div
							key={index}
							className="w-full flex items-center justify-between cursor-pointer bg-zinc-50  hover:bg-zinc-50 p-3 rounded-xl hover:px-6 transition-all duration-100 ease-in"
						>
							<div className="flex items-center gap-3">
								<img
									src={member.image}
									alt={member.name}
									className="rounded-full w-10 h-10"
								/>
								<div>
									<p className="text-zinc-900 font-medium">{member.name}</p>
									<p className="text-zinc-500 text-sm">{member.role}</p>
								</div>
							</div>
							<div className="group relative">
								<MoreVertical
									className="text-zinc-500 cursor-pointer group-hover:text-zinc-800 group-hover:rotate-180 transition-all duration-75 ease-in bg-zinc-50 rounded-full p-1"
									size={24}
								/>
								<span className="absolute right-0 group-hover:block group-hover:w-40 group-hover:h-auto hidden w-0 h-0 space-y-1 text-left p-2 rounded-xl bg-white text-black z-10 transition-all duration-100 ease-in">
									<p className="text-sm text-zinc-800 flex justify-start items-center gap-1 hover:bg-zinc-50 p-2 rounded-xl hover:px-3 transition-all ease-in duration-75">
										<BotMessageSquareIcon size={14} />
										Message
									</p>
									<p className="text-sm text-zinc-800 flex justify-start items-center gap-1  hover:bg-zinc-50 p-2 rounded-xl hover:px-3 transition-all ease-in duration-75">
										<PenIcon size={14} />
										Edit
									</p>
									<p className="text-sm text-red-800 flex justify-start items-center gap-1  hover:bg-zinc-50 p-2 rounded-xl hover:px-3 transition-all ease-in duration-75">
										<Trash size={14} />
										Remove
									</p>
								</span>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default TeamsWidgets;
