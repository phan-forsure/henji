import type { Metadata } from "next";
import "./globals.css";
import { inter } from "@/app/ui/font";
import Sidebar from "./ui/sidebar";

export const metadata: Metadata = {
  title: "Henji",
  description: "Social media app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} antialiased grid px-32 max-md:px-8 max-sm:px-2`}
      >
        <Sidebar />
        {children}
      </body>
    </html>
  );
}
