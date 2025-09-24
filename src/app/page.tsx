import { NavigationBar } from "@/components/ui/navigation-bar"
import { HeroBanner } from "@/components/ui/hero-banner"
import { FeaturedDestinations } from "@/components/ui/destination-card"
import { Footer } from "@/components/ui/footer"
import { featuredDestinations, companyStats } from "@/data/mock-data"
import { Plane, Globe, Shield, Award } from "lucide-react"

export const dynamic = 'force-dynamic'

export default function Homepage() {
  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <NavigationBar />

      {/* Hero Section */}
      <HeroBanner />

      {/* Featured Destinations */}
      <FeaturedDestinations destinations={featuredDestinations.slice(0, 6)} />

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-['Playfair_Display'] text-4xl md:text-5xl font-bold text-[hsl(var(--luxury-navy))] mb-4">
              Featured Services
            </h2>
            <p className="font-['Montserrat'] text-lg text-[hsl(var(--luxury-navy))]/70 max-w-2xl mx-auto">
              Experience our comprehensive luxury travel services designed to exceed your expectations at every step of your journey.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="w-20 h-20 bg-[hsl(var(--luxury-gold))]/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-[hsl(var(--luxury-gold))]/20 transition-colors duration-200">
                <Plane className="h-10 w-10 text-[hsl(var(--luxury-gold))]" />
              </div>
              <h3 className="font-['Playfair_Display'] text-xl font-semibold text-[hsl(var(--luxury-navy))] mb-3">
                Custom Journeys
              </h3>
              <p className="font-['Montserrat'] text-[hsl(var(--luxury-navy))]/70 text-sm">
                Personalized itineraries crafted by our expert travel curators to match your unique preferences and desires.
              </p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-[hsl(var(--luxury-gold))]/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-[hsl(var(--luxury-gold))]/20 transition-colors duration-200">
                <Shield className="h-10 w-10 text-[hsl(var(--luxury-gold))]" />
              </div>
              <h3 className="font-['Playfair_Display'] text-xl font-semibold text-[hsl(var(--luxury-navy))] mb-3">
                Secure Bookings
              </h3>
              <p className="font-['Montserrat'] text-[hsl(var(--luxury-navy))]/70 text-sm">
                Your reservations are protected with our comprehensive travel insurance and secure booking guarantee.
              </p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-[hsl(var(--luxury-gold))]/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-[hsl(var(--luxury-gold))]/20 transition-colors duration-200">
                <Globe className="h-10 w-10 text-[hsl(var(--luxury-gold))]" />
              </div>
              <h3 className="font-['Playfair_Display'] text-xl font-semibold text-[hsl(var(--luxury-navy))] mb-3">
                Global Coverage
              </h3>
              <p className="font-['Montserrat'] text-[hsl(var(--luxury-navy))]/70 text-sm">
                Access to exclusive properties and experiences across six continents with local expertise everywhere.
              </p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-[hsl(var(--luxury-gold))]/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-[hsl(var(--luxury-gold))]/20 transition-colors duration-200">
                <Award className="h-10 w-10 text-[hsl(var(--luxury-gold))]" />
              </div>
              <h3 className="font-['Playfair_Display'] text-xl font-semibold text-[hsl(var(--luxury-navy))] mb-3">
                Luxury Standards
              </h3>
              <p className="font-['Montserrat'] text-[hsl(var(--luxury-navy))]/70 text-sm">
                Every destination and experience meets our rigorous standards for luxury, service, and authenticity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-20 bg-[hsl(var(--luxury-navy))] text-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {companyStats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="font-['Playfair_Display'] text-4xl md:text-5xl font-bold text-[hsl(var(--luxury-gold))] mb-2">
                  {stat.value}
                </div>
                <div className="font-['Montserrat'] font-semibold text-lg mb-1">
                  {stat.label}
                </div>
                <div className="font-['Montserrat'] text-sm text-white/70">
                  {stat.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Membership Preview */}
      <section className="py-20 bg-gradient-to-br from-[hsl(var(--luxury-sand))]/20 to-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="font-['Playfair_Display'] text-4xl md:text-5xl font-bold text-[hsl(var(--luxury-navy))] mb-4">
            Join Our Exclusive Community
          </h2>
          <p className="font-['Montserrat'] text-lg text-[hsl(var(--luxury-navy))]/70 max-w-2xl mx-auto mb-12">
            Become a member of Ohana World Travel Luxe and unlock access to the world's most extraordinary destinations and experiences.
          </p>

          <div className="max-w-4xl mx-auto mb-12">
            <div className="bg-white rounded-3xl p-12 luxury-shadow">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                <div>
                  <div className="text-[hsl(var(--luxury-gold))] font-['Playfair_Display'] text-3xl font-bold mb-2">150+</div>
                  <div className="font-['Montserrat'] text-[hsl(var(--luxury-navy))] font-medium">Luxury Destinations</div>
                </div>
                <div>
                  <div className="text-[hsl(var(--luxury-gold))] font-['Playfair_Display'] text-3xl font-bold mb-2">24/7</div>
                  <div className="font-['Montserrat'] text-[hsl(var(--luxury-navy))] font-medium">Concierge Service</div>
                </div>
                <div>
                  <div className="text-[hsl(var(--luxury-gold))] font-['Playfair_Display'] text-3xl font-bold mb-2">30%</div>
                  <div className="font-['Montserrat'] text-[hsl(var(--luxury-navy))] font-medium">Member Savings</div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-[hsl(var(--luxury-gold))] text-[hsl(var(--luxury-navy))] font-['Montserrat'] font-semibold text-lg rounded-full hover:bg-[hsl(var(--luxury-gold))]/90 transition-all duration-200">
              Explore Membership
            </button>
            <button className="px-8 py-4 bg-transparent border-2 border-[hsl(var(--luxury-navy))] text-[hsl(var(--luxury-navy))] font-['Montserrat'] font-semibold text-lg rounded-full hover:bg-[hsl(var(--luxury-navy))] hover:text-white transition-all duration-200">
              View Destinations
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  )
}