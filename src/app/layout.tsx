import "./globals.css";
import { poppins, playfair_display } from "./fonts";
import React from "react";
import ReactQueryProvider from "./ReactQueryProvider";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Jet Protocol",
  description:
    "Jet Protocol website. Jet Protocol is the next generation of defi governance protocol. On Jet Protocol, you will experience open source, transparent and efficient borrowing and lending on solana.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${poppins.className} ${playfair_display.variable}`}>
        <ReactQueryProvider>
          <div className="m-auto max-w-[90vw] xl:max-w-7xl">{children}</div>
        </ReactQueryProvider>
      </body>
    </html>
  );
}
