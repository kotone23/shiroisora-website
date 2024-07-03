import NavBar from "@/app/components/NavBar";
import SpNav from "@/app/components/SpNav";
import Image from "next/image";

export default function Home() {
	return (
		<>
			<div className="fixed h-screen w-screen top-0 -z-50">
				<Image
					alt="Mountains"
					src="/images/background.jpg"
					quality={100}
					fill
					sizes="100vw"
					style={{
						objectFit: "cover",
					}}
					className="animate-slide-in-bck-center"
				/>
			</div>
			<SpNav />
			<NavBar />
			<div className="flex justify-center items-center min-h-screen">
				<div className="animate-slide-in-bck-center shared-image">
					<Image
						src="/images/logo_slate.png"
						alt="logo"
						width={128}
						height={128}
						priority
					/>
				</div>
			</div>
		</>
	);
}
