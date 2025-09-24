"use client"

import { Check, Crown, Gem, Star } from "lucide-react"
import { cn } from "@/lib/utils"

export interface MembershipTier {
  id: string
  name: string
  price: number
  period: string
  description: string
  benefits: string[]
  featured?: boolean
  icon: "star" | "crown" | "gem"
  color: "gold" | "platinum" | "diamond"
}

interface MembershipCardProps {
  tier: MembershipTier
  className?: string
}

const iconMap = {
  star: Star,
  crown: Crown,
  gem: Gem
}

const colorMap = {
  gold: {
    gradient: "from-[hsl(var(--luxury-gold))]/20 to-[hsl(var(--luxury-gold))]/5",
    border: "border-[hsl(var(--luxury-gold))]/30",
    icon: "text-[hsl(var(--luxury-gold))]",
    button: "bg-[hsl(var(--luxury-gold))] text-[hsl(var(--luxury-navy))] hover:bg-[hsl(var(--luxury-gold))]/90"
  },
  platinum: {
    gradient: "from-slate-400/20 to-slate-400/5",
    border: "border-slate-400/30",
    icon: "text-slate-500",
    button: "bg-slate-500 text-white hover:bg-slate-600"
  },
  diamond: {
    gradient: "from-blue-400/20 to-blue-400/5",
    border: "border-blue-400/30",
    icon: "text-blue-500",
    button: "bg-blue-500 text-white hover:bg-blue-600"
  }
}

export function MembershipCard({ tier, className }: MembershipCardProps) {
  const Icon = iconMap[tier.icon]
  const colors = colorMap[tier.color]

  return (
    <div
      className={cn(
        "relative bg-white rounded-3xl p-8 transition-all duration-300 group hover:shadow-luxury-shadow hover:-translate-y-2",
        tier.featured && "ring-2 ring-[hsl(var(--luxury-gold))] scale-105 z-10",
        className
      )}
    >
      {/* Featured Badge */}
      {tier.featured && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[hsl(var(--luxury-gold))] text-[hsl(var(--luxury-navy))] px-6 py-2 rounded-full font-['Montserrat'] text-sm font-bold tracking-wide">
          MOST POPULAR
        </div>
      )}

      {/* Background Gradient */}
      <div className={cn("absolute inset-0 rounded-3xl bg-gradient-to-br opacity-50", colors.gradient)} />

      <div className="relative z-10">
        {/* Header */}
        <div className="text-center mb-8">
          <div className={cn("inline-flex p-4 rounded-full bg-gradient-to-br mb-4", colors.gradient, colors.border, "border")}>
            <Icon className={cn("h-8 w-8", colors.icon)} />
          </div>
          <h3 className="font-['Playfair_Display'] text-2xl font-bold text-[hsl(var(--luxury-navy))] mb-2">
            {tier.name}
          </h3>
          <p className="font-['Montserrat'] text-[hsl(var(--luxury-navy))]/70 text-sm">
            {tier.description}
          </p>
        </div>

        {/* Pricing */}
        <div className="text-center mb-8 pb-8 border-b border-[hsl(var(--luxury-navy))]/10">
          <div className="font-['Playfair_Display'] text-5xl font-bold text-[hsl(var(--luxury-navy))] mb-1">
            ${tier.price.toLocaleString()}
          </div>
          <div className="font-['Montserrat'] text-[hsl(var(--luxury-navy))]/60 text-sm">
            {tier.period}
          </div>
        </div>

        {/* Benefits */}
        <ul className="space-y-4 mb-8">
          {tier.benefits.map((benefit, index) => (
            <li key={index} className="flex items-start space-x-3">
              <div className="flex-shrink-0 w-5 h-5 rounded-full bg-[hsl(var(--luxury-gold))]/20 flex items-center justify-center mt-0.5">
                <Check className="h-3 w-3 text-[hsl(var(--luxury-gold))]" />
              </div>
              <span className="font-['Montserrat'] text-sm text-[hsl(var(--luxury-navy))]/80 leading-relaxed">
                {benefit}
              </span>
            </li>
          ))}
        </ul>

        {/* CTA Button */}
        <button
          className={cn(
            "w-full py-4 px-6 rounded-full font-['Montserrat'] font-semibold text-lg transition-all duration-200 transform group-hover:scale-105",
            colors.button
          )}
        >
          Choose {tier.name}
        </button>

        {/* Additional Info */}
        <div className="text-center mt-6">
          <p className="font-['Montserrat'] text-xs text-[hsl(var(--luxury-navy))]/50">
            30-day money-back guarantee
          </p>
        </div>
      </div>
    </div>
  )
}

// Membership Tiers Section Component
interface MembershipTiersProps {
  tiers: MembershipTier[]
  className?: string
}

export function MembershipTiers({ tiers, className }: MembershipTiersProps) {
  return (
    <section className={cn("py-20 bg-gradient-to-br from-[hsl(var(--luxury-sand))]/30 to-white", className)}>
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-['Playfair_Display'] text-4xl md:text-5xl font-bold text-[hsl(var(--luxury-navy))] mb-4">
            Membership Tiers
          </h2>
          <p className="font-['Montserrat'] text-lg text-[hsl(var(--luxury-navy))]/70 max-w-2xl mx-auto mb-8">
            Join our exclusive community and unlock access to the world's most luxurious travel experiences with personalized service and unmatched benefits.
          </p>
          <div className="inline-flex items-center space-x-2 bg-[hsl(var(--luxury-gold))]/10 rounded-full px-6 py-3 border border-[hsl(var(--luxury-gold))]/20">
            <Crown className="h-5 w-5 text-[hsl(var(--luxury-gold))]" />
            <span className="font-['Montserrat'] text-sm font-medium text-[hsl(var(--luxury-navy))]">
              All memberships include 24/7 concierge service
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {tiers.map((tier) => (
            <MembershipCard key={tier.id} tier={tier} />
          ))}
        </div>

        {/* Additional Benefits Section */}
        <div className="mt-20 text-center">
          <div className="bg-white rounded-2xl p-8 max-w-4xl mx-auto luxury-shadow">
            <h3 className="font-['Playfair_Display'] text-2xl font-bold text-[hsl(var(--luxury-navy))] mb-6">
              Exclusive Member Benefits
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-[hsl(var(--luxury-gold))]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Crown className="h-8 w-8 text-[hsl(var(--luxury-gold))]" />
                </div>
                <h4 className="font-['Montserrat'] font-semibold text-[hsl(var(--luxury-navy))] mb-2">
                  Priority Access
                </h4>
                <p className="font-['Montserrat'] text-sm text-[hsl(var(--luxury-navy))]/70">
                  First access to new destinations and exclusive experiences
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-[hsl(var(--luxury-gold))]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Gem className="h-8 w-8 text-[hsl(var(--luxury-gold))]" />
                </div>
                <h4 className="font-['Montserrat'] font-semibold text-[hsl(var(--luxury-navy))] mb-2">
                  Personalized Service
                </h4>
                <p className="font-['Montserrat'] text-sm text-[hsl(var(--luxury-navy))]/70">
                  Dedicated travel concierge for all your luxury travel needs
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-[hsl(var(--luxury-gold))]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="h-8 w-8 text-[hsl(var(--luxury-gold))]" />
                </div>
                <h4 className="font-['Montserrat'] font-semibold text-[hsl(var(--luxury-navy))] mb-2">
                  Exclusive Rates
                </h4>
                <p className="font-['Montserrat'] text-sm text-[hsl(var(--luxury-navy))]/70">
                  Special member pricing on all destinations and experiences
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}