import { FaMapMarkerAlt, FaWhatsapp, FaYoutube, FaTiktok, FaInstagram } from "react-icons/fa";

export default function ContactSection() {
  return (
    <section id="kontak" className="relative py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-xl md:text-2xl font-semibold mb-8 text-center">
          Kontak Kami
        </h2>

        <div className="grid gap-8 md:grid-cols-2">
          {/* info kontak */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <span>📍</span>
              <span className="text-sm md:text-base">
                Jl. Jalan dengan dia no 1 pastikan dia nyaman denganmu
              </span>
            </div>
            <div className="flex items-center gap-3">
              <span>📱</span>
              <a
                href="https://wa.me/628123456789"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-yellow-400 text-sm md:text-base"
              >
                08123456789
              </a>
            </div>
          </div>

          {/* embed google map */}
          <div className="w-full h-64 md:h-80 rounded-xl overflow-hidden border border-white/10">
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d247.5452271210401!2d107.58009957668312!3d-6.923603339051238!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sid!2sid!4v1759244489903!5m2!1sid!2sid" 
            width="600" 
            height="450" 
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}

