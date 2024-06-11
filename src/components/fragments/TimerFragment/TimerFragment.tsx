import TimerElements from "@/components/elements/TimerEelements/TimerElement";

const TimerFragment = () => {
  return (
    <div className="flex flex-row gap-x-1.5">
      <TimerElements desc="DAYS" time={15} />
      <TimerElements desc="HOURS" time={5} />
      <TimerElements desc="MIN" time={99} />
      <TimerElements desc="SEC" time={6} />
    </div>
  );
};

export default TimerFragment
