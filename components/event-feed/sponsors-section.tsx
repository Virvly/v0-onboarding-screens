import Image from "next/image"

interface Sponsor {
  id: string
  name: string
  logoUrl: string
}

interface SponsorsSectionProps {
  sponsors: Sponsor[]
}

export function SponsorsSection({ sponsors }: SponsorsSectionProps) {
  return (
    <div className="space-y-4">
      <h2 className="text-white text-xl font-semibold">Sponsors</h2>

      <div className="grid grid-cols-3 gap-3">
        {sponsors.map((sponsor) => (
          <div key={sponsor.id} className="bg-white rounded-lg p-4 flex items-center justify-center aspect-[3/2]">
            <div className="relative w-full h-full">
              <Image src={sponsor.logoUrl || "/placeholder.svg"} alt={sponsor.name} fill className="object-contain" />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
