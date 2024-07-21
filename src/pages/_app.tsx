import Layout from "@/components/Layout";
import "@/styles/globals.css";
import { AnimatePresence } from "framer-motion";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps, router }: AppProps) {
  return (
    <AnimatePresence mode="wait">
      <Layout key={router.route}>
        <Component {...pageProps} />
      </Layout>
    </AnimatePresence>
  );
}
