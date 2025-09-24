import { NavigationBar } from "@/components/ui/navigation-bar"
import { MembershipTiers } from "@/components/ui/membership-card"
import { Footer } from "@/components/ui/footer"
import { membershipTiers, testimonials } from "@/data/mock-data"
import { Check, Crown, Users, MapPin, Star, Quote } from "lucide-react"

export const dynamic = 'force-dynamic'

export default function MembershipPage() {
  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <NavigationBar />

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `linear-gradient(rgba(10, 35, 66, 0.7), rgba(10, 35, 66, 0.7)), url('/api/placeholder/1920/1080')`
          }}
        />

        {/* Content */}
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-6">
          <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 mb-8 border border-white/20">
            <Crown className="h-5 w-5 text-[hsl(var(--luxury-gold))]" />
            <span className="font-['Montserrat'] text-sm font-medium">EXCLUSIVE MEMBERSHIP</span>
          </div>

          <h1 className="font-['Playfair_Display'] text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Join the Elite
          </h1>

          <h2 className="font-['Montserrat'] text-xl md:text-2xl font-light mb-8 opacity-90">
            Experience luxury travel like never before with our exclusive membership tiers
          </h2>

          <p className="font-['Montserrat'] text-lg leading-relaxed mb-12 opacity-80 max-w-2xl mx-auto">
            Gain access to the world's most extraordinary destinations, personalized concierge service,
            and exclusive experiences reserved for our distinguished members only.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-[hsl(var(--luxury-gold))] text-[hsl(var(--luxury-navy))] font-['Montserrat'] font-semibold text-lg rounded-full hover:bg-[hsl(var(--luxury-gold))]/90 transition-all duration-200">
              Choose Your Tier
            </button>
            <button className="px-8 py-4 bg-transparent border-2 border-white text-white font-['Montserrat'] font-semibold text-lg rounded-full hover:bg-white hover:text-[hsl(var(--luxury-navy))] transition-all duration-200">
              Learn More
            </button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/50 rounded-full mt-2"></div>
          </div>
        </div>
      </section>

      {/* Membership Tiers */}
      <MembershipTiers tiers={membershipTiers} />

      {/* Member Benefits Comparison */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-['Playfair_Display'] text-4xl md:text-5xl font-bold text-[hsl(var(--luxury-navy))] mb-4">
              Compare Membership Benefits
            </h2>
            <p className="font-['Montserrat'] text-lg text-[hsl(var(--luxury-navy))]/70 max-w-2xl mx-auto">
              See exactly what's included with each membership tier to find the perfect fit for your luxury travel needs.
            </p>
          </div>

          {/* Comparison Table */}
          <div className="max-w-6xl mx-auto overflow-x-auto">
            <table className="w-full bg-white rounded-2xl luxury-shadow overflow-hidden">
              <thead className="bg-[hsl(var(--luxury-navy))] text-white">
                <tr>
                  <th className="text-left p-6 font-['Montserrat'] font-medium">Features</th>
                  <th className="text-center p-6 font-['Montserrat'] font-medium">Explorer</th>
                  <th className="text-center p-6 font-['Montserrat'] font-medium bg-[hsl(var(--luxury-gold))]/20">
                    <div className="flex items-center justify-center space-x-2">
                      <Crown className="h-4 w-4" />
                      <span>Connoisseur</span>
                    </div>
                  </th>
                  <th className="text-center p-6 font-['Montserrat'] font-medium">Luminary</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { feature: "Destinations Access", explorer: "50+", connoisseur: "100+", luminary: "Unlimited" },
                  { feature: "Booking Discount", explorer: "10%", connoisseur: "20%", luminary: "30%" },
                  { feature: "Room Upgrades", explorer: "—", connoisseur: "✓", luminary: "Guaranteed" },
                  { feature: "Personal Curator", explorer: "—", connoisseur: "✓", luminary: "Dedicated Manager" },
                  { feature: "Private Transportation", explorer: "Airport Only", connoisseur: "✓", luminary: "Jet & Yacht" },
                  { feature: "Exclusive Experiences", explorer: "—", connoisseur: "✓", luminary: "Custom Design" },
                  { feature: "Annual Credit", explorer: "—", connoisseur: "—", luminary: "$5,000" }
                ].map((row, index) => (
                  <tr key={index} className={index % 2 === 0 ? "bg-gray-50/50" : "bg-white"}>
                    <td className="p-6 font-['Montserrat'] font-medium text-[hsl(var(--luxury-navy))]">
                      {row.feature}
                    </td>
                    <td className="p-6 text-center font-['Montserrat'] text-[hsl(var(--luxury-navy))]/70">
                      {row.explorer}
                    </td>
                    <td className="p-6 text-center font-['Montserrat'] text-[hsl(var(--luxury-navy))]/70 bg-[hsl(var(--luxury-gold))]/5">
                      {row.connoisseur}
                    </td>
                    <td className="p-6 text-center font-['Montserrat'] text-[hsl(var(--luxury-navy))]/70">
                      {row.luminary}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Member Testimonials */}
      <section className="py-20 bg-gradient-to-br from-[hsl(var(--luxury-sand))]/20 to-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-['Playfair_Display'] text-4xl md:text-5xl font-bold text-[hsl(var(--luxury-navy))] mb-4">
              What Our Members Say
            </h2>
            <p className="font-['Montserrat'] text-lg text-[hsl(var(--luxury-navy))]/70 max-w-2xl mx-auto">
              Read testimonials from our valued members who have experienced the world's finest destinations with us.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="bg-white rounded-2xl p-8 luxury-shadow relative">
                <div className="absolute -top-4 left-8 w-8 h-8 bg-[hsl(var(--luxury-gold))] rounded-full flex items-center justify-center">
                  <Quote className="h-4 w-4 text-[hsl(var(--luxury-navy))]" />
                </div>

                <div className="mb-6">
                  <div className="flex items-center space-x-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-[hsl(var(--luxury-gold))] text-[hsl(var(--luxury-gold))]" />
                    ))}
                  </div>
                  <p className="font-['Montserrat'] text-[hsl(var(--luxury-navy))]/80 leading-relaxed mb-6">
                    "{testimonial.content}"
                  </p>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-[hsl(var(--luxury-gold))]/20 rounded-full flex items-center justify-center">
                    <span className="font-['Montserrat'] font-semibold text-[hsl(var(--luxury-navy))]">
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div>
                    <div className="font-['Montserrat'] font-semibold text-[hsl(var(--luxury-navy))]">
                      {testimonial.name}
                    </div>
                    <div className="font-['Montserrat'] text-sm text-[hsl(var(--luxury-navy))]/60">
                      {testimonial.membership} Member • {testimonial.location}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Member Exclusive Benefits */}
      <section className="py-20 bg-[hsl(var(--luxury-navy))] text-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-['Playfair_Display'] text-4xl md:text-5xl font-bold mb-4">
              Member-Only Privileges
            </h2>
            <p className="font-['Montserrat'] text-lg opacity-80 max-w-2xl mx-auto">
              Enjoy exclusive benefits and services that set our members apart from ordinary travelers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-[hsl(var(--luxury-gold))]/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="h-10 w-10 text-[hsl(var(--luxury-gold))]" />
              </div>
              <h3 className="font-['Playfair_Display'] text-xl font-semibold mb-3">
                Exclusive Events
              </h3>
              <p className="font-['Montserrat'] text-sm opacity-80">
                Private member gatherings, wine tastings, and cultural events in stunning locations worldwide.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-[hsl(var(--luxury-gold))]/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <MapPin className="h-10 w-10 text-[hsl(var(--luxury-gold))]" />
              </div>
              <h3 className="font-['Playfair_Display'] text-xl font-semibold mb-3">
                Hidden Gems
              </h3>
              <p className="font-['Montserrat'] text-sm opacity-80">
                Access to secret destinations and experiences not available to the general public.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-[hsl(var(--luxury-gold))]/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Crown className="h-10 w-10 text-[hsl(var(--luxury-gold))]" />
              </div>
              <h3 className="font-['Playfair_Display'] text-xl font-semibold mb-3">
                VIP Treatment
              </h3>
              <p className="font-['Montserrat'] text-sm opacity-80">
                Skip the lines, enjoy priority service, and receive royal treatment at every destination.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-[hsl(var(--luxury-gold))]/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Check className="h-10 w-10 text-[hsl(var(--luxury-gold))]" />
              </div>
              <h3 className="font-['Playfair_Display'] text-xl font-semibold mb-3">
                Guaranteed Quality
              </h3>
              <p className="font-['Montserrat'] text-sm opacity-80">
                Every experience is personally vetted and guaranteed to exceed your highest expectations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-[hsl(var(--luxury-gold))]/10 to-[hsl(var(--luxury-sand))]/20">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-['Playfair_Display'] text-4xl md:text-5xl font-bold text-[hsl(var(--luxury-navy))] mb-6">
              Ready to Begin Your Journey?
            </h2>
            <p className="font-['Montserrat'] text-lg text-[hsl(var(--luxury-navy))]/70 mb-8 max-w-2xl mx-auto">
              Join thousands of discerning travelers who trust Ohana World Travel Luxe for their most important journeys.
            </p>

            <div className="bg-white rounded-3xl p-8 mb-8 luxury-shadow">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-3xl font-['Playfair_Display'] font-bold text-[hsl(var(--luxury-gold))] mb-2">
                    2,500+
                  </div>
                  <div className="font-['Montserrat'] text-[hsl(var(--luxury-navy))] font-medium">
                    Happy Members
                  </div>
                </div>
                <div>
                  <div className="text-3xl font-['Playfair_Display'] font-bold text-[hsl(var(--luxury-gold))] mb-2">
                    15+
                  </div>
                  <div className="font-['Montserrat'] text-[hsl(var(--luxury-navy))] font-medium">
                    Years of Excellence
                  </div>
                </div>
                <div>
                  <div className="text-3xl font-['Playfair_Display'] font-bold text-[hsl(var(--luxury-gold))] mb-2">
                    150+
                  </div>
                  <div className="font-['Montserrat'] text-[hsl(var(--luxury-navy))] font-medium">
                    Destinations
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-[hsl(var(--luxury-gold))] text-[hsl(var(--luxury-navy))] font-['Montserrat'] font-semibold text-lg rounded-full hover:bg-[hsl(var(--luxury-gold))]/90 transition-all duration-200">
                Start Your Membership
              </button>
              <button className="px-8 py-4 bg-transparent border-2 border-[hsl(var(--luxury-navy))] text-[hsl(var(--luxury-navy))] font-['Montserrat'] font-semibold text-lg rounded-full hover:bg-[hsl(var(--luxury-navy))] hover:text-white transition-all duration-200">
                Schedule Consultation
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  )
}