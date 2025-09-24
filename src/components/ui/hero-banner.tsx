"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight, Calendar, MapPin } from "lucide-react"
import { cn } from "@/lib/utils"

interface HeroSlide {
  id: string
  title: string
  subtitle: string
  description: string
  image: string
  location: string
  price: string
}

interface HeroBannerProps {
  className?: string
}

const heroSlides: HeroSlide[] = [
  {
    id: "maldives",
    title: "OHANA WORLD TRAVEL LUXE",
    subtitle: "Exclusive Luxury Destinations",
    description: "Experience unparalleled luxury with our curated collection of premium destinations worldwide. From overwater bungalows to alpine retreats.",
    image: "/generated/maldives-hero.jpg",
    location: "Maldives Overwater Villa",
    price: "From $2,500/night"
  },
  {
    id: "vineyard",
    title: "TUSCAN VINEYARD ESTATES",
    subtitle: "Wine Country Elegance",
    description: "Immerse yourself in the rolling hills of Tuscany with exclusive access to private vineyards and luxury accommodations.",
    image: "/generated/tuscany-vineyard.jpg",
    location: "Tuscany, Italy",
    price: "From $1,800/night"
  },
  {
    id: "safari",
    title: "AFRICAN SAFARI LUXURY",
    subtitle: "Wild Elegance",
    description: "Witness the majesty of African wildlife from the comfort of our exclusive safari lodges with world-class amenities.",
    image: "/generated/african-safari.jpg",
    location: "Serengeti, Tanzania",
    price: "From $3,200/night"
  }
]

export function HeroBanner({ className }: HeroBannerProps) {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
    setIsAutoPlaying(false)
    setTimeout(() => setIsAutoPlaying(true), 10000)
  }

  const goToPrevious = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length)
    setIsAutoPlaying(false)
    setTimeout(() => setIsAutoPlaying(true), 10000)
  }

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
    setIsAutoPlaying(false)
    setTimeout(() => setIsAutoPlaying(true), 10000)
  }

  const currentSlideData = heroSlides[currentSlide]

  return (
    <section className={cn("relative h-screen overflow-hidden", className)}>
      {/* Background Image with Parallax Effect */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-1000 ease-in-out parallax-bg"
        style={{
          backgroundImage: `linear-gradient(rgba(10, 35, 66, 0.3), rgba(10, 35, 66, 0.3)), url(${currentSlideData.image})`
        }}
      />

      {/* Navigation Controls */}
      <button
        onClick={goToPrevious}
        className="absolute left-6 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 text-white hover:bg-white/30 transition-all duration-200"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>

      <button
        onClick={goToNext}
        className="absolute right-6 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 text-white hover:bg-white/30 transition-all duration-200"
        aria-label="Next slide"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center justify-center">
        <div className="container mx-auto px-6 text-center text-white">
          <div className="max-w-4xl mx-auto">
            {/* Location Badge */}
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6 border border-white/20">
              <MapPin className="h-4 w-4" />
              <span className="font-['Montserrat'] text-sm font-medium">{currentSlideData.location}</span>
            </div>

            {/* Main Title */}
            <h1 className="font-['Playfair_Display'] text-5xl md:text-7xl font-bold mb-4 leading-tight">
              {currentSlideData.title}
            </h1>

            {/* Subtitle */}
            <h2 className="font-['Montserrat'] text-xl md:text-2xl font-light mb-6 tracking-wide opacity-90">
              {currentSlideData.subtitle}
            </h2>

            {/* Description */}
            <p className="font-['Montserrat'] text-lg md:text-xl leading-relaxed mb-8 opacity-80 max-w-2xl mx-auto">
              {currentSlideData.description}
            </p>

            {/* Price */}
            <div className="inline-flex items-center space-x-2 bg-[hsl(var(--luxury-gold))]/90 backdrop-blur-sm rounded-full px-6 py-3 mb-8">
              <span className="font-['Montserrat'] text-[hsl(var(--luxury-navy))] font-semibold">
                {currentSlideData.price}
              </span>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-[hsl(var(--luxury-gold))] text-[hsl(var(--luxury-navy))] font-['Montserrat'] font-semibold text-lg rounded-full hover:bg-[hsl(var(--luxury-gold))]/90 transition-all duration-200 flex items-center justify-center space-x-2 min-w-[200px]">
                <Calendar className="h-5 w-5" />
                <span>BOOK EXPERIENCE</span>
              </button>
              <button className="px-8 py-4 bg-transparent border-2 border-white text-white font-['Montserrat'] font-semibold text-lg rounded-full hover:bg-white hover:text-[hsl(var(--luxury-navy))] transition-all duration-200 min-w-[200px]">
                EXPLORE DESTINATIONS
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <div className="flex space-x-3">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={cn(
                "w-3 h-3 rounded-full transition-all duration-200",
                index === currentSlide
                  ? "bg-[hsl(var(--luxury-gold))] scale-125"
                  : "bg-white/50 hover:bg-white/70"
              )}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-1/2 right-8 z-10 hidden lg:block">
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 glass-effect">
          <div className="text-white text-center">
            <div className="font-['Playfair_Display'] text-2xl font-bold mb-2">
              {String(currentSlide + 1).padStart(2, "0")}
            </div>
            <div className="w-8 h-0.5 bg-[hsl(var(--luxury-gold))] mx-auto mb-2" />
            <div className="font-['Montserrat'] text-sm opacity-80">
              {String(heroSlides.length).padStart(2, "0")}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}