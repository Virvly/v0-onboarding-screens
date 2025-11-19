import { type LucideIcon } from 'lucide-react'

interface StatCardProps {
  icon: LucideIcon
  value: number | string
  label: string
}

export function StatCard({ icon: Icon, value, label }: StatCardProps) {
  return (
    <div className="bg-[#333736] rounded-2xl p-4 flex-shrink-0 w-[120px]">
      <div className="w-10 h-10 rounded-full bg-[#f86701] flex items-center justify-center mb-3">
        <Icon className="w-5 h-5 text-white" />
      </div>
      <div className="text-white text-3xl font-bold mb-1">{value}</div>
      <div className="text-gray-400 text-sm">{label}</div>
    </div>
  )
}
