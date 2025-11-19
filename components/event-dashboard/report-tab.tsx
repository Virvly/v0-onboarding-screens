"use client"

import { useRouter } from 'next/navigation'

export function ReportTab() {
  const router = useRouter()

  const chartData = [
    { platform: "Instagram", percentage: 59, color: "from-purple-500 to-orange-500" },
    { platform: "Facebook", percentage: 44, color: "bg-white" },
    { platform: "LinkedIn", percentage: 28, color: "bg-blue-400" },
    { platform: "TikTok", percentage: 48, color: "bg-red-500" },
    { platform: "YouTube", percentage: 33, color: "bg-blue-500" },
    { platform: "X", percentage: 10, color: "bg-gray-400" },
  ]

  const maxPercentage = Math.max(...chartData.map((d) => d.percentage))

  return (
    <div className="space-y-6">
      {/* Event Reach Stats */}
      <div className="bg-[#1a1d1f] rounded-2xl p-6">
        <h3 className="text-white text-lg font-semibold mb-6">Event Reach Stats</h3>

        {/* Bar Chart */}
        <div className="relative h-48 flex items-end justify-between gap-3 mb-6">
          {/* Y-axis labels */}
          <div className="absolute left-0 top-0 bottom-0 flex flex-col justify-between text-gray-500 text-xs">
            <span>60k</span>
            <span>45k</span>
            <span>30k</span>
            <span>15k</span>
            <span>0</span>
          </div>

          {/* Bars */}
          <div className="flex-1 flex items-end justify-around gap-2 ml-8">
            {chartData.map((item, index) => (
              <div key={index} className="flex-1 flex flex-col items-center gap-1">
                <div className="w-full relative" style={{ height: `${(item.percentage / maxPercentage) * 100}%` }}>
                  <div
                    className={`w-full h-full rounded-t-lg ${
                      item.color.startsWith("from-") ? `bg-gradient-to-b ${item.color}` : item.color
                    }`}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Legend */}
        <div className="grid grid-cols-2 gap-x-6 gap-y-2 text-sm">
          {chartData.map((item, index) => (
            <div key={index} className="flex items-center gap-2">
              <div
                className={`w-3 h-3 rounded-sm ${
                  item.color.startsWith("from-") ? `bg-gradient-to-br ${item.color}` : item.color
                }`}
              />
              <span className="text-gray-300">
                {item.platform}: {item.percentage}% ({(item.percentage * 200).toFixed(0)}
                k)
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Report Summary */}
      <div className="bg-[#1a1d1f] rounded-2xl p-6">
        <h3 className="text-white text-lg font-semibold mb-4">Report Summary</h3>
        <p className="text-gray-300 text-sm leading-relaxed mb-6">
          Your content reached <span className="text-white font-semibold">120,000 people</span> and generated{" "}
          <span className="text-white font-semibold">180,000 impressions</span> with a{" "}
          <span className="text-yellow-400 font-semibold">3.6% engagement rate</span>. Equivalent paid media value is{" "}
          <span className="text-white font-semibold">$1,440</span>. Virvly achieved the same visibility for{" "}
          <span className="text-white font-semibold">$300</span>, delivering{" "}
          <span className="text-yellow-400 font-semibold">480% ROI</span> and{" "}
          <span className="text-white font-semibold">$1,140 in savings</span>.
        </p>
        <button
          onClick={() => router.push("/event-performance-report")}
          className="w-full bg-[#333736] text-white py-3 rounded-full font-medium hover:bg-[#404442] transition-colors"
        >
          See Full Report
        </button>
      </div>
    </div>
  )
}
