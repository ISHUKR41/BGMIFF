import { Card } from "@/components/ui/card";
import { Play } from "lucide-react";

interface VideoSectionProps {
  title: string;
  description?: string;
  videoId: string;
  thumbnail?: string;
}

export default function VideoSection({ title, description, videoId, thumbnail }: VideoSectionProps) {
  return (
    <div className="space-y-4">
      <div className="text-center">
        <h3 className="text-2xl font-bold mb-2">{title}</h3>
        {description && <p className="text-muted-foreground">{description}</p>}
      </div>

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
