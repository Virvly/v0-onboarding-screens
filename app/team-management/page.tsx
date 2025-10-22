"use client"

import { useState } from "react"
import { Menu, Palette, Users } from "lucide-react"
import { TeamMemberCard } from "@/components/team-management/team-member-card"
import { EditRoleModal } from "@/components/team-management/edit-role-modal"
import { AddMemberModal } from "@/components/team-management/add-member-modal"
import { RemoveConfirmationModal } from "@/components/team-management/remove-confirmation-modal"

interface TeamMember {
  id: string
  name: string
  email: string
  role: string
  category: "creators" | "team"
}

export default function TeamManagementPage() {
  const [members, setMembers] = useState<TeamMember[]>([
    {
      id: "1",
      name: "Lilian J.",
      email: "lara@gmail.com",
      role: "Content Creator",
      category: "creators",
    },
    {
      id: "2",
      name: "Theodor S.",
      email: "theodor.stephenson@gmail.com",
      role: "Photographer",
      category: "creators",
    },
    {
      id: "3",
      name: "Claire J.",
      email: "claire.john@gmail.com",
      role: "Event Concierge",
      category: "team",
    },
    {
      id: "4",
      name: "Victor D.",
      email: "victordoe@gmail.com",
      role: "Admin Assistant",
      category: "team",
    },
  ])

  const [editModalOpen, setEditModalOpen] = useState(false)
  const [addModalOpen, setAddModalOpen] = useState(false)
  const [removeModalOpen, setRemoveModalOpen] = useState(false)
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null)

  const creators = members.filter((m) => m.category === "creators")
  const team = members.filter((m) => m.category === "team")

  const handleChangeRole = (member: TeamMember) => {
    setSelectedMember(member)
    setEditModalOpen(true)
  }

  const handleRemove = (member: TeamMember) => {
    setSelectedMember(member)
    setRemoveModalOpen(true)
  }

  const handleUpdateRole = (newRole: string) => {
    if (selectedMember) {
      setMembers(members.map((m) => (m.id === selectedMember.id ? { ...m, role: newRole } : m)))
    }
  }

  const handleConfirmRemove = () => {
    if (selectedMember) {
      setMembers(members.filter((m) => m.id !== selectedMember.id))
    }
  }

  const handleAddMember = (newMember: {
    name: string
    email: string
    role: string
  }) => {
    const category = newMember.role === "Content Creator" || newMember.role === "Photographer" ? "creators" : "team"

    setMembers([
      ...members,
      {
        id: Date.now().toString(),
        ...newMember,
        category,
      },
    ])
  }

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-gray-800">
        <div>
          <h1 className="text-xl font-semibold">Manage Team</h1>
          <p className="text-sm text-gray-400">Invite and manage event collaborators</p>
        </div>
        <div className="flex items-center gap-3">
          <img src="/user-profile-illustration.png" alt="Profile" className="w-10 h-10 rounded-full" />
          <button className="text-white hover:text-gray-300">
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </div>

      <div className="p-4 space-y-6">
        {/* Creators Section */}
        <div>
          <div className="flex items-center gap-2 mb-3">
            <Palette className="h-5 w-5 text-white" />
            <h2 className="text-lg font-semibold">Creators</h2>
          </div>
          <div className="space-y-3">
            {creators.map((member) => (
              <TeamMemberCard
                key={member.id}
                name={member.name}
                email={member.email}
                role={member.role}
                onChangeRole={() => handleChangeRole(member)}
                onRemove={() => handleRemove(member)}
              />
            ))}
          </div>
        </div>

        {/* Team Section */}
        <div>
          <div className="flex items-center gap-2 mb-3">
            <Users className="h-5 w-5 text-white" />
            <h2 className="text-lg font-semibold">Team</h2>
          </div>
          <div className="space-y-3">
            {team.map((member) => (
              <TeamMemberCard
                key={member.id}
                name={member.name}
                email={member.email}
                role={member.role}
                onChangeRole={() => handleChangeRole(member)}
                onRemove={() => handleRemove(member)}
              />
            ))}
          </div>
        </div>

        {/* Add Team Member Button */}
        <button
          onClick={() => setAddModalOpen(true)}
          className="w-full py-4 bg-[#f86701] text-white rounded-full hover:bg-[#f98c07] transition-colors font-medium"
        >
          + Add Team Member
        </button>
      </div>

      {/* Modals */}
      {selectedMember && (
        <>
          <EditRoleModal
            open={editModalOpen}
            onOpenChange={setEditModalOpen}
            memberName={selectedMember.name}
            currentRole={selectedMember.role}
            onUpdate={handleUpdateRole}
          />
          <RemoveConfirmationModal
            open={removeModalOpen}
            onOpenChange={setRemoveModalOpen}
            memberName={selectedMember.name}
            onConfirm={handleConfirmRemove}
          />
        </>
      )}
      <AddMemberModal open={addModalOpen} onOpenChange={setAddModalOpen} onSave={handleAddMember} />
    </div>
  )
}
