import { Button } from "@/components/ui/button";
import Link from "next/link";

export function AuthButtons() {
	return (
		<div className='flex items-center space-x-2'>
			<Link href='/login'>
				<Button variant='ghost' size='sm'>
					Log In
				</Button>
			</Link>
			<Link href='/signup'>
				<Button size='sm'>Sign Up</Button>
			</Link>
		</div>
	);
}
