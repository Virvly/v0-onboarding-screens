import Image from "next/image"

interface MediaGalleryProps {
  images: string[]
}

export function MediaGallery({ images }: MediaGalleryProps) {
  if (images.length === 0) {
    return null
  }

  return (
    <div className="grid grid-cols-3 gap-1">
      {images.map((image, index) => (
        <div key={index} className="aspect-square relative overflow-hidden rounded-lg">
          <Image src={image || "/placeholder.svg"} alt={`Event photo ${index + 1}`} fill className="object-cover" />
        </div>
      ))}
    </div>
  )
}
