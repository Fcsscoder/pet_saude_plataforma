import {
  BarChart3,
  Video,
  Building2,
  Brain,
  Shield,
  ChevronDown,
  ChevronUp,
} from 'lucide-react';

// Componentes

import Button from '../components/ui/Button';

const CourseCard = ({ course, isExpanded, onToggle }) => {
  const iconMap = {
    'Análise de Dados em Saúde': (
      <BarChart3 className="w-12 h-12 text-terciary" />
    ),
    Telesaúde: <Video className="w-12 h-12 text-terciary" />,
    'Gestão em Saúde Pública': (
      <Building2 className="w-12 h-12 text-terciary" />
    ),
    'Inteligência Artificial na Saúde': (
      <Brain className="w-12 h-12 text-terciary" />
    ),
    'Prontuário Eletrônico e Segurança de Dados': (
      <Shield className="w-12 h-12 text-terciary" />
    ),
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden">
      <div className="p-6">
        <div className="flex items-center mb-4">
          <div className="mr-4 p-3 bg-blue-50 rounded-xl">
            {iconMap[course.title]}
          </div>
          <div className="flex-1">
            <h3 className="text-xl font-bold text-gray-900 mb-1">
              {course.title}
            </h3>
            <span className="inline-block px-3 py-1 bg-orange-100 text-orange-800 text-sm font-medium rounded-full">
              {course.hours} horas
            </span>
          </div>
        </div>

        <div className="text-gray-600 leading-relaxed">
          <p
            className={`transition-all duration-300 ${
              !isExpanded ? 'line-clamp-3' : ''
            }`}>
            {course.description}
          </p>
        </div>

        <div className="flex flex-row justify-between">
          <Button
            variant="ghost"
            onClick={onToggle}
            className="mt-4 p-0 h-auto font-medium cursor-pointer"
            aria-expanded={isExpanded}
            aria-controls={`course-description-${course.id}`}>
            {isExpanded ? (
              <>
                Ler menos <ChevronUp className="w-4 h-4 ml-1" />
              </>
            ) : (
              <>
                Ler mais <ChevronDown className="w-4 h-4 ml-1" />
              </>
            )}
          </Button>

          <Button className="bg-secondary text-white mt-4 p-0 h-auto font-medium cursor-pointer">
            Acessar
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
