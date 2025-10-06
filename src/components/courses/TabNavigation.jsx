import { useRef } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Button from '../ui/Button';

export default function TabNavigation({ tabs, activeTab, setActiveTab }) {
  const scrollContainerRef = useRef(null);

  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const scrollAmount = 200;
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="bg-white border-b border-gray-200 sticky top-0 z-40 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 relative">
        {/* Tabs Container */}
        <div
          ref={scrollContainerRef}
          className="overflow-x-auto scrollbar-hide scroll-smooth"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
          <div className="flex gap-2 py-4 min-w-max">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className="relative px-6 py-3 whitespace-nowrap transition-all duration-300">
                <div className="flex items-center gap-2">
                  <tab.icon
                    className={`w-5 h-5 transition-colors duration-300 ${
                      activeTab === tab.id ? 'text-[#3490dc]' : 'text-gray-500'
                    }`}
                  />
                  <span
                    className={`font-medium transition-colors duration-300 ${
                      activeTab === tab.id ? 'text-[#3490dc]' : 'text-gray-600'
                    }`}>
                    {tab.label}
                  </span>
                </div>

                {activeTab === tab.id && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#3490dc] to-[#155dfc] rounded-t-full"
                    transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
