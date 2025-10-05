import { motion } from 'framer-motion';

//Ícones
import { GraduationCap, FlaskConical, Handshake, Award } from 'lucide-react';

//Componentes
import SectionHeader from './SectionHeader';
import ActionCard from './ActionCard';

const actions = [
  {
    icon: GraduationCap,
    title: 'Ensino',
    description:
      'Cursos de graduação, pós-graduação e formação continuada voltados para as demandas regionais',
    stats: [
      { label: 'Cursos oferecidos', value: '12' },
      { label: 'Alunos beneficiados', value: '850+' },
    ],
    color: '#3490dc',
  },
  {
    icon: FlaskConical,
    title: 'Pesquisa',
    description:
      'Projetos de pesquisa aplicada focados em soluções para os desafios locais do Maciço de Baturité',
    stats: [
      { label: 'Projetos ativos', value: '28' },
      { label: 'Publicações', value: '140+' },
    ],
    color: '#155dfc',
  },
  {
    icon: Handshake,
    title: 'Extensão',
    description:
      'Programas de extensão que conectam a universidade com a comunidade através de ações práticas',
    stats: [
      { label: 'Ações realizadas', value: '45' },
      { label: 'Pessoas impactadas', value: '3.200+' },
    ],
    color: '#e8501e',
  },
  {
    icon: Award,
    title: 'Inovação',
    description:
      'Desenvolvimento de tecnologias sociais e soluções inovadoras para o desenvolvimento regional',
    stats: [
      { label: 'Projetos inovadores', value: '16' },
      { label: 'Parcerias estabelecidas', value: '32' },
    ],
    color: '#3490dc',
  },
];

export default function ActionsSection() {
  return (
    <section>
      <SectionHeader
        title="Ações Acadêmicas"
        subtitle="Atividades integradas de ensino, pesquisa, extensão e inovação"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
        {actions.map((action, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}>
            <ActionCard {...action} />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
