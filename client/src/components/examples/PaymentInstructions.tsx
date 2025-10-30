import PaymentInstructions from '../PaymentInstructions';

export default function PaymentInstructionsExample() {
  return (
    <div className="p-8 max-w-2xl">
      <PaymentInstructions amount={20} />
    </div>
  );
}
