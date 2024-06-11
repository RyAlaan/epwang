import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

interface NavbarListElementSmInterface {
  link : string;
  text: string;
}

const NavbarListElementSm = ({link, text} : NavbarListElementSmInterface) => {
  return (
    <Link href={link} className="py-2 pr-8 flex flex-row items-center justify-between text-sm font-normal border-b-[1px] border-r-[1px] rounded-br-lg">
      <p>{text}</p>
      <FontAwesomeIcon icon={faAngleRight} />
    </Link>
  );
};

export default NavbarListElementSm;
