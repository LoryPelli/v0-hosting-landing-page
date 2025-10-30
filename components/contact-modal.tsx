"use client"

import { useState } from "react"
import { Mail, X } from "lucide-react"
import { Button } from "@/components/ui/button"

interface ContactModalProps {
  isOpen: boolean
  onClose: () => void
}

export function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [copied, setCopied] = useState(false)

  if (!isOpen) return null

  const email = "info@skymeshdynamics.com"

  const handleCopy = () => {
    navigator.clipboard.writeText(email)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 animate-in fade-in duration-300">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-md" onClick={onClose} />

      <div className="relative glass-card rounded-3xl p-8 max-w-md w-full shadow-2xl animate-in zoom-in-95 duration-500 border-2 border-white/20 bg-slate-900/95">
        <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-blue-500/20 rounded-3xl blur-xl opacity-50 glow" />

        <div className="relative">
          <button
            onClick={onClose}
            className="absolute -top-2 -right-2 p-2 rounded-full glass-card border border-white/20 hover:border-white/40 transition-all duration-500 hover:scale-110 bg-slate-800/90 hover:bg-slate-700"
          >
            <X className="h-4 w-4 text-white" />
          </button>

          <div className="flex justify-center mb-6">
            <div className="p-4 rounded-full glass-card border border-white/20 bg-gradient-to-br from-blue-500/20 to-purple-500/20">
              <Mail className="h-8 w-8 text-blue-400" />
            </div>
          </div>

          <h2 className="text-2xl font-bold text-center mb-4 text-balance text-white">Contattaci</h2>
          <p className="text-slate-300 text-center mb-6 leading-relaxed">
            Per informazioni sui nostri servizi, scrivici all'indirizzo email:
          </p>

          <div className="glass-card rounded-2xl p-4 mb-6 border border-white/20 text-center bg-slate-800/90">
            <p className="text-lg font-semibold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              {email}
            </p>
          </div>

          <div className="flex gap-3">
            <Button
              onClick={handleCopy}
              className="flex-1 liquid-button relative z-10 rounded-full py-6 text-base font-semibold text-white bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500"
              size="lg"
            >
              <span className="relative z-10">{copied ? "Copiato!" : "Copia Email"}</span>
            </Button>
            <Button
              onClick={onClose}
              variant="outline"
              className="flex-1 liquid-button rounded-full py-6 text-base font-semibold glass-card border-white/20 hover:border-white/40 bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:bg-slate-700 hover:from-slate-700 hover:to-slate-600 transition-all duration-500"
              size="lg"
            >
              Chiudi
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
