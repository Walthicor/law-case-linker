/** Mapea el área seleccionada en el formulario a su silo de contenido. */

export type Silo = {
  area: string;
  slug: string;
  guia: string;
  herramienta: string;
};

const SLUGS: Record<string, string> = {
  Laboral: "laboral",
  "Riesgos laborales y ARL": "riesgos-laborales",
  Familia: "familia",
  Pensiones: "pensiones",
  "Propiedad intelectual": "propiedad-intelectual",
  Migratorio: "migratorio",
  Insolvencia: "insolvencia",
  Comercial: "comercial",
  Inmobiliario: "inmobiliario",
  Civil: "civil",
  Administrativo: "administrativo",
  Penal: "penal",
  Tránsito: "transito",
  "No estoy seguro": "general",
};

const NOMBRES: Record<string, string> = {
  laboral: "Derecho laboral",
  "riesgos-laborales": "Riesgos laborales y ARL",
  familia: "Derecho de familia",
  pensiones: "Pensiones y seguridad social",
  "propiedad-intelectual": "Propiedad intelectual",
  migratorio: "Derecho migratorio",
  insolvencia: "Deudas y reportes en centrales",
  comercial: "Derecho comercial y empresas",
  inmobiliario: "Inmobiliario y arrendamientos",
  civil: "Derecho civil y contratos",
  administrativo: "Derecho administrativo",
  penal: "Derecho penal",
  transito: "Accidentes y responsabilidad",
  general: "casos jurídicos",
};

export function siloDesdeArea(area: string): Silo {
  const slug = SLUGS[area] ?? "general";
  return {
    area: (NOMBRES[slug] ?? area) || "tu caso",
    slug,
    guia: `/guias/${slug}`,
    herramienta: `/herramientas/${slug}`,
  };
}
