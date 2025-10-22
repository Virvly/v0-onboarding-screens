"use client"

import { useState } from "react"
import { DashboardHeader } from "@/components/event-dashboard/dashboard-header"
import { EventSelector } from "@/components/event-dashboard/event-selector"
import { MetricCard } from "@/components/event-dashboard/metric-card"
import { MediaGallery } from "@/components/event-dashboard/media-gallery"
import { EmptyState } from "@/components/event-dashboard/empty-state"
import { Shield } from "lucide-react"
import Link from "next/link"

// Mock data - replace with real data from your backend
const mockEvents = [
  {
    id: "1",
    name: "Eva's Carnival",
    uploads: 124,
    shares: 312,
    storage: 3,
    isComplete: true,
    media: [
      "/friends-celebrating-at-party.jpg",
      "/people-toasting-drinks.jpg",
      "/group-dinner-celebration.jpg",
      "/colorful-party-scene.jpg",
      "/friends-dancing.jpg",
      "/celebration-gathering.jpg",
      "/party-group-photo.jpg",
      "/friends-laughing.jpg",
      "/event-celebration.jpg",
    ],
  },
  {
    id: "2",
    name: "Lagos Marathon P...",
    uploads: 0,
    shares: 0,
    storage: 0,
    isComplete: false,
    media: [],
  },
]

export default function EventDashboardPage() {
  const [selectedEventId, setSelectedEventId] = useState<string | null>(mockEvents.length > 0 ? mockEvents[0].id : null)

  const selectedEvent = mockEvents.find((e) => e.id === selectedEventId)
  const hasEvents = mockEvents.length > 0
  const hasMedia = selectedEvent && selectedEvent.media.length > 0

  return (
    <div className="min-h-screen bg-black">
      <div className="max-w-md mx-auto px-6 py-8">
        <DashboardHeader />

        <div className="flex items-center gap-3 mb-6">
          {hasEvents ? (
            <>
              <EventSelector events={mockEvents} selectedEventId={selectedEventId} onEventChange={setSelectedEventId} />
              <Link
                href="/event-setup"
                className="bg-[#f86701] text-white px-6 py-3 rounded-full font-medium hover:bg-[#d95a01] transition-colors"
              >
                Create Event
              </Link>
            </>
          ) : (
            <Link
              href="/event-setup"
              className="w-full bg-[#f86701] text-white px-6 py-3 rounded-full font-medium text-center hover:bg-[#d95a01] transition-colors"
            >
              Create Event
            </Link>
          )}
        </div>

        {/* Show "Complete Event Setup" link if event is not complete */}
        {selectedEvent && !selectedEvent.isComplete && (
          <Link href="/event-setup" className="text-[#f86701] text-sm font-medium mb-4 inline-block hover:underline">
            Complete Event Setup
          </Link>
        )}

        {/* Metrics */}
        {hasEvents && selectedEvent && (
          <div className="grid grid-cols-3 gap-3 mb-6">
            <MetricCard value={selectedEvent.uploads} label="Uploads" />
            <MetricCard value={selectedEvent.shares} label="Shares" />
            <MetricCard value={selectedEvent.storage} label="Storage (GB)" />
          </div>
        )}

        {/* Content Area */}
        {!hasEvents ? (
          <EmptyState title="You have not created any events" description="No media files to display." />
        ) : !hasMedia ? (
          <EmptyState title="Upcoming Event" description="No media files for this event yet." />
        ) : (
          <>
            <MediaGallery images={selectedEvent.media} />

            {/* Consent Footer */}
            <div className="mt-6 flex items-center justify-center gap-2 text-gray-400 text-sm">
              <Shield className="w-4 h-4" />
              <span>
                Consent verified - secured by <span className="font-semibold">Virvly</span>
              </span>
            </div>
          </>
        )}
      </div>
    </div>
  )
}
