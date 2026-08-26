import { AvisoPlazo } from "@/components/sitio/AvisoPlazo";
import { BloqueNorma } from "@/components/sitio/BloqueNorma";
import type { BloqueGuia, Paso, Tabla } from "@/lib/guias";

export function PasoAPaso({ titulo, pasos }: { titulo: string; pasos: Paso[] }) {
  return (
    <div>
      <h3 className="text-[1.05rem] font-semibold">{titulo}</h3>
      <ol className="mt-5 space-y-5">
        {pasos.map((p, i) => (
          <li key={p.titulo} className="flex gap-4">
            <span
              aria-hidden="true"
              className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-esmeralda font-mono text-[0.82rem] font-semibold text-esmeralda"
            >
              {i + 1}
            </span>
            <div>
              <p className="font-semibold">{p.titulo}</p>
              <p className="mt-1 text-[0.95rem] leading-relaxed text-tinta-suave">{p.texto}</p>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}

export function EnResumen({
  titulo = "En resumen",
  puntos,
}: {
  titulo?: string | undefined;
  puntos: string[];
}) {

  return (
    <div className="rounded-[6px] border border-linea bg-papel-hueso px-5 py-5">
      <p className="font-mono text-[0.78rem] font-semibold uppercase tracking-[0.08em] text-tinta-suave">
        {titulo}
      </p>
      <ul className="mt-4 space-y-2.5">
        {puntos.slice(0, 5).map((t) => (
          <li key={t} className="flex gap-3 text-[0.95rem] leading-relaxed">
            <span aria-hidden="true" className="mt-[0.7em] h-px w-3 shrink-0 bg-esmeralda" />
            <span>{t}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function TablaGuia({ tabla }: { tabla: Tabla }) {
  return (
    <div>
      {tabla.titulo ? <h3 className="text-[1.05rem] font-semibold">{tabla.titulo}</h3> : null}
      <div className="mt-4 -mx-5 overflow-x-auto px-5 sm:mx-0 sm:px-0">
        <table className="w-full min-w-[520px] border-collapse text-left text-[0.92rem]">
          <thead>
            <tr className="border-y border-linea bg-papel-hueso">
              {tabla.encabezados.map((h) => (
                <th
                  key={h}
                  scope="col"
                  className="px-3 py-3 font-mono text-[0.75rem] uppercase tracking-[0.06em] text-tinta-suave"
                >
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-linea">
            {tabla.filas.map((fila, i) => (
              <tr key={i}>
                {fila.map((celda, j) => (
                  <td key={j} className="px-3 py-3 align-top leading-relaxed">
                    {celda}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export function NecesitasAbogado({ solo, abogado }: { solo: string[]; abogado: string[] }) {
  return (
    <div className="grid gap-6 rounded-[6px] border border-linea md:grid-cols-2">
      <div className="p-5 sm:p-6">
        <p className="eyebrow">Puedes hacerlo solo si</p>
        <ul className="mt-4 space-y-3">
          {solo.map((t) => (
            <li key={t} className="flex gap-3 text-[0.93rem] leading-relaxed">
              <span aria-hidden="true" className="mt-[0.7em] h-px w-3 shrink-0 bg-esmeralda" />
              <span>{t}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="border-t border-linea bg-papel-hueso p-5 sm:p-6 md:border-l md:border-t-0">
        <p className="eyebrow text-sello">Necesitas abogado si</p>
        <ul className="mt-4 space-y-3">
          {abogado.map((t) => (
            <li key={t} className="flex gap-3 text-[0.93rem] leading-relaxed">
              <span aria-hidden="true" className="mt-[0.7em] h-px w-3 shrink-0 bg-sello" />
              <span>{t}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export function Bloque({ bloque }: { bloque: BloqueGuia }) {
  switch (bloque.tipo) {
    case "parrafos":
      return (
        <div>
          {bloque.titulo ? (
            <h3 className="text-[1.05rem] font-semibold">{bloque.titulo}</h3>
          ) : null}
          <div className="space-y-4">
            {bloque.textos.map((t) => (
              <p key={t.slice(0, 40)} className="text-[1.0625rem] leading-[1.75] text-tinta-suave">
                {t}
              </p>
            ))}
          </div>
        </div>
      );
    case "norma":
      return <BloqueNorma {...bloque.norma} />;
    case "plazo":
      return <AvisoPlazo titulo={bloque.titulo} texto={bloque.texto} />;
    case "pasos":
      return <PasoAPaso titulo={bloque.titulo} pasos={bloque.pasos} />;
    case "resumen":
      return <EnResumen titulo={bloque.titulo} puntos={bloque.puntos} />;
    case "tabla":
      return <TablaGuia tabla={bloque.tabla} />;
  }
}
