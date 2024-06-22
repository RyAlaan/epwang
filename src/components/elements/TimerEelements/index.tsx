import clsx from "clsx";
import styles from "./Timer.module.css";

interface TimerElementsInterface {
  desc: "DAYS" | "HOURS" | "MIN" | "SEC";
  time: number;
}

const TimerElements = ({ desc, time }: TimerElementsInterface) => {
  return (
    <div className="flex flex-col gap-y-1.5">
      <div className="lg:w-16 lg:h-6 bg-white font-bold text-xs lg:text-sm text-black text-center">
        {desc}
      </div>
      <div
        className={clsx(
          "w-16 h-8 md:h-10 lg:h-14 relative bg-white font-bold text-primary text-center text-xl md:text-2xl lg:text-3xl",
          styles.timer
        )}
      >
        {time}
      </div>
    </div>
  );
};

export default TimerElements;
