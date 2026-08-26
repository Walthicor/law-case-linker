import { createFileRoute, Link } from "@tanstack/react-router";
import { absoluta, metaSeo } from "@/lib/seo";
import { PAGINAS } from "@/lib/seo-inventario";
import { useState } from "react";
import { Clock, Mail, MessageCircle, Scale, Send } from "lucide-react";
import { Migas } from "@/components/sitio/Migas";
import { RESPONSABLE } from "@/lib/legal";

const TITLE = "Contacto";
const DESC =
  "Escríbenos por WhatsApp, correo o formulario. Respondemos en 24 horas hábiles. Si tienes un caso jurídico, cuéntanoslo en el formulario de caso.";

export const Route = createFileRoute("/contacto")({
  head: () => ({
    ...metaSeo(PAGINAS.contacto),
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ContactPage",
          name: PAGINAS.contacto.titulo,
          description: PAGINAS.contacto.descripcion,
          url: absoluta(PAGINAS.contacto.ruta),
          inLanguage: "es-CO",
          mainEntity: {
            "@type": "Organization",
            name: "Asesorías Jurídicas Colombia",
            email: RESPONSABLE.correo,
            areaServed: "CO",
          },
        }),
      },
    ],
  }),
  component: Pagina,
});

function Pagina() {
  return (
    <div className="contenedor py-14 md:py-20">
      <Migas items={[{ titulo: "Inicio", to: "/" }, { titulo: "Contacto" }]} />

      <header className="mt-8 max-w-[680px]">
        <p className="eyebrow">Atención</p>
        <h1 className="display-lg mt-3">Contacto</h1>
        <p className="mt-5 text-[1.05rem] leading-relaxed text-tinta-suave">
          Para dudas sobre la plataforma, la red de abogados, prensa o protección de datos.
          Respondemos en 24 horas hábiles.
        </p>
      </header>

      <div className="mt-10 rounded-[6px] border border-esmeralda bg-esmeralda-claro p-6 md:flex md:items-center md:justify-between md:gap-8">
        <div className="flex gap-4">
          <Scale
            aria-hidden="true"
            strokeWidth={1.7}
            className="mt-0.5 h-6 w-6 shrink-0 text-esmeralda"
          />
          <div>
            <h2 className="text-[1.05rem] font-semibold text-tinta">
              ¿Tienes un caso jurídico?
            </h2>
            <p className="mt-1 max-w-[52ch] text-[0.95rem] leading-relaxed text-tinta-suave">
              No uses este formulario. Cuéntanos tu caso en el formulario de perfilamiento
              para que un abogado especialista lo revise.
            </p>
          </div>
        </div>
        <Link to="/iniciar-caso" className="btn-primario mt-5 shrink-0 md:mt-0">
          Cuéntanos tu caso
        </Link>
      </div>

      <div className="mt-14 grid gap-12 lg:grid-cols-[minmax(0,1fr)_320px] lg:gap-16">
        <Formulario />

        <aside className="space-y-4">
          <Canal
            Icono={MessageCircle}
            titulo="WhatsApp"
            valor={RESPONSABLE.whatsapp}
            detalle="El canal más rápido para dudas cortas."
          />
          <Canal
            Icono={Mail}
            titulo="Correo"
            valor={RESPONSABLE.correo}
            detalle="Para asuntos de datos personales, prensa y alianzas."
          />
          <Canal
            Icono={Clock}
            titulo="Horario"
            valor={RESPONSABLE.horario}
            detalle="Fuera de ese horario respondemos el siguiente día hábil."
          />
          <p className="text-[0.85rem] leading-relaxed text-tinta-suave">
            No atendemos consultas jurídicas por estos canales: la asesoría la da el abogado
            asignado a tu caso.
          </p>
        </aside>
      </div>
    </div>
  );
}

function Canal({
  Icono,
  titulo,
  valor,
  detalle,
}: {
  Icono: typeof Mail;
  titulo: string;
  valor: string;
  detalle: string;
}) {
  return (
    <div className="rounded-[6px] border border-linea bg-papel-hueso p-5">
      <div className="flex items-center gap-3">
        <Icono aria-hidden="true" strokeWidth={1.7} className="h-5 w-5 text-esmeralda" />
        <h2 className="text-[0.95rem] font-semibold">{titulo}</h2>
      </div>
      <p className="mt-2 font-mono text-[0.85rem] text-tinta">{valor}</p>
      <p className="mt-2 text-[0.85rem] leading-relaxed text-tinta-suave">{detalle}</p>
    </div>
  );
}

function Formulario() {
  const [enviado, setEnviado] = useState(false);

  if (enviado) {
    return (
      <div className="rounded-[6px] border border-linea bg-papel-hueso p-8">
        <p className="eyebrow">Mensaje recibido</p>
        <h2 className="display-md mt-3 text-[1.4rem]">Gracias por escribirnos</h2>
        <p className="mt-4 text-[0.97rem] leading-relaxed text-tinta-suave">
          Respondemos a tu correo dentro de las próximas 24 horas hábiles.
        </p>
      </div>
    );
  }

  return (
    <form
      className="space-y-5"
      onSubmit={(e) => {
        e.preventDefault();
        setEnviado(true);
      }}
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <Campo id="nombre" etiqueta="Nombre">
          <input id="nombre" name="nombre" required className="campo" autoComplete="name" />
        </Campo>
        <Campo id="correo" etiqueta="Correo electrónico">
          <input
            id="correo"
            name="correo"
            type="email"
            required
            className="campo"
            autoComplete="email"
          />
        </Campo>
      </div>

      <Campo id="motivo" etiqueta="Motivo">
        <select id="motivo" name="motivo" className="campo" defaultValue="general">
          <option value="general">Duda general sobre la plataforma</option>
          <option value="abogados">Quiero pertenecer a la red de abogados</option>
          <option value="datos">Protección de datos personales</option>
          <option value="prensa">Prensa o alianzas</option>
          <option value="otro">Otro</option>
        </select>
      </Campo>

      <Campo id="mensaje" etiqueta="Mensaje">
        <textarea
          id="mensaje"
          name="mensaje"
          rows={6}
          required
          className="campo resize-y"
          placeholder="Cuéntanos brevemente en qué podemos ayudarte."
        />
      </Campo>

      <p className="text-[0.82rem] leading-relaxed text-tinta-suave">
        Al enviar aceptas el tratamiento de tus datos conforme a la{" "}
        <Link
          to="/politica-de-tratamiento-de-datos"
          className="font-semibold text-esmeralda underline"
        >
          política de tratamiento de datos
        </Link>
        .
      </p>

      <button type="submit" className="btn-primario">
        <Send aria-hidden="true" strokeWidth={1.8} className="h-4 w-4" />
        Enviar mensaje
      </button>
    </form>
  );
}

function Campo({
  id,
  etiqueta,
  children,
}: {
  id: string;
  etiqueta: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label htmlFor={id} className="mb-2 block text-[0.85rem] font-semibold text-tinta">
        {etiqueta}
      </label>
      {children}
    </div>
  );
}
