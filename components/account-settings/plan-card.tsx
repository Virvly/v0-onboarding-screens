"use client"

interface PlanCardProps {
  price: number
  storage: string
  duration: string
  onUpdatePlan: () => void
}

export function PlanCard({ price, storage, duration, onUpdatePlan }: PlanCardProps) {
  return (
    <div className="flex items-center justify-between rounded-full bg-[#333736] px-6 py-4">
      <div className="flex items-center gap-3">
        <span className="text-2xl font-bold text-white">${price}</span>
        <span className="text-sm text-gray-400">
          {storage} - {duration}
        </span>
      </div>
      <button
        onClick={onUpdatePlan}
        className="rounded-full bg-[#474d4b] px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-[#5a5f5d]"
      >
        Update plan
      </button>
    </div>
  )
}
