import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import { useState } from "react";

interface FormEmbedProps {
  formUrl: string;
  title: string;
  description: string;
}

export default function FormEmbed({ formUrl, title, description }: FormEmbedProps) {
  const [embedFailed, setEmbedFailed] = useState(false);
  const embedUrl = formUrl.replace('forms.gle', 'docs.google.com/forms/d/e') + '/viewform?embedded=true';

  const handleOpenInNewTab = () => {
    window.open(formUrl, '_blank', 'noopener,noreferrer');
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
              src={embedUrl}
              className="w-full h-[600px] md:h-[800px] border border-border rounded-lg"
              frameBorder="0"
              marginHeight={0}
              marginWidth={0}
              onError={() => setEmbedFailed(true)}
              title={title}
              data-testid="iframe-registration-form"
            >
              Loading…
            </iframe>
            <div className="mt-4 text-center">
              <Button
                variant="outline"
                onClick={handleOpenInNewTab}
                data-testid="button-open-form-tab"
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                Open in New Tab
              </Button>
            </div>
          </div>
        ) : (
          <div className="text-center py-12 space-y-4">
            <p className="text-muted-foreground">
              The form cannot be embedded. Please click the button below to open it in a new tab.
            </p>
            <Button onClick={handleOpenInNewTab} size="lg" data-testid="button-open-form-fallback">
              <ExternalLink className="w-4 h-4 mr-2" />
              Open Registration Form
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
