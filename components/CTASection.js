export default function CTASection() {
  return (
    <section
      id="gabung"
      className="relative py-16 md:py-24 text-center overflow-hidden"
    >
      {/* dekorasi radial glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(40% 35% at 50% 50%, rgba(234,179,8,0.12) 0%, rgba(234,179,8,0) 70%)",
        }}
      />

      <div className="max-w-4xl mx-auto px-6">
        {/* image karakter */}
        <div className="flex justify-center mb-6">
          <img
            src="/hero-3d.png"   
            alt="Karakter 3D"
            className="w-48 h-48 md:w-64 md:h-64 object-contain drop-shadow-lg"
          />
        </div>

        {/* teks CTA */}
        <h2 className="text-2xl md:text-4xl font-bold mb-4">
          Siap bergabung dan berkarya bersama kami?
        </h2>
        <p className="text-gray-300 text-sm md:text-base mb-8">
          Jadi bagian dari Karang Taruna Unit 03 dan ciptakan perubahan
          nyata untuk lingkungan dan masyarakat.
        </p>

        {/* tombol */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://wa.me/628123456789"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-yellow-500 hover:bg-yellow-600 text-black font-semibold rounded-lg"
          >
            Gabung Sekarang
          </a>
          <a
            href="#program"
            className="px-6 py-3 border border-gray-500 rounded-lg hover:bg-gray-800 text-white"
          >
            Lihat Program
          </a>
        </div>
      </div>
    </section>
  );
}
