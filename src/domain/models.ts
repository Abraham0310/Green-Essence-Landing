// Define la estructura de un enlace del menú
export interface NavItem {
    title: string;
    href: string;
    disabled?: boolean;
}

// Define la estructura de un Servicio
export interface ServiceItem {
    title: string;
    description: string;
    iconName: string; // Guardamos el nombre del icono como string
}

// Define la estructura de un Producto (Los insumos Fagro "caleta")
export interface ProductItem {
    id: string;
    name: string;
    benefit: string;
    tag: string; // Ej: "Nutrición", "Control"
    isAvailable: boolean;
}