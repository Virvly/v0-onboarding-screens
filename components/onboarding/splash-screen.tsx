export function SplashScreen() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#000000]">
      <div className="flex items-center gap-2">
        <div className="flex gap-0.5">
          <div className="h-8 w-1 rotate-45 bg-[#00759f]" />
          <div className="h-8 w-1 -rotate-45 bg-[#f86701]" />
        </div>
        <span className="text-3xl font-semibold text-white">virvly</span>
      </div>
    </div>
  )
}
