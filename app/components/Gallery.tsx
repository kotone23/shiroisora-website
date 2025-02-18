"use client"

import { useState } from "react"
import Image from "next/image"
import { Dialog, DialogContent } from "../components/ui/dialog";
import { CiCalendar, CiCamera } from "react-icons/ci";

type GalleryImage = {
  src: string
  alt: string
  photographer: string
  period: string
}

const galleryImages: GalleryImage[] = [
  {
    src: "/images/profile.jpg",
    alt: "Band performing live on stage",
    photographer: "Jane Doe",
    period: "May 2023 - September 2024"
  },
  {
    src: "/placeholder.svg",
    alt: "Band performing live on stage",
    photographer: "Jane Doe",
    period: "May 2023 - September 2024"
  },
  {
    src: "/placeholder.svg",
    alt: "Band performing live on stage",
    photographer: "Jane Doe",
    period: "May 2023 - September 2024"
  },
]

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null)

  return (
    <div className="container mx-auto px-8 py-8">
      <h1 className="text-2xl mb-8 text-center">Gallery</h1>
      <div className="grid grid-cols sm:grid-cols-2 gap-6">
        {galleryImages.map((image, index) => (
          <div
            key={image.period}
            className="relative group cursor-pointer overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
            onClick={() => setSelectedImage(image)}
          >
            <Image
              src={image.src}
              alt={image.alt}
              width={600}
              height={400}
              className="object-cover w-full h-44 md:h-64 transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
              <p className="text-white text-sm mb-1 flex items-center">
                <CiCamera className="w-4 h-4 mr-2" />
                {image.photographer}
              </p>
              <p className="text-white text-sm flex items-center">
                <CiCalendar className="w-4 h-4 mr-2" />
                {image.period}
              </p>
            </div>
          </div>
        ))}
      </div>

      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-3xl">
          <div className="mt-4">
            {selectedImage && (
              <Image
                src={selectedImage.src}
                alt={selectedImage.alt}
                width={1200}
                height={800}
                className="w-full h-auto rounded-sm"
              />
            )}
            <div className="mt-4 flex justify-between items-center text-sm text-gray-500">
              <p className="flex items-center">
                <CiCamera className="w-4 h-4 mr-2" />
                {selectedImage?.photographer}
              </p>
              <p className="flex items-center">
                <CiCalendar className="w-4 h-4 mr-2" />
                {selectedImage?.period}
              </p>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}