"use client"; // <--- IMPORTANTE: Esto habilita la interactividad (hooks)

import { useState } from "react";
import { siteConfig } from "@/config/site";
import { Menu, X } from "lucide-react";

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false); // Estado para abrir/cerrar

    return (
        <header className="fixed top-0 w-full z-50 bg-primary-dark/95 backdrop-blur-md border-b border-white/10 shadow-lg">
            <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">

                {/* LOGO */}
                <div className="text-2xl font-serif text-white font-bold tracking-tight">
                    GREEN ESSENCE
                </div>

                {/* MENÚ DE ESCRITORIO (Hidden en móvil) */}
                <nav className="hidden md:flex items-center gap-8">
                    {siteConfig.mainNav.map((item) => (
                        <a
                            key={item.href}
                            href={item.href}
                            className="text-sm font-medium text-gray-300 hover:text-accent transition-colors uppercase tracking-wide"
                        >
                            {item.title}
                        </a>
                    ))}
                </nav>

                {/* BOTÓN DE ACCIÓN (Hidden en móvil) */}
                <div className="hidden md:block">
                    <a
                        href={siteConfig.contact.whatsapp}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-accent text-primary-dark font-bold py-2 px-6 rounded-sm text-sm hover:bg-white transition-colors shadow-[0_0_15px_rgba(212,175,55,0.3)] hover:shadow-[0_0_20px_rgba(212,175,55,0.6)]"
                    >
                        COTIZAR
                    </a>
                </div>

                {/* BOTÓN MÓVIL (Hamburguesa / X) */}
                <button
                    className="md:hidden text-white p-2"
                    onClick={() => setIsOpen(!isOpen)} // Cambia el estado al hacer clic
                >
                    {isOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
                </button>

            </div>

            {/* MENÚ DESPLEGABLE MÓVIL (Solo visible si isOpen es true) */}
            {isOpen && (
                <div className="md:hidden absolute top-20 left-0 w-full bg-primary-dark border-b border-white/10 animate-in slide-in-from-top-5 fade-in duration-300">
                    <nav className="flex flex-col p-8 gap-6 text-center">
                        {siteConfig.mainNav.map((item) => (
                            <a
                                key={item.href}
                                href={item.href}
                                className="text-lg font-medium text-gray-200 hover:text-accent"
                                onClick={() => setIsOpen(false)} // Cierra el menú al hacer clic en un link
                            >
                                {item.title}
                            </a>
                        ))}
                        <a
                            href={siteConfig.contact.whatsapp}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-4 bg-accent text-primary-dark font-bold py-3 px-6 rounded-sm uppercase tracking-wider"
                            onClick={() => setIsOpen(false)}
                        >
                            Solicitar Cotización
                        </a>
                    </nav>
                </div>
            )}
        </header>
    );
}