import React from 'react';
import { motion } from 'framer-motion';
import { CheckSquare, AlertCircle } from 'lucide-react';
import { Card } from '../ui/Card';
import { Alert, AlertDescription } from '../ui/Alert';

export default function RequirementsTab({ requirements, level }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4 }}
      className="space-y-6">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">
          Pré-requisitos
        </h2>
        <p className="text-gray-600">
          O que você precisa saber antes de começar este curso
        </p>
      </div>

      <Alert className="border-[#3490dc] bg-[#3490dc]/5">
        <div className="flex items-start gap-3">
          <AlertCircle className="w-5 h-5 text-[#3490dc] flex-shrink-0 mt-0.5" />
          <AlertDescription className="text-gray-700">
            Este é um curso de nível{' '}
            <span className="font-bold text-[#3490dc]">{level}</span>.
            Certifique-se de atender aos requisitos abaixo para a melhor
            experiência de aprendizado.
          </AlertDescription>
        </div>
      </Alert>

      <Card className="border-0 shadow-lg p-8">
        <div className="space-y-4">
          {requirements && requirements.length > 0 ? (
            requirements.map((requirement, index) => (
              <div
                key={index}
                className="flex items-start gap-4 p-4 rounded-xl bg-gray-50 hover:bg-gradient-to-r hover:from-[#3490dc]/5 hover:to-[#155dfc]/5 transition-all duration-300">
                <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-gradient-to-br from-[#3490dc] to-[#155dfc] flex items-center justify-center">
                  <CheckSquare className="w-5 h-5 text-white" />
                </div>
                <p className="text-gray-700 flex-1 pt-1">{requirement}</p>
              </div>
            ))
          ) : (
            <div className="text-center py-8">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#3490dc] to-[#155dfc] mx-auto mb-4 flex items-center justify-center">
                <CheckSquare className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Nenhum Pré-requisito Necessário
              </h3>
              <p className="text-gray-600">
                Este curso é amigável para iniciantes. Comece agora mesmo!
              </p>
            </div>
          )}
        </div>
      </Card>
    </motion.div>
  );
}
