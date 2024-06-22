import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { Titillium_Web } from "next/font/google";
import ChequeredElement from "@/components/elements/CheckqueredElement";
import Button from "@/components/elements/Button";
import LastRaceCircuit from "@/components/fragments/LastRaceResultFragment/LastRaceCircuit";
import LastRaceStandings from "@/components/fragments/LastRaceResultFragment/LastRaceStandings";
const titillium_Web = Titillium_Web({ subsets: ["latin"], weight: ["600"] });

const LastRaceResult = () => {
  return (
    <div className="relative w-full px-10 py-10 lg:py-20 flex flex-col">
      <ChequeredElement />
      <div className="container w-full flex flex-col md:flex-row md:justify-between items-center px-3 z-50">
        <LastRaceCircuit />
        <LastRaceStandings />
      </div>
    </div>
  );
};

export default LastRaceResult;
