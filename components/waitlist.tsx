"use client"

import { useState } from "react"

export function Waitlist() {
  const [email, setEmail] = useState("")
  const [agreed, setAgreed] = useState(false)
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle")
  const [errorMessage, setErrorMessage] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      setStatus("error")
      setErrorMessage("Please enter a valid email address.")
      return
    }

    if (!agreed) {
      setStatus("error")
      setErrorMessage("Please agree to the Privacy Policy.")
      return
    }

    try {
      const res = await fetch("https://formspree.io/f/xeevrevz", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      })

      if (res.ok) {
        setStatus("success")
      } else {
        setStatus("error")
        setErrorMessage("Something went wrong. Please try again.")
      }
    } catch {
      setStatus("error")
      setErrorMessage("Something went wrong. Please try again.")
    }
  }

  return (
    <section id="waitlist" className="py-24 bg-surface">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-heading font-bold text-4xl md:text-5xl text-text fade-up">
            Don&apos;t Break the Chain.
          </h2>
          <p className="mt-4 text-muted-foreground font-sans text-xl fade-up" style={{ transitionDelay: "100ms" }}>
            Go 4 a Greener Route. — Join the waitlist and be first to access EcoRoute.
          </p>

          {status === "success" ? (
            <div className="mt-8 fade-up">
              <p className="text-text font-sans text-lg">
                You&apos;re on the list! <span className="text-accent">●</span> We&apos;ll be in touch.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="mt-8 fade-up" style={{ transitionDelay: "200ms" }}>
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  placeholder="your@email.com"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value)
                    if (status === "error") setStatus("idle")
                  }}
                  className="flex-1 bg-bg border border-[#B4F8C8]/25 focus:border-[#B4F8C8] focus:outline-none focus:ring-1 focus:ring-[#B4F8C8] text-text rounded-full px-6 py-3 font-sans placeholder:text-muted-foreground transition-colors"
                />
                <button
                  type="submit"
                  className="bg-accent text-bg font-sans font-medium px-8 py-3 rounded-full hover:bg-accent-hover transition-colors whitespace-nowrap"
                >
                  Join Waitlist
                </button>
              </div>

              {status === "error" && (
                <p className="mt-3 text-red-400 font-sans text-sm text-left sm:text-center">
                  {errorMessage}
                </p>
              )}

              <label className="mt-4 flex items-center gap-3 justify-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={agreed}
                  onChange={(e) => {
                    setAgreed(e.target.checked)
                    if (status === "error") setStatus("idle")
                  }}
                  className="w-4 h-4 rounded border-accent/30 bg-bg"
                  style={{ accentColor: "#B4F8C8" }}
                />
                <span className="text-muted-foreground font-sans text-base">
                  I agree to the Privacy Policy and consent to receive updates.
                </span>
              </label>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}