import stayVilla from "@/assets/stay-villa.jpg";
import stayApartment from "@/assets/stay-apartment.jpg";
import stayBnb from "@/assets/stay-bnb.jpg";
import stayHotel from "@/assets/stay-hotel.jpg";
import expDhow from "@/assets/exp-dhow.jpg";
import expSafari from "@/assets/exp-safari.jpg";
import expSnorkel from "@/assets/exp-snorkel.jpg";
import reVilla from "@/assets/re-villa.jpg";

export type Stay = {
  slug: string;
  name: string;
  location: string;
  type: "Villa" | "Apartment" | "B&B" | "Hotel";
  bedrooms: number;
  sleeps: number;
  pricePerNight: number;
  image: string;
  summary: string;
  description: string;
  amenities: string[];
  roomTypes: { name: string; sleeps: number; price: number }[];
  checkIn: string;
  checkOut: string;
  houseRules: string[];
  managed: boolean;
};

export const DESTINATIONS = ["Malindi", "Watamu", "Kilifi", "Vipingo", "Diani"] as const;

export const STAYS: Stay[] = [
  {
    slug: "palm-garden-villa-watamu",
    name: "Palm Garden Villa",
    location: "Watamu",
    type: "Villa",
    bedrooms: 4,
    sleeps: 8,
    pricePerNight: 28000,
    image: stayVilla,
    summary: "Private pool villa set in a palm garden, two minutes from Watamu beach.",
    description:
      "A makuti-roofed four bedroom villa wrapped around a private pool and mature palm garden. Open-plan living spaces flow onto shaded verandas, and the beach path is a short stroll away. Staffed with a housekeeper and optional private chef.",
    amenities: ["Private pool", "Wi-Fi", "Air conditioning", "Housekeeping", "Secure parking", "Breakfast available", "Garden", "Beach access"],
    roomTypes: [
      { name: "Whole villa", sleeps: 8, price: 28000 },
      { name: "Master suite only", sleeps: 2, price: 11000 },
    ],
    checkIn: "From 14:00",
    checkOut: "By 10:00",
    houseRules: ["No smoking indoors", "Quiet hours after 22:00", "Events by prior arrangement"],
    managed: true,
  },
  {
    slug: "ocean-breeze-apartment-kilifi",
    name: "Ocean Breeze Apartment",
    location: "Kilifi",
    type: "Apartment",
    bedrooms: 2,
    sleeps: 4,
    pricePerNight: 9500,
    image: stayApartment,
    summary: "Bright beachfront two-bedroom with a wide sea-view balcony.",
    description:
      "A contemporary two bedroom apartment on the Kilifi shoreline with a generous balcony facing the reef. Walkable to cafés and the creek, with a shared pool and 24-hour security in the residence.",
    amenities: ["Sea view", "Shared pool", "Wi-Fi", "Air conditioning", "Kitchen", "Parking", "24h security", "Lift"],
    roomTypes: [
      { name: "Two-bedroom apartment", sleeps: 4, price: 9500 },
      { name: "One-bedroom apartment", sleeps: 2, price: 6500 },
    ],
    checkIn: "From 13:00",
    checkOut: "By 10:00",
    houseRules: ["No parties", "Pets not allowed", "ID required at check-in"],
    managed: true,
  },
  {
    slug: "swahili-courtyard-bnb-malindi",
    name: "Swahili Courtyard B&B",
    location: "Malindi",
    type: "B&B",
    bedrooms: 6,
    sleeps: 12,
    pricePerNight: 5500,
    image: stayBnb,
    summary: "Coral-stone guesthouse with carved doors, gardens and daily breakfast.",
    description:
      "A restored Swahili guesthouse in old Malindi. Six en-suite rooms open onto a leafy courtyard, breakfast is served under the palms, and the old town, market and beach are all within walking distance.",
    amenities: ["Breakfast included", "Wi-Fi", "Garden courtyard", "Fans & AC", "Airport transfer", "Laundry", "Tour desk"],
    roomTypes: [
      { name: "Garden double", sleeps: 2, price: 5500 },
      { name: "Family room", sleeps: 4, price: 8500 },
    ],
    checkIn: "From 12:00",
    checkOut: "By 10:00",
    houseRules: ["No smoking in rooms", "Visitors to sign in at reception"],
    managed: false,
  },
  {
    slug: "reef-view-hotel-watamu",
    name: "Reef View Hotel",
    location: "Watamu",
    type: "Hotel",
    bedrooms: 24,
    sleeps: 48,
    pricePerNight: 14000,
    image: stayHotel,
    summary: "Boutique beachfront hotel with sea-facing rooms and half-board options.",
    description:
      "Twenty-four sea-facing rooms directly above Watamu's marine park beach. Half board and full board plans available, with a beach bar, dive desk and pool terrace on site.",
    amenities: ["Beachfront", "Restaurant", "Pool", "Wi-Fi", "Air conditioning", "Dive centre", "Room service", "Parking"],
    roomTypes: [
      { name: "Ocean-view double", sleeps: 2, price: 14000 },
      { name: "Family suite", sleeps: 4, price: 22000 },
    ],
    checkIn: "From 14:00",
    checkOut: "By 11:00",
    houseRules: ["Children welcome", "Half board available on request"],
    managed: true,
  },
  {
    slug: "vipingo-ridge-villa",
    name: "Vipingo Ridge Retreat",
    location: "Vipingo",
    type: "Villa",
    bedrooms: 3,
    sleeps: 6,
    pricePerNight: 21000,
    image: stayVilla,
    summary: "Golf-estate villa with pool, staff and gated estate access.",
    description:
      "A three bedroom villa inside a secure golf estate, with pool, full staff and access to estate facilities including the beach club and championship course.",
    amenities: ["Private pool", "Gated estate", "Wi-Fi", "Housekeeping", "Golf access", "Beach club", "Parking"],
    roomTypes: [{ name: "Whole villa", sleeps: 6, price: 21000 }],
    checkIn: "From 14:00",
    checkOut: "By 10:00",
    houseRules: ["Estate access registration required", "No smoking indoors"],
    managed: true,
  },
  {
    slug: "creekside-apartment-malindi",
    name: "Creekside Apartment",
    location: "Malindi",
    type: "Apartment",
    bedrooms: 1,
    sleeps: 2,
    pricePerNight: 4800,
    image: stayApartment,
    summary: "Compact, quiet one-bedroom ideal for long stays and remote work.",
    description:
      "A tidy one bedroom apartment with fast fibre internet and a work desk, in a quiet residential block minutes from Malindi town. Weekly and monthly rates available.",
    amenities: ["Fast Wi-Fi", "Work desk", "Kitchen", "Air conditioning", "Parking", "Long-stay rates"],
    roomTypes: [{ name: "One-bedroom apartment", sleeps: 2, price: 4800 }],
    checkIn: "From 13:00",
    checkOut: "By 10:00",
    houseRules: ["Minimum 2 nights", "No parties"],
    managed: false,
  },
];

export type Listing = {
  slug: string;
  title: string;
  location: string;
  price: number;
  bedrooms: number;
  bathrooms: number;
  plotSize: string;
  image: string;
  summary: string;
  description: string;
  features: string[];
};

export const LISTINGS: Listing[] = [
  {
    slug: "beachfront-villa-kikambala",
    title: "Beachfront Villa",
    location: "Kikambala, Kilifi",
    price: 78000000,
    bedrooms: 5,
    bathrooms: 5,
    plotSize: "0.8 acres",
    image: reVilla,
    summary: "Five-bedroom beachfront home with infinity pool and direct sand access.",
    description:
      "A contemporary beachfront residence on 0.8 acres with an infinity pool facing the Indian Ocean. Freehold title, staff quarters, borehole and solar backup. Viewings arranged with our sales team.",
    features: ["Freehold title", "Infinity pool", "Direct beach access", "Staff quarters", "Borehole", "Solar backup"],
  },
  {
    slug: "garden-townhouse-malindi",
    title: "Garden Townhouse",
    location: "Malindi",
    price: 21500000,
    bedrooms: 3,
    bathrooms: 3,
    plotSize: "1/8 acre",
    image: stayVilla,
    summary: "Three-bedroom townhouse in a gated court with shared pool.",
    description:
      "A well-kept three bedroom townhouse in a small gated court of six units, with shared pool, mature garden and secure parking. Ideal as a holiday home or rental investment.",
    features: ["Gated court", "Shared pool", "Secure parking", "Mature garden", "Rental-ready"],
  },
  {
    slug: "ocean-view-apartment-vipingo",
    title: "Ocean View Apartment",
    location: "Vipingo",
    price: 13900000,
    bedrooms: 2,
    bathrooms: 2,
    plotSize: "142 sqm",
    image: stayApartment,
    summary: "Two-bedroom apartment with sea views in a managed residence.",
    description:
      "A two bedroom apartment in a managed beachside residence with pool, gym and 24-hour security. Sea views from the living room and main bedroom. Strong short-let performance.",
    features: ["Sea view", "Managed residence", "Gym", "24h security", "Lift"],
  },
];

export type Experience = {
  slug: string;
  name: string;
  location: string;
  duration: string;
  price: number;
  image: string;
  summary: string;
  description: string;
  includes: string[];
};

export const EXPERIENCES: Experience[] = [
  {
    slug: "sunset-dhow-cruise",
    name: "Sunset Dhow Cruise",
    location: "Watamu",
    duration: "3 hours",
    price: 4500,
    image: expDhow,
    summary: "Sail Mida Creek at golden hour on a traditional dhow.",
    description:
      "A relaxed three-hour sail through Mida Creek's mangroves as the sun drops, with snacks, soft drinks and a local guide who knows the birdlife.",
    includes: ["Traditional dhow", "Guide", "Snacks & soft drinks", "Life jackets"],
  },
  {
    slug: "tsavo-east-safari",
    name: "Tsavo East Day Safari",
    location: "Tsavo East",
    duration: "Full day",
    price: 16500,
    image: expSafari,
    summary: "Red elephants, open plains and a full day in the park.",
    description:
      "Early departure from the coast to Tsavo East for a full day game drive with a licensed guide, park fees and lunch included. Returns to your accommodation in the evening.",
    includes: ["4x4 with pop-top roof", "Licensed guide", "Park fees", "Lunch", "Hotel pickup"],
  },
  {
    slug: "marine-park-snorkelling",
    name: "Marine Park Snorkelling",
    location: "Watamu Marine Park",
    duration: "Half day",
    price: 5200,
    image: expSnorkel,
    summary: "Coral gardens, reef fish and warm, clear water.",
    description:
      "A half-day boat trip into Watamu Marine National Park with snorkelling over the coral gardens, plus a stop at the sandbank when tides allow.",
    includes: ["Boat trip", "Snorkel gear", "Marine park fees", "Guide"],
  },
];
