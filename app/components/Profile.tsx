import React from "react";
import { FaInstagram, FaXTwitter } from "react-icons/fa6";

function BandMembers() {
	return (
    <div className="flex items-center justify-center mt-8">
		<div className="grid grid-cols-2 gap-1">
			<div className="flex flex-col items-center justify-center p-4">
				<span className="mb-2 text-muted-foreground text-xs">Bass</span>
				<div className="text-center">
					<p className="mb-1 text-lg">星野あかり</p>
					<div className="flex items-center justify-center space-x-2">
						<FaXTwitter />
						<FaInstagram />
					</div>
				</div>
			</div>

			<div className="flex flex-col items-center justify-center p-4">
				<span className="mb-2 text-muted-foreground text-xs">Vocal & Guitar</span>
				<div className="text-center">
					<p className="mb-1 text-lg">さやか</p>
					<div className="flex items-center justify-center space-x-2">
						<FaXTwitter />
					</div>
				</div>
			</div>

			<div className="flex flex-col items-center justify-center p-4">
				<span className="mb-2 text-muted-foreground text-xs">Keyboard</span>
				<div className="text-center">
					<p className="mb-1 text-lg">遠藤智佳</p>
					<div className="flex items-center justify-center space-x-2">
						<FaXTwitter />
					</div>
				</div>
			</div>

			<div className="flex flex-col items-center justify-center p-4">
				<span className="mb-2 text-muted-foreground text-xs">Drum</span>
				<div className="text-center">
					<p className="mb-1 text-lg">ねん</p>
					<div className="flex items-center justify-center space-x-2">
						<FaXTwitter />
					</div>
				</div>
			</div>
		</div>
    </div>
	);
}

export default BandMembers;
