interface NextRoundInterface {
  round: string;
  sessionName: string;
  circuitName: string;
  country: string;
}

const NextRoundFragment = ({
  round,
  sessionName,
  circuitName,
  country,
}: NextRoundInterface) => {
  console.log(country);
  
  return (
    <div className="w-full flex flex-col gap-y-6">
      <div className="pb-3 flex flex-row justify-between border-b-2">
        <div className="h-6 w-fit round text-end bg-[#388E3B] ">
          <p className="text-xs font-bold">Round {round}</p>
        </div>
        <div className="px- flex flex-row gap-x-1 items-center">
          <h5 className="text-xs md:text-base uppercase font-bold">
            {sessionName} COUNTDOWN
          </h5>
          <p className="text-xs md:text-base font-normal">:</p>
        </div>
      </div>
      <div className="flex flex-row items-center gap-x-2 lg:gap-x-4">
        <img
          src={`https://media.formula1.com/content/dam/fom-website/flags/${country}.jpg`}
          alt=""
          className="w-8 md:w-16 rounded-sm lg:rounded-lg"
        />
        <span className="flex flex-row gap-x-2 text-2xl font-bold">
          <p className="text-xs md:text-base">{circuitName}, </p>
          <p className="text-xs md:text-base">{country}</p>
        </span>
      </div>
    </div>
  );
};

export default NextRoundFragment;
