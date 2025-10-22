"use client"

import { useState, useRef } from "react"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Phone, ImageIcon, Video } from "lucide-react"
import { useRouter } from "next/navigation"

export function CameraInterface() {
  const [isRecording, setIsRecording] = useState(false)
  const [showTooltip, setShowTooltip] = useState(true)
  const videoRef = useRef<HTMLVideoElement>(null)
  const router = useRouter()

  const handleCapture = () => {
    // Capture photo logic
    console.log("[v0] Photo captured")
  }

  const handleVideoToggle = () => {
    setIsRecording(!isRecording)
    console.log("[v0] Video recording:", !isRecording)
  }

  const handleGallery = () => {
    // Open gallery logic
    console.log("[v0] Opening gallery")
  }

  return (
    <div className="relative h-screen w-full bg-black overflow-hidden">
      {/* Background Image (simulating camera view) */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/event-party-people-celebrating.jpg')",
        }}
      />

      {/* Top Bar */}
      <div className="absolute top-0 left-0 right-0 flex items-center justify-between p-4 z-10">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => router.back()}
          className="bg-[#333736]/80 backdrop-blur-sm hover:bg-[#474d4b]/80 rounded-full"
        >
          <ArrowLeft className="h-5 w-5 text-white" />
        </Button>
        <span className="text-white text-sm font-medium">Back</span>
        <Button
          variant="ghost"
          size="icon"
          className="bg-[#333736]/80 backdrop-blur-sm hover:bg-[#474d4b]/80 rounded-full"
        >
          <Phone className="h-5 w-5 text-white" />
        </Button>
      </div>

      {/* Tooltip */}
      {showTooltip && (
        <div className="absolute top-20 left-1/2 -translate-x-1/2 z-10">
          <div className="bg-white rounded-lg px-4 py-3 shadow-lg relative">
            <div className="flex items-start gap-2">
              <span className="text-[#f86701] text-lg">💡</span>
              <p className="text-black text-sm max-w-[200px]">Picture/Videos taken are saved automatically</p>
            </div>
            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-0 h-0 border-l-8 border-r-8 border-t-8 border-transparent border-t-white" />
          </div>
        </div>
      )}

      {/* Bottom Controls */}
      <div className="absolute bottom-8 left-0 right-0 flex items-center justify-center gap-8 z-10 px-8">
        {/* Gallery Button */}
        <Button
          variant="ghost"
          size="icon"
          onClick={handleGallery}
          className="bg-[#333736]/80 backdrop-blur-sm hover:bg-[#474d4b]/80 rounded-lg h-14 w-14"
        >
          <ImageIcon className="h-6 w-6 text-white" />
        </Button>

        {/* Capture Button */}
        <button
          onClick={handleCapture}
          className="relative h-20 w-20 rounded-full bg-white border-4 border-white shadow-lg hover:scale-105 transition-transform"
        >
          <div className="absolute inset-2 rounded-full bg-[#f86701]" />
        </button>

        {/* Video Button */}
        <Button
          variant="ghost"
          size="icon"
          onClick={handleVideoToggle}
          className={`backdrop-blur-sm hover:bg-[#474d4b]/80 rounded-lg h-14 w-14 ${
            isRecording ? "bg-red-600/80" : "bg-[#333736]/80"
          }`}
        >
          <Video className="h-6 w-6 text-white" />
        </Button>
      </div>
    </div>
  )
}
