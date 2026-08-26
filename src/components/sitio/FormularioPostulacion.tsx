import { useMemo, useRef, useState } from "react";
import { useServerFn } from "@tanstack/react-start";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";
import { CIUDADES_COBERTURA } from "@/lib/cobertura";
import { evento } from "@/lib/analitica";
import { enviarPostulacion } from "@/lib/envio.functions";
import { WHATSAPP_SOPORTE, enlaceWhatsapp } from "@/lib/contacto";
import {
  AREAS_POSTULACION,
  CAPACIDAD_MENSUAL,
  COMPETENCIAS_POSTULACION,
  POSTULACION_VACIA,
  validarPostulacion,
  type CampoPostulacion,
  type ErroresPostulacion,
  type Postulacion,
} from "@/lib/postulacion";

const etiquetaClase = "block text-[0.8125rem] font-semibold text-tinta";
const campoClase =
  "mt-1.5 w-full rounded-[6px] border border-linea bg-papel px-3 py-2.5 text-[0.95rem] text-tinta transition-colors focus:border-esmeralda focus:outline-none";

function Error({ msg }: { msg?: string | undefined }) {
  if (!msg) return null;
  return <p className="mt-1 text-[0.8125rem] text-sello">{msg}</p>;
}

function Pastilla({
  activo,
  onClick,
  children,
}: {
  activo: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={activo}
      className={cn(
        "rounded-[6px] border px-3 py-1.5 text-[0.85rem] transition-colors",
        activo
          ? "border-esmeralda bg-esmeralda-claro font-semibold text-esmeralda"
          : "border-linea text-tinta-suave hover:border-tinta",
      )}
    >
      {children}
    </button>
  );
}

export function FormularioPostulacion() {
  const [p, setP] = useState<Postulacion>(POSTULACION_VACIA);
  const [errores, setErrores] = useState<ErroresPostulacion>({});
  const [enviando, setEnviando] = useState(false);
  const [radicado, setRadicado] = useState<string | null>(null);
  const contenedor = useRef<HTMLDivElement | null>(null);

  const set = <K extends CampoPostulacion>(campo: K, valor: Postulacion[K]) => {
    setP((prev) => ({ ...prev, [campo]: valor }));
    setErrores((prev) => ({ ...prev, [campo]: undefined }));
  };

  const alternar = (campo: "areas" | "competencias", valor: string) => {
    setP((prev) => {
      const lista = prev[campo];
      return {
        ...prev,
        [campo]: lista.includes(valor) ? lista.filter((v) => v !== valor) : [...lista, valor],
      };
    });
    setErrores((prev) => ({ ...prev, [campo]: undefined }));
  };

  const ciudades = useMemo(() => CIUDADES_COBERTURA.map((c) => c.ciudad), []);

  const enviar = async (e: React.FormEvent) => {
    e.preventDefault();
    if (enviando) return;
    const nuevos = validarPostulacion(p);
    setErrores(nuevos);
    const primer = Object.keys(nuevos)[0];
    if (primer) {
      const el = contenedor.current?.querySelector<HTMLElement>(`[data-campo="${primer}"]`);
      el?.scrollIntoView({ behavior: "smooth", block: "center" });
      el?.focus({ preventScroll: true });
      return;
    }
    setEnviando(true);
    setFallo(null);
    try {
      const r = await enviarAlServidor({ data: { ...p, autoriza: true as const } });
      evento("postulacion_abogado_enviada", { ciudad: p.ciudad, areas: p.areas.join(", ") });
      setRadicado(r.radicado);
      contenedor.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    } catch (error) {
      console.error("[AJC] postulación fallida", error);
      setFallo(
        "No pudimos enviar tu postulación en este momento. Escríbenos por WhatsApp y la registramos contigo.",
      );
    } finally {
      setEnviando(false);
    }
  };

  if (radicado) {
    return (
      <div
        ref={contenedor}
        className="overflow-hidden rounded-[6px] border border-linea bg-papel"
      >
        <div className="h-[3px] w-full bg-esmeralda" />
        <div className="px-6 py-10 text-center sm:px-10">
          <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-esmeralda text-papel">
            <Check aria-hidden="true" strokeWidth={2.2} className="h-7 w-7" />
          </span>
          <h3 className="display-md mt-5">Postulación recibida</h3>
          <p className="mx-auto mt-3 max-w-[46ch] text-[0.95rem] text-tinta-suave">
            Verificamos tu tarjeta profesional ante el Consejo Superior de la Judicatura y te
            escribimos en menos de 5 días hábiles.
          </p>
          <p className="mono-tag mt-6 inline-block rounded-[6px] border border-linea bg-papel-hueso px-4 py-2 text-tinta">
            {radicado}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div ref={contenedor} className="overflow-hidden rounded-[6px] border border-linea bg-papel">
      <div className="h-[3px] w-full bg-esmeralda" />

      <div className="border-b border-linea px-6 py-5 sm:px-8">
        <div className="flex items-center justify-between gap-4">
          <p className="eyebrow">Postulación</p>
          <p className="mono-tag text-tinta-suave">AJC-RED</p>
        </div>
        <h2 className="display-md mt-3">Postúlate a la red</h2>
        <p className="mt-2 text-[0.9rem] text-tinta-suave">
          Todos los campos son verificables. No publicamos nada sin confirmar tu tarjeta.
        </p>
      </div>

      <form onSubmit={enviar} noValidate className="space-y-6 px-6 py-7 sm:px-8">
        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label className={etiquetaClase} htmlFor="pos-nombre">
              Nombre completo
            </label>
            <input
              id="pos-nombre"
              data-campo="nombre"
              className={campoClase}
              maxLength={120}
              value={p.nombre}
              onChange={(e) => set("nombre", e.target.value)}
            />
            <Error msg={errores.nombre} />
          </div>
          <div>
            <label className={etiquetaClase} htmlFor="pos-tarjeta">
              Número de tarjeta profesional
            </label>
            <input
              id="pos-tarjeta"
              data-campo="tarjeta"
              inputMode="numeric"
              placeholder="214876"
              className={cn(campoClase, "font-mono")}
              value={p.tarjeta}
              onChange={(e) => set("tarjeta", e.target.value)}
            />
            <Error msg={errores.tarjeta} />
          </div>
          <div>
            <label className={etiquetaClase} htmlFor="pos-correo">
              Correo
            </label>
            <input
              id="pos-correo"
              data-campo="correo"
              type="email"
              className={campoClase}
              value={p.correo}
              onChange={(e) => set("correo", e.target.value)}
            />
            <Error msg={errores.correo} />
          </div>
          <div>
            <label className={etiquetaClase} htmlFor="pos-whatsapp">
              WhatsApp
            </label>
            <input
              id="pos-whatsapp"
              data-campo="whatsapp"
              inputMode="tel"
              placeholder="3001234567"
              className={cn(campoClase, "font-mono")}
              value={p.whatsapp}
              onChange={(e) => set("whatsapp", e.target.value)}
            />
            <Error msg={errores.whatsapp} />
          </div>
          <div>
            <label className={etiquetaClase} htmlFor="pos-ciudad">
              Ciudad principal
            </label>
            <select
              id="pos-ciudad"
              data-campo="ciudad"
              className={campoClase}
              value={p.ciudad}
              onChange={(e) => set("ciudad", e.target.value)}
            >
              <option value="">Selecciona una ciudad</option>
              {ciudades.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>
            <Error msg={errores.ciudad} />
          </div>
          <div>
            <label className={etiquetaClase} htmlFor="pos-anios">
              Años de ejercicio
            </label>
            <input
              id="pos-anios"
              data-campo="anios"
              inputMode="numeric"
              className={cn(campoClase, "font-mono")}
              value={p.anios}
              onChange={(e) => set("anios", e.target.value)}
            />
            <Error msg={errores.anios} />
          </div>
        </div>

        <fieldset data-campo="areas" tabIndex={-1}>
          <legend className={etiquetaClase}>Áreas de práctica</legend>
          <div className="mt-2 flex flex-wrap gap-2">
            {AREAS_POSTULACION.map((a) => (
              <Pastilla key={a} activo={p.areas.includes(a)} onClick={() => alternar("areas", a)}>
                {a}
              </Pastilla>
            ))}
          </div>
          <Error msg={errores.areas} />
        </fieldset>

        <fieldset data-campo="competencias" tabIndex={-1}>
          <legend className={etiquetaClase}>Competencias procesales</legend>
          <div className="mt-2 flex flex-wrap gap-2">
            {COMPETENCIAS_POSTULACION.map((c) => (
              <Pastilla
                key={c}
                activo={p.competencias.includes(c)}
                onClick={() => alternar("competencias", c)}
              >
                {c}
              </Pastilla>
            ))}
          </div>
          <Error msg={errores.competencias} />
        </fieldset>

        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label className={etiquetaClase} htmlFor="pos-universidad">
              Universidad
            </label>
            <input
              id="pos-universidad"
              data-campo="universidad"
              className={campoClase}
              value={p.universidad}
              onChange={(e) => set("universidad", e.target.value)}
            />
            <Error msg={errores.universidad} />
          </div>
          <div>
            <label className={etiquetaClase} htmlFor="pos-enlace">
              LinkedIn o web <span className="font-normal text-tinta-suave">(opcional)</span>
            </label>
            <input
              id="pos-enlace"
              data-campo="enlace"
              placeholder="https://"
              className={campoClase}
              value={p.enlace}
              onChange={(e) => set("enlace", e.target.value)}
            />
            <Error msg={errores.enlace} />
          </div>
        </div>

        <div>
          <label className={etiquetaClase} htmlFor="pos-esp">
            Especializaciones y posgrados
          </label>
          <textarea
            id="pos-esp"
            data-campo="especializaciones"
            rows={3}
            maxLength={500}
            className={cn(campoClase, "resize-y")}
            value={p.especializaciones}
            onChange={(e) => set("especializaciones", e.target.value)}
          />
          <Error msg={errores.especializaciones} />
        </div>

        <div>
          <label className={etiquetaClase} htmlFor="pos-capacidad">
            ¿Cuántos casos nuevos podrías atender al mes?
          </label>
          <select
            id="pos-capacidad"
            data-campo="capacidad"
            className={campoClase}
            value={p.capacidad}
            onChange={(e) => set("capacidad", e.target.value)}
          >
            <option value="">Selecciona una opción</option>
            {CAPACIDAD_MENSUAL.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
          <Error msg={errores.capacidad} />
        </div>

        <div className="rounded-[6px] border border-linea bg-papel-hueso p-4">
          <label className="flex cursor-pointer items-start gap-3 text-[0.875rem] leading-relaxed text-tinta">
            <input
              type="checkbox"
              data-campo="autoriza"
              className="mt-0.5 h-4 w-4 shrink-0 accent-esmeralda"
              checked={p.autoriza}
              onChange={(e) => set("autoriza", e.target.checked)}
            />
            <span>
              Autorizo a MARDIGITAL SAS a tratar mis datos personales y profesionales para verificar
              mi tarjeta, evaluar mi postulación y contactarme, conforme a la Ley 1581 de 2012.
            </span>
          </label>
          <Error msg={errores.autoriza} />
        </div>

        <button type="submit" disabled={enviando} className="btn-primario btn-pulso w-full">
          {enviando ? "Enviando…" : "Enviar postulación →"}
        </button>
        <p className="text-center text-[0.8125rem] text-tinta-suave">
          Condiciones económicas: {"{PENDIENTE}"}. Las definimos contigo en el paso 03, antes de
          asignarte cualquier caso.
        </p>
      </form>
    </div>
  );
}
