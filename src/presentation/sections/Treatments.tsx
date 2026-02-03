import { siteConfig } from "@/config/site";
import { ArrowRight } from "lucide-react";

export function Treatments() {
    // Función para crear el link de WhatsApp personalizado por producto
    const getWhatsAppLink = (productName: string) => {
        const message = `Hola Green Essence, estoy interesado en el tratamiento: ${productName}. ¿Tienen stock?`;
        return `https://wa.me/${siteConfig.contact.phone.replace(/\D/g, '')}?text=${encodeURIComponent(message)}`;
    };

    return (
        <section id="tratamientos" className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4">

                {/* Bloque Verde Oscuro */}
                <div className="bg-primary-dark rounded-3xl p-8 md:p-16 text-white relative overflow-hidden shadow-2xl">

                    {/* Decoración de fondo */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />

                    <div className="relative z-10">
                        <div className="text-center mb-12">
                            <h3 className="text-3xl md:text-4xl font-serif mb-4">Tratamientos Ecológicos Exclusivos</h3>
                            <p className="text-emerald-100/80 max-w-2xl mx-auto text-lg">
                                No usamos químicos genéricos. Aplicamos fórmulas orgánicas de grado profesional para recuperar la salud de tu jardín sin dañar a tu familia.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-6">
                            {siteConfig.products.map((product) => (
                                <a
                                    key={product.id}
                                    href={getWhatsAppLink(product.name)}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="block bg-white/5 backdrop-blur-sm border border-white/10 p-6 rounded-xl hover:bg-white/10 transition-all cursor-pointer group hover:-translate-y-1 hover:shadow-lg hover:border-accent/30"
                                >
                                    <div className="flex justify-between items-start mb-4">
                    <span className="bg-accent text-primary-dark text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                      {product.tag}
                    </span>
                                        {product.isAvailable && (
                                            <span className="flex h-3 w-3 relative">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                      </span>
                                        )}
                                    </div>

                                    <h4 className="text-xl font-bold mb-2 group-hover:text-accent transition-colors">
                                        {product.name}
                                    </h4>

                                    <p className="text-sm text-gray-300 mb-6 min-h-[40px]">
                                        {product.benefit}
                                    </p>

                                    {/* BOTÓN DE ACCIÓN (Ahora sí se ve como botón) */}
                                    <div className="flex items-center gap-2 text-accent text-sm font-bold opacity-80 group-hover:opacity-100 transition-all">
                                        <span>Consultar Disponibilidad</span>
                                        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                                    </div>
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}