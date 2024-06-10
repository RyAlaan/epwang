import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

interface NavbarListSmInterface {
  link : string;
  text: string;
}

const NavbarListSm = ({link, text} : NavbarListSmInterface) => {
  return (
    <Link href={link} className="py-2 pr-8 flex flex-row items-center justify-between text-sm font-normal border-b-[1px] border-r-[1px] rounded-br-lg">
      <p>{text}</p>
      <FontAwesomeIcon icon={faAngleRight} />
    </Link>
  );
};

export default NavbarListSm;
