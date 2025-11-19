import { Calendar, Users } from 'lucide-react'
import Link from "next/link"

export function EventSettingsTab() {
  return (
    <div className="grid grid-cols-2 gap-4">
      <Link
        href="/event-setup"
        className="bg-[#1a1d1f] rounded-2xl p-6 flex flex-col items-center justify-center gap-3 hover:bg-[#232628] transition-colors"
      >
        <div className="w-12 h-12 rounded-xl bg-[#f86701] flex items-center justify-center">
          <Calendar className="w-6 h-6 text-white" />
        </div>
        <span className="text-white font-medium">Event Details</span>
      </Link>

      <Link
        href="/team-management"
        className="bg-[#1a1d1f] rounded-2xl p-6 flex flex-col items-center justify-center gap-3 hover:bg-[#232628] transition-colors"
      >
        <div className="w-12 h-12 rounded-xl bg-[#f86701] flex items-center justify-center">
          <Users className="w-6 h-6 text-white" />
        </div>
        <span className="text-white font-medium">Team Management</span>
      </Link>

      <Link
        href="/event-invitation"
        className="bg-[#1a1d1f] rounded-2xl p-6 flex flex-col items-center justify-center gap-3 hover:bg-[#232628] transition-colors"
      >
        <div className="w-12 h-12 rounded-xl bg-[#f86701] flex items-center justify-center">
          <Calendar className="w-6 h-6 text-white" />
        </div>
        <span className="text-white font-medium">Invitation</span>
      </Link>
    </div>
  )
}
