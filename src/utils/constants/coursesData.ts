import { CourseCardProps } from "@/components/moleucles";

export const courses: CourseCardProps[] = [
	{
		id: 1,
		title: "Web Development Bootcamp 2025",
		instructor: {
			name: "Sarah Johnson",
			avatar: "https://i.pravatar.cc/150?img=1",
			initials: "SJ",
		},
		coverImage:
			"https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg",
		duration: "48 hours",
		students: 35420,
		rating: 4.9,
		category: "Development",
		level: "Beginner",
		price: 89.99,
		isFeatured: true,
	},
	{
		id: 2,
		title: "Advanced Machine Learning & AI",
		instructor: {
			name: "David Chen",
			avatar: "https://i.pravatar.cc/150?img=8",
			initials: "DC",
		},
		coverImage:
			"https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg",
		duration: "56 hours",
		students: 18240,
		rating: 4.8,
		category: "Data Science",
		level: "Advanced",
		price: 129.99,
	},
	{
		id: 3,
		title: "Digital Marketing Masterclass",
		instructor: {
			name: "Emily Parker",
			avatar: "https://i.pravatar.cc/150?img=5",
			initials: "EP",
		},
		coverImage:
			"https://images.pexels.com/photos/905163/pexels-photo-905163.jpeg",
		duration: "32 hours",
		students: 24680,
		rating: 4.7,
		category: "Marketing",
		level: "Intermediate",
		price: 69.99,
	},
	{
		id: 4,
		title: "UI/UX Design for Beginners",
		instructor: {
			name: "Alex Morgan",
			avatar: "https://i.pravatar.cc/150?img=3",
			initials: "AM",
		},
		coverImage:
			"https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg",
		duration: "36 hours",
		students: 21350,
		rating: 4.8,
		category: "Design",
		level: "Beginner",
		price: 74.99,
		isFeatured: true,
	},
	{
		id: 5,
		title: "Financial Accounting Fundamentals",
		instructor: {
			name: "Robert Williams",
			avatar: "https://i.pravatar.cc/150?img=11",
			initials: "RW",
		},
		coverImage:
			"https://images.pexels.com/photos/6802049/pexels-photo-6802049.jpeg",
		duration: "42 hours",
		students: 15780,
		rating: 4.6,
		category: "Finance",
		level: "Intermediate",
		price: 79.99,
	},
	{
		id: 6,
		title: "Photography Masterclass: From Beginner to Pro",
		instructor: {
			name: "Jessica Lee",
			avatar: "https://i.pravatar.cc/150?img=6",
			initials: "JL",
		},
		coverImage:
			"https://images.pexels.com/photos/1264210/pexels-photo-1264210.jpeg",
		duration: "28 hours",
		students: 19420,
		rating: 4.9,
		category: "Photography",
		level: "Beginner",
		price: 59.99,
	},
];

export const categories = [
	"All",
	"Development",
	"Design",
	"Marketing",
	"Data Science",
	"Finance",
	"Photography",
];
