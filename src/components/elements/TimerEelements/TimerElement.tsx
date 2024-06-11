interface TimerElementsInterface {
  desc: "DAYS" | "HOURS" | "MIN" | "SEC";
  time: number;
}

const TimerElements = ({ desc, time }: TimerElementsInterface) => {
  return (
    <div className="flex flex-col gap-y-1.5">
      <div className="w-16 h-6 bg-white font-bold text-sm text-black text-center">
        {desc}
      </div>
      <div className="w-16 h-14 relative bg-white font-bold text-primary text-center text-3xl timer">
        {time}
      </div>
    </div>
  );
};

export default TimerElements
