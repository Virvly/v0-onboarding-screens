import { ImageIcon } from "lucide-react"

interface EmptyStateProps {
  title: string
  description: string
}

export function EmptyState({ title, description }: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center justify-center py-20 px-6">
      <div className="w-32 h-32 rounded-2xl bg-[#474d4b] flex items-center justify-center mb-6">
        <ImageIcon className="w-16 h-16 text-gray-500" />
      </div>
      <h3 className="text-white text-lg font-medium mb-2">{title}</h3>
      <p className="text-gray-400 text-sm text-center">{description}</p>
    </div>
  )
}
