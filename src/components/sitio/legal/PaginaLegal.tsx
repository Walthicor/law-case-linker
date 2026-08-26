import type { ReactNode } from "react";
import { Info, TriangleAlert } from "lucide-react";
import { Migas, type Miga } from "@/components/sitio/Migas";
import { TablaContenido } from "@/components/sitio/guias/TablaContenido";
import type { BloqueLegal, SeccionLegal } from "@/lib/legal";

function Bloque({ bloque }: { bloque: BloqueLegal }) {
  switch (bloque.tipo) {
    case "p":
      return <p className="text-[1rem] leading-relaxed text-tinta-suave">{bloque.texto}</p>;
    case "lista":
      return (
        <ul className="space-y-2">
          {bloque.items.map((t) => (
            <li key={t} className="flex gap-3 text-[0.97rem] leading-relaxed text-tinta-suave">
              <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-esmeralda" />
              <span>{t}</span>
            </li>
          ))}
        </ul>
      );
    case "numerada":
      return (
        <ol className="space-y-3">
          {bloque.items.map((t, i) => (
            <li key={t} className="flex gap-3 text-[0.97rem] leading-relaxed text-tinta-suave">
              <span className="mt-0.5 font-mono text-[0.78rem] font-semibold text-esmeralda">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span>{t}</span>
            </li>
          ))}
        </ol>
      );
    case "nota":
      return (
        <div className="bloque-norma flex gap-3">
          <Info aria-hidden="true" strokeWidth={1.8} className="mt-0.5 h-4 w-4 shrink-0 text-esmeralda" />
          <p className="text-[0.95rem] leading-relaxed text-tinta">{bloque.texto}</p>
        </div>
      );
    case "aviso":
      return (
        <div className="aviso-plazo flex gap-3">
          <TriangleAlert aria-hidden="true" strokeWidth={1.8} className="mt-0.5 h-4 w-4 shrink-0 text-sello" />
          <p className="text-[0.95rem] leading-relaxed text-tinta">{bloque.texto}</p>
        </div>
      );
    case "tabla":
      return (
        <div className="overflow-x-auto rounded-[6px] border border-linea">
          <table className="w-full border-collapse text-left text-[0.9rem]">
            <thead className="bg-papel-hueso">
              <tr>
                {bloque.encabezados.map((h) => (
                  <th
                    key={h}
                    scope="col"
                    className="border-b border-linea px-4 py-3 font-mono text-[0.72rem] uppercase tracking-[0.08em] text-tinta-suave"
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {bloque.filas.map((fila) => (
                <tr key={fila.join("|")} className="border-b border-linea last:border-0">
                  {fila.map((celda, i) => (
                    <td
                      key={celda + i}
                      className={
                        i === 0
                          ? "px-4 py-3 font-mono text-[0.82rem] text-tinta"
                          : "px-4 py-3 text-tinta-suave"
                      }
                    >
                      {celda}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
  }
}

type Props = {
  titulo: string;
  entradilla: string;
  actualizacion: string;
  secciones: SeccionLegal[];
  migas?: Miga[];
  pie?: ReactNode;
};

/** Plantilla común de las páginas legales: lectura 680 px + TOC pegajosa. */
export function PaginaLegal({ titulo, entradilla, actualizacion, secciones, migas, pie }: Props) {
  const toc = secciones.map((s) => ({ id: s.id, titulo: s.titulo }));

  return (
    <div className="contenedor py-14 md:py-20">
      <Migas items={migas ?? [{ titulo: "Inicio", to: "/" }, { titulo }]} />

      <header className="mt-8 max-w-[680px]">
        <p className="font-mono text-[0.78rem] uppercase tracking-[0.08em] text-tinta-suave">
          Última actualización · {actualizacion}
        </p>
        <h1 className="display-lg mt-3">{titulo}</h1>
        <p className="mt-5 text-[1.05rem] leading-relaxed text-tinta-suave">{entradilla}</p>
      </header>

      <div className="mt-12 flex flex-col gap-10 lg:flex-row lg:gap-14">
        <aside className="lg:order-2 lg:w-[260px] lg:shrink-0">
          <div className="lg:hidden">
            <TablaContenido items={toc} colapsable />
          </div>
          <div className="hidden lg:sticky lg:top-28 lg:block">
            <TablaContenido items={toc} />
          </div>
        </aside>

        <div className="min-w-0 max-w-[680px] lg:order-1">
          {secciones.map((s, i) => (
            <section
              key={s.id}
              id={s.id}
              className={i === 0 ? "scroll-mt-28" : "mt-12 scroll-mt-28 border-t border-linea pt-12"}
            >
              <h2 className="display-md text-[1.4rem]">{s.titulo}</h2>
              <div className="mt-5 space-y-5">
                {s.bloques.map((b, j) => (
                  <Bloque key={j} bloque={b} />
                ))}
              </div>
            </section>
          ))}
          {pie ? <div className="mt-12 border-t border-linea pt-12">{pie}</div> : null}
        </div>
      </div>
    </div>
  );
}
