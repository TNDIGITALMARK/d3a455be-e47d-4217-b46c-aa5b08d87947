import type { Destination } from "@/components/ui/destination-card"
import type { MembershipTier } from "@/components/ui/membership-card"

export const featuredDestinations: Destination[] = [
  {
    id: "maldives-overwater-villa",
    name: "Maldives Overwater Villa",
    location: "Maldives, Indian Ocean",
    image: "/generated/maldives-hero.jpg",
    description: "Experience ultimate luxury in an overwater bungalow with crystal-clear lagoon views and world-class amenities.",
    price: "$2,500",
    duration: "7-14 days",
    rating: 4.9,
    reviews: 245,
    tags: ["Overwater", "Spa", "Diving", "Romance"],
    featured: true
  },
  {
    id: "tuscany-vineyard",
    name: "Tuscan Vineyard Estate",
    location: "Tuscany, Italy",
    image: "/generated/tuscany-vineyard.jpg",
    description: "Immerse yourself in Italy's wine country with private tastings, cooking classes, and countryside elegance.",
    price: "$1,800",
    duration: "5-10 days",
    rating: 4.8,
    reviews: 189,
    tags: ["Wine", "Culinary", "Cultural", "Countryside"]
  },
  {
    id: "african-safari-lodge",
    name: "African Safari Lodge",
    location: "Serengeti, Tanzania",
    image: "/generated/african-safari.jpg",
    description: "Witness the Great Migration from luxury tented camps with expert guides and unparalleled wildlife viewing.",
    price: "$3,200",
    duration: "6-12 days",
    rating: 4.9,
    reviews: 312,
    tags: ["Safari", "Wildlife", "Luxury Tents", "Adventure"]
  },
  {
    id: "swiss-alpine-chalet",
    name: "Swiss Alpine Chalet",
    location: "Zermatt, Switzerland",
    image: "/generated/swiss-chalet.jpg",
    description: "Ski-in, ski-out luxury chalets with Matterhorn views, private chef service, and Alpine spa treatments.",
    price: "$2,100",
    duration: "4-8 days",
    rating: 4.7,
    reviews: 156,
    tags: ["Skiing", "Mountain", "Spa", "Luxury Chalet"]
  },
  {
    id: "japanese-ryokan",
    name: "Traditional Japanese Ryokan",
    location: "Kyoto, Japan",
    image: "/api/placeholder/600/800",
    description: "Authentic cultural immersion in a luxury ryokan with private onsen, kaiseki dining, and tea ceremony.",
    price: "$1,650",
    duration: "3-7 days",
    rating: 4.8,
    reviews: 203,
    tags: ["Cultural", "Traditional", "Onsen", "Zen"]
  },
  {
    id: "patagonia-eco-lodge",
    name: "Patagonia Eco Lodge",
    location: "Torres del Paine, Chile",
    image: "/api/placeholder/600/800",
    description: "Sustainable luxury in one of the world's last wild frontiers with guided trekking and glacier excursions.",
    price: "$2,800",
    duration: "5-9 days",
    rating: 4.9,
    reviews: 127,
    tags: ["Eco-Lodge", "Trekking", "Glaciers", "Sustainable"]
  }
]

export const membershipTiers: MembershipTier[] = [
  {
    id: "explorer",
    name: "Explorer",
    price: 5000,
    period: "per year",
    description: "Perfect for those beginning their luxury travel journey with exclusive access to premium destinations.",
    benefits: [
      "Access to 50+ curated luxury destinations",
      "10% discount on all bookings",
      "Priority booking during peak seasons",
      "Complimentary airport transfers",
      "24/7 travel concierge support",
      "Travel insurance coverage",
      "Welcome amenity at each destination"
    ],
    icon: "star",
    color: "gold"
  },
  {
    id: "connoisseur",
    name: "Connoisseur",
    price: 15000,
    period: "per year",
    description: "For discerning travelers who demand the finest experiences with enhanced personalization and exclusive perks.",
    benefits: [
      "Access to 100+ luxury destinations worldwide",
      "20% discount on all bookings",
      "Complimentary room upgrades (subject to availability)",
      "Personal travel curator and itinerary planning",
      "Private jet charter booking assistance",
      "Exclusive culinary experiences and wine tastings",
      "VIP treatment at partner properties",
      "Complimentary spa treatments (up to $500 per trip)"
    ],
    featured: true,
    icon: "crown",
    color: "platinum"
  },
  {
    id: "luminary",
    name: "Luminary",
    price: 30000,
    period: "per year",
    description: "The ultimate in luxury travel membership for those who accept nothing less than absolute perfection.",
    benefits: [
      "Unlimited access to all destinations and experiences",
      "30% discount on all bookings",
      "Guaranteed suite upgrades and best available rates",
      "Dedicated personal travel manager",
      "Private jet and yacht charter privileges",
      "Exclusive access to closed properties and experiences",
      "Custom itinerary design and private guide services",
      "Complimentary luxury transfers and helicopter tours",
      "Annual $5,000 credit for additional experiences",
      "Invitation to exclusive member events worldwide"
    ],
    icon: "gem",
    color: "diamond"
  }
]

export const testimonials = [
  {
    id: "sarah-m",
    name: "Sarah Mitchell",
    location: "New York, NY",
    membership: "Connoisseur",
    content: "Ohana World Travel Luxe has transformed how I experience the world. Every detail is perfectly curated, from the moment I leave my home until I return. The level of personalized service is unmatched.",
    rating: 5,
    avatar: "/api/placeholder/100/100"
  },
  {
    id: "james-w",
    name: "James Wellington",
    location: "London, UK",
    membership: "Luminary",
    content: "As a Luminary member, I have access to experiences that simply aren't available elsewhere. The private vineyard tours in Tuscany and exclusive safari camps in Kenya exceeded every expectation.",
    rating: 5,
    avatar: "/api/placeholder/100/100"
  },
  {
    id: "maria-r",
    name: "Maria Rodriguez",
    location: "Miami, FL",
    membership: "Explorer",
    content: "Even as an Explorer member, the attention to detail is extraordinary. The overwater villa in the Maldives was a dream come true, and the concierge service made everything seamless.",
    rating: 5,
    avatar: "/api/placeholder/100/100"
  }
]

export const companyStats = [
  {
    label: "Luxury Destinations",
    value: "150+",
    description: "Handpicked worldwide"
  },
  {
    label: "Happy Members",
    value: "2,500+",
    description: "Across 45 countries"
  },
  {
    label: "Years of Excellence",
    value: "15+",
    description: "Curating luxury travel"
  },
  {
    label: "Partner Properties",
    value: "500+",
    description: "Premium accommodations"
  }
]