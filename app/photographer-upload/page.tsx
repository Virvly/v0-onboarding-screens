"use client"

import type React from "react"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { UploadArea } from "@/components/photographer-upload/upload-area"
import { FileUploadItem } from "@/components/photographer-upload/file-upload-item"
import { PageHeader } from "@/components/shared/page-header"

interface UploadingFile {
  file: File
  progress: number
  thumbnail?: string
}

export default function PhotographerUploadPage() {
  const router = useRouter()
  const [isDragging, setIsDragging] = useState(false)
  const [uploadingFiles, setUploadingFiles] = useState<UploadingFile[]>([])

  const handleFileSelect = (files: FileList) => {
    const newFiles = Array.from(files).map((file) => ({
      file,
      progress: 0,
      thumbnail: URL.createObjectURL(file),
    }))

    setUploadingFiles((prev) => [...prev, ...newFiles])

    // Simulate upload progress
    newFiles.forEach((uploadFile, index) => {
      simulateUpload(uploadingFiles.length + index)
    })
  }

  const simulateUpload = (fileIndex: number) => {
    const interval = setInterval(() => {
      setUploadingFiles((prev) => {
        const updated = [...prev]
        if (updated[fileIndex]) {
          updated[fileIndex].progress += Math.random() * 15 + 5
          if (updated[fileIndex].progress >= 100) {
            updated[fileIndex].progress = 100
            clearInterval(interval)
          }
        }
        return updated
      })
    }, 500)
  }

  const handleDragEnter = () => {
    setIsDragging(true)
  }

  const handleDragLeave = () => {
    setIsDragging(false)
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(false)
    const files = e.dataTransfer.files
    if (files && files.length > 0) {
      handleFileSelect(files)
    }
  }

  const allUploadsComplete = uploadingFiles.every((f) => f.progress >= 100)

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-2xl mx-auto px-6 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <button onClick={() => router.back()} className="flex items-center gap-2 text-[#f86701]">
            <ArrowLeft className="w-5 h-5" />
            <span>Back</span>
          </button>
          <PageHeader />
        </div>

        <h1 className="text-2xl font-semibold mb-8">Upload From External Device</h1>

        {/* Upload Area */}
        <UploadArea
          onFileSelect={handleFileSelect}
          isDragging={isDragging}
          onDragEnter={handleDragEnter}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
        />

        {/* Uploading Files */}
        {uploadingFiles.length > 0 && (
          <div className="mt-8">
            {uploadingFiles.map((uploadFile, index) => (
              <FileUploadItem
                key={index}
                file={uploadFile.file}
                progress={uploadFile.progress}
                thumbnail={uploadFile.thumbnail}
              />
            ))}
          </div>
        )}

        {/* Done Button */}
        {uploadingFiles.length > 0 && (
          <div className="fixed bottom-0 left-0 right-0 p-6 bg-black">
            <div className="max-w-2xl mx-auto">
              <Button
                onClick={() => router.push("/event-dashboard")}
                disabled={!allUploadsComplete}
                className="w-full bg-[#f86701] hover:bg-[#d95a01] text-white py-6 rounded-full text-lg font-medium disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Done
              </Button>
            </div>
          </div>
        )}

        {/* Home Indicator */}
        <div className="fixed bottom-2 left-1/2 -translate-x-1/2 w-32 h-1 bg-white/30 rounded-full" />
      </div>
    </div>
  )
}
