import { Revelar } from "@/components/sitio/Revelar";

const PASOS = [
  {
    n: "01",
    titulo: "Cuéntanos tu caso",
    texto:
      "Respondes 10 preguntas sobre tu situación. Toma unos 3 minutos y no necesitas saber nada de leyes.",
  },
  {
    n: "02",
    titulo: "Revisamos y clasificamos",
    texto:
      "Identificamos el área del derecho, la urgencia y qué tipo de abogado necesitas.",
  },
  {
    n: "03",
    titulo: "Buscamos al especialista",
    texto:
      "Ubicamos un abogado con tarjeta verificada, especialista en tu área y que trabaje en tu ciudad.",
  },
  {
    n: "04",
    titulo: "El abogado te contacta",
    texto:
      "Te escribe o te llama directamente. Te explica tus opciones y ustedes acuerdan honorarios y siguientes pasos.",
  },
];

export function ComoFunciona() {
  return (
    <section className="bg-papel py-20 lg:py-24">
      <div className="contenedor">
        <Revelar as="h2" className="display-lg">
          Cuatro pasos, sin vueltas
        </Revelar>

        <div className="relative mt-14">
          {/* Línea punteada de conexión (desktop) */}
          <div
            aria-hidden="true"
            className="absolute left-[12%] right-[12%] top-6 hidden border-t border-dashed border-linea lg:block"
          />
          <ol className="relative grid gap-10 lg:grid-cols-4 lg:gap-8">
            {PASOS.map((p, i) => (
              <Revelar as="li" key={p.n} retardo={i * 60} className="relative pl-14 lg:pl-0">
                {/* Marca de agua */}
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute left-0 top-0 font-mono text-[2.5rem] leading-none text-linea lg:static lg:block"
                >
                  {p.n}
                </span>
                {/* Timeline vertical en móvil */}
                <span
                  aria-hidden="true"
                  className="absolute left-[19px] top-12 bottom-[-2.5rem] border-l border-dashed border-linea last:hidden lg:hidden"
                />
                <h3 className="relative mt-0 text-[1.05rem] font-semibold lg:-mt-6">{p.titulo}</h3>
                <p className="relative mt-2 text-[0.95rem] text-tinta-suave">{p.texto}</p>
              </Revelar>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
