import { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";

export type ItemToc = { id: string; titulo: string };

/**
 * Tabla de contenido. En escritorio va en la barra pegajosa y resalta el
 * apartado activo al scroll. En móvil se muestra colapsable arriba.
 */
export function TablaContenido({
  items,
  colapsable = false,
}: {
  items: ItemToc[];
  colapsable?: boolean;
}) {
  const [activo, setActivo] = useState(items[0]?.id ?? "");
  const [abierto, setAbierto] = useState(false);

  useEffect(() => {
    const nodos = items
      .map((i) => document.getElementById(i.id))
      .filter((n): n is HTMLElement => n !== null);
    if (nodos.length === 0 || typeof IntersectionObserver === "undefined") return;

    const obs = new IntersectionObserver(
      (entradas) => {
        const visibles = entradas
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        const primero = visibles[0];
        if (primero) setActivo(primero.target.id);
      },
      { rootMargin: "-96px 0px -70% 0px", threshold: 0 },
    );
    for (const n of nodos) obs.observe(n);
    return () => obs.disconnect();
  }, [items]);

  const lista = (
    <ol className="space-y-1">
      {items.map((i, idx) => (
        <li key={i.id}>
          <a
            href={`#${i.id}`}
            onClick={() => setAbierto(false)}
            aria-current={activo === i.id ? "true" : undefined}
            className={`flex gap-2 rounded-[4px] px-2 py-1.5 text-[0.875rem] leading-snug transition-colors ${
              activo === i.id
                ? "bg-esmeralda-claro font-semibold text-esmeralda"
                : "text-tinta-suave hover:text-esmeralda"
            }`}
          >
            <span className="font-mono text-[0.75rem] opacity-70">
              {String(idx + 1).padStart(2, "0")}
            </span>
            <span>{i.titulo}</span>
          </a>
        </li>
      ))}
    </ol>
  );

  if (!colapsable) {
    return (
      <nav aria-label="Contenido de la guía">
        <p className="eyebrow">En esta guía</p>
        <div className="mt-3">{lista}</div>
      </nav>
    );
  }

  return (
    <nav
      aria-label="Contenido de la guía"
      className="rounded-[6px] border border-linea bg-papel-hueso"
    >
      <button
        type="button"
        onClick={() => setAbierto((v) => !v)}
        aria-expanded={abierto}
        className="flex w-full items-center justify-between gap-3 px-4 py-3 text-left"
      >
        <span className="font-mono text-[0.78rem] font-semibold uppercase tracking-[0.08em] text-tinta-suave">
          En esta guía · {items.length} apartados
        </span>
        <ChevronDown
          aria-hidden="true"
          strokeWidth={1.8}
          className={`h-4 w-4 shrink-0 text-esmeralda transition-transform ${
            abierto ? "rotate-180" : ""
          }`}
        />
      </button>
      {abierto ? <div className="border-t border-linea px-2 py-3">{lista}</div> : null}
    </nav>
  );
}
