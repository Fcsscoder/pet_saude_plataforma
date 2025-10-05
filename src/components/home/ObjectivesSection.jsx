import { motion } from 'framer-motion';

//Ícones
import { Target, Users, BookOpen, Lightbulb } from 'lucide-react';

// Componentes
import SectionHeader from './SectionHeader';
import ObjectiveCard from './ObjectiveCard';

const objectives = [
  {
    icon: Target,
    title: 'Missão',
    description:
      'Promover o desenvolvimento sustentável do Maciço de Baturité através de ações integradas de ensino, pesquisa e extensão universitária.',
    color: 'bg-[#3490dc]',
  },
  {
    icon: Users,
    title: 'Integração Comunitária',
    description:
      'Fortalecer os laços entre a universidade e as comunidades locais, criando soluções colaborativas para desafios regionais.',
    color: 'bg-[#155dfc]',
  },
  {
    icon: BookOpen,
    title: 'Educação Transformadora',
    description:
      'Oferecer formação de qualidade e oportunidades de capacitação que gerem impacto social e econômico duradouro.',
    color: 'bg-[#e8501e]',
  },
  {
    icon: Lightbulb,
    title: 'Inovação e Pesquisa',
    description:
      'Desenvolver pesquisas aplicadas que respondam às necessidades específicas da região e promovam inovação tecnológica e social.',
    color: 'bg-[#3490dc]',
  },
];

export default function ObjectivesSection() {
  return (
    <section>
      <SectionHeader
        title="Objetivos do Projeto"
        subtitle="Nossos pilares fundamentais para o desenvolvimento regional"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
        {objectives.map((objective, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}>
            <ObjectiveCard {...objective} />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
