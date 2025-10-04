import React from 'react';
import { ExternalLink, Globe, Phone, Mail } from 'lucide-react';

export default function LoginFooter() {
  const links = [
    { label: 'Sobre o Projeto', href: '#' },
    { label: 'Documentação', href: '#' },
    { label: 'Suporte Técnico', href: '#' },
    { label: 'Privacidade', href: '#' },
    { label: 'Acessibilidade', href: '#' },
  ];

  return (
    <footer className="mt-16 pt-8 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* About section */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">
              Maciço de Baturité
            </h4>
            <p className="text-sm text-gray-600 leading-relaxed mb-4">
              Sistema acadêmico integrado para gestão de pesquisas e informações
              geográficas da região.
            </p>
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <Globe className="w-4 h-4" />
              <span>Versão 2.0.1</span>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Links Úteis</h4>
            <ul className="space-y-2">
              {links.slice(0, 3).map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-sm text-gray-600 hover:text-[#3490dc] transition-colors flex items-center gap-1 group">
                    {link.label}
                    <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Contato</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-sm text-gray-600">
                <Phone className="w-4 h-4 text-[#3490dc]" />
                <span>(85) 3101-9999</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-gray-600">
                <Mail className="w-4 h-4 text-[#3490dc]" />
                <span>contato@baturite.edu.br</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="py-6 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-500 text-center md:text-left">
              © 2024 Projeto Maciço de Baturité. Todos os direitos reservados.
            </p>
            <div className="flex gap-6">
              {links.slice(3).map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="text-sm text-gray-500 hover:text-gray-900 transition-colors">
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
