/**
 * Cobertura: UNA sola página. Nunca páginas por ciudad
 * (/abogados/{ciudad} está prohibido), nunca las 19 ciudades en el footer,
 * nunca direcciones ni fichas locales por ciudad.
 */

export type CiudadCobertura = { ciudad: string; departamento: string };

export const CIUDADES_COBERTURA: CiudadCobertura[] = [
  { ciudad: "Bogotá", departamento: "Cundinamarca" },
  { ciudad: "Medellín", departamento: "Antioquia" },
  { ciudad: "Cali", departamento: "Valle del Cauca" },
  { ciudad: "Barranquilla", departamento: "Atlántico" },
  { ciudad: "Cartagena", departamento: "Bolívar" },
  { ciudad: "Bucaramanga", departamento: "Santander" },
  { ciudad: "Cúcuta", departamento: "Norte de Santander" },
  { ciudad: "Pereira", departamento: "Risaralda" },
  { ciudad: "Manizales", departamento: "Caldas" },
  { ciudad: "Armenia", departamento: "Quindío" },
  { ciudad: "Ibagué", departamento: "Tolima" },
  { ciudad: "Villavicencio", departamento: "Meta" },
  { ciudad: "Santa Marta", departamento: "Magdalena" },
  { ciudad: "Popayán", departamento: "Cauca" },
  { ciudad: "Pasto", departamento: "Nariño" },
  { ciudad: "Neiva", departamento: "Huila" },
  { ciudad: "Montería", departamento: "Córdoba" },
  { ciudad: "Valledupar", departamento: "Cesar" },
  { ciudad: "Tunja", departamento: "Boyacá" },
];

/** Agrupación por región, solo para presentación. Sin enlaces individuales. */
export const REGIONES_COBERTURA: { region: string; ciudades: string[] }[] = [
  { region: "Centro y Orinoquía", ciudades: ["Bogotá", "Tunja", "Ibagué", "Villavicencio", "Neiva"] },
  { region: "Antioquia y Eje Cafetero", ciudades: ["Medellín", "Pereira", "Manizales", "Armenia"] },
  { region: "Pacífico y sur", ciudades: ["Cali", "Popayán", "Pasto"] },
  {
    region: "Caribe",
    ciudades: ["Barranquilla", "Cartagena", "Santa Marta", "Valledupar", "Montería"],
  },
  { region: "Santanderes", ciudades: ["Bucaramanga", "Cúcuta"] },
];

export function departamentoDe(ciudad: string): string {
  return CIUDADES_COBERTURA.find((c) => c.ciudad === ciudad)?.departamento ?? "Colombia";
}

/** areaServed reutilizable para Organization, LegalService y Service. */
export function areaServedSchema() {
  return CIUDADES_COBERTURA.map((c) => ({
    "@type": "City",
    name: c.ciudad,
    address: {
      "@type": "PostalAddress",
      addressRegion: c.departamento,
      addressCountry: "CO",
    },
  }));
}
