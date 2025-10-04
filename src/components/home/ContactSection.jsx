import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import SectionHeader from './SectionHeader';

const contactInfo = [
  {
    icon: Mail,
    label: 'E-mail',
    value: 'contato@macicobaturite.edu.br',
    color: '#3490dc',
  },
  {
    icon: Phone,
    label: 'Telefone',
    value: '(85) 3333-4444',
    color: '#155dfc',
  },
  {
    icon: MapPin,
    label: 'Endereço',
    value: 'Região do Maciço de Baturité - Ceará',
    color: '#e8501e',
  },
  {
    icon: Clock,
    label: 'Horário de Atendimento',
    value: 'Segunda a Sexta: 8h às 17h',
    color: '#3490dc',
  },
];

export default function ContactSection() {
  return (
    <section>
      <SectionHeader
        title="Contato e Suporte"
        subtitle="Entre em contato conosco para mais informações"
      />

      <div className="bg-gradient-to-br from-[#3490dc] to-[#155dfc] rounded-lg shadow-lg p-8 mt-8 text-white">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {contactInfo.map((info, index) => (
            <div key={index} className="flex items-start gap-4">
              <div className="bg-white/20 backdrop-blur-sm p-3 rounded-lg flex-shrink-0">
                <info.icon className="w-5 h-5 text-white" />
              </div>
              <div>
                <div className="text-sm text-white/80 mb-1">{info.label}</div>
                <div className="font-semibold">{info.value}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="pt-6 border-t border-white/20">
          <h3 className="text-lg font-semibold mb-4">Envie sua Mensagem</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Seu nome"
              className="px-4 py-3 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50"
            />
            <input
              type="email"
              placeholder="Seu e-mail"
              className="px-4 py-3 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50"
            />
            <textarea
              rows="4"
              placeholder="Sua mensagem"
              className="md:col-span-2 px-4 py-3 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50 resize-none"
            />
            <button className="md:col-span-2 cursor-pointer bg-[#e8501e] hover:bg-[#d14318] text-white font-semibold py-3 px-6 rounded-lg transition-colors">
              Enviar Mensagem
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
