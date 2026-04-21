"use client"

import { Github, Instagram, Linkedin } from "lucide-react"

export function Footer() {
  return (
    <footer className="py-16 border-t border-surface">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Logo & Tagline */}
          <div className="fade-up">
            <a href="#" className="font-heading font-bold text-xl">
              <span className="text-accent">Eco</span>
              <span className="text-text">Route</span>
            </a>
            <p className="mt-3 text-muted-foreground font-sans text-lg">
              Turning habits into impact.
            </p>
          </div>

          {/* Links */}
          <div className="fade-up" style={{ transitionDelay: "100ms" }}>
            <h4 className="font-heading font-bold text-text mb-4">Legal</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-text transition-colors font-sans"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-text transition-colors font-sans"
                >
                  Terms of Service
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-text transition-colors font-sans"
                >
                  Cookie Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Social & Contact */}
          <div className="fade-up" style={{ transitionDelay: "200ms" }}>
            <h4 className="font-heading font-bold text-text mb-4">Connect</h4>
            <div className="flex gap-4 mb-4">
              <a
                href="#"
                className="text-muted-foreground hover:text-accent transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-accent transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-accent transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
            <a
              href="mailto:g4ecoroute@gmail.com"
              className="text-muted-foreground hover:text-text transition-colors font-sans"
            >
              g4ecoroute@gmail.com
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-surface text-center">
          <p className="text-muted-foreground font-sans text-sm">
            © 2026 EcoRoute. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
