import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import NavbarCategories from "./components/NavbarCategories";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="flex flex-col">
        <Navbar>
          <NavbarCategories />
        </Navbar>
        <div className="my-4 p-2">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
