"use client"

import { ArrowLeft, Download, Info } from 'lucide-react'
import Link from "next/link"
import Image from "next/image"

export default function EventPerformanceReportPage() {
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
    <div className="min-h-screen bg-black">
      {/* Background Image Overlay */}
      <div className="absolute inset-0 opacity-20">
        <Image
          src="/group-friends-celebrating.jpg"
          alt="Background"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black" />
      </div>

      <div className="relative max-w-md mx-auto px-6 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <Link href="/event-dashboard" className="flex items-center gap-2 text-[#f86701]">
            <ArrowLeft className="w-5 h-5" />
            <span className="font-medium">Back</span>
          </Link>
          <button className="bg-[#f86701] text-white px-6 py-2 rounded-full font-medium flex items-center gap-2 hover:bg-[#d95a01] transition-colors">
            <Download className="w-4 h-4" />
            Export
          </button>
        </div>

        <h1 className="text-white text-2xl font-bold mb-2">Event Performance Report</h1>
        <p className="text-gray-400 text-sm mb-8">Event performance across all metrics tracked.</p>

        {/* Metrics Grid */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          {/* Reach */}
          <div className="bg-[#1a1d1f] rounded-2xl p-4">
            <div className="flex items-center justify-between mb-2">
              <div className="w-8 h-8 rounded-full bg-[#f86701] flex items-center justify-center">
                <Info className="w-4 h-4 text-white" />
              </div>
              <Info className="w-4 h-4 text-gray-500" />
            </div>
            <div className="text-gray-400 text-sm mb-1">Reach</div>
            <div className="text-white text-3xl font-bold mb-1">5.3k</div>
            <div className="text-gray-500 text-xs">Unique Views</div>
          </div>

          {/* Impressions */}
          <div className="bg-[#1a1d1f] rounded-2xl p-4">
            <div className="flex items-center justify-between mb-2">
              <div className="w-8 h-8 rounded-full bg-[#f86701] flex items-center justify-center">
                <Info className="w-4 h-4 text-white" />
              </div>
              <Info className="w-4 h-4 text-gray-500" />
            </div>
            <div className="text-gray-400 text-sm mb-1">Impressions</div>
            <div className="text-white text-3xl font-bold mb-1">180.0k</div>
            <div className="text-gray-500 text-xs">Total Views</div>
          </div>

          {/* Engagement Rate */}
          <div className="bg-[#1a1d1f] rounded-2xl p-4">
            <div className="flex items-center justify-between mb-2">
              <div className="w-8 h-8 rounded-full bg-[#f86701] flex items-center justify-center">
                <Info className="w-4 h-4 text-white" />
              </div>
              <Info className="w-4 h-4 text-gray-500" />
            </div>
            <div className="text-gray-400 text-sm mb-1">Engagement Rate</div>
            <div className="text-white text-3xl font-bold mb-1">3.6%</div>
            <div className="text-gray-500 text-xs">Likes + Comments + Shares) / Reach</div>
          </div>

          {/* ROI */}
          <div className="bg-[#1a1d1f] rounded-2xl p-4">
            <div className="flex items-center justify-between mb-2">
              <div className="w-8 h-8 rounded-full bg-[#f86701] flex items-center justify-center">
                <Info className="w-4 h-4 text-white" />
              </div>
              <Info className="w-4 h-4 text-gray-500" />
            </div>
            <div className="text-gray-400 text-sm mb-1">ROI</div>
            <div className="text-white text-3xl font-bold mb-1">480%</div>
            <div className="text-gray-500 text-xs">$1140 Saved</div>
          </div>

          {/* EMV */}
          <div className="bg-[#1a1d1f] rounded-2xl p-4">
            <div className="flex items-center justify-between mb-2">
              <div className="w-8 h-8 rounded-full bg-[#f86701] flex items-center justify-center">
                <Info className="w-4 h-4 text-white" />
              </div>
              <Info className="w-4 h-4 text-gray-500" />
            </div>
            <div className="text-gray-400 text-sm mb-1">EMV</div>
            <div className="text-white text-3xl font-bold mb-1">$ 1.4k</div>
            <div className="text-gray-500 text-xs">Earned Media Value</div>
          </div>

          {/* VMV */}
          <div className="bg-[#1a1d1f] rounded-2xl p-4">
            <div className="flex items-center justify-between mb-2">
              <div className="w-8 h-8 rounded-full bg-[#f86701] flex items-center justify-center">
                <Info className="w-4 h-4 text-white" />
              </div>
              <Info className="w-4 h-4 text-gray-500" />
            </div>
            <div className="text-gray-400 text-sm mb-1">VMV</div>
            <div className="text-white text-3xl font-bold mb-1">$ 300</div>
            <div className="text-gray-500 text-xs">Virvly Media Value</div>
          </div>

          {/* Benchmark CPM */}
          <div className="bg-[#1a1d1f] rounded-2xl p-4">
            <div className="flex items-center justify-between mb-2">
              <div className="w-8 h-8 rounded-full bg-[#f86701] flex items-center justify-center">
                <Info className="w-4 h-4 text-white" />
              </div>
              <Info className="w-4 h-4 text-gray-500" />
            </div>
            <div className="text-gray-400 text-sm mb-1">Benchmark CPM</div>
            <div className="text-white text-3xl font-bold mb-1">$ 8</div>
            <div className="text-gray-500 text-xs">Industry Average Cost per 1k</div>
          </div>

          {/* Virvly CPM */}
          <div className="bg-[#1a1d1f] rounded-2xl p-4">
            <div className="flex items-center justify-between mb-2">
              <div className="w-8 h-8 rounded-full bg-[#f86701] flex items-center justify-center">
                <Info className="w-4 h-4 text-white" />
              </div>
              <Info className="w-4 h-4 text-gray-500" />
            </div>
            <div className="text-gray-400 text-sm mb-1">Virvly CPM (Actual)</div>
            <div className="text-white text-3xl font-bold mb-1">$ 1.67</div>
            <div className="text-gray-500 text-xs">Virvly Cost per 1k</div>
          </div>
        </div>

        {/* Savings Spotlight */}
        <div className="bg-[#1a1d1f] rounded-2xl p-6 mb-6">
          <h3 className="text-white text-lg font-semibold mb-4">Savings Spotlight - EMV vs VMV</h3>

          <div className="space-y-4 mb-6">
            {/* EMV Bar */}
            <div>
              <div className="flex justify-between text-sm mb-2">
                <span className="text-gray-400">Earned Media Value (EMV)</span>
              </div>
              <div className="h-8 bg-gray-800 rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-red-500 to-orange-500 rounded-full" style={{ width: "100%" }} />
              </div>
              <div className="flex justify-between text-sm mt-1">
                <span className="text-white font-medium">$1,440</span>
                <span className="text-gray-500">Benchmark ad-equivalent</span>
              </div>
            </div>

            {/* VMV Bar */}
            <div>
              <div className="flex justify-between text-sm mb-2">
                <span className="text-gray-400">Virvly Media Value (VMV)</span>
              </div>
              <div className="h-8 bg-gray-800 rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-green-400 to-emerald-500 rounded-full" style={{ width: "21%" }} />
              </div>
              <div className="flex justify-between text-sm mt-1">
                <span className="text-white font-medium">$1,440</span>
                <span className="text-gray-500">Actual cost via Virvly</span>
              </div>
            </div>
          </div>

          <div className="flex justify-between items-center">
            <div className="bg-green-500/10 text-green-400 px-4 py-2 rounded-full text-sm font-medium">
              Saved $1140 • 79%
            </div>
            <div className="text-gray-400 text-sm">
              ROI: <span className="text-white font-semibold">480%</span>
            </div>
          </div>
        </div>

        {/* Channel Breakdown */}
        <div className="bg-[#1a1d1f] rounded-2xl p-6 mb-6">
          <h3 className="text-white text-lg font-semibold mb-6">Channel Breakdown — Reach</h3>

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
                  {item.platform}: {item.percentage}% ({(item.percentage * 200).toFixed(0)}k)
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Report Summary */}
        <div className="bg-[#1a1d1f] rounded-2xl p-6">
          <h3 className="text-white text-lg font-semibold mb-4">Report Summary</h3>
          <p className="text-gray-300 text-sm leading-relaxed">
            Your content reached <span className="text-white font-semibold">120,000 people</span> and generated{" "}
            <span className="text-white font-semibold">180,000 impressions</span> with a{" "}
            <span className="text-yellow-400 font-semibold">3.6% engagement rate</span>. Equivalent paid media value is{" "}
            <span className="text-white font-semibold">$1,440</span>. Virvly achieved the same visibility for{" "}
            <span className="text-white font-semibold">$300</span>, delivering{" "}
            <span className="text-yellow-400 font-semibold">480% ROI</span> and{" "}
            <span className="text-white font-semibold">$1,140 in savings</span>.
          </p>
        </div>
      </div>
    </div>
  )
}
