import { ImageIcon } from "lucide-react"

interface MetricCardProps {
  value: number
  label: string
}

export function MetricCard({ value, label }: MetricCardProps) {
  return (
    <div className="bg-[#333736] rounded-2xl p-4 flex flex-col gap-2">
      <div className="w-10 h-10 rounded-full bg-[#f86701] flex items-center justify-center">
        <ImageIcon className="w-5 h-5 text-white" />
      </div>
      <div className="text-white text-3xl font-bold">{value}</div>
      <div className="text-gray-400 text-sm">{label}</div>
    </div>
  )
}
