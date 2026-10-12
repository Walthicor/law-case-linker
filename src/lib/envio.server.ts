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
