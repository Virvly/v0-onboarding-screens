import { Menu } from "lucide-react"
import Image from "next/image"

export function DashboardHeader() {
  return (
    <div className="flex items-start justify-between mb-6">
      <div>
        <h1 className="text-white text-2xl font-bold">Event Dashboard</h1>
        <p className="text-gray-400 text-sm">Metrics, media, and team</p>
      </div>
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full overflow-hidden bg-gray-600">
          <Image src="/user-profile-illustration.png" alt="Profile" width={40} height={40} className="object-cover" />
        </div>
        <button className="text-white">
          <Menu className="w-6 h-6" />
        </button>
      </div>
    </div>
  )
}
