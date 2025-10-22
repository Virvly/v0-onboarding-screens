"use client"

import { useState } from "react"
import { ArrowLeft, FileArchive } from "lucide-react"
import { useRouter } from "next/navigation"
import { SocialPlatformSelector } from "@/components/find-my-photos/social-platform-selector"
import { DownloadUnlockOptions } from "@/components/find-my-photos/download-unlock-options"
import { DownloadSuccessModal } from "@/components/find-my-photos/download-success-modal"

export default function ShareToDownloadPage() {
  const router = useRouter()
  const [view, setView] = useState<"share" | "unlock">("share")
  const [selectedPlatform, setSelectedPlatform] = useState("facebook")
  const [showSuccessModal, setShowSuccessModal] = useState(false)
  const [folderLink] = useState("https://virvly.app/download/abc123")

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(folderLink)
      // Could show a toast notification here
    } catch (err) {
      console.error("Failed to copy link:", err)
    }
  }

  const handleShare = () => {
    // In a real app, this would trigger the native share dialog
    // For now, we'll just move to the unlock view
    setView("unlock")
  }

  const handleDownload = (method: "auto" | "manual", link?: string) => {
    // Simulate download process
    setTimeout(() => {
      setShowSuccessModal(true)
    }, 1000)
  }

  const handleOpenFiles = () => {
    setShowSuccessModal(false)
    // In a real app, this would open the downloaded files
    router.push("/find-my-photos")
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-md mx-auto min-h-screen flex flex-col">
        {/* Header */}
        <div className="p-4">
          <button
            onClick={() => (view === "unlock" ? setView("share") : router.back())}
            className="flex items-center gap-2 text-[#f86701] mb-6"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Back</span>
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 px-4 pb-24">
          {view === "share" ? (
            <div className="space-y-8">
              <h1 className="text-2xl font-semibold">Share To Download</h1>

              {/* Zipped Folder Icon */}
              <div className="flex flex-col items-center gap-3 py-8">
                <div className="w-32 h-32 bg-[#333736] rounded-2xl flex items-center justify-center">
                  <FileArchive className="w-16 h-16 text-white" />
                </div>
                <p className="text-gray-400">Zipped Photos Folder</p>
              </div>

              {/* Social Platform Selector */}
              <SocialPlatformSelector selectedPlatform={selectedPlatform} onSelectPlatform={setSelectedPlatform} />
            </div>
          ) : (
            <DownloadUnlockOptions onDownload={handleDownload} />
          )}
        </div>

        {/* Bottom Actions */}
        {view === "share" && (
          <div className="fixed bottom-0 left-0 right-0 bg-black border-t border-gray-900 p-4">
            <div className="max-w-md mx-auto flex gap-3">
              <button
                onClick={handleCopyLink}
                className="flex-1 py-4 bg-[#333736] text-white font-semibold rounded-full hover:bg-[#474d4b] transition-colors"
              >
                Copy Folder Link
              </button>
              <button
                onClick={handleShare}
                className="flex-1 py-4 bg-[#f86701] text-white font-semibold rounded-full hover:bg-[#d95a01] transition-colors"
              >
                Share
              </button>
            </div>
            {/* Home indicator */}
            <div className="flex justify-center mt-4">
              <div className="w-32 h-1 bg-gray-800 rounded-full" />
            </div>
          </div>
        )}

        {/* Success Modal */}
        <DownloadSuccessModal isOpen={showSuccessModal} onOpenFiles={handleOpenFiles} />
      </div>
    </div>
  )
}
