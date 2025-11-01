/**
 * PaymentInstructions Component
 * 
 * Step-by-step payment guide component for tournament registration.
 * 
 * Features:
 * - Clear 3-step payment process
 * - Visual step numbering with styled indicators
 * - Amount display with prominent formatting
 * - Important warning section for verification requirements
 * - Icons for each step (QR code, transaction ID, upload)
 * - Responsive layout for all devices
 * 
 * Used on tournament registration pages to guide users through
 * the payment and verification process, reducing errors and support queries.
 */

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { QrCode, Upload, Hash, AlertCircle } from "lucide-react";

/**
 * Props interface for PaymentInstructions component
 */
interface PaymentInstructionsProps {
  amount: number;                    // Payment amount in INR to display
}

/**
 * PaymentInstructions Component
 * Displays step-by-step payment verification instructions
 */
export default function PaymentInstructions({ amount }: PaymentInstructionsProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Payment Instructions</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Payment amount notice */}
        <div className="flex items-center gap-2 p-4 bg-primary/10 border border-primary/20 rounded-lg">
          <AlertCircle className="w-5 h-5 text-primary shrink-0" />
          <p className="text-sm">
            Payment of <span className="font-mono font-bold">₹{amount}</span> is required to confirm your registration
          </p>
        </div>

        {/* Step-by-step instructions */}
        <div className="space-y-4">
          {/* Step 1: Scan QR Code */}
          <div className="flex items-start gap-4">
            <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
              <span className="text-sm font-bold text-primary">1</span>
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-2">
                <QrCode className="w-5 h-5 text-muted-foreground" />
                <h4 className="font-semibold">Scan QR Code</h4>
              </div>
              <p className="text-sm text-muted-foreground">
                Use the official GameArena QR code available on our WhatsApp group or website to make the payment
              </p>
            </div>
          </div>

          {/* Step 2: Note Transaction ID */}
          <div className="flex items-start gap-4">
            <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
              <span className="text-sm font-bold text-primary">2</span>
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-2">
                <Hash className="w-5 h-5 text-muted-foreground" />
                <h4 className="font-semibold">Note Transaction ID</h4>
              </div>
              <p className="text-sm text-muted-foreground">
                After payment, carefully note down your Transaction ID from the payment confirmation
              </p>
            </div>
          </div>

          {/* Step 3: Upload Screenshot */}
          <div className="flex items-start gap-4">
            <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
              <span className="text-sm font-bold text-primary">3</span>
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-2">
                <Upload className="w-5 h-5 text-muted-foreground" />
                <h4 className="font-semibold">Upload Screenshot</h4>
              </div>
              <p className="text-sm text-muted-foreground">
                Take a clear screenshot of your payment confirmation and upload it in the registration form
              </p>
            </div>
          </div>
        </div>

        {/* Important verification warning */}
        <div className="border-t border-border pt-4">
          <div className="flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-destructive shrink-0 mt-0.5" />
            <div className="space-y-1">
              <p className="text-sm font-semibold">Important Note</p>
              <p className="text-sm text-muted-foreground">
                If payment verification fails, your slot will be automatically canceled. Ensure all payment details are accurate.
              </p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
