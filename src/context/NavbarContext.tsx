import { createContext, useContext, useState } from "react";

interface NavbarContextType {
  isOpen: boolean;
  setIsOpen: () => void;
}

const NavbarContext = createContext<NavbarContextType | undefined>(undefined);

export const useIsNavbarOpen = () => {
  const context = useContext(NavbarContext);

  if (!context) {
    console.log("context not found");
    throw new Error("useNavbar must be used within an NavbarProvider");
  }

  return context;
};

export const NavbarProvider = ({ children }: { children: React.ReactNode }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const setIsOpenHandler = () => {
    setIsOpen(!isOpen);
  };

  const NavbarContextValue = {
    isOpen,
    setIsOpen: setIsOpenHandler,
  };

  return (
    <NavbarContext.Provider value={NavbarContextValue}>
      {children}
    </NavbarContext.Provider>
  );
};