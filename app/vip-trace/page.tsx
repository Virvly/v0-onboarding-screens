"use client"

import { useState } from "react"
import { VipTraceHeader } from "@/components/vip-trace/vip-trace-header"
import { PhotoGrid } from "@/components/vip-trace/photo-grid"
import { UploadArea } from "@/components/vip-trace/upload-area"
import { Button } from "@/components/ui/button"
import { Upload, ImageIcon, Share2, Download } from "lucide-react"

// Sample photo data
const samplePhotos = [
  { id: "1", src: "/friends-celebrating-at-party.jpg", alt: "Event photo 1" },
  { id: "2", src: "/people-toasting-drinks.jpg", alt: "Event photo 2" },
  { id: "3", src: "/group-dinner-celebration.jpg", alt: "Event photo 3" },
  { id: "4", src: "/colorful-party-scene.jpg", alt: "Event photo 4" },
  { id: "5", src: "/friends-celebrating-at-party.jpg", alt: "Event photo 5" },
  { id: "6", src: "/people-toasting-drinks.jpg", alt: "Event photo 6" },
  { id: "7", src: "/group-dinner-celebration.jpg", alt: "Event photo 7" },
  { id: "8", src: "/colorful-party-scene.jpg", alt: "Event photo 8" },
  { id: "9", src: "/friends-celebrating-at-party.jpg", alt: "Event photo 9" },
  { id: "10", src: "/people-toasting-drinks.jpg", alt: "Event photo 10" },
  { id: "11", src: "/group-dinner-celebration.jpg", alt: "Event photo 11" },
  { id: "12", src: "/colorful-party-scene.jpg", alt: "Event photo 12" },
  { id: "13", src: "/friends-celebrating-at-party.jpg", alt: "Event photo 13" },
  { id: "14", src: "/people-toasting-drinks.jpg", alt: "Event photo 14" },
  { id: "15", src: "/group-dinner-celebration.jpg", alt: "Event photo 15" },
]

export default function VipTracePage() {
  const [mode, setMode] = useState<"select" | "upload" | "results">("select")
  const [selectedPhotos, setSelectedPhotos] = useState<string[]>([])
  const [uploadedPhoto, setUploadedPhoto] = useState<string>("")
  const [matchedPhotos, setMatchedPhotos] = useState<any[]>([])

  const handleTrace = () => {
    // Simulate facial recognition matching
    const matches = samplePhotos.slice(0, 9).map((photo, index) => ({
      ...photo,
      isMatch: true,
      label: index % 3 === 0 ? "CONFERENCE" : undefined,
    }))
    setMatchedPhotos(matches)
    setMode("results")
  }

  const handlePhotoUpload = (file: File) => {
    const reader = new FileReader()
    reader.onload = (e) => {
      setUploadedPhoto(e.target?.result as string)
    }
    reader.readAsDataURL(file)
  }

  const handleDownload = () => {
    // Implement download functionality
    console.log("[v0] Downloading matched photos")
  }

  const handleShare = () => {
    // Implement share functionality
    console.log("[v0] Sharing matched photos")
  }

  return (
    <div className="min-h-screen bg-black text-white p-6">
      <div className="max-w-md mx-auto">
        <VipTraceHeader matchCount={matchedPhotos.length} showMatchCount={mode === "results"} />

        {/* Action buttons */}
        <div className="flex gap-3 mb-6">
          <Button
            variant="outline"
            className="flex-1 bg-transparent border-white text-white hover:bg-white/10"
            onClick={() => setMode("select")}
          >
            <ImageIcon className="w-4 h-4 mr-2" />
            Select From Gallery
          </Button>
          <Button
            variant="outline"
            className="flex-1 bg-transparent border-white text-white hover:bg-white/10"
            onClick={() => setMode("upload")}
          >
            <Upload className="w-4 h-4 mr-2" />
            Upload a Photo
          </Button>
        </div>

        {/* Content based on mode */}
        {mode === "select" && (
          <>
            <h2 className="text-white text-lg font-semibold mb-4">Photo Gallery</h2>
            <PhotoGrid photos={samplePhotos} selectable={true} onSelectionChange={setSelectedPhotos} />
            {selectedPhotos.length > 0 && (
              <Button className="w-full mt-6 bg-[#f86701] hover:bg-[#f98c07] text-white" onClick={handleTrace}>
                Trace Photo
              </Button>
            )}
          </>
        )}

        {mode === "upload" && (
          <>
            <UploadArea onPhotoUpload={handlePhotoUpload} uploadedPhoto={uploadedPhoto} />
            {uploadedPhoto && (
              <Button className="w-full mt-6 bg-[#f86701] hover:bg-[#f98c07] text-white" onClick={handleTrace}>
                Trace Photo
              </Button>
            )}
          </>
        )}

        {mode === "results" && (
          <>
            <PhotoGrid photos={matchedPhotos} />
            <div className="flex gap-3 mt-6">
              <Button
                variant="outline"
                className="flex-1 bg-transparent border-white text-white hover:bg-white/10"
                onClick={handleShare}
              >
                <Share2 className="w-4 h-4 mr-2" />
                Share
              </Button>
              <Button className="flex-1 bg-[#f86701] hover:bg-[#f98c07] text-white" onClick={handleDownload}>
                <Download className="w-4 h-4 mr-2" />
                Download
              </Button>
            </div>
          </>
        )}
      </div>
    </div>
  )
}
