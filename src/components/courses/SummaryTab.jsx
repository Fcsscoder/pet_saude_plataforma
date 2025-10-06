import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Target, Sparkles } from 'lucide-react';
import { Card } from '../ui/Card';

export default function SummaryTab({ summary, learningObjectives }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4 }}
      className="space-y-8">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">
          Visão Geral do Curso
        </h2>
        <p className="text-gray-600">
          Tudo que você precisa saber sobre este curso
        </p>
      </div>

      {/* Summary Section */}
      <Card className="border-0 shadow-lg p-8">
        <div className="flex items-start gap-4 mb-6">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#3490dc] to-[#155dfc] flex items-center justify-center flex-shrink-0">
            <BookOpen className="w-6 h-6 text-white" />
          </div>
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              Sobre Este Curso
            </h3>
            <p className="text-gray-700 leading-relaxed text-lg">{summary}</p>
          </div>
        </div>
      </Card>

      {/* Learning Objectives */}
      {learningObjectives && learningObjectives.length > 0 && (
        <Card className="border-0 shadow-lg p-8">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#e8501e] to-[#ff6b3d] flex items-center justify-center flex-shrink-0">
              <Target className="w-6 h-6 text-white" />
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                O Que Você Vai Aprender
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                {learningObjectives.map((objective, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 p-4 rounded-xl bg-gray-50 hover:bg-gradient-to-r hover:from-[#3490dc]/5 hover:to-[#155dfc]/5 transition-all duration-300">
                    <Sparkles className="w-5 h-5 text-[#e8501e] flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{objective}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Card>
      )}
    </motion.div>
  );
}
