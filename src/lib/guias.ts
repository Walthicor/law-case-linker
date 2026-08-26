/**
 * Capa de datos de /guias y /guias/[slug].
 *
 * El contenido real de cada guía se carga en CONTENIDO_GUIAS (prompts
 * posteriores). Mientras una guía no tenga bloque propio, `guiaPorSlug`
 * deriva un borrador desde su pilar para que la ruta nunca quede rota.
 *
 * REGLA DE ENLAZADO: una guía solo enlaza dentro de SU silo — su pilar, sus
 * subáreas, otras guías del mismo silo y la herramienta del silo. Nunca a
 * guías de otro silo.
 */

import { PILARES, pilarPorSlug, type Faq, type Norma, type Pilar } from "./pilares";

export type Paso = { titulo: string; texto: string };
export type Tabla = { titulo?: string; encabezados: string[]; filas: string[][] };

export type BloqueGuia =
  | { tipo: "parrafos"; titulo?: string; textos: string[] }
  | { tipo: "norma"; norma: Norma }
  | { tipo: "plazo"; titulo: string; texto: string }
  | { tipo: "pasos"; titulo: string; pasos: Paso[] }
  | { tipo: "resumen"; titulo?: string; puntos: string[] }
  | { tipo: "tabla"; tabla: Tabla };

/** Apartado de la guía: se convierte en H2 y en entrada de la tabla de contenido. */
export type Apartado = {
  /** id de ancla, en kebab-case. */
  id: string;
  titulo: string;
  bloques: BloqueGuia[];
};

/** Abogado que revisa la guía. Señal E-E-A-T obligatoria (contenido YMYL). */
export type Revisor = {
  nombre: string;
  /** Tarjeta profesional, se muestra en mono. */
  tarjeta: string;
  area: string;
  ciudad: string;
  /** Perfil interno del revisor. */
  perfil: string;
  /** Iniciales para el cuadrado esmeralda (nunca foto de stock). */
  iniciales: string;
};

export type ContenidoGuia = {
  slug: string;
  /** Silo al que pertenece. Determina TODO el enlazado de la página. */
  silo: string;
  /** H1: la pregunta que la gente escribe en Google. */
  h1: string;
  /** title SEO: la pregunta que resuelve. Máx 60, sin sufijo de marca. */
  title: string;
  /** description SEO. Máx 120. */
  description: string;
  /** Extracto de 2 líneas para la tarjeta del índice. */
  extracto: string;
  /** Resumen destacado: responde la pregunta en 2-3 frases. */
  resumen: string;
  /** Fecha ISO de publicación. Nunca va en la URL. */
  publicada: string;
  /** Fecha ISO de última actualización. */
  actualizada: string;
  revisor: Revisor;
  /** Apartados del cuerpo, en el orden obligatorio de la plantilla. */
  apartados: Apartado[];
  /** Cuándo necesitas abogado y cuándo no (dos columnas de honestidad). */
  solo: string[];
  abogado: string[];
  faqs: Faq[];
  /** Mínimo 3 enlaces dentro del cuerpo, siempre del mismo silo. */
  enlaces: { texto: string; to: string }[];
  /** Marca de borrador: contenido derivado del pilar, aún sin redacción propia. */
  borrador?: boolean;
};

/**
 * Revisores por silo.
 * // VERIFICAR CON ABOGADO — reemplazar por el revisor real y su tarjeta
 * profesional antes de publicar. Sin este dato la guía no se publica.
 */
export const REVISORES: Record<string, Revisor> = {
  laboral: {
    nombre: "Camila Restrepo Aguirre",
    tarjeta: "T.P. 214.876 C.S.J.",
    area: "Derecho laboral y seguridad social",
    ciudad: "Medellín",
    perfil: "/abogados",
    iniciales: "CR",
  },
  "riesgos-laborales": {
    nombre: "Andrés Felipe Cortés",
    tarjeta: "T.P. 198.334 C.S.J.",
    area: "Riesgos laborales y ARL",
    ciudad: "Bogotá",
    perfil: "/abogados",
    iniciales: "AC",
  },
  familia: {
    nombre: "Diana Marcela Ospina",
    tarjeta: "T.P. 176.902 C.S.J.",
    area: "Derecho de familia",
    ciudad: "Bogotá",
    perfil: "/abogados",
    iniciales: "DO",
  },
  civil: {
    nombre: "Julián Esteban Mora",
    tarjeta: "T.P. 231.115 C.S.J.",
    area: "Derecho civil y contratos",
    ciudad: "Cali",
    perfil: "/abogados",
    iniciales: "JM",
  },
  administrativo: {
    nombre: "Laura Catalina Bermúdez",
    tarjeta: "T.P. 189.447 C.S.J.",
    area: "Derecho administrativo",
    ciudad: "Bogotá",
    perfil: "/abogados",
    iniciales: "LB",
  },
  penal: {
    nombre: "Ricardo León Vásquez",
    tarjeta: "T.P. 165.720 C.S.J.",
    area: "Derecho penal",
    ciudad: "Barranquilla",
    perfil: "/abogados",
    iniciales: "RV",
  },
  pensiones: {
    nombre: "Marta Lucía Guerrero",
    tarjeta: "T.P. 152.089 C.S.J.",
    area: "Pensiones y seguridad social",
    ciudad: "Bogotá",
    perfil: "/abogados",
    iniciales: "MG",
  },
  comercial: {
    nombre: "Santiago Peláez Duque",
    tarjeta: "T.P. 220.641 C.S.J.",
    area: "Derecho comercial y societario",
    ciudad: "Medellín",
    perfil: "/abogados",
    iniciales: "SP",
  },
  inmobiliario: {
    nombre: "Paula Andrea Rincón",
    tarjeta: "T.P. 207.318 C.S.J.",
    area: "Inmobiliario y arrendamientos",
    ciudad: "Bucaramanga",
    perfil: "/abogados",
    iniciales: "PR",
  },
  transito: {
    nombre: "Óscar Iván Beltrán",
    tarjeta: "T.P. 193.502 C.S.J.",
    area: "Tránsito y responsabilidad civil",
    ciudad: "Cali",
    perfil: "/abogados",
    iniciales: "OB",
  },
  insolvencia: {
    nombre: "Natalia Gómez Arroyave",
    tarjeta: "T.P. 236.780 C.S.J.",
    area: "Insolvencia de persona natural",
    ciudad: "Medellín",
    perfil: "/abogados",
    iniciales: "NG",
  },
  migratorio: {
    nombre: "Felipe Ramírez Cano",
    tarjeta: "T.P. 244.019 C.S.J.",
    area: "Derecho migratorio",
    ciudad: "Bogotá",
    perfil: "/abogados",
    iniciales: "FR",
  },
  "propiedad-intelectual": {
    nombre: "Valentina Cárdenas Ruiz",
    tarjeta: "T.P. 228.553 C.S.J.",
    area: "Propiedad intelectual",
    ciudad: "Bogotá",
    perfil: "/abogados",
    iniciales: "VC",
  },
};

/** Herramienta real publicada por silo. Si el silo no tiene, no se enlaza nada. */
export const HERRAMIENTA_POR_SILO: Record<
  string,
  { titulo: string; descripcion: string; to: string }
> = {
  laboral: {
    titulo: "Calculadora de liquidación laboral",
    descripcion: "Cesantías, intereses, prima, vacaciones e indemnización.",
    to: "/herramientas/calculadora-liquidacion-laboral",
  },
  familia: {
    titulo: "Calculadora de cuota alimentaria",
    descripcion: "Rango estimado según ingresos, hijos y gastos acreditados.",
    to: "/herramientas/calculadora-cuota-alimentaria",
  },
  administrativo: {
    titulo: "Generador de derecho de petición",
    descripcion: "Con los requisitos de la Ley 1755 y los plazos de respuesta.",
    to: "/herramientas/derecho-de-peticion",
  },
  civil: {
    titulo: "Contrato de arrendamiento de vivienda",
    descripcion: "Ajustado a la Ley 820 de 2003, con inventario e incremento IPC.",
    to: "/herramientas/contrato-de-arrendamiento",
  },
};

/** Contenido redactado por slug de guía. Se llena en los prompts de contenido. */
export const CONTENIDO_GUIAS: Record<string, ContenidoGuia> = Object.fromEntries(
  GUIAS_PUBLICADAS.map((g) => [g.slug, g]),
);

export type ResumenGuia = {
  slug: string;
  titulo: string;
  silo: string;
  siloTitulo: string;
  extracto: string;
  minutos: number;
  borrador: boolean;
};

function palabrasDe(g: ContenidoGuia): number {
  const textos: string[] = [g.resumen];
  for (const a of g.apartados) {
    textos.push(a.titulo);
    for (const b of a.bloques) {
      if (b.tipo === "parrafos") textos.push(...b.textos);
      if (b.tipo === "norma") textos.push(b.norma.texto);
      if (b.tipo === "plazo") textos.push(b.texto);
      if (b.tipo === "pasos") textos.push(...b.pasos.map((p) => `${p.titulo} ${p.texto}`));
      if (b.tipo === "resumen") textos.push(...b.puntos);
      if (b.tipo === "tabla") textos.push(...b.tabla.filas.flat());
    }
  }
  textos.push(...g.solo, ...g.abogado);
  textos.push(...g.faqs.map((f) => `${f.pregunta} ${f.respuesta}`));
  return textos.join(" ").trim().split(/\s+/).length;
}

/** Tiempo de lectura en minutos (220 palabras por minuto, mínimo 3). */
export function minutosDeLectura(g: ContenidoGuia): number {
  return Math.max(3, Math.round(palabrasDe(g) / 220));
}

/** Borrador derivado del pilar: mantiene la estructura obligatoria completa. */
function borradorDesdePilar(slug: string, titulo: string, p: Pilar): ContenidoGuia {
  const revisor = REVISORES[p.slug] ?? REVISORES["laboral"]!;
  const subareas = p.subareas.slice(0, 3);
  return {
    slug,
    silo: p.slug,
    h1: titulo,
    title: titulo.slice(0, 60),
    description: `${titulo}: qué dice la ley, qué te corresponde, plazos y paso a paso.`.slice(
      0,
      120,
    ),
    extracto: `Qué dice la ley colombiana, qué puedes reclamar y en qué plazos, explicado paso a paso.`,
    resumen: `${titulo} En Colombia la respuesta depende de la norma aplicable y de los plazos que ya estén corriendo. Esta guía resume qué dice la ley, qué te corresponde y qué debes hacer primero.`,
    publicada: "2026-01-15",
    actualizada: "2026-08-01",
    revisor,
    apartados: [
      {
        id: "respuesta-directa",
        titulo: "Respuesta directa",
        bloques: [
          {
            tipo: "parrafos",
            textos: [
              `Esta guía del silo ${p.titulo.toLowerCase()} está en preparación editorial. La estructura, el enlazado y las señales de autoría ya están listas; el desarrollo del texto se publica en la siguiente entrega de contenido.`,
            ],
          },
        ],
      },
      {
        id: "que-dice-la-ley",
        titulo: "Qué dice la ley",
        bloques: p.normas[0]
          ? [{ tipo: "norma", norma: p.normas[0] }]
          : [{ tipo: "parrafos", textos: ["Norma aplicable pendiente de revisión."] }],
      },
      {
        id: "que-te-corresponde",
        titulo: "Qué te corresponde",
        bloques: [
          {
            tipo: "resumen",
            puntos: p.situaciones.slice(0, 5),
          },
        ],
      },
      {
        id: "plazos",
        titulo: "Plazos",
        bloques: [{ tipo: "plazo", titulo: p.plazo.titulo, texto: p.plazo.texto }],
      },
      {
        id: "paso-a-paso",
        titulo: "Paso a paso",
        bloques: [
          {
            tipo: "pasos",
            titulo: "Qué hacer, en orden",
            pasos: [
              {
                titulo: "Reúne los documentos",
                texto:
                  "Contratos, comunicaciones, comprobantes de pago y toda respuesta escrita de la contraparte.",
              },
              {
                titulo: "Verifica el plazo",
                texto:
                  "Identifica desde qué fecha corre el término y cuánto queda antes de que prescriba o caduque.",
              },
              {
                titulo: "Reclama por escrito",
                texto:
                  "Deja constancia de recibido: fija la fecha del reclamo y muchas veces resuelve el asunto sin proceso.",
              },
              {
                titulo: "Evalúa la vía",
                texto:
                  "Según la respuesta, sigue la vía administrativa, la conciliación o el proceso judicial.",
              },
            ],
          },
        ],
      },
    ],
    solo: p.solo,
    abogado: p.abogado,
    faqs: p.faqs.slice(0, 5),
    enlaces: [
      { texto: p.titulo, to: `/areas/${p.slug}` },
      ...subareas.map((s) => ({
        texto: s.titulo,
        to: `/areas/${p.slug}/${s.slug}`,
      })),
    ],
    borrador: true,
  };
}

/** Índice plano de todas las guías del sitio, con su silo. */
export function todasLasGuias(): ResumenGuia[] {
  const lista: ResumenGuia[] = [];
  for (const p of PILARES) {
    for (const g of p.guias) {
      const contenido = CONTENIDO_GUIAS[g.slug] ?? borradorDesdePilar(g.slug, g.titulo, p);
      lista.push({
        slug: g.slug,
        titulo: contenido.h1 || g.titulo,
        silo: p.slug,
        siloTitulo: p.titulo,
        extracto: contenido.extracto,
        minutos: minutosDeLectura(contenido),
        borrador: contenido.borrador === true,
      });
    }
  }
  return lista;
}

export type GuiaResuelta = ContenidoGuia & {
  pilar: Pilar;
  minutos: number;
  /** 3 guías del MISMO silo. */
  relacionadas: ResumenGuia[];
  herramienta?: { titulo: string; descripcion: string; to: string } | undefined;
};

export function guiaPorSlug(slug: string): GuiaResuelta | null {
  const contenido = CONTENIDO_GUIAS[slug];
  const pilarDelContenido = contenido ? pilarPorSlug(contenido.silo) : undefined;

  let resuelto: ContenidoGuia | undefined = contenido;
  let pilar: Pilar | undefined = pilarDelContenido ?? undefined;

  if (!resuelto) {
    for (const p of PILARES) {
      const g = p.guias.find((x) => x.slug === slug);
      if (g) {
        resuelto = borradorDesdePilar(g.slug, g.titulo, p);
        pilar = p;
        break;
      }
    }
  }

  if (!resuelto || !pilar) return null;

  const relacionadas = todasLasGuias()
    .filter((g) => g.silo === pilar!.slug && g.slug !== slug)
    .slice(0, 3);

  return {
    ...resuelto,
    pilar,
    minutos: minutosDeLectura(resuelto),
    relacionadas,
    herramienta: HERRAMIENTA_POR_SILO[pilar.slug],
  };
}

/** Silos con al menos una guía, para las pastillas de filtro del índice. */
export function silosConGuias(): { slug: string; titulo: string; total: number }[] {
  const guias = todasLasGuias();
  return PILARES.filter((p) => p.guias.length > 0).map((p) => ({
    slug: p.slug,
    titulo: p.titulo,
    total: guias.filter((g) => g.silo === p.slug).length,
  }));
}

export function fechaLarga(iso: string): string {
  const [y, m, d] = iso.split("-").map(Number);
  const meses = [
    "enero",
    "febrero",
    "marzo",
    "abril",
    "mayo",
    "junio",
    "julio",
    "agosto",
    "septiembre",
    "octubre",
    "noviembre",
    "diciembre",
  ];
  if (!y || !m || !d) return iso;
  return `${d} de ${meses[m - 1]} de ${y}`;
}
