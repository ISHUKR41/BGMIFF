/**
 * NotFound (404) Page Component
 * 
 * Error page displayed when users navigate to non-existent routes.
 * 
 * Features:
 * - Centered card layout for error message
 * - Alert icon for visual indication
 * - Clear 404 error messaging
 * - Full-height viewport centering
 * - Fully responsive design for all devices
 * - Uses semantic color tokens for proper dark/light mode support
 * 
 * This page uses semantic colors to ensure proper display
 * in both dark and light themes.
 */

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { AlertCircle, Home } from "lucide-react";

/**
 * NotFound Component
 * Displays a user-friendly 404 error page
 */
export default function NotFound() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-background p-4">
      <Card className="w-full max-w-md">
        <CardContent className="pt-6 space-y-4">
          {/* Error header with icon */}
          <div className="flex items-center gap-3 mb-2">
            <AlertCircle className="h-8 w-8 shrink-0 text-destructive" />
            <h1 className="text-2xl md:text-3xl font-bold" data-testid="heading-404">
              404 Page Not Found
            </h1>
          </div>

          {/* Error description */}
          <p className="text-sm md:text-base text-muted-foreground" data-testid="text-error-message">
            The page you're looking for doesn't exist. It may have been moved or deleted.
          </p>

          {/* Action button to return home */}
          <Button 
            asChild 
            className="w-full sm:w-auto"
            data-testid="button-go-home"
          >
            <a href="/">
              <Home className="w-4 h-4 mr-2" />
              Go to Homepage
            </a>
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
