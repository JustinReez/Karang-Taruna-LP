import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Karang Taruna Unit 03",
  description: "Ruang kreasi, aksi, dan solidaritas pemuda.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white">
        {children}
      </body>
    </html>
  );
}