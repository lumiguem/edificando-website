import React from 'react';
import { PROJECTS } from '../constants';

const Projects: React.FC = () => {
    return (
        <div className="bg-gray-50 min-h-screen pb-20">
            <div className="bg-slate-900 text-white py-16 text-center">
                <h1 className="text-4xl font-bold mb-4">Nuestros Proyectos</h1>
                <p className="text-slate-400">Evidencia tangible de nuestra calidad y compromiso.</p>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {PROJECTS.map((project) => (
                        <div key={project.id} className="bg-white rounded-xl shadow-lg overflow-hidden group hover:-translate-y-1 transition-transform duration-300">
                            <div className="relative h-64 overflow-hidden">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute top-4 right-4 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-md">
                                    {project.category}
                                </div>
                            </div>
                            <div className="p-8">
                                <h2 className="text-2xl font-bold text-slate-900 mb-3">{project.title}</h2>
                                <p className="text-slate-600 leading-relaxed">
                                    {project.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Projects;