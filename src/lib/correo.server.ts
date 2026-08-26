/**
 * Envío de correo por Resend a través de la pasarela de conectores.
 * Sin base de datos: el correo es el único registro del caso y de la
 * autorización de habeas data.
 */

import type { Caso } from "./caso";
import type { Postulacion } from "./postulacion";
import { correoPostulacion, asuntoPostulacion } from "./postulacion";
import { departamentoDe } from "./cobertura";

const GATEWAY = "https://connector-gateway.lovable.dev/resend";

/** Bandeja interna de MARDIGITAL. */
export const CORREO_INTERNO = "mardigitalcali@gmail.com";

function remitente(): string {
  return process.env["CORREO_REMITENTE"] ?? "Asesorías Jurídicas <onboarding@resend.dev>";
}

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

export async function enviarCorreo(opciones: { to: string; subject: string; text: string }) {
  const lovable = process.env["LOVABLE_API_KEY"];
  const resend = process.env["RESEND_API_KEY"];
  if (!lovable || !resend) throw new Error("Falta configurar el servicio de correo.");

  const r = await fetch(`${GATEWAY}/emails`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${lovable}`,
      "X-Connection-Api-Key": resend,
    },
    body: JSON.stringify({
      from: remitente(),
      to: [opciones.to],
      subject: opciones.subject,
      text: opciones.text,
    }),
  });

  if (!r.ok) {
    const cuerpo = await r.text();
    console.error(`[correo] fallo ${r.status}: ${cuerpo}`);
    throw new Error(`El servicio de correo respondió ${r.status}.`);
  }
}

/* ── Formato de texto plano monoespaciado ─────────────────────────── */

const fila = (etiqueta: string, valor: string) => `${etiqueta.padEnd(18)}${valor || "—"}`;
const linea = (titulo: string) => `─── ${titulo} ${"─".repeat(Math.max(0, 34 - titulo.length))}`;

function fechaCo(iso: string): string {
  return new Date(iso).toLocaleString("es-CO", { timeZone: "America/Bogota" });
}

function enlaceWa(numero: string): string {
  const solo = numero.replace(/\D/g, "");
  return solo ? `https://wa.me/57${solo}` : "—";
}

export function asuntoInterno(caso: Caso, tier: string, puntaje: number, radicado: string) {
  return `[TIER ${tier} · ${puntaje}] ${caso.area} · ${caso.ciudad} · ${radicado}`;
}

export function cuerpoInterno(args: {
  caso: Caso;
  radicado: string;
  puntaje: number;
  tier: string;
  atribucion: Atribucion;
  recibido: string;
}): string {
  const { caso, radicado, puntaje, tier, atribucion, recibido } = args;
  const sello = fechaCo(atribucion.autorizacion_timestamp || recibido);

  return [
    `CASO NUEVO — ${radicado}`,
    `Recibido: ${fechaCo(recibido)}`,
    `Puntaje: ${puntaje} / 100  ·  Tier ${tier}`,
    "",
    linea("CASO"),
    fila("Área", caso.area),
    fila("Ciudad", `${caso.ciudad}, ${departamentoDe(caso.ciudad) || "—"}`),
    fila("Estado", caso.estado),
    fila("Urgencia", caso.urgencia),
    fila("Valor estimado", caso.valor),
    fila("Documentos", caso.documentos),
    "",
    linea("DESCRIPCIÓN"),
    caso.descripcion.trim(),
    "",
    linea("CONTACTO"),
    fila("Nombre", caso.nombre),
    fila("Correo", caso.correo),
    fila("WhatsApp", caso.whatsapp),
    `${" ".repeat(18)}→ ${enlaceWa(caso.whatsapp)}`,
    "",
    linea("ORIGEN"),
    fila("Página", atribucion.pagina_origen),
    fila(
      "Campaña",
      `${atribucion.utm_source || "directo"} / ${atribucion.utm_medium || "—"} / ${atribucion.utm_campaign || "—"}`,
    ),
    fila("Referente", atribucion.referrer),
    fila("gclid", atribucion.gclid),
    "",
    linea("AUTORIZACIÓN DE DATOS"),
    fila("Tratamiento", `${caso.autorizaDatos ? "SÍ" : "NO"} · ${sello}`),
    fila("Transmisión", `${caso.autorizaTransmision ? "SÍ" : "NO"} · ${sello}`),
    fila("IP", atribucion.ip),
    "",
    "Registro único de la autorización de habeas data (Ley 1581 de 2012).",
  ].join("\n");
}

export function cuerpoUsuario(caso: Caso, radicado: string): string {
  return [
    `Hola ${caso.nombre.split(" ")[0] ?? ""},`.trim(),
    "",
    `Recibimos tu caso. Tu radicado es ${radicado}.`,
    "",
    "QUÉ SIGUE AHORA",
    "1. Leemos tu caso y confirmamos qué especialista necesitas.",
    "2. Buscamos un abogado con tarjeta profesional verificada en tu ciudad.",
    "3. Te contactamos en menos de 24 horas hábiles por WhatsApp o correo.",
    "",
    "Los honorarios los acuerdas directamente con tu abogado. Asesorías Jurídicas",
    "Colombia no te cobra nada.",
    "",
    `Área: ${caso.area}`,
    `Ciudad: ${caso.ciudad}`,
    "",
    "Si necesitas agregar algo a tu caso, responde este correo citando el radicado.",
    "",
    "Asesorías Jurídicas Colombia",
    "https://asesoriasjuridicas.com",
  ].join("\n");
}

export function asuntoUsuario(radicado: string) {
  return `Recibimos tu caso — ${radicado}`;
}

export function correoDePostulacion(p: Postulacion, radicado: string) {
  return {
    subject: `[ABOGADO] ${p.nombre.trim()} · ${p.ciudad} · ${p.areas.join(", ")}`,
    text: correoPostulacion(p, radicado),
    asuntoAlterno: asuntoPostulacion(p, radicado),
  };
}
