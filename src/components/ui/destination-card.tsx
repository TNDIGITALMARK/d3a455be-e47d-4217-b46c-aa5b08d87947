"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { MapPin, Star, Calendar, ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"

export interface Destination {
  id: string
  name: string
  location: string
  image: string
  description: string
  price: string
  duration: string
  rating: number
  reviews: number
  tags: string[]
  featured?: boolean
}

interface DestinationCardProps {
  destination: Destination
  className?: string
  variant?: "grid" | "featured" | "compact"
}

export function DestinationCard({
  destination,
  className,
  variant = "grid"
}: DestinationCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  const cardClasses = cn(
    "group relative overflow-hidden rounded-2xl bg-white transition-all duration-300",
    variant === "featured" && "col-span-2 row-span-2",
    variant === "compact" && "aspect-square",
    variant === "grid" && "aspect-[4/5]",
    "hover:shadow-luxury-shadow hover:-translate-y-1",
    className
  )

  return (
    <div
      className={cardClasses}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Container */}
      <div className="relative h-2/3 overflow-hidden">
        <Image
          src={destination.image}
          alt={destination.name}
          fill
          className={cn(
            "object-cover transition-transform duration-700",
            isHovered && "scale-110"
          )}
        />

        {/* Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

        {/* Featured Badge */}
        {destination.featured && (
          <div className="absolute top-4 left-4 bg-[hsl(var(--luxury-gold))] text-[hsl(var(--luxury-navy))] px-3 py-1 rounded-full font-['Montserrat'] text-xs font-semibold tracking-wide">
            FEATURED
          </div>
        )}

        {/* Rating */}
        <div className="absolute top-4 right-4 flex items-center space-x-1 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1">
          <Star className="h-4 w-4 fill-[hsl(var(--luxury-gold))] text-[hsl(var(--luxury-gold))]" />
          <span className="font-['Montserrat'] text-sm font-semibold text-[hsl(var(--luxury-navy))]">
            {destination.rating}
          </span>
        </div>

        {/* Location */}
        <div className="absolute bottom-4 left-4 flex items-center space-x-2 text-white">
          <MapPin className="h-4 w-4" />
          <span className="font-['Montserrat'] text-sm font-medium">
            {destination.location}
          </span>
        </div>

        {/* Hover Overlay */}
        <div className={cn(
          "absolute inset-0 bg-[hsl(var(--luxury-navy))]/80 opacity-0 transition-opacity duration-300 flex items-center justify-center",
          isHovered && "opacity-100"
        )}>
          <Link
            href={`/destinations/${destination.id}`}
            className="bg-[hsl(var(--luxury-gold))] text-[hsl(var(--luxury-navy))] px-6 py-3 rounded-full font-['Montserrat'] font-semibold text-sm hover:bg-[hsl(var(--luxury-gold))]/90 transition-colors duration-200 flex items-center space-x-2"
          >
            <span>EXPLORE</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>

      {/* Content */}
      <div className="h-1/3 p-6 flex flex-col justify-between">
        <div>
          <h3 className="font-['Playfair_Display'] text-xl font-bold text-[hsl(var(--luxury-navy))] mb-2 leading-tight">
            {destination.name}
          </h3>
          <p className="font-['Montserrat'] text-sm text-[hsl(var(--luxury-navy))]/70 leading-relaxed mb-3">
            {destination.description}
          </p>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-1 text-[hsl(var(--luxury-navy))]/60">
              <Calendar className="h-4 w-4" />
              <span className="font-['Montserrat'] text-xs">
                {destination.duration}
              </span>
            </div>
            <div className="font-['Montserrat'] text-xs text-[hsl(var(--luxury-navy))]/60">
              {destination.reviews} reviews
            </div>
          </div>
          <div className="text-right">
            <div className="font-['Playfair_Display'] text-lg font-bold text-[hsl(var(--luxury-navy))]">
              {destination.price}
            </div>
            <div className="font-['Montserrat'] text-xs text-[hsl(var(--luxury-navy))]/60">
              per person
            </div>
          </div>
        </div>

        {/* Tags */}
        {destination.tags && destination.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-3">
            {destination.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="bg-[hsl(var(--luxury-sand))] text-[hsl(var(--luxury-navy))] px-2 py-1 rounded-full font-['Montserrat'] text-xs font-medium"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

// Featured Destinations Grid Component
interface FeaturedDestinationsProps {
  destinations: Destination[]
  className?: string
}

export function FeaturedDestinations({ destinations, className }: FeaturedDestinationsProps) {
  return (
    <section className={cn("py-20 bg-[hsl(var(--luxury-sand))]/30", className)}>
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-['Playfair_Display'] text-4xl md:text-5xl font-bold text-[hsl(var(--luxury-navy))] mb-4">
            Featured Destinations
          </h2>
          <p className="font-['Montserrat'] text-lg text-[hsl(var(--luxury-navy))]/70 max-w-2xl mx-auto">
            Discover our handpicked collection of luxury destinations, each offering unique experiences and unparalleled comfort.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((destination) => (
            <DestinationCard
              key={destination.id}
              destination={destination}
              variant={destination.featured ? "featured" : "grid"}
            />
          ))}
        </div>
      </div>
    </section>
  )
}