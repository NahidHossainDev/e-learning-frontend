"use client";

import { InstructorCard } from "@/components/moleucles";
import { Button } from "@/components/ui/button";
import { instructors } from "@/utils/constants";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";

export function Instructors() {
	return (
		<section className='py-16 bg-white dark:bg-gray-900'>
			<div className='container px-4 sm:px-6 lg:px-8 mx-auto'>
				<div className='flex flex-col sm:flex-row justify-between items-start sm:items-center mb-12'>
					<div>
						<h2 className='text-3xl font-bold tracking-tight'>
							Featured Instructors
						</h2>
						<p className='mt-2 text-gray-600 dark:text-gray-400 max-w-lg'>
							Learn from industry experts with real-world
							experience
						</p>
					</div>
					<Button
						variant='link'
						className='text-sky-500 hover:text-sky-600 p-0 h-auto mt-2 sm:mt-0'
					>
						View all instructors{" "}
						<ChevronRight className='h-4 w-4 ml-1' />
					</Button>
				</div>

				<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6'>
					{instructors.map((instructor, index) => (
						<motion.div
							key={instructor.id}
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.4, delay: index * 0.1 }}
						>
							<InstructorCard {...instructor} />
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
}
