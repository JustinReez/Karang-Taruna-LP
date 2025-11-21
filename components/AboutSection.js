import SectionHeading from "./SectionHeading";

export default function AboutSection() {
  return (
    <section id="tentang" className="relative py-16 md:py-24">
      {/* dekorasi background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(50% 60% at 50% 50%, rgba(234,179,8,0.10) 0%, rgba(234,179,8,0) 70%)",
        }}
      />

      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading title="Tentang Kami" subtitle="Cuplikan kegiatan kami" />

        <div className="grid gap-10 md:grid-cols-2">
          {/* deskripsi */}
          <div className="space-y-4">
            <p className="text-gray-300 text-sm md:text-base leading-relaxed">
              <strong>Karang Taruna Unit 03</strong> adalah wadah pemuda
              yang bergerak di bidang sosial, pelatihan, dan pemberdayaan.
            </p>
            <p className="text-gray-300 text-sm md:text-base leading-relaxed">
              Visi kami memberdayakan pemuda untuk berkontribusi nyata di
              masyarakat.
            </p>
          </div>

          {/* visi misi */}
          <div className="grid gap-5">
            <div className="rounded-xl border border-white/10 bg-white/5 p-5">
              <h3 className="font-semibold mb-2">Visi</h3>
              <p className="text-sm md:text-base text-gray-300">
                Pemuda Aktif, Kreatif, Berdaya
              </p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/5 p-5">
              <h3 className="font-semibold mb-2">Misi</h3>
              <p className="text-sm md:text-base text-gray-300">
                Pelatihan, Aksi sosial, pemberdayaan ekonomi lokal
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
