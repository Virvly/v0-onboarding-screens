"use client"

import { useState } from "react"
import { Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { CountryCodeSelector } from "@/components/shared/country-code-selector"

interface StepOneProps {
  onContinue: () => void
  onSaveExit: () => void
}

export function StepOne({ onContinue, onSaveExit }: StepOneProps) {
  const [eventName, setEventName] = useState("")
  const [eventType, setEventType] = useState("")
  const [date, setDate] = useState("")
  const [time, setTime] = useState("")
  const [timeFormat, setTimeFormat] = useState("AM")
  const [location, setLocation] = useState("")
  const [email, setEmail] = useState("")
  const [organization, setOrganization] = useState("")
  const [countryCode, setCountryCode] = useState("US +1")

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-white text-2xl font-semibold mb-1">Event Setup</h1>
        <p className="text-gray-400 text-sm">Basic event information</p>
      </div>

      <div className="space-y-4">
        <div>
          <Label htmlFor="event-name" className="text-white text-sm mb-2 block">
            Event Name
          </Label>
          <Input
            id="event-name"
            placeholder="e.g Birthday Party"
            value={eventName}
            onChange={(e) => setEventName(e.target.value)}
            className="bg-[#474d4b] border-none text-white placeholder:text-gray-500 h-12 rounded-lg"
          />
        </div>

        <div>
          <Label htmlFor="event-type" className="text-white text-sm mb-2 block">
            Event Type
          </Label>
          <Select value={eventType} onValueChange={setEventType}>
            <SelectTrigger className="bg-[#474d4b] border-none text-white h-12 rounded-lg">
              <SelectValue placeholder="Select one" />
            </SelectTrigger>
            <SelectContent className="bg-[#333736] border-none text-white">
              <SelectItem value="birthday">Birthday</SelectItem>
              <SelectItem value="wedding">Wedding</SelectItem>
              <SelectItem value="corporate">Corporate Event</SelectItem>
              <SelectItem value="party">Party</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <Label htmlFor="date" className="text-white text-sm mb-2 block">
              Date
            </Label>
            <div className="relative">
              <Input
                id="date"
                type="text"
                placeholder="dd/mm/yy"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="bg-[#474d4b] border-none text-white placeholder:text-gray-400 h-12 rounded-full pr-12"
              />
              <div className="absolute right-3 top-1/2 -translate-y-1/2 bg-[#333736] rounded-md p-1.5">
                <Calendar className="h-5 w-5 text-gray-300" />
              </div>
            </div>
          </div>
          <div>
            <Label htmlFor="time" className="text-white text-sm mb-2 block">
              Time
            </Label>
            <div className="relative">
              <Input
                id="time"
                type="text"
                placeholder="00:00"
                value={time}
                onChange={(e) => setTime(e.target.value)}
                className="bg-[#474d4b] border-none text-white placeholder:text-gray-400 h-12 rounded-full pr-20"
              />
              <div className="absolute right-2 top-1/2 -translate-y-1/2 flex gap-1">
                <button
                  type="button"
                  onClick={() => setTimeFormat("AM")}
                  className={`px-3 py-1.5 rounded-md text-sm font-medium transition-colors ${
                    timeFormat === "AM" ? "bg-[#333736] text-white" : "text-gray-400"
                  }`}
                >
                  AM
                </button>
                <button
                  type="button"
                  onClick={() => setTimeFormat("PM")}
                  className={`px-3 py-1.5 rounded-md text-sm font-medium transition-colors ${
                    timeFormat === "PM" ? "bg-[#333736] text-white" : "text-gray-400"
                  }`}
                >
                  PM
                </button>
              </div>
            </div>
          </div>
        </div>

        <div>
          <Label htmlFor="location" className="text-white text-sm mb-2 block">
            Location
          </Label>
          <Input
            id="location"
            placeholder="Enter location address..."
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="bg-[#474d4b] border-none text-white placeholder:text-gray-500 h-12 rounded-lg"
          />
          <button className="text-white text-sm underline mt-2 flex items-center gap-1">
            Choose location from map
          </button>
        </div>

        <div>
          <Label htmlFor="email" className="text-white text-sm mb-2 block">
            Organizer&apos;s Email
          </Label>
          <Input
            id="email"
            type="email"
            placeholder="johndoe@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="bg-[#474d4b] border-none text-white placeholder:text-gray-500 h-12 rounded-lg"
          />
        </div>

        <div>
          <Label htmlFor="organization" className="text-white text-sm mb-2 block">
            Organization/Company Name
          </Label>
          <Input
            id="organization"
            placeholder="John Doe enterprises"
            value={organization}
            onChange={(e) => setOrganization(e.target.value)}
            className="bg-[#474d4b] border-none text-white placeholder:text-gray-500 h-12 rounded-lg"
          />
        </div>

        <div>
          <Label htmlFor="phone" className="text-white text-sm mb-2 block">
            Organization phone number (optional)
          </Label>
          <div className="relative">
            <div className="absolute left-2 top-1/2 -translate-y-1/2 z-10">
              <CountryCodeSelector value={countryCode} onValueChange={setCountryCode} />
            </div>
            <Input
              id="phone"
              type="tel"
              className="bg-[#474d4b] border-none text-white placeholder:text-gray-500 h-12 rounded-full pl-[156px]"
            />
          </div>
        </div>
      </div>

      <div className="flex gap-3 pt-4">
        <Button
          onClick={onSaveExit}
          variant="outline"
          className="flex-1 bg-[#333736] border-none text-white hover:bg-[#474d4b] h-12 rounded-lg"
        >
          Save & Exit
        </Button>
        <Button onClick={onContinue} className="flex-1 bg-[#f86701] hover:bg-[#d95801] text-white h-12 rounded-lg">
          Continue
        </Button>
      </div>

      <p className="text-center text-gray-400 text-xs flex items-center justify-center gap-1">
        <span className="text-white">🔒</span> Your event data is safe and secure
      </p>
    </div>
  )
}
