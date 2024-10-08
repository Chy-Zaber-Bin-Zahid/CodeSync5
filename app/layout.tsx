import Footer from "@/components/Footer";
import Modal from "@/components/Modal";
import Navbar from "@/components/Navbar";
import { MyProvider } from "@/context/MyProvider";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CodeSync5",
  description: "CodeSync5 Home Page",
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
