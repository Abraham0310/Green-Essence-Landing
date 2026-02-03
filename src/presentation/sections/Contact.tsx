import { siteConfig } from "@/config/site";
import { Mail, MapPin, Phone, ArrowRight } from "lucide-react";

export function Contact() {
    return (
        <section id="contacto" className="py-24 bg-surface-offwhite border-t border-slate-200">
            <div className="max-w-7xl mx-auto px-4">

                <div className="grid md:grid-cols-2 gap-16 items-center">

                    {/* Columna Izquierda: Textos */}
                    <div>
            <span className="text-accent font-bold tracking-widest uppercase text-xs mb-2 block">
              Inicia tu Transformación
            </span>
                        <h2 className="text-4xl md:text-5xl font-serif text-primary-dark mb-6">
                            Hablemos de tu <br />
                            <span className="italic text-primary-light">Próximo Oasis.</span>
                        </h2>
                        <p className="text-slate-600 text-lg mb-8 leading-relaxed">
                            Ya sea que necesites recuperar un jardín residencial o gestionar áreas verdes corporativas,
                            nuestro equipo de ingenieros está listo para realizar un diagnóstico técnico.
                        </p>

                        <div className="space-y-6">
                            <ContactItem icon={<Phone />} text={siteConfig.contact.phone} label="Llámanos" />
                            <ContactItem icon={<Mail />} text={siteConfig.contact.email} label="Escríbenos" />
                            <ContactItem icon={<MapPin />} text={siteConfig.contact.location} label="Visítanos" />
                        </div>
                    </div>

                    {/* Columna Derecha: Card de Acción */}
                    <div className="bg-white p-10 rounded-2xl shadow-xl border border-slate-100 relative overflow-hidden">
                        {/* Círculo decorativo */}
                        <div className="absolute -top-10 -right-10 w-40 h-40 bg-accent/10 rounded-full blur-2xl" />

                        <h3 className="text-2xl font-serif text-primary-dark mb-2">Agenda una Visita Técnica</h3>
                        <p className="text-slate-500 mb-8">
                            Respuesta en menos de 24 horas. Prioridad a proyectos en Trujillo (Golf, California, Huanchaco).
                        </p>

                        <a
                            href={siteConfig.contact.whatsapp}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group flex items-center justify-center gap-3 w-full bg-primary-dark text-white font-bold py-4 px-6 rounded-sm hover:bg-primary transition-all duration-300"
                        >
                            Contactar por WhatsApp
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </a>

                        <p className="text-xs text-center text-slate-400 mt-4">
                            * Consultas iniciales gratuitas vía chat.
                        </p>
                    </div>

                </div>
            </div>
        </section>
    );
}

function ContactItem({ icon, text, label }: { icon: any, text: string, label: string }) {
    return (
        <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-primary/5 text-primary rounded-full flex items-center justify-center shrink-0">
                {icon}
            </div>
            <div>
                <p className="text-xs text-slate-500 uppercase tracking-wide">{label}</p>
                <p className="text-lg font-medium text-slate-800">{text}</p>
            </div>
        </div>
    )
}