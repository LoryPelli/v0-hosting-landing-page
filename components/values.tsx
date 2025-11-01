"use client"

import { Shield, Leaf, Zap, Sparkles } from "lucide-react"
import { useState } from "react"

const values = [
  {
    icon: Shield,
    title: "Reliability",
    description:
      "We ensure operational continuity, security, and stability, protecting essential data through reliable services and rapid interventions, wherever you operate.",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    icon: Leaf,
    title: "Energy Efficiency",
    description:
      "We reduce environmental impact by creating sustainable technological systems, using fewer resources and improving performance while fully respecting the planet.",
    gradient: "from-green-500 to-emerald-500",
  },
  {
    icon: Zap,
    title: "Digital Freedom",
    description:
      "We offer scalable, accessible, and flexible platforms that guarantee control, limitless growth, data protection, and constant innovation.",
    gradient: "from-purple-500 to-pink-500",
  },
  {
    icon: Sparkles,
    title: "Innovation",
    description:
      "Thanks to artificial intelligence and automation, we push the boundaries of technology to create solutions that simplify and enhance everyday life.",
    gradient: "from-orange-500 to-red-500",
  },
]

export function Values() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section id="values" className="py-32 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-20">
          <h2 className="text-sm font-semibold text-primary uppercase tracking-wider mb-4">Our Values</h2>
          <p className="text-4xl md:text-5xl font-bold tracking-tight text-balance">Built on principles that matter</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {values.map((value, index) => (
            <div
              key={index}
              className="group relative p-8 rounded-3xl glass-card glass-card-hover morph-hover shimmer bg-slate-900/90 overflow-hidden transition-all duration-500"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="flex items-start gap-6 relative z-10">
                <div className="flex-shrink-0">
                  <div
                    className={`w-12 h-12 rounded-xl bg-gradient-to-br ${value.gradient} flex items-center justify-center transition-all duration-500 ${hoveredIndex === index ? "scale-125 rotate-12 shadow-lg" : ""}`}
                  >
                    <value.icon className="h-6 w-6 text-white" />
                  </div>
                </div>
                <div className="space-y-3">
                  <h3 className="text-xl font-semibold text-white">{value.title}</h3>
                  <p className="text-slate-300 leading-relaxed">{value.description}</p>
                </div>
              </div>
              {hoveredIndex === index && (
                <div
                  className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${value.gradient} opacity-20 blur-2xl transition-all duration-500 animate-pulse`}
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
