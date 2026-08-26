import { useId, useRef, useState } from "react";
import { Link } from "@tanstack/react-router";
import { AlarmClock, Download, HelpCircle } from "lucide-react";
import {
  AUXILIO_TRANSPORTE,
  SMLMV,
  calcularLiquidacion,
  miles,
  pesos,
  rangoValor,
  type EntradaLiquidacion,
  type ResultadoLiquidacion,
  type TipoContrato,
  type TipoTerminacion,
} from "@/lib/liquidacion";

const TERMINACIONES: TipoTerminacion[] = [
  "Renuncia voluntaria",
  "Despido con justa causa",
  "Despido SIN justa causa",
  "Terminación de contrato a término fijo",
  "Mutuo acuerdo",
];

const CONTRATOS: TipoContrato[] = ["Término indefinido", "Término fijo", "Obra o labor"];

const FORMULAS: Record<string, string> = {
  cesantias: "salario base × días trabajados ÷ 360",
  intereses: "cesantías × días trabajados × 0,12 ÷ 360",
  prima: "salario base × días del semestre ÷ 360",
  vacaciones: "salario mensual × días trabajados ÷ 720 − días disfrutados",
  indemnizacion:
    "Indefinido: 30 días el primer año + 20 por año adicional (20 + 15 si ganas 10 SMLMV o más). Término fijo: salarios del tiempo faltante.",
};

type Estado = {
  salario: string;
  auxilio: boolean;
  inicio: string;
  fin: string;
  vacaciones: string;
  terminacion: TipoTerminacion;
  contrato: TipoContrato;
  vencimiento: string;
};

const INICIAL: Estado = {
  salario: "",
  auxilio: true,
  inicio: "",
  fin: "",
  vacaciones: "0",
  terminacion: "Despido SIN justa causa",
  contrato: "Término indefinido",
  vencimiento: "",
};

function soloNumeros(v: string) {
  return v.replace(/[^\d]/g, "");
}

export function CalculadoraLiquidacion() {
  const idBase = useId();
  const [f, setF] = useState<Estado>(INICIAL);
  const [error, setError] = useState<string | null>(null);
  const [resultado, setResultado] = useState<ResultadoLiquidacion | null>(null);
  const [entrada, setEntrada] = useState<EntradaLiquidacion | null>(null);
  const [tip, setTip] = useState<string | null>(null);
  const [correo, setCorreo] = useState("");
  const [enviado, setEnviado] = useState(false);
  const resultadoRef = useRef<HTMLDivElement | null>(null);

  const set = <K extends keyof Estado>(k: K, v: Estado[K]) => setF((s) => ({ ...s, [k]: v }));

  function calcular(evento: React.FormEvent) {
    evento.preventDefault();
    const salario = Number(soloNumeros(f.salario));
    if (!salario) return setError("Escribe tu salario mensual básico.");
    if (!f.inicio || !f.fin) return setError("Necesitamos las fechas de inicio y de terminación.");
    if (new Date(f.fin) <= new Date(f.inicio))
      return setError("La fecha de terminación debe ser posterior a la de inicio.");
    setError(null);

    const datos: EntradaLiquidacion = {
      salarioMensual: salario,
      auxilioTransporte: f.auxilio && salario < SMLMV * 2,
      fechaInicio: f.inicio,
      fechaFin: f.fin,
      diasVacacionesDisfrutados: Number(soloNumeros(f.vacaciones) || "0"),
      terminacion: f.terminacion,
      contrato: f.contrato,
      ...(f.vencimiento ? { fechaVencimiento: f.vencimiento } : {}),
    };
    setEntrada(datos);
    setResultado(calcularLiquidacion(datos));
    setEnviado(false);
    requestAnimationFrame(() =>
      resultadoRef.current?.scrollIntoView({ behavior: "smooth", block: "start" }),
    );
  }

  const descargar = () => window.print();

  const filas = resultado
    ? [
        { clave: "cesantias", titulo: "Cesantías", valor: resultado.cesantias },
        {
          clave: "intereses",
          titulo: "Intereses sobre cesantías (12%)",
          valor: resultado.interesesCesantias,
        },
        { clave: "prima", titulo: "Prima de servicios", valor: resultado.prima },
        { clave: "vacaciones", titulo: "Vacaciones pendientes", valor: resultado.vacaciones },
      ]
    : [];

  return (
    <div>
      {/* ── CARÁTULA DE LA CALCULADORA ───────────────────────────── */}
      <form
        onSubmit={calcular}
        className="overflow-hidden rounded-[6px] border border-linea bg-papel"
        noValidate
      >
        <div className="h-[3px] w-full bg-esmeralda" aria-hidden="true" />
        <div className="p-5 sm:p-7">
          <div className="grid gap-5 sm:grid-cols-2">
            <div className="sm:col-span-2">
              <label htmlFor={`${idBase}-salario`} className="etiqueta">
                Salario mensual básico
              </label>
              <div className="relative mt-2">
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 font-mono text-[0.95rem] text-tinta-suave"
                >
                  $
                </span>
                <input
                  id={`${idBase}-salario`}
                  inputMode="numeric"
                  autoComplete="off"
                  value={f.salario}
                  onChange={(e) => {
                    const n = soloNumeros(e.target.value);
                    set("salario", n ? miles(Number(n)) : "");
                  }}
                  placeholder="1.623.500"
                  className="campo pl-7 font-mono"
                />
              </div>
            </div>

            <div>
              <span className="etiqueta">¿Recibes auxilio de transporte?</span>
              <button
                type="button"
                role="switch"
                aria-checked={f.auxilio}
                onClick={() => set("auxilio", !f.auxilio)}
                className={`mt-2 flex w-full items-center justify-between gap-3 rounded-[4px] border px-4 py-3 text-left text-[0.95rem] transition-colors ${
                  f.auxilio ? "border-esmeralda bg-esmeralda-claro" : "border-linea bg-papel"
                }`}
              >
                <span>{f.auxilio ? "Sí, lo recibo" : "No lo recibo"}</span>
                <span
                  aria-hidden="true"
                  className={`relative h-6 w-11 shrink-0 rounded-full transition-colors ${
                    f.auxilio ? "bg-esmeralda" : "bg-linea"
                  }`}
                >
                  <span
                    className={`absolute top-0.5 h-5 w-5 rounded-full bg-papel transition-all ${
                      f.auxilio ? "left-[22px]" : "left-0.5"
                    }`}
                  />
                </span>
              </button>
              <p className="mt-2 text-[0.8rem] text-tinta-suave">
                Aplica si ganas menos de 2 SMLMV. Valor {pesos(AUXILIO_TRANSPORTE)} mensuales.
              </p>
            </div>

            <div>
              <label htmlFor={`${idBase}-vac`} className="etiqueta">
                Días de vacaciones ya disfrutados
              </label>
              <input
                id={`${idBase}-vac`}
                inputMode="numeric"
                value={f.vacaciones}
                onChange={(e) => set("vacaciones", soloNumeros(e.target.value))}
                className="campo mt-2 font-mono"
              />
            </div>

            <div>
              <label htmlFor={`${idBase}-inicio`} className="etiqueta">
                Fecha de inicio del contrato
              </label>
              <input
                id={`${idBase}-inicio`}
                type="date"
                value={f.inicio}
                onChange={(e) => set("inicio", e.target.value)}
                className="campo mt-2 font-mono"
              />
            </div>

            <div>
              <label htmlFor={`${idBase}-fin`} className="etiqueta">
                Fecha de terminación del contrato
              </label>
              <input
                id={`${idBase}-fin`}
                type="date"
                value={f.fin}
                onChange={(e) => set("fin", e.target.value)}
                className="campo mt-2 font-mono"
              />
            </div>

            <div>
              <label htmlFor={`${idBase}-term`} className="etiqueta">
                Tipo de terminación
              </label>
              <select
                id={`${idBase}-term`}
                value={f.terminacion}
                onChange={(e) => set("terminacion", e.target.value as TipoTerminacion)}
                className="campo mt-2"
              >
                {TERMINACIONES.map((t) => (
                  <option key={t} value={t}>
                    {t}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor={`${idBase}-contrato`} className="etiqueta">
                Tipo de contrato
              </label>
              <select
                id={`${idBase}-contrato`}
                value={f.contrato}
                onChange={(e) => set("contrato", e.target.value as TipoContrato)}
                className="campo mt-2"
              >
                {CONTRATOS.map((t) => (
                  <option key={t} value={t}>
                    {t}
                  </option>
                ))}
              </select>
            </div>

            {f.contrato !== "Término indefinido" && f.terminacion === "Despido SIN justa causa" ? (
              <div className="sm:col-span-2">
                <label htmlFor={`${idBase}-venc`} className="etiqueta">
                  Fecha en que vencía el contrato
                </label>
                <input
                  id={`${idBase}-venc`}
                  type="date"
                  value={f.vencimiento}
                  onChange={(e) => set("vencimiento", e.target.value)}
                  className="campo mt-2 font-mono"
                />
                <p className="mt-2 text-[0.8rem] text-tinta-suave">
                  En contratos a término fijo la indemnización equivale a los salarios del tiempo
                  que faltaba.
                </p>
              </div>
            ) : null}
          </div>

          {error ? (
            <p role="alert" className="mt-5 text-[0.9rem] text-sello">
              {error}
            </p>
          ) : null}

          <button type="submit" className="btn-primario mt-7 w-full justify-center">
            Calcular mi liquidación
          </button>
        </div>
      </form>

      {/* ── RESULTADOS ───────────────────────────────────────────── */}
      <div ref={resultadoRef} aria-live="polite">
        {resultado && entrada ? (
          <div className="animar-resultado mt-8">
            <div className="overflow-hidden rounded-[6px] border border-linea bg-papel-hueso">
              <div className="border-b border-linea px-5 py-4 sm:px-7">
                <p className="eyebrow">Estimación de tu liquidación</p>
                <p className="mt-1 text-[0.85rem] text-tinta-suave">
                  {miles(resultado.diasTrabajados)} días trabajados · salario base{" "}
                  <span className="font-mono">{pesos(resultado.salarioBase)}</span>
                </p>
              </div>

              <table className="w-full text-left">
                <tbody className="divide-y divide-linea">
                  {filas.map((fila) => (
                    <tr key={fila.clave}>
                      <th scope="row" className="px-5 py-4 font-normal sm:px-7">
                        <span className="inline-flex items-center gap-2">
                          {fila.titulo}
                          <button
                            type="button"
                            aria-label={`Fórmula de ${fila.titulo}`}
                            onClick={() => setTip(tip === fila.clave ? null : fila.clave)}
                            className="text-esmeralda"
                          >
                            <HelpCircle className="h-4 w-4" strokeWidth={1.7} aria-hidden="true" />
                          </button>
                        </span>
                        {tip === fila.clave ? (
                          <span className="mt-2 block rounded-[4px] border border-linea bg-papel px-3 py-2 font-mono text-[0.78rem] leading-relaxed text-tinta-suave">
                            {FORMULAS[fila.clave]}
                          </span>
                        ) : null}
                      </th>
                      <td className="px-5 py-4 text-right font-mono text-[0.98rem] sm:px-7">
                        {pesos(fila.valor)}
                      </td>
                    </tr>
                  ))}

                  {resultado.indemnizacion > 0 ? (
                    <tr>
                      <th scope="row" className="px-5 py-4 font-normal text-sello sm:px-7">
                        <span className="inline-flex items-center gap-2">
                          Indemnización por despido
                          <button
                            type="button"
                            aria-label="Fórmula de la indemnización por despido"
                            onClick={() => setTip(tip === "indemnizacion" ? null : "indemnizacion")}
                            className="text-sello"
                          >
                            <HelpCircle className="h-4 w-4" strokeWidth={1.7} aria-hidden="true" />
                          </button>
                        </span>
                        {tip === "indemnizacion" ? (
                          <span className="mt-2 block rounded-[4px] border border-linea bg-papel px-3 py-2 font-mono text-[0.78rem] leading-relaxed text-tinta-suave">
                            {FORMULAS["indemnizacion"]}
                          </span>
                        ) : null}
                      </th>
                      <td className="px-5 py-4 text-right font-mono text-[0.98rem] text-sello sm:px-7">
                        {pesos(resultado.indemnizacion)}
                      </td>
                    </tr>
                  ) : null}
                </tbody>
              </table>

              <div className="flex flex-wrap items-baseline justify-between gap-3 border-t border-linea bg-papel px-5 py-6 sm:px-7">
                <p className="font-mono text-[0.8rem] font-semibold uppercase tracking-[0.08em] text-tinta-suave">
                  Total a recibir
                </p>
                <p className="font-mono text-[2rem] font-semibold leading-none text-esmeralda">
                  {pesos(resultado.total)}
                </p>
              </div>
            </div>

            {/* PDF sin muro */}
            <div className="mt-5 rounded-[6px] border border-linea bg-papel p-5 sm:p-6">
              <h2 className="text-[1.02rem] font-semibold">Descargar el cálculo en PDF</h2>
              <p className="mt-2 text-[0.88rem] leading-relaxed text-tinta-suave">
                Te lo enviamos por correo si quieres conservarlo. Ya viste el resultado completo:
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
                  Listo. También puedes guardarlo como PDF desde el diálogo de impresión.
                </p>
              ) : null}
            </div>

            {/* ── BLOQUE DE CONVERSIÓN ──────────────────────────── */}
            {entrada.terminacion === "Despido SIN justa causa" ? (
              <div className="mt-6">
                <div className="aviso-plazo flex gap-3">
                  <AlarmClock
                    className="mt-0.5 h-5 w-5 shrink-0 text-sello"
                    aria-hidden="true"
                    strokeWidth={1.7}
                  />
                  <div>
                    <p className="font-mono text-[0.8rem] font-semibold uppercase tracking-[0.06em] text-sello">
                      Tienes una indemnización en juego
                    </p>
                    <p className="mt-2 text-[0.95rem] leading-relaxed text-tinta">
                      Además de la liquidación, te corresponde una indemnización de{" "}
                      <span className="font-mono font-semibold">
                        {pesos(resultado.indemnizacion)}
                      </span>
                      . Es común que las empresas la omitan o la calculen mal. Un abogado laboral
                      puede revisar tu caso sin costo para ti.
                    </p>
                  </div>
                </div>
                <Link
                  to="/iniciar-caso"
                  search={{
                    area: "Laboral",
                    estado: "Voy a iniciar un proceso",
                    valor: rangoValor(resultado.total),
                  }}
                  className="btn-primario btn-pulso mt-5 inline-flex"
                >
                  Revisar mi caso con un abogado →
                </Link>
              </div>
            ) : null}

            {entrada.terminacion === "Renuncia voluntaria" ? (
              <div className="mt-6 tarjeta">
                <p className="text-[0.95rem] leading-relaxed text-tinta">
                  Aunque renunciaste, tu empleador debe pagarte cesantías, intereses, prima y
                  vacaciones. Si no te las han pagado, tienes 3 años para reclamarlas.
                </p>
                <Link
                  to="/iniciar-caso"
                  search={{
                    area: "Laboral",
                    estado: "Apenas necesito asesoría",
                    valor: rangoValor(resultado.total),
                  }}
                  className="btn-secundario mt-5 inline-flex"
                >
                  Consultar con un abogado →
                </Link>
              </div>
            ) : null}
          </div>
        ) : null}
      </div>
    </div>
  );
}
