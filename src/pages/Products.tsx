import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Package, ArrowRight, Tag, Box, Loader2 } from 'lucide-react';
import { api } from '../services/api';
import type { Product, Category, Brand } from '../types';
import { PRODUCTS as MOCK_PRODUCTS, PRODUCT_CATEGORIES as MOCK_CATEGORIES, BRANDS as MOCK_BRANDS } from '../constants';

const Products: React.FC = () => {
    const [searchParams] = useSearchParams();
    const categoryId = searchParams.get('cat');

    const [activeCategory, setActiveCategory] = useState<number | null>(null);

    const [products, setProducts] = useState<Product[]>([]);
    const [categories, setCategories] = useState<Category[]>([]);
    const [brands, setBrands] = useState<Brand[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    // PAGINATION
    const [page, setPage] = useState(0);
    const [pageSize] = useState(8);
    const [totalPages, setTotalPages] = useState(1);

    // Leer parámetro ?cat=
    useEffect(() => {
        if (categoryId) setActiveCategory(parseInt(categoryId));
        else setActiveCategory(null);
        setPage(0); // resetear a primera página cuando cambia la categoría
    }, [categoryId]);

    // Cargar categorías y marcas
    useEffect(() => {
        const fetchBase = async () => {
            setLoading(true);
            try {
                const [catData, brandData] = await Promise.all([
                    api.getProductCategories(),
                    api.getBrands()
                ]);

                setCategories(catData);
                setBrands(brandData);
                setError(false);
            } catch (err) {
                console.error("Error cargando categorías/marcas, usando mocks", err);
                setError(true);
                setCategories(MOCK_CATEGORIES);
                setBrands(MOCK_BRANDS);
            }
        };

        fetchBase();
    }, []);

    // Cargar productos paginados
    useEffect(() => {
        const fetchProducts = async () => {
            setLoading(true);

            try {
                let response;

                if (activeCategory) {
                    response = await api.getProductsByCategoryPaged(
                        activeCategory,
                        page,
                        pageSize
                    );
                } else {
                    response = await api.getProductsPaged(page, pageSize);
                }

                setProducts(response.items);
                setTotalPages(response.totalPages);
                setError(false);
            } catch (err) {
                console.error("Error fetching products, usando mocks", err);
                setError(true);
                setProducts(MOCK_PRODUCTS);
                setTotalPages(1);
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, [activeCategory, page]);

    const getBrandName = (id: number) =>
        brands.find(b => b.id === id)?.nombre || "Marca";

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-50">
                <Loader2 className="w-12 h-12 text-blue-600 animate-spin" />
            </div>
        );
    }

    return (
        <div className="bg-gray-50 min-h-screen pb-20">
            {/* Header */}
            <div className="bg-slate-900 text-white py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h1 className="text-4xl font-bold mb-4">Nuestros Productos</h1>
                    <p className="text-slate-400 max-w-2xl">
                        Distribuimos y aplicamos productos químicos para la construcción de las mejores marcas.
                    </p>
                    {error && (
                        <p className="mt-4 text-yellow-400 bg-yellow-400/10 p-2 rounded border border-yellow-400/30 inline-block text-sm">
                            Nota: Mostrando datos de demostración (API desconectada)
                        </p>
                    )}
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
                <div className="flex flex-col lg:flex-row gap-8">

                    {/* Sidebar */}
                    <aside className="lg:w-1/4">
                        <div className="bg-white p-6 rounded-lg shadow-sm sticky top-24">
                            <h3 className="font-bold text-lg mb-4 flex items-center text-slate-800">
                                <Package className="w-5 h-5 mr-2 text-blue-600" /> Categorías
                            </h3>

                            <ul className="space-y-2">
                                <li>
                                    <button
                                        onClick={() => {
                                            setActiveCategory(null);
                                            setPage(0);
                                        }}
                                        className={`w-full text-left px-3 py-2 rounded-md text-sm ${
                                            activeCategory === null
                                                ? 'bg-blue-600 text-white font-medium'
                                                : 'text-slate-600 hover:bg-slate-100'
                                        }`}
                                    >
                                        Todas las categorías
                                    </button>
                                </li>

                                {categories.map(cat => (
                                    <li key={cat.id}>
                                        <button
                                            onClick={() => {
                                                setActiveCategory(cat.id);
                                                setPage(0);
                                            }}
                                            className={`w-full text-left px-3 py-2 rounded-md text-sm ${
                                                activeCategory === cat.id
                                                    ? 'bg-blue-600 text-white font-medium'
                                                    : 'text-slate-600 hover:bg-slate-100'
                                            }`}
                                        >
                                            {cat.nombre}
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </aside>

                    {/* Grid */}
                    <main className="lg:w-3/4">
                        <div className="mb-4 text-sm text-slate-500">
                            Mostrando {products.length} productos (página {page + 1} de {totalPages})
                        </div>

                        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {products.map(product => (
                                <div key={product.id} className="bg-white rounded-xl shadow-sm border overflow-hidden hover:shadow-lg transition">
                                    <div className="h-48 bg-slate-200 relative">
                                        <img
                                            src={product.imagen}
                                            alt={product.nombre}
                                            className="w-full h-full object-cover"
                                        />
                                        <div className="absolute top-3 right-3 bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-bold">
                                            S/ {product.precio.toFixed(2)}
                                        </div>
                                    </div>

                                    <div className="p-5">
                                        <h3 className="text-lg font-bold text-slate-900">{product.nombre}</h3>

                                        <div className="flex items-center gap-2 mt-2 mb-3">
                                            <span className="bg-slate-100 text-xs px-2 py-1 rounded-md">
                                                <Tag className="w-3 h-3 inline mr-1" />
                                                {getBrandName(product.marcaId)}
                                            </span>
                                            <span className="bg-green-50 text-xs px-2 py-1 rounded-md text-green-700">
                                                <Box className="w-3 h-3 inline mr-1" />
                                                Stock: {product.stock}
                                            </span>
                                        </div>

                                        <p className="text-slate-600 text-sm line-clamp-3 mb-4">
                                            {product.descripcion}
                                        </p>

                                        <button className="w-full border border-blue-600 text-blue-600 py-2 text-sm rounded-lg hover:bg-blue-600 hover:text-white transition flex items-center justify-center">
                                            Solicitar Cotización <ArrowRight className="w-4 h-4 ml-2" />
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* PAGINATION */}
                        <div className="flex justify-center mt-10 gap-2">
                            <button
                                disabled={page === 0}
                                onClick={() => setPage(page - 1)}
                                className="px-4 py-2 border rounded disabled:opacity-40"
                            >
                                Anterior
                            </button>

                            {Array.from({ length: totalPages }).map((_, i) => (
                                <button
                                    key={i}
                                    onClick={() => setPage(i)}
                                    className={`px-3 py-2 border rounded ${
                                        page === i ? 'bg-blue-600 text-white' : 'bg-white'
                                    }`}
                                >
                                    {i + 1}
                                </button>
                            ))}

                            <button
                                disabled={page + 1 >= totalPages}
                                onClick={() => setPage(page + 1)}
                                className="px-4 py-2 border rounded disabled:opacity-40"
                            >
                                Siguiente
                            </button>
                        </div>

                        {products.length === 0 && (
                            <div className="text-center py-20 bg-white rounded-xl border border-dashed border-gray-300">
                                <Package className="w-12 h-12 text-slate-300 mx-auto mb-4" />
                                <p className="text-slate-500">No se encontraron productos.</p>
                            </div>
                        )}
                    </main>
                </div>
            </div>
        </div>
    );
};

export default Products;
