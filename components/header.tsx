"use client"

import Image from "next/image"

export function Header() {
  return (
    <header className="fixed top-12 left-0 right-0 z-50 border-b border-border/40 bg-background/80 backdrop-blur-lg">
      <div className="container mx-auto px-6 py-4">
        <nav className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Image
              src="/logo.png"
              alt="SkyMesh Dynamics Logo"
              width={40}
              height={40}
              className="object-contain rounded-xl"
            />
            <span className="text-xl font-semibold tracking-tight">SkyMesh Dynamics</span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <a href="#values" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Values
            </a>
            <a href="#vision" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Vision
            </a>
            <a href="#services" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Services
            </a>
          </div>
        </nav>
      </div>
    </header>
  )
}
