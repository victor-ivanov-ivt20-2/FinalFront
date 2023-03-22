import { type FC } from "react";
import { Manrope } from "next/font/google";
import { Layout } from "./layout.interface";
import Head from "next/head";
import Auth from "@/components/screens/auth";
import Header from "@/components/ui kit/header";
import Footer from "@/components/ui kit/footer";
import { useAppSelector } from "@/hooks";
const manrope = Manrope({ subsets: ["cyrillic"] });
import Modal from "@/components/screens/modals";
const MainLayout: FC<Layout> = ({ children }) => {
  const modal = useAppSelector((state) => state.modal.active);
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
      <main
        style={{
          overflow: modal ? "hidden" : "auto",
        }}
        className={manrope.className}
      >
        <Header></Header>

        {children}
        <Footer></Footer>
      </main>
      <Modal />
    </>
  );
};

export default MainLayout;
