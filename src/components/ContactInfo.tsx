import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const ContactInfo: React.FC = () => {
    return (
        <div className="lg:col-span-1 space-y-6">
            <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-xl font-bold text-slate-800 mb-6">Información de Contacto</h3>

                <div className="space-y-6">
                    <div className="flex items-start">
                        <div className="bg-blue-100 p-3 rounded-full text-blue-600 mr-4">
                            <Phone size={20} />
                        </div>
                        <div>
                            <p className="text-sm text-slate-500 font-semibold">Llámanos</p>
                            <p className="text-slate-800 font-medium">+ 51 922 329 958</p>
                        </div>
                    </div>

                    <div className="flex items-start">
                        <div className="bg-blue-100 p-3 rounded-full text-blue-600 mr-4">
                            <Mail size={20} />
                        </div>
                        <div>
                            <p className="text-sm text-slate-500 font-semibold">Escríbenos</p>
                            <p className="text-slate-800 font-medium">proyectos@edificando.com.pe</p>
                        </div>
                    </div>

                    <div className="flex items-start">
                        <div className="bg-blue-100 p-3 rounded-full text-blue-600 mr-4">
                            <MapPin size={20} />
                        </div>
                        <div>
                            <p className="text-sm text-slate-500 font-semibold">Visítanos</p>
                            <p className="text-slate-800 font-medium">Av. Construcción 123</p>
                            <p className="text-slate-800 font-medium">Parque Industrial, Ciudad</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm h-64 bg-slate-200 flex items-center justify-center">
                {/* Placeholder map */}
                <p className="text-slate-500 font-medium flex items-center">
                    <MapPin className="mr-2" /> Mapa de Ubicación
                </p>
            </div>
        </div>
    );
};

export default ContactInfo;