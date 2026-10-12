import { Link } from "@tanstack/react-router";
import { Check } from "lucide-react";
import { Revelar } from "@/components/sitio/Revelar";
import { ImagenJuridica } from "@/components/sitio/ImagenJuridica";

const BULLETS = [
  "Casos filtrados por área, ciudad y urgencia",
  "Sabes de qué se trata antes de aceptar",
  "Perfil público con tus datos profesionales",
  "Sin exclusividad ni permanencia",
];

export function ParaAbogados() {
  return (
    <section className="bg-esmeralda-claro py-20 lg:py-24">
      <div className="contenedor grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <Revelar>
          <h2 className="display-lg">¿Eres abogado?</h2>
          <p className="mt-4 text-tinta-suave">
            Recibe casos de personas que ya describieron su situación, en tu área y tu ciudad.
            Nosotros hacemos la captación; tú haces lo que sabes hacer.
          </p>
          <ul className="mt-6 space-y-3">
            {BULLETS.map((b) => (
              <li key={b} className="flex gap-3">
                <Check
                  aria-hidden="true"
                  className="mt-1 h-[18px] w-[18px] shrink-0 text-esmeralda"
                  strokeWidth={2}
                />
                <span>{b}</span>
              </li>
            ))}
          </ul>
          <Link to="/unete" className="btn-primario mt-8">
            Conocer la red →
          </Link>
        </Revelar>

        <Revelar retardo={80}>
          <ImagenJuridica imagen="red-abogados" className="mb-6" sizes="(max-width: 1023px) 100vw, 50vw" />
          <div className="rounded-[6px] border border-linea bg-papel p-6">
            <p className="mono-tag text-tinta-suave">AJC-2026-04871</p>
            <div className="mt-4 flex flex-wrap gap-2">
              <span className="rounded-[6px] border border-linea px-[10px] py-[4px] text-[0.8rem] font-medium">
                Laboral
              </span>
              <span className="rounded-[6px] border border-linea px-[10px] py-[4px] text-[0.8rem] font-medium">
                Medellín
              </span>
              <span className="rounded-[6px] border border-sello px-[10px] py-[4px] text-[0.8rem] font-medium text-sello">
                Urgente
              </span>
            </div>
            <div aria-hidden="true" className="mt-6 space-y-3">
              <span className="block h-3 w-full rounded-[3px] bg-linea opacity-90 blur-[2px]" />
              <span className="block h-3 w-[92%] rounded-[3px] bg-linea opacity-70 blur-[2px]" />
              <span className="block h-3 w-[64%] rounded-[3px] bg-linea opacity-50 blur-[2px]" />
            </div>
            <p className="mt-6 text-[0.8rem] text-tinta-suave">
              Los datos del caso se revelan al abogado asignado.
            </p>
          </div>
        </Revelar>
      </div>
    </section>
  );
}
