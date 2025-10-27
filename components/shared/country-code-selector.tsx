"use client"

import { ChevronDown } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger } from "@/components/ui/select"

interface CountryCodeSelectorProps {
  value: string
  onValueChange: (value: string) => void
  className?: string
}

const countries = [
  { code: "US +1", flag: "🇺🇸", label: "US +1" },
  { code: "UK +44", flag: "🇬🇧", label: "UK +44" },
  { code: "CA +1", flag: "🇨🇦", label: "CA +1" },
  { code: "NG +234", flag: "🇳🇬", label: "NG +234" },
  { code: "GH +233", flag: "🇬🇭", label: "GH +233" },
  { code: "KE +254", flag: "🇰🇪", label: "KE +254" },
]

export function CountryCodeSelector({ value, onValueChange, className = "" }: CountryCodeSelectorProps) {
  const selectedCountry = countries.find((c) => c.code === value) || countries[0]

  return (
    <Select value={value} onValueChange={onValueChange}>
      <SelectTrigger
        className={`bg-white border-none text-[#333736] h-12 rounded-full w-[140px] px-4 hover:bg-gray-50 ${className}`}
      >
        <div className="flex items-center gap-2">
          <span className="text-2xl leading-none">{selectedCountry.flag}</span>
          <span className="font-medium text-sm">{selectedCountry.label}</span>
          <ChevronDown className="h-4 w-4 ml-auto text-gray-600" />
        </div>
      </SelectTrigger>
      <SelectContent className="bg-white border border-gray-200 rounded-lg shadow-lg">
        {countries.map((country) => (
          <SelectItem
            key={country.code}
            value={country.code}
            className="text-[#333736] hover:bg-gray-100 cursor-pointer"
          >
            <div className="flex items-center gap-2">
              <span className="text-xl">{country.flag}</span>
              <span className="font-medium">{country.label}</span>
            </div>
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  )
}
