// Imagens
import WhitePetSaudeLogo from '/imgs/WhitePetSaude.png';

//UI
import Button from './ui/Button';

//Icons
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

//Módulos
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    console.log(isMenuOpen);
    return;
  };

  const menuOptions = [
    { label: 'Início', path: '/' },
    {
      label: 'Entrar',
      path: '/entrar',
    },
    { label: 'Nossos cursos', path: '/cursos' },
  ];

  return (
    <header className="bg-primary w-full text-white no-underline duration-300 max-h-22 p-2.5">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 ">
        <div className="flex justify-between items-center">
          {/* WhitePetSaudeLogo */}
          <Link to={'/'}>
            <img
              src={WhitePetSaudeLogo}
              alt="Logo Pet Saúde Digital"
              className="w-10 md:w-12"
            />
          </Link>
          {/*Navegação Mobile */}
          <Menu size={30} className="md:hidden" onClick={handleMenu} />
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                initial={{ x: '-100%' }}
                animate={{ x: -60 }}
                exit={{ x: '-100%' }}
                transition={{ duration: 0.4 }}
                className="fixed inset-0 bg-secondary z-[998] flex flex-col justify-center gap-8">
                <ul className="absolute top-25 left-20">
                  <Link to={'/'}>
                    <img
                      src={Logo}
                      alt="Logo Pet Saúde Digital"
                      className="w-15 md:w-12"
                    />
                  </Link>
                  {menuOptions.map((option, index) => (
                    <li key={index} className="text-2xl my-10">
                      <Link
                        to={option.path}
                        className="text-white hover:text-primary-color duration-200"
                        onClick={handleMenu}>
                        {option.label}
                      </Link>
                    </li>
                  ))}
                </ul>
                <X
                  className="absolute top-0 flex right-0 m-3 text-2xl cursor-pointer text-white hover:text-primary-color duration-200"
                  onClick={handleMenu}
                />
              </motion.div>
            )}
          </AnimatePresence>
          {/* <img src={LogoName} className="w-20 h-auto" /> */}

          {/* Navegação Desktop */}
          <nav className="hidden md:flex space-x-8">
            <Link
              to={'/'}
              className="text-white hover:text-blue-100 px-3 py-2 text-lg font-medium transition-colors duration-200 ">
              Início
            </Link>
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
              <Button className="bg-secondary border-secondary py-2 text-white font-medium rounded-full shadow-sm transition-all duration-200 ml-5 hover:bg-darken-secondary hover:text-white">
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
