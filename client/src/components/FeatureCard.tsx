/**
 * FeatureCard Component
 * 
 * Reusable card component for displaying platform features and benefits.
 * 
 * Features:
 * - Icon with styled background container
 * - Feature title with prominent typography
 * - Description text with muted styling for hierarchy
 * - Hover elevation effect for interactivity
 * - Fully responsive design for all screen sizes
 * 
 * Used on home page and tournament pages to showcase platform
 * features like "Instant Prize Distribution", "Fair Play", etc.
 */

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

/**
 * Props interface for FeatureCard component
 */
interface FeatureCardProps {
  icon: LucideIcon;        // Lucide icon component to display
  title: string;           // Feature title/heading
  description: string;     // Feature description text
}

/**
 * FeatureCard Component
 * Displays a feature or benefit with icon, title, and description
 */
export default function FeatureCard({ icon: Icon, title, description }: FeatureCardProps) {
  return (
    <Card className="hover-elevate transition-all duration-300 h-full flex flex-col">
      <CardHeader>
        {/* Icon container with primary color accent */}
        <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
          <Icon className="w-6 h-6 text-primary" />
        </div>
        {/* Feature title */}
        <CardTitle className="text-xl">{title}</CardTitle>
      </CardHeader>
      <CardContent className="flex-1">
        {/* Feature description with muted text for visual hierarchy */}
        <p className="text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  );
}
