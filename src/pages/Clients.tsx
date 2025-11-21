import React from 'react';
import { CLIENTS, CLIENT_TYPES, TESTIMONIALS } from '../constants';
import { Quote, Building2, User, MapPin } from 'lucide-react';

const Clients: React.FC = () => {

    const getClientTypeName = (id: number) => {
        return CLIENT_TYPES.find(t => t.id === id)?.nombre;
    };

    // Group clients for display (Optional, but just listing them for now)
    const businessClients = CLIENTS.filter(c => c.id_tipo_cliente === 2 || c.id_tipo_cliente === 3);
    const individualClients = CLIENTS.filter(c => c.id_tipo_cliente === 1);

    return (
        <div className="bg-white min-h-screen pb-20">
            <div className="bg-slate-900 text-white py-16 text-center">
                <h1 className="text-4xl font-bold mb-4">Nuestros Clientes</h1>
                <p className="text-slate-400">Empresas y personas que confían en nuestra experiencia.</p>
            </div>

            {/* Client List Section */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

                {/* Business Clients */}
                <div className="mb-16">
                    <h2 className="text-2xl font-bold text-slate-800 mb-8 border-b border-gray-200 pb-2 flex items-center">
                        <Building2 className="mr-2 text-blue-600" /> Clientes Corporativos y Distribuidores
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {businessClients.map((client) => (
                            <div key={client.id} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all">
                                <div className="flex items-start justify-between mb-2">
                                    <h3 className="font-bold text-lg text-slate-800">{client.nombre}</h3>
                                    <span className="text-xs font-medium px-2 py-1 bg-blue-50 text-blue-700 rounded-full">
                                {getClientTypeName(client.id_tipo_cliente)}
                            </span>
                                </div>
                                <div className="text-sm text-slate-500 space-y-2">
                                    <p className="flex items-center"><MapPin className="w-4 h-4 mr-2" /> {client.direccion}</p>
                                    <p className="pl-6 truncate">{client.correo}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Individual Clients */}
                <div>
                    <h2 className="text-2xl font-bold text-slate-800 mb-8 border-b border-gray-200 pb-2 flex items-center">
                        <User className="mr-2 text-blue-600" /> Clientes Particulares
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {individualClients.map((client) => (
                            <div key={client.id} className="bg-slate-50 p-5 rounded-lg border border-slate-100">
                                <h3 className="font-bold text-slate-800 mb-1">{client.nombre}</h3>
                                <p className="text-xs text-slate-500 mb-2">{client.direccion}</p>
                            </div>
                        ))}
                    </div>
                </div>

            </div>

            {/* Testimonials */}
            <div className="bg-blue-50 py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-center text-slate-900 mb-16">Testimonios</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {TESTIMONIALS.map((t) => (
                            <div key={t.id} className="bg-white p-8 rounded-2xl shadow-md relative">
                                <Quote className="absolute top-6 left-6 text-blue-100 h-12 w-12 -z-0" />
                                <p className="text-slate-600 italic mb-6 relative z-10">"{t.text}"</p>
                                <div className="border-t border-gray-100 pt-4">
                                    <p className="font-bold text-slate-900">{t.name}</p>
                                    <p className="text-sm text-blue-600">{t.company}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Clients;