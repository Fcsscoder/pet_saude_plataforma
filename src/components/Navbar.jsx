import Logo from '../imgs/WhitePetSaude.png';
import Button from './ui/Button';
import { Menu } from 'lucide-react';

import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <header className="bg-primary w-full text-white no-underline duration-300 max-h-22 p-2.5">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 ">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to={'/'}>
            <img
              src={Logo}
              alt="Logo Pet Saúde Digital"
              className="w-10 md:w-12"
            />
          </Link>

          <Menu size={30} className="md:hidden" />
          {/* <img src={LogoName} className="w-20 h-auto" /> */}

          {/* Navegação Desktop */}
          <nav className="hidden md:flex space-x-8">
            <Link
              to={'/'}
              className="text-white hover:text-blue-100 px-3 py-2 text-lg font-medium transition-colors duration-200 ">
              Início
            </Link>
            {/* <Link
              to={'/cursos'}
              className="text-white hover:text-blue-100 px-3 py-2 text-lg font-medium transition-colors duration-200 ">
              Cursos
            </Link> */}
            <Link
              to={'/cursos'}
              className="text-white hover:text-blue-100 px-3 py-2 text-lg font-medium transition-colors duration-200 ">
              Cursos
            </Link>
            <div className="flex items-center">
              <Link to={'/entrar'}>
                <Button className="bg-white border-2 border-white text-primary font-medium rounded-full shadow-sm transition-all duration-200 hover:bg-primary hover:text-white">
                  Entrar
                </Button>
              </Link>
              <Button className="bg-secondary border-2 border-secondary   text-white font-medium rounded-full shadow-sm transition-all duration-200 ml-5 hover:bg-orange-400 hover:text-white">
                Inscreva-se
              </Button>
            </div>
          </nav>
          {/* Botão Entrar */}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
