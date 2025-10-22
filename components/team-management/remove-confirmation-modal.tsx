"use client"

import { Trash2 } from "lucide-react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"

interface RemoveConfirmationModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  memberName: string
  onConfirm: () => void
}

export function RemoveConfirmationModal({ open, onOpenChange, memberName, onConfirm }: RemoveConfirmationModalProps) {
  const handleConfirm = () => {
    onConfirm()
    onOpenChange(false)
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="bg-[#1a1a1a] border-gray-700 text-white max-w-md">
        <DialogHeader>
          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center mb-4">
              <Trash2 className="h-8 w-8 text-white" />
            </div>
            <DialogTitle className="text-white text-lg mb-2">Remove {memberName} from your team?</DialogTitle>
            <p className="text-gray-400 text-sm">
              Once removed, they will immediately lose access to all data, events and shared files.
            </p>
          </div>
        </DialogHeader>
        <div className="flex gap-3 pt-4">
          <button
            onClick={() => onOpenChange(false)}
            className="flex-1 px-4 py-3 bg-[#333736] text-white rounded-full hover:bg-[#474d4b] transition-colors"
          >
            Cancel
          </button>
          <button
            onClick={handleConfirm}
            className="flex-1 px-4 py-3 bg-red-500 text-white rounded-full hover:bg-red-600 transition-colors"
          >
            Remove
          </button>
        </div>
      </DialogContent>
    </Dialog>
  )
}
