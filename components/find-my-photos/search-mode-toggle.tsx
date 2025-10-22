"use client"

import { ImageIcon, Calendar } from "lucide-react"

interface SearchModeToggleProps {
  mode: "all" | "event"
  onModeChange: (mode: "all" | "event") => void
}

export function SearchModeToggle({ mode, onModeChange }: SearchModeToggleProps) {
  return (
    <div className="flex gap-3">
      <button
        onClick={() => onModeChange("all")}
        className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-colors ${
          mode === "all" ? "bg-[#f86701] text-white" : "bg-[#333736] text-gray-400 hover:bg-[#474d4b]"
        }`}
      >
        <ImageIcon className="h-4 w-4" />
        Search All Media
      </button>
      <button
        onClick={() => onModeChange("event")}
        className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-colors ${
          mode === "event" ? "bg-[#f86701] text-white" : "bg-[#333736] text-gray-400 hover:bg-[#474d4b]"
        }`}
      >
        <Calendar className="h-4 w-4" />
        Search By Event
      </button>
    </div>
  )
}
