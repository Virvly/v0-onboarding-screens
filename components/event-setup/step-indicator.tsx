"use client"

import { ChevronLeft } from "lucide-react"
import { Button } from "@/components/ui/button"

interface StepIndicatorProps {
  currentStep: number
  totalSteps: number
  onBack: () => void
}

export function StepIndicator({ currentStep, totalSteps, onBack }: StepIndicatorProps) {
  return (
    <div className="flex items-center justify-between mb-8">
      <Button
        variant="ghost"
        size="sm"
        onClick={onBack}
        className="text-[#f86701] hover:text-[#f86701] hover:bg-transparent p-0"
      >
        <ChevronLeft className="h-5 w-5 mr-1" />
        Back
      </Button>
      <span className="text-white text-sm">
        {currentStep} / {totalSteps}
      </span>
    </div>
  )
}
