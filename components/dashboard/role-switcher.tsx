"use client"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
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
    <div className="flex items-center gap-2">
      <Avatar className="h-10 w-10">
        <AvatarImage src="/user-profile-illustration.png" alt="User" />
        <AvatarFallback>U</AvatarFallback>
      </Avatar>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="secondary" size="sm" className="bg-[#333736] text-white hover:bg-[#474d4b] text-xs">
            {currentRole}
            <br />
            Switch Role
          </Button>
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
    </div>
  )
}
