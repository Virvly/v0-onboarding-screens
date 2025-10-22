"use client"

import { Facebook, Instagram, Youtube, Linkedin } from "lucide-react"

interface SocialPlatformSelectorProps {
  selectedPlatform: string
  onSelectPlatform: (platform: string) => void
}

const platforms = [
  { id: "facebook", name: "Facebook", icon: Facebook },
  { id: "instagram", name: "Instagram", icon: Instagram },
  { id: "youtube", name: "YouTube", icon: Youtube },
  { id: "tiktok", name: "TikTok", icon: null },
  { id: "linkedin", name: "LinkedIn", icon: Linkedin },
]

export function SocialPlatformSelector({ selectedPlatform, onSelectPlatform }: SocialPlatformSelectorProps) {
  return (
    <div className="space-y-4">
      <h3 className="text-white text-sm">Share via</h3>
      <div className="flex gap-4 justify-start">
        {platforms.map((platform) => {
          const Icon = platform.icon
          const isSelected = selectedPlatform === platform.id

          return (
            <button
              key={platform.id}
              onClick={() => onSelectPlatform(platform.id)}
              className={`flex flex-col items-center gap-2 p-3 rounded-lg transition-colors ${
                isSelected ? "border-2 border-[#f86701]" : "border-2 border-transparent"
              }`}
            >
              <div className="w-12 h-12 bg-[#333736] rounded-lg flex items-center justify-center">
                {Icon ? (
                  <Icon className="w-6 h-6 text-white" />
                ) : (
                  <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                  </svg>
                )}
              </div>
              <span className="text-white text-xs">{platform.name}</span>
            </button>
          )
        })}
      </div>
    </div>
  )
}
