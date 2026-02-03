import { Hero } from "@/presentation/sections/Hero";
import { Diagnosis } from "@/presentation/sections/Diagnosis";
import {MainServices} from "@/presentation/sections/MainServices";
import {Treatments} from "@/presentation/sections/Treatments";
import {Contact} from "@/presentation/sections/Contact";

export default function Home() {
  return (
      <main className="min-h-screen bg-surface-offwhite">

          {/* 1. PORTADA */}
          <Hero />

          {/* 2. SERVICIOS PRINCIPALES (Subió de nivel) */}
          {/* "Ingeniería Aplicada al Paisaje" + 3 Cards */}
          <MainServices />

          {/* 3. EL PROBLEMA / DIAGNÓSTICO (Bajó de nivel) */}
          {/* "¿Tu espacio ha perdido esencia?" + 4 Iconos pequeños */}
          <Diagnosis />

          {/* 4. LA SOLUCIÓN / PRODUCTOS (Bajó al final) */}
          {/* Bloque verde oscuro con Tratamientos */}
          <Treatments />

        {/* Aquí importaremos las siguientes secciones conforme las creemos:*/}

          <Contact />


      </main>
  );
}