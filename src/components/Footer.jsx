import MinisterioLogo from '/imgs/footer/MinisterioSaudeLogo.svg';
import SUSLogo from '/imgs/footer/SUSLogo.svg';
import MinisterioNome from '/imgs/footer/MinisterioSaudeNome.svg';
import UnilabLogo from '/imgs/footer/UNILABLogo.svg';

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
    <footer className="pt-8 border-t bg-white border-gray-200">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          {/* About section */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">
              PET Saúde Digital
            </h4>

            <div className="flex items-center gap-2 text-sm text-gray-500">
              <Globe className="w-4 h-4" />
              <span>Versão 1.0</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-4">
              <img
                src={SUSLogo}
                alt="Logomarca do SUS"
                className="w-18 self-center"
              />
              <div className="flex flex-row items-center justify-center">
                <img
                  src={MinisterioLogo}
                  alt="Logomarca Ministério da Saúde"
                  className="w-10"
                />
                <img
                  src={MinisterioNome}
                  alt="Ministério da Saúde"
                  className="w-15 ml-3"
                />
              </div>
              <img
                src={UnilabLogo}
                alt="Logomarca Unilab"
                className="w-16 self-center"
              />
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
                    className="text-sm text-gray-600 hover:text-primary transition-colors flex items-center gap-1 group">
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
                <Phone className="w-4 h-4 text-primary" />
                <span>(85) 3101-9999</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-gray-600">
                <Mail className="w-4 h-4 text-primary" />
                <span>contato@exemplo.edu.br</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="py-6 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-500 text-center md:text-left">
              © 2025 PET Saúde Digital. Todos os direitos reservados.
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
