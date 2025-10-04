export default function SectionHeader({ title, subtitle }) {
  return (
    <div className="border-l-4 border-[#3490dc] pl-4 mb-6">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
        {title}
      </h2>
      {subtitle && (
        <p className="text-gray-600 text-sm md:text-base">{subtitle}</p>
      )}
    </div>
  );
}
