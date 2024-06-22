import Button from "@/components/elements/Button";

const LastRaceStandings = () => {
  return (
    <div className="max-w-[40rem] flex flex-col items-center gap-y-10">
      <div className="w-full flex flex-row gap-x-5">
        <div className="flex flex-col order-1">
          <img
            className=""
            src="https://media.formula1.com/content/dam/fom-website/2018-redesign-assets/homepage/driver-standings-component/CHALEC01.png.transform/4col/image.png"
            alt=""
          />
          <div className="flex flex-col items-center gap-x-5">
            <h1 className="font-bold">Charles LECLERC</h1>
            <div className="timer flex flex-row text-sm">
              <p className="font-bold">1</p>
              <span className="font-regular">:</span>
              <p className="font-bold">23</p>
              <span className="font-regular">:</span>
              <p className="font-bold">123</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col">
          <img
            className=""
            src="https://media.formula1.com/content/dam/fom-website/2018-redesign-assets/homepage/driver-standings-component/CARSAI01.png.transform/4col/image.png"
            alt=""
          />
          <div className="flex flex-col items-center gap-x-5">
            <h1 className="font-bold">Charles LECLERC</h1>
            <div className="timer flex flex-row text-sm">
              <p className="font-bold">1</p>
              <span className="font-regular">:</span>
              <p className="font-bold">23</p>
              <span className="font-regular">:</span>
              <p className="font-bold">123</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col order-2">
          <img
            className=""
            src="https://media.formula1.com/content/dam/fom-website/2018-redesign-assets/homepage/driver-standings-component/LANNOR01.png.transform/4col/image.png"
            alt=""
          />
          <div className="flex flex-col items-center gap-x-5">
            <h1 className="font-bold">Charles LECLERC</h1>
            <div className="timer flex flex-row text-sm">
              <p className="font-bold">1</p>
              <span className="font-regular">:</span>
              <p className="font-bold">23</p>
              <span className="font-regular">:</span>
              <p className="font-bold">123</p>
            </div>
          </div>
        </div>
      </div>
      <Button link="/" text="Race Result" />
    </div>
  );
};

export default LastRaceStandings;
