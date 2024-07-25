import { Link } from "next-view-transitions";

export default function NavBar() {
	return (
		<nav className="view-transition-nav hidden lg:block z-20 sticky top-[4px] w-full">
			<div className="bg-gray-950/90 backdrop-blur-xs text-white py-3 box-shadow-custom">
				<div className="container mx-auto max-w-screen-lg">
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
							<span className="flex items-center after:ml-0.5 after:content-['↗']">
								<a
									href="https://shiroisora.booth.pm/"
									target="_blank"
									rel="noreferrer"
									className="hover:underline"
								>
									Shop
								</a>
							</span>
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
				</div>
			</div>
		</nav>
	);
}
