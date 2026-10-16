import { Link } from "@tanstack/react-router";
import { Check } from "lucide-react";
import { Revelar } from "@/components/sitio/Revelar";
import { Foto } from "@/components/sitio/FotoSeguridad";

const PUNTOS = [
  "Análisis de riesgos y estudios de seguridad",
  "Planes de seguridad (PISCC) para alcaldías y gobernaciones",
  "Investigación y análisis criminal",
  "Capacitación para directivos y equipos",
];

/** Bloque de la home que lleva a /consultoria-en-seguridad. */
export function ConsultoriaSeguridad() {
  return (
    <section className="bg-tinta py-20 text-papel lg:py-24">
      <div className="contenedor grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <Revelar>
          <p className="eyebrow text-papel/60">Empresas · Gobiernos · Instituciones</p>
          <h2 className="display-lg mt-3 text-papel">Consultoría en seguridad</h2>
          <p className="mt-4 text-papel/80">
            Además de conectar personas con abogados, acompañamos a empresas y entidades públicas a
            prevenir riesgos de seguridad, con un equipo de abogados penalistas, investigadores
            judiciales y oficiales de la reserva activa. Cobertura en toda Colombia.
          </p>
          <ul className="mt-6 space-y-3">
            {PUNTOS.map((p) => (
              <li key={p} className="flex gap-3 text-papel/90">
                <Check
                  aria-hidden="true"
                  className="mt-1 h-[18px] w-[18px] shrink-0 text-esmeralda-lum"
                  strokeWidth={2}
                />
                <span>{p}</span>
              </li>
            ))}
          </ul>
          <Link to="/consultoria-en-seguridad" className="btn-primario mt-8">
            Conocer la consultoría en seguridad →
          </Link>
        </Revelar>
        <Revelar retardo={80}>
          <Foto
            clave="consultoria-en-seguridad-sala-de-analisis"
            sizes="(max-width: 1023px) 100vw, 50vw"
            className="border border-papel/15"
          />
        </Revelar>
      </div>
    </section>
  );
}
