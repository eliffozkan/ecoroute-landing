"use client"

import { useState, useEffect } from "react"

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out"
      style={{
        background: scrolled ? "rgba(13, 31, 23, 0.90)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
      }}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#" className="font-heading font-bold text-xl">
          <span className="text-accent">Eco</span>
          <span className="text-text">Route</span>
        </a>

        <div className="hidden md:flex items-center gap-4">
          <a
            href="#problem"
            className="text-text/80 hover:text-text font-sans px-4 py-1.5 rounded-full transition-all duration-200"
            style={{
              background: "rgba(180, 248, 200, 0.08)",
              border: "1px solid rgba(180, 248, 200, 0.15)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "rgba(180, 248, 200, 0.15)"
              e.currentTarget.style.borderColor = "rgba(180, 248, 200, 0.3)"
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "rgba(180, 248, 200, 0.08)"
              e.currentTarget.style.borderColor = "rgba(180, 248, 200, 0.15)"
            }}
          >
            Problem & Solution
          </a>
          <a
            href="#features"
            className="text-text/80 hover:text-text font-sans px-4 py-1.5 rounded-full transition-all duration-200"
            style={{
              background: "rgba(180, 248, 200, 0.08)",
              border: "1px solid rgba(180, 248, 200, 0.15)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "rgba(180, 248, 200, 0.15)"
              e.currentTarget.style.borderColor = "rgba(180, 248, 200, 0.3)"
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "rgba(180, 248, 200, 0.08)"
              e.currentTarget.style.borderColor = "rgba(180, 248, 200, 0.15)"
            }}
          >
            Features
          </a>
          <a
            href="#how-it-works"
            className="text-text/80 hover:text-text font-sans px-4 py-1.5 rounded-full transition-all duration-200"
            style={{
              background: "rgba(180, 248, 200, 0.08)",
              border: "1px solid rgba(180, 248, 200, 0.15)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "rgba(180, 248, 200, 0.15)"
              e.currentTarget.style.borderColor = "rgba(180, 248, 200, 0.3)"
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "rgba(180, 248, 200, 0.08)"
              e.currentTarget.style.borderColor = "rgba(180, 248, 200, 0.15)"
            }}
          >
            How It Works
          </a>
          <a
            href="#faq"
            className="text-text/80 hover:text-text font-sans px-4 py-1.5 rounded-full transition-all duration-200"
            style={{
              background: "rgba(180, 248, 200, 0.08)",
              border: "1px solid rgba(180, 248, 200, 0.15)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "rgba(180, 248, 200, 0.15)"
              e.currentTarget.style.borderColor = "rgba(180, 248, 200, 0.3)"
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "rgba(180, 248, 200, 0.08)"
              e.currentTarget.style.borderColor = "rgba(180, 248, 200, 0.15)"
            }}
          >
            FAQ
          </a>
        </div>

        <a
          href="#waitlist"
          className="bg-accent text-bg font-sans font-medium px-5 py-2 rounded-full hover:bg-accent-hover transition-colors"
        >
          Join Waitlist
        </a>
      </div>
    </nav>
  )
}
