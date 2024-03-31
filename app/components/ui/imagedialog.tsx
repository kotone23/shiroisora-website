"use client";
import type React from "react";
import { useState } from "react";

// Propsの型定義
interface ImageDialogProps {
	imageSrc: string;
}

const ImageDialog: React.FC<ImageDialogProps> = ({ imageSrc }) => {
	const [isOpen, setIsOpen] = useState(false);

	const toggleDialog = () => setIsOpen(!isOpen);

	const handleContentClick = (
		event: React.MouseEvent<HTMLDivElement, MouseEvent>,
	) => {
		event.stopPropagation();
	};

	return (
		<div>
			<img
				src={imageSrc}
				alt="thumbnail"
				className="w-60 cursor-pointer"
				onClick={toggleDialog}
			/>
			{isOpen && (
				<div
					className="fixed inset-0 bg-black bg-opacity-50 z-40 flex justify-center items-center p-4"
					onClick={toggleDialog}
				>
					<div
						className="bg-white p-2 rounded-lg shadow-xl"
						onClick={handleContentClick}
					>
						<img
							src={imageSrc}
							alt="full-size"
							className="max-h-[80vh] max-w-[80vw]"
						/>
					</div>
				</div>
			)}
		</div>
	);
};

export default ImageDialog;
