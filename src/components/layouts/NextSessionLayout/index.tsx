import NextRoundFragment from "@/components/fragments/NextSessionFagment/NextSession";
import TimerFragment from "@/components/fragments/NextSessionFagment/Timer";
import axios from "axios";
import { useEffect, useState } from "react";

const NextRoundLayout = () => {
  const [nextRoundData, setNextRoundData] = useState<any>(null);

  useEffect(() => {
    const getNextRoundData = async () => {
      try {
        const res = await axios.get("http://ergast.com/api/f1/2024.json");
        if (res.status === 200) {
          const raceTable: any = res.data.MRData.RaceTable.Races;
          console.log(raceTable);

          const now = new Date();

          let sessions: any[] = [];

          raceTable.forEach((race: any) => {
            if (race.FirstPractice) {
              sessions.push({
                round: race.round,
                sessionName: "Free Practice 1",
                country: race.Circuit.Location.country,
                raceName: race.raceName,
                circuitName: race.Circuit.circuitName,
                dateTime: new Date(
                  `${race.FirstPractice.date}T${race.FirstPractice.time}`
                ),
              });
            }

            if (race.SecondPractice) {
              sessions.push({
                round: race.round,
                sessionName: "Free Practice 2",
                country: race.Circuit.Location.country,
                raceName: race.raceName,
                circuitName: race.Circuit.circuitName,
                dateTime: new Date(
                  `${race.SecondPractice.date}T${race.SecondPractice.time}`
                ),
              });
            }

            if (race.ThirdPractice) {
              sessions.push({
                round: race.round,
                sessionName: "Free Practice 3",
                country: race.Circuit.Location.country,
                raceName: race.raceName,
                circuitName: race.Circuit.circuitName,
                dateTime: new Date(
                  `${race.ThirdPractice.date}T${race.ThirdPractice.time}`
                ),
              });
            }

            if (race.Qualifying) {
              sessions.push({
                round: race.round,
                sessionName: "Qualifying",
                country: race.Circuit.Location.country,
                raceName: race.raceName,
                circuitName: race.Circuit.circuitName,
                dateTime: new Date(
                  `${race.Qualifying.date}T${race.Qualifying.time}`
                ),
              });
            }

            if (race.Sprint) {
              sessions.push({
                round: race.round,
                sessionName: "Sprint",
                country: race.Circuit.Location.country,
                raceName: race.raceName,
                circuitName: race.Circuit.circuitName,
                dateTime: new Date(`${race.Sprint.date}T${race.Sprint.time}`),
              });
            }

            sessions.push({
              round: race.round,
              sessionName: "Race",
              country: race.Circuit.Location.country,
              raceName: race.raceName,
              circuitName: race.Circuit.circuitName,
              dateTime: new Date(`${race.date}T${race.time}`),
            });
          });

          sessions.sort((a, b) => a.dateTime - b.dateTime);
          const nextSession = sessions.find(
            (session) => session.dateTime > now
          );

          console.log(nextSession);
          setNextRoundData(nextSession)
        }
      } catch (error: any) {
        console.log(error.res.status);
        console.log(error.res.statusText);

        return null;
      }
    };

    getNextRoundData();
  }, []);

  return (
    <div className="bg-shade2 lg:min-h-[151px]">
      <div className="container py-5">
        <div className="px-3 md:px-0 flex flex-col md:flex-row items-center justify-between gap-x-4 lg:gap-x-8 gap-y-2">
          {nextRoundData && (
            <NextRoundFragment
              round={nextRoundData.round}
              sessionName={nextRoundData.sessionName}
              country={nextRoundData.country}
              circuitName={nextRoundData.circuitName}
            />
          )}
          {nextRoundData && <TimerFragment dateTime={nextRoundData.dateTime} />}
        </div>
      </div>
    </div>
  );
};

export default NextRoundLayout;
