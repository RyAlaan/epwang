import LastRaceResult from "@/components/layouts/LastRaceResultLayout";
import NextRoundLayout from "@/components/layouts/NextSessionLayout";

export default function Home() {
  return (
    <div className="mt-16">
      <NextRoundLayout />
      <LastRaceResult />
    </div>
  );
}
