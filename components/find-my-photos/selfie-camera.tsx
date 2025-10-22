"use client"

import { Camera } from "lucide-react"
import { useState } from "react"

interface SelfieCameraProps {
  onCapture: (imageUrl: string) => void
}

export function SelfieCamera({ onCapture }: SelfieCameraProps) {
  const [isCameraActive, setIsCameraActive] = useState(false)

  const handleCaptureClick = () => {
    if (!isCameraActive) {
      setIsCameraActive(true)
      // Simulate camera activation
      setTimeout(() => {
        // Simulate photo capture
        onCapture("/user-profile-illustration.png")
      }, 1500)
    }
  }

  return (
    <div className="relative">
      {/* Camera View Area */}
      <div className="relative bg-[#1a1d1d] rounded-2xl overflow-hidden aspect-[3/4] max-h-[500px]">
        {isCameraActive ? (
          // Active camera view with preview
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: "url('/event-party-people-celebrating.jpg')",
            }}
          />
        ) : (
          // Empty state
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <div className="bg-[#f86701] rounded-full p-6 mb-4">
              <Camera className="h-12 w-12 text-white" />
            </div>
            <p className="text-gray-400 text-sm">Take a selfie to find your photos</p>
          </div>
        )}
      </div>

      {/* Capture Button */}
      <div className="flex justify-center mt-8">
        <button
          onClick={handleCaptureClick}
          className="relative h-20 w-20 rounded-full bg-white border-4 border-white shadow-lg hover:scale-105 transition-transform"
        >
          <div className="absolute inset-2 rounded-full bg-white" />
        </button>
      </div>
    </div>
  )
}
