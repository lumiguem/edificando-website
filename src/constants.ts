import type {Category, Brand, Product, ServiceType, Service, ClientType, Client, Project, Testimonial} from './types';

// =======================================================
// CATEGORÍAS
// =======================================================
export const PRODUCT_CATEGORIES: Category[] = [
    { id: 1, nombre: 'Impermeabilizantes', descripcion: 'Productos para protección contra la humedad y filtraciones' },
    { id: 2, nombre: 'Sellantes', descripcion: 'Selladores para juntas y uniones' },
    { id: 3, nombre: 'Adhesivos Epóxicos', descripcion: 'Adhesivos de alta resistencia para construcción' },
    { id: 4, nombre: 'Aditivos para el Concreto', descripcion: 'Aditivos para mejorar propiedades del concreto' },
    { id: 5, nombre: 'Morteros y Grouts', descripcion: 'Morteros de reparación y relleno' },
    { id: 6, nombre: 'Anclajes Químicos', descripcion: 'Sistemas de fijación química' },
    { id: 7, nombre: 'Resinas para Inyección', descripcion: 'Resinas epóxicas y poliuretánicas' },
    { id: 8, nombre: 'Revestimientos Industriales', descripcion: 'Protección y acabado de superficies industriales' },
    { id: 9, nombre: 'Herramientas y Accesorios', descripcion: 'Herramientas y accesorios para la construcción y mantenimiento' },
];

// =======================================================
// MARCAS
// =======================================================
export const BRANDS: Brand[] = [
    { id: 1, nombre: 'Sika', descripcion: 'Productos químicos para la construcción y reparación' },
    { id: 2, nombre: 'Henkel', descripcion: 'Adhesivos y soluciones industriales' },
    { id: 3, nombre: 'Bosch', descripcion: 'Herramientas eléctricas y accesorios' },
    { id: 4, nombre: 'DeWalt', descripcion: 'Herramientas profesionales para construcción' },
    { id: 5, nombre: 'Makita', descripcion: 'Herramientas eléctricas e inalámbricas' },
    { id: 6, nombre: 'Hilti', descripcion: 'Tecnología para construcción y anclajes químicos' },
    { id: 7, nombre: 'Mapei', descripcion: 'Aditivos, adhesivos y morteros' },
    { id: 8, nombre: 'Stanley', descripcion: 'Herramientas manuales y eléctricas' },
];

// =======================================================
// PRODUCTOS
// =======================================================
export const PRODUCTS: Product[] = [
    { id: 1, nombre: 'SikaTop Seal 107', descripcion: 'Revestimiento impermeabilizante cementoso', precio: 120.00, stock: 50, imagen: 'https://images.unsplash.com/photo-1585821648382-021bf9c09755?auto=format&fit=crop&w=600&q=80', id_categoria: 1, id_marca: 1 },
    { id: 2, nombre: 'Mapelastic Foundation', descripcion: 'Impermeabilizante flexible bicomponente', precio: 200.00, stock: 30, imagen: 'https://images.unsplash.com/photo-1632759363494-5873152c783a?auto=format&fit=crop&w=600&q=80', id_categoria: 1, id_marca: 7 },

    { id: 3, nombre: 'Sikaflex 11FC', descripcion: 'Sellante elástico multipropósito', precio: 45.00, stock: 100, imagen: 'https://images.unsplash.com/photo-1610526023209-77667d669579?auto=format&fit=crop&w=600&q=80', id_categoria: 2, id_marca: 1 },

    { id: 4, nombre: 'Loctite PL Premium', descripcion: 'Adhesivo epóxico de alta resistencia', precio: 65.00, stock: 80, imagen: 'https://images.unsplash.com/photo-1560843723-80d21c369478?auto=format&fit=crop&w=600&q=80', id_categoria: 3, id_marca: 2 },
    { id: 5, nombre: 'Mapei Eporip', descripcion: 'Adhesivo epóxico para juntas de construcción', precio: 85.00, stock: 60, imagen: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=600&q=80', id_categoria: 3, id_marca: 7 },

    { id: 6, nombre: 'Sika ViscoCrete', descripcion: 'Aditivo superplastificante para concreto', precio: 150.00, stock: 40, imagen: 'https://images.unsplash.com/photo-1518709766631-a6a7f45921c3?auto=format&fit=crop&w=600&q=80', id_categoria: 4, id_marca: 1 },
    { id: 7, nombre: 'Mapei Dynamon', descripcion: 'Aditivo reductor de agua de alto rango', precio: 135.00, stock: 35, imagen: 'https://images.unsplash.com/photo-1595846519845-68e298c2edd8?auto=format&fit=crop&w=600&q=80', id_categoria: 4, id_marca: 7 },

    { id: 8, nombre: 'SikaGrout 212', descripcion: 'Mortero de relleno de alta resistencia', precio: 90.00, stock: 70, imagen: 'https://images.unsplash.com/photo-1590080875515-8a3a8dc5735e?auto=format&fit=crop&w=600&q=80', id_categoria: 5, id_marca: 1 },
    { id: 9, nombre: 'Mapei Planitop 400', descripcion: 'Mortero estructural de reparación', precio: 110.00, stock: 50, imagen: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&w=600&q=80', id_categoria: 5, id_marca: 7 },

    { id: 10, nombre: 'Hilti HIT-HY 200', descripcion: 'Anclaje químico de alto rendimiento', precio: 250.00, stock: 25, imagen: 'https://images.unsplash.com/photo-1534655726872-2524e2781564?auto=format&fit=crop&w=600&q=80', id_categoria: 6, id_marca: 6 },
    { id: 11, nombre: 'Sika AnchorFix-2', descripcion: 'Resina de anclaje epóxica', precio: 180.00, stock: 30, imagen: 'https://images.unsplash.com/photo-1621905252507-b35a8307ae05?auto=format&fit=crop&w=600&q=80', id_categoria: 6, id_marca: 1 },

    { id: 12, nombre: 'Sikadur 52', descripcion: 'Resina epóxica de inyección de baja viscosidad', precio: 220.00, stock: 20, imagen: 'https://images.unsplash.com/photo-1635424973729-1c3828274e2d?auto=format&fit=crop&w=600&q=80', id_categoria: 7, id_marca: 1 },
    { id: 13, nombre: 'Mapei Epojet', descripcion: 'Resina epóxica de inyección', precio: 240.00, stock: 18, imagen: 'https://images.unsplash.com/photo-1621905251918-48416bd8575a?auto=format&fit=crop&w=600&q=80', id_categoria: 7, id_marca: 7 },

    { id: 14, nombre: 'SikaFloor 264', descripcion: 'Revestimiento epóxico para pisos industriales', precio: 320.00, stock: 15, imagen: 'https://images.unsplash.com/photo-1635589984536-39a69b1cb2b7?auto=format&fit=crop&w=600&q=80', id_categoria: 8, id_marca: 1 },
    { id: 15, nombre: 'Mapei Mapecoat I 24', descripcion: 'Revestimiento epóxico protector', precio: 340.00, stock: 12, imagen: 'https://images.unsplash.com/photo-1632121594167-92f9d9385213?auto=format&fit=crop&w=600&q=80', id_categoria: 8, id_marca: 7 },

    { id: 16, nombre: 'Taladro Percutor Bosch', descripcion: 'Taladro eléctrico para concreto y mampostería', precio: 350.00, stock: 40, imagen: 'https://images.unsplash.com/photo-1504148455328-c376907d081c?auto=format&fit=crop&w=600&q=80', id_categoria: 9, id_marca: 3 },
    { id: 17, nombre: 'Amoladora Angular DeWalt', descripcion: 'Herramienta para corte y desbaste', precio: 280.00, stock: 35, imagen: 'https://images.unsplash.com/photo-1572981779307-38b8cabb2407?auto=format&fit=crop&w=600&q=80', id_categoria: 9, id_marca: 4 },
    { id: 18, nombre: 'Martillo Demoledor Makita', descripcion: 'Herramienta eléctrica para demolición de concreto', precio: 1200.00, stock: 15, imagen: 'https://images.unsplash.com/photo-1530124566582-a618bc2615dc?auto=format&fit=crop&w=600&q=80', id_categoria: 9, id_marca: 5 },
    { id: 19, nombre: 'Juego de Llaves Stanley', descripcion: 'Juego de llaves de diferentes medidas', precio: 150.00, stock: 60, imagen: 'https://images.unsplash.com/photo-1616400619175-5beda3a17896?auto=format&fit=crop&w=600&q=80', id_categoria: 9, id_marca: 8 },
    { id: 20, nombre: 'Nivel Láser Bosch', descripcion: 'Equipo para nivelación de estructuras', precio: 500.00, stock: 20, imagen: 'https://images.unsplash.com/photo-1581147036324-c17ac41dfa6c?auto=format&fit=crop&w=600&q=80', id_categoria: 9, id_marca: 3 },
];

// =======================================================
// TIPOS DE SERVICIO
// =======================================================
export const SERVICE_TYPES: ServiceType[] = [
    { id: 1, nombre: 'Techos', descripcion: 'Servicios relacionados con techos y cubiertas' },
    { id: 2, nombre: 'Impermeabilización Estructural', descripcion: 'Protección de estructuras contra agua y humedad' },
    { id: 3, nombre: 'Reparación y Protección Estructural', descripcion: 'Reparaciones de concreto y estructuras dañadas' },
    { id: 4, nombre: 'Juntas', descripcion: 'Tratamiento y sellado de juntas en estructuras' },
    { id: 5, nombre: 'Pisos Industriales y Estacionamientos', descripcion: 'Acabados y recubrimientos para pisos' },
    { id: 6, nombre: 'Obras Civiles', descripcion: 'Construcciones y proyectos civiles generales' },
];

// =======================================================
// SERVICIOS
// =======================================================
export const SERVICES: Service[] = [
    // Techos
    { id: 1, nombre: 'Instalación de Techo Aluzinc', descripcion: 'Colocación de techo metálico con protección anticorrosiva', precio: 5000.00, imagen: 'https://images.unsplash.com/photo-1517646287309-985096b288a8?auto=format&fit=crop&w=800&q=80', id_tipo_servicio: 1 },
    { id: 2, nombre: 'Mantenimiento de Techo', descripcion: 'Reparación de filtraciones y limpieza', precio: 2500.00, imagen: 'https://images.unsplash.com/photo-1632759145351-1d592919f522?auto=format&fit=crop&w=800&q=80', id_tipo_servicio: 1 },
    { id: 3, nombre: 'Instalación de Techo Termoacústico', descripcion: 'Montaje de paneles aislantes', precio: 6000.00, imagen: 'https://images.unsplash.com/photo-1599692223425-232c04e28f24?auto=format&fit=crop&w=800&q=80', id_tipo_servicio: 1 },

    // Impermeabilización Estructural
    { id: 4, nombre: 'Impermeabilización de Losas', descripcion: 'Protección contra filtraciones en losas de concreto', precio: 4000.00, imagen: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=800&q=80', id_tipo_servicio: 2 },
    { id: 5, nombre: 'Impermeabilización de Cisternas', descripcion: 'Aplicación de revestimientos impermeables', precio: 3500.00, imagen: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=800&q=80', id_tipo_servicio: 2 },
    { id: 6, nombre: 'Impermeabilización de Muros', descripcion: 'Revestimiento impermeable en muros perimetrales', precio: 3000.00, imagen: 'https://images.unsplash.com/photo-1600607686527-6fb886090705?auto=format&fit=crop&w=800&q=80', id_tipo_servicio: 2 },

    // Reparación
    { id: 7, nombre: 'Reparación de Concreto Dañado', descripcion: 'Recuperación estructural de columnas y vigas', precio: 7000.00, imagen: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=800&q=80', id_tipo_servicio: 3 },
    { id: 8, nombre: 'Protección con Revestimiento Epóxico', descripcion: 'Protección anticorrosiva de superficies', precio: 8000.00, imagen: 'https://images.unsplash.com/photo-1565008447742-97f6f38c985c?auto=format&fit=crop&w=800&q=80', id_tipo_servicio: 3 },
    { id: 9, nombre: 'Refuerzo de Estructuras', descripcion: 'Aplicación de fibras de carbono y polímeros', precio: 12000.00, imagen: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80', id_tipo_servicio: 3 },

    // Juntas
    { id: 10, nombre: 'Sellado de Juntas de Expansión', descripcion: 'Aplicación de sellante en juntas de expansión', precio: 4500.00, imagen: 'https://images.unsplash.com/photo-1621905252507-b35a8307ae05?auto=format&fit=crop&w=800&q=80', id_tipo_servicio: 4 },
    { id: 11, nombre: 'Reemplazo de Juntas en Pisos', descripcion: 'Reemplazo de juntas deterioradas en pisos industriales', precio: 5000.00, imagen: 'https://images.unsplash.com/photo-1617104424032-b9bd6972d0e4?auto=format&fit=crop&w=800&q=80', id_tipo_servicio: 4 },
    { id: 12, nombre: 'Tratamiento de Juntas de Construcción', descripcion: 'Sellado flexible para juntas de construcción', precio: 4000.00, imagen: 'https://images.unsplash.com/photo-1590579491624-f98f36d4c763?auto=format&fit=crop&w=800&q=80', id_tipo_servicio: 4 },

    // Pisos
    { id: 13, nombre: 'Instalación de Piso Epóxico', descripcion: 'Revestimiento industrial de alto tráfico', precio: 15000.00, imagen: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=800&q=80', id_tipo_servicio: 5 },
    { id: 14, nombre: 'Piso Poliuretano Antideslizante', descripcion: 'Revestimiento resistente a químicos y abrasión', precio: 18000.00, imagen: 'https://images.unsplash.com/photo-1584622412117-b22cb57c0d3b?auto=format&fit=crop&w=800&q=80', id_tipo_servicio: 5 },
    { id: 15, nombre: 'Revestimiento para Estacionamiento', descripcion: 'Pintura y señalización de estacionamientos', precio: 12000.00, imagen: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80', id_tipo_servicio: 5 },

    // Obras Civiles
    { id: 16, nombre: 'Construcción de Muros de Concreto', descripcion: 'Ejecución de muros estructurales', precio: 20000.00, imagen: 'https://images.unsplash.com/photo-1541976590-713941681591?auto=format&fit=crop&w=800&q=80', id_tipo_servicio: 6 },
    { id: 17, nombre: 'Construcción de Losas', descripcion: 'Losas de concreto reforzado', precio: 25000.00, imagen: 'https://images.unsplash.com/photo-1517089596392-fb9c9033a059?auto=format&fit=crop&w=800&q=80', id_tipo_servicio: 6 },
    { id: 18, nombre: 'Obras de Albañilería General', descripcion: 'Construcción de tabiquería y acabados', precio: 15000.00, imagen: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=800&q=80', id_tipo_servicio: 6 },
];

// =======================================================
// TIPOS DE CLIENTE
// =======================================================
export const CLIENT_TYPES: ClientType[] = [
    { id: 1, nombre: 'Persona Natural', descripcion: 'Cliente individual' },
    { id: 2, nombre: 'Empresa', descripcion: 'Cliente corporativo' },
    { id: 3, nombre: 'Distribuidor', descripcion: 'Cliente que compra para revender' },
];

// =======================================================
// CLIENTES
// =======================================================
export const CLIENTS: Client[] = [
    { id: 1, nombre: 'Juan Pérez', direccion: 'Av. Los Próceres 123, Lima', telefono: '987654321', correo: 'juan.perez@email.com', id_tipo_cliente: 1 },
    { id: 2, nombre: 'María Gómez', direccion: 'Jr. San Martín 456, Arequipa', telefono: '999888777', correo: 'maria.gomez@email.com', id_tipo_cliente: 1 },
    { id: 3, nombre: 'Construcciones Andinas SAC', direccion: 'Av. Industrial 234, Lima', telefono: '014567890', correo: 'contacto@construandinas.com', id_tipo_cliente: 2 },
    { id: 4, nombre: 'Servicios Generales del Sur EIRL', direccion: 'Calle Comercio 789, Cusco', telefono: '084654321', correo: 'info@serviciosur.com', id_tipo_cliente: 2 },
    { id: 5, nombre: 'Ferretería El Progreso', direccion: 'Av. Grau 321, Trujillo', telefono: '044987654', correo: 'ventas@ferreprogreso.com', id_tipo_cliente: 3 },
    { id: 6, nombre: 'Distribuidora San José', direccion: 'Av. Universitaria 567, Lima', telefono: '013456789', correo: 'ventas@distribuidorasanjose.com', id_tipo_cliente: 3 },
    { id: 7, nombre: 'Ana Torres', direccion: 'Av. Javier Prado 987, Lima', telefono: '987123456', correo: 'ana.torres@email.com', id_tipo_cliente: 1 },
    { id: 8, nombre: 'Inmobiliaria Los Olivos SAC', direccion: 'Av. Canta Callao 432, Lima', telefono: '015678432', correo: 'contacto@losolivos.com', id_tipo_cliente: 2 },
    { id: 9, nombre: 'Ferretería El Constructor', direccion: 'Jr. Independencia 654, Chiclayo', telefono: '074654987', correo: 'ventas@ferreconstructor.com', id_tipo_cliente: 3 },
    { id: 10, nombre: 'Carlos Ramírez', direccion: 'Calle Primavera 321, Lima', telefono: '999456123', correo: 'carlos.ramirez@email.com', id_tipo_cliente: 1 },
];

// Legacy Data (kept for home page compatibility)
export const PROJECTS: Project[] = [
    {
        id: 1,
        title: "Centro Comercial Plaza Norte",
        category: "Impermeabilización Estructural",
        description: "Impermeabilización completa de estacionamientos subterráneos utilizando sistemas de membrana de poliuretano.",
        image: "https://images.unsplash.com/photo-1555636222-cae831e670b3?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 2,
        title: "Puente Bicentenario",
        category: "Reparación y Protección Estructural",
        description: "Inyección de resinas epóxicas en fisuras estructurales y refuerzo con fibra de carbono.",
        image: "https://images.unsplash.com/photo-1545558014-8692077e9b5c?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 3,
        title: "Planta Industrial Química",
        category: "Pisos Industriales",
        description: "Aplicación de revestimiento epóxico de alta resistencia química en 5000m2.",
        image: "https://images.unsplash.com/photo-1565008447742-97f6f38c985c?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 4,
        title: "Residencial Los Álamos",
        category: "Techos",
        description: "Renovación de impermeabilización en azoteas con manto asfáltico gravillado.",
        image: "https://images.unsplash.com/photo-1599692223425-232c04e28f24?auto=format&fit=crop&w=600&q=80"
    }
];

export const TESTIMONIALS: Testimonial[] = [
    {
        id: 1,
        name: "Ing. Carlos Rodríguez",
        company: "Constructora Global",
        text: "La calidad de los aditivos y la asesoría técnica en obra fueron fundamentales para el éxito del proyecto."
    },
    {
        id: 2,
        name: "Arq. María Fernández",
        company: "Diseño Urbano SAS",
        text: "Excelentes acabados en los pisos industriales. Cumplieron con los plazos establecidos de manera impecable."
    },
    {
        id: 3,
        name: "Juan Pérez",
        company: "Administración Edificio Central",
        text: "Solucionaron filtraciones que llevábamos años tratando de arreglar. Muy profesionales."
    }
];