import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import {
  procesarCaso,
  procesarConsultoria,
  procesarContacto,
  procesarPostulacion,
} from "./envio.server";

const esquemaCaso = z.object({
  caso: z.object({
    area: z.string().min(1).max(80),
    ciudad: z.string().min(1).max(80),
    estado: z.string().max(120),
    descripcion: z.string().min(1).max(5000),
    urgencia: z.string().max(120),
    documentos: z.string().max(120),
    nombre: z.string().min(3).max(120),
    correo: z.string().email().max(160),
    whatsapp: z.string().max(30),
    valor: z.string().max(80),
    autorizaDatos: z.literal(true),
    autorizaTransmision: z.boolean(),
  }),
  atribucion: z.object({
    utm_source: z.string().max(200).default(""),
    utm_medium: z.string().max(200).default(""),
    utm_campaign: z.string().max(200).default(""),
    gclid: z.string().max(200).default(""),
    pagina_origen: z.string().max(500).default(""),
    referrer: z.string().max(500).default(""),
    ip: z.string().max(60).default(""),
    autorizacion_timestamp: z.string().max(40).default(""),
  }),
});

const esquemaPostulacion = z.object({
  nombre: z.string().min(5).max(120),
  tarjeta: z.string().min(3).max(40),
  correo: z.string().email().max(160),
  whatsapp: z.string().max(30),
  ciudad: z.string().min(1).max(80),
  areas: z.array(z.string().max(80)).min(1).max(20),
  competencias: z.array(z.string().max(80)).min(1).max(20),
  anios: z.string().max(4),
  universidad: z.string().min(3).max(160),
  especializaciones: z.string().max(500).default(""),
  enlace: z.string().max(300).default(""),
  capacidad: z.string().max(80),
  autoriza: z.literal(true),
});

export const enviarCaso = createServerFn({ method: "POST" })
  .inputValidator((data: unknown) => esquemaCaso.parse(data))
  .handler(async ({ data }) => procesarCaso(data.caso, data.atribucion));

export const enviarPostulacion = createServerFn({ method: "POST" })
  .inputValidator((data: unknown) => esquemaPostulacion.parse(data))
  .handler(async ({ data }) => procesarPostulacion(data));

const esquemaContacto = z.object({
  nombre: z.string().trim().min(2).max(120),
  correo: z.string().trim().email().max(160),
  motivo: z.enum(["general", "abogados", "datos", "prensa", "otro"]),
  mensaje: z.string().trim().min(5).max(3000),
});

export const enviarContacto = createServerFn({ method: "POST" })
  .inputValidator((data: unknown) => esquemaContacto.parse(data))
  .handler(async ({ data }) => procesarContacto(data));

const esquemaConsultoria = z.object({
  nombre: z.string().trim().min(3).max(120),
  organizacion: z.string().trim().max(160).default(""),
  cargo: z.string().trim().max(120).default(""),
  tipo: z.string().trim().min(1).max(80),
  servicio: z.string().trim().min(1).max(120),
  ubicacion: z.string().trim().min(2).max(120),
  correo: z.string().trim().email().max(160),
  whatsapp: z.string().trim().min(7).max(30),
  mensaje: z.string().trim().min(10).max(4000),
  autorizaDatos: z.literal(true),
  utm_source: z.string().max(200).default(""),
  utm_medium: z.string().max(200).default(""),
  utm_campaign: z.string().max(200).default(""),
  gclid: z.string().max(200).default(""),
  pagina_origen: z.string().max(500).default(""),
  referrer: z.string().max(500).default(""),
});

export type SolicitudConsultoria = z.infer<typeof esquemaConsultoria>;

export const enviarConsultoria = createServerFn({ method: "POST" })
  .inputValidator((data: unknown) => esquemaConsultoria.parse(data))
  .handler(async ({ data }) => procesarConsultoria(data));
