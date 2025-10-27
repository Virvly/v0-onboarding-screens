"use client"

import { useState } from "react"
import { Menu } from "lucide-react"
import Image from "next/image"
import { MenuDropdown } from "@/components/event-dashboard/menu-dropdown"

interface PageHeaderProps {
  showMenu?: boolean
  className?: string
}

export function PageHeader({ showMenu = true, className = "" }: PageHeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <>
      <div className={`flex items-center justify-end ${className}`}>
        <div className="flex items-center gap-0 bg-[#333736] rounded-full px-1 py-1">
          <div className="w-10 h-10 rounded-full overflow-hidden bg-gray-600 flex-shrink-0">
            <Image src="/user-profile-illustration.png" alt="Profile" width={40} height={40} className="object-cover" />
          </div>
          {showMenu && (
            <button
              className="text-white px-3 hover:text-gray-300 transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Open menu"
            >
              <Menu className="w-6 h-6" />
            </button>
          )}
        </div>
      </div>

      {showMenu && <MenuDropdown isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />}
    </>
  )
}
