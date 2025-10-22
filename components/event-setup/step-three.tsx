"use client"

import { useState, useEffect } from "react"
import { Copy, Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

interface StepThreeProps {
  onGoToDashboard: () => void
  onSaveExit: () => void
}

export function StepThree({ onGoToDashboard, onSaveExit }: StepThreeProps) {
  const [eventLink, setEventLink] = useState("https://your eventlink")
  const [countdown, setCountdown] = useState(59)

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => (prev > 0 ? prev - 1 : 59))
    }, 1000)
    return () => clearInterval(timer)
  }, [])

  const copyToClipboard = () => {
    navigator.clipboard.writeText(eventLink)
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-white text-2xl font-semibold mb-1">Event setup</h1>
        <p className="text-gray-400 text-sm">Payment & activation</p>
      </div>

      <div className="space-y-4">
        <div className="bg-[#333736] rounded-lg p-4 flex items-center justify-between">
          <div>
            <p className="text-white font-semibold text-lg">$25</p>
            <p className="text-gray-400 text-sm">10GB Storage - 30 days</p>
          </div>
          <Button
            variant="outline"
            className="bg-transparent border-gray-600 text-white hover:bg-[#474d4b] h-9 px-4 rounded-lg text-sm"
          >
            Change plan
          </Button>
        </div>

        <div>
          <Label htmlFor="event-link" className="text-white text-sm mb-2 block">
            Event Link
          </Label>
          <div className="relative">
            <Input
              id="event-link"
              value={eventLink}
              onChange={(e) => setEventLink(e.target.value)}
              className="bg-[#474d4b] border-none text-white h-12 rounded-lg pr-20"
              readOnly
            />
            <Button
              onClick={copyToClipboard}
              variant="ghost"
              size="sm"
              className="absolute right-2 top-1/2 -translate-y-1/2 text-white hover:bg-[#5a605e] h-8 px-3 rounded"
            >
              <Copy className="h-4 w-4 mr-1" />
              Copy
            </Button>
          </div>
        </div>

        <div className="bg-[#333736] rounded-lg p-4">
          <div className="flex items-start gap-3">
            <div className="bg-white p-2 rounded">
              <div className="w-20 h-20 bg-black flex items-center justify-center">
                <svg viewBox="0 0 100 100" className="w-full h-full">
                  <rect width="100" height="100" fill="white" />
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
                  <rect x="70" y="70" width="10" height="10" fill="black" />
                </svg>
              </div>
            </div>
            <div className="flex-1">
              <p className="text-[#f86701] text-sm font-semibold mb-1">Event QR Code</p>
              <p className="text-gray-400 text-xs mb-3">Display and print your code</p>
              <Button
                variant="outline"
                size="sm"
                className="bg-transparent border-gray-600 text-white hover:bg-[#474d4b] h-8 px-3 rounded text-xs"
              >
                <Download className="h-3 w-3 mr-1" />
                Download
              </Button>
            </div>
          </div>
        </div>

        <div className="bg-[#1a1a1a] rounded-lg p-4">
          <p className="text-white text-sm font-semibold mb-3">Next step</p>
          <ul className="space-y-2 text-sm">
            <li className="text-gray-300">
              • Share event link with attendees{" "}
              <a href="#" className="text-white underline">
                Preview
              </a>{" "}
              |{" "}
              <a href="#" className="text-white underline">
                Share
              </a>
            </li>
            <li className="text-gray-300">
              • Invite your team (photographer, UGC creator, admin assistants){" "}
              <a href="#" className="text-white underline">
                Preview
              </a>{" "}
              |{" "}
              <a href="#" className="text-white underline">
                Share
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="flex gap-3 pt-4">
        <Button
          onClick={onSaveExit}
          variant="outline"
          className="flex-1 bg-[#333736] border-none text-white hover:bg-[#474d4b] h-12 rounded-lg"
        >
          Save & Exit
        </Button>
        <Button onClick={onGoToDashboard} className="flex-1 bg-[#f86701] hover:bg-[#d95801] text-white h-12 rounded-lg">
          Go to dashboard
        </Button>
      </div>

      <p className="text-center text-gray-400 text-xs flex items-center justify-center gap-1">
        <span className="text-white">🔒</span> Payment secured by Stripe/Paystack
      </p>
    </div>
  )
}
