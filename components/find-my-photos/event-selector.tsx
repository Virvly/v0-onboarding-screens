"use client"

import { useState } from "react"
import { ChevronDown, Check } from "lucide-react"

interface EventSelectorProps {
  selectedEvent: string
  onEventChange: (event: string) => void
}

const events = ["Eva's Carnival", "5 Cowries Lekki Meetup", "Lagos Marathon Party", "Ada's Birthday Bash"]

export function EventSelector({ selectedEvent, onEventChange }: EventSelectorProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="space-y-2">
      <label className="text-white text-sm font-medium">Select Event</label>
      <div className="relative">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full bg-[#333736] text-white px-4 py-3 rounded-full flex items-center justify-between hover:bg-[#474d4b] transition-colors"
        >
          <span>{selectedEvent}</span>
          <ChevronDown className="h-5 w-5 text-gray-400" />
        </button>

        {/* Dropdown Menu */}
        {isOpen && (
          <>
            <div className="fixed inset-0 z-10" onClick={() => setIsOpen(false)} />
            <div className="absolute top-full left-0 right-0 mt-2 bg-[#333736] rounded-lg overflow-hidden shadow-lg z-20">
              {events.map((event) => (
                <button
                  key={event}
                  onClick={() => {
                    onEventChange(event)
                    setIsOpen(false)
                  }}
                  className="w-full px-4 py-3 text-left text-white hover:bg-[#474d4b] transition-colors flex items-center justify-between"
                >
                  <span>{event}</span>
                  {event === selectedEvent && <Check className="h-5 w-5 text-[#f86701]" />}
                </button>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  )
}
