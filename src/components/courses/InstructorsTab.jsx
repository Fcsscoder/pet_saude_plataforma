import React from 'react';
import { motion } from 'framer-motion';
import { Award } from 'lucide-react';
import { Card } from '../ui/Card';

export default function InstructorsTab({ instructors }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4 }}
      className="space-y-6">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">
          Conheça os Instrutores
        </h2>
        <p className="text-gray-600">
          Aprenda com especialistas da área e educadores experientes
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {instructors?.map((instructor, index) => (
          <Card
            key={index}
            className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
            <div className="p-8">
              <div className="flex items-start gap-6">
                {/* Instructor Photo */}
                <div className="flex-shrink-0 relative">
                  <div className="w-24 h-24 rounded-2xl overflow-hidden ring-4 ring-[#3490dc]/20 group-hover:ring-[#3490dc]/40 transition-all duration-300">
                    {instructor.photo_url ? (
                      <img
                        src={instructor.photo_url}
                        alt={instructor.name}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-[#3490dc] to-[#155dfc] flex items-center justify-center text-white text-3xl font-bold">
                        {instructor.name?.charAt(0)}
                      </div>
                    )}
                  </div>
                  {/* Award Badge */}
                  <div className="absolute -bottom-2 -right-2 w-10 h-10 rounded-full bg-[#e8501e] flex items-center justify-center shadow-lg">
                    <Award className="w-5 h-5 text-white" />
                  </div>
                </div>

                {/* Instructor Info */}
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-1 group-hover:text-[#3490dc] transition-colors duration-300">
                    {instructor.name}
                  </h3>
                  <p className="text-[#e8501e] font-medium mb-3">
                    {instructor.role}
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    {instructor.bio}
                  </p>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </motion.div>
  );
}
