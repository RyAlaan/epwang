import { NavbarProvider } from "@/context/NavbarContext";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import localFont from "next/font/local";

const formula = localFont({
  src: [
    {
      path: "./fonts/formula1/Formula1-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/formula1/Formula1-Bold.otf",
      weight: "700",
      style: "bold",
    },
    {
      path: "./fonts/formula1/Formula1-Wide.otf",
      weight: "900",
      style: "wide",
    },
  ],
  variable: "--font-formula1",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={`${formula.variable} font-formula`}>
      <NavbarProvider>
        <Component {...pageProps} />
      </NavbarProvider>
    </main>
  );
}
