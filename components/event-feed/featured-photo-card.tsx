import Image from "next/image"
import { Badge } from "@/components/ui/badge"

interface FeaturedPhotoCardProps {
  imageUrl: string
  badge: string
  author: string
  role: string
  timestamp: string
  autoMode?: boolean
}

export function FeaturedPhotoCard({
  imageUrl,
  badge,
  author,
  role,
  timestamp,
  autoMode = true,
}: FeaturedPhotoCardProps) {
  return (
    <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden">
      <Image src={imageUrl || "/placeholder.svg"} alt="Featured event photo" fill className="object-cover" />

      {/* Auto badge */}
      {autoMode && (
        <div className="absolute top-4 right-4">
          <Badge className="bg-[#333736] text-white border-0 px-4 py-1">Auto</Badge>
        </div>
      )}

      {/* Bottom info overlay */}
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
        <div className="flex items-center gap-2">
          <Badge className="bg-white/20 text-white border-0 px-3 py-1 backdrop-blur-sm">{badge}</Badge>
          <span className="text-white text-sm">
            by {author} ({role}) - {timestamp}
          </span>
        </div>
      </div>
    </div>
  )
}
