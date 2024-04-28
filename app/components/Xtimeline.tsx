"use client";
import { Timeline } from "react-twitter-widgets";

export default function Xtimeline() {
	return (
		<Timeline
			dataSource={{
				sourceType: "profile",
				screenName: "shiroisoraband",
			}}
			options={{
				lang: "ja",
				width: "360",
				height: "480",
			}}
		/>
	);
}
