import stayVilla from "@/assets/stay-villa.jpg";
import stayVilla2 from "@/assets/stay-villa2.jpg";
import stayApartment from "@/assets/stay-apartment.jpg";
import stayApartment2 from "@/assets/stay-apartment2.jpg";
import stayBnb from "@/assets/stay-bnb.jpg";
import stayBnb2 from "@/assets/stay-bnb2.jpg";
import stayHotel from "@/assets/stay-hotel.jpg";
import stayHotel2 from "@/assets/stay-hotel2.jpg";
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
  {
    slug: "coral-house-villa-diani",
    name: "Coral House Villa",
    location: "Diani",
    type: "Villa",
    bedrooms: 5,
    sleeps: 10,
    pricePerNight: 38000,
    image: stayVilla2,
    summary: "Five-bedroom villa with infinity pool, steps off Diani's white sand.",
    description:
      "A contemporary five bedroom villa behind Diani beach road with an infinity pool, outdoor dining banda and full staff. The beach gate opens straight onto the sand, and supermarkets and restaurants are minutes away.",
    amenities: ["Infinity pool", "Private chef", "Wi-Fi", "Air conditioning", "Beach gate", "Housekeeping", "Secure parking", "Generator backup"],
    roomTypes: [{ name: "Whole villa", sleeps: 10, price: 38000 }],
    checkIn: "From 14:00",
    checkOut: "By 10:00",
    houseRules: ["No smoking indoors", "Events by prior arrangement", "Refundable deposit applies"],
    managed: true,
  },
  {
    slug: "baobab-rest-villa-malindi",
    name: "Baobab Rest Villa",
    location: "Malindi",
    type: "Villa",
    bedrooms: 3,
    sleeps: 6,
    pricePerNight: 18500,
    image: stayVilla,
    summary: "Family villa under giant baobabs with a shaded pool and garden.",
    description:
      "A relaxed three bedroom family villa set among mature baobabs in Casuarina, Malindi. Shaded pool, barbecue corner and a live-in caretaker. Ten minutes to the marine park jetty.",
    amenities: ["Private pool", "Garden", "Wi-Fi", "Caretaker", "Barbecue", "Parking", "Fans & AC"],
    roomTypes: [{ name: "Whole villa", sleeps: 6, price: 18500 }],
    checkIn: "From 13:00",
    checkOut: "By 10:00",
    houseRules: ["Children welcome", "No loud music after 22:00"],
    managed: true,
  },
  {
    slug: "lagoon-edge-villa-kilifi",
    name: "Lagoon Edge Villa",
    location: "Kilifi",
    type: "Villa",
    bedrooms: 4,
    sleeps: 8,
    pricePerNight: 32000,
    image: stayVilla2,
    summary: "Creek-front villa with jetty, kayaks and sunset-facing terraces.",
    description:
      "A four bedroom villa on Kilifi creek with a private jetty, kayaks and wide sunset-facing terraces. Open-plan living, plunge pool and a cook available on request.",
    amenities: ["Creek frontage", "Private jetty", "Kayaks", "Plunge pool", "Wi-Fi", "Housekeeping", "Cook on request"],
    roomTypes: [
      { name: "Whole villa", sleeps: 8, price: 32000 },
      { name: "Two wings only", sleeps: 4, price: 19000 },
    ],
    checkIn: "From 14:00",
    checkOut: "By 10:00",
    houseRules: ["No smoking indoors", "Water activities at own risk", "Quiet hours after 22:00"],
    managed: true,
  },
  {
    slug: "seahorse-apartment-watamu",
    name: "Seahorse Apartment",
    location: "Watamu",
    type: "Apartment",
    bedrooms: 2,
    sleeps: 4,
    pricePerNight: 7800,
    image: stayApartment2,
    summary: "Sea-view two-bedroom above the village, five minutes to the beach.",
    description:
      "A bright two bedroom apartment with a sea-view balcony in a secure residence above Watamu village. Shared pool, backup power and an easy walk to restaurants, shops and the marine park beach.",
    amenities: ["Sea view", "Shared pool", "Wi-Fi", "Backup power", "Kitchen", "24h security", "Parking"],
    roomTypes: [{ name: "Two-bedroom apartment", sleeps: 4, price: 7800 }],
    checkIn: "From 13:00",
    checkOut: "By 10:00",
    houseRules: ["No parties", "ID required at check-in"],
    managed: true,
  },
  {
    slug: "kijani-studio-diani",
    name: "Kijani Studio",
    location: "Diani",
    type: "Apartment",
    bedrooms: 1,
    sleeps: 2,
    pricePerNight: 4200,
    image: stayApartment,
    summary: "Smart budget studio near Diani beach with pool access.",
    description:
      "A compact, well-equipped studio in a leafy compound near Diani beach. Pool access, fast Wi-Fi and weekly housekeeping make it a favourite for solo travellers and couples.",
    amenities: ["Pool access", "Fast Wi-Fi", "Kitchenette", "Weekly housekeeping", "Parking"],
    roomTypes: [{ name: "Studio", sleeps: 2, price: 4200 }],
    checkIn: "From 13:00",
    checkOut: "By 10:00",
    houseRules: ["Minimum 2 nights", "No smoking indoors"],
    managed: false,
  },
  {
    slug: "palm-court-apartments-vipingo",
    name: "Palm Court Apartments",
    location: "Vipingo",
    type: "Apartment",
    bedrooms: 3,
    sleeps: 6,
    pricePerNight: 12500,
    image: stayApartment2,
    summary: "Three-bedroom serviced apartment in a managed beachside residence.",
    description:
      "A spacious three bedroom serviced apartment in a managed Vipingo residence with gym, pool and 24-hour security. Daily housekeeping and airport transfers available on request.",
    amenities: ["Serviced daily", "Gym", "Shared pool", "Wi-Fi", "Air conditioning", "24h security", "Lift"],
    roomTypes: [
      { name: "Three-bedroom apartment", sleeps: 6, price: 12500 },
      { name: "Two-bedroom apartment", sleeps: 4, price: 9000 },
    ],
    checkIn: "From 14:00",
    checkOut: "By 11:00",
    houseRules: ["No parties", "Residents register guests at reception"],
    managed: true,
  },
  {
    slug: "creek-view-apartment-kilifi",
    name: "Creek View Apartment",
    location: "Kilifi",
    type: "Apartment",
    bedrooms: 1,
    sleeps: 3,
    pricePerNight: 5600,
    image: stayApartment,
    summary: "One-bedroom with a wide balcony over Kilifi creek.",
    description:
      "A comfortable one bedroom apartment with a sofa bed and a wide balcony looking across Kilifi creek. Walkable to the bridge, boatyard cafés and the sailing club.",
    amenities: ["Creek view", "Wi-Fi", "Kitchen", "Air conditioning", "Sofa bed", "Parking"],
    roomTypes: [{ name: "One-bedroom apartment", sleeps: 3, price: 5600 }],
    checkIn: "From 13:00",
    checkOut: "By 10:00",
    houseRules: ["No smoking indoors", "Pets not allowed"],
    managed: false,
  },
  {
    slug: "hibiscus-bnb-watamu",
    name: "Hibiscus B&B",
    location: "Watamu",
    type: "B&B",
    bedrooms: 5,
    sleeps: 10,
    pricePerNight: 6200,
    image: stayBnb2,
    summary: "Family-run B&B with tropical garden, pool and home cooking.",
    description:
      "A family-run guesthouse five minutes from Turtle Bay beach. Five en-suite rooms around a tropical garden, a small pool, and breakfasts of tropical fruit, mandazi and proper coffee.",
    amenities: ["Breakfast included", "Pool", "Garden", "Wi-Fi", "Fans & AC", "Dinner on request", "Tour desk"],
    roomTypes: [
      { name: "Garden double", sleeps: 2, price: 6200 },
      { name: "Triple room", sleeps: 3, price: 7800 },
    ],
    checkIn: "From 12:00",
    checkOut: "By 10:00",
    houseRules: ["No smoking in rooms", "Quiet hours after 22:00"],
    managed: false,
  },
  {
    slug: "old-town-guesthouse-malindi",
    name: "Old Town Guesthouse",
    location: "Malindi",
    type: "B&B",
    bedrooms: 8,
    sleeps: 16,
    pricePerNight: 3900,
    image: stayBnb,
    summary: "Simple, friendly budget rooms in the heart of old Malindi.",
    description:
      "A friendly budget guesthouse in Malindi's old town, two streets from the market and seafront. Simple clean rooms with fans, shared verandas and optional breakfast.",
    amenities: ["Breakfast available", "Wi-Fi", "Fans", "Shared verandas", "Laundry", "Central location"],
    roomTypes: [
      { name: "Standard double", sleeps: 2, price: 3900 },
      { name: "Twin room", sleeps: 2, price: 4200 },
    ],
    checkIn: "From 11:00",
    checkOut: "By 10:00",
    houseRules: ["Visitors to sign in", "No smoking in rooms"],
    managed: false,
  },
  {
    slug: "mango-house-bnb-kilifi",
    name: "Mango House B&B",
    location: "Kilifi",
    type: "B&B",
    bedrooms: 4,
    sleeps: 8,
    pricePerNight: 5100,
    image: stayBnb2,
    summary: "Quiet creek-side B&B under mango trees with kayaks for guests.",
    description:
      "A quiet four-room B&B in a mango orchard sloping down to Kilifi creek. Breakfast on the lawn, free kayaks for guests, and hammocks for the afternoon heat.",
    amenities: ["Breakfast included", "Free kayaks", "Garden", "Wi-Fi", "Hammocks", "Parking"],
    roomTypes: [
      { name: "Orchard double", sleeps: 2, price: 5100 },
      { name: "Family room", sleeps: 4, price: 7900 },
    ],
    checkIn: "From 12:00",
    checkOut: "By 10:00",
    houseRules: ["Children welcome", "No loud music"],
    managed: false,
  },
  {
    slug: "zanzibar-house-bnb-diani",
    name: "Zanzibar House B&B",
    location: "Diani",
    type: "B&B",
    bedrooms: 6,
    sleeps: 12,
    pricePerNight: 7400,
    image: stayBnb,
    summary: "Carved-door Swahili-style B&B two rows from Diani beach.",
    description:
      "A Swahili-style guesthouse with carved Zanzibar doors, two rows back from Diani beach. Six en-suite rooms, a courtyard plunge pool and a rooftop breakfast terrace.",
    amenities: ["Breakfast included", "Plunge pool", "Rooftop terrace", "Wi-Fi", "Fans & AC", "Airport transfer"],
    roomTypes: [
      { name: "Courtyard double", sleeps: 2, price: 7400 },
      { name: "Rooftop suite", sleeps: 2, price: 9800 },
    ],
    checkIn: "From 12:00",
    checkOut: "By 10:00",
    houseRules: ["No smoking in rooms", "Adults preferred"],
    managed: true,
  },
  {
    slug: "sunrise-beach-hotel-diani",
    name: "Sunrise Beach Hotel",
    location: "Diani",
    type: "Hotel",
    bedrooms: 30,
    sleeps: 60,
    pricePerNight: 16800,
    image: stayHotel2,
    summary: "Beachfront resort hotel with pools, spa and watersports centre.",
    description:
      "A beachfront resort hotel on Diani's main strip with two pools, a spa, kids' club and a watersports centre. Bed & breakfast, half board and full board plans available.",
    amenities: ["Beachfront", "Two pools", "Restaurant & bars", "Spa", "Kids club", "Watersports", "Wi-Fi", "Airport shuttle"],
    roomTypes: [
      { name: "Garden room", sleeps: 2, price: 16800 },
      { name: "Ocean-front suite", sleeps: 3, price: 29500 },
    ],
    checkIn: "From 14:00",
    checkOut: "By 11:00",
    houseRules: ["Children welcome", "All-inclusive upgrade on request"],
    managed: true,
  },
  {
    slug: "marina-view-hotel-kilifi",
    name: "Marina View Hotel",
    location: "Kilifi",
    type: "Hotel",
    bedrooms: 18,
    sleeps: 36,
    pricePerNight: 11200,
    image: stayHotel,
    summary: "Creek-side hotel by the bridge with a rooftop restaurant.",
    description:
      "An 18-room hotel beside Kilifi bridge with creek views, a rooftop restaurant and a small pool. Popular with sailors and road-trippers heading up or down the coast.",
    amenities: ["Creek view", "Rooftop restaurant", "Pool", "Wi-Fi", "Air conditioning", "Parking", "Room service"],
    roomTypes: [
      { name: "Standard double", sleeps: 2, price: 11200 },
      { name: "Creek-view deluxe", sleeps: 2, price: 14800 },
    ],
    checkIn: "From 13:00",
    checkOut: "By 11:00",
    houseRules: ["Children welcome", "Pets not allowed"],
    managed: false,
  },
  {
    slug: "casuarina-beach-hotel-malindi",
    name: "Casuarina Beach Hotel",
    location: "Malindi",
    type: "Hotel",
    bedrooms: 40,
    sleeps: 80,
    pricePerNight: 9800,
    image: stayHotel2,
    summary: "Classic beach hotel with big pool, gardens and conference room.",
    description:
      "A classic 40-room beach hotel on Casuarina road with a large pool, mature gardens, a conference room and direct beach access. Good value for groups and events.",
    amenities: ["Beach access", "Large pool", "Restaurant", "Conference room", "Gardens", "Wi-Fi", "Parking"],
    roomTypes: [
      { name: "Standard double", sleeps: 2, price: 9800 },
      { name: "Family room", sleeps: 4, price: 14200 },
    ],
    checkIn: "From 12:00",
    checkOut: "By 10:00",
    houseRules: ["Children welcome", "Events by prior arrangement"],
    managed: false,
  },
  {
    slug: "turtle-bay-lodge-watamu",
    name: "Turtle Bay Lodge",
    location: "Watamu",
    type: "Hotel",
    bedrooms: 12,
    sleeps: 24,
    pricePerNight: 18900,
    image: stayHotel,
    summary: "Small eco-lodge inside the marine park buffer zone.",
    description:
      "A 12-room eco-lodge on the edge of Watamu Marine Park, run on solar with a natural swimming pool. Snorkelling trips, dhow excursions and bird walks arranged in-house.",
    amenities: ["Solar powered", "Natural pool", "Restaurant", "Snorkel trips", "Bird walks", "Wi-Fi", "Half board available"],
    roomTypes: [
      { name: "Garden banda", sleeps: 2, price: 18900 },
      { name: "Family banda", sleeps: 4, price: 26500 },
    ],
    checkIn: "From 13:00",
    checkOut: "By 10:30",
    houseRules: ["Eco-lodge: limited night lighting", "No single-use plastics"],
    managed: true,
  },
  {
    slug: "flamingo-heights-apartment-malindi",
    name: "Flamingo Heights Apartment",
    location: "Malindi",
    type: "Apartment",
    bedrooms: 2,
    sleeps: 5,
    pricePerNight: 6900,
    image: stayApartment2,
    summary: "Top-floor two-bedroom with ocean glimpses and a rooftop pool.",
    description:
      "A top-floor two bedroom apartment with ocean glimpses, a rooftop pool and evening breezes. Sleeps five with a sofa bed, five minutes' drive from Malindi marine park.",
    amenities: ["Rooftop pool", "Ocean glimpse", "Wi-Fi", "Air conditioning", "Kitchen", "Lift", "Parking"],
    roomTypes: [{ name: "Two-bedroom apartment", sleeps: 5, price: 6900 }],
    checkIn: "From 13:00",
    checkOut: "By 10:00",
    houseRules: ["No parties", "ID required at check-in"],
    managed: false,
  },
  {
    slug: "serene-gardens-bnb-vipingo",
    name: "Serene Gardens B&B",
    location: "Vipingo",
    type: "B&B",
    bedrooms: 4,
    sleeps: 8,
    pricePerNight: 5800,
    image: stayBnb2,
    summary: "Garden B&B near Vipingo Ridge with golf and beach transfers.",
    description:
      "A peaceful four-room B&B in landscaped gardens near Vipingo Ridge. Breakfast on the terrace, and transfers arranged to the golf course and Kuruwitu beach.",
    amenities: ["Breakfast included", "Gardens", "Wi-Fi", "Golf transfers", "Beach transfers", "Parking"],
    roomTypes: [{ name: "Garden double", sleeps: 2, price: 5800 }],
    checkIn: "From 12:00",
    checkOut: "By 10:00",
    houseRules: ["No smoking in rooms", "Quiet hours after 21:00"],
    managed: false,
  },
  {
    slug: "golden-sands-villa-diani",
    name: "Golden Sands Villa",
    location: "Diani",
    type: "Villa",
    bedrooms: 4,
    sleeps: 8,
    pricePerNight: 26000,
    image: stayVilla,
    summary: "Beachfront family villa with pool on Diani's quiet south end.",
    description:
      "A four bedroom beachfront family villa on the quiet southern end of Diani. Private pool, direct sand access, a housekeeper-cook and kitesurfing schools a short walk along the beach.",
    amenities: ["Beachfront", "Private pool", "Housekeeper-cook", "Wi-Fi", "Air conditioning", "Kayaks", "Parking"],
    roomTypes: [{ name: "Whole villa", sleeps: 8, price: 26000 }],
    checkIn: "From 14:00",
    checkOut: "By 10:00",
    houseRules: ["Children welcome", "No smoking indoors"],
    managed: true,
  },
  {
    slug: "coconut-grove-apartment-watamu",
    name: "Coconut Grove Apartment",
    location: "Watamu",
    type: "Apartment",
    bedrooms: 3,
    sleeps: 6,
    pricePerNight: 8900,
    image: stayApartment,
    summary: "Three-bedroom in a coconut grove compound near Turtle Bay.",
    description:
      "A three bedroom ground-floor apartment in a coconut grove compound near Turtle Bay, with a shared pool and a shaded terrace. Popular with families who want space on a budget.",
    amenities: ["Shared pool", "Terrace", "Wi-Fi", "Kitchen", "Fans & AC", "Parking", "Family friendly"],
    roomTypes: [{ name: "Three-bedroom apartment", sleeps: 6, price: 8900 }],
    checkIn: "From 13:00",
    checkOut: "By 10:00",
    houseRules: ["No parties", "Minimum 2 nights"],
    managed: false,
  },
  {
    slug: "azure-suites-vipingo",
    name: "Azure Suites",
    location: "Vipingo",
    type: "Hotel",
    bedrooms: 16,
    sleeps: 32,
    pricePerNight: 13500,
    image: stayHotel2,
    summary: "Modern all-suite hotel with pool deck near Vipingo beach.",
    description:
      "A modern 16-suite hotel with a pool deck, gym and à la carte restaurant, minutes from Vipingo beach and the Ridge. Suites have kitchenettes, ideal for longer stays.",
    amenities: ["Pool deck", "Gym", "Restaurant", "Kitchenettes", "Wi-Fi", "Air conditioning", "Airport shuttle"],
    roomTypes: [
      { name: "Junior suite", sleeps: 2, price: 13500 },
      { name: "Two-bedroom suite", sleeps: 4, price: 19800 },
    ],
    checkIn: "From 14:00",
    checkOut: "By 11:00",
    houseRules: ["Children welcome", "Long-stay rates available"],
    managed: true,
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
