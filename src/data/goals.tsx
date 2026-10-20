import type { Goal } from "@/types/goal";

export const dummyGoals: Goal[] = [
	{
		id: "1",
		title: "Run a 10K",
		type: "milestone",
		target: 6.2,
		unit: "miles",
		progress: 4.2,
	},
	{
		id: "2",
		title: "Read 12 books",
		type: "milestone",
		target: 12,
		unit: "books",
		progress: 4,
	},
];
