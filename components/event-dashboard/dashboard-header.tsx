"use client"

import { PageHeader } from "@/components/shared/page-header"

export function DashboardHeader() {
  return (
    <div className="flex items-start justify-between mb-6">
      <div>
        <h1 className="text-white text-2xl font-bold">Event Dashboard</h1>
        <p className="text-gray-400 text-sm">Metrics, media, and team</p>
      </div>
      <PageHeader />
    </div>
  )
}
