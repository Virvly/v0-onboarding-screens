"use client"

import { useState } from "react"
import { ArrowLeft } from "lucide-react"
import { useRouter } from "next/navigation"
import { ThemeSelector } from "@/components/account-settings/theme-selector"
import { PlanCard } from "@/components/account-settings/plan-card"
import { OTPVerificationModal } from "@/components/account-settings/otp-verification-modal"

export default function AccountSettingsPage() {
  const router = useRouter()
  const [email, setEmail] = useState("maggie.james@gmail.com")
  const [originalEmail] = useState("maggie.james@gmail.com")
  const [theme, setTheme] = useState("Dark Theme")
  const [selectedEvent, setSelectedEvent] = useState("Eva's Carnival")
  const [showOTPModal, setShowOTPModal] = useState(false)

  const isEmailChanged = email !== originalEmail

  const handleUpdateEmail = () => {
    if (isEmailChanged) {
      setShowOTPModal(true)
    }
  }

  const handleVerifyOTP = (otp: string) => {
    console.log("[v0] OTP verified:", otp)
    // Handle OTP verification
    setShowOTPModal(false)
    // Update email in backend
  }

  const handleLogout = () => {
    console.log("[v0] Logging out")
    // Handle logout logic
    router.push("/onboarding")
  }

  return (
    <div className="min-h-screen bg-black">
      {/* Header */}
      <div className="flex items-center justify-between px-6 py-4">
        <button onClick={() => router.back()} className="flex items-center gap-2 text-[#f86701]">
          <ArrowLeft className="h-5 w-5" />
          <span className="font-medium">Back</span>
        </button>
        <button onClick={handleLogout} className="font-medium text-[#f86701] underline">
          Logout
        </button>
      </div>

      {/* Content */}
      <div className="px-6 py-8">
        <h1 className="mb-8 text-3xl font-bold text-white">Account Settings</h1>

        {/* Email Address Section */}
        <div className="mb-8">
          <label className="mb-3 block text-sm text-white">Email Address</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mb-4 w-full rounded-full bg-[#333736] px-6 py-4 text-white focus:outline-none focus:ring-2 focus:ring-[#f86701]"
          />
          <button
            onClick={handleUpdateEmail}
            disabled={!isEmailChanged}
            className={`w-full rounded-full py-4 font-semibold transition-colors ${
              isEmailChanged ? "bg-[#f86701] text-white" : "bg-[#2a2e2d] text-gray-500"
            }`}
          >
            Update Email
          </button>
        </div>

        {/* App Theme Section */}
        <div className="mb-8">
          <label className="mb-3 block text-sm text-white">App Theme</label>
          <ThemeSelector value={theme} onChange={setTheme} />
        </div>

        {/* Events Payment Plan Section */}
        <div className="mb-12">
          <label className="mb-3 block text-sm text-white">Events Payment Plan</label>
          <div className="mb-4">
            <button className="flex w-full items-center justify-between rounded-full bg-[#333736] px-6 py-4 text-left text-white">
              <span>{selectedEvent}</span>
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </div>
          <PlanCard
            price={25}
            storage="10GB Storage"
            duration="30 days"
            onUpdatePlan={() => console.log("[v0] Update plan clicked")}
          />
        </div>

        {/* Go to Dashboard Button */}
        <button
          onClick={() => router.push("/dashboard")}
          className="w-full rounded-full bg-[#f86701] py-4 font-semibold text-white"
        >
          Go to Dashboard
        </button>
      </div>

      {/* Home indicator */}
      <div className="fixed bottom-4 left-1/2 h-1 w-32 -translate-x-1/2 rounded-full bg-white" />

      {/* OTP Modal */}
      <OTPVerificationModal
        isOpen={showOTPModal}
        onClose={() => setShowOTPModal(false)}
        email={email}
        onVerify={handleVerifyOTP}
        onChangeEmail={() => {
          setShowOTPModal(false)
          setEmail(originalEmail)
        }}
      />
    </div>
  )
}
