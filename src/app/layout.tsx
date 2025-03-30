import type { Metadata } from "next";
import "./globals.css";
import { inter } from "@/app/ui/font";
import Sidebar from "./ui/sidebar";

export const metadata: Metadata = {
  title: "Henji chat app",
  description: "Chat app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <Sidebar />
        {children}
      </body>
    </html>
  );
}
