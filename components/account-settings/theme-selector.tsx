"use client"

import { useState } from "react"
import { Check, ChevronDown } from "lucide-react"

interface ThemeSelectorProps {
  value: string
  onChange: (theme: string) => void
}

const themes = ["Light Theme", "Dark Theme", "System Theme"]

export function ThemeSelector({ value, onChange }: ThemeSelectorProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between rounded-full bg-[#333736] px-6 py-4 text-left text-white"
      >
        <span>{value}</span>
        <ChevronDown className="h-5 w-5" />
      </button>

      {isOpen && (
        <>
          <div className="fixed inset-0 z-10" onClick={() => setIsOpen(false)} />
          <div className="absolute right-0 top-full z-20 mt-2 w-64 overflow-hidden rounded-2xl bg-[#474d4b]">
            {themes.map((theme) => (
              <button
                key={theme}
                onClick={() => {
                  onChange(theme)
                  setIsOpen(false)
                }}
                className="flex w-full items-center justify-between px-6 py-4 text-left text-white transition-colors hover:bg-[#333736]"
              >
                <span>{theme}</span>
                {value === theme && <Check className="h-5 w-5 text-[#f86701]" />}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  )
}
