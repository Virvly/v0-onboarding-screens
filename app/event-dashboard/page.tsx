"use client"

import { useState } from "react"
import { DashboardHeader } from "@/components/event-dashboard/dashboard-header"
import { EventSelector } from "@/components/event-dashboard/event-selector"
import { StatCard } from "@/components/event-dashboard/stat-card"
import { MediaGallery } from "@/components/event-dashboard/media-gallery"
import { EmptyState } from "@/components/event-dashboard/empty-state"
import { ReportTab } from "@/components/event-dashboard/report-tab"
import { EventSettingsTab } from "@/components/event-dashboard/event-settings-tab"
import { Shield, Upload, Share2, HardDrive } from 'lucide-react'
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
  const [activeTab, setActiveTab] = useState<"media" | "report" | "vip-trace" | "event-settings">("media")

  const selectedEvent = mockEvents.find((e) => e.id === selectedEventId)
  const hasEvents = mockEvents.length > 0
  const hasMedia = selectedEvent && selectedEvent.media.length > 0

  return (
    <div className="min-h-screen bg-black">
      <div className="max-w-md mx-auto px-6 py-8">
        <DashboardHeader />

        <div className="mb-4">
          <h1 className="text-white text-2xl font-bold mb-1">Event Dashboard</h1>
          <p className="text-gray-400 text-sm">Metrics, media, and team</p>
        </div>

        <div className="flex items-center gap-3 mb-6">
          {hasEvents ? (
            <>
              <EventSelector events={mockEvents} selectedEventId={selectedEventId} onEventChange={setSelectedEventId} />
              <Link
                href="/event-setup"
                className="bg-[#f86701] text-white px-6 py-3 rounded-full font-medium hover:bg-[#d95a01] transition-colors whitespace-nowrap"
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

        {selectedEvent && !selectedEvent.isComplete && (
          <Link href="/event-setup" className="text-[#f86701] text-sm font-medium mb-4 inline-block hover:underline">
            Complete Event Setup
          </Link>
        )}

        {hasEvents && selectedEvent && (
          <div className="overflow-x-auto -mx-6 px-6 mb-6 scrollbar-hide">
            <div className="flex gap-3">
              <StatCard icon={Upload} value={selectedEvent.uploads} label="Uploads" />
              <StatCard icon={Share2} value={selectedEvent.shares} label="Shares" />
              <StatCard icon={HardDrive} value={`${selectedEvent.storage}GB`} label="Storage" />
            </div>
          </div>
        )}

        {hasEvents && selectedEvent && (
          <div className="flex gap-6 mb-6 border-b border-gray-800">
            <button
              onClick={() => setActiveTab("media")}
              className={`pb-3 font-medium transition-colors relative ${
                activeTab === "media" ? "text-[#f86701]" : "text-gray-400 hover:text-gray-300"
              }`}
            >
              Media
              {activeTab === "media" && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#f86701] rounded-full" />
              )}
            </button>
            <button
              onClick={() => setActiveTab("report")}
              className={`pb-3 font-medium transition-colors relative ${
                activeTab === "report" ? "text-[#f86701]" : "text-gray-400 hover:text-gray-300"
              }`}
            >
              Report
              {activeTab === "report" && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#f86701] rounded-full" />
              )}
            </button>
            <button
              onClick={() => setActiveTab("vip-trace")}
              className={`pb-3 font-medium transition-colors relative ${
                activeTab === "vip-trace" ? "text-[#f86701]" : "text-gray-400 hover:text-gray-300"
              }`}
            >
              VIP Trace
              {activeTab === "vip-trace" && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#f86701] rounded-full" />
              )}
            </button>
            <button
              onClick={() => setActiveTab("event-settings")}
              className={`pb-3 font-medium transition-colors relative ${
                activeTab === "event-settings" ? "text-[#f86701]" : "text-gray-400 hover:text-gray-300"
              }`}
            >
              Event Settings
              {activeTab === "event-settings" && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#f86701] rounded-full" />
              )}
            </button>
          </div>
        )}

        {!hasEvents ? (
          <EmptyState title="You have not created any events" description="No media files to display." />
        ) : !hasMedia && activeTab === "media" ? (
          <EmptyState title="Upcoming Event" description="No media files for this event yet." />
        ) : (
          <>
            {activeTab === "media" && (
              <>
                <MediaGallery images={selectedEvent?.media || []} />
                <Link
                  href="/event-feed"
                  className="block w-full bg-[#333736] text-white py-3 rounded-full font-medium text-center hover:bg-[#404442] transition-colors mt-6"
                >
                  Go To Media Gallery
                </Link>
              </>
            )}

            {activeTab === "report" && <ReportTab />}

            {activeTab === "vip-trace" && (
              <div className="text-center py-12">
                <Link
                  href="/vip-trace"
                  className="inline-block bg-[#f86701] text-white px-6 py-3 rounded-full font-medium hover:bg-[#d95a01] transition-colors"
                >
                  Go to VIP Trace
                </Link>
              </div>
            )}

            {activeTab === "event-settings" && <EventSettingsTab />}

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
