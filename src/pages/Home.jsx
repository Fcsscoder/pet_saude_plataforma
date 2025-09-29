import { useState } from 'react';

// Componentes

import CourseCard from '../components/CourseCard';

// Images

import CourseBanner from '../public/imgs/CoursesBanner.png';
import Logo from '../public/imgs/PetSaude.png';

export default function Home() {
  const [searchTerm, setSearchTerm] = useState('');
  const [expandedCards, setExpandedCards] = useState({});

  const courses = [
    {
      id: 1,
      title: 'Análise de Dados em Saúde',
      hours: '30',
      description:
        'Este curso apresenta técnicas básicas e intermediárias de análise de dados aplicadas à saúde: limpeza de dados, visualização, estatística descritiva e introdução a modelos preditivos.',
    },
    {
      id: 2,
      title: 'Telesaúde',
      hours: '50',
      description:
        'Fundamentos e boas práticas da telesaúde: atendimento remoto, ética, legislação aplicável, ferramentas de teleconsulta e integração com prontuários eletrônicos.',
    },
    {
      id: 3,
      title: 'Gestão em Saúde Pública',
      hours: '40',
      description:
        'Conceitos de planejamento, organização e avaliação de serviços de saúde pública. Indicadores, políticas, planejamento de campanhas e coordenação de equipes multiprofissionais.',
    },
    {
      id: 4,
      title: 'Inteligência Artificial na Saúde',
      hours: '60',
      description:
        'Introdução ao uso de IA em saúde: pipelines de dados, validação de modelos, ética, viés e integração clínica. Técnicas de machine learning aplicadas a diagnóstico e predição de risco.',
    },
    {
      id: 5,
      title: 'Prontuário Eletrônico e Segurança de Dados',
      hours: '35',
      description:
        'Práticas de implantação de prontuários eletrônicos, segurança da informação em saúde, normas de privacidade (LGPD), além de controles de acesso, logs e criptografia aplicada.',
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
      <main
        id="main-content"
        tabIndex="-1"
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center flex flex-col justify-center items-center mb-12">
          <img
            src={CourseBanner}
            alt="Foto de profissionais da saúde"
            className="hidden md:block w-500 text-center rounded-b-3xl"
          />
          <img
            src={Logo}
            alt="Logo Pet Saúde Digital"
            className="w-15 sm:w-26 text-center mt-10"
          />
          <h2 className="text-3xl md:text-4xl font-bold text-terciary mb-4 mt-4">
            Nossos cursos
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Desenvolva suas competências em tecnologia e gestão em saúde com
            nossos cursos especializados
          </p>
        </div>

        {/* Barra de Busca */}
        {/* <div className="max-w-md mx-auto mb-12">
          <div className="relative">
            <Input
              type="text"
              placeholder="Buscar cursos..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 pr-4 py-3 w-full rounded-full border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-lg"
              aria-label="Buscar cursos"
            />
          </div>
        </div> */}

        {/* Cursos ou mensagem */}
        {filteredCourses.length > 0 ? (
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
        ) : (
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
