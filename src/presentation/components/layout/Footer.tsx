import { siteConfig } from "@/config/site";

export function Footer() {
    return (
        <footer className="bg-primary-dark text-white pt-20 pb-10 border-t border-white/10">
            <div className="max-w-7xl mx-auto px-4">

                <div className="grid md:grid-cols-4 gap-12 mb-16">

                    {/* Columna 1: Marca */}
                    <div className="col-span-1 md:col-span-2">
                        <h3 className="text-3xl font-serif font-bold mb-6 text-white">GREEN ESSENCE</h3>
                        <p className="text-gray-400 max-w-sm leading-relaxed mb-6">
                            Ingeniería aplicada al paisaje. Recuperamos el equilibrio natural de tus espacios y areas verdes con rigor técnico y visión estética de alta gama.
                        </p>
                        <div className="flex gap-4">
                            <SocialLink name="Instagram" />
                            <SocialLink name="Facebook" />
                            <SocialLink name="LinkedIn" />
                        </div>
                    </div>

                    {/* Columna 2: Enlaces */}
                    <div>
                        <h4 className="text-accent font-bold uppercase tracking-widest text-xs mb-6">Navegación</h4>
                        <ul className="space-y-4 text-gray-400">
                            <li><a href="#hero" className="hover:text-white transition">Inicio</a></li>
                            <li><a href="#servicios" className="hover:text-white transition">Servicios</a></li>
                            <li><a href="#diagnostico" className="hover:text-white transition">Diagnóstico</a></li>
                            <li><a href="#tratamientos" className="hover:text-white transition">Productos</a></li>
                        </ul>
                    </div>

                    {/* Columna 3: Legal / Contacto */}
                    <div>
                        <h4 className="text-accent font-bold uppercase tracking-widest text-xs mb-6">Contacto</h4>
                        <ul className="space-y-4 text-gray-400">
                            <li>{siteConfig.contact.location}</li>
                            <li>{siteConfig.contact.phone}</li>
                            <li>{siteConfig.contact.email}</li>
                        </ul>
                    </div>
                </div>

                {/* Copyright & Créditos (TU FIRMA) */}
                <div className="pt-8 border-t border-white/10 text-center md:text-left flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
                    <p>&copy; {new Date().getFullYear()} Green Essence. Todos los derechos reservados.</p>

                    <p className="flex items-center gap-1 mt-4 md:mt-0">
                        Desarrollado con <span className="text-red-500 text-sm">❤️</span> por{" "}
                        <a
                            href="https://www.linkedin.com/in/abraham-estrada-software/"  // <--- ¡PON TU LINK AQUÍ!
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-bold text-accent hover:text-white transition-colors underline decoration-accent/30 underline-offset-4"
                        >
                            aestradac software
                        </a>
                        .
                    </p>
                </div>

            </div>
        </footer>
    );
}

function SocialLink({ name }: { name: string }) {
    return (
        <span className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-accent hover:text-primary-dark transition-all cursor-pointer">
      {name[0]}
    </span>
    )
}