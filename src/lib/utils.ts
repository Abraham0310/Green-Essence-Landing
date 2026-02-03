import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Función cn (ClassNames):
 * Combina clases condicionales y resuelve conflictos de Tailwind.
 * Vital para componentes limpios.
 */
export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}