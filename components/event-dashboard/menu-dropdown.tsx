"use client"

import { useState } from "react"
import { ChevronRight, ChevronDown, Check } from "lucide-react"
import Link from "next/link"

interface MenuDropdownProps {
  isOpen: boolean
  onClose: () => void
}

const roles = ["Organizer", "Attendee", "Content Creator", "Photographer"]

export function MenuDropdown({ isOpen, onClose }: MenuDropdownProps) {
  const [isRoleExpanded, setIsRoleExpanded] = useState(false)
  const [selectedRole, setSelectedRole] = useState("Organizer")

  if (!isOpen) return null

  return (
    <>
      {/* Backdrop */}
      <div className="fixed inset-0 z-40" onClick={onClose} />

      {/* Menu */}
      <div className="absolute top-16 right-6 z-50 w-80 bg-[#333736] rounded-lg shadow-xl overflow-hidden">
        <Link
          href="/event-setup"
          className="block px-6 py-4 text-white hover:bg-[#474d4b] transition-colors border-b border-gray-700"
          onClick={onClose}
        >
          Event Setup
        </Link>

        <Link
          href="/vip-trace"
          className="block px-6 py-4 text-white hover:bg-[#474d4b] transition-colors border-b border-gray-700"
          onClick={onClose}
        >
          VIP Trace
        </Link>

        <Link
          href="/team-management"
          className="block px-6 py-4 text-white hover:bg-[#474d4b] transition-colors border-b border-gray-700"
          onClick={onClose}
        >
          Manage Team
        </Link>

        {/* Switch Role with Submenu */}
        <div className="border-b border-gray-700">
          <button
            onClick={() => setIsRoleExpanded(!isRoleExpanded)}
            className="w-full px-6 py-4 text-white hover:bg-[#474d4b] transition-colors flex items-center justify-between"
          >
            <span>Switch Role</span>
            {isRoleExpanded ? <ChevronDown className="w-5 h-5" /> : <ChevronRight className="w-5 h-5" />}
          </button>

          {/* Submenu */}
          {isRoleExpanded && (
            <div className="bg-[#2a2e2d]">
              {roles.map((role) => (
                <button
                  key={role}
                  onClick={() => {
                    setSelectedRole(role)
                    // Handle role switch logic here
                  }}
                  className="w-full px-6 py-4 text-left hover:bg-[#474d4b] transition-colors flex items-center justify-between border-t border-gray-700"
                >
                  <span className={selectedRole === role ? "text-white" : "text-gray-400"}>{role}</span>
                  {selectedRole === role && <Check className="w-5 h-5 text-[#f86701]" />}
                </button>
              ))}
            </div>
          )}
        </div>

        <Link
          href="/account-settings"
          className="block px-6 py-4 text-white hover:bg-[#474d4b] transition-colors"
          onClick={onClose}
        >
          Account Settings
        </Link>
      </div>
    </>
  )
}
