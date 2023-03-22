import { type FC } from "react";
import { Manrope } from "next/font/google";
import { Layout } from "./layout.interface";
import Head from "next/head";
const manrope = Manrope({ subsets: ["cyrillic"] });

const MainLayout: FC<Layout> = ({ children }) => {
  return (
    <>
      <Head>
        <title>Впути</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin={undefined}
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Manrope:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </Head>
      <main className={manrope.className}>{children}</main>
    </>
  );
};

export default MainLayout;
