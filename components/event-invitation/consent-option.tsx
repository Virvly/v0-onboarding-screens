"use client"

import { useState } from "react"

interface ConsentOptionProps {
  id: string
  title: string
  shortText: string
  fullText: string
  selected: boolean
  onSelect: () => void
}

export function ConsentOption({ id, title, shortText, fullText, selected, onSelect }: ConsentOptionProps) {
  const [expanded, setExpanded] = useState(false)

  return (
    <div className="mb-4">
      <label htmlFor={id} className="flex items-start gap-3 cursor-pointer">
        <div className="relative flex items-center justify-center w-5 h-5 mt-1">
          <input type="radio" id={id} name="consent" checked={selected} onChange={onSelect} className="sr-only" />
          <div
            className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
              selected ? "border-[#f86701]" : "border-gray-500"
            }`}
          >
            {selected && <div className="w-3 h-3 rounded-full bg-[#f86701]" />}
          </div>
        </div>
        <div className="flex-1">
          <div className="text-white font-medium mb-2">{title}</div>
          <div className="text-gray-300 text-sm leading-relaxed">{expanded ? fullText : shortText}</div>
          <button
            type="button"
            onClick={(e) => {
              e.preventDefault()
              setExpanded(!expanded)
            }}
            className="text-[#f86701] text-sm mt-2 hover:underline"
          >
            {expanded ? "Read less" : "Read more"}
          </button>
        </div>
      </label>
    </div>
  )
}
