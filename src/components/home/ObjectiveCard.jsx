export default function ObjectiveCard({
  icon: Icon,
  title,
  description,
  color,
}) {
  return (
    <div className="bg-white rounded-lg shadow-md border border-gray-200 p-6 hover:shadow-lg transition-all duration-300 group">
      <div className="flex items-start gap-4">
        <div
          className={`${color} p-3 rounded-lg flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
          <Icon className="w-6 h-6 text-white" />
        </div>
        <div>
          <h3 className="text-lg font-bold text-gray-900 mb-2">{title}</h3>
          <p className="text-gray-600 leading-relaxed text-sm">{description}</p>
        </div>
      </div>
    </div>
  );
}
