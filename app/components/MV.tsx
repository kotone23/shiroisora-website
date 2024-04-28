"use client";
import YouTube from "react-youtube";

interface MVProps {
  videoId: string;
}

export default function MV({ videoId }: MVProps) {
	return (
		<YouTube
			videoId={videoId}
			iframeClassName="aspect-video w-full h-auto"
		/>
	);
}
