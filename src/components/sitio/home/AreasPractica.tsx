import { Link } from "@tanstack/react-router";
import * as Iconos from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Revelar } from "@/components/sitio/Revelar";
import { AREAS } from "@/lib/areas";

function Icono({ nombre }: { nombre: string }) {
  const Comp = (Iconos as unknown as Record<string, LucideIcon>)[nombre] ?? Iconos.Scale;
  return <Comp aria-hidden="true" className="h-6 w-6 text-esmeralda" strokeWidth={1.6} />;
}

export function AreasPractica() {
  return (
    <section className="bg-papel py-20 lg:py-24">
      <div className="contenedor">
        <Revelar>
          <h2 className="display-lg">¿Con qué necesitas ayuda?</h2>
          <p className="lectura mt-4 text-tinta-suave">
            Elige el área de tu caso y te mostramos qué opciones tienes.
          </p>
        </Revelar>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {AREAS.map((area, i) => (
            <Revelar key={area.titulo} retardo={(i % 4) * 60} className="group">
              <article className="tarjeta h-full">
                <Icono nombre={area.icono} />
                <h3 className="mt-4 text-[1.05rem] font-semibold leading-snug">
                  <Link to={area.to} className="hover:text-esmeralda">
                    {area.titulo}
                  </Link>
                </h3>
                <p className="mt-2 text-[0.9rem] text-tinta-suave">{area.descripcion}</p>
                <Link
                  to={area.to}
                  className="mt-4 inline-block text-[0.9rem] font-semibold text-tinta-suave transition-colors group-hover:text-esmeralda"
                  aria-label={`Ver más sobre ${area.titulo}`}
                >
                  Ver más →
                </Link>
              </article>
            </Revelar>
          ))}
        </div>
      </div>
    </section>
  );
}
