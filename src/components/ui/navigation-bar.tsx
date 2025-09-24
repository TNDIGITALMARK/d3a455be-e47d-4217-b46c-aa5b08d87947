"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"

interface NavigationBarProps {
  className?: string
}

export function NavigationBar({ className }: NavigationBarProps) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { href: "/", label: "HOME" },
    { href: "/destinations", label: "DESTINATIONS" },
    { href: "/experiences", label: "EXPERIENCES" },
    { href: "/membership", label: "MEMBERSHIP" },
    { href: "/about", label: "ABOUT" },
    { href: "/contact", label: "CONTACT" }
  ]

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out",
        isScrolled
          ? "bg-white/95 backdrop-blur-sm shadow-luxury-shadow"
          : "bg-transparent",
        className
      )}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex flex-col items-start">
            <span className="font-['Playfair_Display'] text-2xl font-bold tracking-wide luxury-navy">
              OHANA
            </span>
            <span className="font-['Montserrat'] text-xs tracking-[0.2em] luxury-navy opacity-80">
              WORLD TRAVEL LUXE
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "font-['Montserrat'] text-sm font-medium tracking-wide transition-colors duration-200",
                  isScrolled
                    ? "text-[hsl(var(--luxury-navy))] hover:text-[hsl(var(--luxury-gold))]"
                    : "text-white hover:text-[hsl(var(--luxury-gold))]"
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <button
              className={cn(
                "px-6 py-2 rounded-full font-['Montserrat'] text-sm font-medium transition-all duration-200",
                "bg-[hsl(var(--luxury-gold))] text-[hsl(var(--luxury-navy))] hover:bg-[hsl(var(--luxury-gold))]/90"
              )}
            >
              BOOK NOW
            </button>
            <button
              className={cn(
                "px-6 py-2 rounded-full font-['Montserrat'] text-sm font-medium border transition-all duration-200",
                isScrolled
                  ? "border-[hsl(var(--luxury-navy))] text-[hsl(var(--luxury-navy))] hover:bg-[hsl(var(--luxury-navy))] hover:text-white"
                  : "border-white text-white hover:bg-white hover:text-[hsl(var(--luxury-navy))]"
              )}
            >
              CONTACT
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? (
              <X className={cn("h-6 w-6", isScrolled ? "text-[hsl(var(--luxury-navy))]" : "text-white")} />
            ) : (
              <Menu className={cn("h-6 w-6", isScrolled ? "text-[hsl(var(--luxury-navy))]" : "text-white")} />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-gray-200/20">
            <nav className="flex flex-col space-y-4 pt-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "font-['Montserrat'] text-sm font-medium tracking-wide transition-colors duration-200",
                    isScrolled
                      ? "text-[hsl(var(--luxury-navy))] hover:text-[hsl(var(--luxury-gold))]"
                      : "text-white hover:text-[hsl(var(--luxury-gold))]"
                  )}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <div className="flex flex-col space-y-2 pt-4">
                <button className="px-6 py-3 rounded-full font-['Montserrat'] text-sm font-medium bg-[hsl(var(--luxury-gold))] text-[hsl(var(--luxury-navy))] hover:bg-[hsl(var(--luxury-gold))]/90 transition-all duration-200">
                  BOOK NOW
                </button>
                <button className={cn(
                  "px-6 py-3 rounded-full font-['Montserrat'] text-sm font-medium border transition-all duration-200",
                  isScrolled
                    ? "border-[hsl(var(--luxury-navy))] text-[hsl(var(--luxury-navy))] hover:bg-[hsl(var(--luxury-navy))] hover:text-white"
                    : "border-white text-white hover:bg-white hover:text-[hsl(var(--luxury-navy))]"
                )}>
                  CONTACT
                </button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}