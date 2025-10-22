"use client"

import { useState } from "react"

interface DownloadUnlockOptionsProps {
  onDownload: (method: "auto" | "manual", link?: string) => void
}

export function DownloadUnlockOptions({ onDownload }: DownloadUnlockOptionsProps) {
  const [selectedMethod, setSelectedMethod] = useState<"auto" | "manual">("auto")
  const [pasteLink, setPasteLink] = useState("")

  const handlePaste = async () => {
    try {
      const text = await navigator.clipboard.readText()
      setPasteLink(text)
    } catch (err) {
      console.error("Failed to read clipboard:", err)
    }
  }

  const handleDownload = () => {
    onDownload(selectedMethod, selectedMethod === "manual" ? pasteLink : undefined)
  }

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-white text-2xl font-semibold mb-2">Share To Download</h2>
        <p className="text-gray-400 text-sm">Choose one path to unlock your download</p>
      </div>

      <div className="space-y-4">
        {/* Auto-Click Option */}
        <button
          onClick={() => setSelectedMethod("auto")}
          className={`w-full p-4 rounded-xl text-left transition-colors ${
            selectedMethod === "auto" ? "bg-[#333736]" : "bg-[#282b2b]"
          }`}
        >
          <div className="flex items-start gap-3">
            <div
              className={`w-5 h-5 rounded-full border-2 mt-1 flex items-center justify-center ${
                selectedMethod === "auto" ? "border-[#f86701]" : "border-gray-500"
              }`}
            >
              {selectedMethod === "auto" && <div className="w-3 h-3 rounded-full bg-[#f86701]" />}
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-white font-medium">Auto-Click</span>
                <span className="px-2 py-0.5 bg-[#474d4b] text-gray-300 text-xs rounded">Listening</span>
              </div>
              <p className="text-gray-400 text-sm">We'll enable download after the first human click to your link</p>
            </div>
          </div>
        </button>

        {/* Manual Proof Option */}
        <button
          onClick={() => setSelectedMethod("manual")}
          className={`w-full p-4 rounded-xl text-left transition-colors ${
            selectedMethod === "manual" ? "bg-[#333736]" : "bg-[#282b2b]"
          }`}
        >
          <div className="flex items-start gap-3">
            <div
              className={`w-5 h-5 rounded-full border-2 mt-1 flex items-center justify-center ${
                selectedMethod === "manual" ? "border-[#f86701]" : "border-gray-500"
              }`}
            >
              {selectedMethod === "manual" && <div className="w-3 h-3 rounded-full bg-[#f86701]" />}
            </div>
            <div className="flex-1 space-y-3">
              <div className="flex items-center gap-2">
                <span className="text-white font-medium">Manual proof</span>
                <span className="px-2 py-0.5 bg-[#474d4b] text-gray-300 text-xs rounded">Paste a link</span>
              </div>
              <p className="text-gray-400 text-sm">
                Paste the link you copied from your social media post here to download your photos and videos instantly
              </p>
              {selectedMethod === "manual" && (
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={pasteLink}
                    onChange={(e) => setPasteLink(e.target.value)}
                    placeholder="https://your eventlink"
                    className="flex-1 px-4 py-2 bg-[#474d4b] text-white rounded-lg placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-[#f86701]"
                  />
                  <button
                    onClick={handlePaste}
                    className="px-4 py-2 bg-[#474d4b] text-white rounded-lg hover:bg-[#5a5f5e] transition-colors"
                  >
                    Paste
                  </button>
                </div>
              )}
            </div>
          </div>
        </button>
      </div>

      <button
        onClick={handleDownload}
        className="w-full py-4 bg-[#f86701] text-white font-semibold rounded-full hover:bg-[#d95a01] transition-colors"
      >
        Download
      </button>
    </div>
  )
}
