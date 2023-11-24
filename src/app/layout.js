"use client";
import { Inter } from "next/font/google";
import "./globals.css";
import { Suspense } from "react";
import dynamic from "next/dynamic";

import Head from "next/head";

import NavBar from "@/components/NavBar/NavBar";

const Footer = dynamic(() => import("@/components/Footer/Footer"), {
  ssr: false,
});

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }, data) {
  return (
    <html lang="en">
      <head>
        <title>Holistic - Residential | Home Care</title>
      </head>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Serif:wght@300;400;500;600;700;800&family=Roboto:wght@300;400;500;700;900&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <body>
        <NavBar />

        {children}
        <Suspense fallback={<></>}>
          <Footer />
        </Suspense>
      </body>
    </html>
  );
}
