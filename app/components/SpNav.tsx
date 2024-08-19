"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { BOOTH_URL } from "@/lib/band-metadata";

export default function SpNav() {
	const [isOpen, setIsOpen] = useState(false);
	return (
		<>
			<div className="block lg:hidden fixed top-0 left-0 m-6 px-1.5 pt-2 py-1 bg-inherit/10 backdrop-blur-sm">
				<button type="button" onClick={() => setIsOpen(!isOpen)}>
					<Image
						src="/images/humberger.svg"
						alt="humberger menu"
						width={24}
						height={24}
					/>
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
						<span className="flex items-center after:ml-0.5 after:content-['↗']">
							<a
								href={BOOTH_URL}
								target="_blank"
								rel="noreferrer"
								className="hover:underline"
							>
								Shop
							</a>
						</span>
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
