"use client";

import { GraduationCap } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { AuthButtons, MainNav, MobileNav, SearchBar } from "../moleucles";

export function Header() {
	const [isScrolled, setIsScrolled] = useState(false);
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			const scrollPosition = window.scrollY;
			setIsScrolled(scrollPosition > 50);
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<header
			className={`sticky top-0 z-50 w-full transition-all duration-300 ${
				isScrolled
					? "bg-white shadow-md dark:bg-gray-900"
					: "bg-transparent"
			}`}
		>
			<div className='container px-4 sm:px-6 lg:px-8 mx-auto'>
				<div className='flex h-16 items-center justify-between'>
					<div className='flex items-center'>
						<Link href='/' className='flex items-center space-x-2'>
							<GraduationCap size={32} className='text-sky-400' />
							<span className='font-bold text-xl hidden sm:inline-block'>
								EduSphere
							</span>
						</Link>
						<div className='hidden lg:ml-10 lg:flex lg:items-center lg:space-x-6'>
							<MainNav />
						</div>
					</div>

					<div className='hidden md:flex md:items-center md:space-x-4'>
						<SearchBar />
						<AuthButtons />
					</div>

					<div className='lg:hidden'>
						<MobileNav
							isOpen={isMobileMenuOpen}
							onOpenChange={setIsMobileMenuOpen}
						/>
					</div>
				</div>
			</div>
		</header>
	);
}
