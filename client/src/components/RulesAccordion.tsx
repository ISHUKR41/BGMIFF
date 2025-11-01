/**
 * RulesAccordion Component
 * 
 * Accordion-style rules display component for tournament pages.
 * 
 * Features:
 * - Expandable/collapsible rule sections
 * - Three rule types with color-coded icons (info, success, warning)
 * - Support for multiple content items per rule section
 * - Clean list-based layout for easy reading
 * - Fully accessible with keyboard navigation
 * - Supports multiple sections open simultaneously
 * 
 * Used on tournament pages to display comprehensive rules
 * in an organized, scannable format that doesn't overwhelm users.
 */

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { AlertCircle, CheckCircle, XCircle } from "lucide-react";

/**
 * Rule section data structure
 */
interface Rule {
  title: string;                              // Section heading
  content: string[];                          // Array of rule items/points
  type?: "info" | "success" | "warning";     // Rule type for icon color
}

/**
 * Props interface for RulesAccordion component
 */
interface RulesAccordionProps {
  rules: Rule[];                              // Array of rule sections to display
}

/**
 * RulesAccordion Component
 * Displays tournament rules in an expandable accordion format
 */
export default function RulesAccordion({ rules }: RulesAccordionProps) {
  /**
   * Get the appropriate icon based on rule type
   * @param type - Rule type (info, success, warning)
   * @returns Icon component with appropriate color
   */
  const getIcon = (type?: string) => {
    switch (type) {
      case "success":
        return <CheckCircle className="w-5 h-5 text-green-500" />;  // Green for positive rules
      case "warning":
        return <XCircle className="w-5 h-5 text-destructive" />;    // Red for warnings/penalties
      default:
        return <AlertCircle className="w-5 h-5 text-primary" />;    // Blue for informational
    }
  };

  return (
    <Accordion type="multiple" className="space-y-4">
      {rules.map((rule, index) => (
        <AccordionItem
          key={index}
          value={`item-${index}`}
          className="border border-border rounded-lg px-6 bg-card"
        >
          <AccordionTrigger className="hover:no-underline">
            {/* Rule header with icon and title */}
            <div className="flex items-center gap-3">
              {getIcon(rule.type)}
              <span className="font-semibold">{rule.title}</span>
            </div>
          </AccordionTrigger>
          <AccordionContent>
            {/* Rule content items displayed as bulleted list */}
            <ul className="space-y-2 mt-4 ml-8">
              {rule.content.map((item, idx) => (
                <li key={idx} className="text-sm text-muted-foreground list-disc">
                  {item}
                </li>
              ))}
            </ul>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
