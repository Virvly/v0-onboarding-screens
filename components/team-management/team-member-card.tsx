"use client"

import { MoreVertical } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

interface TeamMemberCardProps {
  name: string
  email: string
  role: string
  icon?: "creator" | "team"
  onChangeRole: () => void
  onRemove: () => void
}

export function TeamMemberCard({ name, email, role, onChangeRole, onRemove }: TeamMemberCardProps) {
  return (
    <div className="flex items-center justify-between bg-[#333736] rounded-lg p-4">
      <div className="flex-1 min-w-0">
        <p className="text-white font-medium truncate">{name}</p>
        <p className="text-gray-400 text-sm truncate">{email}</p>
      </div>
      <div className="flex items-center gap-3 ml-4">
        <span className="px-3 py-1 border border-gray-500 rounded-md text-white text-sm whitespace-nowrap">{role}</span>
        <DropdownMenu>
          <DropdownMenuTrigger className="text-white hover:text-gray-300">
            <MoreVertical className="h-5 w-5" />
          </DropdownMenuTrigger>
          <DropdownMenuContent className="bg-[#1a1a1a] border-gray-700">
            <DropdownMenuItem onClick={onChangeRole} className="text-white hover:bg-[#333736] cursor-pointer">
              Change Role
            </DropdownMenuItem>
            <DropdownMenuItem onClick={onRemove} className="text-red-500 hover:bg-[#333736] cursor-pointer">
              Remove User
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  )
}
