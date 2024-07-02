"use client";
import Link from "next/link";
import { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { BsArrowUpRight } from "react-icons/bs";
import { IconContext } from "react-icons";

export default function SpNav() {
	const [isOpen, setIsOpen] = useState(false);
	return (
		<>
			<div className="block sm:hidden fixed top-0 left-0 m-6 px-1.5 pt-2 py-1 bg-inherit/10 backdrop-blur-sm">
				<button type="button" onClick={() => setIsOpen(!isOpen)}>
					<IconContext.Provider value={{ size: "1.5em" }}>
						<AiOutlineMenu />
					</IconContext.Provider>
				</button>
			</div>
			<nav
				className={`fixed top-0 left-0 w-full h-full bg-black text-white z-50 flex flex-col justify-center items-center transition-transform duration-500 ${
					isOpen ? "-translate-y-0" : "-translate-y-[300%]"
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
						<Link href="/biography" className="hover:underline">
							Biography
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
						<Link href="/contact" className="hover:underline">
							Contact
						</Link>
					</li>
				</ul>
			</nav>
		</>
	);
}
