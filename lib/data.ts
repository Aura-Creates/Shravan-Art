import { Artwork, ArtworkCategory, FilterOptions } from "@/lib/types";

export const artworks: Artwork[] = [
  {
    id: "1",
    title: "Abstract Harmony",
    slug: "abstract-harmony",
    description: "A vibrant exploration of color and movement, capturing the essence of musical rhythm in visual form.",
    category: "painting",
    technique: "Acrylic on canvas",
    dimensions: "36 × 48 inches",
    year: 2023,
    imageUrl: "https://images.pexels.com/photos/1585325/pexels-photo-1585325.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    price: 1200,
    available: true,
    featured: true
  },
  {
    id: "2",
    title: "Serene Reflections",
    slug: "serene-reflections",
    description: "A contemplative piece inspired by the play of light on water surfaces at dawn.",
    category: "painting",
    technique: "Oil on canvas",
    dimensions: "24 × 30 inches",
    year: 2023,
    imageUrl: "https://images.pexels.com/photos/1266808/pexels-photo-1266808.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    price: 950,
    available: true,
    featured: true
  },
  {
    id: "3",
    title: "Urban Fragments",
    slug: "urban-fragments",
    description: "A mixed-media collage capturing the fragmented experience of urban living in the modern world.",
    category: "mixed-media",
    technique: "Collage and acrylic",
    dimensions: "20 × 24 inches",
    year: 2022,
    imageUrl: "https://images.pexels.com/photos/2693212/pexels-photo-2693212.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    price: 850,
    available: true
  },
  {
    id: "4",
    title: "Celestial Dreams",
    slug: "celestial-dreams",
    description: "An ethereal digital artwork exploring the vastness of space and our connection to the cosmos.",
    category: "digital",
    technique: "Digital painting",
    dimensions: "16:9 ratio, limited print edition",
    year: 2023,
    imageUrl: "https://images.pexels.com/photos/1193743/pexels-photo-1193743.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    price: 550,
    available: true
  },
  {
    id: "5",
    title: "Memory Lanes",
    slug: "memory-lanes",
    description: "A series of intertwined paths representing the way memories connect and diverge through time.",
    category: "drawing",
    technique: "Charcoal and pastel",
    dimensions: "18 × 24 inches",
    year: 2022,
    imageUrl: "https://images.pexels.com/photos/13882477/pexels-photo-13882477.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    price: 680,
    available: false
  },
  {
    id: "6",
    title: "Organic Forms",
    slug: "organic-forms",
    description: "A sculptural exploration of natural forms and textures, inviting touch and contemplation.",
    category: "sculpture",
    technique: "Bronze casting",
    dimensions: "12 × 8 × 8 inches",
    year: 2021,
    imageUrl: "https://images.pexels.com/photos/134402/pexels-photo-134402.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    price: 1800,
    available: true,
    featured: true
  },
  {
    id: "7",
    title: "Chromatic Meditation",
    slug: "chromatic-meditation",
    description: "A study in color relationships and emotional resonance through abstract forms.",
    category: "painting",
    technique: "Oil on linen",
    dimensions: "40 × 40 inches",
    year: 2023,
    imageUrl: "https://images.pexels.com/photos/1549200/pexels-photo-1549200.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    price: 1350,
    available: true
  },
  {
    id: "8",
    title: "Heritage Echo",
    slug: "heritage-echo",
    description: "A contemporary interpretation of traditional motifs, bridging past and present cultural narratives.",
    category: "mixed-media",
    technique: "Textile and acrylic",
    dimensions: "36 × 48 inches",
    year: 2022,
    imageUrl: "https://images.pexels.com/photos/1570264/pexels-photo-1570264.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    price: 1100,
    available: true,
    featured: true
  }
];

export const getFilterOptions = (): FilterOptions => {
  const categories = Array.from(new Set(artworks.map(artwork => artwork.category)));
  const years = Array.from(new Set(artworks.map(artwork => artwork.year))).sort((a, b) => b - a);
  const techniques = Array.from(new Set(artworks.map(artwork => artwork.technique)));
  
  return {
    categories: categories as ArtworkCategory[],
    years,
    techniques
  };
};

export const getFeaturedArtworks = (): Artwork[] => {
  return artworks.filter(artwork => artwork.featured);
};

export const getAvailableArtworks = (): Artwork[] => {
  return artworks.filter(artwork => artwork.available);
};

export const getArtworkBySlug = (slug: string): Artwork | undefined => {
  return artworks.find(artwork => artwork.slug === slug);
};

export const getRelatedArtworks = (artwork: Artwork, limit: number = 3): Artwork[] => {
  return artworks
    .filter(a => a.id !== artwork.id && (a.category === artwork.category || a.year === artwork.year))
    .slice(0, limit);
};

export const getAllArtworks = (): Artwork[] => artworks;