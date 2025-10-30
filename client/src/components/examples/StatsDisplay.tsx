import StatsDisplay, { Trophy, Users, Coins, Ticket } from '../StatsDisplay';

export default function StatsDisplayExample() {
  const stats = [
    { label: "Entry Fee", value: "₹20", icon: <Ticket className="w-6 h-6" /> },
    { label: "Total Slots", value: "100", icon: <Users className="w-6 h-6" /> },
    { label: "Winner Prize", value: "₹350", icon: <Trophy className="w-6 h-6" />, highlight: true },
    { label: "Per Kill", value: "₹9", icon: <Coins className="w-6 h-6" /> },
  ];

  return (
    <div className="p-8">
      <StatsDisplay stats={stats} />
    </div>
  );
}
