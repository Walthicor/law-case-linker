import { useId, useRef, useState } from "react";
import { evento } from "@/lib/analitica";
import { Link } from "@tanstack/react-router";
import { AlertTriangle, Download } from "lucide-react";
import { miles, pesos, rangoValor } from "@/lib/liquidacion";
import {
  SMLMV_ALIMENTOS,
  calcularAlimentos,
  type EntradaAlimentos,
  type ResultadoAlimentos,
} from "@/lib/alimentos";

type Estado = {
  ingresos: string;
  otrosHijos: string;
  edades: string[];
  educacion: string;
  salud: string;
  alimentacion: string;
  vivienda: string;
  transporte: string;
  otrasObligaciones: string;
};

const INICIAL: Estado = {
  ingresos: "",
  otrosHijos: "0",
  edades: ["8"],
  educacion: "",
  salud: "",
  alimentacion: "",
  vivienda: "",
  transporte: "",
  otrasObligaciones: "",
};

function soloNumeros(v: string) {
  return v.replace(/[^\d]/g, "");
}

function num(v: string) {
  return Number(soloNumeros(v) || "0");
}

/** Aviso legal destacado: visible siempre, nunca escondido al pie. */
export function AvisoSinPorcentajeLegal() {
  return (
    <div className="flex gap-3 rounded-[6px] border-2 border-sello/50 bg-sello/[0.06] px-5 py-4">
      <AlertTriangle
        className="mt-0.5 h-5 w-5 shrink-0 text-sello"
        strokeWidth={1.8}
        aria-hidden="true"
      />
      <div>
        <p className="font-mono text-[0.8rem] font-semibold uppercase tracking-[0.06em] text-sello">
          En Colombia no existe un porcentaje legal fijo
        </p>
        <p className="mt-2 text-[0.95rem] leading-relaxed text-tinta">
          No hay una norma que fije la cuota alimentaria en un porcentaje del salario. El juez la
          fija según la <strong>capacidad económica del alimentante</strong> y las{" "}
          <strong>necesidades del menor</strong> (Ley 1098 de 2006). Esta calculadora entrega una
          estimación orientativa, no un valor legal.
        </p>
      </div>
    </div>
  );
}

export function CalculadoraCuotaAlimentaria() {
  const idBase = useId();
  const [f, setF] = useState<Estado>(INICIAL);
  const [error, setError] = useState<string | null>(null);
  const [resultado, setResultado] = useState<ResultadoAlimentos | null>(null);
  const [correo, setCorreo] = useState("");
  const [enviado, setEnviado] = useState(false);
  const resultadoRef = useRef<HTMLDivElement | null>(null);

  const set = <K extends keyof Estado>(k: K, v: Estado[K]) => setF((s) => ({ ...s, [k]: v }));

  const cambiarNumeroHijos = (n: number) => {
    setF((s) => {
      const edades = [...s.edades];
      while (edades.length < n) edades.push("8");
      return { ...s, edades: edades.slice(0, n) };
    });
  };

  const cambiarEdad = (i: number, v: string) =>
    setF((s) => {
      const edades = [...s.edades];
      edades[i] = soloNumeros(v).slice(0, 2);
      return { ...s, edades };
    });

  function calcular(evento: React.FormEvent) {
    evento.preventDefault();
    const ingresos = num(f.ingresos);
    if (!ingresos) return setError("Escribe los ingresos mensuales del alimentante.");
    if (f.edades.length === 0) return setError("Indica al menos un hijo beneficiario.");
    const gastos = {
      educacion: num(f.educacion),
      salud: num(f.salud),
      alimentacion: num(f.alimentacion),
      vivienda: num(f.vivienda),
      transporte: num(f.transporte),
    };
    const suma = Object.values(gastos).reduce((a, b) => a + b, 0);
    if (!suma)
      return setError(
        "Escribe al menos un gasto acreditable del menor (educación, salud, alimentación, vivienda o transporte).",
      );
    setError(null);

    const datos: EntradaAlimentos = {
      ingresos,
      otrosHijos: num(f.otrosHijos),
      beneficiarios: f.edades.map((e) => ({ edad: Number(e || "0") })),
      gastos,
      otrasObligaciones: num(f.otrasObligaciones),
    };
    setResultado(calcularAlimentos(datos));
    evento("herramienta_usada", { nombre: "calculadora-cuota-alimentaria" });
    setEnviado(false);
    requestAnimationFrame(() =>
      resultadoRef.current?.scrollIntoView({ behavior: "smooth", block: "start" }),
    );
  }

  const descargar = () => {
    evento("pdf_descargado", { nombre: "calculadora-cuota-alimentaria" });
    window.print();
  };

  const CampoPeso = ({
    clave,
    etiqueta,
    nota,
    placeholder,
  }: {
    clave: keyof Estado;
    etiqueta: string;
    nota?: string;
    placeholder?: string;
  }) => (
    <div>
      <label htmlFor={`${idBase}-${clave}`} className="block text-sm font-medium text-tinta">
        {etiqueta}
      </label>
      <div className="relative mt-2">
        <span
          aria-hidden="true"
          className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 font-mono text-[0.95rem] text-tinta-suave"
        >
          $
        </span>
        <input
          id={`${idBase}-${clave}`}
          inputMode="numeric"
          autoComplete="off"
          value={f[clave] as string}
          onChange={(e) => {
            const n = soloNumeros(e.target.value);
            set(clave, (n ? miles(Number(n)) : "") as Estado[typeof clave]);
          }}
          placeholder={placeholder ?? "0"}
          className="campo pl-7 font-mono"
        />
      </div>
      {nota ? <p className="mt-2 text-[0.8rem] text-tinta-suave">{nota}</p> : null}
    </div>
  );

  return (
    <div>
      <div className="mb-6">
        <AvisoSinPorcentajeLegal />
      </div>

      <form
        onSubmit={calcular}
        className="overflow-hidden rounded-[6px] border border-linea bg-papel"
        noValidate
      >
        <div className="h-[3px] w-full bg-esmeralda" aria-hidden="true" />
        <div className="p-5 sm:p-7">
          <p className="eyebrow">Capacidad económica del alimentante</p>
          <div className="mt-4 grid gap-5 sm:grid-cols-2">
            <CampoPeso
              clave="ingresos"
              etiqueta="Ingresos mensuales del alimentante"
              placeholder={miles(SMLMV_ALIMENTOS * 2)}
              nota="Salario, honorarios o ingresos por actividad independiente."
            />
            <div>
              <label
                htmlFor={`${idBase}-otrosHijos`}
                className="block text-sm font-medium text-tinta"
              >
                Otros hijos a cargo (distintos a los beneficiarios)
              </label>
              <input
                id={`${idBase}-otrosHijos`}
                inputMode="numeric"
                value={f.otrosHijos}
                onChange={(e) => set("otrosHijos", soloNumeros(e.target.value).slice(0, 2))}
                className="campo mt-2 font-mono"
              />
              <p className="mt-2 text-[0.8rem] text-tinta-suave">
                Reducen la proporción disponible para esta cuota.
              </p>
            </div>

            <CampoPeso
              clave="otrasObligaciones"
              etiqueta="Otras obligaciones alimentarias mensuales"
              nota="Cuotas ya fijadas por juez, acta de conciliación o acuerdo vigente."
            />

            <div>
              <label htmlFor={`${idBase}-hijos`} className="block text-sm font-medium text-tinta">
                Número de beneficiarios
              </label>
              <select
                id={`${idBase}-hijos`}
                value={String(f.edades.length)}
                onChange={(e) => cambiarNumeroHijos(Number(e.target.value))}
                className="campo mt-2"
              >
                {[1, 2, 3, 4, 5].map((n) => (
                  <option key={n} value={n}>
                    {n} {n === 1 ? "hijo" : "hijos"}
                  </option>
                ))}
              </select>
            </div>

            <div className="sm:col-span-2">
              <span className="block text-sm font-medium text-tinta">Edad de cada hijo</span>
              <div className="mt-2 flex flex-wrap gap-3">
                {f.edades.map((edad, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <label
                      htmlFor={`${idBase}-edad-${i}`}
                      className="font-mono text-[0.8rem] text-tinta-suave"
                    >
                      Hijo {i + 1}
                    </label>
                    <input
                      id={`${idBase}-edad-${i}`}
                      inputMode="numeric"
                      value={edad}
                      onChange={(e) => cambiarEdad(i, e.target.value)}
                      className="campo w-20 font-mono"
                    />
                  </div>
                ))}
              </div>
              <p className="mt-2 text-[0.8rem] text-tinta-suave">
                La edad importa: los gastos de un adolescente son mayores que los de un niño de
                primera infancia.
              </p>
            </div>
          </div>

          <div className="mt-8 border-t border-linea pt-6">
            <p className="eyebrow">Gastos acreditables del menor (mensuales)</p>
            <div className="mt-4 grid gap-5 sm:grid-cols-2">
              <CampoPeso
                clave="educacion"
                etiqueta="Educación"
                nota="Pensión, matrícula prorrateada, útiles, uniformes."
              />
              <CampoPeso clave="salud" etiqueta="Salud" nota="EPS o medicina prepagada, terapias, medicamentos." />
              <CampoPeso clave="alimentacion" etiqueta="Alimentación" />
              <CampoPeso clave="vivienda" etiqueta="Vivienda" nota="Parte proporcional de arriendo y servicios." />
              <CampoPeso clave="transporte" etiqueta="Transporte" />
            </div>
          </div>

          {error ? (
            <p role="alert" className="mt-5 text-[0.9rem] text-sello">
              {error}
            </p>
          ) : null}

          <button type="submit" className="btn-primario mt-7 w-full justify-center">
            Estimar la cuota alimentaria
          </button>
        </div>
      </form>

      <div ref={resultadoRef} aria-live="polite">
        {resultado ? (
          <div className="animar-resultado mt-8">
            <div className="overflow-hidden rounded-[6px] border border-linea bg-papel-hueso">
              <div className="border-b border-linea px-5 py-4 sm:px-7">
                <p className="eyebrow">Rango estimado de cuota mensual</p>
                <p className="mt-1 text-[0.85rem] text-tinta-suave">
                  Gastos acreditados del menor:{" "}
                  <span className="font-mono">{pesos(resultado.gastosTotales)}</span>
                </p>
              </div>

              <div className="grid divide-y divide-linea sm:grid-cols-3 sm:divide-x sm:divide-y-0">
                {[
                  { et: "Mínimo", v: resultado.minimo, acento: false },
                  { et: "Sugerido", v: resultado.sugerido, acento: true },
                  { et: "Máximo", v: resultado.maximo, acento: false },
                ].map((c) => (
                  <div key={c.et} className={`px-5 py-6 text-center ${c.acento ? "bg-papel" : ""}`}>
                    <p className="font-mono text-[0.78rem] font-semibold uppercase tracking-[0.08em] text-tinta-suave">
                      {c.et}
                    </p>
                    <p
                      className={`mt-2 font-mono font-semibold leading-none ${
                        c.acento ? "text-[1.9rem] text-esmeralda" : "text-[1.3rem] text-tinta"
                      }`}
                    >
                      {pesos(c.v)}
                    </p>
                  </div>
                ))}
              </div>

              <div className="border-t border-linea bg-papel px-5 py-5 sm:px-7">
                <p className="text-[0.8rem] font-semibold uppercase tracking-[0.06em] text-tinta-suave">
                  Cómo se llegó a este rango
                </p>
                <ul className="mt-3 space-y-2 text-[0.9rem] leading-relaxed text-tinta-suave">
                  <li>
                    Se sumaron los gastos acreditados del menor:{" "}
                    <span className="font-mono">{pesos(resultado.gastosTotales)}</span>.
                  </li>
                  <li>
                    Se repartió el sostenimiento entre ambos progenitores y se ajustó por los otros
                    hijos a cargo: participación del alimentante{" "}
                    <span className="font-mono">{Math.round(resultado.proporcion * 100)}%</span>.
                  </li>
                  <li>
                    Se aplicó un factor por edad de{" "}
                    <span className="font-mono">{resultado.factorEdad.toFixed(2)}</span> sobre esa
                    participación.
                  </li>
                  <li>
                    Se contrastó con la capacidad económica disponible del alimentante:{" "}
                    <span className="font-mono">{pesos(resultado.capacidad)}</span> después de otras
                    obligaciones.
                  </li>
                  <li>
                    Se limitó el resultado al 50% del ingreso —{" "}
                    <span className="font-mono">{pesos(resultado.tope)}</span> — que es el tope de
                    embargo del salario por alimentos.
                    {resultado.limitadoPorCapacidad
                      ? " En este caso el tope fue el que determinó la cifra."
                      : ""}
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-5">
              <AvisoSinPorcentajeLegal />
            </div>

            <div className="mt-5 rounded-[6px] border border-linea bg-papel p-5 sm:p-6">
              <h2 className="text-[1.02rem] font-semibold">Descargar la estimación en PDF</h2>
              <p className="mt-2 text-[0.88rem] leading-relaxed text-tinta-suave">
                Te la enviamos por correo si quieres conservarla. Ya viste el resultado completo:
                aquí no hay muros ni registros.
              </p>
              <div className="mt-4 flex flex-col gap-3 sm:flex-row">
                <input
                  type="email"
                  value={correo}
                  onChange={(e) => setCorreo(e.target.value)}
                  placeholder="tucorreo@ejemplo.com"
                  aria-label="Correo para recibir el PDF"
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
                  Descargar
                </button>
              </div>
              <button
                type="button"
                onClick={descargar}
                className="mt-3 text-[0.88rem] text-esmeralda underline decoration-esmeralda/30 underline-offset-4"
              >
                o descárgalo sin dejar tu correo
              </button>
              {enviado ? (
                <p className="mt-3 text-[0.85rem] text-tinta-suave">
                  Listo. También puedes guardarla como PDF desde el diálogo de impresión.
                </p>
              ) : null}
            </div>

            <div className="mt-6 tarjeta">
              <p className="text-[0.95rem] leading-relaxed text-tinta">
                Si el otro progenitor no paga o no hay acuerdo, un abogado de familia puede iniciar
                el proceso de fijación de cuota, pedir cuota provisional desde el inicio y solicitar
                embargo del salario hasta el 50%.
              </p>
              <Link
                to="/iniciar-caso"
                search={{
                  area: "Familia",
                  estado: "Voy a iniciar un proceso",
                  valor: rangoValor(resultado.sugerido * 12),
                }}
                className="btn-primario btn-pulso mt-5 inline-flex"
              >
                Hablar con un abogado de familia →
              </Link>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
}
