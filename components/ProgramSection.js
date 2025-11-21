import SectionHeading from "./SectionHeading";
import ProgramCard from "./ProgramCard";

const items = [
  {
    icon: "💻",
    title: "Pelatihan Digital",
    desc: "Workshop skill digital, desain, social media, dan keterampilan kerja.",
  },
  {
    icon: "🤝",
    title: "Bakti Sosial",
    desc: "Gotong royong dan aksi lingkungan bareng komunitas.",
  },
  {
    icon: "🎮",
    title: "E-Sports",
    desc: "Turnamen game seru untuk pemuda, tingkatkan skill dan sportivitas.",
  },
];

export default function ProgramSection() {
  return (
    <section id="program" className="relative py-16 md:py-24">
      {/* dekorasi radial glow di background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(40% 30% at 50% 20%, rgba(234,179,8,0.10) 0%, rgba(234,179,8,0) 70%), radial-gradient(30% 25% at 20% 80%, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0) 70%)",
        }}
      />
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading
          title="Program Unggulan"
          subtitle="ringkas, jelas, dan fokus ke aksi"
        />

        {/* grid responsif */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((it) => (
            <ProgramCard key={it.title} {...it} />
          ))}
        </div>
      </div>
    </section>
  );
}
