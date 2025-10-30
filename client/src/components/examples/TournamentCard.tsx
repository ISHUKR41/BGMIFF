import TournamentCard from '../TournamentCard';

export default function TournamentCardExample() {
  return (
    <div className="p-8 max-w-sm">
      <TournamentCard
        title="BGMI Solo"
        mode="Solo"
        entryFee={20}
        slots={100}
        winner={350}
        runnerUp={250}
        perKill={9}
        path="/solo"
      />
    </div>
  );
}
