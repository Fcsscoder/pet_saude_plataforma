import { motion } from 'framer-motion';

//Componentes
import SectionHeader from './SectionHeader';

const partners = [
  { name: 'Governo do Estado do Ceará', logo: '🏛️' },
  { name: 'Prefeituras Municipais', logo: '🏢' },
  { name: 'Universidade Federal', logo: '🎓' },
  { name: 'Institutos de Pesquisa', logo: '🔬' },
  { name: 'ONGs e Organizações Sociais', logo: '🤝' },
  { name: 'Empresas Privadas', logo: '🏭' },
];

export default function PartnersSection() {
  return (
    <section>
      <SectionHeader
        title="Parceiros e Apoiadores"
        subtitle="Instituições que colaboram para o sucesso do projeto"
      />

      <div className="bg-white rounded-lg shadow-md border border-gray-200 p-8 mt-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {partners.map((partner, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="flex flex-col items-center justify-center p-4 hover:bg-gray-50 rounded-lg transition-colors group cursor-pointer">
              <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">
                {partner.logo}
              </div>
              <div className="text-xs text-center text-gray-600 font-medium">
                {partner.name}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-8 pt-6 border-t border-gray-200 text-center">
          <p className="text-sm text-gray-600 mb-3">
            Interessado em se tornar um parceiro?
          </p>
          <button className="inline-flex items-center gap-2 px-6 py-2.5 bg-[#3490dc] text-white font-medium rounded-lg hover:bg-[#2779bd] transition-colors">
            Entre em Contato
          </button>
        </div>
      </div>
    </section>
  );
}
