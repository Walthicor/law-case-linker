/**
 * Directorio de abogados de la red.
 *
 * LÍMITE LEGAL (art. 31 Ley 1123 de 2007): la información publicada de un
 * abogado se limita a nombre, títulos académicos, especializaciones, cargos
 * desempeñados y asuntos que atiende. Está PROHIBIDO en este archivo y en las
 * vistas que lo consumen: estrellas, calificaciones, reseñas, porcentajes de
 * casos ganados, promesas de resultado y superlativos.
 *
 * // VERIFICAR CON ABOGADO — cada ficha debe confirmarse con el profesional y
 * con el Consejo Superior de la Judicatura antes de publicarse.
 */

export const COMPETENCIAS = [
  "Litigio civil",
  "Litigio laboral",
  "Litigio contencioso administrativo",
  "Litigio penal",
  "Derecho disciplinario",
  "Conciliación y MASC",
  "Arbitraje",
] as const;

export type Competencia = (typeof COMPETENCIAS)[number];

export type Formacion = { universidad: string; titulo: string; anio: number };

export type Abogado = {
  slug: string;
  nombre: string;
  /** Solo el número. La vista antepone "T.P." */
  tarjeta: string;
  iniciales: string;
  /** Foto real. Si no existe, la vista usa las iniciales. Nunca foto de stock. */
  foto?: string | undefined;
  ciudad: string;
  /** Ciudades donde ejerce, incluida la principal. */
  ciudades: string[];
  /** Slugs de los silos de práctica. */
  areas: string[];
  competencias: Competencia[];
  aniosExperiencia: number;
  formacion: Formacion[];
  posgrados: string[];
  idiomas: string[];
  /** Cargos desempeñados. Factual, sin adjetivos. */
  cargos: string[];
};

export const AREAS_ABOGADO: Record<string, string> = {
  laboral: "Laboral",
  "riesgos-laborales": "Riesgos laborales y ARL",
  familia: "Familia",
  civil: "Civil",
  administrativo: "Administrativo",
  penal: "Penal",
  pensiones: "Pensiones",
  salud: "Salud y EPS",
  comercial: "Comercial",
  inmobiliario: "Inmobiliario",
  transito: "Tránsito",
  insolvencia: "Insolvencia",
  migratorio: "Migratorio",
  "propiedad-intelectual": "Propiedad intelectual",
};

/** Área del formulario de /iniciar-caso según el silo. */
export const AREA_FORMULARIO: Record<string, string> = {
  laboral: "Laboral",
  "riesgos-laborales": "Riesgos laborales y ARL",
  familia: "Familia",
  civil: "Civil",
  administrativo: "Administrativo",
  penal: "Penal",
  pensiones: "Pensiones",
  salud: "Administrativo",
  comercial: "Comercial",
  inmobiliario: "Inmobiliario",
  transito: "Tránsito",
  insolvencia: "Insolvencia",
  migratorio: "Migratorio",
  "propiedad-intelectual": "Propiedad intelectual",
};

/**
 * Fichas publicadas. Vacío a propósito: solo se agrega un abogado real, con su
 * autorización y la tarjeta profesional verificada ante el C.S.J.
 * (las fichas de ejemplo se retiraron el 16 oct 2026).
 */
export const ABOGADOS: Abogado[] = [];

export function abogadoPorSlug(slug: string): Abogado | undefined {
  return ABOGADOS.find((a) => a.slug === slug);
}

/** Rangos de experiencia para el filtro. */
export const RANGOS_EXPERIENCIA: { valor: string; titulo: string; min: number; max: number }[] = [
  { valor: "0-5", titulo: "Hasta 5 años", min: 0, max: 5 },
  { valor: "6-10", titulo: "6 a 10 años", min: 6, max: 10 },
  { valor: "11-15", titulo: "11 a 15 años", min: 11, max: 15 },
  { valor: "16+", titulo: "Más de 15 años", min: 16, max: 100 },
];

export function ciudadesDeLaRed(): string[] {
  const set = new Set<string>();
  for (const a of ABOGADOS) for (const c of a.ciudades) set.add(c);
  return [...set].sort((x, y) => x.localeCompare(y, "es"));
}

export function areasDeLaRed(): { slug: string; titulo: string }[] {
  const set = new Set<string>();
  for (const a of ABOGADOS) for (const s of a.areas) set.add(s);
  return [...set]
    .map((s) => ({ slug: s, titulo: AREAS_ABOGADO[s] ?? s }))
    .sort((x, y) => x.titulo.localeCompare(y.titulo, "es"));
}

export type FiltrosAbogado = {
  area?: string | undefined;
  ciudad?: string | undefined;
  experiencia?: string | undefined;
  competencia?: string | undefined;
};

export function filtrarAbogados(f: FiltrosAbogado): Abogado[] {
  const rango = RANGOS_EXPERIENCIA.find((r) => r.valor === f.experiencia);
  return ABOGADOS.filter((a) => {
    if (f.area && !a.areas.includes(f.area)) return false;
    if (f.ciudad && !a.ciudades.includes(f.ciudad)) return false;
    if (f.competencia && !a.competencias.includes(f.competencia as Competencia)) return false;
    if (rango && (a.aniosExperiencia < rango.min || a.aniosExperiencia > rango.max)) return false;
    return true;
  });
}
