"use client"

import Link from "next/link"
import { Facebook, Instagram, Twitter, Youtube, Mail, Phone, MapPin } from "lucide-react"
import { cn } from "@/lib/utils"

interface FooterProps {
  className?: string
}

export function Footer({ className }: FooterProps) {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    destinations: [
      { label: "Maldives", href: "/destinations/maldives" },
      { label: "Tuscany", href: "/destinations/tuscany" },
      { label: "African Safari", href: "/destinations/safari" },
      { label: "Swiss Alps", href: "/destinations/swiss-alps" },
      { label: "Japanese Ryokan", href: "/destinations/japan" }
    ],
    experiences: [
      { label: "Luxury Resorts", href: "/experiences/resorts" },
      { label: "Cultural Immersion", href: "/experiences/cultural" },
      { label: "Adventure Travel", href: "/experiences/adventure" },
      { label: "Wellness Retreats", href: "/experiences/wellness" },
      { label: "Culinary Journeys", href: "/experiences/culinary" }
    ],
    company: [
      { label: "About Us", href: "/about" },
      { label: "Our Story", href: "/story" },
      { label: "Careers", href: "/careers" },
      { label: "Press", href: "/press" },
      { label: "Contact", href: "/contact" }
    ],
    support: [
      { label: "Help Center", href: "/help" },
      { label: "Travel Insurance", href: "/insurance" },
      { label: "Terms of Service", href: "/terms" },
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Cookie Policy", href: "/cookies" }
    ]
  }

  const socialLinks = [
    { icon: Facebook, href: "https://facebook.com/ohanaworldtravel", label: "Facebook" },
    { icon: Instagram, href: "https://instagram.com/ohanaworldtravel", label: "Instagram" },
    { icon: Twitter, href: "https://twitter.com/ohanaworldtravel", label: "Twitter" },
    { icon: Youtube, href: "https://youtube.com/ohanaworldtravel", label: "YouTube" }
  ]

  return (
    <footer className={cn("bg-[hsl(var(--luxury-navy))] text-white", className)}>
      {/* Main Footer Content */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-4">
            <Link href="/" className="flex flex-col items-start mb-6">
              <span className="font-['Playfair_Display'] text-3xl font-bold tracking-wide text-white">
                OHANA
              </span>
              <span className="font-['Montserrat'] text-sm tracking-[0.2em] text-white/80">
                WORLD TRAVEL LUXE
              </span>
            </Link>

            <p className="font-['Montserrat'] text-white/80 leading-relaxed mb-6">
              Experience the world's most exclusive destinations with personalized luxury travel experiences.
              Our curated journeys offer unparalleled comfort, authentic cultural immersion, and memories that last a lifetime.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-[hsl(var(--luxury-gold))]" />
                <span className="font-['Montserrat'] text-sm text-white/80">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-[hsl(var(--luxury-gold))]" />
                <span className="font-['Montserrat'] text-sm text-white/80">concierge@ohanaworldtravel.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-4 w-4 text-[hsl(var(--luxury-gold))]" />
                <span className="font-['Montserrat'] text-sm text-white/80">Beverly Hills, CA 90210</span>
              </div>
            </div>
          </div>

          {/* Links Sections */}
          <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-4 gap-8">
            {/* Destinations */}
            <div>
              <h4 className="font-['Playfair_Display'] text-lg font-semibold mb-4 text-[hsl(var(--luxury-gold))]">
                Destinations
              </h4>
              <ul className="space-y-3">
                {footerLinks.destinations.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="font-['Montserrat'] text-sm text-white/80 hover:text-[hsl(var(--luxury-gold))] transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Experiences */}
            <div>
              <h4 className="font-['Playfair_Display'] text-lg font-semibold mb-4 text-[hsl(var(--luxury-gold))]">
                Experiences
              </h4>
              <ul className="space-y-3">
                {footerLinks.experiences.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="font-['Montserrat'] text-sm text-white/80 hover:text-[hsl(var(--luxury-gold))] transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="font-['Playfair_Display'] text-lg font-semibold mb-4 text-[hsl(var(--luxury-gold))]">
                Company
              </h4>
              <ul className="space-y-3">
                {footerLinks.company.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="font-['Montserrat'] text-sm text-white/80 hover:text-[hsl(var(--luxury-gold))] transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support */}
            <div>
              <h4 className="font-['Playfair_Display'] text-lg font-semibold mb-4 text-[hsl(var(--luxury-gold))]">
                Support
              </h4>
              <ul className="space-y-3">
                {footerLinks.support.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="font-['Montserrat'] text-sm text-white/80 hover:text-[hsl(var(--luxury-gold))] transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="mt-16 pt-8 border-t border-white/10">
          <div className="max-w-md mx-auto text-center">
            <h4 className="font-['Playfair_Display'] text-xl font-semibold mb-4 text-[hsl(var(--luxury-gold))]">
              Stay Connected
            </h4>
            <p className="font-['Montserrat'] text-sm text-white/80 mb-6">
              Subscribe to our newsletter for exclusive travel offers and destination insights.
            </p>
            <div className="flex space-x-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-full bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-[hsl(var(--luxury-gold))] font-['Montserrat'] text-sm"
              />
              <button className="px-6 py-3 bg-[hsl(var(--luxury-gold))] text-[hsl(var(--luxury-navy))] rounded-full font-['Montserrat'] font-semibold text-sm hover:bg-[hsl(var(--luxury-gold))]/90 transition-colors duration-200">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="font-['Montserrat'] text-sm text-white/60">
              © {currentYear} Ohana World Travel Luxe. All rights reserved.
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-4">
              {socialLinks.map((social) => {
                const IconComponent = social.icon
                return (
                  <Link
                    key={social.label}
                    href={social.href}
                    className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-white/80 hover:text-[hsl(var(--luxury-gold))] hover:bg-white/20 transition-all duration-200"
                    aria-label={social.label}
                  >
                    <IconComponent className="h-4 w-4" />
                  </Link>
                )
              })}
            </div>

            {/* Additional Links */}
            <div className="flex items-center space-x-6">
              <Link
                href="/sitemap"
                className="font-['Montserrat'] text-sm text-white/60 hover:text-[hsl(var(--luxury-gold))] transition-colors duration-200"
              >
                Sitemap
              </Link>
              <Link
                href="/accessibility"
                className="font-['Montserrat'] text-sm text-white/60 hover:text-[hsl(var(--luxury-gold))] transition-colors duration-200"
              >
                Accessibility
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}