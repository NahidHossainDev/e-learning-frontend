"use client";

import { Card, CardContent } from "@/components/ui/card";
import { stats } from "@/utils/constants";
import { motion } from "framer-motion";
import { Award, BookOpen, GraduationCap, Users } from "lucide-react";
import { useEffect, useState } from "react";

const iconMapper = {
	GraduationCap: <GraduationCap />,
	BookOpen: <BookOpen />,
	Users: <Users />,
	Award: <Award />,
};
export function Statistics() {
	const [counters, setCounters] = useState(stats.map(() => 0));
	const [inView, setInView] = useState(false);

	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				if (entries[0].isIntersecting) {
					setInView(true);
				}
			},
			{ threshold: 0.1 }
		);

		const statSection = document.getElementById("stats-section");
		if (statSection) {
			observer.observe(statSection);
		}

		return () => {
			if (statSection) {
				observer.unobserve(statSection);
			}
		};
	}, []);

	useEffect(() => {
		if (!inView) return;

		const countersEndValue = stats.map((stat) => stat.value);
		const duration = 2000; // ms
		const frameDuration = 1000 / 60; // 60fps
		const totalFrames = Math.round(duration / frameDuration);

		let frame = 0;
		const timer = setInterval(() => {
			frame++;
			const progress = frame / totalFrames;

			setCounters((prevCounters) =>
				prevCounters.map((_, index) => {
					return Math.floor(
						countersEndValue[index] * Math.min(progress, 1)
					);
				})
			);

			if (frame === totalFrames) {
				clearInterval(timer);
			}
		}, frameDuration);

		return () => clearInterval(timer);
	}, [inView]);

	return (
		<section id='stats-section' className='py-16 bg-white dark:bg-gray-900'>
			<div className='container px-4 sm:px-6 lg:px-8 mx-auto'>
				<div className='text-center mb-12'>
					<h2 className='text-3xl font-bold tracking-tight'>
						Our Impact in Numbers
					</h2>
					<p className='mt-2 text-gray-600 dark:text-gray-400 max-w-lg mx-auto'>
						Join thousands of students and instructors in our global
						learning community
					</p>
				</div>

				<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6'>
					{stats.map((stat, index) => (
						<motion.div
							key={stat.title}
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.4, delay: index * 0.1 }}
						>
							<Card className='h-full bg-gradient-to-br from-white to-sky-50 dark:from-gray-900 dark:to-gray-800 border-t-4 border-t-sky-400'>
								<CardContent className='p-6 flex flex-col items-center text-center'>
									<div className='mb-4 p-3 rounded-full bg-sky-100 dark:bg-sky-900/30'>
										{
											iconMapper[
												stat.icon as keyof typeof iconMapper
											]
										}
									</div>
									<div className='text-3xl font-bold mb-1'>
										{counters[index].toLocaleString()}
										{stat.suffix}
									</div>
									<h3 className='font-medium text-lg mb-2'>
										{stat.title}
									</h3>
									<p className='text-sm text-gray-500 dark:text-gray-400'>
										{stat.description}
									</p>
								</CardContent>
							</Card>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
}
