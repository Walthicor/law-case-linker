/** Lógica de servidor del envío: radicado, re-puntuación y correos. */

import { puntuarCaso, type Caso } from "./caso";
import type { Postulacion } from "./postulacion";
import { radicadoPostulacion } from "./postulacion";
import {
  asuntoInterno,
  correoDePostulacion,
  cuerpoInterno,
  cuerpoUsuario,
  type Atribucion,
} from "./correo.server";
import { sendTemplateEmail } from "./email-templates/send-email";

/** AJC-{año}-{5 dígitos}. Se genera en el servidor, nunca en el cliente. */
export function generarRadicadoServidor(): string {
  const anio = new Date().getFullYear();
  const n = Math.floor(10000 + Math.random() * 90000);
  return `AJC-${anio}-${n}`;
}

async function avisoInterno(asunto: string, cuerpo: string, clave: string, replyTo?: string) {
  await sendTemplateEmail("aviso-interno", "mardigitalcali@gmail.com", {
    templateData: { asunto, cuerpo },
    idempotencyKey: `aviso-interno-${clave}`,
    ...(replyTo ? { replyTo } : {}),
  });
}

export async function procesarCaso(caso: Caso, atribucion: Atribucion) {
  const radicado = generarRadicadoServidor();
  const { puntaje, tier } = puntuarCaso(caso);
  const recibido = new Date().toISOString();
  const marca = atribucion.autorizacion_timestamp || recibido;

  await avisoInterno(
    asuntoInterno(caso, tier, puntaje, radicado),
    cuerpoInterno({
      caso,
      radicado,
      puntaje,
      tier,
      atribucion: { ...atribucion, autorizacion_timestamp: marca },
      recibido,
    }),
    radicado,
    caso.correo,
  );

  try {
    await sendTemplateEmail("confirmacion-caso", caso.correo, {
      templateData: { radicado, cuerpo: cuerpoUsuario(caso, radicado) },
      idempotencyKey: `confirmacion-caso-${radicado}`,
    });
  } catch (error) {
    console.error("[correo] confirmación al usuario no enviada", error);
  }

  return { radicado, puntaje, tier };
}

export async function procesarPostulacion(p: Postulacion) {
  const radicado = radicadoPostulacion();
  const { subject, text } = correoDePostulacion(p, radicado);
  await avisoInterno(subject, text, radicado, p.correo);
  return { radicado };
}

export async function procesarContacto(m: {
  nombre: string;
  correo: string;
  motivo: string;
  mensaje: string;
}) {
  const id = `AJC-MSG-${Date.now()}`;
  const cuerpo = [
    `MENSAJE DE CONTACTO — ${id}`,
    `Fecha: ${new Date().toLocaleString("es-CO", { timeZone: "America/Bogota" })}`,
    "",
    `Nombre:  ${m.nombre}`,
    `Correo:  ${m.correo}`,
    `Motivo:  ${m.motivo}`,
    "",
    m.mensaje.trim(),
  ].join("\n");
  await avisoInterno(`[CONTACTO] ${m.motivo} · ${m.nombre}`, cuerpo, id, m.correo);
  return { ok: true };
}

/** Solicitudes de la página /consultoria-en-seguridad. Llegan a la bandeja interna. */
export async function procesarConsultoria(s: {
  nombre: string;
  organizacion: string;
  cargo: string;
  tipo: string;
  servicio: string;
  ubicacion: string;
  correo: string;
  whatsapp: string;
  mensaje: string;
  autorizaDatos: boolean;
  utm_source: string;
  utm_medium: string;
  utm_campaign: string;
  gclid: string;
  pagina_origen: string;
  referrer: string;
}) {
  const anio = new Date().getFullYear();
  const radicado = `AJC-SEG-${anio}-${Math.floor(10000 + Math.random() * 90000)}`;
  const fecha = new Date().toLocaleString("es-CO", { timeZone: "America/Bogota" });
  const fila = (e: string, v: string) => `${e.padEnd(18)}${v || "—"}`;
  const solo = s.whatsapp.replace(/\D/g, "");
  const wa = solo ? `https://wa.me/${solo.length === 10 ? `57${solo}` : solo}` : "—";

  const cuerpo = [
    `SOLICITUD DE CONSULTORÍA EN SEGURIDAD — ${radicado}`,
    `Recibida: ${fecha}`,
    "",
    "─── SOLICITANTE ─────────────────────",
    fila("Nombre", s.nombre),
    fila("Organización", s.organizacion),
    fila("Cargo", s.cargo),
    fila("Tipo de cliente", s.tipo),
    fila("Ubicación", s.ubicacion),
    fila("Correo", s.correo),
    fila("WhatsApp", s.whatsapp),
    `${" ".repeat(18)}→ ${wa}`,
    "",
    "─── NECESIDAD ───────────────────────",
    fila("Servicio", s.servicio),
    "",
    s.mensaje.trim(),
    "",
    "─── ORIGEN ──────────────────────────",
    fila("Página", s.pagina_origen),
    fila(
      "Campaña",
      `${s.utm_source || "directo"} / ${s.utm_medium || "—"} / ${s.utm_campaign || "—"}`,
    ),
    fila("Referente", s.referrer),
    fila("gclid", s.gclid),
    "",
    fila("Autoriza datos", `${s.autorizaDatos ? "SÍ" : "NO"} · ${fecha}`),
    "Registro de la autorización de tratamiento de datos (Ley 1581 de 2012).",
  ].join("\n");

  const quien = s.organizacion ? `${s.organizacion} · ${s.nombre}` : s.nombre;
  await avisoInterno(
    `[SEGURIDAD] ${s.servicio} · ${quien} · ${s.ubicacion}`,
    cuerpo,
    radicado,
    s.correo,
  );
  return { radicado };
}
