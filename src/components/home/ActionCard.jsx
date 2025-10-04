import React from 'react';

export default function ActionCard({
  icon: Icon,
  title,
  description,
  stats,
  color,
}) {
  return (
    <div className="bg-white rounded-lg shadow-md border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300 group">
      <div className="h-2" style={{ backgroundColor: color }} />
      <div className="p-6">
        <div className="flex items-center gap-3 mb-4">
          <div
            className="p-3 rounded-lg"
            style={{ backgroundColor: `${color}15` }}>
            <Icon className="w-6 h-6" style={{ color }} />
          </div>
          <h3 className="text-xl font-bold text-gray-900">{title}</h3>
        </div>

        <p className="text-gray-600 text-sm leading-relaxed mb-6">
          {description}
        </p>

        <div className="grid grid-cols-2 gap-4 pt-4 border-t border-gray-100">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-2xl font-bold" style={{ color }}>
                {stat.value}
              </div>
              <div className="text-xs text-gray-500 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
