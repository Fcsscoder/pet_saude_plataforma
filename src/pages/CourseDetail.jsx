import React, { useState } from 'react';
import { BookOpen, List, Users, CheckCircle } from 'lucide-react';
import { AnimatePresence } from 'framer-motion';

import CourseHeader from '../components/courses/CourseHeader';
import TabNavigation from '../components/courses/TabNavigation';
import TopicsTab from '../components/courses/TopicsTab';
import SummaryTab from '../components/courses/SummaryTab';
import InstructorsTab from '../components/courses/InstructorsTab';
import RequirementsTab from '../components/courses/RequirementsTab';

const tabs = [
  { id: 'topics', label: 'Tópicos', icon: List },
  { id: 'summary', label: 'Visão Geral', icon: BookOpen },
  { id: 'instructors', label: 'Instrutores', icon: Users },
  { id: 'requirements', label: 'Requisitos', icon: CheckCircle },
];

const courseData = {
  title: 'Fundamentos de Saúde Digital',
  subtitle: 'Transforme o cuidado em saúde através da tecnologia e inovação',
  image_url:
    'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=400&h=400&fit=crop',
  duration: '16 horas',
  level: 'Intermediário',
  summary:
    'Mergulhe no universo da saúde digital e aprenda como a tecnologia está revolucionando o cuidado em saúde. Este curso abrangente explora telemedicina, prontuários eletrônicos, inteligência artificial aplicada à saúde, IoT médico e muito mais. Você compreenderá como implementar soluções digitais que melhoram a qualidade do atendimento, aumentam a eficiência operacional e promovem melhores resultados para os pacientes. Através de casos práticos e estudos reais, você desenvolverá as competências necessárias para liderar a transformação digital na área da saúde.',
  topics: [
    {
      title: 'Introdução à Saúde Digital',
      lessons: [
        'História e evolução da saúde digital',
        'Principais tecnologias disruptivas em saúde',
        'Benefícios e desafios da transformação digital',
        'Panorama da saúde digital no Brasil',
      ],
    },
    {
      title: 'Telemedicina e Teleconsulta',
      lessons: [
        'Modalidades de atendimento remoto',
        'Plataformas e ferramentas para telemedicina',
        'Aspectos legais e regulamentação (CFM)',
        'Boas práticas em consultas virtuais',
      ],
    },
    {
      title: 'Prontuário Eletrônico do Paciente (PEP)',
      lessons: [
        'Estrutura e funcionalidades do PEP',
        'Interoperabilidade e padrões (HL7, FHIR)',
        'Segurança e privacidade de dados (LGPD)',
        'Implementação e gestão de mudanças',
      ],
    },
    {
      title: 'Inteligência Artificial em Saúde',
      lessons: [
        'Machine Learning aplicado ao diagnóstico',
        'Análise preditiva e medicina de precisão',
        'Chatbots e assistentes virtuais em saúde',
        'Ética e governança de IA na saúde',
      ],
    },
    {
      title: 'Dispositivos Vestíveis e IoT Médico',
      lessons: [
        'Wearables para monitoramento de saúde',
        'Sensores e dispositivos conectados',
        'Integração de dados e análise em tempo real',
        'Aplicações em saúde preventiva',
      ],
    },
    {
      title: 'Segurança e Privacidade de Dados',
      lessons: [
        'LGPD aplicada à área da saúde',
        'Cibersegurança em ambientes hospitalares',
        'Gestão de riscos e compliance',
        'Consentimento e direitos dos pacientes',
      ],
    },
  ],
  instructors: [
    {
      name: 'Dra. Ana Paula Oliveira',
      photo_url:
        'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=200&h=200&fit=crop',
      bio: 'Médica com especialização em Informática em Saúde pelo Hospital Sírio-Libanês. 12 anos de experiência em implementação de sistemas de saúde digital. Coordenadora de transformação digital em grandes hospitais.',
      role: 'Instrutora Principal',
    },
    {
      name: 'Dr. Carlos Eduardo Santos',
      photo_url:
        'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=200&h=200&fit=crop',
      bio: 'Engenheiro de Software e especialista em IA aplicada à saúde. Desenvolvedor de soluções de telemedicina premiadas internacionalmente. Mentor de startups de healthtech.',
      role: 'Especialista em Tecnologia',
    },
    {
      name: 'Dra. Mariana Ferreira',
      photo_url:
        'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&h=200&fit=crop',
      bio: 'Advogada especialista em Direito Digital e Proteção de Dados na Saúde. Consultora de compliance em LGPD para instituições de saúde. Palestrante nacional sobre privacidade médica.',
      role: 'Consultora Jurídica',
    },
  ],
  requirements: [
    'Conhecimento básico sobre sistemas de saúde brasileiros',
    'Familiaridade com conceitos de tecnologia da informação',
    'Experiência ou interesse na área da saúde (médicos, enfermeiros, gestores, TI)',
    'Nenhum conhecimento técnico avançado é necessário',
  ],
  learning_objectives: [
    'Compreender o ecossistema de saúde digital e suas tecnologias',
    'Implementar soluções de telemedicina de forma segura e legal',
    'Gerenciar prontuários eletrônicos e garantir interoperabilidade',
    'Aplicar inteligência artificial em processos de saúde',
    'Assegurar privacidade e segurança de dados de pacientes',
    'Liderar projetos de transformação digital em saúde',
    'Avaliar e selecionar tecnologias apropriadas para cada contexto',
    'Promover mudança cultural e engajamento de equipes',
  ],
};

export default function CourseDetail() {
  const [activeTab, setActiveTab] = useState('topics');

  const renderTabContent = () => {
    switch (activeTab) {
      case 'topics':
        return <TopicsTab topics={courseData.topics} />;
      case 'summary':
        return (
          <SummaryTab
            summary={courseData.summary}
            learningObjectives={courseData.learning_objectives}
          />
        );
      case 'instructors':
        return <InstructorsTab instructors={courseData.instructors} />;
      case 'requirements':
        return (
          <RequirementsTab
            requirements={courseData.requirements}
            level={courseData.level}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <CourseHeader course={courseData} />
      <TabNavigation
        tabs={tabs}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />

      <div className="max-w-7xl mx-auto px-6 py-12">
        <AnimatePresence mode="wait">{renderTabContent()}</AnimatePresence>
      </div>
    </div>
  );
}
