import FeatureCard from '../FeatureCard';
import { Shield } from 'lucide-react';

export default function FeatureCardExample() {
  return (
    <div className="p-8 max-w-sm">
      <FeatureCard
        icon={Shield}
        title="Secure Payments"
        description="All payments are verified through screenshots and transaction IDs to ensure transparency and security."
      />
    </div>
  );
}
