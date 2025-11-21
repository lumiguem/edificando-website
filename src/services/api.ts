import type {Product, Service, Client, Category, ServiceType, Brand} from '../types';

// Change this URL to match your Spring Boot backend URL
const API_BASE_URL = 'http://localhost:8080/api';

// Helper function for handling responses
const handleResponse = async (response: Response) => {
    if (!response.ok) {
        const error = await response.text();
        throw new Error(error || response.statusText);
    }
    return response.json();
};

export const api = {
    // Products
    getProducts: (): Promise<Product[]> =>
        fetch(`${API_BASE_URL}/productos`).then(handleResponse),

    getProductCategories: (): Promise<Category[]> =>
        fetch(`${API_BASE_URL}/categorias`).then(handleResponse),

    getBrands: (): Promise<Brand[]> =>
        fetch(`${API_BASE_URL}/marcas`).then(handleResponse),

    // Services
    getServices: (): Promise<Service[]> =>
        fetch(`${API_BASE_URL}/servicios`).then(handleResponse),

    getServiceTypes: (): Promise<ServiceType[]> =>
        fetch(`${API_BASE_URL}/tipo-servicio`).then(handleResponse),

    // Clients
    getClients: (): Promise<Client[]> =>
        fetch(`${API_BASE_URL}/clientes`).then(handleResponse),

    // Contact
    sendMessage: (data: { name: string; email: string; phone: string; subject: string; message: string }) => {
        return fetch(`${API_BASE_URL}/contacto`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        }).then((res) => {
            if (!res.ok) throw new Error("Error sending message");
            return res;
        });
    }
};