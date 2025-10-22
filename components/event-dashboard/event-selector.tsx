"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

interface Event {
  id: string
  name: string
}

interface EventSelectorProps {
  events: Event[]
  selectedEventId: string | null
  onEventChange: (eventId: string) => void
}

export function EventSelector({ events, selectedEventId, onEventChange }: EventSelectorProps) {
  const [isOpen, setIsOpen] = useState(false)
  const selectedEvent = events.find((e) => e.id === selectedEventId)

  if (events.length === 0) {
    return null
  }

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-[#474d4b] text-white px-4 py-3 rounded-full flex items-center justify-between gap-2 min-w-[180px]"
      >
        <span className="truncate">{selectedEvent?.name || "Select event"}</span>
        <ChevronDown className="w-4 h-4 flex-shrink-0" />
      </button>

      {isOpen && (
        <>
          <div className="fixed inset-0 z-10" onClick={() => setIsOpen(false)} />
          <div className="absolute top-full left-0 mt-2 w-full bg-[#333736] rounded-2xl shadow-lg z-20 overflow-hidden">
            {events.map((event) => (
              <button
                key={event.id}
                onClick={() => {
                  onEventChange(event.id)
                  setIsOpen(false)
                }}
                className="w-full px-4 py-3 text-left text-white hover:bg-[#474d4b] transition-colors"
              >
                {event.name}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  )
}
