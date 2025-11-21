import React from 'react';
import { Link } from 'react-router-dom';
import HeroCarousel from '../components/HeroCarousel';
import { Shield, Hammer, Clock, Award } from 'lucide-react';
import { PROJECTS } from '../constants';

const Home: React.FC = () => {
    return (
        <div className="bg-white">
            <HeroCarousel />

            {/* Features Section */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Por qué elegirnos</h2>
                        <p className="text-slate-600 max-w-2xl mx-auto">
                            Combinamos experiencia técnica, productos de alta calidad y un equipo certificado para garantizar resultados duraderos.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div className="p-6 bg-slate-50 rounded-xl text-center hover:shadow-lg transition-shadow duration-300">
                            <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                                <Shield size={32} />
                            </div>
                            <h3 className="text-xl font-semibold mb-2 text-slate-800">Garantía Asegurada</h3>
                            <p className="text-slate-600 text-sm">Respaldamos todos nuestros trabajos con garantías certificadas por escrito.</p>
                        </div>
                        <div className="p-6 bg-slate-50 rounded-xl text-center hover:shadow-lg transition-shadow duration-300">
                            <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                                <Hammer size={32} />
                            </div>
                            <h3 className="text-xl font-semibold mb-2 text-slate-800">Ejecución Experta</h3>
                            <p className="text-slate-600 text-sm">Personal técnico altamente capacitado y equipo especializado.</p>
                        </div>
                        <div className="p-6 bg-slate-50 rounded-xl text-center hover:shadow-lg transition-shadow duration-300">
                            <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                                <Clock size={32} />
                            </div>
                            <h3 className="text-xl font-semibold mb-2 text-slate-800">Cumplimiento</h3>
                            <p className="text-slate-600 text-sm">Respetamos rigurosamente los cronogramas de obra establecidos.</p>
                        </div>
                        <div className="p-6 bg-slate-50 rounded-xl text-center hover:shadow-lg transition-shadow duration-300">
                            <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                                <Award size={32} />
                            </div>
                            <h3 className="text-xl font-semibold mb-2 text-slate-800">Calidad Premium</h3>
                            <p className="text-slate-600 text-sm">Utilizamos solo materiales de marcas líderes en el mercado.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Recent Projects Preview */}
            <section className="py-20 bg-slate-900 text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-end mb-12">
                        <div>
                            <h2 className="text-3xl font-bold mb-2">Proyectos Recientes</h2>
                            <p className="text-slate-400">Una muestra de nuestra experiencia en campo.</p>
                        </div>
                        <Link to="/proyectos" className="hidden md:inline-block text-blue-400 hover:text-blue-300 font-medium">
                            Ver todos los proyectos &rarr;
                        </Link>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {PROJECTS.slice(0, 4).map((project) => (
                            <div key={project.id} className="group relative overflow-hidden rounded-lg aspect-[4/3] cursor-pointer">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                                    <span className="text-blue-400 text-xs font-bold uppercase tracking-wider mb-1">{project.category}</span>
                                    <h3 className="text-lg font-bold leading-tight">{project.title}</h3>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-8 text-center md:hidden">
                        <Link to="/proyectos" className="text-blue-400 hover:text-blue-300 font-medium">
                            Ver todos los proyectos &rarr;
                        </Link>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 bg-blue-600 relative overflow-hidden">
                {/* Decorative pattern */}
                <div className="absolute top-0 left-0 w-full h-full opacity-10">
                    <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1" />
                            </pattern>
                        </defs>
                        <rect width="100%" height="100%" fill="url(#grid)" />
                    </svg>
                </div>

                <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">¿Tiene un proyecto en mente?</h2>
                    <p className="text-xl text-blue-100 mb-10">
                        Nuestros ingenieros especialistas están listos para realizar una visita técnica y evaluar sus necesidades.
                    </p>
                    <Link
                        to="/contacto"
                        className="inline-block bg-white text-blue-600 px-10 py-4 rounded-full font-bold text-lg hover:bg-blue-50 transition-colors shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
                    >
                        Solicitar Visita Técnica
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default Home;