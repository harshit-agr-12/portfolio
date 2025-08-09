import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "./components/Navbar";

export const metadata: Metadata = {
  title: "My Portfolio",
  description: "Created By Harshit",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen flex justify-center relative">
        {/* Top border - full width */}
        <div className="absolute top-9 left-0 w-full h-px bg-gradient-to-r from-white via-gray-400 to-white z-1" />
        {/* Bottom border - full width */}
        <div className="absolute bottom-9 left-0 w-full h-px bg-gradient-to-r from-white via-gray-400 to-white z-1" />
  
        {/* Content box */}
        <div className="relative max-w-3xl w-full bg-white">
          <div className="absolute top-0 left-0 w-px h-full bg-gradient-to-b from-white via-gray-400 to-white z-1" />
          <div className="absolute top-0 right-0 w-px h-full bg-gradient-to-b from-white via-gray-400 to-white z-1" />
          <div className="p-2">
            {children}
          </div>
        </div>
      </body>
    </html>
  )
}