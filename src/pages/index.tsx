import { useIsNavbarOpen } from "@/context/NavbarContext";
import NavbarListSm from "@/layout/element/navbarListSm";
import {
  faAngleDown,
  faAngleRight,
  faBars,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import clsx from "clsx";

export default function Home() {
  const { isOpen, setIsOpen } = useIsNavbarOpen();

  return (
    <div className="absolute w-full bg-primary z-[9999]">
      <div className="container min-h-16 px-5 md:px-0 flex flex-row items-center justify-between bg-primary">
        <div className="w-16 md:w-auto">
          <img src="./Logo-light.png" alt="" className="dark:hidden" />
          <img src="./Logo-light.png" alt="" className="light:hidden" />
        </div>
        <div className="hidden md:flex flex-row">
          <div className="dropdown dropdown-hover hover:bg-secondary">
            <div
              role="button"
              className="px-4 py-5 flex flex-row items-center gap-2.5"
            >
              <p className="">Schedule</p>
              <FontAwesomeIcon icon={faAngleDown} />
            </div>
            <ul className="dropdown-content z-[1] menu p-2 shadow bg-secondary w-full">
              <li>
                <p>items</p>
              </li>
            </ul>
          </div>
          <div className="dropdown dropdown-hover hover:bg-secondary">
            <div
              role="button"
              className="px-4 py-5 flex flex-row items-center gap-2.5"
            >
              <p className="">Result</p>
              <FontAwesomeIcon icon={faAngleDown} />
            </div>
            <ul className="dropdown-content z-[1] menu p-2 shadow bg-secondary w-full">
              <li>
                <p>items</p>
              </li>
            </ul>
          </div>
          <div className="dropdown dropdown-hover hover:bg-secondary">
            <div
              role="button"
              className="px-4 py-5 flex flex-row items-center gap-2.5"
            >
              <p className="">Teams</p>
              <FontAwesomeIcon icon={faAngleDown} />
            </div>
            <ul className="dropdown-content z-[1] menu p-2 shadow bg-secondary w-full">
              <li>
                <p>items</p>
              </li>
            </ul>
          </div>
          <div className="dropdown dropdown-hover hover:bg-secondary">
            <div
              role="button"
              className="px-4 py-5 flex flex-row items-center gap-2.5"
            >
              <p className="">Drivers</p>
              <FontAwesomeIcon icon={faAngleDown} />
            </div>
            <ul className="dropdown-content z-[1] menu p-2 shadow bg-secondary w-full">
              <li>
                <p>items</p>
              </li>
            </ul>
          </div>
        </div>
        <div
          className="w-5 md:hidden flex items-center text-xl"
          onClick={setIsOpen}
        >
          {isOpen ? (
            <FontAwesomeIcon icon={faBars} className="" />
          ) : (
            <FontAwesomeIcon icon={faXmark} className="" />
          )}
        </div>
      </div>
      <div
        className={clsx(
          "absolute z-[-1] w-full px-3 py-6 gap-y-5 flex md:hidden flex-col bg-primary transition-all duration-500",
          isOpen && "-translate-y-80"
        )}
      >
        <NavbarListSm text={"Schedule"} link={"#"} />
        <NavbarListSm text={"Result"} link={"#"} />
        <NavbarListSm text={"Teams"} link={"#"} />
        <NavbarListSm text={"Drivers"} link={"#"} />
      </div>
    </div>
  );
}
