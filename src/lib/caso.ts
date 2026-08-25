/** Modelo, puntuación y persistencia del formulario de caso. */

export const AREAS_CASO: { grupo: string; opciones: string[] }[] = [
  {
    grupo: "PERSONAS",
    opciones: ["Laboral", "Riesgos laborales y ARL", "Familia", "Pensiones", "Tránsito"],
  },
  { grupo: "DINERO Y BIENES", opciones: ["Civil", "Inmobiliario", "Insolvencia"] },
  { grupo: "EMPRESAS", opciones: ["Comercial", "Propiedad intelectual"] },
  { grupo: "ESTADO", opciones: ["Administrativo", "Penal"] },
  { grupo: "OTROS", opciones: ["Migratorio", "No estoy seguro"] },
];

export const ESTADOS_CASO = [
  "Apenas necesito asesoría",
  "Voy a iniciar un proceso",
  "Ya tengo un proceso judicial en curso",
  "Quiero apelar una decisión",
  "Necesito cambiar de abogado",
] as const;

export const URGENCIAS = [
  { valor: "Necesito ayuda hoy mismo", nota: "El caso no puede esperar." },
  { valor: "Esta semana", nota: "Hay un plazo cerca." },
  { valor: "Este mes", nota: "Quiero avanzar pronto." },
  { valor: "Solo quiero orientación", nota: "Aún estoy evaluando." },
] as const;

export const DOCUMENTOS = [
  "Sí, tengo todos",
  "Tengo algunos",
  "No tengo ninguno",
  "No sé cuáles necesito",
] as const;

export const VALORES = [
  "Menos de $10 millones",
  "Entre $10 y $50 millones",
  "Entre $50 y $300 millones",
  "Más de $300 millones",
  "Prefiero no decirlo",
] as const;

export type Caso = {
  area: string;
  ciudad: string;
  estado: string;
  descripcion: string;
  urgencia: string;
  documentos: string;
  nombre: string;
  correo: string;
  whatsapp: string;
  valor: string;
  autorizaDatos: boolean;
  autorizaTransmision: boolean;
};

export const CASO_VACIO: Caso = {
  area: "",
  ciudad: "",
  estado: "",
  descripcion: "",
  urgencia: "",
  documentos: "",
  nombre: "",
  correo: "",
  whatsapp: "",
  valor: "",
  autorizaDatos: false,
  autorizaTransmision: false,
};

const PUNTOS_URGENCIA: Record<string, number> = {
  "Necesito ayuda hoy mismo": 30,
  "Esta semana": 22,
  "Este mes": 12,
  "Solo quiero orientación": 3,
};

const PUNTOS_ESTADO: Record<string, number> = {
  "Voy a iniciar un proceso": 25,
  "Ya tengo un proceso judicial en curso": 24,
  "Necesito cambiar de abogado": 22,
  "Quiero apelar una decisión": 20,
  "Apenas necesito asesoría": 8,
};

const PUNTOS_VALOR: Record<string, number> = {
  "Más de $300 millones": 25,
  "Entre $50 y $300 millones": 21,
  "Entre $10 y $50 millones": 15,
  "Menos de $10 millones": 8,
  "Prefiero no decirlo": 11,
  "": 11,
};

const PUNTOS_DOCUMENTOS: Record<string, number> = {
  "Sí, tengo todos": 10,
  "Tengo algunos": 7,
  "No sé cuáles necesito": 4,
  "No tengo ninguno": 2,
};

const DOMINIOS_DESECHABLES = [
  "mailinator.com",
  "tempmail.com",
  "10minutemail.com",
  "guerrillamail.com",
  "yopmail.com",
  "trashmail.com",
  "sharklasers.com",
  "getnada.com",
  "temp-mail.org",
];

export const correoValido = (v: string) => /^[^\s@]+@[^\s@]+\.[a-z]{2,}$/i.test(v.trim());

export const whatsappValido = (v: string) => /^3\d{9}$/.test(v.replace(/\D/g, ""));

export const correoDesechable = (v: string) => {
  const dominio = v.trim().toLowerCase().split("@")[1] ?? "";
  return DOMINIOS_DESECHABLES.includes(dominio);
};

export type Tier = "A" | "B" | "C" | "D";

export function puntuarCaso(caso: Caso): { puntaje: number; tier: Tier } {
  let puntaje = 0;
  puntaje += PUNTOS_URGENCIA[caso.urgencia] ?? 0;
  puntaje += PUNTOS_ESTADO[caso.estado] ?? 0;
  puntaje += PUNTOS_VALOR[caso.valor] ?? 11;
  puntaje += PUNTOS_DOCUMENTOS[caso.documentos] ?? 0;

  if (caso.descripcion.trim().length > 150) puntaje += 5;
  if (whatsappValido(caso.whatsapp)) puntaje += 3;
  if (correoValido(caso.correo) && !correoDesechable(caso.correo)) puntaje += 2;

  const tier: Tier = puntaje >= 70 ? "A" : puntaje >= 45 ? "B" : puntaje >= 20 ? "C" : "D";
  return { puntaje, tier };
}

/* ---------- Borrador en localStorage ---------- */

const CLAVE = "ajc_caso_borrador";
const SIETE_DIAS = 7 * 24 * 60 * 60 * 1000;

export type Borrador = { caso: Caso; paso: number; guardado: number };

export function guardarBorrador(caso: Caso, paso: number) {
  try {
    const datos: Borrador = { caso, paso, guardado: Date.now() };
    localStorage.setItem(CLAVE, JSON.stringify(datos));
  } catch {
    /* almacenamiento no disponible */
  }
}

export function leerBorrador(): Borrador | null {
  try {
    const bruto = localStorage.getItem(CLAVE);
    if (!bruto) return null;
    const datos = JSON.parse(bruto) as Borrador;
    if (!datos?.caso || Date.now() - datos.guardado > SIETE_DIAS) {
      localStorage.removeItem(CLAVE);
      return null;
    }
    return { ...datos, caso: { ...CASO_VACIO, ...datos.caso } };
  } catch {
    return null;
  }
}

export function borrarBorrador() {
  try {
    localStorage.removeItem(CLAVE);
  } catch {
    /* nada */
  }
}

/* ---------- Atribución ---------- */

export type Atribucion = {
  utm_source: string;
  utm_medium: string;
  utm_campaign: string;
  gclid: string;
  pagina_origen: string;
  referrer: string;
  ip: string;
  autorizacion_timestamp: string;
};

export function capturarAtribucion(): Atribucion {
  const params = new URLSearchParams(window.location.search);
  return {
    utm_source: params.get("utm_source") ?? "",
    utm_medium: params.get("utm_medium") ?? "",
    utm_campaign: params.get("utm_campaign") ?? "",
    gclid: params.get("gclid") ?? "",
    pagina_origen: window.location.href,
    referrer: document.referrer,
    ip: "",
    autorizacion_timestamp: new Date().toISOString(),
  };
}

/** Best-effort: la IP real se resuelve en el servidor al integrar el envío. */
export async function resolverIp(): Promise<string> {
  try {
    const r = await fetch("https://api.ipify.org?format=json");
    const j = (await r.json()) as { ip?: string };
    return j.ip ?? "";
  } catch {
    return "";
  }
}

export function generarRadicado(): string {
  const n = Math.floor(10000 + Math.random() * 89999);
  return `AJC-2026-${n}`;
}
