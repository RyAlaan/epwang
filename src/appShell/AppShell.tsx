// import clsx from "clsx";
// import { useRouter } from "next/router";

// type AppShellProps = {
//   children: React.ReactNode;
// };

// const enableNavbar = ["/", "/profile/[...username]", "/account/edit"];

// const AppShell = (props: AppShellProps) => {
//   const { children } = props;
//   const { pathname } = useRouter();

//   return (
//     <main>
//       {enableNavbar.includes(pathname) && (
//         <>
//           <NavbarLayout />
          
//         </>
//       )}
//       <div
//         className={clsx("flex flex-col", {
//           "pt-16 md:pt-0 pl-0 md:pl-20 lg:pl-64":
//             enableNavbar.includes(pathname),
//           "bg-black text-dark-text border-dark-border": isDarkMode,
//         })}
//       >
//         {children}
//       </div>
//     </main>
//   );
// };

// export default AppShell;
