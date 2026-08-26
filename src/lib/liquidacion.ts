/**
 * Cálculo de liquidación laboral según las fórmulas generales del
 * Código Sustantivo del Trabajo (base 360 días).
 *
 * // Actualizar cada 1 de enero.
 */
export const SMLMV = 1_623_500; // Salario mínimo legal mensual vigente 2026 // Actualizar cada 1 de enero.
export const AUXILIO_TRANSPORTE = 200_000; // Auxilio de transporte 2026 // Actualizar cada 1 de enero.

export type TipoTerminacion =
  | "Renuncia voluntaria"
  | "Despido con justa causa"
  | "Despido SIN justa causa"
  | "Terminación de contrato a término fijo"
  | "Mutuo acuerdo";

export type TipoContrato = "Término indefinido" | "Término fijo" | "Obra o labor";

export type EntradaLiquidacion = {
  salarioMensual: number;
  auxilioTransporte: boolean;
  fechaInicio: string;
  fechaFin: string;
  diasVacacionesDisfrutados: number;
  terminacion: TipoTerminacion;
  contrato: TipoContrato;
  /** Solo término fijo: fecha en que vencía el contrato. */
  fechaVencimiento?: string;
};

export type ResultadoLiquidacion = {
  salarioBase: number;
  diasTrabajados: number;
  diasSemestre: number;
  cesantias: number;
  interesesCesantias: number;
  prima: number;
  vacaciones: number;
  indemnizacion: number;
  total: number;
};

/** Días calendario entre dos fechas (base 360 para las fórmulas). */
export function diasEntre(inicio: string, fin: string): number {
  const a = new Date(`${inicio}T00:00:00`);
  const b = new Date(`${fin}T00:00:00`);
  const ms = b.getTime() - a.getTime();
  if (!Number.isFinite(ms) || ms < 0) return 0;
  return Math.round(ms / 86_400_000);
}

/** Días trabajados dentro del semestre en que terminó el contrato (prima). */
function diasEnSemestre(inicio: string, fin: string): number {
  const f = new Date(`${fin}T00:00:00`);
  if (Number.isNaN(f.getTime())) return 0;
  const primerSemestre = f.getMonth() < 6;
  const inicioSemestre = new Date(f.getFullYear(), primerSemestre ? 0 : 6, 1);
  const i = new Date(`${inicio}T00:00:00`);
  const desde = i > inicioSemestre ? i : inicioSemestre;
  const ms = f.getTime() - desde.getTime();
  if (!Number.isFinite(ms) || ms < 0) return 0;
  return Math.round(ms / 86_400_000);
}

function indemnizacionPorDespido(e: EntradaLiquidacion, dias: number): number {
  if (e.terminacion !== "Despido SIN justa causa") return 0;
  const salarioDia = e.salarioMensual / 30;

  // Término fijo u obra o labor: salarios del tiempo que faltaba (mínimo 15 días).
  if (e.contrato !== "Término indefinido") {
    if (!e.fechaVencimiento) return 0;
    const faltantes = diasEntre(e.fechaFin, e.fechaVencimiento);
    return Math.max(faltantes, 15) * salarioDia;
  }

  // Término indefinido (CST art. 64).
  const anios = dias / 360;
  const menorA10 = e.salarioMensual < SMLMV * 10;
  const base = menorA10 ? 30 : 20;
  const adicional = menorA10 ? 20 : 15;
  if (anios <= 1) {
    // Proporcional en el primer año, con el mínimo legal de 30 (o 20) días.
    return base * salarioDia;
  }
  const diasIndemnizacion = base + adicional * (anios - 1);
  return diasIndemnizacion * salarioDia;
}

export function calcularLiquidacion(e: EntradaLiquidacion): ResultadoLiquidacion {
  const salarioBase = e.salarioMensual + (e.auxilioTransporte ? AUXILIO_TRANSPORTE : 0);
  const diasTrabajados = diasEntre(e.fechaInicio, e.fechaFin);
  const diasSemestre = diasEnSemestre(e.fechaInicio, e.fechaFin);

  const cesantias = (salarioBase * diasTrabajados) / 360;
  const interesesCesantias = (cesantias * diasTrabajados * 0.12) / 360;
  const prima = (salarioBase * diasSemestre) / 360;

  const vacacionesCausadas = (e.salarioMensual * diasTrabajados) / 720;
  const valorDiaVacaciones = e.salarioMensual / 30;
  const vacaciones = Math.max(
    vacacionesCausadas - e.diasVacacionesDisfrutados * valorDiaVacaciones,
    0,
  );

  const indemnizacion = indemnizacionPorDespido(e, diasTrabajados);

  return {
    salarioBase,
    diasTrabajados,
    diasSemestre,
    cesantias,
    interesesCesantias,
    prima,
    vacaciones,
    indemnizacion,
    total: cesantias + interesesCesantias + prima + vacaciones + indemnizacion,
  };
}

const PESOS = new Intl.NumberFormat("es-CO", {
  style: "currency",
  currency: "COP",
  maximumFractionDigits: 0,
});

export function pesos(valor: number): string {
  return PESOS.format(Math.round(valor)).replace(/\u00a0/g, " ");
}

export function miles(valor: number): string {
  return new Intl.NumberFormat("es-CO", { maximumFractionDigits: 0 }).format(valor);
}

/** Rango de valor del caso para preseleccionar en /iniciar-caso. */
export function rangoValor(total: number): string {
  if (total < 10_000_000) return "Menos de $10 millones";
  if (total < 50_000_000) return "Entre $10 y $50 millones";
  if (total < 300_000_000) return "Entre $50 y $300 millones";
  return "Más de $300 millones";
}
