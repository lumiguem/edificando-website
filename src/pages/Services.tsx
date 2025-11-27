import React, { useEffect, useState } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { api } from '../services/api';
import type {Service, ServiceType} from '../types.ts';
import { SERVICES as MOCK_SERVICES, SERVICE_TYPES as MOCK_TYPES } from '../constants';
import { Wrench, ShieldCheck, HardHat, Layers, LayoutGrid, Building2, CheckCircle2, Loader2 } from 'lucide-react';

const Services: React.FC = () => {
    const [searchParams] = useSearchParams();
    const typeId = searchParams.get('type');

    // API State
    const [services, setServices] = useState<Service[]>([]);
    const [serviceTypes, setServiceTypes] = useState<ServiceType[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                // 🔥 LLAMADA REAL A LA API
                const [svcData, typesData] = await Promise.all([
                    api.getServices(),        // <--- AQUÍ YA USA TU API REAL
                    api.getServiceTypes()     // <--- ESTE YA existía
                ]);

                setServices(svcData);
                setServiceTypes(typesData);

                setError(false);

            } catch (err) {
                console.error("Error fetching services", err);
                setError(true);

                // 🟡 fallback offline
                setServices(MOCK_SERVICES);
                setServiceTypes(MOCK_TYPES);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    // Auto-scroll cuando viene ?type=X
    useEffect(() => {
        if (!loading && typeId) {
            const element = document.getElementById(`service-type-${typeId}`);
            if (element) {
                setTimeout(() => {
                    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }, 100);
            }
        }
    }, [typeId, loading]);

    const getIcon = (id: number) => {
        switch (id) {
            case 1: return <Layers className="w-8 h-8 text-blue-600" />;
            case 2: return <ShieldCheck className="w-8 h-8 text-blue-600" />;
            case 3: return <Wrench className="w-8 h-8 text-blue-600" />;
            case 4: return <LayoutGrid className="w-8 h-8 text-blue-600" />;
            case 5: return <HardHat className="w-8 h-8 text-blue-600" />;
            case 6: return <Building2 className="w-8 h-8 text-blue-600" />;
            default: return <Wrench className="w-8 h-8 text-blue-600" />;
        }
    };

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-50">
                <Loader2 className="w-12 h-12 text-blue-600 animate-spin" />
            </div>
        );
    }

    return (
        <div className="bg-white min-h-screen">
            {/* Hero */}
            <div className="bg-slate-900 text-white py-20 relative overflow-hidden">
                <div className="absolute inset-0 bg-blue-900/20"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">Servicios Especializados</h1>
                    <p className="text-xl text-slate-300 max-w-3xl">
                        Ofrecemos soluciones integrales para el mantenimiento y protección de infraestructuras,
                        utilizando las tecnologías más avanzadas del mercado.
                    </p>

                    {error && (
                        <p className="mt-4 text-yellow-400 text-sm bg-yellow-400/10 p-2 rounded inline-block border border-yellow-400/30">
                            Modo Offline: Usando datos de respaldo
                        </p>
                    )}
                </div>
            </div>

            {/* Service Types Sections */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="space-y-24">

                    {serviceTypes.map((type) => {
                        const typeServices = services.filter((s) => s.tipoServicioId === type.id);
                        return (
                            <div key={type.id} id={`service-type-${type.id}`} className="scroll-mt-24">

                                {/* Header */}
                                <div className="flex items-center mb-8 border-b border-gray-100 pb-4">
                                    <div className="bg-blue-50 p-3 rounded-lg mr-4">
                                        {getIcon(type.id)}
                                    </div>

                                    <div>
                                        <h2 className="text-3xl font-bold text-slate-900">{type.nombre}</h2>
                                        <p className="text-slate-500 mt-1">{type.descripcion}</p>
                                    </div>
                                </div>

                                {/* Services Grid */}
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                    {typeServices.map((service) => (
                                        <div
                                            key={service.id}
                                            className="group bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden flex flex-col"
                                        >
                                            <div className="h-48 overflow-hidden relative">
                                                <img
                                                    src={service.imagen || 'https://via.placeholder.com/800x600'}
                                                    alt={service.nombre}
                                                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                                                />
                                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60"></div>
                                                <div className="absolute bottom-3 left-3 text-white font-bold text-lg">
                                                    Desde S/ {service.precio.toLocaleString()}
                                                </div>
                                            </div>

                                            <div className="p-6 flex-grow flex flex-col">
                                                <h3 className="text-xl font-bold text-slate-800 mb-3">{service.nombre}</h3>
                                                <p className="text-slate-600 text-sm leading-relaxed mb-6 flex-grow">
                                                    {service.descripcion}
                                                </p>

                                                <ul className="space-y-2 mb-6">
                                                    <li className="flex items-center text-xs text-slate-500">
                                                        <CheckCircle2 className="w-4 h-4 text-green-500 mr-2" /> Personal Certificado
                                                    </li>
                                                    <li className="flex items-center text-xs text-slate-500">
                                                        <CheckCircle2 className="w-4 h-4 text-green-500 mr-2" /> Garantía Extendida
                                                    </li>
                                                </ul>

                                                <Link
                                                    to="/contacto"
                                                    className="w-full block text-center bg-slate-50 text-slate-800 font-semibold py-3 rounded-lg hover:bg-blue-600 hover:text-white transition-colors"
                                                >
                                                    Cotizar Ahora
                                                </Link>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                {typeServices.length === 0 && (
                                    <p className="text-slate-500 italic">Próximamente más servicios en esta categoría.</p>
                                )}
                            </div>
                        );
                    })}

                </div>
            </div>
        </div>
    );
};

export default Services;
