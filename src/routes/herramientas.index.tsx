import { createFileRoute, Link } from "@tanstack/react-router";
import { metaSeo } from "@/lib/seo";
import { PAGINAS } from "@/lib/seo-inventario";
import { ArrowRight, Calculator, FileText, HeartHandshake, Home, Scale } from "lucide-react";
import { IconoFormulario } from "@/components/sitio/IconoFormulario";
import { ImagenJuridica } from "@/components/sitio/ImagenJuridica";
import type { ImagenJuridicaClave } from "@/lib/imagenes-juridicas";

const TITLE = "Herramientas jurídicas gratuitas 2026 | Sin registro";
const DESCRIPTION =
  "Calculadoras y generadores de documentos legales gratis: liquidación laboral, cuota alimentaria, derecho de petición, tutela y arrendamiento.";

export const Route = createFileRoute("/herramientas/")({
  head: () => ({
    ...metaSeo(PAGINAS.herramientas),
  }),
  component: Pagina,
});

const HERRAMIENTAS = [
  {
    to: "/herramientas/calculadora-liquidacion-laboral" as const,
    tipo: "CALCULADORA",
    Icono: Calculator,
    titulo: "Calculadora de liquidación laboral 2026",
    descripcion:
      "Cesantías, intereses, prima, vacaciones e indemnización con las fórmulas del Código Sustantivo del Trabajo. Sabes en tres minutos si lo que te ofrecen está bien calculado.",
    cta: "Calcular mi liquidación",
  },
  {
    to: "/herramientas/calculadora-cuota-alimentaria" as const,
    tipo: "CALCULADORA",
    Icono: HeartHandshake,
    titulo: "Calculadora de cuota alimentaria 2026",
    descripcion:
      "Estima la cuota de alimentos según ingresos, número de hijos y gastos acreditados. Te explicamos cómo se llegó al rango y por qué no existe un porcentaje fijo.",
    cta: "Estimar la cuota",
  },
  {
    to: "/herramientas/derecho-de-peticion" as const,
    tipo: "GENERADOR",
    Icono: FileText,
    titulo: "Generador de derecho de petición 2026",
    descripcion:
      "Con la estructura exigida por la Ley 1755 de 2015 y los plazos de respuesta de la entidad. El documento se escribe mientras llenas los campos.",
    cta: "Redactar mi petición",
  },
  {
    to: "/herramientas/accion-de-tutela" as const,
    tipo: "GENERADOR",
    Icono: Scale,
    titulo: "Generador de acción de tutela 2026",
    descripcion:
      "Requisitos del Decreto 2591 de 1991, con derechos vulnerados, medida provisional y juramento. Puedes radicarla sin abogado en cualquier juzgado.",
    cta: "Redactar mi tutela",
  },
  {
    to: "/herramientas/contrato-de-arrendamiento" as const,
    tipo: "GENERADOR",
    Icono: Home,
    titulo: "Contrato de arrendamiento de vivienda 2026",
    descripcion:
      "Ajustado a la Ley 820 de 2003: canon, forma de pago, incremento con IPC, garantías permitidas e inventario del inmueble.",
    cta: "Generar mi contrato",
  },
];

function Pagina() {
  return (
    <div className="bg-papel">
      <div className="contenedor py-14 lg:py-20">
        <h1 className="display-lg">Herramientas jurídicas gratuitas</h1>
        <p className="lectura mt-4 text-[1.05rem] leading-relaxed text-tinta">
          Resuelve tú mismo lo que puedas. Te decimos cuándo sí necesitas un abogado.
        </p>
        <p className="mono-tag mt-5 inline-block rounded-full bg-esmeralda-claro px-3 py-1 text-esmeralda">
          GRATIS · SIN REGISTRO
        </p>

        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {HERRAMIENTAS.map(({ to, tipo, Icono, titulo, descripcion, cta }) => (
            <Link key={to} to={to} className="tarjeta group flex h-full flex-col">
              <ImagenJuridica imagen={to.split("/").at(-1) as ImagenJuridicaClave} className="mb-5" />
              <span className="flex h-11 w-11 items-center justify-center rounded-[6px] bg-esmeralda-claro text-esmeralda">
                <Icono className="h-5 w-5" strokeWidth={1.7} aria-hidden="true" />
              </span>
              <p className="eyebrow mt-4">{tipo}</p>
              <h2 className="mt-2 text-[1.05rem] font-semibold leading-snug group-hover:text-esmeralda">
                {titulo}
              </h2>
              <p className="mt-2 text-[0.9rem] leading-relaxed text-tinta-suave">{descripcion}</p>
              <span className="mt-5 inline-flex items-center gap-2 text-[0.9rem] font-medium text-esmeralda">
                {cta}
                <ArrowRight
                  aria-hidden="true"
                  strokeWidth={1.7}
                  className="h-4 w-4 transition-transform group-hover:translate-x-1"
                />
              </span>
            </Link>
          ))}
        </div>

        <div className="mt-14 grid items-center gap-8 border-t border-linea py-10 lg:grid-cols-2">
          <div>
          <h2 className="display-md">¿No encuentras lo que buscas?</h2>
          <p className="lectura mt-3 text-[0.98rem] leading-relaxed text-tinta-suave">
            Tenemos guías paso a paso sobre trámites, plazos y procesos. Y si tu caso ya necesita un
            abogado, cuéntanos qué pasó y te conectamos con un especialista con tarjeta verificada en
            tu ciudad.
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Link to="/guias" className="btn-secundario justify-center sm:w-auto">
              Ver las guías
            </Link>
            <Link to="/iniciar-caso" className="btn-primario btn-pulso justify-center sm:w-auto">
              <IconoFormulario />
              Contar mi caso →
            </Link>
          </div>
          </div>
          <ImagenJuridica imagen="orientacion-juridica" sizes="(max-width: 1023px) 100vw, 50vw" />
        </div>
      </div>
    </div>
  );
}
