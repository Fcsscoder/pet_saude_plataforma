//Ícones
import { Calendar, Tag, ArrowRight } from 'lucide-react';

const categoryColors = {
  Infraestrutura: 'bg-[#3490dc]',
  Extensão: 'bg-[#155dfc]',
  Pesquisa: 'bg-[#e8501e]',
  Ensino: 'bg-[#3490dc]',
};

export default function NewsCard({ news, featured = false, compact = false }) {
  if (compact) {
    return (
      <div className="bg-white rounded-lg shadow-md border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-300 cursor-pointer group">
        <div className="flex gap-4 p-4">
          <img
            src={news.image}
            alt={news.title}
            className="w-24 h-24 object-cover rounded-lg flex-shrink-0"
          />
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-2">
              <span
                className={`${
                  categoryColors[news.category]
                } text-white text-xs px-2 py-1 rounded-full font-medium`}>
                {news.category}
              </span>
            </div>
            <h3 className="text-sm font-bold text-gray-900 mb-2 line-clamp-2 group-hover:text-[#3490dc] transition-colors">
              {news.title}
            </h3>
            <div className="flex items-center gap-2 text-xs text-gray-500">
              <Calendar className="w-3 h-3" />
              <span></span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      className={`bg-white rounded-lg shadow-md border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer group ${
        featured ? 'h-full' : ''
      }`}>
      <div className="relative h-64 overflow-hidden">
        <img
          src={news.image}
          alt={news.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-4 left-4">
          <span
            className={`${
              categoryColors[news.category]
            } text-white text-xs px-3 py-1.5 rounded-full font-medium shadow-lg`}>
            {news.category}
          </span>
        </div>
        {featured && (
          <div className="absolute top-4 right-4">
            <span className="bg-[#e8501e] text-white text-xs px-3 py-1.5 rounded-full font-bold shadow-lg">
              DESTAQUE
            </span>
          </div>
        )}
      </div>

      <div className="p-6">
        <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
          <Calendar className="w-4 h-4" />
          <span></span>
        </div>

        <h3
          className={`font-bold text-gray-900 mb-3 group-hover:text-[#3490dc] transition-colors ${
            featured ? 'text-2xl' : 'text-lg'
          }`}>
          {news.title}
        </h3>

        <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-2">
          {news.excerpt}
        </p>

        <button className="flex items-center gap-2 text-[#3490dc] hover:text-[#155dfc] font-medium text-sm transition-colors group-hover:gap-3">
          Ler mais
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
