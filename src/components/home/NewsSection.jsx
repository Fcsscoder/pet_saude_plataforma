import { motion } from 'framer-motion';

//Ícones
import { Newspaper, Calendar, ArrowRight } from 'lucide-react';

//Componentes
import SectionHeader from './SectionHeader';
import NewsCard from './NewsCard';

const newsItems = [
  {
    id: 1,
    title: 'Projeto inaugura novo laboratório de pesquisa em Baturité',
    excerpt:
      'Espaço moderno equipado com tecnologia de ponta vai impulsionar pesquisas aplicadas na região do Maciço de Baturité.',
    date: '2025-01-15',
    category: 'Infraestrutura',
    image:
      'https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=800&q=80',
    featured: true,
  },
  {
    id: 2,
    title: 'Inscrições abertas para curso de extensão em Agroecologia',
    excerpt:
      'Capacitação gratuita oferecerá formação técnica para agricultores dos municípios da região.',
    date: '2025-01-12',
    category: 'Extensão',
    image:
      'https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=800&q=80',
  },
  {
    id: 3,
    title: 'Pesquisadores publicam estudo sobre desenvolvimento sustentável',
    excerpt:
      'Artigo científico destaca práticas inovadoras implementadas nas comunidades locais.',
    date: '2025-01-10',
    category: 'Pesquisa',
    image:
      'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=800&q=80',
  },
  {
    id: 4,
    title: 'Programa de bolsas recebe 200 candidaturas em 48 horas',
    excerpt:
      'Alto interesse demonstra relevância das oportunidades acadêmicas oferecidas pelo projeto.',
    date: '2025-01-08',
    category: 'Ensino',
    image:
      'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&q=80',
  },
];

export default function NewsSection() {
  const featuredNews = newsItems.find((news) => news.featured);
  const regularNews = newsItems.filter((news) => !news.featured);

  return (
    <section className="mb-12">
      <div className="flex items-center justify-between mb-8">
        <SectionHeader
          title="Últimas Notícias"
          subtitle="Fique por dentro das novidades do projeto"
        />
        <button className="hidden md:flex items-center gap-2 text-[#3490dc] hover:text-[#155dfc] font-medium transition-colors">
          Ver todas as notícias
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Featured News - Larger Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="lg:col-span-2">
          <NewsCard news={featuredNews} featured />
        </motion.div>

        {/* Regular News - Smaller Cards */}
        <div className="space-y-6">
          {regularNews.slice(0, 3).map((news, index) => (
            <motion.div
              key={news.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + index * 0.1 }}>
              <NewsCard news={news} compact />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Mobile "Ver todas" button */}
      <button className="md:hidden cursor-pointer w-full mt-6 flex items-center justify-center gap-2 text-[#3490dc] hover:text-[#155dfc] font-medium transition-colors py-3 border border-[#3490dc]/20 rounded-lg hover:bg-[#3490dc]/5">
        Ver todas as notícias
        <ArrowRight className="w-4 h-4" />
      </button>
    </section>
  );
}
