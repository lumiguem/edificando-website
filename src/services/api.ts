import type {Category, ServiceType, Product, Service} from '../types';

const API_BASE_URL = import.meta.env.VITE_API_URL;


// -----------------------------
// HELPERS
// -----------------------------

// Maneja respuestas HTTP
const handleResponse = async (response: Response) => {
    if (!response.ok) {
        const errorMessage = await response.text();
        throw new Error(errorMessage || response.statusText);
    }
    return response.json();
};

// Extrae array desde backend SOLO en los formatos válidos
const extractDataArray = (data: any): any[] => {
    // Caso paginado: { data: { content: [...] } }
    if (data?.data?.content && Array.isArray(data.data.content)) {
        return data.data.content;
    }

    // Caso común: { data: [...] }
    if (Array.isArray(data?.data)) {
        return data.data;
    }

    // ⬅️ NUEVO: backend devolvió un array directo
    if (Array.isArray(data)) {
        return data;
    }

    console.warn("⚠ Backend devolvió un formato inesperado:", data);
    return [];
};


// Wrapper genérico SOLO para endpoints que devuelven arrays
const fetchList = async (endpoint: string): Promise<any[]> => {
    try {
        const raw = await fetch(`${API_BASE_URL}${endpoint}`).then(handleResponse);
        return extractDataArray(raw);
    } catch (err) {
        console.error(`❌ Error en fetch ${endpoint}:`, err);
        throw err;
    }
};

// -----------------------------
// API EXPORTADA
// -----------------------------
export const api = {
    // Categorías
    getProductCategories: (): Promise<Category[]> =>
        fetchList('/categorias'),

    // Tipos de servicio
    getServiceTypes: (): Promise<ServiceType[]> =>
        fetchList('/tiposervicios'),

    // Productos Paginados (page=0, size=1000)
    getProducts: async (): Promise<Product[]> => {
        try {
            const raw = await fetch(`${API_BASE_URL}/productos?page=0&size=1000`)
                .then(handleResponse);

            return extractDataArray(raw);
        } catch (err) {
            console.error("❌ Error obteniendo productos:", err);
            throw err;
        }
    },

    // Productos por categoría (tu backend devuelve { data: [...] })
    getProductsByCategory: (categoryId: number): Promise<Product[]> =>
        fetchList(`/productos/categoria/${categoryId}`),

    // Marcas
    getBrands: (): Promise<any[]> =>
        fetchList('/marcas'),

    // -----------------------------
    // PAGINADOS
    // -----------------------------

    // Productos paginados globales
    getProductsPaged: async (page: number, size: number) => {
        const raw = await fetch(`${API_BASE_URL}/productos?page=${page}&size=${size}`)
            .then(handleResponse);

        // raw.data existe? -> usa raw.data
        // si no -> usa raw directamente
        const d = raw.data ?? raw;

        return {
            items: d.content ?? [],
            totalPages: d.totalPages ?? 1,
            page: d.number ?? page,
            size: d.size ?? size,
            totalElements: d.totalElements ?? 0
        };
    },


    // Productos por categoría paginados
    getProductsByCategoryPaged: async (categoryId: number, page: number, size: number) => {
        const raw = await fetch(
            `${API_BASE_URL}/productos/categoria/${categoryId}/paged?page=${page}&size=${size}`
        ).then(handleResponse);

        const d = raw.data ?? raw;

        return {
            items: d.content ?? [],
            totalPages: d.totalPages ?? 1,
            page: d.number ?? page,
            size: d.size ?? size,
            totalElements: d.totalElements ?? 0
        };
    },


    getServices: (): Promise<Service[]> =>
        fetchList('/servicios/all'),


    getServiciosPaged: async (page: number, size: number) => {
        const raw = await fetch(`${API_BASE_URL}/servicios?page=${page}&size=${size}`)
            .then(handleResponse);

        const d = raw.data;

        return {
            items: d.content,     // <--- ESTO ES LO QUE NECESITA TU COMPONENTE
            totalPages: d.totalPages,
            page: d.number,
            size: d.size,
            totalElements: d.totalElements
        };
    },

    getServiciosByCategoryPaged: async (tipoServicioId: number, page: number, size: number) => {
        const raw = await fetch(
            `${API_BASE_URL}/servicios/tiposervicios/${tipoServicioId}/paged?page=${page}&size=${size}`
        ).then(handleResponse);

        const d = raw.data;

        return {
            items: d.content,     // <--- ESTO ES LO QUE NECESITA TU COMPONENTE
            totalPages: d.totalPages,
            page: d.number,
            size: d.size,
            totalElements: d.totalElements
        };
    },
};
