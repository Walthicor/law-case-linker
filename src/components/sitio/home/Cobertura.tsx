import { Link } from "@tanstack/react-router";
import { Revelar } from "@/components/sitio/Revelar";
import { REGIONES } from "@/lib/areas";

export function Cobertura() {
  return (
    <section className="bg-papel-hueso py-20 lg:py-24">
      <div className="contenedor">
        <Revelar>
          <h2 className="display-lg">Presencia en las principales ciudades del país</h2>
          <p className="lectura mt-4 text-tinta-suave">
            Abogados verificados en 19 ciudades. Si tu municipio no aparece, igual cuéntanos tu
            caso: buscamos quién pueda atenderte.
          </p>
        </Revelar>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {REGIONES.map((r, i) => (
            <Revelar key={r.region} retardo={(i % 3) * 60}>
              <p className="eyebrow">{r.region}</p>
              <ul className="mt-3 flex flex-wrap gap-2">
                {r.ciudades.map((c) => (
                  <li
                    key={c}
                    className="rounded-[6px] border border-linea px-[14px] py-[6px] text-[0.9rem] font-medium"
                  >
                    {c}
                  </li>
                ))}
              </ul>
            </Revelar>
          ))}
        </div>

        <Revelar retardo={120} className="mt-10">
          <Link to="/cobertura" className="font-semibold text-esmeralda hover:underline">
            Ver toda la cobertura →
          </Link>
        </Revelar>
      </div>
    </section>
  );
}
