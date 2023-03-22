import Head from "next/head";

import YandexMap from "@/components/map/YandexMap";
import Test from "@/components/screens/test";
import ClientOnly from "@/graphql/clientOnly";
import Auth from "@/components/screens/auth";
import Phone from "@/components/screens/landing/phone";
import Recommend from "@/components/screens/landing/Recommend";
import Header from "@/components/ui kit/header";
import InputSearch from "@/components/screens/landing/inputSearch";
import Footer from "@/components/ui kit/footer";
export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Header></Header>
        <InputSearch></InputSearch>
        <Recommend></Recommend>
        <div className="mt-4">
          <YandexMap></YandexMap>
        </div>
        <Phone></Phone>
        <Footer></Footer>
        {/* <YandexMap></YandexMap>
        <ClientOnly>
          <Test></Test>
        </ClientOnly>
        <Auth></Auth> */}
      </main>
    </>
  );
}
