"use client"

import { AlertCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

interface DisclaimerPopupProps {
  isOpen: boolean
  onClose: () => void
}

export function DisclaimerPopup({ isOpen, onClose }: DisclaimerPopupProps) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 animate-in fade-in duration-300">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-md" />

      {/* Popup */}
      <div className="relative glass-card rounded-3xl p-8 max-w-md w-full shadow-2xl animate-in zoom-in-95 duration-500 border-2 border-white/20">
        {/* Glow effect */}
        <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-blue-500/20 rounded-3xl blur-xl opacity-50 glow" />

        <div className="relative">
          {/* Icon */}
          <div className="flex justify-center mb-6">
            <div className="p-4 rounded-full glass-card border border-white/20">
              <AlertCircle className="h-8 w-8 text-blue-400" />
            </div>
          </div>

          {/* Content */}
          <h2 className="text-2xl font-bold text-center mb-4 text-balance">Sito Fittizio</h2>
          <p className="text-muted-foreground text-center mb-8 leading-relaxed">
            Questo è un sito web dimostrativo creato solo a scopo illustrativo. SkyMesh Dynamics non è un'azienda reale
            e tutti i contenuti sono puramente fittizi.
          </p>

          {/* Button */}
          <Button
            onClick={onClose}
            className="w-full liquid-button relative z-10 rounded-full py-6 text-lg font-semibold bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 transition-all duration-500"
            size="lg"
          >
            <span className="relative z-10">Ho Capito</span>
          </Button>
        </div>
      </div>
    </div>
  )
}
