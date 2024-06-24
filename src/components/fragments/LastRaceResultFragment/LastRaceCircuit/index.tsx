import { useCalculatePreviousDate, useFormatDate } from "@/hooks/useSubtractDays";

interface LastRaceCircuitInterface {
  raceName: string;
  country: any;
  date: Date;
}

const LastRaceCircuit = ({
  raceName,
  country,
  date,
}: LastRaceCircuitInterface) => {
  const startDate = useCalculatePreviousDate(date, 3);

  const formatStartDate = useFormatDate(startDate)
  const formatEndDate = useFormatDate(date)

  return (
    <div className="md:max-w-96 flex flex-col gap-y-5">
      <h2 className="font-bold text-2xl text-center">{raceName}</h2>
      <div className="w-full flex flex-col items-center">
        <img
          className="max-w-72"
          src={`https://media.formula1.com/image/upload/f_auto/q_auto/v1677244984/content/dam/fom-website/2018-redesign-assets/Circuit%20maps%2016x9/${country}_circuit.png.transform/7col/image.png`}
          alt=""
        />
      </div>
      <h2 className="w-full text-center font-bold text-[#999999]">
        {formatStartDate} - {formatEndDate}
      </h2>
    </div>
  );
};

export default LastRaceCircuit;
