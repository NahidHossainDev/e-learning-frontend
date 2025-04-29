"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search as SearchIcon } from "lucide-react";
import { useState } from "react";

export function SearchBar() {
	const [query, setQuery] = useState("");

	const handleSearch = (e: React.FormEvent) => {
		e.preventDefault();
		// Handle search logic here
		console.log("Searching for:", query);
	};

	return (
		<div className='relative w-full max-w-[200px] md:max-w-[240px]'>
			<Input
				type='text'
				placeholder='Search courses...'
				value={query}
				onChange={(e) => setQuery(e.target.value)}
				className='pr-10 border border-gray-200 focus-visible:ring-sky-400'
			/>
			<Button
				type='submit'
				size='icon'
				variant='ghost'
				className='absolute right-0 top-0 h-full px-3'
				onClick={handleSearch}
			>
				<SearchIcon className='h-4 w-4' />
				<span className='sr-only'>Search</span>
			</Button>
		</div>
	);
}
