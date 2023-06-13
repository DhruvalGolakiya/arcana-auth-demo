import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ProvideAuth } from "@arcana/auth-react";
import { getAuth } from "@/auth/getArcanaAuth";

export default function App({ Component, pageProps }: AppProps) {
  const auth = getAuth();
  return (
    <ProvideAuth provider={auth}>
      <div>
        <Component {...pageProps} />
      </div>
    </ProvideAuth>
  );
}
