import { useNavigate } from "@tanstack/react-router";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { Check, Lock } from "lucide-react";
import { cn } from "@/lib/utils";
import { MUNICIPIOS } from "@/lib/municipios";
import {
  AREAS_CASO,
  CASO_VACIO,
  DOCUMENTOS,
  ESTADOS_CASO,
  URGENCIAS,
  VALORES,
  borrarBorrador,
  capturarAtribucion,
  correoValido,
  generarRadicado,
  guardarBorrador,
  leerBorrador,
  puntuarCaso,
  resolverIp,
  whatsappValido,
  type Caso,
} from "@/lib/caso";

const PASOS = ["Tu situación", "Los detalles", "Contacto"];

type Errores = Partial<Record<keyof Caso, string>>;

function validarCampo(campo: keyof Caso, caso: Caso): string {
  const v = caso[campo];
  switch (campo) {
    case "area":
      return v ? "" : "Selecciona el tipo de caso.";
    case "ciudad":
      return String(v).trim().length >= 3 ? "" : "Escribe la ciudad o municipio.";
    case "estado":
      return v ? "" : "Selecciona en qué punto está tu caso.";
    case "descripcion": {
      const t = String(v).trim();
      if (t.length < 40) return "Cuéntanos un poco más: mínimo 40 caracteres.";
      if (t.length > 1000) return "Máximo 1000 caracteres.";
      return "";
    }
    case "urgencia":
      return v ? "" : "Indica qué tan urgente es tu caso.";
    case "documentos":
      return v ? "" : "Cuéntanos si tienes documentos.";
    case "nombre":
      return String(v).trim().length >= 5 ? "" : "Escribe tu nombre completo.";
    case "correo":
      return correoValido(String(v)) ? "" : "Escribe un correo electrónico válido.";
    case "whatsapp":
      return whatsappValido(String(v))
        ? ""
        : "Debe tener 10 dígitos y empezar por 3.";
    case "autorizaDatos":
      return v ? "" : "Necesitamos esta autorización para continuar.";
    case "autorizaTransmision":
      return v ? "" : "Necesitamos esta autorización para asignarte un abogado.";
    default:
      return "";
  }
}

const CAMPOS_PASO: (keyof Caso)[][] = [
  ["area", "ciudad", "estado"],
  ["descripcion", "urgencia", "documentos"],
  ["nombre", "correo", "whatsapp", "autorizaDatos", "autorizaTransmision"],
];

const TODOS = CAMPOS_PASO.flat();

export function FormularioCaso({
  inicial,
}: {
  inicial?: { area?: string | undefined; ciudad?: string | undefined; estado?: string | undefined };
}) {
  const navigate = useNavigate();
  const [caso, setCaso] = useState<Caso>(CASO_VACIO);
  const [paso, setPaso] = useState(0);
  const [direccion, setDireccion] = useState<"der" | "izq">("der");
  const [errores, setErrores] = useState<Errores>({});
  const [borradorPrevio, setBorradorPrevio] = useState<{ caso: Caso; paso: number } | null>(null);
  const [enviando, setEnviando] = useState(false);
  const [sellando, setSellando] = useState(false);
  const [radicado] = useState(() => generarRadicado());
  const contenedor = useRef<HTMLDivElement | null>(null);
  const hidratado = useRef(false);

  /* Prellenado desde el home + borrador guardado */
  useEffect(() => {
    const desdeHome = {
      area: inicial?.area ?? "",
      ciudad: inicial?.ciudad ?? "",
      estado: inicial?.estado ?? "",
    };
    const tieneHome = Boolean(desdeHome.area || desdeHome.ciudad || desdeHome.estado);
    if (tieneHome) {
      setCaso((c) => ({ ...c, ...desdeHome }));
      const completo = desdeHome.area && desdeHome.ciudad && desdeHome.estado;
      if (completo) setPaso(1);
    }
    const b = leerBorrador();
    if (b && !tieneHome) setBorradorPrevio({ caso: b.caso, paso: b.paso });
    hidratado.current = true;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  /* Guardado parcial */
  useEffect(() => {
    if (!hidratado.current) return;
    guardarBorrador(caso, paso);
  }, [caso, paso]);

  const completados = useMemo(
    () =>
      TODOS.filter((campo) => {
        const v = caso[campo];
        return typeof v === "boolean" ? v : String(v).trim().length > 0;
      }).length,
    [caso],
  );

  const digitos = useMemo(() => {
    const num = radicado.split("-")[2] ?? "00000";
    const revelados = Math.min(5, Math.floor((completados / TODOS.length) * 5 + 0.0001));
    return num.split("").map((d, i) => (i < revelados ? d : "·"));
  }, [radicado, completados]);

  const set = useCallback(<K extends keyof Caso>(campo: K, valor: Caso[K]) => {
    setCaso((c) => ({ ...c, [campo]: valor }));
    setErrores((e) => (e[campo] ? { ...e, [campo]: "" } : e));
  }, []);

  const alBlur = (campo: keyof Caso) => {
    setErrores((e) => ({ ...e, [campo]: validarCampo(campo, caso) }));
  };

  const enfocarPrimerError = (nuevos: Errores) => {
    const campo = (CAMPOS_PASO[paso] ?? []).find((c) => nuevos[c]);
    if (!campo) return;
    const el = contenedor.current?.querySelector<HTMLElement>(`[data-campo="${campo}"]`);
    el?.scrollIntoView({ behavior: "smooth", block: "center" });
    el?.focus({ preventScroll: true });
  };

  const validarPaso = () => {
    const nuevos: Errores = { ...errores };
    let ok = true;
    for (const campo of CAMPOS_PASO[paso] ?? []) {
      const msg = validarCampo(campo, caso);
      nuevos[campo] = msg;
      if (msg) ok = false;
    }
    setErrores(nuevos);
    if (!ok) requestAnimationFrame(() => enfocarPrimerError(nuevos));
    return ok;
  };

  const avanzar = () => {
    if (!validarPaso()) return;
    setDireccion("der");
    setPaso((p) => Math.min(2, p + 1));
    contenedor.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const retroceder = () => {
    setDireccion("izq");
    setPaso((p) => Math.max(0, p - 1));
  };

  const enviar = async () => {
    if (!validarPaso() || enviando) return;
    setEnviando(true);
    const atribucion = capturarAtribucion();
    atribucion.ip = await resolverIp();
    const { puntaje, tier } = puntuarCaso(caso);
    // TODO: enviar por correo (Resend) desde una server function.
    console.info("[AJC] caso listo", { radicado, puntaje, tier, atribucion });
    borrarBorrador();
    setSellando(true);
    const reducido =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.setTimeout(
      () => navigate({ to: "/gracias", search: { radicado } }),
      reducido ? 320 : 900,
    );
  };

  const caracteres = caso.descripcion.length;

  return (
    <div className="relative">
      {borradorPrevio && (
        <div className="mb-4 flex flex-wrap items-center justify-between gap-3 rounded-[6px] border border-linea bg-esmeralda-claro px-4 py-3">
          <p className="text-[0.9rem] text-tinta">Tienes un caso sin terminar.</p>
          <div className="flex gap-2">
            <button
              type="button"
              className="btn-secundario px-3 py-1.5 text-[0.85rem]"
              onClick={() => {
                setCaso(borradorPrevio.caso);
                setPaso(Math.min(2, borradorPrevio.paso));
                setBorradorPrevio(null);
              }}
            >
              Continuar
            </button>
            <button
              type="button"
              className="text-[0.85rem] text-tinta-suave underline underline-offset-4"
              onClick={() => {
                borrarBorrador();
                setCaso(CASO_VACIO);
                setPaso(0);
                setBorradorPrevio(null);
              }}
            >
              Empezar de nuevo
            </button>
          </div>
        </div>
      )}

      <div
        ref={contenedor}
        className={cn(
          "overflow-hidden rounded-[6px] border border-linea bg-papel",
          sellando && "caratula-sellada",
        )}
        style={{ boxShadow: "0 1px 2px rgba(18,33,43,.06), 0 12px 40px rgba(18,33,43,.12)" }}
      >
        <div className="h-[3px] w-full bg-esmeralda" />

        <div className="border-b border-linea px-5 py-5 sm:px-8">
          <div className="flex items-center justify-between gap-4">
            <p className="eyebrow">Expediente</p>
            <p className="mono-tag text-tinta-suave" aria-live="polite">
              AJC-2026-
              {digitos.map((d, i) => (
                <span
                  key={i}
                  className={cn(
                    "inline-block transition-all duration-200",
                    d === "·" ? "text-tinta-suave/60" : "text-esmeralda",
                  )}
                >
                  {d}
                </span>
              ))}
            </p>
          </div>
          <h1 className="display-md mt-3">Cuéntanos tu caso</h1>
          <p className="mt-2 text-[0.9rem] text-tinta-suave">
            Tres pasos, menos de tres minutos. Un abogado especialista revisa tu caso.
          </p>
        </div>

        <ol className="flex border-b border-linea" aria-label="Pasos del formulario">
          {PASOS.map((etiqueta, i) => {
            const activo = i === paso;
            const completado = i < paso;
            return (
              <li
                key={etiqueta}
                aria-current={activo ? "step" : undefined}
                className={cn(
                  "flex flex-1 items-center justify-center gap-2 border-r border-linea px-2 py-3 text-[0.8125rem] last:border-r-0",
                  activo && "-mt-0.5 border-t-2 border-t-esmeralda bg-papel font-semibold text-tinta",
                  completado && "bg-esmeralda-claro text-esmeralda",
                  !activo && !completado && "bg-papel-hueso text-tinta-suave",
                )}
              >
                {completado ? (
                  <Check className="h-4 w-4" aria-hidden="true" />
                ) : (
                  <span className="font-mono text-[0.8125rem]">{i + 1}</span>
                )}
                <span className="truncate">{etiqueta}</span>
              </li>
            );
          })}
        </ol>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            if (paso < 2) avanzar();
            else void enviar();
          }}
          noValidate
          className="px-5 py-6 sm:px-8"
        >
          <div
            key={paso}
            className={direccion === "der" ? "paso-entra-der" : "paso-entra-izq"}
          >
            {paso === 0 && (
              <div className="space-y-5">
                <Campo
                  id="area"
                  etiqueta="¿Con qué tipo de caso necesitas ayuda?"
                  error={errores.area}
                >
                  <select
                    id="area"
                    data-campo="area"
                    className={cn("campo", errores.area && "campo-error")}
                    value={caso.area}
                    onChange={(e) => set("area", e.target.value)}
                    onBlur={() => alBlur("area")}
                  >
                    <option value="">Selecciona el tipo de caso</option>
                    {AREAS_CASO.map((g) => (
                      <optgroup key={g.grupo} label={g.grupo}>
                        {g.opciones.map((o) => (
                          <option key={o} value={o}>
                            {o}
                          </option>
                        ))}
                      </optgroup>
                    ))}
                  </select>
                </Campo>

                <Campo
                  id="ciudad"
                  etiqueta="¿En qué ciudad o municipio ocurrió el caso?"
                  error={errores.ciudad}
                >
                  <input
                    id="ciudad"
                    data-campo="ciudad"
                    className={cn("campo", errores.ciudad && "campo-error")}
                    list="municipios-colombia"
                    autoComplete="off"
                    placeholder="Ej: Bogotá D.C. o Envigado, Antioquia"
                    value={caso.ciudad}
                    onChange={(e) => set("ciudad", e.target.value)}
                    onBlur={() => alBlur("ciudad")}
                  />
                  <datalist id="municipios-colombia">
                    {MUNICIPIOS.map((m) => (
                      <option key={m} value={m} />
                    ))}
                  </datalist>
                  <p className="mt-1.5 text-[0.8rem] text-tinta-suave">
                    Si no aparece en la lista, escríbelo tal como se llama.
                  </p>
                </Campo>

                <Campo id="estado" etiqueta="¿En qué punto está tu caso?" error={errores.estado}>
                  <select
                    id="estado"
                    data-campo="estado"
                    className={cn("campo", errores.estado && "campo-error")}
                    value={caso.estado}
                    onChange={(e) => set("estado", e.target.value)}
                    onBlur={() => alBlur("estado")}
                  >
                    <option value="">Selecciona una opción</option>
                    {ESTADOS_CASO.map((o) => (
                      <option key={o} value={o}>
                        {o}
                      </option>
                    ))}
                  </select>
                </Campo>

                <p className="text-[0.85rem] text-tinta-suave">
                  Con esto ya sabemos qué tipo de abogado necesitas.
                </p>
              </div>
            )}

            {paso === 1 && (
              <div className="space-y-6">
                <Campo
                  id="descripcion"
                  etiqueta="Cuéntanos brevemente qué ocurrió"
                  error={errores.descripcion}
                >
                  <textarea
                    id="descripcion"
                    data-campo="descripcion"
                    rows={6}
                    maxLength={1000}
                    className={cn("campo resize-y", errores.descripcion && "campo-error")}
                    placeholder="Ej: Trabajé 3 años en una empresa de Bogotá con contrato a término indefinido. Me despidieron el 15 de julio sin darme razón y no me han pagado la liquidación."
                    value={caso.descripcion}
                    onChange={(e) => set("descripcion", e.target.value)}
                    onBlur={() => alBlur("descripcion")}
                  />
                  <div className="mt-1.5 flex items-center justify-between gap-3">
                    <p className="font-mono text-[0.8rem] text-tinta-suave">
                      {caracteres}/1000 caracteres
                    </p>
                    {caracteres > 0 && caracteres < 40 && (
                      <p className="font-mono text-[0.8rem] text-tinta-suave">
                        mín. 40
                      </p>
                    )}
                  </div>
                  <p className="mt-2 text-[0.8rem] leading-relaxed text-tinta-suave">
                    No incluyas datos de salud, origen étnico o información sobre menores si no lo
                    consideras necesario. Podrás darle esos detalles directamente a tu abogado.
                  </p>
                </Campo>

                <fieldset data-campo="urgencia" tabIndex={-1}>
                  <legend className="block text-sm font-medium text-tinta">
                    ¿Qué tan urgente es tu caso? <span className="text-sello">*</span>
                  </legend>
                  <div className="mt-2 space-y-2">
                    {URGENCIAS.map((u) => {
                      const activo = caso.urgencia === u.valor;
                      return (
                        <label
                          key={u.valor}
                          className={cn(
                            "flex cursor-pointer items-start gap-3 rounded-[6px] border px-4 py-3 transition-colors",
                            activo
                              ? "border-esmeralda bg-esmeralda-claro"
                              : "border-linea bg-papel hover:border-esmeralda/40",
                          )}
                        >
                          <input
                            type="radio"
                            name="urgencia"
                            className="mt-1 h-4 w-4 accent-[var(--esmeralda)]"
                            checked={activo}
                            onChange={() => set("urgencia", u.valor)}
                          />
                          <span>
                            <span className="block text-[0.95rem] font-medium text-tinta">
                              {u.valor}
                            </span>
                            <span className="block text-[0.8rem] text-tinta-suave">{u.nota}</span>
                          </span>
                        </label>
                      );
                    })}
                  </div>
                  {errores.urgencia && (
                    <p className="mt-1.5 text-[0.8rem] text-sello">{errores.urgencia}</p>
                  )}
                </fieldset>

                <Campo
                  id="documentos"
                  etiqueta="¿Tienes documentos relacionados con el caso?"
                  error={errores.documentos}
                >
                  <select
                    id="documentos"
                    data-campo="documentos"
                    className={cn("campo", errores.documentos && "campo-error")}
                    value={caso.documentos}
                    onChange={(e) => set("documentos", e.target.value)}
                    onBlur={() => alBlur("documentos")}
                  >
                    <option value="">Selecciona una opción</option>
                    {DOCUMENTOS.map((o) => (
                      <option key={o} value={o}>
                        {o}
                      </option>
                    ))}
                  </select>
                </Campo>

                <p className="text-[0.85rem] text-tinta-suave">
                  Ya podemos empezar a buscar. Solo faltan tus datos de contacto.
                </p>
              </div>
            )}

            {paso === 2 && (
              <div className="space-y-5">
                <Campo id="nombre" etiqueta="Nombre completo" error={errores.nombre}>
                  <input
                    id="nombre"
                    data-campo="nombre"
                    className={cn("campo", errores.nombre && "campo-error")}
                    autoComplete="name"
                    placeholder="Tu nombre y apellidos"
                    value={caso.nombre}
                    onChange={(e) => set("nombre", e.target.value)}
                    onBlur={() => alBlur("nombre")}
                  />
                </Campo>

                <Campo id="correo" etiqueta="Correo electrónico" error={errores.correo}>
                  <input
                    id="correo"
                    data-campo="correo"
                    type="email"
                    inputMode="email"
                    autoComplete="email"
                    className={cn("campo", errores.correo && "campo-error")}
                    placeholder="tucorreo@ejemplo.com"
                    value={caso.correo}
                    onChange={(e) => set("correo", e.target.value)}
                    onBlur={() => alBlur("correo")}
                  />
                </Campo>

                <Campo id="whatsapp" etiqueta="Número de WhatsApp" error={errores.whatsapp}>
                  <div
                    className={cn(
                      "mt-0 flex overflow-hidden rounded-[4px] border border-linea bg-papel focus-within:border-esmeralda",
                      errores.whatsapp && "border-sello",
                    )}
                  >
                    <span className="flex items-center gap-2 border-r border-linea bg-papel-hueso px-3">
                      <svg
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                        className="h-4 w-4"
                        fill="#25D366"
                      >
                        <path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.95 1.17-.17.2-.35.22-.65.07-.3-.15-1.13-.42-2.15-1.33-.8-.71-1.33-1.59-1.48-1.89-.15-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.18.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.68-1.62-.93-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.46s1.06 2.84 1.21 3.04c.15.2 2.06 3.29 5.02 4.49.7.3 1.25.48 1.68.62.7.22 1.34.19 1.85.12.56-.08 1.76-.72 2.01-1.42.25-.7.25-1.29.17-1.42-.07-.12-.27-.2-.57-.35zM12.04 21.5h-.01a9.4 9.4 0 0 1-4.79-1.31l-.34-.2-3.56.93.95-3.47-.22-.36a9.36 9.36 0 0 1-1.44-5.01c0-5.18 4.22-9.4 9.42-9.4 2.51 0 4.87.98 6.64 2.76a9.33 9.33 0 0 1 2.75 6.65c0 5.18-4.23 9.41-9.4 9.41z" />
                      </svg>
                      <span className="font-mono text-[0.9rem] text-tinta-suave">+57</span>
                    </span>
                    <input
                      id="whatsapp"
                      data-campo="whatsapp"
                      inputMode="numeric"
                      autoComplete="tel-national"
                      maxLength={10}
                      placeholder="3001234567"
                      className="w-full bg-transparent px-3 py-2.5 font-mono text-[0.95rem] text-tinta outline-none"
                      value={caso.whatsapp}
                      onChange={(e) => set("whatsapp", e.target.value.replace(/\D/g, "").slice(0, 10))}
                      onBlur={() => alBlur("whatsapp")}
                    />
                  </div>
                </Campo>

                <div>
                  <label htmlFor="valor" className="block text-sm font-medium text-tinta">
                    ¿Cuál es el valor aproximado en discusión?{" "}
                    <span className="text-tinta-suave">(opcional)</span>
                  </label>
                  <select
                    id="valor"
                    data-campo="valor"
                    className="campo mt-2"
                    value={caso.valor}
                    onChange={(e) => set("valor", e.target.value)}
                  >
                    <option value="">Selecciona una opción</option>
                    {VALORES.map((o) => (
                      <option key={o} value={o}>
                        {o}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="space-y-3 border-t border-linea pt-5">
                  <Casilla
                    id="autorizaDatos"
                    checked={caso.autorizaDatos}
                    onChange={(v) => set("autorizaDatos", v)}
                    error={errores.autorizaDatos}
                  >
                    Autorizo a Asesorías Jurídicas Colombia el tratamiento de mis datos personales
                    conforme a la{" "}
                    <a
                      href="/politica-de-tratamiento-de-datos"
                      className="text-esmeralda underline underline-offset-2"
                    >
                      Política de Tratamiento de Datos
                    </a>
                    . <span className="text-sello">*</span>
                  </Casilla>

                  <Casilla
                    id="autorizaTransmision"
                    checked={caso.autorizaTransmision}
                    onChange={(v) => set("autorizaTransmision", v)}
                    error={errores.autorizaTransmision}
                  >
                    Autorizo que mi información de contacto y la descripción de mi caso sean
                    transmitidas al abogado que me sea asignado, para que pueda contactarme.{" "}
                    <span className="text-sello">*</span>
                  </Casilla>
                </div>
              </div>
            )}
          </div>

          <div className="mt-7 flex items-center gap-3">
            {paso > 0 && (
              <button type="button" className="btn-secundario" onClick={retroceder}>
                ← Atrás
              </button>
            )}
            {paso < 2 ? (
              <button type="submit" className="btn-primario btn-pulso flex-1">
                Continuar →
              </button>
            ) : (
              <button
                type="submit"
                disabled={enviando}
                className={cn(
                  "btn-primario flex-1",
                  enviando ? "cursor-wait opacity-70" : "btn-pulso",
                )}
              >
                {enviando ? "Enviando…" : "Enviar mi caso"}
              </button>
            )}
          </div>
        </form>

        <div className="flex items-start gap-2 border-t border-linea bg-papel-hueso px-5 py-3.5 sm:px-8">
          <Lock className="mt-0.5 h-3.5 w-3.5 shrink-0 text-tinta-suave" aria-hidden="true" />
          <p className="text-[0.8rem] leading-relaxed text-tinta-suave">
            Tu información es confidencial y solo se comparte con el abogado que te sea asignado.
          </p>
        </div>
      </div>

      {sellando && (
        <div className="pointer-events-none absolute inset-0 z-10 flex items-center justify-center">
          <div className="sello-radicado">
            <p className="sello-titulo">RADICADO</p>
            <p className="sello-numero">{radicado}</p>
          </div>
        </div>
      )}
    </div>
  );
}

function Campo({
  id,
  etiqueta,
  error,
  children,
}: {
  id: string;
  etiqueta: string;
  error?: string | undefined;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-tinta">
        {etiqueta} <span className="text-sello">*</span>
      </label>
      <div className="mt-2">{children}</div>
      {error && <p className="mt-1.5 text-[0.8rem] text-sello">{error}</p>}
    </div>
  );
}

function Casilla({
  id,
  checked,
  onChange,
  error,
  children,
}: {
  id: string;
  checked: boolean;
  onChange: (v: boolean) => void;
  error?: string | undefined;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label htmlFor={id} className="flex cursor-pointer items-start gap-3">
        <input
          id={id}
          data-campo={id}
          type="checkbox"
          className="mt-0.5 h-4 w-4 shrink-0 accent-[var(--esmeralda)]"
          checked={checked}
          onChange={(e) => onChange(e.target.checked)}
        />
        <span className="text-[0.85rem] leading-relaxed text-tinta-suave">{children}</span>
      </label>
      {error && <p className="mt-1 pl-7 text-[0.8rem] text-sello">{error}</p>}
    </div>
  );
}
