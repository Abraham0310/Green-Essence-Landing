import { AlertCircle, Droplets, Bug, SunDim } from "lucide-react";

export function Diagnosis() {
    return (
        <section id="diagnostico" className="py-24 bg-white">
            <div className="max-w-6xl mx-auto px-4">

                {/* Encabezado de Sección */}
                <div className="text-center mb-16 max-w-3xl mx-auto">
          <span className="text-accent font-bold tracking-widest uppercase text-xs mb-2 block">
            Análisis Técnico
          </span>
                    <h2 className="text-3xl md:text-4xl font-serif text-primary-dark mb-6">
                        ¿Tu espacio ha perdido su esencia vital?
                    </h2>
                    <p className="text-slate-600 text-lg leading-relaxed">
                        Un jardín sin brillo no es solo un problema estético; es un ecosistema en desequilibrio.
                        Identificamos las patologías que afectan tu inversión verde.
                    </p>
                </div>

                {/* Grid de Problemas (Pain Points) */}
                <div className="grid md:grid-cols-4 gap-6">
                    <ProblemCard
                        icon={<SunDim className="w-8 h-8" />}
                        title="Déficit Lumínico/Nutricional"
                        desc="Hojas amarillentas o sin brillo por falta de micronutrientes específicos."
                    />
                    <ProblemCard
                        icon={<Bug className="w-8 h-8" />}
                        title="Plagas Silenciosas"
                        desc="Insectos que devoran la raíz y hojas sin que lo notes a simple vista."
                    />
                    <ProblemCard
                        icon={<Droplets className="w-8 h-8" />}
                        title="Estrés Hídrico"
                        desc="Riego ineficiente que ahoga la planta o la seca por falta de retención."
                    />
                    <ProblemCard
                        icon={<AlertCircle className="w-8 h-8" />}
                        title="Maleza Invasiva"
                        desc="Hierbas parásitas que roban nutrientes y rompen la estética del diseño."
                    />
                </div>



            </div>

        </section>
    );
}

// Componente interno para las tarjetas (Clean Code)
function ProblemCard({ icon, title, desc }: { icon: any, title: string, desc: string }) {
    return (
        <div className="group p-8 bg-surface-offwhite rounded-sm border border-slate-100 hover:border-accent/50 hover:shadow-lg transition-all duration-300">
            <div className="text-primary-light mb-4 group-hover:text-accent transition-colors">
                {icon}
            </div>
            <h3 className="font-bold text-lg text-primary-dark mb-3">{title}</h3>
            <p className="text-sm text-slate-500 leading-relaxed">
                {desc}
            </p>
        </div>
    )
}