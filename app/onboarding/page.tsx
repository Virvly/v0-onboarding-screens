"use client"

import { useState } from "react"
import { SplashScreen } from "@/components/onboarding/splash-screen"
import { WelcomeScreen } from "@/components/onboarding/welcome-screen"
import { SignInScreen } from "@/components/onboarding/sign-in-screen"
import { LoadingScreen } from "@/components/onboarding/loading-screen"
import { CodeVerificationScreen } from "@/components/onboarding/code-verification-screen"
import { CodeSentScreen } from "@/components/onboarding/code-sent-screen"

type OnboardingStep = "splash" | "welcome" | "signin" | "loading" | "verification" | "sent"

export default function OnboardingPage() {
  const [step, setStep] = useState<OnboardingStep>("splash")
  const [email, setEmail] = useState("")

  // Auto-advance from splash screen
  useState(() => {
    if (step === "splash") {
      const timer = setTimeout(() => setStep("welcome"), 2000)
      return () => clearTimeout(timer)
    }
  })

  const handleSendCode = (userEmail: string) => {
    setEmail(userEmail)
    setStep("loading")
    // Simulate loading
    setTimeout(() => setStep("verification"), 1500)
  }

  const handleVerify = (code: string) => {
    console.log("Verifying code:", code)
    setStep("sent")
  }

  return (
    <div className="mx-auto max-w-md">
      {step === "splash" && <SplashScreen />}
      {step === "welcome" && <WelcomeScreen onProceed={() => setStep("signin")} />}
      {step === "signin" && <SignInScreen onSendCode={handleSendCode} />}
      {step === "loading" && <LoadingScreen email={email} />}
      {step === "verification" && <CodeVerificationScreen email={email} onVerify={handleVerify} />}
      {step === "sent" && <CodeSentScreen email={email} />}
    </div>
  )
}
