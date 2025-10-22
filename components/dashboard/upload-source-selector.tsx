"use client"

import { useState } from "react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"

type UploadSource = "From Device" | "From External Source"

interface UploadSourceSelectorProps {
  onSourceSelect: (source: UploadSource) => void
}

export function UploadSourceSelector({ onSourceSelect }: UploadSourceSelectorProps) {
  const [selectedSource, setSelectedSource] = useState<UploadSource>("From Device")

  const handleSelect = (source: UploadSource) => {
    setSelectedSource(source)
    onSourceSelect(source)
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="secondary" className="bg-[#333736] text-white hover:bg-[#474d4b]">
          {selectedSource}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="bg-[#282b2b] border-[#333736] text-white min-w-[200px]">
        <DropdownMenuItem
          onClick={() => handleSelect("From Device")}
          className="hover:bg-[#333736] cursor-pointer flex items-center justify-between"
        >
          From Device
          {selectedSource === "From Device" && <Check className="h-4 w-4 text-[#f86701]" />}
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => handleSelect("From External Source")}
          className="hover:bg-[#333736] cursor-pointer flex items-center justify-between"
        >
          From External Source
          {selectedSource === "From External Source" && <Check className="h-4 w-4 text-[#f86701]" />}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
