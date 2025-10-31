"use client"

import { useState } from "react"

export function Vision() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  const visionPoints = [
    {
      number: "1",
      title: "Distributed Network",
      description: "Data no longer travels to a single center, but flows freely within an intelligent global network.",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      number: "2",
      title: "Micro Data Centers",
      description: "An ecosystem of distributed micro-data centers capable of communicating, learning, and adapting.",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      number: "3",
      title: "Living System",
      description: "Infrastructure that self-optimizes like a natural organism, ensuring faster and safer experiences.",
      gradient: "from-cyan-500 to-blue-500",
    },
  ]

  return (
    <section id="vision" className="py-32 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-sm font-semibold text-primary uppercase tracking-wider mb-4">Our Vision</h2>
            <p className="text-4xl md:text-5xl font-bold tracking-tight text-balance mb-8">
              A world of intelligent, distributed infrastructure
            </p>
          </div>

          <div className="space-y-12">
            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-slate-300 leading-relaxed text-center">
                Over the next five years, our goal is to expand globally and become a trusted partner for the management
                and evolution of digital infrastructures.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 pt-8">
              {visionPoints.map((point, index) => (
                <div
                  key={index}
                  className="group relative p-8 rounded-3xl glass-card glass-card-hover morph-hover shimmer bg-slate-900/90"
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <div className="space-y-4 relative z-10">
                    <div
                      className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${point.gradient} flex items-center justify-center transition-all duration-500 ${hoveredIndex === index ? "scale-110 rotate-6" : ""}`}
                    >
                      <span className="text-2xl font-bold text-white">{point.number}</span>
                    </div>
                    <h3 className="text-xl font-semibold text-white">{point.title}</h3>
                    <p className="text-slate-300 leading-relaxed">{point.description}</p>
                  </div>
                  {hoveredIndex === index && (
                    <div
                      className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${point.gradient} opacity-10 -z-10 blur-xl transition-opacity duration-500`}
                    />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
