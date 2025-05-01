import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Users } from "lucide-react";

export interface InstructorProps {
	id: number;
	name: string;
	avatar: string;
	initials: string;
	role: string;
	students: number;
	courses: number;
	rating: number;
	specialties: string[];
	isFeatured?: boolean;
}

export function InstructorCard({
	name,
	avatar,
	initials,
	role,
	students,
	courses,
	specialties,
	isFeatured,
}: InstructorProps) {
	return (
		<Card className='h-full overflow-hidden hover:shadow-md transition-all py-0'>
			<CardContent className='p-0'>
				<div className='p-6 flex flex-col items-center text-center'>
					<div className='relative'>
						<Avatar className='h-24 w-24 border-4 border-sky-100 dark:border-sky-900/30'>
							<AvatarImage src={avatar} alt={name} />
							<AvatarFallback className='text-xl'>
								{initials}
							</AvatarFallback>
						</Avatar>
						{isFeatured && (
							<Badge className='absolute -top-2 -right-2 bg-primary hover:bg-sky-500'>
								Top Rated
							</Badge>
						)}
					</div>

					<h3 className='mt-4 font-semibold text-lg'>{name}</h3>
					<p className='text-sm text-gray-600 dark:text-gray-400 mb-3'>
						{role}
					</p>

					<div className='flex flex-wrap justify-center gap-2 mb-5'>
						{specialties.slice(0, 3).map((specialty) => (
							<Badge
								key={specialty}
								variant='secondary'
								className='font-normal'
							>
								{specialty}
							</Badge>
						))}
					</div>

					<div className='flex justify-center space-x-4 text-sm'>
						<div className='flex flex-col items-center'>
							<span className='font-bold text-lg'>{courses}</span>
							<span className='text-gray-500 dark:text-gray-400'>
								Courses
							</span>
						</div>
						<div className='w-px h-10 bg-gray-200 dark:bg-gray-700'></div>
						<div className='flex flex-col items-center'>
							<div className='font-bold text-lg flex items-center'>
								{students.toLocaleString()}
								<Users className='h-3.5 w-3.5 ml-1 text-gray-400' />
							</div>
							<span className='text-gray-500 dark:text-gray-400'>
								Students
							</span>
						</div>
					</div>
				</div>

				<div className='py-3 px-6 border-t bg-gray-50 dark:bg-gray-800 text-center'>
					<button className='text-sky-500 hover:text-sky-600 font-medium text-sm'>
						View Profile
					</button>
				</div>
			</CardContent>
		</Card>
	);
}
