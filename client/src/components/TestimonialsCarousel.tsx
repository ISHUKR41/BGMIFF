/**
 * TestimonialsCarousel Component
 * 
 * Carousel component for displaying player testimonials (simpler version).
 * 
 * Features:
 * - Embla Carousel for smooth scrolling
 * - Manual navigation with previous/next buttons
 * - Responsive card layout (1-2-3 columns)
 * - Quote icon for visual emphasis
 * - Avatar with initials fallback
 * - Infinite loop navigation
 * 
 * Used on tournament pages for simple testimonial displays
 * without auto-play functionality.
 */

import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Quote } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect, useState } from "react";
import { Button } from "./ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

/**
 * Testimonial data structure
 */
interface Testimonial {
  name: string;                // Player name
  role: string;                // Player role/achievement
  content: string;             // Testimonial text
  initials: string;            // Avatar fallback initials
}

/**
 * Props interface for TestimonialsCarousel component
 */
interface TestimonialsCarouselProps {
  testimonials: Testimonial[]; // Array of testimonials to display
}

/**
 * TestimonialsCarousel Component
 * Displays testimonials in a navigable carousel
 */
export default function TestimonialsCarousel({ testimonials }: TestimonialsCarouselProps) {
  // Initialize Embla Carousel
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" });
  
  // Track navigation state
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  // Navigation functions
  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  /**
   * Update navigation state when selection changes
   */
  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
  }, [emblaApi, onSelect]);

  return (
    <div className="relative">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex gap-6">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_33.333%] min-w-0">
              <Card className="h-full">
                <CardContent className="p-6 space-y-4">
                  <Quote className="w-8 h-8 text-primary opacity-50" />
                  <p className="text-muted-foreground italic">{testimonial.content}</p>
                  <div className="flex items-center gap-3 pt-4 border-t border-border">
                    <Avatar>
                      <AvatarFallback className="bg-primary/10 text-primary font-semibold">
                        {testimonial.initials}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-semibold">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>

      <div className="flex items-center justify-center gap-4 mt-6">
        <Button
          variant="outline"
          size="icon"
          onClick={scrollPrev}
          disabled={!canScrollPrev}
          data-testid="button-carousel-prev"
        >
          <ChevronLeft className="w-4 h-4" />
        </Button>
        <Button
          variant="outline"
          size="icon"
          onClick={scrollNext}
          disabled={!canScrollNext}
          data-testid="button-carousel-next"
        >
          <ChevronRight className="w-4 h-4" />
        </Button>
      </div>
    </div>
  );
}
