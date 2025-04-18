import { useState } from "react";
import { CheckCircle2, Circle, Clock, AlertCircle, MoreVertical } from "lucide-react";

const tasks = [
	{
		id: 1,
		assignedTo: {
			name: "Devon Lane",
			image:
				"https://firebasestorage.googleapis.com/v0/b/ihatereading-4ba52.appspot.com/o/public%2Fusers%2Fuser-1.png?alt=media&token=9c572853-fd83-42c7-8f28-3b4bdb1fd247",
		},
		status: "completed",
		dueDate: "2024-03-15",
	},
	{
		id: 2,
		assignedTo: {
			name: "Cody Fisher",
			image:
				"https://firebasestorage.googleapis.com/v0/b/ihatereading-4ba52.appspot.com/o/public%2Fusers%2Fdownload.jpeg?alt=media&token=45387c9c-560c-4b54-919c-0037cdb4432b",
		},
		status: "in-progress",
		dueDate: "2024-03-16",
	},
	{
		id: 3,
		assignedTo: {
			name: "Ralph Edwards",
			image:
				"https://firebasestorage.googleapis.com/v0/b/ihatereading-4ba52.appspot.com/o/public%2Fusers%2Fdownload%20(1).jpeg?alt=media&token=246c25b6-58f1-427c-94c4-b9f884cc9941",
		},
		status: "pending",
		dueDate: "2024-03-17",
	},
	{
		id: 4,
		assignedTo: {
			name: "Jerome Bell",
			image:
				"https://firebasestorage.googleapis.com/v0/b/ihatereading-4ba52.appspot.com/o/public%2Fusers%2FRectangle%2026.png?alt=media&token=5e2d025c-2152-4a7b-9a23-ba296c1ecde2",
		},
		status: "overdue",
		dueDate: "2024-03-14",
	},
];

const getStatusIcon = (status) => {
	switch (status) {
		case "completed":
			return <CheckCircle2 className="text-green-500" size={16} />;
		case "in-progress":
			return <Clock className="text-blue-500" size={16} />;
		case "overdue":
			return <AlertCircle className="text-red-500" size={16} />;
		default:
			return <Circle className="text-zinc-400" size={16} />;
	}
};

const getStatusColor = (status) => {
	switch (status) {
		case "completed":
			return "text-green-500";
		case "in-progress":
			return "text-blue-500";
		case "overdue":
			return "text-red-500";
		default:
			return "text-zinc-400";
	}
};

const TaskWidget = () => {
	return (
		<div className="flex flex-col justify-center items-center w-full">
			<div className="rounded-xl p-6 max-w-lg mx-auto w-full">
				<h2 className="text-lg font-semibold text-zinc-100 mb-4">Tasks</h2>
				<div className="space-y-3">
					{tasks.map((task) => (
						<div
							key={task.id}
							className="w-full flex items-center justify-between cursor-pointer bg-zinc-50 hover:bg-zinc-50 p-3 rounded-xl hover:px-6 transition-all duration-100 ease-in"
						>
							<div className="flex items-center gap-3">
								<div>
									<div className="flex items-center gap-2">
										<img
											src={task.assignedTo.image}
											alt={task.assignedTo.name}
											className="rounded-full w-5 h-5"
										/>
										<p className="text-zinc-500 text-sm">
											{task.assignedTo.name}
										</p>
									</div>
								</div>
							</div>
							<div className="flex flex-col items-center gap-1">
								{getStatusIcon(task.status)}
								<span className={`text-xs ${getStatusColor(task.status)}`}>
									{task.status}
								</span>
							</div>
							<div className="flex items-center gap-2">
								<MoreVertical
									className="text-zinc-500 cursor-pointer hover:text-zinc-800 transition-all duration-75 ease-in"
									size={20}
								/>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default TaskWidget;
