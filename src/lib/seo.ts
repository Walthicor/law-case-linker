/**
 * Sistema único de metadatos. Toda ruta pasa por `metaSeo` para que el
 * title, la descripción, el canonical absoluto y las etiquetas sociales
 * salgan siempre con la misma forma.
 */

export const SITIO = "https://asesoriasjuridicas.com";

/** 22 caracteres. Solo se añade si el title final cabe en 60. */
export const SUFIJO = " | Asesorías Jurídicas";

export const LOCALE = "es_CO";
export const NOMBRE_SITIO = "Asesorías Jurídicas Colombia";

export const MAX_TITLE = 60;
export const MAX_DESC = 120;

/** Imágenes OG por tipo de página (fondo papel, logo, franja esmeralda). */
export const OG = {
  /** Tarjeta social principal: monograma AJ y la frase con "Abogado" luminoso. */
  social: "/og/og-social.jpg",
  base: "/og/og-base.jpg",
  areas: "/og/og-areas.jpg",
  guias: "/og/og-guias.jpg",
  herramientas: "/og/og-herramientas.jpg",
  abogados: "/og/og-abogados.jpg",
} as const;

export type ImagenOg = (typeof OG)[keyof typeof OG];

/** Añade el sufijo de marca solo si el title final no supera 60 caracteres. */
export function tituloSeo(base: string): string {
  const limpio = base.trim();
  return limpio.length + SUFIJO.length <= MAX_TITLE ? limpio + SUFIJO : limpio;
}

/** URL absoluta autorreferencial. Nunca dobles barras, nunca barra final. */
export function absoluta(ruta: string): string {
  if (/^https?:\/\//i.test(ruta)) return ruta;
  const limpia = `/${ruta.replace(/^\/+/, "")}`.replace(/\/+$/, "");
  return limpia === "" ? `${SITIO}/` : SITIO + limpia;
}

export type TipoOg = "website" | "article" | "profile";

export type SeoPagina = {
  /** Title final, ya con o sin sufijo. Máx 60. */
  titulo: string;
  /** Máx 120. */
  descripcion: string;
  /** Ruta interna, p. ej. "/guias/como-hacer-un-derecho-de-peticion". */
  ruta: string;
  tipo?: TipoOg;
  imagen?: string;
  /** Por defecto "index, follow". */
  robots?: string;
};

/* ── Validador en desarrollo ──────────────────────────────────────── */

const vistas = new Map<string, string>();

function avisar(mensaje: string) {
  if (import.meta.env.DEV) console.warn(`[SEO] ${mensaje}`);
}

/** Advierte en consola: title >60, description >120, duplicados, sin canonical. */
export function validarSeo(p: SeoPagina) {
  if (!import.meta.env.DEV) return;
  if (p.titulo.length > MAX_TITLE)
    avisar(`title de ${p.ruta} tiene ${p.titulo.length} caracteres (máx ${MAX_TITLE}): ${p.titulo}`);
  if (p.descripcion.length > MAX_DESC)
    avisar(
      `description de ${p.ruta} tiene ${p.descripcion.length} caracteres (máx ${MAX_DESC}).`,
    );
  if (!p.descripcion.trim()) avisar(`${p.ruta} no tiene description.`);
  if (!p.ruta.startsWith("/")) avisar(`${p.ruta} no es una ruta interna: falta canonical válido.`);

  const previo = vistas.get(p.titulo);
  if (previo && previo !== p.ruta) avisar(`title duplicado entre ${previo} y ${p.ruta}.`);
  vistas.set(p.titulo, p.ruta);

  const previoDesc = vistas.get(`d:${p.descripcion}`);
  if (previoDesc && previoDesc !== p.ruta)
    avisar(`description duplicada entre ${previoDesc} y ${p.ruta}.`);
  vistas.set(`d:${p.descripcion}`, p.ruta);
}

/* ── Generador de metadatos ───────────────────────────────────────── */

export function metaSeo(p: SeoPagina) {
  validarSeo(p);
  const url = absoluta(p.ruta);
  const imagen = absoluta(p.imagen ?? OG.base);
  const robots = p.robots ?? "index, follow";

  return {
    meta: [
      { title: p.titulo },
      { name: "description", content: p.descripcion },
      { name: "robots", content: robots },
      { property: "og:site_name", content: NOMBRE_SITIO },
      { property: "og:locale", content: LOCALE },
      { property: "og:type", content: p.tipo ?? "website" },
      { property: "og:url", content: url },
      { property: "og:title", content: p.titulo },
      { property: "og:description", content: p.descripcion },
      { property: "og:image", content: imagen },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: p.titulo },
      { name: "twitter:description", content: p.descripcion },
      { name: "twitter:image", content: imagen },
    ],
    links: [{ rel: "canonical", href: url }],
  };
}

/** Recorta a `max` caracteres sin cortar palabras. */
export function recortar(texto: string, max: number): string {
  const limpio = texto.trim().replace(/\s+/g, " ");
  if (limpio.length <= max) return limpio;
  const corte = limpio.slice(0, max - 1);
  return `${corte.slice(0, corte.lastIndexOf(" ")).replace(/[,.;:]$/, "")}…`;
}
