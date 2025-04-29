interface StatProps {
	title: string;
	value: number;
	icon: string;
	suffix?: string;
	description: string;
}

export const stats: StatProps[] = [
	{
		title: "Active Students",
		value: 15000,
		suffix: "+",
		icon: "Users",
		description: "Students currently learning on our platform",
	},
	{
		title: "Total Courses",
		value: 650,
		suffix: "+",
		icon: "BookOpen",
		description: "Courses across different categories",
	},
	{
		title: "Expert Instructors",
		value: 125,
		suffix: "+",
		icon: "GraduationCap",
		description: "Industry experts teaching on our platform",
	},
	{
		title: "Success Rate",
		value: 95,
		suffix: "%",
		icon: "Award",
		description: "Students who complete their chosen courses",
	},
];
