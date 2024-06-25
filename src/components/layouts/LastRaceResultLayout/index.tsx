import { Titillium_Web } from "next/font/google";
import ChequeredElement from "@/components/elements/CheckqueredElement";
import LastRaceCircuit from "@/components/fragments/LastRaceResultFragment/LastRaceCircuit";
import LastRaceStandings from "@/components/fragments/LastRaceResultFragment/LastRaceStandings";
import { useEffect, useState } from "react";
import axios from "axios";
const titillium_Web = Titillium_Web({ subsets: ["latin"], weight: ["600"] });

const LastRaceResult = () => {
  const [raceResultData, setRaceResultData] = useState<any>();

  useEffect(() => {
    const getRaceResultData = async () => {
      try {
        const res = await axios.get(
          "http://ergast.com/api/f1/current/last/results.json"
        );

        if (res.status === 200) {
          setRaceResultData(res.data.MRData.RaceTable);
          console.log(res.data.MRData.RaceTable);
        }
      } catch (error: any) {
        console.error(error);
      }
    };

    getRaceResultData();
  }, []);

  return (
    <div className="relative w-full min-h-[447px] px-10 py-10 lg:py-20 flex flex-col">
      <ChequeredElement />
      <div className="container w-full flex flex-col md:flex-row md:justify-between items-center px-3 z-50">
        {raceResultData && (
          <LastRaceCircuit
            raceName={raceResultData.Races[0].raceName}
            country={raceResultData.Races[0].Circuit.Location.country}
            date={raceResultData.Races[0].date}
          />
        )}
        {raceResultData && (
          <LastRaceStandings
            driverStandings={raceResultData.Races[0].Results.slice(0, 3)}
          />
        )}
      </div>
    </div>
  );
};

export default LastRaceResult;
