interface StatsCardProps {
  label: string
  value: string | number
  className?: string
}

export function StatsCard({ label, value, className = "" }: StatsCardProps) {
  return (
    <div className={`bg-[#282b2b] rounded-lg p-4 ${className}`}>
      <p className="text-[#92a1b5] text-xs mb-1">{label}</p>
      <p className="text-white text-3xl font-bold">{value}</p>
    </div>
  )
}
