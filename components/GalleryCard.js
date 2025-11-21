export default function GalleryCard({ img, caption }) {
  return (
    <div className="group relative overflow-hidden rounded-xl border border-white/10 bg-white/5">
      <img
        src={img}
        alt={caption}
        className="h-48 w-full object-cover transition-transform duration-300 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-end">
        <p className="w-full p-3 text-xs md:text-sm text-gray-200">{caption}</p>
      </div>
    </div>
  );
}
