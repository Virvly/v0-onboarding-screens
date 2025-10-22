"use client"

import { useState } from "react"
import { StepIndicator } from "@/components/event-setup/step-indicator"
import { StepOne } from "@/components/event-setup/step-one"
import { StepTwo } from "@/components/event-setup/step-two"
import { StepThree } from "@/components/event-setup/step-three"
import { StepFour } from "@/components/event-setup/step-four"

export default function EventSetupPage() {
  const [currentStep, setCurrentStep] = useState(1)
  const totalSteps = 4

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  const handleContinue = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1)
    }
  }

  const handleSaveExit = () => {
    console.log("[v0] Save and exit clicked")
    // Handle save and exit logic
  }

  const handleGoToDashboard = () => {
    console.log("[v0] Go to dashboard clicked")
    // Handle navigation to dashboard
  }

  return (
    <div className="min-h-screen bg-black">
      {/* Mobile frame simulation */}
      <div className="max-w-md mx-auto min-h-screen bg-black">
        {/* Content */}
        <div className="px-6 py-4">
          <StepIndicator currentStep={currentStep} totalSteps={totalSteps} onBack={handleBack} />

          {currentStep === 1 && <StepOne onContinue={handleContinue} onSaveExit={handleSaveExit} />}
          {currentStep === 2 && <StepTwo onContinue={handleContinue} onSaveExit={handleSaveExit} />}
          {currentStep === 3 && <StepThree onContinue={handleContinue} onSaveExit={handleSaveExit} />}
          {currentStep === 4 && <StepFour onGoToDashboard={handleGoToDashboard} onSaveExit={handleSaveExit} />}
        </div>
      </div>
    </div>
  )
}
