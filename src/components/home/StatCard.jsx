import { TrendingUp } from 'lucide-react';

export default function StatCard({ icon: Icon, value, label, trend, color }) {
  return (
    <div className="bg-white min-h-55 rounded-lg shadow-md border border-gray-200 p-6 hover:shadow-lg transition-all duration-300">
      <div className="flex items-center justify-between mb-4">
        <div
          className="p-3 rounded-lg"
          style={{ backgroundColor: `${color}15` }}>
          <Icon className="w-6 h-6" style={{ color }} />
        </div>
        <TrendingUp className="w-4 h-4 text-green-500" />
      </div>

      <div className="text-3xl font-bold text-gray-900 mb-1" style={{ color }}>
        {value}
      </div>

      <div className="text-sm font-medium text-gray-700 mb-2">{label}</div>

      <div className="text-xs text-gray-500 flex items-center gap-1">
        {trend}
      </div>
    </div>
  );
}
