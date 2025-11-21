export default function SectionHeading({ title, subtitle }) {
  return (
    <div className="text-center mb-8">
      <h2 className="text-xl md:text-2xl font-semibold">{title}</h2>
      {subtitle && (
        <p className="text-gray-400 text-sm md:text-base mt-1">{subtitle}</p>
      )}
    </div>
  );
}
