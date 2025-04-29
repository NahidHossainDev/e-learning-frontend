"use client";

import { Card, CardContent } from "@/components/ui/card";
import { categorySection } from "@/utils/constants";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

export function Categories() {
	return (
		<section className='py-16 bg-gray-50 dark:bg-gray-800'>
			<div className='container px-4 sm:px-6 lg:px-8 mx-auto'>
				<div className='text-center mb-12'>
					<h2 className='text-3xl font-bold tracking-tight'>
						Explore Categories
					</h2>
					<p className='mt-2 text-gray-600 dark:text-gray-400 max-w-lg mx-auto'>
						Discover courses in topics that interest you and match
						your career goals
					</p>
				</div>

				<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5'>
					{categorySection.map((category, index) => (
						<motion.div
							key={category.name}
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.4, delay: index * 0.1 }}
						>
							<Link
								href={`/categories/${category.name
									.toLowerCase()
									.replace(/\s+/g, "-")}`}
							>
								<Card className='h-full cursor-pointer hover:shadow-md transition-shadow'>
									<CardContent className='p-6 flex flex-col items-center text-center'>
										<div
											className={`w-16 h-16 rounded-full ${category.color} flex items-center justify-center text-2xl mb-4`}
										>
											<span
												role='img'
												aria-label={category.name}
											>
												{category.icon}
											</span>
										</div>
										<h3 className='font-semibold text-lg mb-1'>
											{category.name}
										</h3>
										<p className='text-sm text-gray-500 dark:text-gray-400 mb-3'>
											{category.courseCount} courses
										</p>
										<div className='text-primary hover:text-sky-600 mt-auto flex items-center text-sm font-medium'>
											Explore{" "}
											<ChevronRight className='h-4 w-4 ml-1' />
										</div>
									</CardContent>
								</Card>
							</Link>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
}
