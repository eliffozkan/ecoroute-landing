"use client"

import { ScanLine, Leaf, Trophy, ShoppingBag, Code2 } from "lucide-react"

const features = [
  {
    icon: ScanLine,
    title: "Universal AI Verification",
    description:
      "Scalable object detection (YOLO/OpenCV) that works in any environment, from campus to city center.",
  },
  {
    icon: Leaf,
    title: "Smart Carbon Offset",
    description:
      "Automatic integration that turns your EcoPoints into real-world carbon credits or tree donations.",
  },
  {
    icon: Trophy,
    title: "Dynamic Leaderboards",
    description:
      "Compete with your university, your city, or the entire country for Green Champion status.",
  },
  {
    icon: ShoppingBag,
    title: "Green Marketplace",
    description:
      "A dedicated shop for sustainable products and discounts, providing value to both users and eco-brands.",
  },
  {
    icon: Code2,
    title: "API for Businesses",
    description:
      "Allows any green brand or local shop to join the ecosystem and offer verified rewards.",
  },
]

export function Features() {
  return (
    <section id="features" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="font-heading font-bold text-4xl md:text-5xl text-text text-center fade-up">
          Features & Benefits
        </h2>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className={`bg-surface rounded-2xl p-6 border border-surface hover:border-accent/40 transition-all duration-300 hover:scale-[1.02] fade-up ${index === 4 ? "md:col-span-2 max-w-sm mx-auto" : ""
                }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <feature.icon className="w-10 h-10 text-accent" />
              <h3 className="mt-4 font-heading font-bold text-2xl text-text">
                {feature.title}
              </h3>
              <p className="mt-2 text-muted-foreground font-sans leading-relaxed text-lg">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
