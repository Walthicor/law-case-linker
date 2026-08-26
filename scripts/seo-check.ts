/**
 * Chequeo SEO del sitio. Recorre el inventario de rutas y reporta:
 * titles >60, descriptions >120, duplicados, páginas huérfanas y páginas sin
 * schema. Falla (código 1) si algún title supera 60 caracteres.
 *
 *   bun scripts/seo-check.ts
 */

import { readdirSync } from "node:fs";
import { MAX_DESC, MAX_TITLE } from "../src/lib/seo";
import { inventarioSeo } from "../src/lib/seo-inventario";

const rojo = (s: string) => `\x1b[31m${s}\x1b[0m`;
const amarillo = (s: string) => `\x1b[33m${s}\x1b[0m`;
const verde = (s: string) => `\x1b[32m${s}\x1b[0m`;

const entradas = inventarioSeo();
const errores: string[] = [];
const avisos: string[] = [];

/* 1. Longitudes */
for (const e of entradas) {
  if (e.titulo.length > MAX_TITLE)
    errores.push(`title de ${e.ruta}: ${e.titulo.length} caracteres — "${e.titulo}"`);
  if (e.descripcion.length > MAX_DESC)
    avisos.push(`description de ${e.ruta}: ${e.descripcion.length} caracteres`);
  if (!e.descripcion.trim()) avisos.push(`${e.ruta} sin description`);
}

/* 2. Duplicados */
const porTitulo = new Map<string, string[]>();
const porDesc = new Map<string, string[]>();
for (const e of entradas) {
  porTitulo.set(e.titulo, [...(porTitulo.get(e.titulo) ?? []), e.ruta]);
  porDesc.set(e.descripcion, [...(porDesc.get(e.descripcion) ?? []), e.ruta]);
}
for (const [titulo, rutas] of porTitulo)
  if (rutas.length > 1) avisos.push(`title duplicado "${titulo}" en ${rutas.join(", ")}`);
for (const [, rutas] of porDesc)
  if (rutas.length > 1) avisos.push(`description duplicada en ${rutas.join(", ")}`);

/* 3. Páginas sin schema */
for (const e of entradas)
  if (!e.schema && !(e.robots ?? "").includes("noindex"))
    avisos.push(`${e.ruta} no emite JSON-LD`);

/* 4. Huérfanas: rutas estáticas del router que no están en el inventario */
const rutasDelRouter = readdirSync("src/routes")
  .filter((f) => /\.tsx$/.test(f))
  .filter((f) => !f.startsWith("__") && !f.includes("$") && !f.includes("["))
  .map((f) => f.replace(/\.tsx$/, ""))
  .map((f) => (f === "index" ? "/" : `/${f.replace(/\.index$/, "").split(".").join("/")}`));

const enInventario = new Set(entradas.map((e) => e.ruta));
for (const r of rutasDelRouter) {
  if (r === "/areas" || r === "/guias" || r === "/abogados" || r === "/herramientas") continue;
  if (!enInventario.has(r)) avisos.push(`ruta huérfana (sin entrada en el inventario SEO): ${r}`);
}

/* Informe */
console.log(`\nSEO — ${entradas.length} páginas revisadas`);
console.log(`  ${rutasDelRouter.length} rutas estáticas en src/routes\n`);

if (avisos.length) {
  console.log(amarillo(`Avisos (${avisos.length}):`));
  for (const a of avisos) console.log(`  · ${a}`);
  console.log("");
}

if (errores.length) {
  console.log(rojo(`Errores que rompen el build (${errores.length}):`));
  for (const e of errores) console.log(`  ✗ ${e}`);
  console.log("");
  process.exit(1);
}

console.log(verde("Sin titles por encima de 60 caracteres. Chequeo SEO superado.\n"));
