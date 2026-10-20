export type Goal = {
	id: string;
	title: string;
	description?: string;
	type: "routine" | "milestone";
	target: number;
	unit: string;
	progress: number;
};
