"use client"; // biar bisa pakai useState di App Router

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react"; // icon hamburger & close

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full z-50 bg-black/60 backdrop-blur-md border-b border-gray-800">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo + Brand */}
        <div className="flex items-center gap-2 flex-shrink-0">
          <img
            src="/logo.png"
            alt="Logo"
            className="h-10 w-auto object-contain"
          />
          <span className="font-semibold text-sm sm:text-base truncate max-w-[150px]">
            Karta Unit 03
          </span>
        </div>

        {/* Nav (desktop) */}
        <nav className="hidden md:flex gap-8 text-sm">
          <Link href="#program" className="hover:text-yellow-400">
            Program
          </Link>
          <Link href="#galeri" className="hover:text-yellow-400">
            Galeri
          </Link>
          <Link href="#tentang" className="hover:text-yellow-400">
            Tentang
          </Link>
        </nav>

        {/* CTA (desktop) */}
        <div className="hidden md:block">
          <Link
            href="#gabung"
            className="px-4 py-2 rounded-lg bg-yellow-500 hover:bg-yellow-600 text-black font-semibold text-sm"
          >
            Gabung
          </Link>
        </div>

        {/* Hamburger (mobile) */}
        <button
          className="md:hidden text-gray-200"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile menu dropdown */}
      {isOpen && (
        <div className="md:hidden bg-black/90 border-t border-gray-800 px-6 py-4 space-y-4">
          <Link
            href="#program"
            className="block hover:text-yellow-400"
            onClick={() => setIsOpen(false)}
          >
            Program
          </Link>
          <Link
            href="#galeri"
            className="block hover:text-yellow-400"
            onClick={() => setIsOpen(false)}
          >
            Galeri
          </Link>
          <Link
            href="#tentang"
            className="block hover:text-yellow-400"
            onClick={() => setIsOpen(false)}
          >
            Tentang
          </Link>
          <Link
            href="#gabung"
            className="block px-4 py-2 rounded-lg bg-yellow-500 hover:bg-yellow-600 text-black font-semibold"
            onClick={() => setIsOpen(false)}
          >
            Gabung
          </Link>
        </div>
      )}
    </header>
  );
}
