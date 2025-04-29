"use client";

import { Button } from "@/components/ui/button";
import { categories, courses } from "@/utils/constants";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { useState } from "react";
import { CourseCard } from "../moleucles/CourseCard";

export function PopularCourses() {
	const [activeCategory, setActiveCategory] = useState("All");

	const filteredCourses =
		activeCategory === "All"
			? courses
			: courses.filter((course) => course.category === activeCategory);

	return (
		<section className='py-16 bg-white dark:bg-gray-900'>
			<div className='container px-4 sm:px-6 lg:px-8 mx-auto'>
				<div className='flex flex-col sm:flex-row justify-between items-start sm:items-center mb-12'>
					<div>
						<h2 className='text-3xl font-bold tracking-tight'>
							Popular Courses
						</h2>
						<p className='mt-2 text-gray-600 dark:text-gray-400 max-w-lg'>
							Explore our top-rated courses chosen by thousands of
							students
						</p>
					</div>
					<Button
						variant='link'
						className='text-primary hover:text-sky-600 p-0 h-auto mt-2 sm:mt-0'
					>
						Browse all courses{" "}
						<ChevronRight className='h-4 w-4 ml-1' />
					</Button>
				</div>

				<div className='mb-8 overflow-x-auto pb-2'>
					<div className='flex space-x-2 min-w-max'>
						{categories.map((category) => (
							<Button
								key={category}
								variant={
									activeCategory === category
										? "default"
										: "outline"
								}
								className={
									activeCategory === category
										? "bg-primary hover:bg-sky-500"
										: ""
								}
								onClick={() => setActiveCategory(category)}
							>
								{category}
							</Button>
						))}
					</div>
				</div>

				<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
					{filteredCourses.map((course) => (
						<motion.div
							key={course.id}
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.4 }}
						>
							<CourseCard {...course} />
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
}
