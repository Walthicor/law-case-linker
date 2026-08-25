import { ShieldCheck, Clock, Lock, Scale } from "lucide-react";

const SELLOS = [
  {
    Icono: ShieldCheck,
    titulo: "Tarjeta profesional verificada",
    detalle: "Confirmamos cada registro ante el Consejo Superior de la Judicatura",
  },
  {
    Icono: Clock,
    titulo: "Respuesta en 24 horas hábiles",
    detalle: "Un abogado te contacta directamente",
  },
  {
    Icono: Lock,
    titulo: "Tu caso es confidencial",
    detalle: "Solo lo ve el abogado que se te asigna",
  },
  {
    Icono: Scale,
    titulo: "Sin costo para ti",
    detalle: "Los honorarios los pactas directamente con tu abogado",
  },
];

export function SellosConfianza() {
  return (
    <ul className="grid gap-x-8 gap-y-6 sm:grid-cols-2">
      {SELLOS.map(({ Icono, titulo, detalle }) => (
        <li key={titulo} className="flex gap-3">
          <Icono className="mt-0.5 h-5 w-5 shrink-0 text-esmeralda-lum" aria-hidden="true" />
          <div>
            <p className="text-sm font-semibold text-papel">{titulo}</p>
            <p className="mt-1 text-[0.8125rem] leading-relaxed text-papel/65">{detalle}</p>
          </div>
        </li>
      ))}
    </ul>
  );
}
