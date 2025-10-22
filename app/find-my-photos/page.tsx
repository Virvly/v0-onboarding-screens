"use client"

import { useState } from "react"
import { ArrowLeft } from "lucide-react"
import { useRouter } from "next/navigation"
import { SearchModeToggle } from "@/components/find-my-photos/search-mode-toggle"
import { SelfieCamera } from "@/components/find-my-photos/selfie-camera"
import { PhotoResultsGrid } from "@/components/find-my-photos/photo-results-grid"
import { EventSelector } from "@/components/find-my-photos/event-selector"
import { Button } from "@/components/ui/button"
import Image from "next/image"

// Mock photo data
const mockPhotos = [
  { id: "1", url: "/friends-celebrating-at-party.jpg", label: undefined },
  { id: "2", url: "/people-toasting-drinks.jpg", label: undefined },
  { id: "3", url: "/group-dinner-celebration.jpg", label: "CONFERENCE" },
  { id: "4", url: "/colorful-party-scene.jpg", label: undefined },
  { id: "5", url: "/friends-celebrating-at-party.jpg", label: undefined },
  { id: "6", url: "/people-toasting-drinks.jpg", label: undefined },
]

export default function FindMyPhotosPage() {
  const router = useRouter()
  const [searchMode, setSearchMode] = useState<"all" | "event">("all")
  const [selectedEvent, setSelectedEvent] = useState("Eva's Carnival")
  const [capturedPhoto, setCapturedPhoto] = useState<string | null>(null)
  const [showResults, setShowResults] = useState(false)
  const [selectedPhotos, setSelectedPhotos] = useState<string[]>([])

  const handlePhotoCapture = (imageUrl: string) => {
    setCapturedPhoto(imageUrl)
  }

  const handleFindPhotos = () => {
    setShowResults(true)
  }

  const handlePhotoToggle = (photoId: string) => {
    setSelectedPhotos((prev) => (prev.includes(photoId) ? prev.filter((id) => id !== photoId) : [...prev, photoId]))
  }

  const handleShareDownload = () => {
    console.log("[v0] Sharing/downloading photos:", selectedPhotos)
  }

  return (
    <div className="min-h-screen bg-black text-white pb-20">
      {/* Header */}
      <div className="sticky top-0 z-10 bg-black border-b border-[#333736]">
        <div className="flex items-center justify-between p-4">
          <button
            onClick={() => router.back()}
            className="flex items-center gap-2 text-[#f86701] hover:text-[#f98c07] transition-colors"
          >
            <ArrowLeft className="h-5 w-5" />
            <span className="text-sm font-medium">Back</span>
          </button>
        </div>
        <div className="px-4 pb-4">
          <h1 className="text-2xl font-bold mb-1">{showResults ? "Find My Photos" : "Find My Photos"}</h1>
        </div>
      </div>

      {/* Content */}
      <div className="p-4 space-y-6">
        {/* Search Mode Toggle */}
        <SearchModeToggle mode={searchMode} onModeChange={setSearchMode} />

        {!showResults ? (
          <>
            {/* Event Selector (only in event mode) */}
            {searchMode === "event" && <EventSelector selectedEvent={selectedEvent} onEventChange={setSelectedEvent} />}

            {/* Camera or Captured Photo */}
            {!capturedPhoto ? (
              <SelfieCamera onCapture={handlePhotoCapture} />
            ) : (
              <div className="space-y-6">
                {/* Captured Photo Preview */}
                <div className="relative bg-[#1a1d1d] rounded-2xl overflow-hidden aspect-[3/4] max-h-[500px] border-4 border-cyan-500">
                  <Image
                    src={capturedPhoto || "/placeholder.svg"}
                    alt="Captured selfie"
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Find Photos Button */}
                <Button
                  onClick={handleFindPhotos}
                  className="w-full bg-[#f86701] hover:bg-[#f98c07] text-white py-6 rounded-full text-lg font-semibold"
                >
                  Find Photos
                </Button>
              </div>
            )}
          </>
        ) : (
          <>
            {/* Results Grid */}
            <PhotoResultsGrid
              photos={mockPhotos}
              selectedPhotos={selectedPhotos}
              onPhotoToggle={handlePhotoToggle}
              matchCount={mockPhotos.length}
            />

            {/* Share/Download Button */}
            {selectedPhotos.length > 0 && (
              <Button
                onClick={handleShareDownload}
                className="w-full bg-[#f86701] hover:bg-[#f98c07] text-white py-6 rounded-full text-lg font-semibold"
              >
                Share to download
              </Button>
            )}
          </>
        )}
      </div>
    </div>
  )
}
