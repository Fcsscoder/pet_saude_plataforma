import React from 'react';
import { BookOpen, GraduationCap } from 'lucide-react';

export default function LoginHeader() {
  return (
    <div className="flex items-center gap-3 mb-8">
      <div className="relative">
        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#3490dc] to-[#155dfc] flex items-center justify-center shadow-lg">
          <GraduationCap className="w-9 h-9 text-white" />
        </div>
        <div className="absolute -bottom-1 -right-1 w-6 h-6 rounded-lg bg-[#e8501e] flex items-center justify-center shadow-md">
          <BookOpen className="w-3.5 h-3.5 text-white" />
        </div>
      </div>
      <div>
        <h1 className="text-2xl font-bold text-gray-900 tracking-tight">
          Maciço de Baturité
        </h1>
        <p className="text-sm text-gray-500 font-medium">Sistema Acadêmico</p>
      </div>
    </div>
  );
}
