import "@/styles/globals.css";
import { ApolloProvider } from "@apollo/client";
import client from "@/graphql";
import type { AppProps } from "next/app";
import MainLayout from "@/layouts/MainLayout";
import { Provider } from "react-redux";
import store from "../store";
export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <ApolloProvider client={client}>
        <MainLayout>
          <Component {...pageProps} />
        </MainLayout>
      </ApolloProvider>
    </Provider>
  );
}
