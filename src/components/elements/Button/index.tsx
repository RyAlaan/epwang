import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { Titillium_Web } from "next/font/google";
const titillium_Web = Titillium_Web({ subsets: ["latin"], weight: ["600"] });

interface ButtonInterface {
  text: string;
  link: string;
}

const Button = ({ text, link }: ButtonInterface) => {
  return (
    <Link
      href={`${link}`}
      className={`w-fit px-2 flex flex-row items-center gap-x-2 bg-primary rounded border-2 border-primary`}
    >
      <p>{text}</p>
      <FontAwesomeIcon icon={faAngleRight} />
    </Link>
  );
};

export default Button;
