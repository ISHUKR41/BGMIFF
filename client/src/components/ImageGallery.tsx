/**
 * ImageGallery Component
 * 
 * Simple image grid gallery component with hover effects.
 * 
 * Features:
 * - Responsive grid layout (1-2-3 columns)
 * - Staggered entrance animations with Framer Motion
 * - Image zoom on hover for visual interest
 * - Gradient overlay on hover for depth
 * - Card-based layout for consistency
 * - Aspect ratio maintained for all images
 * 
 * Used on tournament pages to display highlights, winners,
 * and tournament moments in a clean gallery format.
 */

import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";

/**
 * Props interface for ImageGallery component
 */
interface ImageGalleryProps {
  images: { src: string; alt: string }[];  // Array of images with URLs and alt text
}

/**
 * ImageGallery Component
 * Displays images in a responsive grid with hover animations
 */
export default function ImageGallery({ images }: ImageGalleryProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {images.map((image, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
        >
          <Card className="overflow-hidden hover-elevate transition-all duration-300 group">
            <div className="relative aspect-video overflow-hidden">
              {/* Image with zoom effect on hover */}
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              {/* Gradient overlay that appears on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          </Card>
        </motion.div>
      ))}
    </div>
  );
}
