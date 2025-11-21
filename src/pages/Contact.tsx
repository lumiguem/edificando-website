import React from 'react';
import ContactInfo from '../components/ContactInfo';
import ContactForm from '../components/ContactForm';

const Contact: React.FC = () => {
    return (
        <div className="bg-gray-50 min-h-screen pb-20">
            <div className="bg-slate-900 text-white py-16 text-center">
                <h1 className="text-4xl font-bold mb-4">Contáctenos</h1>
                <p className="text-slate-400">Estamos listos para asesorarle en su próximo proyecto.</p>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Using Components makes the main page cleaner and separates concerns */}
                    <ContactInfo />
                    <ContactForm />
                </div>
            </div>
        </div>
    );
};

export default Contact;