"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"

interface OTPVerificationModalProps {
  isOpen: boolean
  onClose: () => void
  email: string
  onVerify: (otp: string) => void
  onChangeEmail: () => void
}

export function OTPVerificationModal({ isOpen, onClose, email, onVerify, onChangeEmail }: OTPVerificationModalProps) {
  const [otp, setOtp] = useState(["", "", "", "", "", ""])
  const [countdown, setCountdown] = useState(59)
  const inputRefs = useRef<(HTMLInputElement | null)[]>([])

  useEffect(() => {
    if (isOpen && countdown > 0) {
      const timer = setInterval(() => {
        setCountdown((prev) => prev - 1)
      }, 1000)
      return () => clearInterval(timer)
    }
  }, [isOpen, countdown])

  const handleChange = (index: number, value: string) => {
    if (value.length > 1) return

    const newOtp = [...otp]
    newOtp[index] = value
    setOtp(newOtp)

    // Auto-focus next input
    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus()
    }
  }

  const handleKeyDown = (index: number, e: React.KeyboardEvent) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus()
    }
  }

  const handleConfirm = () => {
    const otpString = otp.join("")
    if (otpString.length === 6) {
      onVerify(otpString)
    }
  }

  const maskEmail = (email: string) => {
    const [username, domain] = email.split("@")
    const maskedUsername = username.slice(0, 6) + "****" + username.slice(-2)
    return `${maskedUsername}@${domain}`
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center bg-black/50">
      <div className="w-full max-w-md rounded-t-3xl bg-black p-6 pb-8">
        {/* Top indicator */}
        <div className="mx-auto mb-6 h-1 w-12 rounded-full bg-gray-600" />

        <h2 className="mb-2 text-2xl font-semibold text-white">OTP Sent</h2>
        <p className="mb-6 text-sm text-gray-400">
          A 6-digit OTP has been sent to {maskEmail(email)}{" "}
          <button onClick={onChangeEmail} className="text-white underline">
            (change email)
          </button>
        </p>

        {/* OTP Input boxes */}
        <div className="mb-6 flex gap-2">
          {otp.map((digit, index) => (
            <input
              key={index}
              ref={(el) => {
                inputRefs.current[index] = el
              }}
              type="text"
              inputMode="numeric"
              maxLength={1}
              value={digit}
              onChange={(e) => handleChange(index, e.target.value)}
              onKeyDown={(e) => handleKeyDown(index, e)}
              className="h-14 w-full rounded-lg bg-[#474d4b] text-center text-xl text-white focus:outline-none focus:ring-2 focus:ring-[#f86701]"
            />
          ))}
        </div>

        {/* Confirm button */}
        <button
          onClick={handleConfirm}
          disabled={otp.join("").length !== 6}
          className="mb-4 w-full rounded-full bg-[#f86701] py-4 font-semibold text-white transition-opacity disabled:opacity-50"
        >
          Confirm New Email
        </button>

        {/* Resend code */}
        <p className="text-center text-sm text-gray-400">
          Resend code in: <span className="text-white">0:{countdown.toString().padStart(2, "0")}</span>
        </p>
      </div>
    </div>
  )
}
