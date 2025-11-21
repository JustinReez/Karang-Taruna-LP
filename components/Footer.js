import { FaInstagram, FaTiktok } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="relative border-t border-white/10 bg-black/40 py-10 mt-16">
      <div className="max-w-7xl mx-auto px-6 grid gap-10 md:grid-cols-3">
        {/* kiri */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <img src="/logo.png" alt="Logo"  className="h-10 w-auto object-contain" />
            <span className="font-semibold text-sm md:text-base">
              Karang Taruna Unit 03
            </span>
          </div>
          <p className="text-xs md:text-sm text-gray-400">
            © 2025 Karang Taruna Unit 03. All rights reserved.
          </p>
          <p className="text-xs text-gray-500 mt-1">
            — Designed by reikuzoo
          </p>
        </div>

        {/* navigasi */}
        <div className="flex flex-col gap-2 text-sm md:text-base">
          <span className="font-semibold mb-2">Navigasi</span>
          <a href="#" className="hover:text-yellow-400">Beranda</a>
          <a href="#galeri" className="hover:text-yellow-400">Galeri</a>
          <a href="#program" className="hover:text-yellow-400">Program</a>
          <a href="#tentang" className="hover:text-yellow-400">Tentang</a>
        </div>

        {/* sosmed */}
        <div>
          <span className="font-semibold mb-2 block">Sosial Media</span>
          <div className="flex gap-4">
            <a href="#" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="text-2xl hover:text-pink-500" />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <FaTiktok className="text-2xl hover:text-pink-500" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
