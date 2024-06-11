import NextRoundFragment from "@/components/fragments/NextRoundFragment/NextRoundFragment";
import TimerFragment from "@/components/fragments/TimerFragment/TimerFragment";

const NextRoundLayout = () => {
  return (
    <div className="bg-shade2">
      <div className="container py-5">
        <div className="flex flex-row justify-between gap-x-8">
          <NextRoundFragment />
          <TimerFragment />
        </div>
      </div>
    </div>
  );
};

export default NextRoundLayout;
