import React, { useState } from 'react';
import { Send, CheckCircle } from 'lucide-react';

const ContactForm: React.FC = () => {
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Simulate form submission logic here
        setTimeout(() => {
            setSubmitted(true);
        }, 1000);
    };

    if (submitted) {
        return (
            <div className="lg:col-span-2">
                <div className="bg-white p-8 rounded-xl shadow-lg h-full">
                    <div className="h-full flex flex-col items-center justify-center text-center min-h-[400px]">
                        <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6">
                            <CheckCircle size={40} />
                        </div>
                        <h3 className="text-2xl font-bold text-slate-800 mb-2">¡Mensaje Enviado!</h3>
                        <p className="text-slate-600 max-w-md">
                            Gracias por contactarnos. Uno de nuestros asesores comerciales se pondrá en contacto con usted a la brevedad.
                        </p>
                        <button
                            onClick={() => setSubmitted(false)}
                            className="mt-8 text-blue-600 font-medium hover:underline"
                        >
                            Enviar otro mensaje
                        </button>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="lg:col-span-2">
            <div className="bg-white p-8 rounded-xl shadow-lg">
                <h3 className="text-2xl font-bold text-slate-800 mb-6">Envíenos un mensaje</h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">Nombre Completo</label>
                            <input
                                type="text"
                                id="name"
                                required
                                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors outline-none"
                                placeholder="Juan Pérez"
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">Correo Electrónico</label>
                            <input
                                type="email"
                                id="email"
                                required
                                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors outline-none"
                                placeholder="juan@empresa.com"
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-2">Teléfono</label>
                            <input
                                type="tel"
                                id="phone"
                                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors outline-none"
                                placeholder="+1 (555) 000-0000"
                            />
                        </div>
                        <div>
                            <label htmlFor="subject" className="block text-sm font-medium text-slate-700 mb-2">Asunto</label>
                            <select
                                id="subject"
                                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors outline-none bg-white"
                            >
                                <option>Cotización de Producto</option>
                                <option>Servicio de Impermeabilización</option>
                                <option>Visita Técnica</option>
                                <option>Otro</option>
                            </select>
                        </div>
                    </div>

                    <div>
                        <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">Mensaje</label>
                        <textarea
                            id="message"
                            rows={5}
                            required
                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors outline-none resize-none"
                            placeholder="Describa su proyecto o necesidad..."
                        ></textarea>
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white font-bold py-4 rounded-lg hover:bg-blue-700 transition-all transform hover:translate-y-[-2px] shadow-lg flex items-center justify-center"
                    >
                        Enviar Mensaje <Send className="ml-2 h-5 w-5" />
                    </button>
                </form>
            </div>
        </div>
    );
};

export default ContactForm;