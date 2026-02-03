import { siteConfig } from "@/config/site";
import { ArrowDown } from "lucide-react";
import Image from "next/image"; // <--- Importamos el componente optimizado de Next.js

export function Hero() {
    return (
        <section id="hero" className="relative h-screen flex flex-col items-center justify-center overflow-hidden">

            {/* 1. IMAGEN DE FONDO (Desde Internet) */}
            <div className="absolute inset-0 z-0">
                <Image
                    // Foto de Unsplash: Residencia de lujo con jardín e iluminación cálida
                    src="https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?q=80&w=2500&auto=format&fit=crop"
                    alt="Jardín de lujo Green Essence"
                    fill // Esto hace que ocupe todo el espacio automáticamente
                    className="object-cover" // Recorta la imagen para que no se deforme
                    priority // Carga esta imagen primero porque es la portada
                    quality={90}
                />

                {/* 2. OVERLAY (Capa Oscura) */}
                {/* Es VITAL para que el texto blanco se lea sobre la foto */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
            </div>

            {/* 3. CONTENIDO PRINCIPAL (Texto) */}
            <div className="relative z-10 text-center px-4 max-w-5xl mx-auto mt-[-50px]">

                {/* Marca Pequeña */}
                <h2 className="text-amber-200 tracking-[0.3em] text-xs md:text-sm font-medium uppercase mb-8 animate-in fade-in slide-in-from-top-4 duration-1000">
                    Green Essence • Trujillo
                </h2>

                {/* TÍTULO */}
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-8 text-white drop-shadow-2xl">
                    {siteConfig.name.toUpperCase()}
                </h1>

                {/* FRASE EMOCIONAL */}
                <p className="text-xl md:text-3xl lg:text-4xl font-serif italic text-gray-100 mb-12 leading-relaxed max-w-4xl mx-auto drop-shadow-md">
                    "Porque el verdadero lujo es <br className="hidden md:block" />
                    <span className="text-amber-300 border-b border-amber-300/30 pb-1">vivir en equilibrio</span>."
                </p>

                {/* BOTONES */}
                <div className="flex flex-col md:flex-row gap-5 justify-center items-center">
                    <a
                        href={siteConfig.contact.whatsapp}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white/90 hover:bg-accent hover:text-primary-dark text-primary-dark font-bold py-4 px-10 rounded-sm transition-all duration-300 uppercase tracking-wider text-sm shadow-[0_0_20px_rgba(0,0,0,0.3)] backdrop-blur-sm"
                    >
                        Agendar Diagnóstico
                    </a>

                    <a
                        href="#servicios"
                        className="border border-white/50 hover:bg-white/10 text-white font-medium py-4 px-10 rounded-sm transition-all duration-300 uppercase tracking-wider text-sm backdrop-blur-md"
                    >
                        Ver Servicios
                    </a>
                </div>
            </div>

            {/* 4. FLECHA ANIMADA */}
            <div className="absolute bottom-10 animate-bounce text-white/70 z-10 hidden md:flex flex-col items-center gap-2">
                <span className="text-[10px] tracking-widest uppercase text-amber-200">Descubre Más</span>
                <ArrowDown className="w-5 h-5 text-amber-200" />
            </div>

        </section>
    );
}