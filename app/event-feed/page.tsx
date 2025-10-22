"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { ChevronLeft } from "lucide-react"
import { FeaturedPhotoCard } from "@/components/event-feed/featured-photo-card"
import { RoleFilterTabs } from "@/components/event-feed/role-filter-tabs"
import { GalleryStream } from "@/components/event-feed/gallery-stream"
import { SponsorsSection } from "@/components/event-feed/sponsors-section"

export default function EventFeedPage() {
  const router = useRouter()
  const [selectedEvent, setSelectedEvent] = useState("Eva's Carnival")
  const [activeFilter, setActiveFilter] = useState("all")
  const [autoMode, setAutoMode] = useState(true)

  // Mock data
  const events = ["Eva's Carnival", "5 Cowries Lekki Meetup", "Lagos Marathon Party"]

  const featuredPhoto = {
    imageUrl: "/friends-celebrating-at-party.jpg",
    badge: "UGC",
    author: "Sarah",
    role: "UGC",
    timestamp: "1:00 PM",
  }

  const galleryPhotos = [
    { id: "1", imageUrl: "/friends-celebrating-at-party.jpg" },
    { id: "2", imageUrl: "/people-toasting-drinks.jpg" },
    { id: "3", imageUrl: "/group-dinner-celebration.jpg" },
    { id: "4", imageUrl: "/colorful-party-scene.jpg" },
    { id: "5", imageUrl: "/event-party-people-celebrating.jpg" },
    { id: "6", imageUrl: "/friends-celebrating-at-party.jpg" },
  ]

  const sponsors = [
    { id: "1", name: "Coca-Cola", logoUrl: "/coca-cola-logo.jpg" },
    { id: "2", name: "MTN", logoUrl: "/mtn-logo-yellow-black.jpg" },
    { id: "3", name: "Airtel", logoUrl: "/airtel-logo-red.jpg" },
  ]

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-2xl mx-auto px-4 py-6 space-y-6">
        {/* Header */}
        <div className="flex items-center gap-4">
          <button
            onClick={() => router.back()}
            className="text-[#f86701] flex items-center gap-2 hover:text-[#f98c07] transition-colors"
          >
            <ChevronLeft className="w-5 h-5" />
            <span>Back</span>
          </button>
        </div>

        {/* Event Selector */}
        <div className="space-y-2">
          <label className="text-white text-sm">Event</label>
          <select
            value={selectedEvent}
            onChange={(e) => setSelectedEvent(e.target.value)}
            className="w-full bg-[#474d4b] text-white px-4 py-3 rounded-full appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#f86701]"
          >
            {events.map((event) => (
              <option key={event} value={event}>
                {event}
              </option>
            ))}
          </select>
        </div>

        {/* Featured Photo */}
        <FeaturedPhotoCard {...featuredPhoto} autoMode={autoMode} />

        {/* Role Filter Tabs */}
        <RoleFilterTabs onFilterChange={setActiveFilter} />

        {/* Gallery Stream */}
        <GalleryStream photos={galleryPhotos} autoMode={autoMode} onAutoModeToggle={setAutoMode} />

        {/* Sponsors */}
        <SponsorsSection sponsors={sponsors} />

        {/* Go to Dashboard Button */}
        <button
          onClick={() => router.push("/dashboard")}
          className="w-full bg-[#f86701] text-white py-4 rounded-full font-semibold hover:bg-[#f98c07] transition-colors"
        >
          Go to Dashboard
        </button>
      </div>
    </div>
  )
}
