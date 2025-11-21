import React, { useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { SERVICE_TYPES, SERVICES } from '../constants';
import { Wrench, ShieldCheck, HardHat, Layers, LayoutGrid, Building2, CheckCircle2 } from 'lucide-react';

const Services: React.FC = () => {
    const [searchParams] = useSearchParams();
    const typeId = searchParams.get('type');

    useEffect(() => {
        if (typeId) {
            const element = document.getElementById(`service-type-${typeId}`);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        }
    }, [typeId]);

    const getIcon = (id: number) => {
        switch (id) {
            case 1: return <Layers className="w-8 h-8 text-blue-600" />; // Techos
            case 2: return <ShieldCheck className="w-8 h-8 text-blue-600" />; // Impermeabilización
            case 3: return <Wrench className="w-8 h-8 text-blue-600" />; // Reparación
            case 4: return <LayoutGrid className="w-8 h-8 text-blue-600" />; // Juntas
            case 5: return <HardHat className="w-8 h-8 text-blue-600" />; // Pisos
            case 6: return <Building2 className="w-8 h-8 text-blue-600" />; // Obras Civiles
            default: return <Wrench className="w-8 h-8 text-blue-600" />;
        }
    };

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
                </div>
            </div>

            {/* Service Types Sections */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="space-y-24">
                    {SERVICE_TYPES.map((type) => {
                        const typeServices = SERVICES.filter(s => s.id_tipo_servicio === type.id);

                        return (
                            <div key={type.id} id={`service-type-${type.id}`} className="scroll-mt-24">
                                <div className="flex items-center mb-8 border-b border-gray-100 pb-4">
                                    <div className="bg-blue-50 p-3 rounded-lg mr-4">
                                        {getIcon(type.id)}
                                    </div>
                                    <div>
                                        <h2 className="text-3xl font-bold text-slate-900">{type.nombre}</h2>
                                        <p className="text-slate-500 mt-1">{type.descripcion}</p>
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                    {typeServices.map((service) => (
                                        <div key={service.id} className="group bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden flex flex-col">
                                            <div className="h-48 overflow-hidden relative">
                                                <img
                                                    src={service.imagen}
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