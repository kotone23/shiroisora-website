import Image from "next/image";

export default function TopLogo() {
	return (
		<div className="flex justify-center items-center min-h-screen">
			<div className="sticky top-24 animate-slide-in-bck-center shared-image z-10 mb-8">
				<Image
					src="/images/logo_slate.png"
					alt="logo"
					width={128}
					height={128}
					priority
				/>
			</div>
		</div>
	);
}
