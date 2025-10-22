"use client"

import { useState } from "react"
import Image from "next/image"

interface GalleryPhoto {
  id: string
  imageUrl: string
}

interface GalleryStreamProps {
  photos: GalleryPhoto[]
  autoMode?: boolean
  onAutoModeToggle?: (enabled: boolean) => void
}

export function GalleryStream({ photos, autoMode = true, onAutoModeToggle }: GalleryStreamProps) {
  const [selectedPhoto, setSelectedPhoto] = useState(photos[0]?.id)

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-white text-xl font-semibold">Gallery stream</h2>
        <button
          onClick={() => onAutoModeToggle?.(!autoMode)}
          className="bg-[#333736] text-white px-4 py-2 rounded-full text-sm hover:bg-[#474d4b] transition-colors"
        >
          Auto
        </button>
      </div>

      <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
        {photos.map((photo) => (
          <button
            key={photo.id}
            onClick={() => setSelectedPhoto(photo.id)}
            className={`relative flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden transition-all ${
              selectedPhoto === photo.id ? "ring-2 ring-[#f86701]" : "opacity-70 hover:opacity-100"
            }`}
          >
            <Image src={photo.imageUrl || "/placeholder.svg"} alt="Gallery thumbnail" fill className="object-cover" />
          </button>
        ))}
      </div>
    </div>
  )
}
