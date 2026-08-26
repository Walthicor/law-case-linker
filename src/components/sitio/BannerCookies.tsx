import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Cookie } from "lucide-react";

const CLAVE = "ajc_consentimiento";
const EVENTO = "ajc:abrir-cookies";

export type Consentimiento = {
  necesarias: true;
  analiticas: boolean;
  marketing: boolean;
  fecha: string;
};

function leer(): Consentimiento | null {
  try {
    const raw = localStorage.getItem(CLAVE);
    if (!raw) return null;
    const v = JSON.parse(raw) as Consentimiento;
    return typeof v?.analiticas === "boolean" ? v : null;
  } catch {
    return null;
  }
}

function guardar(analiticas: boolean, marketing: boolean) {
  const valor: Consentimiento = {
    necesarias: true,
    analiticas,
    marketing,
    fecha: new Date().toISOString(),
  };
  try {
    localStorage.setItem(CLAVE, JSON.stringify(valor));
  } catch {
    /* almacenamiento bloqueado: seguimos sin analítica */
  }
  // Solo aquí se autoriza cargar analítica o marketing.
  window.dispatchEvent(new CustomEvent("ajc:consentimiento", { detail: valor }));
}

/** Enlace/botón para reabrir el panel desde el pie o la política de cookies. */
export function BotonConfigurarCookies() {
  return (
    <button
      type="button"
      onClick={() => window.dispatchEvent(new Event(EVENTO))}
      className="btn-secundario"
    >
      <Cookie aria-hidden="true" strokeWidth={1.8} className="h-4 w-4" />
      Configurar cookies
    </button>
  );
}

/**
 * Barra inferior, nunca modal bloqueante: no tapa el hero ni la conversión.
 * No se carga analítica ni marketing hasta que hay consentimiento explícito.
 */
export function BannerCookies() {
  const [visible, setVisible] = useState(false);
  const [config, setConfig] = useState(false);
  const [analiticas, setAnaliticas] = useState(true);
  const [marketing, setMarketing] = useState(false);

  useEffect(() => {
    if (!leer()) setVisible(true);
    const abrir = () => {
      const actual = leer();
      setAnaliticas(actual?.analiticas ?? true);
      setMarketing(actual?.marketing ?? false);
      setConfig(true);
      setVisible(true);
    };
    window.addEventListener(EVENTO, abrir);
    return () => window.removeEventListener(EVENTO, abrir);
  }, []);

  if (!visible) return null;

  const decidir = (a: boolean, m: boolean) => {
    guardar(a, m);
    setVisible(false);
    setConfig(false);
  };

  return (
    <div
      role="region"
      aria-label="Aviso de cookies"
      className="fixed inset-x-0 bottom-0 z-50 border-t border-papel/15 bg-tinta text-papel"
    >
      <div className="contenedor py-4 md:py-5">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <p className="max-w-[62ch] text-[0.92rem] leading-relaxed text-papel/80">
            Usamos cookies para que el sitio funcione y para entender cómo se usa. Puedes
            elegir cuáles aceptar.{" "}
            <Link to="/politica-de-cookies" className="underline decoration-papel/40 hover:text-papel">
              Política de cookies
            </Link>
          </p>

          <div className="flex flex-wrap items-center gap-3">
            <button
              type="button"
              onClick={() => decidir(true, true)}
              className="btn-primario px-5 py-3 text-[0.92rem]"
            >
              Aceptar todas
            </button>
            <button
              type="button"
              onClick={() => decidir(false, false)}
              className="btn-secundario-claro px-5 py-3 text-[0.92rem]"
            >
              Solo necesarias
            </button>
            <button
              type="button"
              onClick={() => setConfig((v) => !v)}
              aria-expanded={config}
              className="text-[0.88rem] font-semibold text-papel/70 underline transition-colors hover:text-papel"
            >
              Configurar
            </button>
          </div>
        </div>

        {config ? (
          <div className="mt-5 grid gap-3 border-t border-papel/15 pt-5 md:grid-cols-3">
            <div className="rounded-[6px] border border-papel/15 px-4 py-3">
              <p className="font-mono text-[0.72rem] uppercase tracking-[0.08em] text-papel/50">
                Siempre activas
              </p>
              <p className="mt-1 text-[0.9rem] font-semibold">Necesarias</p>
              <p className="mt-1 text-[0.82rem] leading-relaxed text-papel/65">
                Navegación, seguridad del formulario y borrador de tu caso.
              </p>
            </div>

            <Categoria
              titulo="Analíticas"
              descripcion="Miden de forma agregada qué páginas se visitan y dónde se abandona el formulario."
              activo={analiticas}
              onChange={setAnaliticas}
            />
            <Categoria
              titulo="Marketing"
              descripcion="Atribuyen la visita a una campaña y evitan repetir el mismo anuncio."
              activo={marketing}
              onChange={setMarketing}
            />

            <div className="md:col-span-3">
              <button
                type="button"
                onClick={() => decidir(analiticas, marketing)}
                className="btn-primario px-5 py-3 text-[0.92rem]"
              >
                Guardar preferencias
              </button>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
}

function Categoria({
  titulo,
  descripcion,
  activo,
  onChange,
}: {
  titulo: string;
  descripcion: string;
  activo: boolean;
  onChange: (v: boolean) => void;
}) {
  return (
    <label className="cursor-pointer rounded-[6px] border border-papel/15 px-4 py-3 transition-colors hover:border-papel/35">
      <span className="flex items-center justify-between gap-3">
        <span className="text-[0.9rem] font-semibold">{titulo}</span>
        <input
          type="checkbox"
          checked={activo}
          onChange={(e) => onChange(e.target.checked)}
          className="h-4 w-4 accent-[var(--esmeralda-lum)]"
        />
      </span>
      <span className="mt-1 block text-[0.82rem] leading-relaxed text-papel/65">
        {descripcion}
      </span>
    </label>
  );
}
