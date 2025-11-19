"use client"

import { useState } from "react"
import { Copy, Shield } from "lucide-react"
import { Button } from "@/components/ui/button"

interface StepFourProps {
  onGoToDashboard: () => void
  onSaveExit: () => void
}

export function StepFour({ onGoToDashboard, onSaveExit }: StepFourProps) {
  const [eventLink] = useState("https://your eventlink")
  const [copied, setCopied] = useState(false)

  const copyToClipboard = () => {
    navigator.clipboard.writeText(eventLink)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const downloadQR = () => {
    // Handle QR code download
    console.log("[v0] Downloading QR code")
  }

  const handlePreview = (step: number) => {
    console.log(`[v0] Preview step ${step}`)
  }

  const handleShare = (step: number) => {
    console.log(`[v0] Share step ${step}`)
  }

  return (
    <div className="space-y-6 pb-8">
      <div>
        <h1 className="text-white text-3xl font-semibold mb-2">Event Setup</h1>
        <p className="text-gray-400 text-base">Payment & Activation</p>
      </div>

      <div className="bg-[#474d4b] rounded-2xl p-5 flex items-center justify-between">
        <div className="flex items-baseline gap-2">
          <p className="text-white font-semibold text-3xl">$25</p>
          <p className="text-gray-400 text-base">10GB Storage - 30 days</p>
        </div>
        <Button
          variant="outline"
          className="bg-[#5a605e] border-none text-white hover:bg-[#666c6a] h-11 px-6 rounded-full text-base font-medium"
        >
          Update plan
        </Button>
      </div>

      <div className="space-y-3">
        <h2 className="text-white text-xl font-medium">Event Link</h2>
        <div className="bg-[#474d4b] rounded-2xl p-4 flex items-center justify-between">
          <p className="text-gray-300 text-base">{eventLink}</p>
          <Button
            onClick={copyToClipboard}
            variant="ghost"
            className="text-white hover:bg-[#5a605e] h-10 px-5 rounded-full text-base font-medium flex items-center gap-2"
          >
            <Copy className="h-5 w-5" />
            Copy
          </Button>
        </div>
      </div>

      <div className="bg-[#474d4b] rounded-2xl p-5 flex items-center gap-4">
        <div className="bg-white p-2 rounded-lg flex-shrink-0">
          <div className="w-24 h-24 bg-black flex items-center justify-center">
            <svg viewBox="0 0 100 100" className="w-full h-full">
              <rect width="100" height="100" fill="white" />
              {/* QR code pattern */}
              <rect x="10" y="10" width="10" height="10" fill="black" />
              <rect x="30" y="10" width="10" height="10" fill="black" />
              <rect x="50" y="10" width="10" height="10" fill="black" />
              <rect x="70" y="10" width="10" height="10" fill="black" />
              <rect x="10" y="30" width="10" height="10" fill="black" />
              <rect x="70" y="30" width="10" height="10" fill="black" />
              <rect x="10" y="50" width="10" height="10" fill="black" />
              <rect x="30" y="50" width="10" height="10" fill="black" />
              <rect x="50" y="50" width="10" height="10" fill="black" />
              <rect x="70" y="50" width="10" height="10" fill="black" />
              <rect x="10" y="70" width="10" height="10" fill="black" />
              <rect x="30" y="70" width="10" height="10" fill="black" />
              <rect x="50" y="70" width="10" height="10" fill="black" />
              <rect x="70" y="70" width="10" height="10" fill="black" />
            </svg>
          </div>
        </div>
        <div className="flex-1 flex items-center justify-between">
          <div>
            <p className="text-[#f86701] text-base font-semibold mb-1">Event QR Code</p>
            <p className="text-gray-400 text-sm">Display and print your code</p>
          </div>
          <Button
            onClick={downloadQR}
            variant="outline"
            className="bg-[#5a605e] border-none text-white hover:bg-[#666c6a] h-11 px-6 rounded-full text-base font-medium"
          >
            Download
          </Button>
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-white text-xl font-medium">Next Step</h2>

        {/* Step 1 */}
        <div className="border border-gray-700 rounded-2xl p-5">
          <div className="flex items-start justify-between gap-4">
            <div className="flex-1">
              <p className="text-[#f86701] text-sm font-semibold mb-2 uppercase">STEP 1</p>
              <p className="text-white text-base">Share event link with attendees.</p>
            </div>
            <div className="flex gap-3 flex-shrink-0">
              <Button
                onClick={() => handlePreview(1)}
                variant="outline"
                className="bg-[#474d4b] border-none text-white hover:bg-[#5a605e] h-10 px-6 rounded-full text-base font-medium"
              >
                Preview
              </Button>
              <Button
                onClick={() => handleShare(1)}
                variant="outline"
                className="bg-[#474d4b] border-none text-white hover:bg-[#5a605e] h-10 px-6 rounded-full text-base font-medium"
              >
                Share
              </Button>
            </div>
          </div>
        </div>

        {/* Step 2 */}
        <div className="border border-gray-700 rounded-2xl p-5">
          <div className="flex items-start justify-between gap-4">
            <div className="flex-1">
              <p className="text-[#f86701] text-sm font-semibold mb-2 uppercase">STEP 2</p>
              <p className="text-white text-base">
                Invite your team (Photographers, Content Creator, Admin Assistants)
              </p>
            </div>
            <div className="flex gap-3 flex-shrink-0">
              <Button
                onClick={() => handlePreview(2)}
                variant="outline"
                className="bg-[#474d4b] border-none text-white hover:bg-[#5a605e] h-10 px-6 rounded-full text-base font-medium"
              >
                Preview
              </Button>
              <Button
                onClick={() => handleShare(2)}
                variant="outline"
                className="bg-[#474d4b] border-none text-white hover:bg-[#5a605e] h-10 px-6 rounded-full text-base font-medium"
              >
                Share
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="pt-4">
        <Button
          onClick={onGoToDashboard}
          className="w-full bg-[#f86701] hover:bg-[#d95801] text-white h-14 rounded-full text-lg font-semibold"
        >
          Go to Dashboard
        </Button>
      </div>

      <div className="flex items-center justify-center gap-2 text-gray-400 text-sm">
        <Shield className="h-4 w-4" />
        <p>Payment secured by Stripe/Paystack</p>
      </div>

      {/* Success Notification */}
      {copied && (
        <div className="fixed bottom-20 left-1/2 -translate-x-1/2 bg-[#10c600] text-white px-6 py-3 rounded-lg shadow-lg z-50">
          Link copied!
        </div>
      )}
    </div>
  )
}
