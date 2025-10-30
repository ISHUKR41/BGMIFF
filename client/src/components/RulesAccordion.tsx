import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { AlertCircle, CheckCircle, XCircle } from "lucide-react";

interface Rule {
  title: string;
  content: string[];
  type?: "info" | "success" | "warning";
}

interface RulesAccordionProps {
  rules: Rule[];
}

export default function RulesAccordion({ rules }: RulesAccordionProps) {
  const getIcon = (type?: string) => {
    switch (type) {
      case "success":
        return <CheckCircle className="w-5 h-5 text-green-500" />;
      case "warning":
        return <XCircle className="w-5 h-5 text-destructive" />;
      default:
        return <AlertCircle className="w-5 h-5 text-primary" />;
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
            <div className="flex items-center gap-3">
              {getIcon(rule.type)}
              <span className="font-semibold">{rule.title}</span>
            </div>
          </AccordionTrigger>
          <AccordionContent>
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
