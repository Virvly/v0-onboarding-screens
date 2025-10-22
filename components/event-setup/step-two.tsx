"use client"

import { useState } from "react"
import { Upload } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"

interface StepTwoProps {
  onContinue: () => void
  onSaveExit: () => void
}

export function StepTwo({ onContinue, onSaveExit }: StepTwoProps) {
  const [tagline, setTagline] = useState("")
  const [hashtags, setHashtags] = useState("")
  const [sponsorLink, setSponsorLink] = useState("")
  const [allowAttendeeUpload, setAllowAttendeeUpload] = useState(true)
  const [allowProUpload, setAllowProUpload] = useState(true)
  const [requireConsent, setRequireConsent] = useState(true)
  const [enableShareToDownload, setEnableShareToDownload] = useState(true)
  const [selectedPlatforms, setSelectedPlatforms] = useState<string[]>(["facebook", "youtube"])

  const platforms = [
    { id: "facebook", icon: "facebook", label: "Facebook" },
    { id: "instagram", icon: "instagram", label: "Instagram" },
    { id: "youtube", icon: "youtube", label: "YouTube" },
    { id: "tiktok", icon: "tiktok", label: "TikTok" },
    { id: "linkedin", icon: "linkedin", label: "LinkedIn" },
  ]

  const togglePlatform = (platformId: string) => {
    setSelectedPlatforms((prev) =>
      prev.includes(platformId) ? prev.filter((id) => id !== platformId) : [...prev, platformId],
    )
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-white text-2xl font-semibold mb-1">Event setup</h1>
        <p className="text-gray-400 text-sm">Branding & rules</p>
      </div>

      <div className="space-y-4">
        <div>
          <Label htmlFor="tagline" className="text-white text-sm mb-2 block">
            Event tagline
          </Label>
          <Input
            id="tagline"
            placeholder="e.g birthday batch"
            value={tagline}
            onChange={(e) => setTagline(e.target.value)}
            className="bg-[#474d4b] border-none text-white placeholder:text-gray-500 h-12 rounded-lg"
          />
        </div>

        <div>
          <Label htmlFor="hashtags" className="text-white text-sm mb-2 block">
            #Hashtags
          </Label>
          <Input
            id="hashtags"
            placeholder="johndoe@example.com"
            value={hashtags}
            onChange={(e) => setHashtags(e.target.value)}
            className="bg-[#474d4b] border-none text-white placeholder:text-gray-500 h-12 rounded-lg"
          />
          <p className="text-gray-400 text-xs mt-1">Add at least 5 hashtags</p>
        </div>

        <div>
          <Label htmlFor="sponsor-link" className="text-white text-sm mb-2 block">
            Sponsor link (URL)
          </Label>
          <Input
            id="sponsor-link"
            placeholder="https://your link"
            value={sponsorLink}
            onChange={(e) => setSponsorLink(e.target.value)}
            className="bg-[#474d4b] border-none text-white placeholder:text-gray-500 h-12 rounded-lg"
          />
        </div>

        <div>
          <Label htmlFor="sponsor-logo" className="text-white text-sm mb-2 block">
            Sponsor logo
          </Label>
          <div className="bg-[#474d4b] border-none rounded-lg h-12 flex items-center justify-between px-4 cursor-pointer hover:bg-[#5a605e] transition-colors">
            <span className="text-gray-500 text-sm">Upload image</span>
            <Upload className="h-5 w-5 text-gray-400" />
          </div>
          <p className="text-gray-400 text-xs mt-1">Max 5MB (jpeg, .png)</p>
        </div>

        <div className="space-y-3 pt-2">
          <div className="flex items-center justify-between">
            <Label htmlFor="attendee-upload" className="text-white text-sm">
              Allow attendee upload
            </Label>
            <Switch
              id="attendee-upload"
              checked={allowAttendeeUpload}
              onCheckedChange={setAllowAttendeeUpload}
              className="data-[state=checked]:bg-[#10c600]"
            />
          </div>

          <div className="flex items-center justify-between">
            <Label htmlFor="pro-upload" className="text-white text-sm">
              Allow pro photographer upload
            </Label>
            <Switch
              id="pro-upload"
              checked={allowProUpload}
              onCheckedChange={setAllowProUpload}
              className="data-[state=checked]:bg-[#10c600]"
            />
          </div>

          <div className="flex items-center justify-between">
            <Label htmlFor="consent" className="text-white text-sm">
              Require consent
            </Label>
            <Switch
              id="consent"
              checked={requireConsent}
              onCheckedChange={setRequireConsent}
              className="data-[state=checked]:bg-[#10c600]"
            />
          </div>

          <div className="flex items-center justify-between">
            <Label htmlFor="share-download" className="text-white text-sm">
              Enable share to download
            </Label>
            <Switch
              id="share-download"
              checked={enableShareToDownload}
              onCheckedChange={setEnableShareToDownload}
              className="data-[state=checked]:bg-[#10c600]"
            />
          </div>
        </div>

        <div>
          <Label className="text-white text-sm mb-3 block">Choose where your event can be shared</Label>
          <div className="flex gap-3">
            {platforms.map((platform) => (
              <button
                key={platform.id}
                onClick={() => togglePlatform(platform.id)}
                className={`w-12 h-12 rounded-lg flex items-center justify-center transition-all ${
                  selectedPlatforms.includes(platform.id)
                    ? "bg-[#474d4b] border-2 border-[#f86701]"
                    : "bg-[#474d4b] border-2 border-transparent"
                }`}
                aria-label={platform.label}
              >
                <span className="text-white text-xl">
                  {platform.id === "facebook" && "f"}
                  {platform.id === "instagram" && "📷"}
                  {platform.id === "youtube" && "▶"}
                  {platform.id === "tiktok" && "♪"}
                  {platform.id === "linkedin" && "in"}
                </span>
              </button>
            ))}
          </div>
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
        <Button onClick={onContinue} className="flex-1 bg-[#f86701] hover:bg-[#d95801] text-white h-12 rounded-lg">
          Pay & Activate Event
        </Button>
      </div>

      <p className="text-center text-gray-400 text-xs flex items-center justify-center gap-1">
        <span className="text-white">🔒</span> Your event branding is safe and secure
      </p>
    </div>
  )
}
