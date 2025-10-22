"use client"

import { useState } from "react"
import { RoleSwitcher } from "./role-switcher"
import { StatsCard } from "./stats-card"
import { QuickActionButton } from "./quick-action-button"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Camera, Upload, Info, ChevronDown } from "lucide-react"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"

type Role = "Attendee" | "Creator" | "Photographer" | "Organizer" | "Content Creator"

export function UserDashboard() {
  const [currentRole, setCurrentRole] = useState<Role>("Attendee")
  const [selectedEvent, setSelectedEvent] = useState("Eva's Carnival")
  const [socialPointsOpen, setSocialPointsOpen] = useState(false)

  const renderStatsForRole = () => {
    switch (currentRole) {
      case "Attendee":
        return (
          <>
            <div className="grid grid-cols-2 gap-3 mb-4">
              <StatsCard label="Total Photos" value="124" />
              <StatsCard label="Downloads" value="63" />
            </div>
            <div className="grid grid-cols-2 gap-3 mb-4">
              <StatsCard label="Expiring soon" value="6" />
              <StatsCard label="Lost" value="0" />
            </div>
            <Collapsible open={socialPointsOpen} onOpenChange={setSocialPointsOpen} className="mb-4">
              <CollapsibleTrigger className="w-full bg-[#333736] rounded-lg p-4 flex items-center justify-between hover:bg-[#474d4b] transition-colors">
                <div className="flex items-center gap-2">
                  <span className="text-white text-sm font-medium">Social Post Points (500)</span>
                  <Info className="h-4 w-4 text-[#92a1b5]" />
                </div>
                <ChevronDown
                  className={`h-4 w-4 text-white transition-transform ${socialPointsOpen ? "rotate-180" : ""}`}
                />
              </CollapsibleTrigger>
              <CollapsibleContent className="bg-[#282b2b] rounded-b-lg p-4 -mt-2">
                <p className="text-[#92a1b5] text-xs">Earn points from likes, comments and shares</p>
              </CollapsibleContent>
            </Collapsible>
          </>
        )
      case "Creator":
        return (
          <>
            <div className="grid grid-cols-2 gap-3 mb-4">
              <StatsCard label="Top Score" value="503" />
              <StatsCard label="Average Score" value="374" />
            </div>
            <div className="grid grid-cols-2 gap-3 mb-4">
              <StatsCard label="My Score" value="401" />
              <StatsCard label="Lowest Score" value="122" />
            </div>
          </>
        )
      case "Photographer":
        return (
          <>
            <div className="grid grid-cols-2 gap-3 mb-4">
              <StatsCard label="Top Score" value="485" />
              <StatsCard label="Average Score" value="317" />
            </div>
            <div className="grid grid-cols-2 gap-3 mb-4">
              <StatsCard label="My Score" value="416" />
              <StatsCard label="Lowest Score" value="215" />
            </div>
          </>
        )
      default:
        return null
    }
  }

  const getQuickActionLabel = () => {
    return currentRole === "Attendee" ? "Upload Moments" : "Upload Event Media"
  }

  return (
    <div className="min-h-screen bg-black text-white pb-6">
      {/* Header */}
      <div className="flex items-center justify-between p-4 mb-4">
        <h1 className="text-xl font-semibold">User Dashboard</h1>
        <RoleSwitcher currentRole={currentRole} onRoleChange={setCurrentRole} />
      </div>

      <div className="px-4 space-y-4">
        {/* Event Selector */}
        <div>
          <label className="text-sm text-[#92a1b5] mb-2 block">Event</label>
          <Select value={selectedEvent} onValueChange={setSelectedEvent}>
            <SelectTrigger className="w-full bg-[#333736] border-none text-white">
              <SelectValue />
            </SelectTrigger>
            <SelectContent className="bg-[#282b2b] border-[#333736] text-white">
              <SelectItem value="Eva's Carnival">Eva's Carnival</SelectItem>
              <SelectItem value="Summer Festival">Summer Festival</SelectItem>
              <SelectItem value="Birthday Party">Birthday Party</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Find My Photo Button */}
        <Button className="w-full bg-[#f86701] hover:bg-[#d95a01] text-white font-semibold py-6 rounded-lg">
          Find My Photo
        </Button>

        {/* Stats Section */}
        {renderStatsForRole()}

        {/* Quick Actions */}
        <div>
          <h2 className="text-sm font-medium mb-3">Quick actions</h2>
          <div className="grid grid-cols-2 gap-3">
            <QuickActionButton icon={Camera} label="Capture Moments" />
            <QuickActionButton icon={Upload} label={getQuickActionLabel()} />
          </div>
        </div>

        {/* Bottom Actions */}
        <div className="flex gap-3 pt-4">
          <Button variant="outline" className="flex-1 bg-transparent border-white text-white hover:bg-[#282b2b]">
            Event Gallery
          </Button>
          <Button className="flex-1 bg-[#f86701] hover:bg-[#d95a01] text-white">Create Event</Button>
        </div>
      </div>
    </div>
  )
}
