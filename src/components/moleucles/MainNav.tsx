import { navItems } from "@/utils/constants";
import Link from "next/link";

export function MainNav() {
	return (
		<nav className='flex items-center space-x-6'>
			{navItems.map((item) => (
				<Link
					key={item.href}
					href={item.href}
					className='text-sm font-medium transition-colors hover:text-sky-400'
				>
					{item.title}
				</Link>
			))}
		</nav>
	);
}
