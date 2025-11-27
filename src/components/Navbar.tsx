import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, ChevronDown, HardHat } from 'lucide-react';
import { api } from '../services/api.ts';
import type {Category, ServiceType} from "../types.ts";

const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [productDropdownOpen, setProductDropdownOpen] = useState(false);
    const [serviceDropdownOpen, setServiceDropdownOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    // State for API data
    const [categories, setCategories] = useState<Category[]>([]);
    const [serviceTypes, setServiceTypes] = useState<ServiceType[]>([]);


    const location = useLocation();
    const navigate = useNavigate();
    const [showNavbar, setShowNavbar] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);


    // Fetch menu data from API
    useEffect(() => {
        const fetchData = async () => {
            try {
                const [catsData, typesData] = await Promise.all([
                    api.getProductCategories(),
                    api.getServiceTypes(),
                ]);
                if (catsData.length > 0) setCategories(catsData);
                if (typesData.length > 0) setServiceTypes(typesData);
            } catch (error) {
                console.error("Error fetching menu data, using fallback:", error);
                // Fallback is already initial state
            }
        };
        fetchData();
    }, []);
    // Handle scroll effect
    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            // Mostrar navbar si se está haciendo scroll hacia arriba
            if (currentScrollY < lastScrollY) {
                setShowNavbar(true);
            } else {
                // Ocultar navbar si está scroll hacia abajo
                if (currentScrollY > 50) {
                    setShowNavbar(false);
                }
            }

            setLastScrollY(currentScrollY);
            setScrolled(currentScrollY > 20); // Mantiene tu cambio de color
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [lastScrollY]);


    // Close mobile menu on route change
    useEffect(() => {
        setIsOpen(false);
        setProductDropdownOpen(false);
        setServiceDropdownOpen(false);
    }, [location]);

    const handleNavigate = (path: string, hash?: string) => {
        navigate(path);
        if (hash) {
            // Small timeout to ensure navigation happens first
            setTimeout(() => {
                const element = document.getElementById(hash);
                if (element) element.scrollIntoView({ behavior: 'smooth' });
            }, 100);
        }
        setIsOpen(false);
        setProductDropdownOpen(false);
        setServiceDropdownOpen(false);
    };

    const navClasses = `fixed w-full z-50 transition-all duration-700 ease-in-out ${
        scrolled ? 'bg-white shadow-lg py-2' : 'bg-[#0054a0] backdrop-blur-md py-4 text-white'
    } ${showNavbar ? 'translate-y-0' : '-translate-y-full'}`;



    const textClass = scrolled ? 'text-slate-800 hover:text-blue-600' : 'text-gray-100 hover:text-blue-300';
    const logoClass = scrolled ? 'text-blue-700' : 'text-white';

    return (
        <nav className={navClasses}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-12">

                    <div className="flex-shrink-0 flex items-center cursor-pointer" onClick={() => handleNavigate('/')}>
                        {/*<img src="img/logo_edificando.png" alt="Edificando" className="h-7"/>*/}
                        <HardHat className={`h-8 w-8 mr-2 ${logoClass}`}/>
                        <span className={`font-bold text-xl tracking-tight ${logoClass}`}>
              EDIFI<span className={scrolled ? 'text-slate-600' : 'text-blue-400'}>CANDO</span>
            </span>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex space-x-8 items-center">
                        <Link to="/" className={`font-medium transition-colors ${textClass}`}>Inicio</Link>

                        {/* Products Dropdown */}
                        <div
                            className="relative group h-full flex items-center"
                            onMouseEnter={() => setProductDropdownOpen(true)}
                            onMouseLeave={() => setProductDropdownOpen(false)}
                        >
                            <button
                                onClick={() => handleNavigate('/productos')}
                                className={`flex items-center font-medium transition-colors ${textClass}`}
                            >
                                Productos <ChevronDown className="ml-1 h-4 w-4"/>
                            </button>

                            {productDropdownOpen && (
                                <div className="absolute top-full left-0 w-72 pt-2 animate-fade-in-down">
                                    <div
                                        className="bg-white rounded-md shadow-xl py-2 border border-gray-100 overflow-hidden max-h-96 overflow-y-auto">
                                        {categories.map((cat) => (
                                            <Link
                                                key={cat.id}
                                                to={`/productos?cat=${cat.id}`}
                                                className="block px-4 py-3 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-700 border-b border-gray-50 last:border-0"
                                            >
                                                {cat.nombre}
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                        {/* Services Dropdown */}
                        <div
                            className="relative group h-full flex items-center"
                            onMouseEnter={() => setServiceDropdownOpen(true)}
                            onMouseLeave={() => setServiceDropdownOpen(false)}
                        >
                            <button
                                onClick={() => handleNavigate('/servicios')}
                                className={`flex items-center font-medium transition-colors ${textClass}`}
                            >
                                Servicios <ChevronDown className="ml-1 h-4 w-4"/>
                            </button>

                            {serviceDropdownOpen && (
                                <div className="absolute top-full left-0 w-72 pt-2 animate-fade-in-down">
                                    <div
                                        className="bg-white rounded-md shadow-xl py-2 border border-gray-100 overflow-hidden">
                                        {serviceTypes.map((service) => (
                                            <Link
                                                key={service.id}
                                                to={`/servicios?type=${service.id}`}
                                                className="block px-4 py-3 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-700 border-b border-gray-50 last:border-0"
                                            >
                                                {service.nombre}
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>

                        <Link to="/proyectos" className={`font-medium transition-colors ${textClass}`}>Proyectos</Link>
                        <Link to="/clientes" className={`font-medium transition-colors ${textClass}`}>Clientes</Link>

                        <Link
                            to="/contacto"
                            className="px-5 py-2 rounded-full bg-blue-600 text-white font-medium hover:bg-blue-700 transition-all transform hover:scale-105 shadow-md"
                        >
                            Contacto
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className={`p-2 rounded-md focus:outline-none ${textClass}`}
                        >
                            {isOpen ? <X className="h-6 w-6"/> : <Menu className="h-6 w-6"/>}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-white shadow-xl border-t border-gray-100 absolute w-full max-h-[90vh] overflow-y-auto">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        <Link to="/" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50">Inicio</Link>

                        {/* Mobile Products Accordion */}
                        <div className="border-t border-gray-100 pt-2 mt-2">
                            <div
                                className="flex justify-between items-center px-3 py-2 text-base font-medium text-gray-700"
                                onClick={() => setProductDropdownOpen(!productDropdownOpen)}
                            >
                                <span>Productos</span>
                                <ChevronDown className={`h-4 w-4 transform transition-transform ${productDropdownOpen ? 'rotate-180' : ''}`} />
                            </div>
                            {productDropdownOpen && (
                                <div className="pl-6 bg-gray-50 py-2 space-y-1">
                                    <Link to="/productos" className="block px-3 py-2 text-sm font-semibold text-blue-600">Ver Todos</Link>
                                    {categories.map((cat) => (
                                        <Link
                                            key={cat.id}
                                            to={`/productos?cat=${cat.id}`}
                                            className="block px-3 py-2 text-sm text-gray-600 hover:text-blue-600"
                                        >
                                            {cat.nombre}
                                        </Link>
                                    ))}
                                </div>
                            )}
                        </div>

                        {/* Mobile Services Accordion */}
                        <div className="border-t border-gray-100 pt-2 mt-2">
                            <div
                                className="flex justify-between items-center px-3 py-2 text-base font-medium text-gray-700"
                                onClick={() => setServiceDropdownOpen(!serviceDropdownOpen)}
                            >
                                <span>Servicios</span>
                                <ChevronDown className={`h-4 w-4 transform transition-transform ${serviceDropdownOpen ? 'rotate-180' : ''}`} />
                            </div>
                            {serviceDropdownOpen && (
                                <div className="pl-6 bg-gray-50 py-2 space-y-1">
                                    <Link to="/servicios" className="block px-3 py-2 text-sm font-semibold text-blue-600">Ver Todos</Link>
                                    {serviceTypes.map((svc) => (
                                        <Link
                                            key={svc.id}
                                            to={`/servicios?type=${svc.id}`}
                                            className="block px-3 py-2 text-sm text-gray-600 hover:text-blue-600"
                                        >
                                            {svc.nombre}
                                        </Link>
                                    ))}
                                </div>
                            )}
                        </div>

                        <Link to="/proyectos" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50">Proyectos</Link>
                        <Link to="/clientes" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50">Clientes</Link>
                        <Link to="/contacto" className="block px-3 py-2 mt-4 text-center rounded-md text-base font-bold bg-blue-600 text-white hover:bg-blue-700">Contacto</Link>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;