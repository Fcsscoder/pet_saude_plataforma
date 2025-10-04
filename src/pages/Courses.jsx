import { useState } from 'react';

// Componentes
import CourseCard from '../components/courses/CourseCard';
import Input from '../components/ui/Input';

// Imagens
import CourseBanner from '../imgs/CoursesBanner.png';
import Logo from '../imgs/PetSaude.png';

// Ícones
import { SearchSlash, Search } from 'lucide-react';

export default function Courses({ courses }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [expandedCards, setExpandedCards] = useState({});

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
    <div className="min-h-screen bg-gradient-to-br via-white">
      <main
        id="main-content"
        tabIndex="-1"
        className="max-w-7xl mx-auto px-8 sm:px-6 lg:px-8">
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
        <div className="flex justify-center mb-12 px-2">
          <div className="relative w-sm md:w-xl">
            <Search className="absolute top-4 left-2.5 text-gray-400" />
            <Input
              type="text"
              placeholder="Buscar cursos..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 px-6 py-3 w-full rounded-full border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-lg"
              aria-label="Buscar cursos"
            />
          </div>
        </div>

        {/* Cursos ou mensagem */}
        {filteredCourses.length > 0 ? (
          <div className="grid mb-50 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
          <div className="flex flex-col justify-center align-center text-center py-12">
            <SearchSlash className="self-center mb-5 text-terciary" size={48} />
            <h3 className="text-2xl font-bold text-terciary mb-2">
              Nenhum curso encontrado
            </h3>
            <p className="text-terciary">
              Tente buscar com outros termos ou navegue pelos cursos
              disponíveis.
            </p>
          </div>
        )}
      </main>
    </div>
  );
}
