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

export const ABOGADOS: Abogado[] = [
  {
    slug: "camila-restrepo-aguirre",
    nombre: "Camila Restrepo Aguirre",
    tarjeta: "214.876",
    iniciales: "CR",
    ciudad: "Medellín",
    ciudades: ["Medellín", "Bogotá"],
    areas: ["laboral", "pensiones"],
    competencias: ["Litigio laboral", "Conciliación y MASC"],
    aniosExperiencia: 11,
    formacion: [
      { universidad: "Universidad de Antioquia", titulo: "Abogada", anio: 2013 },
    ],
    posgrados: ["Especialización en Derecho Laboral y Seguridad Social, Universidad Pontificia Bolivariana"],
    idiomas: ["Español", "Inglés"],
    cargos: ["Abogada litigante en asuntos laborales", "Conciliadora en derecho inscrita en centro de conciliación"],
  },
  {
    slug: "andres-felipe-cortes",
    nombre: "Andrés Felipe Cortés",
    tarjeta: "198.334",
    iniciales: "AC",
    ciudad: "Bogotá",
    ciudades: ["Bogotá", "Villavicencio"],
    areas: ["riesgos-laborales", "laboral"],
    competencias: ["Litigio laboral", "Litigio contencioso administrativo"],
    aniosExperiencia: 13,
    formacion: [{ universidad: "Universidad Nacional de Colombia", titulo: "Abogado", anio: 2011 }],
    posgrados: ["Especialización en Seguridad Social, Universidad Externado de Colombia"],
    idiomas: ["Español"],
    cargos: ["Abogado en procesos de calificación de pérdida de capacidad laboral"],
  },
  {
    slug: "diana-marcela-ospina",
    nombre: "Diana Marcela Ospina",
    tarjeta: "176.902",
    iniciales: "DO",
    ciudad: "Bogotá",
    ciudades: ["Bogotá", "Tunja"],
    areas: ["familia", "civil"],
    competencias: ["Litigio civil", "Conciliación y MASC"],
    aniosExperiencia: 16,
    formacion: [{ universidad: "Universidad del Rosario", titulo: "Abogada", anio: 2008 }],
    posgrados: ["Especialización en Derecho de Familia, Universidad del Rosario"],
    idiomas: ["Español", "Inglés"],
    cargos: ["Conciliadora en derecho", "Abogada en procesos de familia y sucesiones"],
  },
  {
    slug: "julian-esteban-mora",
    nombre: "Julián Esteban Mora",
    tarjeta: "231.115",
    iniciales: "JM",
    ciudad: "Cali",
    ciudades: ["Cali", "Popayán"],
    areas: ["civil", "inmobiliario"],
    competencias: ["Litigio civil", "Arbitraje", "Conciliación y MASC"],
    aniosExperiencia: 9,
    formacion: [{ universidad: "Universidad Icesi", titulo: "Abogado", anio: 2016 }],
    posgrados: ["Especialización en Derecho Contractual, Universidad Javeriana Cali"],
    idiomas: ["Español", "Inglés"],
    cargos: ["Abogado en procesos declarativos y ejecutivos civiles"],
  },
  {
    slug: "laura-catalina-bermudez",
    nombre: "Laura Catalina Bermúdez",
    tarjeta: "189.447",
    iniciales: "LB",
    ciudad: "Bogotá",
    ciudades: ["Bogotá"],
    areas: ["administrativo", "salud"],
    competencias: ["Litigio contencioso administrativo", "Derecho disciplinario"],
    aniosExperiencia: 14,
    formacion: [{ universidad: "Universidad Externado de Colombia", titulo: "Abogada", anio: 2010 }],
    posgrados: ["Especialización en Derecho Administrativo, Universidad Externado de Colombia"],
    idiomas: ["Español", "Francés"],
    cargos: ["Asesora jurídica en entidad del sector público", "Abogada en procesos de nulidad y restablecimiento"],
  },
  {
    slug: "ricardo-leon-vasquez",
    nombre: "Ricardo León Vásquez",
    tarjeta: "165.720",
    iniciales: "RV",
    ciudad: "Barranquilla",
    ciudades: ["Barranquilla", "Santa Marta", "Cartagena"],
    areas: ["penal"],
    competencias: ["Litigio penal", "Conciliación y MASC"],
    aniosExperiencia: 18,
    formacion: [{ universidad: "Universidad del Norte", titulo: "Abogado", anio: 2006 }],
    posgrados: ["Especialización en Derecho Penal y Criminología, Universidad Libre"],
    idiomas: ["Español"],
    cargos: ["Defensor en audiencias del sistema penal acusatorio"],
  },
  {
    slug: "marta-lucia-guerrero",
    nombre: "Marta Lucía Guerrero",
    tarjeta: "152.089",
    iniciales: "MG",
    ciudad: "Bogotá",
    ciudades: ["Bogotá", "Ibagué"],
    areas: ["pensiones", "laboral"],
    competencias: ["Litigio laboral", "Litigio contencioso administrativo"],
    aniosExperiencia: 21,
    formacion: [{ universidad: "Universidad Libre", titulo: "Abogada", anio: 2003 }],
    posgrados: ["Especialización en Derecho Laboral y Seguridad Social, Universidad Libre"],
    idiomas: ["Español"],
    cargos: ["Abogada en reclamaciones de pensión ante Colpensiones y fondos privados"],
  },
  {
    slug: "santiago-pelaez-duque",
    nombre: "Santiago Peláez Duque",
    tarjeta: "220.641",
    iniciales: "SP",
    ciudad: "Medellín",
    ciudades: ["Medellín"],
    areas: ["comercial", "insolvencia"],
    competencias: ["Litigio civil", "Arbitraje"],
    aniosExperiencia: 10,
    formacion: [{ universidad: "Universidad EAFIT", titulo: "Abogado", anio: 2015 }],
    posgrados: ["Especialización en Derecho Comercial, Universidad Pontificia Bolivariana"],
    idiomas: ["Español", "Inglés"],
    cargos: ["Abogado en constitución y reorganización de sociedades"],
  },
  {
    slug: "paula-andrea-rincon",
    nombre: "Paula Andrea Rincón",
    tarjeta: "207.318",
    iniciales: "PR",
    ciudad: "Bucaramanga",
    ciudades: ["Bucaramanga", "Cúcuta"],
    areas: ["inmobiliario", "civil"],
    competencias: ["Litigio civil", "Conciliación y MASC"],
    aniosExperiencia: 12,
    formacion: [{ universidad: "Universidad Industrial de Santander", titulo: "Abogada", anio: 2013 }],
    posgrados: ["Especialización en Derecho Inmobiliario, Universidad Autónoma de Bucaramanga"],
    idiomas: ["Español"],
    cargos: ["Abogada en restitución de inmueble arrendado y procesos de pertenencia"],
  },
  {
    slug: "oscar-ivan-beltran",
    nombre: "Óscar Iván Beltrán",
    tarjeta: "193.502",
    iniciales: "OB",
    ciudad: "Cali",
    ciudades: ["Cali", "Pasto"],
    areas: ["transito", "civil"],
    competencias: ["Litigio civil", "Litigio penal"],
    aniosExperiencia: 15,
    formacion: [{ universidad: "Universidad Santiago de Cali", titulo: "Abogado", anio: 2009 }],
    posgrados: ["Especialización en Responsabilidad Civil y Seguros, Universidad Javeriana"],
    idiomas: ["Español"],
    cargos: ["Abogado en reclamaciones por accidentes de tránsito y ante aseguradoras"],
  },
  {
    slug: "natalia-gomez-arroyave",
    nombre: "Natalia Gómez Arroyave",
    tarjeta: "236.780",
    iniciales: "NG",
    ciudad: "Medellín",
    ciudades: ["Medellín", "Pereira"],
    areas: ["insolvencia", "civil"],
    competencias: ["Conciliación y MASC", "Litigio civil"],
    aniosExperiencia: 8,
    formacion: [{ universidad: "Universidad de Medellín", titulo: "Abogada", anio: 2017 }],
    posgrados: ["Especialización en Derecho Procesal, Universidad de Medellín"],
    idiomas: ["Español"],
    cargos: ["Abogada en insolvencia de persona natural no comerciante"],
  },
  {
    slug: "felipe-ramirez-cano",
    nombre: "Felipe Ramírez Cano",
    tarjeta: "244.019",
    iniciales: "FR",
    ciudad: "Bogotá",
    ciudades: ["Bogotá"],
    areas: ["migratorio", "administrativo"],
    competencias: ["Litigio contencioso administrativo", "Conciliación y MASC"],
    aniosExperiencia: 7,
    formacion: [{ universidad: "Universidad Javeriana", titulo: "Abogado", anio: 2018 }],
    posgrados: ["Especialización en Derecho Internacional, Universidad Externado de Colombia"],
    idiomas: ["Español", "Inglés", "Portugués"],
    cargos: ["Abogado en trámites de visa, cédula de extranjería y nacionalización"],
  },
  {
    slug: "valentina-cardenas-ruiz",
    nombre: "Valentina Cárdenas Ruiz",
    tarjeta: "228.553",
    iniciales: "VC",
    ciudad: "Bogotá",
    ciudades: ["Bogotá", "Medellín"],
    areas: ["propiedad-intelectual", "comercial"],
    competencias: ["Litigio civil", "Arbitraje"],
    aniosExperiencia: 9,
    formacion: [{ universidad: "Universidad de los Andes", titulo: "Abogada", anio: 2016 }],
    posgrados: ["Maestría en Propiedad Intelectual, Universidad Externado de Colombia"],
    idiomas: ["Español", "Inglés"],
    cargos: ["Abogada en registro de marcas y oposiciones ante la SIC"],
  },
];

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
