import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

interface MediaItem {
  src: string;
  alt: string;
  caption?: string;
}

interface MediaLightboxProps {
  items: MediaItem[];
  columns?: {
    sm?: number;
    md?: number;
    lg?: number;
  };
  className?: string;
}

export default function MediaLightbox({
  items,
  columns = { sm: 1, md: 2, lg: 3 },
  className = "",
}: MediaLightboxProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => {
    setSelectedIndex(index);
  };

  const closeLightbox = () => {
    setSelectedIndex(null);
  };

  const goToPrevious = () => {
    if (selectedIndex !== null) {
      setSelectedIndex(selectedIndex === 0 ? items.length - 1 : selectedIndex - 1);
    }
  };

  const goToNext = () => {
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex + 1) % items.length);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") goToPrevious();
    if (e.key === "ArrowRight") goToNext();
    if (e.key === "Escape") closeLightbox();
  };

  const gridCols = `grid-cols-${columns.sm || 1} md:grid-cols-${columns.md || 2} lg:grid-cols-${columns.lg || 3}`;

  return (
    <>
      <div className={`grid ${gridCols} gap-6 ${className}`} data-testid="media-lightbox-grid">
        {items.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card
              className="overflow-hidden hover-elevate active-elevate-2 cursor-pointer group transition-all duration-300"
              onClick={() => openLightbox(index)}
              data-testid={`media-item-${index}`}
            >
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={item.src}
                  alt={item.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  {item.caption && (
                    <p className="text-sm font-medium text-foreground">{item.caption}</p>
                  )}
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-background/95 backdrop-blur-sm"
            onClick={closeLightbox}
            onKeyDown={handleKeyDown}
            tabIndex={0}
            data-testid="lightbox-overlay"
          >
            {/* Close Button */}
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-4 right-4 z-10"
              onClick={closeLightbox}
              data-testid="lightbox-close"
            >
              <X className="w-6 h-6" />
            </Button>

            {/* Navigation Buttons */}
            <Button
              variant="ghost"
              size="icon"
              className="absolute left-4 z-10"
              onClick={(e) => {
                e.stopPropagation();
                goToPrevious();
              }}
              data-testid="lightbox-prev"
            >
              <ChevronLeft className="w-8 h-8" />
            </Button>

            <Button
              variant="ghost"
              size="icon"
              className="absolute right-4 z-10"
              onClick={(e) => {
                e.stopPropagation();
                goToNext();
              }}
              data-testid="lightbox-next"
            >
              <ChevronRight className="w-8 h-8" />
            </Button>

            {/* Image */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="max-w-7xl max-h-[90vh] mx-4"
              onClick={(e) => e.stopPropagation()}
              data-testid="lightbox-image-container"
            >
              <img
                src={items[selectedIndex].src}
                alt={items[selectedIndex].alt}
                className="max-w-full max-h-[90vh] object-contain rounded-lg"
                data-testid="lightbox-image"
              />
              {items[selectedIndex].caption && (
                <p className="text-center mt-4 text-muted-foreground" data-testid="lightbox-caption">
                  {items[selectedIndex].caption}
                </p>
              )}
            </motion.div>

            {/* Image Counter */}
            <div
              className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-card px-4 py-2 rounded-full border"
              data-testid="lightbox-counter"
            >
              <p className="text-sm font-medium">
                {selectedIndex + 1} / {items.length}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
