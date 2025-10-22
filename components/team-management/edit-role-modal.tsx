"use client"

import { useState } from "react"
import { User } from "lucide-react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

interface EditRoleModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  memberName: string
  currentRole: string
  onUpdate: (newRole: string) => void
}

const roles = ["Attendee", "Content Creator", "Photographer", "Event Concierge", "Admin Assistant"]

export function EditRoleModal({ open, onOpenChange, memberName, currentRole, onUpdate }: EditRoleModalProps) {
  const [selectedRole, setSelectedRole] = useState(currentRole)

  const handleUpdate = () => {
    onUpdate(selectedRole)
    onOpenChange(false)
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="bg-[#1a1a1a] border-gray-700 text-white max-w-md">
        <DialogHeader>
          <div className="flex items-center gap-2 mb-4">
            <User className="h-5 w-5 text-gray-400" />
            <DialogTitle className="text-white">{memberName}</DialogTitle>
          </div>
        </DialogHeader>
        <div className="space-y-4">
          <div>
            <label className="text-white text-sm mb-2 block">Role</label>
            <Select value={selectedRole} onValueChange={setSelectedRole}>
              <SelectTrigger className="bg-[#474d4b] border-none text-white">
                <SelectValue />
              </SelectTrigger>
              <SelectContent className="bg-[#333736] border-gray-700">
                {roles.map((role) => (
                  <SelectItem key={role} value={role} className="text-white hover:bg-[#474d4b]">
                    {role}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="flex gap-3 pt-4">
            <button
              onClick={() => onOpenChange(false)}
              className="flex-1 px-4 py-3 bg-[#333736] text-white rounded-full hover:bg-[#474d4b] transition-colors"
            >
              Cancel
            </button>
            <button
              onClick={handleUpdate}
              className="flex-1 px-4 py-3 bg-[#f86701] text-white rounded-full hover:bg-[#f98c07] transition-colors"
            >
              Update
            </button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
