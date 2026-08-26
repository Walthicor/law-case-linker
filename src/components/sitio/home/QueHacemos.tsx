import { Check } from "lucide-react";
import { Revelar } from "@/components/sitio/Revelar";
import { CaratulaExpediente } from "@/components/sitio/CaratulaExpediente";

const HACEMOS = [
  "Leemos tu caso y lo clasificamos por área y urgencia",
  "Te conectamos con un especialista en esa área, en tu ciudad",
  "Verificamos que su tarjeta profesional esté vigente",
  "Hacemos seguimiento a que te contacte a tiempo",
];

const NO_HACEMOS = [
  "No damos asesoría jurídica ni opinamos sobre tu caso",
  "No somos un bufete ni representamos a nadie",
  "No te cobramos nada",
  "No intervenimos en el acuerdo entre tú y tu abogado",
];

export function QueHacemos() {
  return (
    <section className="bg-papel-hueso py-20 lg:py-24">
      <div className="contenedor grid gap-12 lg:grid-cols-[54fr_46fr] lg:items-start lg:gap-16">
        {/* Texto */}
        <div>
          <Revelar as="h2" className="display-lg">
            Qué hacemos y qué no hacemos
          </Revelar>
          <p className="mt-4 max-w-[46ch] text-[1.02rem] leading-relaxed text-tinta-suave">
            Somos el filtro entre tu problema y el abogado correcto. Nada más, y nada menos.
          </p>

          <div className="mt-10 space-y-10">
            <Revelar retardo={60}>
              <p className="eyebrow">Lo que hacemos</p>
              <ul className="mt-5 space-y-4">
                {HACEMOS.map((t) => (
                  <li key={t} className="flex gap-3">
                    <Check
                      aria-hidden="true"
                      className="mt-1 h-[18px] w-[18px] shrink-0 text-esmeralda"
                      strokeWidth={2}
                    />
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </Revelar>

            <Revelar retardo={120}>
              <p className="eyebrow">Lo que no hacemos</p>
              <ul className="mt-5 space-y-4">
                {NO_HACEMOS.map((t) => (
                  <li key={t} className="flex gap-3 text-tinta-suave">
                    <span
                      aria-hidden="true"
                      className="mt-[0.7em] h-px w-3 shrink-0 bg-tinta-suave"
                    />
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </Revelar>
          </div>
        </div>

        {/* Formulario */}
        <Revelar retardo={90} className="lg:sticky lg:top-24">
          <CaratulaExpediente />
        </Revelar>
      </div>
    </section>
  );
}
