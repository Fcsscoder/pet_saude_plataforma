import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, ChevronRight } from 'lucide-react';
import { Card } from '../ui/Card';

export default function TopicsTab({ topics }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4 }}
      className="space-y-6">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">
          Conteúdo Programático
        </h2>
        <p className="text-gray-600">
          Domine estes tópicos essenciais ao longo do curso
        </p>
      </div>

      <div className="space-y-4">
        {topics?.map((topic, index) => (
          <Card
            key={index}
            className="border-0 cursor-pointer shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
            <div className="p-6">
              <div className="flex items-start gap-4">
                <div className="cursor-pointer flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-[#3490dc] to-[#155dfc] flex items-center justify-center text-white font-bold text-lg shadow-lg">
                  {index + 1}
                </div>

                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-[#3490dc] transition-colors duration-300">
                    {topic.title}
                  </h3>

                  <div className="space-y-2">
                    {topic.lessons?.map((lesson, lessonIndex) => (
                      <div
                        key={lessonIndex}
                        className="flex items-center gap-3 text-gray-700 hover:text-[#3490dc] transition-colors duration-200 group/item">
                        <CheckCircle2 className="w-5 h-5 text-[#3490dc] flex-shrink-0" />
                        <span className="text-sm">{lesson}</span>
                        <ChevronRight className="w-4 h-4 ml-auto opacity-0 group-hover/item:opacity-100 transition-opacity duration-200" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </motion.div>
  );
}
