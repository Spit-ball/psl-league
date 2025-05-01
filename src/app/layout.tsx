import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Navbar } from "./components/molecules/Navbar";
import { Sidebar } from "./components/molecules/Sidebar";
import { Icons } from "./components/atoms/Icons";
import { SessionProvider } from "next-auth/react";
import "./globals.css";
import { Providers } from "./providers";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Primordial Soccar League",
  description: "Official website of Primordial Soccar League",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Stats", href: "/stats" },
    { label: "Admin", href: "/admin" },
    { label: "About", href: "/about" },
    { label: "Login", href: "/login" },
  ];

  const sidebarItems = [
    { label: "Dashboard", id: "dashboard", icon: <Icons.Dashboard /> },
    { label: "Teams", id: "teams", icon: <Icons.Teams /> },
    { label: "Players", id: "players", icon: <Icons.Players /> },
    { label: "Matches", id: "matches", icon: <Icons.Matches /> },
    { label: "Settings", id: "settings", icon: <Icons.Settings /> },
  ];

  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className={geistSans.className}>
        <Providers>
          <Navbar links={navLinks} />
          <div className="flex">
            <Sidebar items={sidebarItems} />
            <main className="flex-1 p-4 ml-16 mt-16">{children}</main>
          </div>
        </Providers>
      </body>
    </html>
  );
}
