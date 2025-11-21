import SectionHeading from "./SectionHeading";
import GalleryCard from "./GalleryCard";

const items = [
  { img: "/gallery1.jpg", caption: "Kegiatan pelatihan coding" },
  { img: "/gallery2.jpg", caption: "Kegiatan olahraga rutin" },
  { img: "/gallery3.jpg", caption: "Kegiatan bakti sosial" },
  { img: "/gallery4.jpg", caption: "Panitia acara 17-an" },
];

export default function GallerySection() {
  return (
    <section id="galeri" className="relative py-16 md:py-24">
      {/* background dekorasi */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(40% 30% at 70% 30%, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0) 70%)",
        }}
      />

      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading title="Galeri Kami" subtitle="Cuplikan kegiatan kami" />

        {/* grid foto */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((it, i) => (
            <GalleryCard key={i} {...it} />
          ))}
        </div>

        {/* tombol */}
        <div className="mt-8 flex justify-center">
          <a
            href="#"
            className="px-6 py-3 border border-gray-500 rounded-lg hover:bg-gray-800 text-sm"
          >
            Lihat Semua
          </a>
        </div>
      </div>
    </section>
  );
}
