"use client"

import { Button } from "@/components/ui/button"

export function WelcomeScreen({ onProceed }: { onProceed?: () => void }) {
  return (
    <div className="relative flex min-h-screen flex-col bg-[#000000]">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img src="/happy-diverse-group-of-friends-taking-selfie-toget.jpg" alt="Happy people" className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-1 flex-col justify-end px-6 pb-12">
        <div className="mb-8 text-center">
          <h1 className="mb-4 text-3xl font-bold text-white">Capture. Share. Go Viral</h1>
          <p className="text-balance text-sm leading-relaxed text-white/90">
            Organize event photos with privacy compliance, share seamlessly, boost reach and prove impact
          </p>
        </div>

        <Button
          onClick={onProceed}
          className="h-14 w-full rounded-full bg-[#f86701] text-base font-semibold text-white hover:bg-[#f78c1e]"
        >
          Proceed
        </Button>
      </div>
    </div>
  )
}
