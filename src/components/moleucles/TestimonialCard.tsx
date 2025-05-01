import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

export interface TestimonialProps {
	id: number;
	name: string;
	avatar: string;
	initials: string;
	role: string;
	content: string;
	rating: number;
	course: string;
}

export function TestimonialCard({
	name,
	avatar,
	initials,
	role,
	content,
	rating,
	course,
}: TestimonialProps) {
	return (
		<Card className='h-full'>
			<CardContent className='p-6'>
				<div className='flex items-center space-x-4 mb-4'>
					<Avatar className='h-12 w-12 border-2 border-sky-200'>
						<AvatarImage src={avatar} alt={name} />
						<AvatarFallback>{initials}</AvatarFallback>
					</Avatar>
					<div>
						<h4 className='font-semibold'>{name}</h4>
						<p className='text-sm text-gray-500 dark:text-gray-400'>
							{role}
						</p>
					</div>
				</div>

				<div className='flex mb-4'>
					{Array(5)
						.fill(0)
						.map((_, i) => (
							<Star
								key={i}
								className={`h-4 w-4 ${
									i < rating
										? "text-yellow-400 fill-yellow-400"
										: "text-gray-300 dark:text-gray-600"
								}`}
							/>
						))}
				</div>

				<blockquote className='text-gray-700 dark:text-gray-300 mb-4'>
					&quot;{content}&quot;
				</blockquote>

				<p className='text-sm text-gray-500 dark:text-gray-400 mt-auto'>
					Course:{" "}
					<span className='font-medium text-sky-500'>{course}</span>
				</p>
			</CardContent>
		</Card>
	);
}
