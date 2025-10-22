import Image from "next/image"

interface FileUploadItemProps {
  file: File
  progress: number
  thumbnail?: string
}

export function FileUploadItem({ file, progress, thumbnail }: FileUploadItemProps) {
  const isComplete = progress >= 100
  const progressColor = isComplete ? "#10c600" : "#f86701"

  return (
    <div className="flex items-center gap-4 mb-4">
      {/* Thumbnail */}
      <div className="w-14 h-14 rounded-lg overflow-hidden bg-[#333736] flex-shrink-0">
        {thumbnail ? (
          <Image
            src={thumbnail || "/placeholder.svg"}
            alt={file.name}
            width={56}
            height={56}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-gray-500">
            <span className="text-xs">IMG</span>
          </div>
        )}
      </div>

      {/* File info and progress */}
      <div className="flex-1">
        <p className="text-white text-sm mb-2">{file.name}</p>
        <div className="w-full h-2 bg-[#333736] rounded-full overflow-hidden">
          <div
            className="h-full transition-all duration-300 ease-out"
            style={{
              width: `${progress}%`,
              backgroundColor: progressColor,
            }}
          />
        </div>
      </div>
    </div>
  )
}
