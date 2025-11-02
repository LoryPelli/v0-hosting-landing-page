"use client"

import Image from "next/image"
import { cn } from "@/lib/utils"
import { Menu, X } from "lucide-react"
import { useState, useEffect } from "react"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isClosing, setIsClosing] = useState(false)

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && mobileMenuOpen) {
        handleClose()
      }
    }
    window.addEventListener("keydown", handleEscape)
    return () => window.removeEventListener("keydown", handleEscape)
  }, [mobileMenuOpen])

  const handleLinkClick = () => {
    handleClose()
  }

  const handleClose = () => {
    setIsClosing(true)
    setTimeout(() => {
      setMobileMenuOpen(false)
      setIsClosing(false)
    }, 300)
  }

  return (
    <>
      <header className={cn("fixed top-16 left-0 right-0 z-50 border-b border-white/10")}>
        <div className={cn("container mx-auto px-6 py-3")}>
          <nav className={cn("flex items-center justify-between gap-8")}>
            <div className={cn("flex items-center gap-3 shrink-0")}>
              <Image
                src="/logo.png"
                alt="SkyMesh Dynamics Logo"
                width={40}
                height={40}
                quality={100}
                priority
                className={cn("object-contain rounded-full")}
              />
              <span className={cn("text-xl font-semibold tracking-tight whitespace-nowrap")}>SkyMesh Dynamics</span>
            </div>

            <div className={cn("hidden md:flex items-center gap-2 shrink-0")}>
              <a
                href="#values"
                className={cn(
                  "relative px-4 py-2 text-sm text-slate-300 hover:text-white transition-all duration-500 rounded-xl overflow-hidden group",
                )}
              >
                <span className={cn("relative z-10")}>Values</span>
                <div
                  className={cn(
                    "absolute inset-0 bg-linear-to-r from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 backdrop-blur-sm",
                  )}
                />
                <div
                  className={cn(
                    "absolute inset-0 border border-white/0 group-hover:border-white/20 rounded-xl transition-all duration-500",
                  )}
                />
              </a>
              <a
                href="#vision"
                className={cn(
                  "relative px-4 py-2 text-sm text-slate-300 hover:text-white transition-all duration-500 rounded-xl overflow-hidden group",
                )}
              >
                <span className={cn("relative z-10")}>Vision</span>
                <div
                  className={cn(
                    "absolute inset-0 bg-linear-to-r from-purple-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 backdrop-blur-sm",
                  )}
                />
                <div
                  className={cn(
                    "absolute inset-0 border border-white/0 group-hover:border-white/20 rounded-xl transition-all duration-500",
                  )}
                />
              </a>
              <a
                href="#services"
                className={cn(
                  "relative px-4 py-2 text-sm text-slate-300 hover:text-white transition-all duration-500 rounded-xl overflow-hidden group",
                )}
              >
                <span className={cn("relative z-10")}>Services</span>
                <div
                  className={cn(
                    "absolute inset-0 bg-linear-to-r from-cyan-500/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 backdrop-blur-sm",
                  )}
                />
                <div
                  className={cn(
                    "absolute inset-0 border border-white/0 group-hover:border-white/20 rounded-xl transition-all duration-500",
                  )}
                />
              </a>
            </div>

            <button
              onClick={() => setMobileMenuOpen(true)}
              className={cn(
                "md:hidden relative p-2 rounded-xl glass-card border border-white/10 overflow-hidden group",
                "transition-all duration-500 hover:scale-110 hover:border-white/30",
                "bg-slate-900/80 backdrop-blur-sm",
              )}
              aria-label="Open menu"
            >
              <Menu
                className={cn(
                  "w-6 h-6 text-slate-300 group-hover:text-white relative z-10 transition-colors duration-300",
                )}
              />
              <div
                className={cn(
                  "absolute inset-0 bg-linear-to-r from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500",
                )}
              />
              <div
                className={cn(
                  "absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500",
                  "shadow-[0_0_20px_rgba(59,130,246,0.4)]",
                )}
              />
            </button>
          </nav>
        </div>
      </header>

      {mobileMenuOpen && (
        <>
          {/* Backdrop */}
          <div
            className={cn(
              "fixed inset-0 bg-black/60 backdrop-blur-sm z-[60] md:hidden",
              "transition-opacity duration-300",
              isClosing ? "opacity-0" : "opacity-100",
            )}
            onClick={handleClose}
          />

          {/* Mobile menu drawer */}
          <div
            className={cn(
              "fixed top-0 right-0 bottom-0 w-[280px] z-[70] md:hidden",
              "glass-card border-l border-white/10 bg-slate-900/95 backdrop-blur-xl",
              "transition-transform duration-300 ease-out",
              isClosing ? "translate-x-full" : "translate-x-0",
            )}
          >
            <div className={cn("flex flex-col h-full p-6")}>
              <div className={cn("flex justify-end mb-8")}>
                <button
                  onClick={handleClose}
                  className={cn(
                    "relative p-2 rounded-xl glass-card border border-white/10 overflow-hidden group",
                    "transition-all duration-500 hover:scale-110 hover:border-white/30",
                    "bg-slate-800/80",
                  )}
                  aria-label="Close menu"
                >
                  <X
                    className={cn(
                      "w-6 h-6 text-slate-300 group-hover:text-white relative z-10 transition-colors duration-300",
                    )}
                  />
                  <div
                    className={cn(
                      "absolute inset-0 bg-linear-to-r from-slate-700/50 to-slate-600/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500",
                    )}
                  />
                  <div
                    className={cn(
                      "absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500",
                      "shadow-[0_0_20px_rgba(148,163,184,0.4)]",
                    )}
                  />
                </button>
              </div>

              <nav className={cn("flex flex-col gap-4")}>
                <a
                  href="#values"
                  onClick={handleLinkClick}
                  className={cn(
                    "relative px-6 py-4 text-lg text-slate-300 hover:text-white",
                    "transition-all duration-500 rounded-xl overflow-hidden group",
                    "glass-card border border-white/10 hover:border-white/30",
                    "hover:scale-105",
                  )}
                >
                  <span className={cn("relative z-10 font-medium")}>Values</span>
                  <div
                    className={cn(
                      "absolute inset-0 bg-linear-to-r from-blue-500/30 to-purple-500/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 backdrop-blur-sm",
                    )}
                  />
                  <div
                    className={cn(
                      "absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500",
                      "shadow-[0_0_30px_rgba(59,130,246,0.5)]",
                    )}
                  />
                </a>
                <a
                  href="#vision"
                  onClick={handleLinkClick}
                  className={cn(
                    "relative px-6 py-4 text-lg text-slate-300 hover:text-white",
                    "transition-all duration-500 rounded-xl overflow-hidden group",
                    "glass-card border border-white/10 hover:border-white/30",
                    "hover:scale-105",
                  )}
                >
                  <span className={cn("relative z-10 font-medium")}>Vision</span>
                  <div
                    className={cn(
                      "absolute inset-0 bg-linear-to-r from-purple-500/30 to-pink-500/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 backdrop-blur-sm",
                    )}
                  />
                  <div
                    className={cn(
                      "absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500",
                      "shadow-[0_0_30px_rgba(147,51,234,0.5)]",
                    )}
                  />
                </a>
                <a
                  href="#services"
                  onClick={handleLinkClick}
                  className={cn(
                    "relative px-6 py-4 text-lg text-slate-300 hover:text-white",
                    "transition-all duration-500 rounded-xl overflow-hidden group",
                    "glass-card border border-white/10 hover:border-white/30",
                    "hover:scale-105",
                  )}
                >
                  <span className={cn("relative z-10 font-medium")}>Services</span>
                  <div
                    className={cn(
                      "absolute inset-0 bg-linear-to-r from-cyan-500/30 to-blue-500/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 backdrop-blur-sm",
                    )}
                  />
                  <div
                    className={cn(
                      "absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500",
                      "shadow-[0_0_30px_rgba(6,182,212,0.5)]",
                    )}
                  />
                </a>
              </nav>
            </div>
          </div>
        </>
      )}
    </>
  )
}
