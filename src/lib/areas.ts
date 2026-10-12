export type Area = {
  titulo: string;
  descripcion: string;
  icono: string;
  to: string;
};

/** Los 13 pilares. `icono` es el nombre del icono lineal de lucide. */
export const AREAS: Area[] = [
  {
    titulo: "Laboral",
    descripcion: "Despidos, liquidaciones, acoso laboral, contratos y derecho colectivo.",
    icono: "Briefcase",
    to: "/areas",
  },
  {
    titulo: "Riesgos laborales",
    descripcion:
      "Accidentes de trabajo, enfermedad laboral y calificación de pérdida de capacidad.",
    icono: "HardHat",
    to: "/areas",
  },
  {
    titulo: "Familia",
    descripcion: "Divorcio, custodia, cuota alimentaria y sucesiones.",
    icono: "Users",
    to: "/areas",
  },
  {
    titulo: "Civil",
    descripcion: "Contratos, arrendamientos, obligaciones y responsabilidad civil.",
    icono: "FileText",
    to: "/areas",
  },
  {
    titulo: "Administrativo",
    descripcion: "Tutelas, contratación estatal, función pública y derecho disciplinario.",
    icono: "Landmark",
    to: "/areas",
  },
  {
    titulo: "Penal",
    descripcion: "Defensa, denuncias, audiencias y libertades.",
    icono: "Gavel",
    to: "/areas",
  },
  {
    titulo: "Comercial",
    descripcion: "Sociedades, contratos comerciales y conflictos entre socios.",
    icono: "Store",
    to: "/areas",
  },
  {
    titulo: "Inmobiliario",
    descripcion: "Compraventa, escrituración y propiedad horizontal.",
    icono: "Building2",
    to: "/areas",
  },
  {
    titulo: "Pensiones",
    descripcion: "Pensión de vejez, invalidez, sobrevivientes y reliquidación.",
    icono: "PiggyBank",
    to: "/areas",
  },
  {
    titulo: "Tránsito",
    descripcion: "Comparendos, accidentes e indemnizaciones.",
    icono: "Car",
    to: "/areas",
  },
  {
    titulo: "Insolvencia",
    descripcion: "Negociación de deudas para personas naturales.",
    icono: "Scale",
    to: "/areas",
  },
  {
    titulo: "Propiedad intelectual",
    descripcion: "Registro de marca, derechos de autor, software y competencia desleal.",
    icono: "BadgeCheck",
    to: "/areas",
  },
  {
    titulo: "Migratorio",
    descripcion: "Visas, cédula de extranjería y nacionalización.",
    icono: "Plane",
    to: "/areas",
  },
];

export const REGIONES: { region: string; ciudades: string[] }[] = [
  { region: "Centro", ciudades: ["Bogotá", "Tunja", "Ibagué", "Villavicencio", "Neiva"] },
  { region: "Antioquia", ciudades: ["Medellín"] },
  { region: "Eje cafetero", ciudades: ["Pereira", "Manizales", "Armenia"] },
  { region: "Valle y sur", ciudades: ["Cali", "Popayán", "Pasto"] },
  {
    region: "Caribe",
    ciudades: ["Barranquilla", "Cartagena", "Santa Marta", "Valledupar", "Montería"],
  },
  { region: "Santanderes", ciudades: ["Bucaramanga", "Cúcuta"] },
];
