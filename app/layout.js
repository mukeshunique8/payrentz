"use client";

import "../app/global.css";
import { Raleway } from 'next/font/google';
import { AppProvider } from '../app/contexts/AppContext';
import React from "react";
import Navbar from "./components/Navbar";
import Navbar2 from "./components/Navbar2";
import Footer from "./components/Footer";
import ModalWrapper from "./components/ModalWrapper"; // New component
import NextTopLoader from 'nextjs-toploader';

const raleway = Raleway({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={raleway.className}>
        <NextTopLoader speed={500} color="#2B5CAB" height={5}/>
        <AppProvider>
          <ModalWrapper>
            <div className="w-full  relative mx-auto bg-white">
              <div className="flex flex-col sticky top-0 z-[50] bg-white">
              <Navbar />
              <Navbar2 />
              </div>
              {children}
              <Footer />
            </div>
          </ModalWrapper>
        </AppProvider>
      </body>
    </html>
  );
}
