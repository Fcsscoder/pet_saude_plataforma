import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Ícones
import {
  ChevronRight,
  FileText,
  Calendar,
  Bell,
  ExternalLink,
  MapPin,
} from 'lucide-react';

const quickLinks = [
  { title: 'Editais e Processos Seletivos', icon: FileText, badge: '2 novos' },
  { title: 'Calendário Acadêmico', icon: Calendar },
  { title: 'Notícias do Projeto', icon: Bell, badge: '5 novas' },
  { title: 'Mapa de Atuação', icon: MapPin },
];

const municipalities = [
  'Acarape',
  'Aracoiaba',
  'Aratuba',
  'Barreira',
  'Baturité',
  'Capistrano',
  'Guaramiranga',
  'Itapiúna',
  'Mulungu',
  'Ocara',
  'Pacoti',
  'Palmácia',
  'Redenção',
];

export default function Sidebar() {
  const [expandedMunicipalities, setExpandedMunicipalities] = useState(false);

  return (
    <div className="space-y-6">
      {/* Quick Access Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="bg-white rounded-lg shadow-md border border-gray-200 overflow-hidden">
        <div className="bg-[#3490dc] px-4 py-3">
          <h3 className="text-white font-semibold text-lg">Acesso Rápido</h3>
        </div>
        <div className="p-4 space-y-2">
          {quickLinks.map((link, index) => (
            <button
              key={index}
              className="w-full cursor-pointer flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg transition-colors duration-200 group">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-[#3490dc]/10 rounded-lg group-hover:bg-[#3490dc]/20 transition-colors">
                  <link.icon className="w-4 h-4 text-[#3490dc]" />
                </div>
                <span className="text-sm font-medium text-gray-700 text-left">
                  {link.title}
                </span>
              </div>
              <div className="flex items-center gap-2">
                {link.badge && (
                  <span className="text-xs bg-[#e8501e] text-white px-2 py-0.5 rounded-full font-medium">
                    {link.badge}
                  </span>
                )}
                <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-[#3490dc] transition-colors" />
              </div>
            </button>
          ))}
        </div>
      </motion.div>

      {/* Municipalities Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="bg-white rounded-lg shadow-md border border-gray-200 overflow-hidden">
        <div className="bg-gradient-to-r from-[#3490dc] to-[#155dfc] px-4 py-3">
          <h3 className="text-white font-semibold text-lg">
            Municípios Atendidos
          </h3>
        </div>
        <div className="p-4">
          <motion.div
            initial={false}
            animate={{ height: expandedMunicipalities ? 'auto' : 160 }}
            transition={{ duration: 0.4, ease: 'easeInOut' }}
            className="overflow-hidden relative">
            <div className="space-y-1">
              {municipalities.map((city, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 py-2 px-3 hover:bg-gray-50 rounded transition-colors">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#3490dc]" />
                  <span className="text-sm text-gray-700">{city}</span>
                </div>
              ))}
            </div>
          </motion.div>
          <AnimatePresence>
            {!expandedMunicipalities && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="relative -mt-16 h-16 bg-gradient-to-t from-white to-transparent pointer-events-none"
              />
            )}
          </AnimatePresence>
          <button
            onClick={() => setExpandedMunicipalities(!expandedMunicipalities)}
            className="mt-3 cursor-pointer w-full text-center text-sm font-medium text-[#3490dc] hover:text-[#155dfc] transition-colors">
            {expandedMunicipalities ? 'Ver menos' : 'Ver todos os municípios'}
          </button>
        </div>
      </motion.div>

      {/* Important Notice Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="bg-gradient-to-br from-[#e8501e] to-[#d14318] rounded-lg shadow-md p-4 text-white">
        <div className="flex items-start gap-3">
          <Bell className="w-5 h-5 flex-shrink-0 mt-0.5" />
          <div>
            <h4 className="font-semibold mb-1">Aviso Importante</h4>
            <p className="text-sm text-white/90 leading-relaxed">
              Inscrições abertas para programas de extensão. Prazo: 15/02/2025
            </p>
            <button className="mt-3 flex items-center gap-1 text-sm font-medium hover:underline">
              Saiba mais
              <ExternalLink className="w-3 h-3" />
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
