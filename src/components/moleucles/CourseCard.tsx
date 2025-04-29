import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
} from "@/components/ui/card";
import { Clock, Star, Users } from "lucide-react";
import Image from "next/image";
import { Button } from "../ui/button";

export interface CourseCardProps {
	id: number;
	title: string;
	instructor: {
		name: string;
		avatar: string;
		initials: string;
	};
	coverImage: string;
	duration: string;
	students: number;
	rating: number;
	category: string;
	level: "Beginner" | "Intermediate" | "Advanced";
	price: number;
	isFeatured?: boolean;
}

export function CourseCard({
	title,
	instructor,
	coverImage,
	duration,
	students,
	rating,
	category,
	level,
	price,
	isFeatured,
}: CourseCardProps) {
	return (
		<Card className='overflow-hidden py-0 transition-all duration-300 hover:shadow-lg h-full flex flex-col'>
			<div className='relative h-48'>
				<Image
					src={coverImage}
					alt={title}
					className='object-cover'
					fill
					sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
				/>
				{isFeatured && (
					<Badge className='absolute top-3 left-3 bg-sky-400 hover:bg-sky-500'>
						Featured
					</Badge>
				)}
				<Badge
					variant='outline'
					className='absolute top-3 right-3 bg-white/90 dark:bg-gray-800/90'
				>
					{level}
				</Badge>
			</div>
			<CardHeader className='p-4'>
				<div className='flex items-start justify-between'>
					<Badge variant='secondary' className='text-xs'>
						{category}
					</Badge>
					<div className='flex items-center'>
						<Star
							className='h-3.5 w-3.5 text-yellow-400 mr-1'
							fill='var(--color-yellow-400)'
						/>
						<span className='text-sm font-medium'>
							{rating.toFixed(1)}
						</span>
					</div>
				</div>
				<h3 className='font-semibold text-lg mt-2 line-clamp-2'>
					{title}
				</h3>
			</CardHeader>
			<CardContent className='p-4 pt-0 flex-grow'>
				<div className='flex items-center space-x-3 mb-3'>
					<Avatar className='h-6 w-6'>
						<AvatarImage
							src={instructor.avatar}
							alt={instructor.name}
						/>
						<AvatarFallback>{instructor.initials}</AvatarFallback>
					</Avatar>
					<span className='text-sm text-gray-600 dark:text-gray-400'>
						{instructor.name}
					</span>
				</div>
				<div className='flex items-center text-sm text-gray-500 dark:text-gray-400 space-x-4'>
					<div className='flex items-center'>
						<Clock className='h-3.5 w-3.5 mr-1' />
						<span>{duration}</span>
					</div>
					<div className='flex items-center'>
						<Users className='h-3.5 w-3.5 mr-1' />
						<span>{students.toLocaleString()}</span>
					</div>
				</div>
			</CardContent>
			<CardFooter className='p-4 pt-0 flex items-center justify-between border-t mt-2'>
				<span className='font-bold text-lg'>${price.toFixed(2)}</span>
				<Button variant='link' className='p-0 h-0'>
					View Course
				</Button>
			</CardFooter>
		</Card>
	);
}
