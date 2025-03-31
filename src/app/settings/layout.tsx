import type { Metadata } from "next";
import "@/app/globals.css";
import { inter } from "@/app/ui/font";

export const metadata: Metadata = {
  title: "Henji chat app",
  description: "Chat app",
};

export default function SettingsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className={`${inter.className} antialiased grid px-8 p-2`}>
      {children}
    </main>
  );
}
