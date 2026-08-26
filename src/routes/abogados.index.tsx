import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { ChevronDown, ShieldCheck } from "lucide-react";
import { useState } from "react";
import { AvatarAbogado } from "@/components/sitio/AvatarAbogado";
import { Migas } from "@/components/sitio/Migas";
import {
  AREAS_ABOGADO,
  COMPETENCIAS,
  RANGOS_EXPERIENCIA,
  areasDeLaRed,
  ciudadesDeLaRed,
  filtrarAbogados,
  type FiltrosAbogado,
} from "@/lib/abogados";

const TITLE = "Abogados verificados con tarjeta profesional vigente";
const DESC =
  "Directorio de abogados con tarjeta profesional confirmada ante el Consejo Superior de la Judicatura.";

type Busqueda = {
  area?: string | undefined;
  ciudad?: string | undefined;
  experiencia?: string | undefined;
  competencia?: string | undefined;
};

export const Route = createFileRoute("/abogados/")({
  validateSearch: (s: Record<string, unknown>): Busqueda => ({
    ...(typeof s['area'] === "string" && s['area'] ? { area: s['area'] } : {}),
    ...(typeof s['ciudad'] === "string" && s['ciudad'] ? { ciudad: s['ciudad'] } : {}),
    ...(typeof s['experiencia'] === "string" && s['experiencia']
      ? { experiencia: s['experiencia'] }
      : {}),
    ...(typeof s['competencia'] === "string" && s['competencia']
      ? { competencia: s['competencia'] }
      : {}),
  }),
  loaderDeps: ({ search }) => ({ filtrada: Object.values(search).filter(Boolean).length > 0 }),
  loader: ({ deps }) => ({ filtrada: deps.filtrada }),
  head: ({ loaderData }) => {
    // Las combinaciones de filtros generan URL con parámetros: noindex.
    const filtrada = loaderData?.filtrada === true;
    return {
      ...metaSeo({
        ...PAGINAS.abogados,
        ...(filtrada ? { robots: "noindex, follow" } : {}),
      }),
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            name: PAGINAS.abogados.titulo,
            description: PAGINAS.abogados.descripcion,
            url: absoluta(PAGINAS.abogados.ruta),
            inLanguage: "es-CO",
          }),
        },
      ],
    };
  },
  component: Pagina,
});

function Pagina() {
  const search = Route.useSearch();
  const navigate = useNavigate({ from: "/abogados" });
  const [abierto, setAbierto] = useState(false);

  const filtros: FiltrosAbogado = search;
  const resultados = filtrarAbogados(filtros);
  const activos = Object.values(filtros).filter(Boolean).length;

  function aplicar(cambio: Partial<Busqueda>) {
    void navigate({
      search: (prev: Busqueda) => {
        const siguiente: Busqueda = { ...prev, ...cambio };
        for (const k of Object.keys(siguiente) as (keyof Busqueda)[]) {
          if (!siguiente[k]) delete siguiente[k];
        }
        return siguiente;
      },
    });
  }

  const areaTitulo = filtros.area ? AREAS_ABOGADO[filtros.area] : undefined;

  return (
    <div className="bg-papel">
      <div className="contenedor pb-20 pt-28 lg:pb-28 lg:pt-32">
        <Migas items={[{ titulo: "Inicio", to: "/" }, { titulo: "Abogados" }]} />

        <header className="mt-6 max-w-[44rem]">
          <p className="eyebrow">Red profesional</p>
          <h1 className="display-lg mt-4">Abogados verificados</h1>
          <p className="lectura mt-6 text-[1.15rem] leading-[1.7] text-tinta-suave">
            Todos los abogados de la red tienen tarjeta profesional confirmada ante el Consejo
            Superior de la Judicatura.
          </p>
        </header>

        <div className="mt-14 grid gap-10 lg:grid-cols-[260px_minmax(0,1fr)] lg:gap-12">
          {/* Filtros: barra lateral en escritorio, desplegable en móvil. */}
          <aside>
            <button
              type="button"
              onClick={() => setAbierto((v) => !v)}
              aria-expanded={abierto}
              className="flex w-full items-center justify-between gap-3 rounded-[6px] border border-linea px-4 py-3 font-mono text-[0.78rem] uppercase tracking-[0.08em] lg:hidden"
            >
              <span>Filtros{activos > 0 ? ` (${activos})` : ""}</span>
              <ChevronDown
                aria-hidden="true"
                className={`h-4 w-4 transition-transform ${abierto ? "rotate-180" : ""}`}
              />
            </button>

            <div
              className={`${abierto ? "block" : "hidden"} mt-4 space-y-7 lg:mt-0 lg:block lg:sticky lg:top-28`}
            >
              <Grupo titulo="Área">
                <Opciones
                  valor={filtros.area}
                  items={areasDeLaRed().map((a) => ({ valor: a.slug, titulo: a.titulo }))}
                  onElegir={(v) => aplicar({ area: v })}
                />
              </Grupo>

              <Grupo titulo="Ciudad">
                <Opciones
                  valor={filtros.ciudad}
                  items={ciudadesDeLaRed().map((c) => ({ valor: c, titulo: c }))}
                  onElegir={(v) => aplicar({ ciudad: v })}
                />
              </Grupo>

              <Grupo titulo="Años de experiencia">
                <Opciones
                  valor={filtros.experiencia}
                  items={RANGOS_EXPERIENCIA.map((r) => ({ valor: r.valor, titulo: r.titulo }))}
                  onElegir={(v) => aplicar({ experiencia: v })}
                />
              </Grupo>

              <Grupo titulo="Competencia procesal">
                <Opciones
                  valor={filtros.competencia}
                  items={COMPETENCIAS.map((c) => ({ valor: c, titulo: c }))}
                  onElegir={(v) => aplicar({ competencia: v })}
                />
              </Grupo>

              {activos > 0 ? (
                <button
                  type="button"
                  onClick={() =>
                    aplicar({
                      area: undefined,
                      ciudad: undefined,
                      experiencia: undefined,
                      competencia: undefined,
                    })
                  }
                  className="font-mono text-[0.75rem] uppercase tracking-[0.08em] text-esmeralda underline decoration-linea underline-offset-4"
                >
                  Limpiar filtros
                </button>
              ) : null}
            </div>
          </aside>

          <div>
            <p className="font-mono text-[0.75rem] uppercase tracking-[0.08em] text-tinta-suave">
              {resultados.length} {resultados.length === 1 ? "abogado" : "abogados"}
            </p>

            {resultados.length === 0 ? (
              <div className="mt-6 rounded-[6px] border border-linea bg-papel-hueso p-6 sm:p-8">
                <h2 className="text-[1.1rem] font-semibold">
                  Todavía no tenemos abogados
                  {areaTitulo ? ` de ${areaTitulo.toLowerCase()}` : ""}
                  {filtros.ciudad ? ` en ${filtros.ciudad}` : ""}.
                </h2>
                <p className="mt-3 max-w-[34rem] text-[0.98rem] leading-relaxed text-tinta-suave">
                  Cuéntanos tu caso y buscamos uno para ti.
                </p>
                <Link to="/iniciar-caso" className="btn-primario btn-pulso mt-6 inline-flex">
                  Contar mi caso
                </Link>
              </div>
            ) : (
              <div className="mt-6 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
                {resultados.map((a) => (
                  <article
                    key={a.slug}
                    className="flex h-full flex-col rounded-[6px] border border-linea p-5"
                  >
                    <div className="flex items-start gap-4">
                      <AvatarAbogado nombre={a.nombre} iniciales={a.iniciales} foto={a.foto} />
                      <div className="min-w-0">
                        <h2 className="text-[1.02rem] font-semibold leading-snug">{a.nombre}</h2>
                        <p className="mt-1 font-mono text-[0.8rem] text-tinta-suave">
                          T.P. {a.tarjeta}
                        </p>
                      </div>
                    </div>

                    <ul className="mt-4 flex flex-wrap gap-2">
                      {a.areas.map((s) => (
                        <li
                          key={s}
                          className="rounded-full border border-linea bg-papel-hueso px-2.5 py-1 font-mono text-[0.7rem] uppercase tracking-[0.06em] text-tinta-suave"
                        >
                          {AREAS_ABOGADO[s] ?? s}
                        </li>
                      ))}
                    </ul>

                    <dl className="mt-4 space-y-1 text-[0.9rem] text-tinta-suave">
                      <div className="flex gap-2">
                        <dt className="sr-only">Ciudad</dt>
                        <dd>{a.ciudad}</dd>
                      </div>
                      <div className="flex gap-2">
                        <dt className="sr-only">Años de ejercicio</dt>
                        <dd>{a.aniosExperiencia} años de ejercicio</dd>
                      </div>
                    </dl>

                    <div className="mt-auto pt-5">
                      <Link
                        to="/abogados/$slug"
                        params={{ slug: a.slug }}
                        className="btn-secundario inline-flex w-full justify-center"
                      >
                        Ver perfil
                      </Link>
                    </div>
                  </article>
                ))}
              </div>
            )}

            <div className="mt-12 flex items-start gap-3 rounded-[6px] border border-linea bg-papel-hueso p-5">
              <ShieldCheck
                aria-hidden="true"
                strokeWidth={1.7}
                className="mt-0.5 h-5 w-5 shrink-0 text-esmeralda"
              />
              <p className="text-[0.92rem] leading-relaxed text-tinta-suave">
                No publicamos calificaciones, estrellas ni reseñas de abogados. La información del
                perfil se limita a formación, especializaciones, cargos y asuntos que atiende, en los
                términos del artículo 31 de la Ley 1123 de 2007.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Grupo({ titulo, children }: { titulo: string; children: React.ReactNode }) {
  return (
    <div>
      <p className="font-mono text-[0.75rem] font-semibold uppercase tracking-[0.08em] text-tinta-suave">
        {titulo}
      </p>
      <div className="mt-3">{children}</div>
    </div>
  );
}

function Opciones({
  valor,
  items,
  onElegir,
}: {
  valor: string | undefined;
  items: { valor: string; titulo: string }[];
  onElegir: (v: string | undefined) => void;
}) {
  return (
    <ul className="space-y-1.5">
      {items.map((i) => {
        const activo = valor === i.valor;
        return (
          <li key={i.valor}>
            <button
              type="button"
              aria-pressed={activo}
              onClick={() => onElegir(activo ? undefined : i.valor)}
              className={`w-full rounded-[4px] px-2 py-1.5 text-left text-[0.92rem] transition-colors ${
                activo
                  ? "bg-esmeralda-claro font-semibold text-esmeralda"
                  : "text-tinta-suave hover:text-esmeralda"
              }`}
            >
              {i.titulo}
            </button>
          </li>
        );
      })}
    </ul>
  );
}
