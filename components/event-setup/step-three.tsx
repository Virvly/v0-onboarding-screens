"use client"

import { useState } from "react"
import { ChevronDown, Check } from "lucide-react"
import { Button } from "@/components/ui/button"

interface StepThreeProps {
  onContinue: () => void
  onSaveExit: () => void
}

type PaymentState = "initial" | "processing" | "error" | "success"

export function StepThree({ onContinue, onSaveExit }: StepThreeProps) {
  const [paymentState, setPaymentState] = useState<PaymentState>("initial")
  const [showPlans, setShowPlans] = useState(false)
  const [selectedPlan, setSelectedPlan] = useState({
    price: 25,
    storage: "10GB",
    duration: "30 days",
  })

  const plans = [
    { price: 25, storage: "9GB", duration: "30 days" },
    { price: 50, storage: "20GB", duration: "60 days" },
    { price: 125, storage: "9TB", duration: "90 days" },
  ]

  const handlePayment = () => {
    setPaymentState("processing")
    // Simulate payment processing
    setTimeout(() => {
      // Randomly show success or error for demo
      const success = Math.random() > 0.3
      if (success) {
        setPaymentState("success")
        setTimeout(() => {
          onContinue()
        }, 2000)
      } else {
        setPaymentState("error")
      }
    }, 2000)
  }

  const handleRetry = () => {
    setPaymentState("initial")
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-white text-2xl font-semibold mb-1">Payment & Activation</h1>
        <p className="text-gray-400 text-sm">Activate your event with one plan, one click</p>
      </div>

      <div className="space-y-4">
        {/* Plan Selection */}
        <div className="relative">
          <button
            onClick={() => setShowPlans(!showPlans)}
            className="w-full bg-[#333736] rounded-lg p-4 flex items-center justify-between"
          >
            <div className="flex items-center gap-3">
              <div className="w-6 h-6 rounded-full border-2 border-[#f86701] flex items-center justify-center">
                <div className="w-3 h-3 rounded-full bg-[#f86701]" />
              </div>
              <div className="text-left">
                <p className="text-white font-semibold text-lg">${selectedPlan.price}</p>
                <p className="text-gray-400 text-sm">
                  {selectedPlan.storage} Storage - {selectedPlan.duration}
                </p>
              </div>
            </div>
            <ChevronDown className={`h-5 w-5 text-white transition-transform ${showPlans ? "rotate-180" : ""}`} />
          </button>

          {/* Plan Dropdown */}
          {showPlans && (
            <div className="absolute top-full left-0 right-0 mt-2 bg-[#333736] rounded-lg p-2 z-10 space-y-1">
              {plans.map((plan) => (
                <button
                  key={plan.price}
                  onClick={() => {
                    setSelectedPlan(plan)
                    setShowPlans(false)
                  }}
                  className="w-full flex items-center justify-between p-3 rounded-lg hover:bg-[#474d4b] transition-colors"
                >
                  <div className="text-left">
                    <p className="text-white font-semibold">${plan.price}</p>
                    <p className="text-gray-400 text-sm">
                      {plan.storage} Storage - {plan.duration}
                    </p>
                  </div>
                  {selectedPlan.price === plan.price && <Check className="h-5 w-5 text-[#f86701]" />}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Error Banner */}
        {paymentState === "error" && (
          <div className="bg-[#8b1a1a] border border-[#ff2c2c] rounded-lg p-4">
            <p className="text-white text-sm mb-3">Payment failed - please try again or contact customer support</p>
            <div className="flex gap-2">
              <Button
                onClick={handleRetry}
                variant="outline"
                className="flex-1 bg-transparent border-white text-white hover:bg-white/10 h-9 rounded-lg text-sm"
              >
                Retry payment
              </Button>
              <Button
                variant="outline"
                className="flex-1 bg-transparent border-white text-white hover:bg-white/10 h-9 rounded-lg text-sm"
              >
                Contact support
              </Button>
            </div>
          </div>
        )}
      </div>

      {/* Payment Button */}
      <div className="pt-8">
        <Button
          onClick={handlePayment}
          disabled={paymentState === "processing"}
          className="w-full bg-[#f86701] hover:bg-[#d95801] text-white h-12 rounded-lg font-semibold"
        >
          {paymentState === "processing" ? "Processing Payment" : "Pay"}
        </Button>
      </div>

      <p className="text-center text-gray-400 text-xs flex items-center justify-center gap-1">
        <span className="text-white">🔒</span> Payment secured by Stripe/Paystack
      </p>

      {/* Payment Success Modal */}
      {paymentState === "success" && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
          <div className="bg-black rounded-2xl p-12 flex flex-col items-center">
            <div className="w-24 h-24 rounded-full bg-[#10c600] flex items-center justify-center mb-6">
              <Check className="h-12 w-12 text-white" strokeWidth={3} />
            </div>
            <p className="text-white text-xl font-semibold">Payment Received</p>
          </div>
        </div>
      )}
    </div>
  )
}
