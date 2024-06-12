import ChequeredElement from "@/components/elements/CheckqueredElement/ChequeredElement";
import NextRoundLayout from "@/components/layouts/NextRoundLayout/NextRoundLayout";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Titillium_Web } from "next/font/google";
const titillium_Web = Titillium_Web({ subsets: ["latin"], weight: ["600"] });
import Link from "next/link";

export default function Home() {
  return (
    <div className="mt-16">
      <NextRoundLayout />
      <div className="relative w-full px-10 py-10 lg:py-20 flex flex-col">
        <ChequeredElement />
        <div className="container w-full flex flex-col md:flex-row md:justify-between items-center px-3 z-50">
          <div className="md:max-w-96 flex flex-col gap-y-5">
            <h2 className="font-bold text-2xl text-center">
              FORMULA 1 GRAND PRIX DE MONACO 2024
            </h2>
            <div className="w-full flex flex-col items-center">
              <img
                className="max-w-72"
                src="https://media.formula1.com/image/upload/f_auto/q_auto/v1677244984/content/dam/fom-website/2018-redesign-assets/Circuit%20maps%2016x9/Monoco_Circuit.png.transform/7col/image.png"
                alt=""
              />
            </div>
            <h2 className="w-full text-center font-bold text-[#999999]">
              24 MAY - 26 MAY
            </h2>
          </div>
          <div className="max-w-52 flex flex-col items-center gap-y-10">
            <div className="flex flex-col">
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
            <Link
              href={"/"}
              className={`${titillium_Web.className} w-fit px-2 flex flex-row items-center gap-x-2 bg-primary rounded border-2 border-primary`}
            >
              <p>RACE RESULT</p>
              <FontAwesomeIcon icon={faAngleRight} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
