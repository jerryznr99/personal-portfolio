import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Montserrat } from "@next/font/google";
import Head from "next/head";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["400", "500", "700"],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Jerry Zhang</title>
      </Head>
      <div className={montserrat.className}>
        <Component {...pageProps} />
      </div>
    </>
  );
}
