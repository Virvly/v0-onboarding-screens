"use client"

import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Input } from "@/components/ui/input"

interface AddMemberModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  onSave: (member: { name: string; email: string; role: string }) => void
}

const roles = ["Attendee", "Content Creator", "Photographer", "Event Concierge", "Admin Assistant"]

export function AddMemberModal({ open, onOpenChange, onSave }: AddMemberModalProps) {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [role, setRole] = useState("")

  const handleSave = () => {
    if (name && email && role) {
      onSave({ name, email, role })
      setName("")
      setEmail("")
      setRole("")
      onOpenChange(false)
    }
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="bg-[#1a1a1a] border-gray-700 text-white max-w-md">
        <DialogHeader>
          <DialogTitle className="text-white">Add Team Member</DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          <div>
            <label className="text-white text-sm mb-2 block">Full Name</label>
            <Input
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="John Doe"
              className="bg-[#474d4b] border-none text-white placeholder:text-gray-400"
            />
          </div>
          <div>
            <label className="text-white text-sm mb-2 block">Email address</label>
            <Input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="johndoe@emaple.com"
              className="bg-[#474d4b] border-none text-white placeholder:text-gray-400"
            />
          </div>
          <div>
            <label className="text-white text-sm mb-2 block">Role</label>
            <Select value={role} onValueChange={setRole}>
              <SelectTrigger className="bg-[#474d4b] border-none text-white">
                <SelectValue placeholder="Choose role" />
              </SelectTrigger>
              <SelectContent className="bg-[#333736] border-gray-700">
                {roles.map((roleOption) => (
                  <SelectItem key={roleOption} value={roleOption} className="text-white hover:bg-[#474d4b]">
                    {roleOption}
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
              onClick={handleSave}
              className="flex-1 px-4 py-3 bg-[#f86701] text-white rounded-full hover:bg-[#f98c07] transition-colors"
            >
              Save
            </button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
