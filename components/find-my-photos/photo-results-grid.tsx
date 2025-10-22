"use client"

import { Check } from "lucide-react"
import Image from "next/image"

interface PhotoResultsGridProps {
  photos: Array<{
    id: string
    url: string
    label?: string
  }>
  selectedPhotos: string[]
  onPhotoToggle: (photoId: string) => void
  matchCount: number
}

export function PhotoResultsGrid({ photos, selectedPhotos, onPhotoToggle, matchCount }: PhotoResultsGridProps) {
  return (
    <div className="space-y-4">
      {/* Match Counter */}
      <div className="flex items-center justify-between">
        <p className="text-white text-sm font-medium">{matchCount} matches found</p>
        <button className="text-gray-400 hover:text-white">
          <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.35-4.35" />
          </svg>
        </button>
      </div>

      {/* Photo Grid */}
      <div className="grid grid-cols-3 gap-2">
        {photos.map((photo) => {
          const isSelected = selectedPhotos.includes(photo.id)
          return (
            <button
              key={photo.id}
              onClick={() => onPhotoToggle(photo.id)}
              className="relative aspect-square rounded-lg overflow-hidden group"
            >
              <Image src={photo.url || "/placeholder.svg"} alt="Match result" fill className="object-cover" />
              {/* Label Badge */}
              {photo.label && (
                <div className="absolute top-2 right-2 bg-[#2196F3] text-white text-xs px-2 py-1 rounded">
                  {photo.label}
                </div>
              )}
              {/* Selection Checkmark */}
              {isSelected && (
                <div className="absolute top-2 left-2 bg-[#f86701] rounded-full p-1">
                  <Check className="h-4 w-4 text-white" />
                </div>
              )}
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity" />
            </button>
          )
        })}
      </div>
    </div>
  )
}
