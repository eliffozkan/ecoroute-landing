"use client"

const steps = [
  {
    number: 1,
    title: "Pick a Mission",
    description:
      "Select a verified task from our global map or campus-specific lists.",
  },
  {
    number: 2,
    title: "Verify with AI",
    description:
      "Use our built-in camera tool; our models recognize your eco-friendly actions instantly.",
  },
  {
    number: 3,
    title: "Scale Your Impact",
    description:
      "Track your cumulative carbon savings as you earn EcoPoints and climb the leaderboard.",
  },
  {
    number: 4,
    title: "Redeem Anywhere",
    description:
      "Use your points for discounts at local shops or donate them to global reforestation projects.",
  },
]

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="font-heading font-bold text-4xl md:text-5xl text-text text-center fade-up">
          How It Works
        </h2>

        {/* Desktop Timeline */}
        <div className="hidden md:block mt-16 fade-up" style={{ transitionDelay: "100ms" }}>
          <div className="relative">
            {/* Dashed Line */}
            <div className="absolute top-8 left-0 right-0 h-0.5 border-t-2 border-dashed border-accent/50" />

            <div className="grid grid-cols-4 gap-4">
              {steps.map((step, index) => (
                <div
                  key={step.number}
                  className="relative text-center fade-up"
                  style={{ transitionDelay: `${(index + 1) * 100}ms` }}
                >
                  {/* Number Circle with glow */}
                  <div 
                    className="w-16 h-16 mx-auto bg-accent text-bg rounded-full flex items-center justify-center font-heading font-bold text-2xl relative z-10"
                    style={{ boxShadow: "0 0 10px #B4F8C8, 0 0 22px rgba(180, 248, 200, 0.35)" }}
                  >
                    {step.number}
                  </div>
                  <h3 className="mt-6 font-heading font-bold text-xl text-text">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-muted-foreground font-sans text-lg leading-relaxed">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile Vertical List */}
        <div className="md:hidden mt-12 space-y-8">
          {steps.map((step, index) => (
            <div
              key={step.number}
              className="flex gap-4 fade-up"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div 
                className="w-12 h-12 bg-accent text-bg rounded-full flex items-center justify-center font-heading font-bold text-xl shrink-0"
                style={{ boxShadow: "0 0 10px #B4F8C8, 0 0 22px rgba(180, 248, 200, 0.35)" }}
              >
                {step.number}
              </div>
              <div>
                <h3 className="font-heading font-bold text-xl text-text">
                  {step.title}
                </h3>
                <p className="mt-1 text-muted-foreground font-sans text-lg leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Secondary CTA */}
        <div className="mt-16 text-center fade-up" style={{ transitionDelay: "500ms" }}>
          <a
            href="#waitlist"
            className="inline-block border-2 border-accent text-accent font-sans font-medium px-8 py-3 rounded-full hover:bg-accent hover:text-bg transition-colors"
          >
            Start Your Chain →
          </a>
        </div>
      </div>
    </section>
  )
}
