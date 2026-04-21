"use client"

import { useState, useEffect } from "react"

export function CookieBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent")
    if (!consent) setVisible(true)
  }, [])

  const accept = () => {
    localStorage.setItem("cookie-consent", "accepted")
    setVisible(false)
  }

  const decline = () => {
    localStorage.setItem("cookie-consent", "declined")
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6">
      <div className="max-w-4xl mx-auto bg-surface border border-[#B4F8C8]/20 rounded-2xl px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-2xl">
        <p className="text-muted-foreground font-sans text-sm text-center sm:text-left">
          We use cookies to improve your experience and track analytics. See our{" "}
          <a href="/privacy" className="text-accent underline hover:no-underline">
            Privacy Policy
          </a>
          .
        </p>
        <div className="flex gap-3 shrink-0">
          <button
            onClick={decline}
            className="px-4 py-2 rounded-full border border-[#B4F8C8]/30 text-muted-foreground font-sans text-sm hover:border-[#B4F8C8]/60 transition-colors"
          >
            Decline
          </button>
          <button
            onClick={accept}
            className="px-4 py-2 rounded-full bg-accent text-bg font-sans text-sm font-medium hover:bg-accent-hover transition-colors"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  )
}