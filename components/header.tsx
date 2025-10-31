"use client"

import Image from "next/image"

export function Header() {
  return (
    <header className="fixed top-16 left-0 right-0 z-50 border-b border-white/10">
      <div className="container mx-auto px-6 py-3">
        <nav className="flex items-center justify-between gap-8">
          <div className="flex items-center gap-3 flex-shrink-0">
            <Image
              src="/logo.png"
              alt="SkyMesh Dynamics Logo"
              width={40}
              height={40}
              className="object-contain rounded-full"
            />
            <span className="text-xl font-semibold tracking-tight whitespace-nowrap">SkyMesh Dynamics</span>
          </div>

          <div className="hidden md:flex items-center gap-2 flex-shrink-0">
            <a
              href="#values"
              className="relative px-4 py-2 text-sm text-slate-300 hover:text-white transition-all duration-500 rounded-xl overflow-hidden group"
            >
              <span className="relative z-10">Values</span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 backdrop-blur-sm" />
              <div className="absolute inset-0 border border-white/0 group-hover:border-white/20 rounded-xl transition-all duration-500" />
            </a>
            <a
              href="#vision"
              className="relative px-4 py-2 text-sm text-slate-300 hover:text-white transition-all duration-500 rounded-xl overflow-hidden group"
            >
              <span className="relative z-10">Vision</span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 backdrop-blur-sm" />
              <div className="absolute inset-0 border border-white/0 group-hover:border-white/20 rounded-xl transition-all duration-500" />
            </a>
            <a
              href="#services"
              className="relative px-4 py-2 text-sm text-slate-300 hover:text-white transition-all duration-500 rounded-xl overflow-hidden group"
            >
              <span className="relative z-10">Services</span>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 backdrop-blur-sm" />
              <div className="absolute inset-0 border border-white/0 group-hover:border-white/20 rounded-xl transition-all duration-500" />
            </a>
          </div>
        </nav>
      </div>
    </header>
  )
}
