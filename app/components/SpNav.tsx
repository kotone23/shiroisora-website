"use client";
import Link from "next/link";
import { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { BsArrowUpRight } from "react-icons/bs";

export default function SpNav() {
	const [isOpen, setIsOpen] = useState(false);
	return (
		<>
			<div className="block sm:hidden fixed top-0 left-0 m-4 bg-black px-4 py-3 text-white">
				<button type="button" onClick={() => setIsOpen(!isOpen)}>
					<AiOutlineMenu />
				</button>
			</div>
			<nav
				className={`fixed top-0 left-0 w-full h-full bg-black text-white z-50 flex flex-col justify-center items-center transition-transform duration-300 ${
					isOpen ? "-translate-y-0" : "-translate-y-full"
				}`}
				onClick={() => setIsOpen(!isOpen)}
			>
				<ul>
					<li className="my-5">
						<Link href="/" className="hover:underline">
							Top
						</Link>
					</li>
					<li className="my-5">
						<Link href="/live" className="hover:underline">
							Live
						</Link>
					</li>
					<li className="my-5">
						<Link href="/discography" className="hover:underline">
							Discography
						</Link>
					</li>
					<li className="my-5">
						<Link href="/#shop" className="hover:underline">
							<span className="flex items-center">
								Shop <BsArrowUpRight className="ml-0.5" />
							</span>
						</Link>
					</li>
					<li className="my-5">
						<Link href="/media" className="hover:underline">
							Media
						</Link>
					</li>
					<li className="my-5">
						<Link href="/#contact" className="hover:underline">
							Contact
						</Link>
					</li>
				</ul>
			</nav>
		</>
	);
}
