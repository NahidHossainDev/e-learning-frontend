"use client";

import { TestimonialCard } from "@/components/moleucles";
import { Button } from "@/components/ui/button";
import { testimonials } from "@/utils/constants/testimonialData";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export function Testimonials() {
	const [activeIndex, setActiveIndex] = useState(0);
	const [autoplay, setAutoplay] = useState(true);
	const autoplayRef = useRef<NodeJS.Timeout | null>(null);
	const maxVisibleItems = 3;
	const totalSlides = Math.ceil(testimonials.length / maxVisibleItems);

	const resetAutoplay = () => {
		if (autoplayRef.current) {
			clearInterval(autoplayRef.current);
		}

		if (autoplay) {
			autoplayRef.current = setInterval(() => {
				setActiveIndex((prevIndex) => (prevIndex + 1) % totalSlides);
			}, 5000);
		}
	};

	useEffect(() => {
		resetAutoplay();
		return () => {
			if (autoplayRef.current) {
				clearInterval(autoplayRef.current);
			}
		};
	}, [autoplay, totalSlides]);

	const handlePrev = () => {
		setActiveIndex(
			(prevIndex) => (prevIndex - 1 + totalSlides) % totalSlides
		);
		setAutoplay(false);
	};

	const handleNext = () => {
		setActiveIndex((prevIndex) => (prevIndex + 1) % totalSlides);
		setAutoplay(false);
	};

	const getVisibleTestimonials = () => {
		const startIndex = activeIndex * maxVisibleItems;
		return testimonials.slice(startIndex, startIndex + maxVisibleItems);
	};

	return (
		<section className='py-16 bg-gray-50 dark:bg-gray-800'>
			<div className='container px-4 sm:px-6 lg:px-8 mx-auto'>
				<div className='flex flex-col sm:flex-row justify-between items-start sm:items-center mb-12'>
					<div>
						<h2 className='text-3xl font-bold tracking-tight'>
							What Our Students Say
						</h2>
						<p className='mt-2 text-gray-600 dark:text-gray-400 max-w-lg'>
							Hear from our community of learners about their
							experience
						</p>
					</div>
					<div className='flex space-x-2 mt-4 sm:mt-0'>
						<Button
							variant='outline'
							size='icon'
							onClick={handlePrev}
							className='rounded-full'
							aria-label='Previous testimonial'
						>
							<ChevronLeft className='h-4 w-4' />
						</Button>
						<Button
							variant='outline'
							size='icon'
							onClick={handleNext}
							className='rounded-full'
							aria-label='Next testimonial'
						>
							<ChevronRight className='h-4 w-4' />
						</Button>
					</div>
				</div>

				<div className='relative'>
					<div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
						{getVisibleTestimonials().map((testimonial, index) => (
							<motion.div
								key={testimonial.id}
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{
									duration: 0.4,
									delay: index * 0.1,
								}}
							>
								<TestimonialCard {...testimonial} />
							</motion.div>
						))}
					</div>

					<div className='flex justify-center space-x-2 mt-8'>
						{Array(totalSlides)
							.fill(0)
							.map((_, index) => (
								<button
									key={index}
									onClick={() => {
										setActiveIndex(index);
										setAutoplay(false);
									}}
									className={`w-2.5 h-2.5 rounded-full transition-all ${
										activeIndex === index
											? "bg-primary w-6"
											: "bg-gray-300 dark:bg-gray-600"
									}`}
									aria-label={`Go to slide ${index + 1}`}
								/>
							))}
					</div>
				</div>
			</div>
		</section>
	);
}
