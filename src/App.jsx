import Home from './pages/Home';
import Navbar from './components/Navbar';
import './App.css';
import Footer from './components/Footer';

function App() {
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

  return (
    <>
      <div className="p-0">
        <Navbar />
        <Home courses={courses} />
        <Footer />
      </div>
    </>
  );
}

export default App;
