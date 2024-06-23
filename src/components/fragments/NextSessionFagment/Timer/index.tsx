import TimerElements from "@/components/elements/TimerEelements";
import { useCountdown } from "@/hooks/useCountdown";

interface TimerFragmentInterface {
  dateTime: Date;
}

const TimerFragment = ({ dateTime }: TimerFragmentInterface) => {
  const [days, hours, minutes, seconds] = useCountdown(dateTime);

  return (
    <div className="w-full md:w-fit flex flex-row justify-between lg:justify-normal gap-x-1.5">
      <TimerElements desc="DAYS" time={days} />
      <TimerElements desc="HOURS" time={hours} />
      <TimerElements desc="MIN" time={minutes} />
      <TimerElements desc="SEC" time={seconds} />
    </div>
  );
};

export default TimerFragment;
