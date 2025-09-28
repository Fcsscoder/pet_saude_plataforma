import { useState } from 'react';
import {
  Search,
  BarChart3,
  Video,
  Building2,
  Brain,
  Shield,
  ChevronDown,
  ChevronUp,
} from 'lucide-react';
import Button from '../components/ui/Button';
import Input from '../components/ui/Input';
import CourseBanner from '../public/imgs/CoursesBanner.png';
import Logo from '../public/imgs/PetSaude.png';

// Componente de Card de Curso
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
                Ler menos
                <ChevronUp className="w-4 h-4 ml-1" />
              </>
            ) : (
              <>
                Ler mais
                <ChevronDown className="w-4 h-4 ml-1" />
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

export default function Home() {
  const [searchTerm, setSearchTerm] = useState('');
  const [expandedCards, setExpandedCards] = useState({});

  const courses = [
    {
      id: 1,
      title: 'Análise de Dados em Saúde',
      hours: '30',
      description:
        'Este curso apresenta técnicas básicas e intermediárias de análise de dados aplicadas à saúde: limpeza de dados, visualização, estatística descritiva e introdução a modelos preditivos. Inclui estudos de caso em vigilância epidemiológica e interpretação de dashboards clínicos.',
    },
    {
      id: 2,
      title: 'Telesaúde',
      hours: '50',
      description:
        'Fundamentos e boas práticas da telesaúde: atendimento remoto, ética, legislação aplicável, ferramentas de teleconsulta, e integração com prontuários eletrônicos. Aulas práticas simulando casos clínicos e comunicação com pacientes à distância.',
    },
    {
      id: 3,
      title: 'Gestão em Saúde Pública',
      hours: '40',
      description:
        'Conceitos de planejamento, organização e avaliação de serviços de saúde pública. Aborda indicadores de saúde, políticas públicas, planejamento de campanhas e coordenação de equipes multiprofissionais.',
    },
    {
      id: 4,
      title: 'Inteligência Artificial na Saúde',
      hours: '60',
      description:
        'Introdução ao uso de IA em saúde: pipelines de dados, validação de modelos, ética, viés e integração clínica. Apresenta técnicas de machine learning aplicadas a diagnóstico, predição de risco e otimização de fluxos clínicos.',
    },
    {
      id: 5,
      title: 'Prontuário Eletrônico e Segurança de Dados',
      hours: '35',
      description:
        'Práticas de implantação e manutenção de prontuários eletrônicos, segurança da informação em saúde, normas de privacidade e proteção de dados (LGPD), além de controles de acesso, logs e criptografia básica aplicada.',
    },
  ];

  const filteredCourses = courses.filter(
    (course) =>
      course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      course.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const toggleCard = (courseId) => {
    setExpandedCards((prev) => ({
      ...prev,
      [courseId]: !prev[courseId],
    }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-orange-50">
      {/* Main Content */}
      <main
        id="main-content"
        tabIndex="-1"
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
        {/* Hero Section */}
        <div className="text-center flex flex-col justify-center items-center mb-12">
          <img
            src={CourseBanner}
            alt="Logo Pet Saúde Digital"
            className="hidden md:block w-500 text-center rounded-b-3xl"
          />
          <img
            src={Logo}
            alt="Logo Pet Saúde Digital"
            className="w-26 text-center mt-10"
          />
          <h2 className="text-4xl md:text-5xl font-bold text-terciary mb-8 ">
            Nossos cursos
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Desenvolva suas competências em tecnologia e gestão em saúde com
            nossos cursos especializados
          </p>
        </div>

        {/* Barra de Busca */}
        <div className="max-w-md mx-auto mb-12">
          <div className="relative">
            {/* <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" /> */}
            {/* <Input
              type="text"
              placeholder="Buscar cursos..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 pr-4 py-3 w-full rounded-full border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-lg"
              aria-label="Buscar cursos"
            /> */}
          </div>
        </div>

        {/* Grid de Cursos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCourses.map((course) => (
            <CourseCard
              key={course.id}
              course={course}
              isExpanded={expandedCards[course.id] || false}
              onToggle={() => toggleCard(course.id)}
            />
          ))}
        </div>

        {/* Mensagem quando não há resultados */}
        {filteredCourses.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-400 text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              Nenhum curso encontrado
            </h3>
            <p className="text-gray-600">
              Tente buscar com outros termos ou navegue pelos cursos
              disponíveis.
            </p>
          </div>
        )}
      </main>
    </div>
  );
}
