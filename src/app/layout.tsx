import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import {Navbar} from "@/presentation/components/layout/Navbar";
import {Footer} from "@/presentation/components/layout/Footer";
import { WhatsAppButton } from "@/presentation/components/layout/WhatsAppButton"; // <--- AQUÍ
// 1. Configuración de Fuentes
// Inter: Para el cuerpo del texto (legibilidad técnica)
const inter = Inter({
    subsets: ["latin"],
    variable: "--font-inter",
    display: "swap",
});

// Playfair Display: Para títulos y frases de impacto (Toque "Old Money")
const playfair = Playfair_Display({
    subsets: ["latin"],
    variable: "--font-playfair",
    display: "swap",
});

// 2. Metadatos para Google (SEO)
export const metadata: Metadata = {
    title: siteConfig.title,
    description: siteConfig.description,
    icons: {
        icon: "/favicon.ico", // Asegúrate de tener un icono luego
    },
};

// 3. El Layout Principal
export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="es" className="scroll-smooth">
        <body className={cn(
            "min-h-screen bg-surface-offwhite text-slate-900 antialiased font-sans",
            inter.variable,
            playfair.variable
        )}>

        <Navbar />  {/* <-- Aquí va el Navbar fijo */}

        {children}

        <Footer />  {/* <-- Aquí va el Footer al final */}
        <WhatsAppButton/>
        </body>
        </html>
    );
}