"use client"

import { Info } from "lucide-react"

export function StickyBanner() {
  return (
    <div className="fixed top-0 left-0 right-0 z-[60] glass-card border-b border-white/10 backdrop-blur-xl animate-in slide-in-from-top duration-700">
      {/* Gradient glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-blue-500/10 glow" />

      <div className="relative container mx-auto px-6 py-3">
        <div className="flex items-center justify-center gap-3">
          <div className="p-1.5 rounded-full glass-card border border-blue-400/30">
            <Info className="h-4 w-4 text-blue-400" />
          </div>
          <p className="text-sm text-muted-foreground">
            <span className="font-semibold text-foreground">Attenzione:</span> Questo è un sito dimostrativo fittizio
          </p>
        </div>
      </div>
    </div>
  )
}
