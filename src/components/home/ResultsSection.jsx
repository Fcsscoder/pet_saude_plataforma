import { motion } from 'framer-motion';

// Ícones
import { TrendingUp, Users, BookOpen, Award } from 'lucide-react';

//Componentes
import SectionHeader from './SectionHeader';
import StatCard from './StatCard';

const stats = [
  {
    icon: Users,
    value: '4.100+',
    label: 'Pessoas Beneficiadas',
    trend: '+22% este ano',
    color: '#3490dc',
  },
  {
    icon: BookOpen,
    value: '85',
    label: 'Projetos Realizados',
    trend: '+15 novos em 2024',
    color: '#155dfc',
  },
  {
    icon: Award,
    value: '13',
    label: 'Municípios Alcançados',
    trend: 'Cobertura regional completa',
    color: '#e8501e',
  },
  {
    icon: TrendingUp,
    value: '96%',
    label: 'Satisfação da Comunidade',
    trend: 'Avaliação positiva',
    color: '#3490dc',
  },
];

export default function ResultsSection() {
  return (
    <section>
      <SectionHeader
        title="Resultados e Impacto"
        subtitle="Números que demonstram nosso compromisso com o desenvolvimento regional"
      />

      <div className="grid grid-cols-1 min-h-60 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}>
            <StatCard {...stat} />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
