"use client"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Check } from "lucide-react"

type Role = "Attendee" | "Creator" | "Photographer" | "Organizer" | "Content Creator"

interface RoleSwitcherProps {
  currentRole: Role
  onRoleChange: (role: Role) => void
  availableRoles?: Role[]
}

export function RoleSwitcher({ currentRole, onRoleChange, availableRoles }: RoleSwitcherProps) {
  const roles: Role[] = availableRoles || ["Attendee", "Creator", "Photographer", "Organizer", "Content Creator"]

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="flex items-center gap-3 bg-[#333736] hover:bg-[#474d4b] rounded-full px-2 py-2 pr-4 transition-colors">
          <Avatar className="h-10 w-10 border-2 border-white">
            <AvatarImage src="/user-profile-illustration.png" alt="User" />
            <AvatarFallback>U</AvatarFallback>
          </Avatar>
          <div className="flex flex-col items-start">
            <span className="text-white text-sm font-medium leading-tight">{currentRole}</span>
            <span className="text-[#92a1b5] text-xs leading-tight">Switch Role</span>
          </div>
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="bg-[#282b2b] border-[#333736] text-white min-w-[180px]">
        {roles.map((role) => (
          <DropdownMenuItem
            key={role}
            onClick={() => onRoleChange(role)}
            className="hover:bg-[#333736] cursor-pointer flex items-center justify-between"
          >
            {role}
            {currentRole === role && <Check className="h-4 w-4 text-[#f86701]" />}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
