import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Products from './pages/Products';
import Services from './pages/Services';
import Projects from './pages/Projects';
import Clients from './pages/Clients';
import Contact from './pages/Contact';

const App: React.FC = () => {
    return (
        <HashRouter>
            <div className="flex flex-col min-h-screen">
                <Navbar />
                <main className="flex-grow pt-16">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/productos" element={<Products />} />
                        <Route path="/servicios" element={<Services />} />
                        <Route path="/proyectos" element={<Projects />} />
                        <Route path="/clientes" element={<Clients />} />
                        <Route path="/contacto" element={<Contact />} />
                    </Routes>
                </main>
                <Footer />
            </div>
        </HashRouter>
    );
};

export default App;