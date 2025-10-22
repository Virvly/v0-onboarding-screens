"use client"

import { useState } from "react"
import Image from "next/image"
import { Check } from "lucide-react"

interface Photo {
  id: string
  src: string
  alt: string
  isMatch?: boolean
  label?: string
}

interface PhotoGridProps {
  photos: Photo[]
  selectable?: boolean
  onSelectionChange?: (selectedIds: string[]) => void
}

export function PhotoGrid({ photos, selectable = false, onSelectionChange }: PhotoGridProps) {
  const [selectedPhotos, setSelectedPhotos] = useState<Set<string>>(new Set())

  const togglePhoto = (photoId: string) => {
    if (!selectable) return

    const newSelected = new Set(selectedPhotos)
    if (newSelected.has(photoId)) {
      newSelected.delete(photoId)
    } else {
      newSelected.add(photoId)
    }
    setSelectedPhotos(newSelected)
    onSelectionChange?.(Array.from(newSelected))
  }

  return (
    <div className="grid grid-cols-3 gap-2">
      {photos.map((photo) => (
        <div
          key={photo.id}
          className="relative aspect-square cursor-pointer overflow-hidden rounded-lg"
          onClick={() => togglePhoto(photo.id)}
        >
          <Image src={photo.src || "/placeholder.svg"} alt={photo.alt} fill className="object-cover" />

          {/* Selection checkmark */}
          {selectable && selectedPhotos.has(photo.id) && (
            <div className="absolute top-2 right-2 w-6 h-6 bg-[#f86701] rounded-full flex items-center justify-center">
              <Check className="w-4 h-4 text-white" />
            </div>
          )}

          {/* Match indicator for results */}
          {photo.isMatch && (
            <div className="absolute top-2 right-2 w-6 h-6 bg-[#f86701] rounded-full flex items-center justify-center">
              <Check className="w-4 h-4 text-white" />
            </div>
          )}

          {/* Label overlay */}
          {photo.label && (
            <div className="absolute top-2 left-2 bg-blue-600 text-white text-xs px-2 py-1 rounded">{photo.label}</div>
          )}
        </div>
      ))}
    </div>
  )
}
