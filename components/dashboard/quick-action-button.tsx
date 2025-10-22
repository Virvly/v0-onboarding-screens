"use client"

import type { LucideIcon } from "lucide-react"

interface QuickActionButtonProps {
  icon: LucideIcon
  label: string
  onClick?: () => void
}

export function QuickActionButton({ icon: Icon, label, onClick }: QuickActionButtonProps) {
  return (
    <button
      onClick={onClick}
      className="flex flex-col items-center justify-center gap-2 bg-[#282b2b] rounded-lg p-6 hover:bg-[#333736] transition-colors"
    >
      <div className="bg-[#333736] rounded-lg p-3">
        <Icon className="h-6 w-6 text-white" />
      </div>
      <span className="text-white text-xs text-center">{label}</span>
    </button>
  )
}
