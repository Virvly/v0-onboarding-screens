"use client"

import { useState } from "react"

interface RoleFilterTabsProps {
  onFilterChange?: (filter: string) => void
}

export function RoleFilterTabs({ onFilterChange }: RoleFilterTabsProps) {
  const [activeFilter, setActiveFilter] = useState("all")

  const filters = [
    { id: "all", label: "All" },
    { id: "attendees", label: "Attendees" },
    { id: "content-creators", label: "Content Creators" },
    { id: "photographers", label: "Photographers" },
  ]

  const handleFilterClick = (filterId: string) => {
    setActiveFilter(filterId)
    onFilterChange?.(filterId)
  }

  return (
    <div className="flex gap-6 border-b border-[#333736]">
      {filters.map((filter) => (
        <button
          key={filter.id}
          onClick={() => handleFilterClick(filter.id)}
          className={`pb-3 text-sm font-medium transition-colors relative ${
            activeFilter === filter.id ? "text-[#f86701]" : "text-gray-400 hover:text-gray-300"
          }`}
        >
          {filter.label}
          {activeFilter === filter.id && <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#f86701]" />}
        </button>
      ))}
    </div>
  )
}
