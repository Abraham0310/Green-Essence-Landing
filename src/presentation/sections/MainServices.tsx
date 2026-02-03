import { siteConfig } from "@/config/site";
import { Ruler, Sprout, Briefcase, ArrowRight } from "lucide-react";

// Mapeo de iconos
const iconMap: Record<string, any> = {
    Ruler: Ruler,
    Sprout: Sprout,
    Briefcase: Briefcase,
};

export function MainServices() {
    return (
        <section id="servicios" className="py-24 bg-surface-offwhite">
            <div className="max-w-7xl mx-auto px-4">

                {/* Encabezado: Ingeniería Aplicada */}
                <div className="flex flex-col md:flex-row justify-between items-end mb-16">
                    <div className="max-w-2xl">
                        <h2 className="text-3xl md:text-5xl font-serif text-primary-dark mb-4">
                            Ingeniería Aplicada al Paisaje
                        </h2>
                        <p className="text-slate-600 text-lg">
                            Soluciones integrales que combinan ciencia agronómica y diseño de alta gama.
                        </p>
                    </div>
                    <a href={siteConfig.contact.whatsapp} className="hidden md:flex items-center gap-2 text-primary font-bold border-b-2 border-primary pb-1 hover:text-accent hover:border-accent transition-all">
                        Solicitar Cotización <ArrowRight className="w-4 h-4" />
                    </a>
                </div>

                {/* Las 3 Tarjetas de Servicio */}
                <div className="grid md:grid-cols-3 gap-8">
                    {siteConfig.services.map((service, index) => {
                        const Icon = iconMap[service.iconName] || Sprout;

                        return (
                            <div key={index} className="bg-white p-10 rounded-sm shadow-sm hover:shadow-xl transition-all duration-300 group border-t-4 border-transparent hover:border-accent">
                                <div className="w-14 h-14 bg-primary/5 rounded-full flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors text-primary">
                                    <Icon className="w-7 h-7" />
                                </div>
                                <h3 className="text-2xl font-serif text-primary-dark mb-4">{service.title}</h3>
                                <p className="text-slate-600 leading-relaxed mb-6">
                                    {service.description}
                                </p>
                            </div>
                        );
                    })}
                </div>

            </div>
        </section>
    );
}