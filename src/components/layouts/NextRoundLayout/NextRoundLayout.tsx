import NextRoundFragment from "@/components/fragments/NextRoundFragment/NextRoundFragment";
import TimerFragment from "@/components/fragments/TimerFragment/TimerFragment";

const NextRoundLayout = () => {
  return (
    <div className="bg-shade2">
      <div className="container py-5">
        <div className="px-3 md:px-0 flex flex-col md:flex-row items-center justify-between gap-x-4 lg:gap-x-8 gap-y-2">
          <NextRoundFragment />
          <TimerFragment />
        </div>
      </div>
    </div>
  );
};

export default NextRoundLayout;
