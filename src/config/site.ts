import { NavItem, ServiceItem, ProductItem } from "@/domain/models";

export const siteConfig = {
    name: "Green Essence",
    title: "Green Essence | Porque el verdadero lujo es vivir en equilibrio",
    description: "Especialistas en recuperación estética de jardines y arquitectura verde de alta gama en Trujillo.",

    // Datos de contacto centralizados
    contact: {
        phone: "+51 983 987 582", // ¡Recuerda actualizar esto con el real!
        whatsapp: "https://wa.me/51983987582?text=Hola,%20quisiera%20agendar%20un%20diagnóstico%20para%20mi%20jardín",
        email: "boycajamuni@gmail.com", // Provisional
        location: "Trujillo, Perú",
    },

    // Menú de navegación
    mainNav: [
        { title: "Inicio", href: "#hero" },
        { title: "Servicios", href: "#servicios" },
        { title: "Diagnóstico", href: "#diagnostico" },
        { title: "Contacto", href: "#contacto" },
    ] as NavItem[],

    // Los 3 Servicios Principales (Lógica de Negocio)
    services: [
        {
            title: "Diseño Paisajista",
            description: "Planificación arquitectónica de jardines, terrazas y techos verdes con visión estética.",
            iconName: "Ruler",
        },
        {
            title: "Recuperación Vital",
            description: "Diagnóstico agrónomo para devolver color, brillo y salud a jardines deteriorados.",
            iconName: "Sprout",
        },
        {
            title: "Gestión Corporativa",
            description: "Mantenimiento técnico integral para condominios y espacios públicos.",
            iconName: "Briefcase",
        },
    ] as ServiceItem[],

    // Los Productos "Caleta" (Fagro)
    products: [
        {
            id: "p1",
            name: "Kit Revitalizante",
            benefit: "Recupera el verde intenso y brillo foliar en 2 semanas.",
            tag: "Nutrición",
            isAvailable: true,
        },
        {
            id: "p2",
            name: "Pack Anti-Plagas Bio",
            benefit: "Control efectivo sin químicos agresivos para tu familia.",
            tag: "Protección",
            isAvailable: true,
        },
        {
            id: "p3",
            name: "Sustrato Premium",
            benefit: "Suelo enriquecido para plantas ornamentales de alta gama.",
            tag: "Suelo",
            isAvailable: true,
        },
    ] as ProductItem[],
};