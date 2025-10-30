"use client"

import { Network, Cpu, Lock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react"

const services = [
  {
    icon: Network,
    title: "Distributed Hosting",
    description:
      "We offer a decentralized cloud network that ensures operational continuity, high speed, and reduced data latency, improving the overall performance of digital systems.",
    features: ["Global Network", "Low Latency", "High Availability", "99.99% Uptime"],
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    icon: Cpu,
    title: "Edge Computing & AI Resource Management",
    description:
      "By processing data closer to the source and using AI algorithms for resource management, we automatically optimize resource allocation based on usage flows.",
    features: ["Edge Processing", "AI Optimization", "Auto-scaling", "Real-time Analytics"],
    gradient: "from-purple-500 to-pink-500",
  },
  {
    icon: Lock,
    title: "Automated Cybersecurity",
    description:
      "We provide integrated and adaptive data protection, through security solutions that learn and evolve in real time to counter emerging threats.",
    features: ["AI-Powered Security", "Threat Detection", "Auto-response", "Compliance Ready"],
    gradient: "from-orange-500 to-red-500",
  },
]

interface ServicesProps {
  onContactClick: () => void
}

export function Services({ onContactClick }: ServicesProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section id="services" className="py-32 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-20">
          <h2 className="text-sm font-semibold text-primary uppercase tracking-wider mb-4">Our Services</h2>
          <p className="text-4xl md:text-5xl font-bold tracking-tight text-balance mb-6">
            AI-powered distributed cloud solutions
          </p>
          <p className="text-xl text-muted-foreground text-balance">
            Designed to make digital infrastructure faster, more secure, and more intelligent.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative p-8 rounded-3xl glass-card glass-card-hover morph-hover shimmer"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="space-y-6 relative z-10">
                <div
                  className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center transition-all duration-500 ${hoveredIndex === index ? "scale-110 rotate-12" : ""}`}
                >
                  <service.icon className="h-7 w-7 text-white" />
                </div>

                <div className="space-y-3">
                  <h3 className="text-2xl font-semibold">{service.title}</h3>
                  <p className="text-slate-300 leading-relaxed">{service.description}</p>
                </div>

                <div className="pt-4 space-y-2">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm group/feature">
                      <div
                        className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${service.gradient} transition-all duration-300 group-hover/feature:w-3`}
                      />
                      <span className="text-slate-300">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
              {hoveredIndex === index && (
                <div
                  className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${service.gradient} opacity-10 -z-10 blur-2xl transition-opacity duration-500 glow`}
                />
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <Button
            size="lg"
            onClick={onContactClick}
            className="liquid-button rounded-full px-8 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 relative transition-all duration-500"
          >
            <span className="relative z-10">Contact Us</span>
          </Button>
        </div>
      </div>
    </section>
  )
}
