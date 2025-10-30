import RulesAccordion from '../RulesAccordion';

export default function RulesAccordionExample() {
  const rules = [
    {
      title: "Registration Requirements",
      type: "info" as const,
      content: [
        "All details must be accurate and match your BGMI account",
        "Payment must be completed before slot confirmation",
        "Screenshot of payment is mandatory for verification",
      ],
    },
    {
      title: "Tournament Rules",
      type: "success" as const,
      content: [
        "No hacking, cheating, or use of third-party applications",
        "Respect all players and maintain sportsmanship",
        "Follow room credentials shared by admin",
      ],
    },
    {
      title: "Disqualification Policy",
      type: "warning" as const,
      content: [
        "Incorrect or incomplete details will lead to disqualification",
        "No refund if disqualified for rule violations",
        "Admin decision is final in case of disputes",
      ],
    },
  ];

  return (
    <div className="p-8 max-w-2xl">
      <RulesAccordion rules={rules} />
    </div>
  );
}
