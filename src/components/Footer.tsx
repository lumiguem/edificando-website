import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Linkedin, Mail, Phone, MapPin, HardHat } from 'lucide-react';

const Footer: React.FC = () => {
    return (
        <footer className="bg-slate-900 text-white pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">

                    {/* Column 1: About */}
                    <div>
                        <div className="flex items-center mb-4">
                            <HardHat className="h-8 w-8 text-blue-500 mr-2" />
                            <span className="font-bold text-xl">EDIFIC<span className="text-blue-500">IANDO</span></span>
                        </div>
                        <p className="text-slate-400 text-sm leading-relaxed mb-4">
                            Líderes en soluciones de impermeabilización y reparación estructural. Protegemos y recuperamos sus activos con tecnología de punta.
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" className="text-slate-400 hover:text-white transition-colors"><Facebook size={20} /></a>
                            <a href="#" className="text-slate-400 hover:text-white transition-colors"><Instagram size={20} /></a>
                            <a href="#" className="text-slate-400 hover:text-white transition-colors"><Linkedin size={20} /></a>
                        </div>
                    </div>

                    {/* Column 2: Quick Links */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4 text-blue-400">Enlaces Rápidos</h3>
                        <ul className="space-y-2 text-sm text-slate-400">
                            <li><Link to="/" className="hover:text-white transition-colors">Inicio</Link></li>
                            <li><Link to="/productos" className="hover:text-white transition-colors">Productos</Link></li>
                            <li><Link to="/servicios" className="hover:text-white transition-colors">Servicios</Link></li>
                            <li><Link to="/proyectos" className="hover:text-white transition-colors">Proyectos</Link></li>
                            <li><Link to="/contacto" className="hover:text-white transition-colors">Solicitar Cotización</Link></li>
                        </ul>
                    </div>

                    {/* Column 3: Services */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4 text-blue-400">Nuestros Servicios</h3>
                        <ul className="space-y-2 text-sm text-slate-400">
                            <li>Impermeabilización de Techos</li>
                            <li>Refuerzo Estructural</li>
                            <li>Pisos Industriales</li>
                            <li>Inyección de Grietas</li>
                            <li>Juntas de Dilatación</li>
                        </ul>
                    </div>

                    {/* Column 4: Contact */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4 text-blue-400">Contacto</h3>
                        <ul className="space-y-4 text-sm text-slate-400">
                            <li className="flex items-start">
                                <MapPin className="h-5 w-5 mr-2 text-blue-500 flex-shrink-0" />
                                <span>Av. Construcción 123, Parque Industrial, Ciudad, CP 12345</span>
                            </li>
                            <li className="flex items-center">
                                <Phone className="h-5 w-5 mr-2 text-blue-500 flex-shrink-0" />
                                <span>+ 51 922 329 958</span>
                            </li>
                            <li className="flex items-center">
                                <Mail className="h-5 w-5 mr-2 text-blue-500 flex-shrink-0" />
                                <span>proyectos@edificando.com.pe</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-slate-800 pt-8 text-center text-slate-500 text-sm">
                    <p>&copy; {new Date().getFullYear()} EDIFICANDO. Todos los derechos reservados.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;