"use client"

import { NavigationBar } from "@/components/ui/navigation-bar"
import { Footer } from "@/components/ui/footer"
import { featuredDestinations } from "@/data/mock-data"
import {
  MapPin,
  Star,
  Calendar,
  Users,
  Wifi,
  Car,
  Utensils,
  Waves,
  Mountain,
  Camera,
  Clock,
  CheckCircle,
  ArrowLeft,
  Heart,
  Share2
} from "lucide-react"
import { useState } from "react"
import Image from "next/image"
import Link from "next/link"

interface DestinationPageProps {
  params: {
    id: string
  }
}

// Mock detailed destination data
const getDestinationDetails = (id: string) => {
  const baseDestination = featuredDestinations.find(d => d.id === id) || featuredDestinations[0]

  return {
    ...baseDestination,
    gallery: [
      "/api/placeholder/800/600",
      "/api/placeholder/800/600",
      "/api/placeholder/800/600",
      "/api/placeholder/800/600",
      "/api/placeholder/800/600",
      "/api/placeholder/800/600"
    ],
    detailedDescription: "Experience the epitome of luxury travel with this carefully curated destination. Our expert team has handpicked every aspect of your journey to ensure an unforgettable experience that exceeds your highest expectations. From world-class accommodations to exclusive cultural experiences, every detail has been meticulously planned.",
    highlights: [
      "Private butler service available 24/7",
      "Exclusive access to restricted areas and experiences",
      "Michelin-starred dining experiences",
      "Personalized itinerary based on your preferences",
      "Professional photography session included",
      "Luxury transportation throughout your stay"
    ],
    amenities: [
      { icon: Wifi, name: "High-Speed WiFi", description: "Complimentary throughout property" },
      { icon: Car, name: "Private Transportation", description: "Luxury vehicle with personal driver" },
      { icon: Utensils, name: "Gourmet Dining", description: "Multiple award-winning restaurants" },
      { icon: Waves, name: "Spa & Wellness", description: "Full-service spa and fitness center" },
      { icon: Mountain, name: "Adventure Activities", description: "Guided tours and experiences" },
      { icon: Camera, name: "Photography", description: "Professional photo sessions available" }
    ],
    schedule: [
      { day: "Day 1", title: "Arrival & Welcome", description: "Private transfer, welcome ceremony, luxury suite check-in" },
      { day: "Day 2", title: "Cultural Immersion", description: "Local guided tour, traditional cuisine experience, sunset viewing" },
      { day: "Day 3", title: "Adventure & Relaxation", description: "Morning adventure activity, afternoon spa treatments, evening fine dining" },
      { day: "Day 4", title: "Exclusive Experiences", description: "Private access tours, meet local artisans, photography session" },
      { day: "Day 5", title: "Departure", description: "Final breakfast, souvenir presentation, private transfer to airport" }
    ],
    pricing: {
      basePrice: parseInt(baseDestination.price.replace(/[^0-9]/g, '')),
      includes: [
        "Luxury accommodation for entire stay",
        "All meals and beverages",
        "Private guided tours and experiences",
        "Luxury transportation",
        "24/7 concierge service",
        "Travel insurance coverage"
      ],
      excludes: [
        "International flights",
        "Personal shopping and souvenirs",
        "Additional spa treatments",
        "Gratuities for staff"
      ]
    }
  }
}

export default function DestinationPage({ params }: DestinationPageProps) {
  const destination = getDestinationDetails(params.id)
  const [selectedImage, setSelectedImage] = useState(0)
  const [showBookingCalendar, setShowBookingCalendar] = useState(false)

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <NavigationBar />

      {/* Hero Section with Gallery */}
      <section className="pt-24 pb-8">
        <div className="container mx-auto px-6">
          {/* Breadcrumb & Actions */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-4">
              <Link
                href="/destinations"
                className="flex items-center space-x-2 text-[hsl(var(--luxury-navy))]/70 hover:text-[hsl(var(--luxury-navy))] transition-colors"
              >
                <ArrowLeft className="h-4 w-4" />
                <span className="font-['Montserrat'] text-sm">Back to Destinations</span>
              </Link>
            </div>
            <div className="flex items-center space-x-2">
              <button className="p-2 rounded-full bg-[hsl(var(--luxury-sand))]/50 hover:bg-[hsl(var(--luxury-sand))] transition-colors">
                <Heart className="h-5 w-5 text-[hsl(var(--luxury-navy))]" />
              </button>
              <button className="p-2 rounded-full bg-[hsl(var(--luxury-sand))]/50 hover:bg-[hsl(var(--luxury-sand))] transition-colors">
                <Share2 className="h-5 w-5 text-[hsl(var(--luxury-navy))]" />
              </button>
            </div>
          </div>

          {/* Main Gallery */}
          <div className="grid grid-cols-12 gap-4 mb-8">
            {/* Main Image */}
            <div className="col-span-12 lg:col-span-8">
              <div className="relative h-96 lg:h-[600px] rounded-2xl overflow-hidden">
                <Image
                  src={destination.gallery[selectedImage]}
                  alt={destination.name}
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Thumbnail Gallery */}
            <div className="col-span-12 lg:col-span-4">
              <div className="grid grid-cols-2 gap-4 h-full">
                {destination.gallery.slice(1, 5).map((image, index) => (
                  <button
                    key={index + 1}
                    onClick={() => setSelectedImage(index + 1)}
                    className={`relative rounded-xl overflow-hidden h-full min-h-[140px] lg:min-h-[145px] ${
                      selectedImage === index + 1 ? 'ring-2 ring-[hsl(var(--luxury-gold))]' : ''
                    }`}
                  >
                    <Image
                      src={image}
                      alt={`${destination.name} ${index + 2}`}
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-200"
                    />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Destination Details */}
      <section className="pb-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-8">
              {/* Title & Rating */}
              <div className="mb-8">
                <div className="flex items-center space-x-3 mb-4">
                  <MapPin className="h-5 w-5 text-[hsl(var(--luxury-gold))]" />
                  <span className="font-['Montserrat'] text-[hsl(var(--luxury-navy))]/70">
                    {destination.location}
                  </span>
                </div>
                <h1 className="font-['Playfair_Display'] text-4xl md:text-5xl font-bold text-[hsl(var(--luxury-navy))] mb-4">
                  {destination.name}
                </h1>
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-1">
                    <Star className="h-5 w-5 fill-[hsl(var(--luxury-gold))] text-[hsl(var(--luxury-gold))]" />
                    <span className="font-['Montserrat'] font-semibold text-[hsl(var(--luxury-navy))]">
                      {destination.rating}
                    </span>
                  </div>
                  <span className="font-['Montserrat'] text-sm text-[hsl(var(--luxury-navy))]/60">
                    ({destination.reviews} reviews)
                  </span>
                  <div className="flex items-center space-x-1">
                    <Clock className="h-4 w-4 text-[hsl(var(--luxury-navy))]/60" />
                    <span className="font-['Montserrat'] text-sm text-[hsl(var(--luxury-navy))]/60">
                      {destination.duration}
                    </span>
                  </div>
                </div>
              </div>

              {/* Description */}
              <div className="mb-8">
                <h2 className="font-['Playfair_Display'] text-2xl font-semibold text-[hsl(var(--luxury-navy))] mb-4">
                  About This Experience
                </h2>
                <p className="font-['Montserrat'] text-[hsl(var(--luxury-navy))]/80 leading-relaxed mb-4">
                  {destination.detailedDescription}
                </p>
                <p className="font-['Montserrat'] text-[hsl(var(--luxury-navy))]/80 leading-relaxed">
                  {destination.description}
                </p>
              </div>

              {/* Highlights */}
              <div className="mb-8">
                <h2 className="font-['Playfair_Display'] text-2xl font-semibold text-[hsl(var(--luxury-navy))] mb-6">
                  Experience Highlights
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {destination.highlights.map((highlight, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-[hsl(var(--luxury-gold))] mt-1 flex-shrink-0" />
                      <span className="font-['Montserrat'] text-[hsl(var(--luxury-navy))]/80">
                        {highlight}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Amenities */}
              <div className="mb-8">
                <h2 className="font-['Playfair_Display'] text-2xl font-semibold text-[hsl(var(--luxury-navy))] mb-6">
                  Amenities & Services
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {destination.amenities.map((amenity, index) => {
                    const IconComponent = amenity.icon
                    return (
                      <div key={index} className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-[hsl(var(--luxury-gold))]/10 rounded-full flex items-center justify-center flex-shrink-0">
                          <IconComponent className="h-6 w-6 text-[hsl(var(--luxury-gold))]" />
                        </div>
                        <div>
                          <h3 className="font-['Montserrat'] font-semibold text-[hsl(var(--luxury-navy))] mb-1">
                            {amenity.name}
                          </h3>
                          <p className="font-['Montserrat'] text-sm text-[hsl(var(--luxury-navy))]/70">
                            {amenity.description}
                          </p>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>

              {/* Itinerary */}
              <div className="mb-8">
                <h2 className="font-['Playfair_Display'] text-2xl font-semibold text-[hsl(var(--luxury-navy))] mb-6">
                  Sample Itinerary
                </h2>
                <div className="space-y-6">
                  {destination.schedule.map((day, index) => (
                    <div key={index} className="flex space-x-6">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-[hsl(var(--luxury-gold))]/10 rounded-full flex items-center justify-center">
                          <span className="font-['Montserrat'] font-semibold text-[hsl(var(--luxury-navy))] text-sm">
                            {index + 1}
                          </span>
                        </div>
                      </div>
                      <div>
                        <h3 className="font-['Playfair_Display'] text-lg font-semibold text-[hsl(var(--luxury-navy))] mb-1">
                          {day.day}: {day.title}
                        </h3>
                        <p className="font-['Montserrat'] text-[hsl(var(--luxury-navy))]/80">
                          {day.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Booking Sidebar */}
            <div className="lg:col-span-4">
              <div className="sticky top-32">
                <div className="bg-white rounded-2xl p-8 luxury-shadow border border-[hsl(var(--luxury-sand))]/50">
                  {/* Pricing */}
                  <div className="text-center mb-8">
                    <div className="font-['Playfair_Display'] text-4xl font-bold text-[hsl(var(--luxury-navy))] mb-2">
                      {destination.price}
                    </div>
                    <div className="font-['Montserrat'] text-[hsl(var(--luxury-navy))]/60">
                      per person
                    </div>
                  </div>

                  {/* Quick Details */}
                  <div className="grid grid-cols-2 gap-4 mb-8">
                    <div className="text-center p-4 bg-[hsl(var(--luxury-sand))]/20 rounded-xl">
                      <Calendar className="h-6 w-6 text-[hsl(var(--luxury-gold))] mx-auto mb-2" />
                      <div className="font-['Montserrat'] text-sm font-medium text-[hsl(var(--luxury-navy))]">
                        Duration
                      </div>
                      <div className="font-['Montserrat'] text-xs text-[hsl(var(--luxury-navy))]/70">
                        {destination.duration}
                      </div>
                    </div>
                    <div className="text-center p-4 bg-[hsl(var(--luxury-sand))]/20 rounded-xl">
                      <Users className="h-6 w-6 text-[hsl(var(--luxury-gold))] mx-auto mb-2" />
                      <div className="font-['Montserrat'] text-sm font-medium text-[hsl(var(--luxury-navy))]">
                        Group Size
                      </div>
                      <div className="font-['Montserrat'] text-xs text-[hsl(var(--luxury-navy))]/70">
                        2-8 people
                      </div>
                    </div>
                  </div>

                  {/* Booking Buttons */}
                  <div className="space-y-4">
                    <button
                      onClick={() => setShowBookingCalendar(!showBookingCalendar)}
                      className="w-full py-4 bg-[hsl(var(--luxury-gold))] text-[hsl(var(--luxury-navy))] font-['Montserrat'] font-semibold rounded-full hover:bg-[hsl(var(--luxury-gold))]/90 transition-all duration-200"
                    >
                      Book This Experience
                    </button>
                    <button className="w-full py-4 bg-transparent border-2 border-[hsl(var(--luxury-navy))] text-[hsl(var(--luxury-navy))] font-['Montserrat'] font-semibold rounded-full hover:bg-[hsl(var(--luxury-navy))] hover:text-white transition-all duration-200">
                      Contact Concierge
                    </button>
                  </div>

                  {/* What's Included */}
                  <div className="mt-8 pt-8 border-t border-[hsl(var(--luxury-sand))]/50">
                    <h3 className="font-['Playfair_Display'] text-lg font-semibold text-[hsl(var(--luxury-navy))] mb-4">
                      What's Included
                    </h3>
                    <div className="space-y-2">
                      {destination.pricing.includes.slice(0, 4).map((item, index) => (
                        <div key={index} className="flex items-start space-x-2">
                          <CheckCircle className="h-4 w-4 text-[hsl(var(--luxury-gold))] mt-1 flex-shrink-0" />
                          <span className="font-['Montserrat'] text-sm text-[hsl(var(--luxury-navy))]/80">
                            {item}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Trust Indicators */}
                <div className="bg-[hsl(var(--luxury-sand))]/20 rounded-2xl p-6 mt-6">
                  <div className="text-center">
                    <div className="font-['Montserrat'] text-sm font-semibold text-[hsl(var(--luxury-navy))] mb-2">
                      100% Satisfaction Guaranteed
                    </div>
                    <div className="font-['Montserrat'] text-xs text-[hsl(var(--luxury-navy))]/70">
                      Free cancellation up to 30 days before departure
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  )
}