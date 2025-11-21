export default function LeaderCard({ img, name, role }) {
  return (
    <div className="group text-center rounded-xl border border-white/10 bg-white/5 p-6 transition hover:border-yellow-400/40 hover:shadow-[0_0_40px_-12px_rgba(234,179,8,0.5)]">
      <img
        src={img}
        alt={name}
        className="mx-auto mb-4 h-32 w-32 rounded-full object-cover border-2 border-white/20 group-hover:border-yellow-400 transition"
      />
      <h3 className="font-semibold text-base md:text-lg">{name}</h3>
      <p className="text-xs md:text-sm text-gray-400 mt-1">{role}</p>
    </div>
  );
}
