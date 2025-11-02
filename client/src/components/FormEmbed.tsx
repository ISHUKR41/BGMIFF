/**
 * FormEmbed Component
 * 
 * Embedded Google Forms component for tournament registration.
 * 
 * Features:
 * - Embedded iframe for seamless registration
 * - Fallback button to open form directly
 * - Error handling with graceful fallback
 * - Responsive iframe heights for different devices
 * - Direct link button always available for users with embed issues
 * 
 * Used on tournament pages to allow users to register directly
 * without leaving the site, improving conversion rates.
 */

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import { useState } from "react";

/**
 * Props interface for FormEmbed component
 */
interface FormEmbedProps {
  formUrl: string;              // Direct link to the form
  embedUrl?: string;            // Optional embed-specific URL
  title: string;                // Form section title
  description: string;          // Form section description
}

/**
 * FormEmbed Component
 * Displays an embedded registration form with fallback options
 */
export default function FormEmbed({ formUrl, embedUrl, title, description }: FormEmbedProps) {
  // Track embed failures to show fallback UI
  const [embedFailed, setEmbedFailed] = useState(false);
  
  // Use embed URL if provided, otherwise use direct form URL
  const iframeUrl = embedUrl && embedUrl !== formUrl ? embedUrl : formUrl;
  
  /**
   * Navigate to the form in the same tab (not a new window/tab)
   * This keeps users on the website for better user experience
   */
  const handleOpenForm = () => {
    // Instead of navigating away, we'll just scroll to the iframe
    // or if iframe failed, we provide a link that opens in same tab
    const formElement = document.getElementById('registration-form-iframe');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
    } else {
      // If iframe truly failed, navigate in same tab (not new window)
      window.location.href = formUrl;
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        {!embedFailed ? (
          <div className="relative">
            <iframe
              id="registration-form-iframe"
              src={iframeUrl}
              className="w-full h-[600px] md:h-[800px] lg:h-[1000px] border border-border rounded-lg"
              frameBorder="0"
              marginHeight={0}
              marginWidth={0}
              onError={() => setEmbedFailed(true)}
              title={title}
              data-testid="iframe-registration-form"
              allow="payment"
            >
              Loading…
            </iframe>
            <div className="mt-4 text-center">
              <p className="text-sm text-muted-foreground mb-3">
                Having trouble with the form above? Use the button below to open it directly.
              </p>
              <Button
                variant="outline"
                onClick={handleOpenForm}
                data-testid="button-open-form-direct"
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                Open Registration Form
              </Button>
            </div>
          </div>
        ) : (
          <div className="text-center py-12 space-y-4">
            <p className="text-lg font-semibold mb-2">Ready to register?</p>
            <p className="text-muted-foreground mb-6">
              Click the button below to fill out the registration form. Your slot will be confirmed after payment verification.
            </p>
            <Button onClick={handleOpenForm} size="lg" data-testid="button-open-form-fallback">
              <ExternalLink className="w-4 h-4 mr-2" />
              Open Registration Form
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
