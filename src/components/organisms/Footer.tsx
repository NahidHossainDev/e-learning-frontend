"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { footerLinks, socialLinks } from "@/utils/constants";
import { motion } from "framer-motion";
import {
	Facebook,
	GraduationCap,
	Instagram,
	Linkedin,
	Twitter,
	Youtube,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const socialIcons = {
	Facebook: <Facebook />,
	Twitter: <Twitter />,
	Instagram: <Instagram />,
	Linkedin: <Linkedin />,
	Youtube: <Youtube />,
};

export function Footer() {
	const [email, setEmail] = useState("");

	const handleSubscribe = (e: React.FormEvent) => {
		e.preventDefault();
		console.log(email);

		setEmail("");
	};

	return (
		<footer className='bg-gray-50 dark:bg-gray-800 pt-16 border-t'>
			<div className='container px-4 sm:px-6 lg:px-8 mx-auto'>
				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-16'>
					<motion.div
						className='lg:col-span-2'
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.4 }}
					>
						<Link href='/' className='flex items-center space-x-2'>
							<GraduationCap size={32} className='text-primary' />
							<span className='font-bold text-xl'>EduSphere</span>
						</Link>

						<p className='mt-4 text-gray-600 dark:text-gray-400 max-w-md'>
							Empowering individuals to achieve their goals
							through accessible, high-quality education from
							industry experts.
						</p>

						<div className='mt-6'>
							<h3 className='font-semibold mb-3'>
								Join our newsletter
							</h3>
							<form
								onSubmit={handleSubscribe}
								className='flex gap-2'
							>
								<Input
									type='email'
									placeholder='Your email address'
									value={email}
									onChange={(e) => setEmail(e.target.value)}
									className='max-w-[240px]'
									required
								/>
								<Button type='submit'>Subscribe</Button>
							</form>
						</div>

						<div className='flex items-center space-x-4 mt-8'>
							{socialLinks.map((social) => (
								<a
									key={social.name}
									href={social.href}
									target='_blank'
									rel='noopener noreferrer'
									className='text-gray-500 hover:text-primary transition-colors'
									aria-label={social.name}
								>
									{socialIcons[social.icon]}
									<span className='sr-only'>
										{social.name}
									</span>
								</a>
							))}
						</div>
					</motion.div>

					<div className='col-span-3 grid grid-cols-1 sm:grid-cols-3 gap-8'>
						{footerLinks.map((category, i) => (
							<motion.div
								key={category.title}
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.4, delay: i * 0.1 }}
							>
								<h3 className='font-semibold mb-4'>
									{category.title}
								</h3>
								<ul className='space-y-3'>
									{category.links.map((link) => (
										<li key={link.name}>
											<Link
												href={link.href}
												className='text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-sky-400 transition-colors'
											>
												{link.name}
											</Link>
										</li>
									))}
								</ul>
							</motion.div>
						))}
					</div>
				</div>

				<div className='mt-12 py-6 border-t border-gray-200 dark:border-gray-700'>
					<div className='flex flex-col md:flex-row justify-between items-center'>
						<p className='text-gray-500 dark:text-gray-400 text-sm'>
							© {new Date().getFullYear()} EduSphere. All rights
							reserved.
						</p>
						<div className='mt-4 md:mt-0 flex flex-wrap gap-4 text-sm text-gray-500 dark:text-gray-400'>
							<Link
								href='/terms'
								className='hover:text-primary transition-colors'
							>
								Terms
							</Link>
							<Link
								href='/privacy'
								className='hover:text-primary transition-colors'
							>
								Privacy
							</Link>
							<Link
								href='/cookies'
								className='hover:text-primary transition-colors'
							>
								Cookies
							</Link>
							<Link
								href='/sitemap'
								className='hover:text-primary transition-colors'
							>
								Sitemap
							</Link>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
}
