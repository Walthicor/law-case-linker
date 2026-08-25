import { Revelar } from "@/components/sitio/Revelar";

const ITEMS = [
  {
    n: "01",
    titulo: "Tarjeta profesional",
    texto:
      "Confirmamos que el número esté vigente en el registro del Consejo Superior de la Judicatura.",
  },
  {
    n: "02",
    titulo: "Antecedentes disciplinarios",
    texto: "Verificamos que no tenga sanciones vigentes que le impidan ejercer.",
  },
  {
    n: "03",
    titulo: "Área de especialidad",
    texto: "Pedimos evidencia de experiencia real en el área. No basta con decirlo.",
  },
  {
    n: "04",
    titulo: "Compromiso de respuesta",
    texto: "Acuerda tiempos de contacto. Si no responde, sale de la rotación.",
  },
];

export function ComoVerificamos() {
  return (
    <section className="bg-papel py-20 lg:py-24">
      <div className="contenedor">
        <Revelar>
          <h2 className="display-lg">Cómo verificamos a cada abogado</h2>
          <p className="lectura mt-4 text-tinta-suave">
            Antes de que alguien entre a la red, revisamos cuatro cosas.
          </p>
        </Revelar>

        <ol className="mt-12 grid gap-8 sm:grid-cols-2">
          {ITEMS.map((it, i) => (
            <Revelar as="li" key={it.n} retardo={(i % 2) * 60} className="flex gap-5">
              <span aria-hidden="true" className="font-mono text-[1.5rem] leading-none text-linea">
                {it.n}
              </span>
              <div>
                <h3 className="text-[1.05rem] font-semibold">{it.titulo}</h3>
                <p className="mt-2 text-[0.95rem] text-tinta-suave">{it.texto}</p>
              </div>
            </Revelar>
          ))}
        </ol>

        <Revelar retardo={120} className="mt-12">
          <p className="rounded-[6px] border border-linea p-5 text-[0.85rem] text-tinta-suave">
            Asesorías Jurídicas Colombia no presta servicios jurídicos ni representa a nadie ante
            autoridades. Somos una plataforma de conexión. El abogado que te sea asignado es un
            profesional independiente y la relación profesional se establece directamente entre
            ustedes dos.
          </p>
        </Revelar>
      </div>
    </section>
  );
}
