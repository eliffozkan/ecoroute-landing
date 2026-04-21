"use client"

import { Puzzle, EyeOff, XCircle, ShieldCheck, Link, BarChart2 } from "lucide-react"

const problems = [
  {
    icon: Puzzle,
    title: "Fragmented Impact",
    description:
      "Users lack a centralized platform to track their cumulative carbon savings across different areas of life.",
  },
  {
    icon: EyeOff,
    title: "Invisible Efforts",
    description:
      "Individual actions cannot be instantly measured, making small daily steps feel meaningless.",
  },
  {
    icon: XCircle,
    title: "Lack of Incentives",
    description:
      "There is no reliable mechanism to transparently verify eco-friendly habits and turn them into tangible rewards.",
  },
]

const solutions = [
  {
    icon: ShieldCheck,
    title: "Proof-of-Sustainability",
    description:
      "Smart multi-layer verification (GPS, QR, AI Object Detection) ensures every green action is real and tamper-proof.",
  },
  {
    icon: Link,
    title: "The Sustainability Chain",
    description:
      "Every verified action connects to the next, building a powerful personal chain of cumulative environmental impact.",
  },
  {
    icon: BarChart2,
    title: "Personal Carbon Score + EcoPoints",
    description:
      "Track your real carbon savings over time and earn EcoPoints that turn your impact into tangible rewards.",
  },
]

export function Problem() {
  return (
    <section 
      id="problem" 
      className="py-24"
      style={{
        background: "radial-gradient(ellipse at 40% 50%, #1a3329 0%, #0d1f17 70%)"
      }}
    >
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="font-heading font-bold text-4xl md:text-5xl text-text text-center fade-up">
          Problems
        </h2>

        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {problems.map((problem, index) => (
            <div
              key={problem.title}
              className="bg-surface rounded-2xl p-6 border border-surface hover:border-accent/40 transition-all duration-300 hover:scale-[1.02] fade-up"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <problem.icon className="w-10 h-10 text-accent" />
              <h3 className="mt-4 font-heading font-bold text-2xl text-text">
                {problem.title}
              </h3>
              <p className="mt-2 text-muted-foreground font-sans leading-relaxed text-lg">
                {problem.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 fade-up" style={{ transitionDelay: "300ms" }}>
        <h2 className="font-heading font-bold text-4xl md:text-5xl text-text text-center">
            Solutions
          </h2>
          
          <div className="mt-8 grid md:grid-cols-3 gap-6">
            {solutions.map((solution, index) => (
              <div
                key={solution.title}
                className="bg-surface rounded-2xl p-6 border border-surface hover:border-accent/40 transition-all duration-300 hover:scale-[1.02] fade-up"
                style={{ transitionDelay: `${(index + 3) * 100}ms` }}
              >
                <solution.icon className="w-10 h-10 text-accent" />
                <h3 className="mt-4 font-heading font-bold text-2xl text-text">
                  {solution.title}
                </h3>
                <p className="mt-2 text-muted-foreground font-sans leading-relaxed text-lg">
                  {solution.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
