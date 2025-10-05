import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

//Imagens Carousel
import Carousel1 from '/imgs/carousel/Carousel1.png';
import Carousel2 from '/imgs/carousel/Carousel2.jpg';
import Carousel3 from '/imgs/carousel/Carousel3.webp';

const slides = [
  {
    id: 1,
    title: 'PET Saúde Digital',
    subtitle:
      'Promovendo desenvolvimento regional através da educação, pesquisa e extensão',
    image: Carousel1,
    highlight: 'Educação e Desenvolvimento',
  },
  {
    id: 2,
    title: 'Ações Integradas nos Municípios',
    subtitle: 'Conectando universidade e comunidade para transformação social',
    image: Carousel2,
    highlight: 'Impacto Social',
  },
  {
    id: 3,
    title: 'Pesquisa e Inovação Regional',
    subtitle:
      'Desenvolvendo soluções para os desafios locais do Maciço de Baturité',
    image: Carousel3,
    highlight: 'Ciência e Tecnologia',
  },
];

export default function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [autoPlayKey, setAutoPlayKey] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIsTransitioning(true);
      setDirection(1);
      setCurrentSlide((prev) => (prev + 1) % slides.length);
      setTimeout(() => setIsTransitioning(false), 500);
    }, 6000);

    return () => clearInterval(timer);
  }, [autoPlayKey]);

  const goToSlide = (index) => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setDirection(index > currentSlide ? 1 : -1);
    setCurrentSlide(index);
    setAutoPlayKey((prev) => prev + 1);
    setTimeout(() => setIsTransitioning(false), 500);
  };

  const nextSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setDirection(1);
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setAutoPlayKey((prev) => prev + 1);
    setTimeout(() => setIsTransitioning(false), 500);
  };

  const prevSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setDirection(-1);
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setAutoPlayKey((prev) => prev + 1);
    setTimeout(() => setIsTransitioning(false), 500);
  };

  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? '100%' : '-100%',
    }),
    center: {
      x: 0,
    },
    exit: (direction) => ({
      x: direction < 0 ? '100%' : '-100%',
    }),
  };

  return (
    <div className="relative h-[400px] md:h-[500px] overflow-hidden bg-gray-900">
      {/* Container para as imagens */}
      <div className="absolute inset-0 bg-white">
        {/* Camada de animação */}
        <AnimatePresence initial={false} custom={direction}>
          <motion.img
            key={currentSlide}
            src={slides[currentSlide].image}
            alt={slides[currentSlide].title}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: 'tween', duration: 0.5, ease: 'easeInOut' },
            }}
            className="absolute inset-0 w-full h-full object-cover [object-position:50%_30%]"
          />
        </AnimatePresence>
      </div>

      {/* Overlay azul fixo */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#3490dc]/95 via-[#3490dc]/20 to-transparent pointer-events-none" />

      {/* Content */}
      <div className="absolute inset-0 flex items-center pointer-events-none">
        <div className="max-w-7xl mx-auto px-4 w-full">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="max-w-2xl text-white">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="mb-4">
                <span className="inline-block px-4 py-1.5 bg-[#e8501e] text-white text-sm font-semibold rounded-full">
                  {slides[currentSlide].highlight}
                </span>
              </motion.div>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-3xl md:text-5xl font-bold mb-4 leading-tight">
                {slides[currentSlide].title}
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-lg md:text-xl text-gray-100 leading-relaxed">
                {slides[currentSlide].subtitle}
              </motion.p>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="hidden lg:block absolute cursor-pointer left-4 top-1/2 -translate-y-1/2 z-10 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-2 rounded-full transition-all duration-200"
        aria-label="Slide anterior">
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={nextSlide}
        className="hidden lg:block absolute right-4 top-1/2 cursor-pointer -translate-y-1/2 z-10 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-2 rounded-full transition-all duration-200"
        aria-label="Próximo slide">
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`transition-all duration-300 rounded-full cursor-pointer ${
              index === currentSlide
                ? 'w-8 h-2 bg-white'
                : 'w-2 h-2 bg-white/50 hover:bg-white/75'
            }`}
            aria-label={`Ir para slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
