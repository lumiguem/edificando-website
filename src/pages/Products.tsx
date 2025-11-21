import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Package, ArrowRight, Tag, Box } from 'lucide-react';
import { PRODUCT_CATEGORIES, PRODUCTS, BRANDS } from '../constants';

const Products: React.FC = () => {
    const [searchParams] = useSearchParams();
    const categoryId = searchParams.get('cat');
    const [activeCategory, setActiveCategory] = useState<number | null>(null);

    useEffect(() => {
        if (categoryId) {
            setActiveCategory(parseInt(categoryId));
        } else {
            setActiveCategory(null);
        }
    }, [categoryId]);

    const filteredProducts = activeCategory
        ? PRODUCTS.filter(p => p.id_categoria === activeCategory)
        : PRODUCTS;

    const getBrandName = (brandId: number) => {
        return BRANDS.find(b => b.id === brandId)?.nombre || 'Marca Genérica';
    };

    const getCategoryName = (catId: number) => {
        return PRODUCT_CATEGORIES.find(c => c.id === catId)?.nombre || 'Categoría';
    };

    return (
        <div className="bg-gray-50 min-h-screen pb-20">
            {/* Header */}
            <div className="bg-slate-900 text-white py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h1 className="text-4xl font-bold mb-4">Nuestros Productos</h1>
                    <p className="text-slate-400 max-w-2xl">
                        Distribuimos y aplicamos productos químicos para la construcción de las marcas más reconocidas a nivel mundial.
                    </p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
                <div className="flex flex-col lg:flex-row gap-8">

                    {/* Sidebar Filters */}
                    <div className="lg:w-1/4">
                        <div className="bg-white p-6 rounded-lg shadow-sm sticky top-24">
                            <h3 className="font-bold text-lg mb-4 text-slate-800 flex items-center">
                                <Package className="w-5 h-5 mr-2 text-blue-600" /> Categorías
                            </h3>
                            <ul className="space-y-2">
                                <li>
                                    <button
                                        onClick={() => setActiveCategory(null)}
                                        className={`w-full text-left px-3 py-2 rounded-md text-sm transition-colors ${
                                            activeCategory === null
                                                ? 'bg-blue-600 text-white font-medium shadow-md'
                                                : 'text-slate-600 hover:bg-slate-100'
                                        }`}
                                    >
                                        Todas las categorías
                                    </button>
                                </li>
                                {PRODUCT_CATEGORIES.map((cat) => (
                                    <li key={cat.id}>
                                        <button
                                            onClick={() => setActiveCategory(cat.id)}
                                            className={`w-full text-left px-3 py-2 rounded-md text-sm transition-colors ${
                                                activeCategory === cat.id
                                                    ? 'bg-blue-600 text-white font-medium shadow-md'
                                                    : 'text-slate-600 hover:bg-slate-100'
                                            }`}
                                        >
                                            {cat.nombre}
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Product Grid */}
                    <div className="lg:w-3/4">
                        <div className="mb-4 text-sm text-slate-500">
                            Mostrando {filteredProducts.length} productos
                            {activeCategory && <span> en <span className="font-bold text-slate-800">{getCategoryName(activeCategory)}</span></span>}
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                            {filteredProducts.map((product) => (
                                <div key={product.id} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg transition-shadow flex flex-col">
                                    <div className="h-48 bg-slate-200 relative">
                                        <img
                                            src={product.imagen}
                                            alt={product.nombre}
                                            className="w-full h-full object-cover"
                                        />
                                        <div className="absolute top-3 right-3 bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-bold shadow-sm">
                                            S/ {product.precio.toFixed(2)}
                                        </div>
                                    </div>
                                    <div className="p-5 flex-grow flex flex-col">
                                        <div className="flex justify-between items-start mb-2">
                                            <h3 className="text-lg font-bold text-slate-900 leading-tight">{product.nombre}</h3>
                                        </div>

                                        <div className="flex items-center gap-2 mb-3">
                        <span className="inline-flex items-center px-2 py-1 rounded-md bg-slate-100 text-xs font-medium text-slate-600">
                            <Tag className="w-3 h-3 mr-1" /> {getBrandName(product.id_marca)}
                        </span>
                                            <span className="inline-flex items-center px-2 py-1 rounded-md bg-green-50 text-xs font-medium text-green-700">
                            <Box className="w-3 h-3 mr-1" /> Stock: {product.stock}
                        </span>
                                        </div>

                                        <p className="text-slate-600 mb-4 text-sm leading-relaxed line-clamp-3 flex-grow">
                                            {product.descripcion}
                                        </p>

                                        <button className="w-full mt-auto border border-blue-600 text-blue-600 py-2 px-4 rounded-lg hover:bg-blue-600 hover:text-white transition-colors flex items-center justify-center font-medium text-sm group">
                                            Solicitar Cotización <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {filteredProducts.length === 0 && (
                            <div className="text-center py-20 bg-white rounded-xl border border-dashed border-gray-300">
                                <Package className="w-12 h-12 text-slate-300 mx-auto mb-4" />
                                <p className="text-slate-500">No se encontraron productos en esta categoría.</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Products;