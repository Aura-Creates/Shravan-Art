"use client";

import { useState, useEffect } from "react";
import { Artwork, ArtworkCategory } from "@/lib/types";
import { ArtworkCard } from "@/components/artwork-card";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { getFilterOptions } from "@/lib/data";

interface ArtworkGridProps {
  artworks: Artwork[];
  isShop?: boolean;
}

export function ArtworkGrid({ artworks, isShop = false }: ArtworkGridProps) {
  const [filteredArtworks, setFilteredArtworks] = useState<Artwork[]>(artworks);
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [selectedYear, setSelectedYear] = useState<string>("");
  const { categories, years } = getFilterOptions();

  useEffect(() => {
    let result = [...artworks];
    
    if (selectedCategory) {
      result = result.filter(artwork => artwork.category === selectedCategory);
    }
    
    if (selectedYear) {
      result = result.filter(artwork => artwork.year === parseInt(selectedYear));
    }
    
    setFilteredArtworks(result);
  }, [artworks, selectedCategory, selectedYear]);

  const resetFilters = () => {
    setSelectedCategory("");
    setSelectedYear("");
  };

  const hasActiveFilters = selectedCategory || selectedYear;

  return (
    <div className="space-y-8">
      <div className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4 items-start sm:items-center justify-between">
        <div className="text-sm text-muted-foreground">
          Showing {filteredArtworks.length} {filteredArtworks.length === 1 ? "artwork" : "artworks"}
        </div>
        
        <div className="flex flex-wrap gap-4">
          <Select value={selectedCategory} onValueChange={setSelectedCategory}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Category" />
            </SelectTrigger>
            <SelectContent>
              {categories.map((category) => (
                <SelectItem key={category} value={category}>
                  {category.charAt(0).toUpperCase() + category.slice(1).replace("-", " ")}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          
          <Select value={selectedYear} onValueChange={setSelectedYear}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Year" />
            </SelectTrigger>
            <SelectContent>
              {years.map((year) => (
                <SelectItem key={year} value={year.toString()}>
                  {year}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          
          {hasActiveFilters && (
            <Button variant="ghost" onClick={resetFilters} className="h-10">
              Reset
            </Button>
          )}
        </div>
      </div>
      
      {filteredArtworks.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-muted-foreground">No artworks found with the selected filters.</p>
          <Button variant="link" onClick={resetFilters} className="mt-2">
            Reset filters
          </Button>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {filteredArtworks.map((artwork) => (
            <ArtworkCard 
              key={artwork.id} 
              artwork={artwork} 
              isShop={isShop} 
            />
          ))}
        </div>
      )}
    </div>
  );
}