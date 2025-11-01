/**
 * VideoSection Component
 * 
 * YouTube video embed component with responsive container.
 * 
 * Features:
 * - Responsive aspect ratio (16:9) container
 * - YouTube iframe embed with full permissions
 * - Optional title and description
 * - Card styling with hover elevation
 * - Full-screen video capability
 * - Fully responsive on all devices
 * 
 * Used on tournament pages to embed tournament highlights,
 * gameplay guides, and promotional videos.
 */

import { Card } from "@/components/ui/card";
import { Play } from "lucide-react";

/**
 * Props interface for VideoSection component
 */
interface VideoSectionProps {
  title: string;                   // Video title/heading
  description?: string;            // Optional video description
  videoId: string;                 // YouTube video ID (from URL)
  thumbnail?: string;              // Optional custom thumbnail (currently unused)
}

/**
 * VideoSection Component
 * Displays an embedded YouTube video with title and description
 */
export default function VideoSection({ title, description, videoId, thumbnail }: VideoSectionProps) {
  return (
    <div className="space-y-4">
      {/* Video title and description */}
      <div className="text-center">
        <h3 className="text-2xl font-bold mb-2">{title}</h3>
        {description && <p className="text-muted-foreground">{description}</p>}
      </div>

      {/* Responsive video container with 16:9 aspect ratio */}
      <Card className="overflow-hidden hover-elevate transition-all duration-300">
        <div className="relative aspect-video">
          <iframe
            className="w-full h-full"
            src={`https://www.youtube.com/embed/${videoId}`}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            data-testid="iframe-youtube-video"
          ></iframe>
        </div>
      </Card>
    </div>
  );
}
