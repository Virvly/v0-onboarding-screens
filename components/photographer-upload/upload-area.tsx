"use client"

import type React from "react"

import { Upload } from "lucide-react"
import { Button } from "@/components/ui/button"

interface UploadAreaProps {
  onFileSelect: (files: FileList) => void
  isDragging: boolean
  onDragEnter: () => void
  onDragLeave: () => void
  onDrop: (e: React.DragEvent) => void
}

export function UploadArea({ onFileSelect, isDragging, onDragEnter, onDragLeave, onDrop }: UploadAreaProps) {
  const handleBrowseClick = () => {
    const input = document.createElement("input")
    input.type = "file"
    input.multiple = true
    input.accept = "image/*,video/*"
    input.onchange = (e) => {
      const files = (e.target as HTMLInputElement).files
      if (files && files.length > 0) {
        onFileSelect(files)
      }
    }
    input.click()
  }

  return (
    <div
      className={`bg-[#474d4b] rounded-2xl p-12 flex flex-col items-center justify-center min-h-[300px] transition-colors ${
        isDragging ? "bg-[#5a605e]" : ""
      }`}
      onDragEnter={onDragEnter}
      onDragOver={(e) => e.preventDefault()}
      onDragLeave={onDragLeave}
      onDrop={onDrop}
    >
      <Upload className="w-16 h-16 text-white mb-6" strokeWidth={1.5} />
      <p className="text-white text-lg mb-6">Drag & Drop Photos/Videos</p>
      <Button
        onClick={handleBrowseClick}
        className="bg-[#f86701] hover:bg-[#d95a01] text-white px-8 py-6 rounded-full text-base font-medium"
      >
        Browse & upload
      </Button>
    </div>
  )
}
