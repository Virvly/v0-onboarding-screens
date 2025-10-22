"use client"

import { useState } from "react"
import { ArrowLeft } from "lucide-react"
import { useRouter } from "next/navigation"
import { ConsentOption } from "@/components/event-invitation/consent-option"

export default function EventInvitationPage() {
  const router = useRouter()
  const [step, setStep] = useState<"consent" | "signin">("consent")
  const [consentType, setConsentType] = useState<"consent" | "no-consent">("consent")
  const [email, setEmail] = useState("")

  const handleContinue = () => {
    if (step === "consent") {
      setStep("signin")
    } else {
      // Handle send code
      console.log("[v0] Sending code to:", email)
    }
  }

  if (step === "signin") {
    return (
      <div className="min-h-screen bg-black relative overflow-hidden">
        {/* Background image with overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url(/happy-diverse-group-of-friends-taking-selfie-toget.jpg)",
          }}
        >
          <div className="absolute inset-0 bg-black/60" />
        </div>

        {/* Content */}
        <div className="relative z-10 min-h-screen flex flex-col">
          <div className="flex-1 flex flex-col justify-end p-6 pb-32">
            <div className="space-y-4">
              <label htmlFor="email" className="block text-white text-sm">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="maggie.james@gmail.com"
                className="w-full px-4 py-3 bg-[#474d4b] text-white rounded-full placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#f86701]"
              />
            </div>
          </div>

          {/* Bottom button */}
          <div className="p-6">
            <button
              onClick={handleContinue}
              disabled={!email}
              className="w-full py-4 bg-[#f86701] text-white rounded-full font-medium hover:bg-[#e67a00] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Send code
            </button>
          </div>

          {/* Home indicator */}
          <div className="flex justify-center pb-2">
            <div className="w-32 h-1 bg-white rounded-full" />
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-md mx-auto min-h-screen flex flex-col">
        {/* Header */}
        <div className="p-6">
          <button onClick={() => router.back()} className="text-[#f86701] flex items-center gap-2 mb-6">
            <ArrowLeft className="w-5 h-5" />
            <span>Back</span>
          </button>

          <h1 className="text-2xl font-bold mb-2">Consent & Join Event</h1>
          <p className="text-gray-400 text-sm">Select your consent option and verify your email address</p>
        </div>

        {/* Consent Notice Card */}
        <div className="flex-1 px-6">
          <div className="bg-[#333736] rounded-2xl p-6 mb-6">
            <h2 className="text-white font-semibold mb-2">Consent Notice</h2>
            <p className="text-gray-400 text-sm mb-6">This event is photo and video heavy.</p>

            <div className="space-y-6">
              <ConsentOption
                id="consent"
                title="I Consent"
                shortText="I agree to be captured and permit the organizer, sponsors, brands, partners and their authorized parties to use my image/likeness and any content I create (phone or pro camera) license-free for marketing and other lawful uses."
                fullText="I agree to be captured and permit the organizer, sponsors, brands, partners and their authorized parties to use my image/likeness and any content I create (phone or pro camera) license-free for marketing and other lawful uses. By attending and/or creating content, I grant a non-exclusive, worldwide, perpetual, royalty-free license to the organizer, sponsors, brands, partners and their authorized third parties to capture, reproduce, edit, display and distribute my image/likeness and any content I capture (including professional-grade photography/ video) across websites, apps, social media, advertising and other lawful channels. This includes content I create during the event (attendee or creator or photographer) without needing a new agreement."
                selected={consentType === "consent"}
                onSelect={() => setConsentType("consent")}
              />

              <ConsentOption
                id="no-consent"
                title="I Do Not Consent"
                shortText="I do not consent to intentional capture and will avoid cameras. If I'm incidentally included in media, I waive any claim for damages or compensation."
                fullText="I do not consent to intentional capture and will avoid cameras. If I'm incidentally included in media, I waive any claim for damages or compensation. I acknowledge the environment is media-heavy and that full exclusion may not be possible in crowds or wide shots. I waive any claim, right or action against the organizer, sponsors, brands, partners or content creators arising from incidental/background inclusion, and I understand there is no obligation to remove or edit published media due to such incidental inclusion."
                selected={consentType === "no-consent"}
                onSelect={() => setConsentType("no-consent")}
              />
            </div>
          </div>
        </div>

        {/* Bottom button */}
        <div className="p-6">
          <button
            onClick={handleContinue}
            className="w-full py-4 bg-[#f86701] text-white rounded-full font-medium hover:bg-[#e67a00] transition-colors"
          >
            Continue
          </button>
        </div>

        {/* Home indicator */}
        <div className="flex justify-center pb-2">
          <div className="w-32 h-1 bg-white rounded-full" />
        </div>
      </div>
    </div>
  )
}
