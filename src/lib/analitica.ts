/**
 * GA4 + GTM con carga condicionada al consentimiento de cookies.
 * Nada se carga hasta que el visitante acepta la categoría "analíticas".
 */

const CLAVE = "ajc_consentimiento";

export const GA4_ID = (import.meta.env["VITE_GA4_ID"] as string | undefined) ?? "";
export const GTM_ID = (import.meta.env["VITE_GTM_ID"] as string | undefined) ?? "";

type Consentimiento = { analiticas?: boolean; marketing?: boolean };

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

export function consentimientoAnalitico(): boolean {
  if (typeof window === "undefined") return false;
  try {
    const raw = window.localStorage.getItem(CLAVE);
    if (!raw) return false;
    return (JSON.parse(raw) as Consentimiento).analiticas === true;
  } catch {
    return false;
  }
}

let cargado = false;

function inyectar(src: string) {
  const s = document.createElement("script");
  s.async = true;
  s.src = src;
  document.head.appendChild(s);
}

/** Carga GA4 y GTM una sola vez. Solo debe llamarse con consentimiento. */
export function cargarAnalitica() {
  if (cargado || typeof window === "undefined") return;
  if (!GA4_ID && !GTM_ID) return;
  cargado = true;

  window.dataLayer = window.dataLayer ?? [];
  window.gtag =
    window.gtag ??
    function gtag(...args: unknown[]) {
      window.dataLayer?.push(args);
    };
  window.gtag("js", new Date());

  if (GA4_ID) {
    inyectar(`https://www.googletagmanager.com/gtag/js?id=${GA4_ID}`);
    window.gtag("config", GA4_ID, { anonymize_ip: true });
  }
  if (GTM_ID) {
    window.dataLayer.push({ "gtm.start": Date.now(), event: "gtm.js" });
    inyectar(`https://www.googletagmanager.com/gtm.js?id=${GTM_ID}`);
  }

  for (const e of pendientes.splice(0)) enviar(e.nombre, e.datos);
}

const pendientes: { nombre: string; datos: Record<string, unknown> }[] = [];

function enviar(nombre: string, datos: Record<string, unknown>) {
  window.dataLayer?.push({ event: nombre, ...datos });
  window.gtag?.("event", nombre, datos);
}

/** Nombres cerrados: evita eventos inventados que ensucian los informes. */
export type NombreEvento =
  | "form_paso_1_completado"
  | "form_paso_2_completado"
  | "caso_enviado"
  | "herramienta_usada"
  | "pdf_descargado"
  | "postulacion_abogado_enviada"
  | "cta_click"
  | "video_hero_cargado";

/** Registra un evento. Sin consentimiento no sale del navegador. */
export function evento(nombre: NombreEvento, datos: Record<string, unknown> = {}) {
  if (typeof window === "undefined") return;
  if (!consentimientoAnalitico()) return;
  if (!cargado) {
    pendientes.push({ nombre, datos });
    cargarAnalitica();
    return;
  }
  enviar(nombre, datos);
}
