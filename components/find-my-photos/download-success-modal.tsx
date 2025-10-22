"use client"

import { Check } from "lucide-react"

interface DownloadSuccessModalProps {
  isOpen: boolean
  onOpenFiles: () => void
}

export function DownloadSuccessModal({ isOpen, onOpenFiles }: DownloadSuccessModalProps) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
      <div className="bg-black rounded-3xl p-8 max-w-sm w-full text-center space-y-6">
        {/* Top notch indicator */}
        <div className="flex justify-center mb-4">
          <div className="w-12 h-1 bg-gray-600 rounded-full" />
        </div>

        {/* Success icon */}
        <div className="flex justify-center">
          <div className="w-20 h-20 bg-[#10c600] rounded-full flex items-center justify-center">
            <Check className="w-12 h-12 text-white" strokeWidth={3} />
          </div>
        </div>

        {/* Success message */}
        <div className="space-y-2">
          <h2 className="text-white text-2xl font-semibold">Done!</h2>
          <p className="text-gray-400">Memories Unlocked</p>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800" />

        {/* Open files button */}
        <button
          onClick={onOpenFiles}
          className="w-full py-4 bg-[#333736] text-white font-medium rounded-full hover:bg-[#474d4b] transition-colors"
        >
          Open files
        </button>
      </div>
    </div>
  )
}
