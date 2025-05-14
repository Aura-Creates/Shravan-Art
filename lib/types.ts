export interface Artwork {
  id: string;
  title: string;
  slug: string;
  description: string;
  category: ArtworkCategory;
  technique: string;
  dimensions: string;
  year: number;
  imageUrl: string;
  price?: number; // Optional for non-shop items
  available?: boolean;
  featured?: boolean;
}

export type ArtworkCategory = 
  | "painting" 
  | "drawing" 
  | "mixed-media" 
  | "digital" 
  | "sculpture";

export interface FilterOptions {
  categories: ArtworkCategory[];
  years: number[];
  techniques: string[];
}