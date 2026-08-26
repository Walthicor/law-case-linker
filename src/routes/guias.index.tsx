import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { ArrowRight, Search } from "lucide-react";
import { Migas } from "@/components/sitio/Migas";
import { Revelar } from "@/components/sitio/Revelar";
import { silosConGuias, todasLasGuias } from "@/lib/guias";

const TITLE = "Guías legales de Colombia | Respuestas claras";
const DESCRIPTION =
  "Respuestas claras a las dudas jurídicas más comunes en Colombia: qué dice la ley, plazos y paso a paso.";
const POR_PAGINA = 9;

export const Route = createFileRoute("/guias/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/guias" }],
  }),
  component: Pagina,
});

function normalizar(s: string) {
  return s
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}

function Pagina() {
  const guias = useMemo(() => todasLasGuias(), []);
  const silos = useMemo(() => silosConGuias(), []);
  const [silo, setSilo] = useState<string | null>(null);
  const [texto, setTexto] = useState("");
  const [pagina, setPagina] = useState(1);

  const filtradas = useMemo(() => {
    const q = normalizar(texto.trim());
    return guias.filter(
      (g) => (silo === null || g.silo === silo) && (q === "" || normalizar(g.titulo).includes(q)),
    );
  }, [guias, silo, texto]);

  const totalPaginas = Math.max(1, Math.ceil(filtradas.length / POR_PAGINA));
  const actual = Math.min(pagina, totalPaginas);
  const visibles = filtradas.slice((actual - 1) * POR_PAGINA, actual * POR_PAGINA);

  const cambiarFiltro = (nuevo: string | null) => {
    setSilo(nuevo);
    setPagina(1);
  };

  return (
    <div className="bg-papel">
      <div className="contenedor py-12 lg:py-16">
        <Migas items={[{ titulo: "Inicio", to: "/" }, { titulo: "Guías" }]} />

        <Revelar>
          <h1 className="display-lg mt-8">Guías legales</h1>
          <p className="lectura mt-4 text-[1.05rem] leading-relaxed text-tinta">
            Respuestas claras a las dudas jurídicas más comunes en Colombia.
          </p>
        </Revelar>

        {/* FILTROS + BUSCADOR */}
        <div className="mt-10 flex flex-col gap-5">
          <div className="relative max-w-[420px]">
            <Search
              aria-hidden="true"
              strokeWidth={1.7}
              className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-tinta-suave"
            />
            <input
              type="search"
              value={texto}
              onChange={(e) => {
                setTexto(e.target.value);
                setPagina(1);
              }}
              placeholder="Buscar en los títulos…"
              aria-label="Buscar guías por título"
              className="campo pl-9"
            />
          </div>

          <ul className="flex flex-wrap gap-2" aria-label="Filtrar por área">
            <li>
              <button
                type="button"
                onClick={() => cambiarFiltro(null)}
                aria-pressed={silo === null}
                className={`rounded-full border px-3.5 py-1.5 text-[0.85rem] transition-colors ${
                  silo === null
                    ? "border-esmeralda bg-esmeralda-claro font-semibold text-esmeralda"
                    : "border-linea text-tinta-suave hover:border-esmeralda hover:text-esmeralda"
                }`}
              >
                Todas <span className="font-mono text-[0.78rem]">{guias.length}</span>
              </button>
            </li>
            {silos.map((s) => (
              <li key={s.slug}>
                <button
                  type="button"
                  onClick={() => cambiarFiltro(s.slug)}
                  aria-pressed={silo === s.slug}
                  className={`rounded-full border px-3.5 py-1.5 text-[0.85rem] transition-colors ${
                    silo === s.slug
                      ? "border-esmeralda bg-esmeralda-claro font-semibold text-esmeralda"
                      : "border-linea text-tinta-suave hover:border-esmeralda hover:text-esmeralda"
                  }`}
                >
                  {s.titulo} <span className="font-mono text-[0.78rem]">{s.total}</span>
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* GRID — sin imágenes destacadas: este sitio es de texto */}
        {visibles.length === 0 ? (
          <p className="mt-12 text-tinta-suave">
            No hay guías que coincidan con esa búsqueda. Prueba con otra palabra o quita el filtro de
            área.
          </p>
        ) : (
          <ul className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {visibles.map((g) => (
              <li key={g.slug}>
                <Link
                  to="/guias/$slug"
                  params={{ slug: g.slug }}
                  className="tarjeta group flex h-full flex-col"
                >
                  <p className="font-mono text-[0.75rem] uppercase tracking-[0.08em] text-esmeralda">
                    {g.siloTitulo}
                  </p>
                  <h2 className="mt-3 text-[1.02rem] font-semibold leading-snug group-hover:text-esmeralda">
                    {g.titulo}
                  </h2>
                  <p className="mt-2 line-clamp-2 text-[0.9rem] leading-relaxed text-tinta-suave">
                    {g.extracto}
                  </p>
                  <p className="mt-auto pt-5 font-mono text-[0.75rem] uppercase tracking-[0.06em] text-tinta-suave">
                    {g.minutos} min de lectura
                  </p>
                </Link>
              </li>
            ))}
          </ul>
        )}

        {/* PAGINACIÓN — no scroll infinito */}
        {totalPaginas > 1 ? (
          <nav className="mt-12 flex items-center justify-between gap-4" aria-label="Paginación">
            <button
              type="button"
              onClick={() => setPagina(Math.max(1, actual - 1))}
              disabled={actual === 1}
              className="btn-secundario disabled:cursor-not-allowed disabled:opacity-45"
            >
              ← Anterior
            </button>
            <ol className="flex flex-wrap items-center gap-2">
              {Array.from({ length: totalPaginas }, (_, i) => i + 1).map((n) => (
                <li key={n}>
                  <button
                    type="button"
                    onClick={() => setPagina(n)}
                    aria-current={n === actual ? "page" : undefined}
                    className={`h-9 w-9 rounded-[4px] border font-mono text-[0.85rem] transition-colors ${
                      n === actual
                        ? "border-esmeralda bg-esmeralda-claro font-semibold text-esmeralda"
                        : "border-linea text-tinta-suave hover:border-esmeralda hover:text-esmeralda"
                    }`}
                  >
                    {n}
                  </button>
                </li>
              ))}
            </ol>
            <button
              type="button"
              onClick={() => setPagina(Math.min(totalPaginas, actual + 1))}
              disabled={actual === totalPaginas}
              className="btn-secundario disabled:cursor-not-allowed disabled:opacity-45"
            >
              Siguiente →
            </button>
          </nav>
        ) : null}

        <div className="mt-16 rounded-[6px] border border-linea bg-papel-hueso px-6 py-8 sm:px-8">
          <h2 className="display-md">¿Tu caso ya no es una duda?</h2>
          <p className="lectura mt-3 text-[0.98rem] leading-relaxed text-tinta-suave">
            Si hay un plazo corriendo o una demanda en camino, cuéntanos qué pasó y te conectamos con
            un abogado con tarjeta verificada en tu ciudad.
          </p>
          <Link to="/iniciar-caso" className="btn-primario btn-pulso mt-6 inline-flex">
            Contar mi caso
            <ArrowRight aria-hidden="true" strokeWidth={1.7} className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
