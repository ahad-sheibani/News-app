// "use client";
import "../styles/globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Container } from "react-bootstrap";
import "../styles/App.module.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "News App ",
  description: "News App",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="container">
          {/* <Container> */}
          {children}
        </div>
        {/* </Container> */}
      </body>
    </html>
  );
}
