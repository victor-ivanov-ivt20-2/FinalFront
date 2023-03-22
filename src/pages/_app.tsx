import "@/styles/globals.css";
import { ApolloProvider } from "@apollo/client";
import client from "@/graphql";
import type { AppProps } from "next/app";
import MainLayout from "@/layouts/MainLayout";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </ApolloProvider>
  );
}
