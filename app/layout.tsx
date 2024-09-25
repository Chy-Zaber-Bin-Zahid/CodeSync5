import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Modal from "@/components/Modal";
import { MyProvider } from "@/context/MyProvider";

export const metadata: Metadata = {
  title: "CodeSync5 LTD",
  description: "CodeSync LTD Home Page",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <MyProvider>
          <div className="flex flex-col min-h-screen overflow-x-clip relative">
            <Navbar />
            <Modal />
            <div className="flex-grow flex">{children}</div>
            <Footer />
          </div>
        </MyProvider>
      </body>
    </html>
  );
}
