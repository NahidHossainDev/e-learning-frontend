"use client";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Link from "next/link";

import { GraduationCap, Menu, X } from "lucide-react";
import { SearchBar } from "./SearchBar";

const navItems = [
	{ title: "Home", href: "/" },
	{ title: "Courses", href: "/courses" },
	{ title: "Categories", href: "/categories" },
	{ title: "Instructors", href: "/instructors" },
	{ title: "About", href: "/about" },
	{ title: "Contact", href: "/contact" },
];

interface MobileNavProps {
	isOpen: boolean;
	onOpenChange: (open: boolean) => void;
}

export function MobileNav({ isOpen, onOpenChange }: MobileNavProps) {
	return (
		<Sheet open={isOpen} onOpenChange={onOpenChange}>
			<SheetTrigger asChild>
				<Button variant='ghost' size='icon' className='lg:hidden'>
					<Menu className='h-6 w-6' />
					<span className='sr-only'>Toggle menu</span>
				</Button>
			</SheetTrigger>
			<SheetContent side='right' className='w-[300px] sm:w-[350px] p-0'>
				<div className='flex flex-col h-full'>
					<div className='flex items-center justify-between px-6 py-4 border-b'>
						<Link href='/' className='flex items-center space-x-2'>
							<GraduationCap size={24} className='text-sky-400' />
							<span className='font-bold text-lg'>EduSphere</span>
						</Link>
						<SheetTrigger asChild>
							<Button variant='ghost' size='icon'>
								<X className='h-5 w-5' />
								<span className='sr-only'>Close menu</span>
							</Button>
						</SheetTrigger>
					</div>
					<div className='px-6 py-4'>
						<SearchBar />
					</div>
					<nav className='flex-1 px-6 py-4'>
						<ul className='space-y-4'>
							{navItems.map((item) => (
								<li key={item.href}>
									<Link
										href={item.href}
										className='block py-2 text-base font-medium transition-colors hover:text-sky-400'
										onClick={() => onOpenChange(false)}
									>
										{item.title}
									</Link>
								</li>
							))}
						</ul>
					</nav>
					<div className='border-t px-6 py-4'>
						<div className='flex flex-col space-y-3'>
							<Button
								variant='outline'
								className='w-full justify-center'
							>
								Sign In
							</Button>
							<Button className='w-full justify-center bg-sky-400 hover:bg-sky-500'>
								Sign Up
							</Button>
						</div>
					</div>
				</div>
			</SheetContent>
		</Sheet>
	);
}
