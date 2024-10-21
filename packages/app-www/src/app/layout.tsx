import type { Metadata } from "next";
import type { PropsWithChildren } from "react";

import { Banner, ContentInfo } from "~/components/app";

import "@fontsource-variable/manrope";
import "./globals.css";

export const metadata: Metadata = {
  robots: {
    index: false,
  },
};

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <html lang="fr">
      <body
        className="mx-auto min-w-80 font-manrope text-lg font-medium md:text-sm lg:text-sm xl:text-base 2xl:text-lg"
        tabIndex={-1}
      >
        <Banner />

        <main id="main" tabIndex={-1}>
          {children}
        </main>

        <ContentInfo />
      </body>
    </html>
  );
};

export default Layout;
