/** Datos de contacto usados como alternativa cuando falla el envío por correo. */

import { RESPONSABLE } from "./legal";

/** Celular de soporte. Configurable sin tocar código: VITE_WHATSAPP. */
export const WHATSAPP_SOPORTE =
  (import.meta.env["VITE_WHATSAPP"] as string | undefined) ?? RESPONSABLE.whatsapp;

export const CORREO_SOPORTE = RESPONSABLE.correo;

/** Enlace wa.me con el número cargado. Vacío si el número aún está pendiente. */
export function enlaceWhatsapp(mensaje?: string): string {
  const solo = WHATSAPP_SOPORTE.replace(/\D/g, "");
  if (solo.length < 10) return "";
  const texto = mensaje ? `?text=${encodeURIComponent(mensaje)}` : "";
  return `https://wa.me/57${solo}${texto}`;
}
