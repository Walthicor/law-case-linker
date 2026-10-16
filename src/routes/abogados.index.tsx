import { createFileRoute, Link } from "@tanstack/react-router";
import { BadgeCheck, FileCheck2, Scale, ShieldCheck } from "lucide-react";
import { metaSeo } from "@/lib/seo";
import { PAGINAS } from "@/lib/seo-inventario";
import { Migas } from "@/components/sitio/Migas";

/**
 * Página de la red de abogados. Sin fichas publicadas todavía: explica cómo se
 * verifica a cada abogado y no muestra perfiles hasta tener profesionales
 * reales que autoricen su publicación.
 */
export const Route = createFileRoute("/abogados/")({
  head: () => metaSeo(PAGINAS.abogados),
  component: Pagina,
});

const PASOS = [
  {
    Icono: BadgeCheck,
    titulo: "Tarjeta profesional vigente",
    detalle:
      "Confirmamos el número de tarjeta en el registro del Consejo Superior de la Judicatura antes de admitir a cualquier abogado.",
  },
  {
    Icono: ShieldCheck,
    titulo: "Sin sanciones vigentes",
    detalle:
      "Revisamos los antecedentes disciplinarios públicos. Una sanción vigente cierra la puerta.",
  },
  {
    Icono: FileCheck2,
    titulo: "Experiencia por área",
    detalle: "Cada abogado recibe solo casos de las áreas y ciudades donde realmente ejerce.",
  },
  {
    Icono: Scale,
    titulo: "Ficha con autorización",
    detalle:
      "Publicamos el perfil de un abogado solo con su autorización y con los datos que permite la Ley 1123 de 2007.",
  },
];

function Pagina() {
  return (
    <div className="bg-papel">
      <div className="contenedor pb-20 pt-10 lg:pb-28 lg:pt-14">
        <Migas items={[{ titulo: "Inicio", to: "/" }, { titulo: "Abogados" }]} />

        <header className="mt-6 max-w-[44rem]">
          <p className="eyebrow">Red profesional</p>
          <h1 className="display-lg mt-4">Nuestra red de abogados</h1>
          <p className="lectura mt-6 text-[1.15rem] leading-[1.7] text-tinta-suave">
            Estamos conformando la red con abogados verificados en todo el país. Mientras publicamos
            sus fichas, cuéntanos tu caso y te conectamos directamente con el especialista indicado.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/iniciar-caso" className="btn-primario btn-pulso">
              Contar mi caso
            </Link>
            <Link to="/unete" className="btn-secundario">
              Soy abogado: quiero unirme
            </Link>
          </div>
        </header>

        <section className="mt-16 border-t border-linea pt-12">
          <h2 className="display-md">Cómo verificamos a cada abogado</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {PASOS.map(({ Icono, titulo, detalle }) => (
              <div key={titulo} className="rounded-[6px] border border-linea bg-papel-hueso p-6">
                <Icono aria-hidden="true" strokeWidth={1.6} className="h-6 w-6 text-esmeralda" />
                <h3 className="mt-4 text-[1rem] font-semibold">{titulo}</h3>
                <p className="mt-2 text-[0.92rem] leading-relaxed text-tinta-suave">{detalle}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
