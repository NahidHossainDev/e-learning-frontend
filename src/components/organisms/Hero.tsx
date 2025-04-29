"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ChevronRight, Star } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

export function Hero() {
	// Animation variants
	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.2,
				delayChildren: 0.2,
			},
		},
	};

	const itemVariants = {
		hidden: { opacity: 0, y: 20 },
		visible: {
			opacity: 1,
			y: 0,
			transition: { duration: 0.6, ease: "easeOut" },
		},
	};

	const [animationComplete, setAnimationComplete] = useState(false);

	useEffect(() => {
		const timer = setTimeout(() => setAnimationComplete(true), 1200);
		return () => clearTimeout(timer);
	}, []);

	return (
		<section className='relative overflow-hidden py-16 md:py-24 bg-gradient-to-b from-white to-sky-50 dark:from-gray-900 dark:to-gray-800'>
			<div className='container px-4 sm:px-6 lg:px-8 mx-auto'>
				<div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
					<motion.div
						className='flex flex-col'
						initial='hidden'
						animate='visible'
						variants={containerVariants}
					>
						<motion.h1
							className='text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-gray-900 dark:text-white'
							variants={itemVariants}
						>
							Learn Without{" "}
							<span className='text-primary'>Limits</span>
						</motion.h1>
						<motion.p
							className='mt-6 text-lg text-gray-600 dark:text-gray-300 max-w-lg'
							variants={itemVariants}
						>
							Discover a world of knowledge with courses taught by
							industry experts. Start your learning journey today
							and unlock your potential.
						</motion.p>
						<motion.div
							className='mt-8 flex flex-col sm:flex-row gap-4'
							variants={itemVariants}
						>
							<Button size='lg'>
								Browse Courses{" "}
								<ChevronRight className='ml-2 h-4 w-4' />
							</Button>
							<Button size='lg' variant='outline'>
								Watch Demo
							</Button>
						</motion.div>
						<motion.div
							className='mt-8 flex items-center space-x-4'
							variants={itemVariants}
						>
							<div className='flex -space-x-2'>
								{[1, 2, 3, 4].map((i) => (
									<div
										key={i}
										className='w-8 h-8 rounded-full border-2 border-white bg-gray-200 overflow-hidden'
									>
										<Image
											src={`https://i.pravatar.cc/100?img=${
												i + 10
											}`}
											alt={`User ${i}`}
											width={32}
											height={32}
										/>
									</div>
								))}
							</div>
							<p className='text-sm text-gray-600 dark:text-gray-400'>
								<span className='font-semibold'>10,000+</span>{" "}
								students already enrolled
							</p>
						</motion.div>
					</motion.div>

					<motion.div
						className='relative'
						initial={{ opacity: 0, scale: 0.95 }}
						animate={{
							opacity: 1,
							scale: 1,
							transition: { duration: 0.8, delay: 0.4 },
						}}
					>
						<div className='relative rounded-lg overflow-hidden shadow-xl'>
							<Image
								src='https://images.pexels.com/photos/4145354/pexels-photo-4145354.jpeg'
								alt='Student learning online'
								width={600}
								height={400}
								className='w-full h-auto object-cover'
							/>

							{animationComplete && (
								<motion.div
									className='absolute bottom-5 left-5 bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg max-w-[200px]'
									initial={{ opacity: 0, y: 20 }}
									animate={{
										opacity: 1,
										y: 0,
										transition: { duration: 0.4 },
									}}
								>
									<div className='flex items-center mb-2'>
										<div className='flex text-yellow-400'>
											{[1, 2, 3, 4, 5].map((_, i) => (
												<Star
													key={i}
													fill='var(--color-yellow-400)'
													size={15}
													className='mr-1'
												/>
											))}
										</div>
										<span className='ml-2 text-sm font-medium'>
											4.9/5.0
										</span>
									</div>
									<p className='text-xs text-gray-500 dark:text-gray-400'>
										&quot;EduSphere transformed my career
										with high-quality courses.&quot;
									</p>
								</motion.div>
							)}

							{animationComplete && (
								<motion.div
									className='absolute top-4 right-4 bg-white dark:bg-gray-800 py-2 px-4 rounded-full shadow-lg'
									initial={{ opacity: 0, scale: 0.8 }}
									animate={{
										opacity: 1,
										scale: 1,
										transition: {
											duration: 0.4,
											delay: 0.2,
										},
									}}
								>
									<p className='text-xs font-medium'>
										<span className='text-sky-500'>
											15% OFF
										</span>{" "}
										first course
									</p>
								</motion.div>
							)}
						</div>
					</motion.div>
				</div>
			</div>

			{/* Decorative elements */}
			{/* <div className='absolute -top-10 right-10 w-40 h-40 bg-sky-100 dark:bg-sky-900/20 rounded-full blur-3xl opacity-50'></div>
			<div className='absolute bottom-10 -left-10 w-32 h-32 bg-sky-100 dark:bg-sky-900/20 rounded-full blur-3xl opacity-50'></div> */}
		</section>
	);
}
