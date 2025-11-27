export interface Category {
    id: number;
    nombre: string;
    descripcion: string;
}

export interface Brand {
    id: number;
    nombre: string;
    descripcion: string;
}

export interface Product {
    id: number;
    nombre: string;
    descripcion: string;
    precio: number;
    stock: number;
    imagen: string;
    categoriaId: number;
    marcaId: number;
}

export interface ServiceType {
    id: number;
    nombre: string;
    descripcion: string;
}

export interface Service {
    id: number;
    nombre: string;
    descripcion: string;
    precio: number;
    imagen: string;
    tipoServicioId: number;
    tipoServicioNombre: string;
}


export interface ClientType {
    id: number;
    nombre: string;
    descripcion: string;
}

export interface Client {
    id: number;
    nombre: string;
    direccion: string;
    telefono: string;
    correo: string;
    id_tipo_cliente: number;
}

export interface Project {
    id: number;
    title: string;
    category: string;
    description: string;
    image: string;
}

export interface Testimonial {
    id: number;
    name: string;
    company: string;
    text: string;
}