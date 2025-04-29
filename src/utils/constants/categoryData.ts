export const categorySection: CategoryProps[] = [
	{
		name: "Web Development",
		icon: "💻",
		courseCount: 120,
		color: "bg-blue-100 dark:bg-blue-900/30",
	},
	{
		name: "Data Science",
		icon: "📊",
		courseCount: 90,
		color: "bg-green-100 dark:bg-green-900/30",
	},
	{
		name: "Digital Marketing",
		icon: "📱",
		courseCount: 75,
		color: "bg-yellow-100 dark:bg-yellow-900/30",
	},
	{
		name: "Design",
		icon: "🎨",
		courseCount: 110,
		color: "bg-purple-100 dark:bg-purple-900/30",
	},
	{
		name: "Business",
		icon: "💼",
		courseCount: 85,
		color: "bg-orange-100 dark:bg-orange-900/30",
	},
	{
		name: "Photography",
		icon: "📷",
		courseCount: 65,
		color: "bg-pink-100 dark:bg-pink-900/30",
	},
	{
		name: "Music",
		icon: "🎵",
		courseCount: 55,
		color: "bg-indigo-100 dark:bg-indigo-900/30",
	},
	{
		name: "Health & Fitness",
		icon: "💪",
		courseCount: 70,
		color: "bg-red-100 dark:bg-red-900/30",
	},
];

interface CategoryProps {
	name: string;
	icon: string;
	courseCount: number;
	color: string;
}
