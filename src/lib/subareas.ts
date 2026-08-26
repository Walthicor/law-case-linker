/**
 * Plantilla de contenido para /areas/[silo]/[subarea].
 *
 * El contenido real de cada subárea se carga en CONTENIDO_SUBAREAS
 * (prompts 09a a 09e). Mientras una subárea no tenga bloque propio,
 * `contenidoSubarea` deriva un borrador a partir del pilar para que la
 * ruta nunca quede rota.
 *
 * REGLA DE ENLAZADO: una subárea solo enlaza a su pilar, a 2 guías de su
 * mismo silo y a la herramienta de su silo. Nunca fuera del silo.
 */

import { SUBAREAS_LABORAL } from "./subareas-laboral";
import { SUBAREAS_RIESGOS } from "./subareas-riesgos";
import { SUBAREAS_FAMILIA } from "./subareas-familia";
import { SUBAREAS_CIVIL } from "./subareas-civil";
import { SUBAREAS_ADMINISTRATIVO } from "./subareas-administrativo";
import { pilarPorSlug, type Guia, type Norma, type Faq, type Pilar, type Subarea } from "./pilares";

export type Paso = { titulo: string; texto: string };

export type ContenidoSubarea = {
  /** H1: el término exacto de búsqueda. */
  h1: string;
  /** title SEO: el término exacto, máx 60, sin sufijo de marca. */
  title: string;
  /** description SEO: la promesa concreta en una frase, máx 120. */
  description: string;
  /** Respuesta directa en el primer párrafo (fragmento destacado). */
  respuesta: string;
  /** Desarrollo del cuerpo (900–1.400 palabras con todo lo demás). */
  parrafos: string[];
  norma: Norma;
  plazo: { titulo: string; texto: string };
  /** "Qué puedes reclamar" o "Cómo se resuelve". */
  reclamar: { titulo: string; parrafos: string[]; lista?: string[] };
  pasos: Paso[];
  /** Bloques H2 adicionales para términos que merecen su propia sección. */
  bloques?: { titulo: string; parrafos: string[]; lista?: string[] }[];
  /** 5 preguntas para el acordeón y el schema FAQPage. */
  faqs: Faq[];
  /** Slugs de 2 guías DEL MISMO silo. Si se omite, se toman las del pilar. */
  guias?: string[];
};

/** Contenido real por `"{silo}/{subarea}"`. Se llena en 09a–09e. */
export const CONTENIDO_SUBAREAS: Record<string, ContenidoSubarea> = {
  ...SUBAREAS_LABORAL,
  ...SUBAREAS_RIESGOS,
  ...SUBAREAS_FAMILIA,
  ...SUBAREAS_CIVIL,
  ...SUBAREAS_ADMINISTRATIVO,
};

export type SubareaResuelta = ContenidoSubarea & {
  pilar: Pilar;
  subarea: Subarea;
  /** Máximo 2 guías, siempre del mismo silo. */
  guiasDelSilo: Guia[];
  herramienta: Pilar["herramienta"];
};

/** Borrador derivado del pilar mientras la subárea no tenga contenido propio. */
function borrador(p: Pilar, s: Subarea): ContenidoSubarea {
  const termino = `${s.titulo} en Colombia`;
  return {
    h1: termino,
    title: termino,
    description: `Qué dice la ley sobre ${s.titulo.toLowerCase()}, qué puedes reclamar y en cuánto tiempo.`,
    respuesta:
      s.texto ??
      `${s.titulo} es uno de los casos más frecuentes del derecho ${p.area} en Colombia. Aquí encuentras qué dice la ley, qué puedes reclamar, el plazo que tienes y el paso a paso para actuar.`,
    parrafos: [],
    norma: p.normas[0] as Norma,
    plazo: p.plazo,
    reclamar: {
      titulo: "Cómo se resuelve",
      parrafos: [
        `El resultado de un caso de ${s.titulo.toLowerCase()} depende de la prueba disponible y del plazo que quede. Un abogado ${p.area} revisa los documentos, define la vía y estima lo que se puede recuperar antes de iniciar cualquier trámite.`,
      ],
      lista: p.abogado.slice(0, 3),
    },
    pasos: [
      { titulo: "Reúne la prueba", texto: "Contratos, comunicaciones, comprobantes y respuestas escritas de la contraparte." },
      { titulo: "Reclama por escrito", texto: "Deja constancia de la solicitud: en muchos casos interrumpe el plazo y resuelve sin juicio." },
      { titulo: "Revisa el plazo", texto: "Verifica cuánto tiempo queda antes de que la acción prescriba o caduque." },
      { titulo: "Cuéntanos tu caso", texto: "Lo clasificamos y te conectamos con un abogado verificado de esta área." },
    ],
    faqs: p.faqs.slice(0, 5),
  };
}

export function contenidoSubarea(siloSlug: string, subareaSlug: string): SubareaResuelta | undefined {
  const pilar = pilarPorSlug(siloSlug);
  if (!pilar) return undefined;
  const subarea = pilar.subareas.find((s) => s.slug === subareaSlug);
  if (!subarea) return undefined;

  const base = CONTENIDO_SUBAREAS[`${siloSlug}/${subareaSlug}`] ?? borrador(pilar, subarea);

  const guiasDelSilo = (
    base.guias
      ? base.guias
          .map((g) => pilar.guias.find((x) => x.slug === g))
          .filter((g): g is Guia => Boolean(g))
      : pilar.guias
  ).slice(0, 2);

  return { ...base, pilar, subarea, guiasDelSilo, herramienta: pilar.herramienta };
}

/** Todas las rutas /areas/[silo]/[subarea] existentes. */
export function rutasSubareas(): { silo: string; subarea: string }[] {
  return Object.keys(CONTENIDO_SUBAREAS).map((k) => {
    const [silo, subarea] = k.split("/");
    return { silo: silo as string, subarea: subarea as string };
  });
}
