import { createFileRoute, Link } from "@tanstack/react-router";
import { metaSeo } from "@/lib/seo";
import { PAGINAS } from "@/lib/seo-inventario";
import * as Iconos from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Migas } from "@/components/sitio/Migas";
import { Revelar } from "@/components/sitio/Revelar";
import { PILARES, tituloSeo } from "@/lib/pilares";

const TITULO = tituloSeo("Áreas de práctica");
const DESC =
  "Las 13 áreas del derecho en las que te conectamos con un abogado especialista verificado en Colombia.";

export const Route = createFileRoute("/areas/")({
  head: () => ({
    ...metaSeo(PAGINAS.areas),
  }),
  component: Pagina,
});

function Icono({ nombre }: { nombre: string }) {
  const Comp = (Iconos as unknown as Record<string, LucideIcon>)[nombre] ?? Iconos.Scale;
  return <Comp aria-hidden="true" className="h-6 w-6 text-esmeralda" strokeWidth={1.6} />;
}

function Pagina() {
  return (
    <div className="bg-papel py-16 lg:py-20">
      <div className="contenedor">
        <Migas items={[{ titulo: "Inicio", to: "/" }, { titulo: "Áreas" }]} />

        <Revelar>
          <p className="eyebrow mt-8">ÁREAS DE PRÁCTICA</p>
          <h1 className="display-lg mt-3">Áreas de práctica</h1>
          <p className="lectura mt-4 text-tinta-suave">
            Encuentra un abogado especialista en el área de tu caso.
          </p>
        </Revelar>

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {PILARES.map((p, i) => (
            <Revelar key={p.slug} retardo={(i % 3) * 60}>
              <article className="tarjeta h-full">
                <Icono nombre={p.icono} />
                <h2 className="mt-4 text-[1.1rem] font-semibold leading-snug">
                  <Link
                    to="/areas/$silo"
                    params={{ silo: p.slug }}
                    className="hover:text-esmeralda"
                  >
                    {p.titulo}
                  </Link>
                </h2>
                <p className="mt-2 text-[0.9rem] text-tinta-suave">{p.entrada.slice(0, 120)}…</p>
                <ul className="mt-4 flex flex-wrap gap-x-3 gap-y-2 text-[0.85rem] text-tinta-suave">
                  {p.subareas.map((s) => (
                    <li key={s.slug}>
                      <Link
                        to="/areas/$silo"
                        params={{ silo: p.slug }}
                        hash={s.slug}
                        className="underline decoration-linea underline-offset-4 transition-colors hover:text-esmeralda"
                      >
                        {s.titulo}
                      </Link>
                    </li>
                  ))}
                </ul>
              </article>
            </Revelar>
          ))}
        </div>
      </div>
    </div>
  );
}
