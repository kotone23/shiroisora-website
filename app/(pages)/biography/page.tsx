import Image from "next/image";
import BandMembers from "../../components/Profile";
import type { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'シロイソラ | Biography',
  description: 'シロイソラ | Biography',
}

export default function Home() {
	return (
		<>
			<div className="container mx-auto max-w-screen-lg md:mt-8">
				<div className="flex justify-center">
					<Image
						src="/images/profile.jpg"
						alt="profile"
						width={960}
						height={640}
						priority
					/>
				</div>
			</div>
			<div className="w-full mt-12 mb-16">
				<h1 className="text-center text-xl">シロイソラ</h1>
				<BandMembers />
			</div>
		</>
	);
}
