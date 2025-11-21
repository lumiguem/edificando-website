import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const slides = [
    {
        id: 1,
        image: 'https://media.istockphoto.com/id/1178531266/photo/two-workers-on-the-scaffolding-plastering-and-renovating-old-building.jpg?s=2048x2048&w=is&k=20&c=-37svHa0jBVexCEm7XvtWBq-WVD33dMzEVwJ8pOJLtA=',
        title: 'Protección Estructural Total',
        subtitle: 'Soluciones avanzadas en impermeabilización para grandes obras civiles.'
    },
    {
        id: 2,
        image: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80',
        title: 'Reparación de Concreto',
        subtitle: 'Tecnología de punta para la rehabilitación de estructuras dañadas.'
    },
    {
        id: 3,
        image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80',
        title: 'Pisos Industriales',
        subtitle: 'Resistencia y durabilidad para superficies de alto tráfico.'
    }
];

const HeroCarousel: React.FC = () => {
    const [current, setCurrent] = useState(0);

    const nextSlide = () => {
        setCurrent(current === slides.length - 1 ? 0 : current + 1);
    };

    const prevSlide = () => {
        setCurrent(current === 0 ? slides.length - 1 : current - 1);
    };

    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide();
        }, 5000);
        return () => clearInterval(interval);
    }, [current]); // Loop dependency

    return (
        <div className="relative h-[600px] w-full overflow-hidden bg-slate-900">
            {slides.map((slide, index) => (
                <div
                    key={slide.id}
                    className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                        index === current ? 'opacity-100' : 'opacity-0'
                    }`}
                >
                    <img
                        src={slide.image}
                        alt={slide.title}
                        className="w-full h-full object-cover opacity-60"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent" />

                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-center max-w-4xl px-6">
                            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight drop-shadow-lg animate-fade-in-up">
                                {slide.title}
                            </h1>
                            <p className="text-xl text-slate-200 mb-8 font-light drop-shadow-md max-w-2xl mx-auto">
                                {slide.subtitle}
                            </p>
                            <div className="flex justify-center gap-4">
                                <Link
                                    to="/servicios"
                                    className="bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition-all transform hover:scale-105 shadow-lg"
                                >
                                    Nuestros Servicios
                                </Link>
                                <Link
                                    to="/contacto"
                                    className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-slate-900 transition-all shadow-lg"
                                >
                                    Contáctanos
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            ))}

            {/* Controls */}
            <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/10 hover:bg-white/30 p-3 rounded-full text-white transition-all backdrop-blur-sm z-10"
            >
                <ChevronLeft size={32} />
            </button>
            <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/10 hover:bg-white/30 p-3 rounded-full text-white transition-all backdrop-blur-sm z-10"
            >
                <ChevronRight size={32} />
            </button>

            {/* Dots */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrent(index)}
                        className={`w-3 h-3 rounded-full transition-all ${
                            index === current ? 'bg-blue-500 w-8' : 'bg-white/50 hover:bg-white'
                        }`}
                    />
                ))}
            </div>
        </div>
    );
};

export default HeroCarousel;