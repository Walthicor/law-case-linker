import { Link } from "@tanstack/react-router";
import { Calculator, FileSignature, ShieldCheck, HeartHandshake, Home } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Revelar } from "@/components/sitio/Revelar";

const HERRAMIENTAS: { titulo: string; texto: string; Icono: LucideIcon }[] = [
  {
    titulo: "Calculadora de liquidación laboral",
    texto:
      "Calcula cesantías, intereses, prima, vacaciones e indemnización con las fórmulas del Código Sustantivo del Trabajo.",
    Icono: Calculator,
  },
  {
    titulo: "Generador de derecho de petición",
    texto:
      "Redacta tu derecho de petición con la estructura que exige la ley y descárgalo en PDF.",
    Icono: FileSignature,
  },
  {
    titulo: "Generador de acción de tutela",
    texto: "Arma el escrito de tutela con los requisitos del Decreto 2591 de 1991.",
    Icono: ShieldCheck,
  },
  {
    titulo: "Calculadora de cuota alimentaria",
    texto: "Estima la cuota según ingresos, número de hijos y gastos acreditados.",
    Icono: HeartHandshake,
  },
  {
    titulo: "Contrato de arrendamiento",
    texto: "Genera un contrato de vivienda urbana ajustado a la Ley 820 de 2003.",
    Icono: Home,
  },
];

export function Herramientas() {
  return (
    <section className="bg-tinta py-20 lg:py-24">
      <div className="contenedor">
        <Revelar>
          <h2 className="display-lg text-papel">Herramientas gratuitas</h2>
          <p className="lectura mt-4" style={{ color: "rgba(251,250,247,.7)" }}>
            Resuelve tú mismo lo que puedas. Te decimos cuándo sí necesitas un abogado.
          </p>
        </Revelar>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {HERRAMIENTAS.map(({ titulo, texto, Icono }, i) => (
            <Revelar key={titulo} retardo={(i % 3) * 60} className="h-full">
              <article
                className="flex h-full flex-col rounded-[6px] border p-6"
                style={{
                  background: "rgba(251,250,247,.05)",
                  borderColor: "rgba(251,250,247,.14)",
                }}
              >
                <Icono aria-hidden="true" className="h-6 w-6 text-esmeralda-lum" strokeWidth={1.6} />
                <span
                  className="mt-4 inline-flex w-fit rounded-[4px] px-2 py-1 font-mono text-[0.65rem] uppercase tracking-[0.12em] text-esmeralda-lum"
                  style={{ border: "1px solid rgba(78,168,140,.4)" }}
                >
                  Gratis · Sin registro
                </span>
                <h3 className="mt-4 text-[1.05rem] font-semibold text-papel">
                  <Link to="/herramientas" className="hover:text-esmeralda-lum">
                    {titulo}
                  </Link>
                </h3>
                <p className="mt-2 text-[0.9rem]" style={{ color: "rgba(251,250,247,.7)" }}>
                  {texto}
                </p>
              </article>
            </Revelar>
          ))}
        </div>
      </div>
    </section>
  );
}
