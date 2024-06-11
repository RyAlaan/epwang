const NextRoundFragment = () => {
  return (
    <div className="w-full flex flex-col gap-y-6">
      <div className="pb-3 flex flex-row justify-between border-b-2">
        <div className="h-6 w-fit round text-end bg-[#388E3B] ">
          <p className="text-xs font-bold">Round 8</p>
        </div>
        <div className="flex flex-row gap-x-1">
          <h5 className="font-bold">FREE PRACTICE COUNTDOWN</h5>
          <p className="font-normal">:</p>
        </div>
      </div>
      <div className="flex flex-row items-center gap-x-4">
        <img src="Canada.png" alt="" className="rounded-lg" />
        <span className="flex flex-row gap-x-2 text-2xl font-bold">
          <p>Circuit Gilles-Villeneuve, </p>
          <p>Canada</p>
        </span>
      </div>
    </div>
  );
};

export default NextRoundFragment;