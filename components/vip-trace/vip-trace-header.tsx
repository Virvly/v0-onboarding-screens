"use client"

import { ArrowLeft, Search } from "lucide-react"
import { useRouter } from "next/navigation"
import { PageHeader } from "@/components/shared/page-header"

interface VipTraceHeaderProps {
  matchCount?: number
  showMatchCount?: boolean
}

export function VipTraceHeader({ matchCount, showMatchCount = false }: VipTraceHeaderProps) {
  const router = useRouter()

  return (
    <div className="flex items-start justify-between mb-6">
      <div className="flex-1">
        <div className="flex items-center gap-3 mb-2">
          <button onClick={() => router.back()} className="text-[#f86701] hover:text-[#f98c07] transition-colors">
            <ArrowLeft className="w-5 h-5" />
          </button>
          <h1 className="text-white text-xl font-semibold">VIP Trace</h1>
        </div>
        {showMatchCount && matchCount !== undefined ? (
          <div className="flex items-center gap-2 text-gray-400 text-sm ml-8">
            <Search className="w-4 h-4" />
            <span>{matchCount} matches found</span>
          </div>
        ) : (
          <p className="text-gray-400 text-sm ml-8">
            Upload an image from a drive or select a reference photo from the event gallery
          </p>
        )}
      </div>
      <PageHeader />
    </div>
  )
}
