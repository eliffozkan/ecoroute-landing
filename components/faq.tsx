"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

const faqs = [
  {
    question: "Is EcoRoute free to use for students?",
    answer:
      "Yes, EcoRoute is completely free for students. Our freemium model lets you earn and redeem EcoPoints at no cost. Premium features for power users and businesses will be introduced in later phases.",
  },
  {
    question: "How does the platform scale from a campus to a city?",
    answer:
      "We use a modular Phase approach, starting with dense student populations and expanding to urban users via partner brands.",
  },
  {
    question: "What makes your verification better than competitors?",
    answer:
      "Our multi-layered approach — GPS, QR, and AI Object Detection — ensures high reliability and prevents greenwashing.",
  },
  {
    question: "How do you protect user data?",
    answer:
      "We follow strict data privacy laws, focusing only on the data needed to verify the task (like a photo of a thermos).",
  },
  {
    question: "Can businesses use their own tasks?",
    answer:
      "Yes, the platform allows businesses to sponsor specific green campaigns to drive traffic to their sustainable products.",
  },
]

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section id="faq" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="font-heading font-bold text-4xl md:text-5xl text-text text-center fade-up">
          Frequently Asked Questions
        </h2>

        <div className="mt-12 max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index
            return (
              <div
                key={index}
                className={`bg-surface rounded-2xl overflow-hidden fade-up transition-all duration-300`}
                style={{ 
                  transitionDelay: `${index * 100}ms`,
                  borderLeft: isOpen ? "3px solid #B4F8C8" : "3px solid transparent"
                }}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left"
                >
                  <span className="font-heading font-bold text-text pr-4">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-accent transition-transform duration-300 shrink-0 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <div
                  className="overflow-hidden"
                  style={{
                    maxHeight: isOpen ? "300px" : "0px",
                    transition: "max-height 0.35s ease, padding 0.35s ease"
                  }}
                >
                  <p 
                    className="font-sans leading-relaxed text-lg"
                    style={{
                      color: "#F4F6F5",
                      padding: isOpen ? "0 1.5rem 1.25rem 1.5rem" : "0 1.5rem",
                      paddingLeft: isOpen ? "calc(1.5rem + 12px)" : "1.5rem"
                    }}
                  >
                    {faq.answer}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
