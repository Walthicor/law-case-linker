/** Lógica de servidor del envío: radicado, re-puntuación y correos. */

import { puntuarCaso, type Caso } from "./caso";
import type { Postulacion } from "./postulacion";
import { radicadoPostulacion } from "./postulacion";
import {
  CORREO_INTERNO,
  asuntoInterno,
  asuntoUsuario,
  correoDePostulacion,
  cuerpoInterno,
  cuerpoUsuario,
  enviarCorreo,
  type Atribucion,
} from "./correo.server";

/** AJC-{año}-{5 dígitos}. Se genera en el servidor, nunca en el cliente. */
export function generarRadicadoServidor(): string {
  const anio = new Date().getFullYear();
  const n = Math.floor(10000 + Math.random() * 90000);
  return `AJC-${anio}-${n}`;
}

export async function procesarCaso(caso: Caso, atribucion: Atribucion) {
  const radicado = generarRadicadoServidor();
  // El puntaje del cliente no se acepta: se recalcula aquí.
  const { puntaje, tier } = puntuarCaso(caso);
  const recibido = new Date().toISOString();
  const marca = atribucion.autorizacion_timestamp || recibido;

  await enviarCorreo({
    to: CORREO_INTERNO,
    subject: asuntoInterno(caso, tier, puntaje, radicado),
    text: cuerpoInterno({
      caso,
      radicado,
      puntaje,
      tier,
      atribucion: { ...atribucion, autorizacion_timestamp: marca },
      recibido,
    }),
  });

  // El correo interno es el registro obligatorio; el de cortesía no debe
  // tumbar el flujo si el proveedor lo rechaza.
  try {
    await enviarCorreo({
      to: caso.correo,
      subject: asuntoUsuario(radicado),
      text: cuerpoUsuario(caso, radicado),
    });
  } catch (error) {
    console.error("[correo] confirmación al usuario no enviada", error);
  }

  return { radicado, puntaje, tier };
}

export async function procesarPostulacion(p: Postulacion) {
  const radicado = radicadoPostulacion();
  const { subject, text } = correoDePostulacion(p, radicado);
  await enviarCorreo({ to: CORREO_INTERNO, subject, text });
  return { radicado };
}
