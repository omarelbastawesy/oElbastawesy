import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { LangProvider } from "./Data/LangContext";
import "./globals.css";
import AOSProvider from "./AOSProvider";
import Scroll from "./components/Scroll/Scroll";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "O.Elbastawesy",
  description:
    "My portfolio: Front-end developer specializing in React and Next.js, creating modern and interactive web interfaces with excellent user experience.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" dir="ltr">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased ${inter.className}`}
      >
        <AOSProvider>
          <LangProvider>
            <main>
              {children}
              <Scroll />
            </main>
          </LangProvider>
        </AOSProvider>
      </body>
    </html>
  );
}
