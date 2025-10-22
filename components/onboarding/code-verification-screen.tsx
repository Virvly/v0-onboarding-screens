"use client"

import { useState, useRef, type KeyboardEvent } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Facebook, Apple } from "lucide-react"

export function CodeVerificationScreen({
  email,
  onVerify,
}: {
  email: string
  onVerify?: (code: string) => void
}) {
  const [code, setCode] = useState(["", "", "", "", "", ""])
  const inputRefs = useRef<(HTMLInputElement | null)[]>([])

  const handleChange = (index: number, value: string) => {
    if (value.length > 1) return

    const newCode = [...code]
    newCode[index] = value
    setCode(newCode)

    // Move to next input
    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus()
    }
  }

  const handleKeyDown = (index: number, e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Backspace" && !code[index] && index > 0) {
      inputRefs.current[index - 1]?.focus()
    }
  }

  const handleVerify = () => {
    onVerify?.(code.join(""))
  }

  const maskedEmail = email.replace(/(.{6})(.*)(@.*)/, "$1****$3")

  return (
    <div className="flex min-h-screen flex-col justify-end bg-[#000000] px-6 pb-12">
      <div className="space-y-6">
        <div className="text-center">
          <h2 className="mb-2 text-lg font-semibold text-white">6-digit code sent</h2>
          <p className="text-sm text-white/70">
            A 6-digit code has been sent to <span className="text-white">{maskedEmail}</span>{" "}
            <button className="text-[#f86701] underline">(change email)</button>
          </p>
        </div>

        <div className="flex justify-center gap-2">
          {code.map((digit, index) => (
            <Input
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
              className="h-12 w-12 rounded-lg border-0 bg-[#333736] text-center text-xl text-white"
            />
          ))}
        </div>

        <Button
          onClick={handleVerify}
          className="h-14 w-full rounded-full bg-[#f86701] text-base font-semibold text-white hover:bg-[#f78c1e]"
        >
          Verify and continue
        </Button>

        <div className="py-2 text-center text-sm text-white/70">Or sign up with the options below</div>

        <div className="grid grid-cols-3 gap-3">
          <Button type="button" variant="ghost" className="h-12 rounded-lg bg-[#333736] hover:bg-[#474d4b]">
            <Facebook className="h-5 w-5 text-white" />
          </Button>
          <Button type="button" variant="ghost" className="h-12 rounded-lg bg-[#333736] hover:bg-[#474d4b]">
            <svg className="h-5 w-5 text-white" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              />
              <path
                fill="currentColor"
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              />
              <path
                fill="currentColor"
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
              />
              <path
                fill="currentColor"
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
              />
            </svg>
          </Button>
          <Button type="button" variant="ghost" className="h-12 rounded-lg bg-[#333736] hover:bg-[#474d4b]">
            <Apple className="h-5 w-5 text-white" />
          </Button>
        </div>

        <div className="text-center">
          <span className="text-sm text-white/70">Don't have an account? </span>
          <button type="button" className="text-sm font-medium text-white underline">
            Create account
          </button>
        </div>
      </div>
    </div>
  )
}
