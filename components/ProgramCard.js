export default function ProgramCard({ icon, title, desc }) {
  return (
    <div className="group relative rounded-2xl border border-white/10 bg-white/5 p-5 transition-all hover:border-yellow-400/40 hover:shadow-[0_0_40px_-12px_rgba(234,179,8,0.5)]">
      {/* subtle glow */}
      <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-100"
           style={{background: "radial-gradient(60% 60% at 50% 0%, rgba(234,179,8,0.18) 0%, rgba(234,179,8,0) 70%)"}} />
      <div className="relative z-10">
        <div className="flex items-center gap-3">
          <div className="grid h-10 w-10 place-items-center rounded-xl bg-white/10">
            <span className="text-lg">{icon}</span>
          </div>
          <h3 className="text-base md:text-lg font-semibold">{title}</h3>
        </div>
        <p className="mt-3 text-sm text-gray-300 leading-relaxed">
          {desc}
        </p>
      </div>
    </div>
  );
}
