/**
 * Postulación de abogados a la red (/unete).
 *
 * El correo a MARDIGITAL es el único registro: no hay base de datos.
 * Las condiciones económicas quedan como {PENDIENTE} hasta que se definan.
 */

import { COMPETENCIAS } from "@/lib/abogados";

export const AREAS_POSTULACION = [
  "Laboral",
  "Riesgos laborales y ARL",
  "Familia",
  "Pensiones",
  "Tránsito",
  "Civil",
  "Inmobiliario",
  "Insolvencia",
  "Comercial",
  "Propiedad intelectual",
  "Administrativo",
  "Penal",
  "Migratorio",
] as const;

export const COMPETENCIAS_POSTULACION = COMPETENCIAS;

export const CAPACIDAD_MENSUAL = [
  "1 a 3 casos nuevos al mes",
  "4 a 8 casos nuevos al mes",
  "9 a 15 casos nuevos al mes",
  "Más de 15 casos nuevos al mes",
] as const;

export type Postulacion = {
  nombre: string;
  tarjeta: string;
  correo: string;
  whatsapp: string;
  ciudad: string;
  areas: string[];
  competencias: string[];
  anios: string;
  universidad: string;
  especializaciones: string;
  enlace: string;
  capacidad: string;
  autoriza: boolean;
};

export const POSTULACION_VACIA: Postulacion = {
  nombre: "",
  tarjeta: "",
  correo: "",
  whatsapp: "",
  ciudad: "",
  areas: [],
  competencias: [],
  anios: "",
  universidad: "",
  especializaciones: "",
  enlace: "",
  capacidad: "",
  autoriza: false,
};

export type CampoPostulacion = keyof Postulacion;
export type ErroresPostulacion = Partial<Record<CampoPostulacion, string>>;

const correoValido = (v: string) => /^[^\s@]+@[^\s@]+\.[a-z]{2,}$/i.test(v.trim());
const whatsappValido = (v: string) => /^3\d{9}$/.test(v.replace(/\D/g, ""));

export function validarPostulacion(p: Postulacion): ErroresPostulacion {
  const e: ErroresPostulacion = {};
  if (p.nombre.trim().length < 5) e.nombre = "Escribe tu nombre completo.";
  if (p.nombre.trim().length > 120) e.nombre = "Máximo 120 caracteres.";
  if (p.tarjeta.replace(/\D/g, "").length < 5)
    e.tarjeta = "Número de tarjeta profesional, solo dígitos.";
  if (!correoValido(p.correo)) e.correo = "Correo no válido.";
  if (!whatsappValido(p.whatsapp)) e.whatsapp = "Celular colombiano de 10 dígitos (3XXXXXXXXX).";
  if (!p.ciudad) e.ciudad = "Selecciona tu ciudad principal.";
  if (p.areas.length === 0) e.areas = "Selecciona al menos un área de práctica.";
  if (p.competencias.length === 0) e.competencias = "Selecciona al menos una competencia procesal.";
  const anios = Number(p.anios);
  if (!p.anios || Number.isNaN(anios) || anios < 0 || anios > 60)
    e.anios = "Años de ejercicio entre 0 y 60.";
  if (p.universidad.trim().length < 3) e.universidad = "Universidad donde te graduaste.";
  if (p.especializaciones.trim().length > 500) e.especializaciones = "Máximo 500 caracteres.";
  if (p.enlace.trim() && !/^https?:\/\/\S+\.\S+/i.test(p.enlace.trim()))
    e.enlace = "Debe empezar por https:// y ser una URL válida.";
  if (!p.capacidad) e.capacidad = "Indica cuántos casos podrías atender.";
  if (!p.autoriza) e.autoriza = "Necesitamos tu autorización para tratar tus datos.";
  return e;
}

export function radicadoPostulacion(): string {
  const n = Math.floor(Math.random() * 90000) + 10000;
  return `AJC-RED-${n}`;
}

/** Cuerpo del correo a MARDIGITAL, texto plano monoespaciado. */
export function correoPostulacion(p: Postulacion, radicado: string, fecha = new Date()): string {
  const l = (etiqueta: string, valor: string) => `${etiqueta.padEnd(22, ".")} ${valor}`;
  return [
    "=========================================",
    " POSTULACIÓN A LA RED DE ABOGADOS",
    "=========================================",
    l("RADICADO", radicado),
    l("FECHA", fecha.toISOString()),
    "",
    "-- IDENTIFICACIÓN ----------------------",
    l("Nombre", p.nombre.trim()),
    l("T.P.", p.tarjeta.trim()),
    l("Correo", p.correo.trim()),
    l("WhatsApp", p.whatsapp.replace(/\D/g, "")),
    l("Ciudad principal", p.ciudad),
    "",
    "-- PRÁCTICA -----------------------------",
    l("Áreas", p.areas.join(", ")),
    l("Competencias", p.competencias.join(", ")),
    l("Años de ejercicio", p.anios),
    l("Universidad", p.universidad.trim()),
    l("Especializaciones", p.especializaciones.trim() || "—"),
    l("Enlace", p.enlace.trim() || "—"),
    l("Capacidad mensual", p.capacidad),
    "",
    "-- AUTORIZACIÓN -------------------------",
    l("Ley 1581 de 2012", p.autoriza ? "SÍ" : "NO"),
    "",
    "Verificar T.P. ante el Consejo Superior de la Judicatura",
    "antes de crear la ficha pública.",
    "=========================================",
  ].join("\n");
}

export const asuntoPostulacion = (p: Postulacion, radicado: string) =>
  `[RED] ${p.nombre.trim()} · ${p.areas[0] ?? "Sin área"} · ${p.ciudad} · ${radicado}`;
