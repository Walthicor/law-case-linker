/** Construcción de los sitemaps. Sin base de datos: todo sale del inventario SEO. */

import { absoluta, SITIO } from "./seo";
import { entradasSitemap, inventarioSeo, ULTIMA_REVISION, type Grupo } from "./seo-inventario";

const CABECERA = '<?xml version="1.0" encoding="UTF-8"?>';

export function respuestaXml(xml: string) {
  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
}

export function sitemapDe(grupo: Grupo): string {
  const urls = entradasSitemap(grupo)
    .map(
      (e) =>
        `  <url>\n    <loc>${absoluta(e.ruta)}</loc>\n    <lastmod>${e.lastmod}</lastmod>\n    <priority>${e.prioridad.toFixed(1)}</priority>\n  </url>`,
    )
    .join("\n");
  return `${CABECERA}\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;
}

const GRUPOS: { grupo: Grupo; archivo: string }[] = [
  { grupo: "paginas", archivo: "sitemap-paginas.xml" },
  { grupo: "areas", archivo: "sitemap-areas.xml" },
  { grupo: "subareas", archivo: "sitemap-subareas.xml" },
  { grupo: "herramientas", archivo: "sitemap-herramientas.xml" },
  { grupo: "guias", archivo: "sitemap-guias.xml" },
  { grupo: "abogados", archivo: "sitemap-abogados.xml" },
];

/** lastmod del sub-sitemap: la fecha más reciente de sus URL. */
function ultimaFecha(grupo: Grupo): string {
  const fechas = entradasSitemap(grupo)
    .map((e) => e.lastmod)
    .sort();
  return fechas[fechas.length - 1] ?? ULTIMA_REVISION;
}

export function sitemapIndice(): string {
  const items = GRUPOS.map(
    ({ grupo, archivo }) =>
      `  <sitemap>\n    <loc>${SITIO}/${archivo}</loc>\n    <lastmod>${ultimaFecha(grupo)}</lastmod>\n  </sitemap>`,
  ).join("\n");
  return `${CABECERA}\n<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${items}\n</sitemapindex>\n`;
}

export function totalUrls(): number {
  return inventarioSeo().filter((e) => e.fueraDelSitemap !== true).length;
}
