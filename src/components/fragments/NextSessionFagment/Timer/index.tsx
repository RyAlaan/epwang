import TimerElements from "@/components/elements/TimerEelements";

const TimerFragment = () => {
  return (
    <div className="w-full md:w-fit flex flex-row justify-between lg:justify-normal gap-x-1.5">
      <TimerElements desc="DAYS" time={15} />
      <TimerElements desc="HOURS" time={5} />
      <TimerElements desc="MIN" time={99} />
      <TimerElements desc="SEC" time={6} />
    </div>
  );
};

export default TimerFragment
