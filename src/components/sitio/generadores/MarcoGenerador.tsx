import { useState, type ReactNode } from "react";
import { Download } from "lucide-react";

export type PasoGenerador = { titulo: string; contenido: ReactNode };

/**
 * Marco común de los generadores: pasos a la izquierda, previsualización
 * en vivo del documento a la derecha, y descarga en PDF sin muro.
 */
export function MarcoGenerador({
  pasos,
  vistaPrevia,
}: {
  pasos: PasoGenerador[];
  vistaPrevia: ReactNode;
}) {
  const [paso, setPaso] = useState(0);
  const [correo, setCorreo] = useState("");
  const [enviado, setEnviado] = useState(false);
  const actual = pasos[paso];
  const descargar = () => window.print();

  return (
    <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:items-start">
      {/* ── FORMULARIO POR PASOS ─────────────────────────────── */}
      <div className="no-imprimir">
        <ol className="flex flex-wrap gap-2" aria-label="Pasos del generador">
          {pasos.map((p, i) => (
            <li key={p.titulo}>
              <button
                type="button"
                onClick={() => setPaso(i)}
                aria-current={i === paso ? "step" : undefined}
                className={`rounded-full border px-3 py-1.5 text-[0.82rem] transition-colors ${
                  i === paso
                    ? "border-esmeralda bg-esmeralda text-papel"
                    : "border-linea bg-papel text-tinta-suave hover:border-esmeralda"
                }`}
              >
                <span className="font-mono">{String(i + 1).padStart(2, "0")}</span> {p.titulo}
              </button>
            </li>
          ))}
        </ol>

        <div className="mt-5 rounded-[6px] border border-linea bg-papel">
          <div className="h-[3px] w-full bg-esmeralda" aria-hidden="true" />
          <div className="space-y-5 p-5 sm:p-6">
            <h2 className="text-[1.05rem] font-semibold">{actual?.titulo}</h2>
            {actual?.contenido}
          </div>
        </div>

        <div className="mt-4 flex justify-between gap-3">
          <button
            type="button"
            onClick={() => setPaso((p) => Math.max(p - 1, 0))}
            disabled={paso === 0}
            className="btn-secundario disabled:opacity-40"
          >
            ← Anterior
          </button>
          <button
            type="button"
            onClick={() => setPaso((p) => Math.min(p + 1, pasos.length - 1))}
            disabled={paso === pasos.length - 1}
            className="btn-primario disabled:opacity-40"
          >
            Siguiente →
          </button>
        </div>

        {/* Descarga sin muro */}
        <div className="mt-6 rounded-[6px] border border-linea bg-papel p-5">
          <h2 className="text-[1.02rem] font-semibold">Descargar en PDF</h2>
          <p className="mt-2 text-[0.88rem] leading-relaxed text-tinta-suave">
            El documento ya está completo a la derecha. Si quieres, te lo enviamos por correo;
            también puedes descargarlo sin dejar ningún dato.
          </p>
          <div className="mt-4 flex flex-col gap-3 sm:flex-row">
            <input
              type="email"
              value={correo}
              onChange={(e) => setCorreo(e.target.value)}
              placeholder="tucorreo@ejemplo.com (opcional)"
              aria-label="Correo para recibir el documento"
              className="campo sm:flex-1"
            />
            <button
              type="button"
              onClick={() => {
                setEnviado(true);
                descargar();
              }}
              className="btn-secundario justify-center sm:w-auto"
            >
              <Download className="h-4 w-4" strokeWidth={1.7} aria-hidden="true" />
              Descargar en PDF
            </button>
          </div>
          <button
            type="button"
            onClick={descargar}
            className="mt-3 text-[0.88rem] text-esmeralda underline decoration-esmeralda/30 underline-offset-4"
          >
            o descargar sin correo
          </button>
          {enviado ? (
            <p className="mt-3 text-[0.85rem] text-tinta-suave">
              Listo. En el diálogo de impresión elige «Guardar como PDF».
            </p>
          ) : null}
        </div>
      </div>

      {/* ── PREVISUALIZACIÓN EN VIVO ─────────────────────────── */}
      <div className="lg:sticky lg:top-24">
        <p className="eyebrow no-imprimir mb-3">Vista previa del documento</p>
        {vistaPrevia}
      </div>
    </div>
  );
}
