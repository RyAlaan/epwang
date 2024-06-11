import NavbarLayout from "@/components/layouts/NavbarLayout/NavbarLayout";
import clsx from "clsx";
import { useRouter } from "next/router";

type AppShellProps = {
  children: React.ReactNode;
};

const enableNavbar = ["/", "/profile/[...username]", "/account/edit"];

const AppShell = (props: AppShellProps) => {
  const { children } = props;
  const { pathname } = useRouter();

  return (
    <main>
      {enableNavbar.includes(pathname) && (
        <>
          <NavbarLayout />
        </>
      )}
      <div className="mt-16">{children}</div>
    </main>
  );
};

export default AppShell;
