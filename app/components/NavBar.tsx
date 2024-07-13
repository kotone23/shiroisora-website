import { Link } from "next-view-transitions";
import { BsArrowUpRight } from "react-icons/bs";

export default function NavBar() {
	return (
		<>
			<div className="shared-nav hidden lg:block z-20 border-t-2 border-b-2 border-gray-900 sticky top-0 w-full">
				<div className="border-t-2 border-b-2 border-gray-300">
					<div className="bg-gray-950/90 backdrop-blur-xs text-white py-3">
						<nav className="container mx-auto max-w-screen-lg">
							<ul className="flex justify-center space-x-16 w-full">
								<li className="mx-2">
									<Link href="/" className="hover:underline">
										Top
									</Link>
								</li>
								<li className="mx-2">
									<Link href="/live" className="hover:underline">
										Live
									</Link>
								</li>
								<li className="mx-2">
									<Link href="/discography" className="hover:underline">
										Discography
									</Link>
								</li>
								<li className="mx-2">
									<Link href="/biography" className="hover:underline">
										Biography
									</Link>
								</li>
								<li className="mx-2">
									<Link href="/#shop" className="hover:underline">
										<span className="flex items-center">
											Shop <BsArrowUpRight className="ml-0.5" />
										</span>
									</Link>
								</li>
								<li className="mx-2">
									<Link href="/media" className="hover:underline">
										Media
									</Link>
								</li>
								<li className="mx-2">
									<Link href="/contact" className="hover:underline">
										Contact
									</Link>
								</li>
							</ul>
						</nav>
					</div>
				</div>
			</div>
		</>
	);
}
