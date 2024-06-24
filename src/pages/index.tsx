import LastRaceResult from "@/components/layouts/LastRaceResultLayout";
import NewsLayout from "@/components/layouts/NewsLayout";
import NextRoundLayout from "@/components/layouts/NextSessionLayout";

export default function Home() {
  return (
    <div className="mt-16">
      <NextRoundLayout />
      <LastRaceResult />
      <NewsLayout />
      <div className="min-h-60"></div>
    </div>
  );
}
