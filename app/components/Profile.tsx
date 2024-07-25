import React from "react";
import { FaInstagram, FaXTwitter } from "react-icons/fa6";

function BandMembers() {
	return (
		<div className="flex items-center justify-center mt-4">
			<div className="grid grid-cols-2 gap-0">
				<div className="flex flex-col items-center justify-center p-4">
					<span className="mb-0.5 text-muted-foreground text-xs">
						Vocal & Guitar
					</span>
					<div className="text-center">
						<p className="mb-2 text-base">ひかり</p>
						<div className="flex items-center justify-center space-x-2">
							<a
								href="https://x.com/shiroisora_vo"
								target="_blank"
								rel="noreferrer"
							>
								<FaXTwitter />
							</a>
						</div>
					</div>
				</div>

				<div className="flex flex-col items-center justify-center p-4">
					<span className="mb-0.5 text-muted-foreground text-xs">Keyboard</span>
					<div className="text-center">
						<p className="mb-2 text-base">田中琴音</p>
						<div className="flex items-center justify-center space-x-2">
							<a
								href="https://x.com/shiroisora_key"
								target="_blank"
								rel="noreferrer"
							>
								<FaXTwitter />
							</a>
							<a
								href="https://www.instagram.com/shiro.key"
								target="_blank"
								rel="noreferrer"
							>
								<FaInstagram />
							</a>
						</div>
					</div>
				</div>

				<div className="flex flex-col items-center justify-center p-4">
					<span className="mb-0.5 text-muted-foreground text-xs">Bass</span>
					<div className="text-center">
						<p className="mb-2 text-base">縫部たまき</p>
						<div className="flex items-center justify-center space-x-2">
							<a
								href="https://x.com/nui_bass_"
								target="_blank"
								rel="noreferrer"
							>
								<FaXTwitter />
							</a>
							<a
								href="https://instagram.com/nui_bass_"
								target="_blank"
								rel="noreferrer"
							>
								<FaInstagram />
							</a>
						</div>
					</div>
				</div>

				<div className="flex flex-col items-center justify-center p-4">
					<span className="mb-0.5 text-muted-foreground text-xs">Drum</span>
					<div className="text-center">
						<p className="mb-2 text-base">ねね</p>
						<div className="flex items-center justify-center space-x-2">
							<a
								href="https://x.com/shiroisora_dr"
								target="_blank"
								rel="noreferrer"
							>
								<FaXTwitter />
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default BandMembers;
