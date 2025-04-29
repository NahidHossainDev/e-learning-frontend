import { Header, Hero } from "@/components/organisms";

export function HomePage() {
	return (
		<div className='flex min-h-screen flex-col'>
			<Header />
			<main className='flex-1'>
				<Hero />
				{/* <PopularCourses /> */}
				{/* <Categories /> */}
				{/* <Statistics /> */}
				{/* <Testimonials /> */}
				{/* <Instructors /> */}
			</main>
			{/* <Footer /> */}
		</div>
	);
}
