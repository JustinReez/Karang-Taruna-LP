import SectionHeading from "./SectionHeading";
import LeaderCard from "./LeaderCard";

const leaders = [
  {
    img: "/leader1.jpg",
    name: "Megawati",
    role: "Wakil Ketua Karta 1 25/26",
  },
  {
    img: "/leader2.jpg",
    name: "Ahmad Xahroni",
    role: "Ketua Karta 25/26",
  },
  {
    img: "/leader3.jpg",
    name: "Sri Mulyani",
    role: "Wakil Ketua Karta 2 25/26",
  },
];

export default function LeadersSection() {
  return (
    <section id="leaders" className="relative py-16 md:py-24">
      {/* dekorasi background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(30% 40% at 80% 60%, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0) 70%)",
        }}
      />

      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading
          title="Meet The Leaders"
          subtitle="Anggota inti kami"
        />

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {leaders.map((person) => (
            <LeaderCard key={person.name} {...person} />
          ))}
        </div>
      </div>
    </section>
  );
}
