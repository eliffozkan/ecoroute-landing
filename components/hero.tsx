"use client"

import { useEffect, useState } from "react"

export function Hero() {
  const [animationKey, setAnimationKey] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimationKey((prev) => prev + 1)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section
      className="min-h-screen flex items-center pt-20"
      style={{
        background: "radial-gradient(ellipse at 60% 50%, #1a3329 0%, #0d1f17 70%)"
      }}
    >
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <div className="fade-up">
          <h1 className="font-heading font-bold text-5xl md:text-7xl text-text leading-tight md:whitespace-nowrap">
            Go 4 a Greener Route.
          </h1>
          <p className="mt-6 text-xl text-muted-foreground font-sans leading-relaxed max-w-lg">
            Bridging the gap between environmental intent and daily action.
            EcoRoute turns your sustainable habits into a rewarding global
            currency.
          </p>
          <a
            href="#waitlist"
            className="mt-8 inline-block bg-accent text-bg font-sans font-medium px-8 py-3 rounded-full hover:bg-accent-hover transition-colors text-lg"
          >
            Join the Waitlist
          </a>
        </div>

        {/* Phone Mockup with YOLO Animation - scaled down 10% and shifted right */}
        <div className="flex justify-center md:justify-end fade-up" style={{ transitionDelay: "100ms" }}>
          <div className="relative scale-90 origin-center">
            {/* Phone Frame */}
            <div className="w-64 h-[500px] bg-surface rounded-[3rem] border-4 border-surface p-3 shadow-2xl">
              {/* Phone Notch */}
              <div className="absolute top-6 left-1/2 -translate-x-1/2 w-20 h-6 bg-bg rounded-full" />

              {/* Phone Screen */}
              <div className="w-full h-full bg-bg rounded-[2.5rem] relative flex items-center justify-center">
                {/* Camera View Simulation */}
                <div className="absolute inset-4 bg-bg/50 rounded-2xl" />

                {/* Coffee Thermos SVG */}
                <div className="relative" key={animationKey}>
                  <svg
                    width="80"
                    height="140"
                    viewBox="0 0 80 140"
                    fill="none"
                    className="relative z-10"
                  >
                    {/* Thermos Body */}
                    <rect
                      x="15"
                      y="30"
                      width="50"
                      height="100"
                      rx="8"
                      fill="#2a4a3e"
                      stroke="#3d6454"
                      strokeWidth="2"
                    />
                    {/* Thermos Lid */}
                    <rect
                      x="20"
                      y="10"
                      width="40"
                      height="25"
                      rx="4"
                      fill="#3d6454"
                      stroke="#4a7a64"
                      strokeWidth="2"
                    />
                    {/* Thermos Cap */}
                    <rect
                      x="25"
                      y="0"
                      width="30"
                      height="15"
                      rx="4"
                      fill="#4a7a64"
                    />
                    {/* Highlight */}
                    <rect
                      x="22"
                      y="40"
                      width="6"
                      height="60"
                      rx="3"
                      fill="#5a9a74"
                      opacity="0.5"
                    />
                  </svg>

                  {/* YOLO Bounding Box */}
                  <div className="absolute -inset-4">
                    {/* Corner Brackets */}
                    <div className="absolute -top-1 -left-1 w-4 h-4 border-l-2 border-t-2 border-accent" />
                    <div className="absolute -top-1 -right-1 w-4 h-4 border-r-2 border-t-2 border-accent" />
                    <div className="absolute -bottom-1 -left-1 w-4 h-4 border-l-2 border-b-2 border-accent" />
                    <div className="absolute -bottom-1 -right-1 w-4 h-4 border-r-2 border-b-2 border-accent" />

                    {/* Animated Borders */}
                    <div className="absolute top-0 left-0 h-0.5 bg-accent yolo-box-top" />
                    <div className="absolute top-0 right-0 w-0.5 bg-accent yolo-box-right" />
                    <div className="absolute bottom-0 right-0 h-0.5 bg-accent yolo-box-bottom origin-right" style={{ direction: 'rtl' }} />
                    <div className="absolute bottom-0 left-0 w-0.5 bg-accent yolo-box-left" style={{ transformOrigin: 'bottom' }} />
                  </div>

                  {/* EcoPoints Badge */}
                  <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 opacity-0 eco-points-badge">
                    <div className="bg-surface px-4 py-2 rounded-full flex items-center gap-2 whitespace-nowrap">
                      <span className="text-text font-sans font-medium">+50 EcoPoints</span>
                      <span className="text-accent">●</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
