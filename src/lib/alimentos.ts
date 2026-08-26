/**
 * Estimación orientativa de cuota alimentaria.
 *
 * IMPORTANTE: en Colombia no existe un porcentaje legal fijo. El juez fija la
 * cuota según la capacidad económica del alimentante y las necesidades del
 * menor (Ley 1098 de 2006, art. 24 y ss.). Este módulo solo produce un rango
 * de referencia a partir de criterios usados habitualmente en la práctica.
 *
 * // VERIFICAR CON ABOGADO
 * // Actualizar cada 1 de enero.
 */
export const SMLMV_ALIMENTOS = 1_623_500; // SMLMV 2026 // Actualizar cada 1 de enero.

/** Tope legal de embargo del salario para alimentos: 50%. */
export const TOPE_EMBARGO = 0.5;

export type Beneficiario = {
  /** Edad del hijo beneficiario, en años. */
  edad: number;
};

export type EntradaAlimentos = {
  /** Ingresos mensuales del alimentante (líquidos o declarados). */
  ingresos: number;
  /** Otros hijos a cargo que no son beneficiarios de esta cuota. */
  otrosHijos: number;
  /** Hijos beneficiarios de la cuota que se estima. */
  beneficiarios: Beneficiario[];
  /** Gastos mensuales acreditables del o los menores. */
  gastos: {
    educacion: number;
    salud: number;
    alimentacion: number;
    vivienda: number;
    transporte: number;
  };
  /** Otras obligaciones alimentarias mensuales ya fijadas (cuotas vigentes). */
  otrasObligaciones: number;
};

export type ResultadoAlimentos = {
  /** Suma de gastos acreditados del o los menores. */
  gastosTotales: number;
  /** Parte de esos gastos que proporcionalmente corresponde al alimentante. */
  aporteProporcional: number;
  /** Proporción de participación del alimentante en el sostenimiento (0-1). */
  proporcion: number;
  /** Capacidad económica disponible después de otras obligaciones. */
  capacidad: number;
  minimo: number;
  sugerido: number;
  maximo: number;
  /** Tope del 50% del ingreso, referencia de embargo. */
  tope: number;
  /** Factor por edad aplicado (los adolescentes cuestan más). */
  factorEdad: number;
  /** true si el sugerido quedó limitado por la capacidad del alimentante. */
  limitadoPorCapacidad: boolean;
};

function factorPorEdad(beneficiarios: Beneficiario[]): number {
  if (beneficiarios.length === 0) return 1;
  const suma = beneficiarios.reduce((acc, b) => {
    if (b.edad <= 5) return acc + 0.9;
    if (b.edad <= 11) return acc + 1;
    if (b.edad <= 17) return acc + 1.15;
    return acc + 1.1; // mayor de edad estudiando
  }, 0);
  return suma / beneficiarios.length;
}

export function calcularAlimentos(e: EntradaAlimentos): ResultadoAlimentos {
  const gastosTotales =
    e.gastos.educacion +
    e.gastos.salud +
    e.gastos.alimentacion +
    e.gastos.vivienda +
    e.gastos.transporte;

  const factorEdad = factorPorEdad(e.beneficiarios);
  const numBeneficiarios = Math.max(e.beneficiarios.length, 1);

  // Personas a cargo del alimentante: beneficiarios + otros hijos.
  const personasACargo = numBeneficiarios + Math.max(e.otrosHijos, 0);

  // Participación del alimentante: por defecto se reparte el sostenimiento
  // entre los dos progenitores (50%), reducido si tiene otros hijos a cargo.
  const proporcion = 0.5 * (numBeneficiarios / personasACargo);

  const aporteProporcional = gastosTotales * proporcion * factorEdad;

  const capacidad = Math.max(e.ingresos - Math.max(e.otrasObligaciones, 0), 0);
  const tope = e.ingresos * TOPE_EMBARGO;

  // Referencia por capacidad: rangos usados con frecuencia en la práctica
  // judicial cuando no hay gastos plenamente acreditados.
  const porCapacidadMin = capacidad * 0.15 * (numBeneficiarios / personasACargo);
  const porCapacidadMax = capacidad * 0.35 * (numBeneficiarios / personasACargo);

  let minimo = Math.max(Math.min(aporteProporcional * 0.75, porCapacidadMax), porCapacidadMin * 0.8);
  let sugerido = (aporteProporcional + (porCapacidadMin + porCapacidadMax) / 2) / 2;
  let maximo = Math.max(aporteProporcional * 1.25, porCapacidadMax);

  // Ningún valor puede superar el 50% del ingreso del alimentante.
  const limitadoPorCapacidad = sugerido > tope;
  minimo = Math.min(minimo, tope);
  sugerido = Math.min(sugerido, tope);
  maximo = Math.min(maximo, tope);

  // Ordenar por seguridad y redondear a miles.
  const orden = [minimo, sugerido, maximo].sort((a, b) => a - b).map(redondearMiles);

  return {
    gastosTotales,
    aporteProporcional,
    proporcion,
    capacidad,
    minimo: orden[0] ?? 0,
    sugerido: orden[1] ?? 0,
    maximo: orden[2] ?? 0,
    tope,
    factorEdad,
    limitadoPorCapacidad,
  };
}

function redondearMiles(v: number): number {
  return Math.round(v / 1000) * 1000;
}
