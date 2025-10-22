"use client"

import type React from "react"

import { Upload } from "lucide-react"
import { useState } from "react"
import Image from "next/image"

interface UploadAreaProps {
  onPhotoUpload?: (file: File) => void
  uploadedPhoto?: string
}

export function UploadArea({ onPhotoUpload, uploadedPhoto }: UploadAreaProps) {
  const [isDragging, setIsDragging] = useState(false)

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(false)

    const file = e.dataTransfer.files[0]
    if (file && file.type.startsWith("image/")) {
      onPhotoUpload?.(file)
    }
  }

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      onPhotoUpload?.(file)
    }
  }

  if (uploadedPhoto) {
    return (
      <div className="flex flex-col items-center justify-center py-12">
        <div className="relative w-64 h-80 rounded-lg overflow-hidden">
          <Image
            src={uploadedPhoto || "/placeholder.svg"}
            alt="Uploaded reference photo"
            fill
            className="object-cover"
          />
        </div>
        <p className="text-white mt-4">Uploaded photo</p>
      </div>
    )
  }

  return (
    <div
      className={`flex flex-col items-center justify-center py-20 border-2 border-dashed rounded-lg transition-colors ${
        isDragging ? "border-[#f86701] bg-[#f86701]/10" : "border-[#474d4b]"
      }`}
      onDragOver={(e) => {
        e.preventDefault()
        setIsDragging(true)
      }}
      onDragLeave={() => setIsDragging(false)}
      onDrop={handleDrop}
    >
      <label className="cursor-pointer flex flex-col items-center">
        <div className="w-16 h-16 bg-[#f86701] rounded-full flex items-center justify-center mb-3">
          <Upload className="w-8 h-8 text-white" />
        </div>
        <span className="text-white text-sm">Upload a photo</span>
        <input type="file" accept="image/*" className="hidden" onChange={handleFileInput} />
      </label>
    </div>
  )
}
