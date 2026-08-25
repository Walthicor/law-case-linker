import { useState } from "react";
import { Plus } from "lucide-react";

export type ItemAcordeon = { pregunta: string; respuesta: string };

export function Acordeon({ items }: { items: ItemAcordeon[] }) {
  const [abierto, setAbierto] = useState<number | null>(0);

  return (
    <div className="divide-y divide-linea border-y border-linea">
      {items.map((item, i) => {
        const activo = abierto === i;
        return (
          <div key={item.pregunta}>
            <h3>
              <button
                type="button"
                onClick={() => setAbierto(activo ? null : i)}
                aria-expanded={activo}
                className="flex w-full items-start justify-between gap-4 py-5 text-left text-[1.02rem] font-semibold transition-colors hover:text-esmeralda"
              >
                <span>{item.pregunta}</span>
                <Plus
                  aria-hidden="true"
                  strokeWidth={1.7}
                  className={`mt-1 h-5 w-5 shrink-0 text-esmeralda transition-transform duration-200 ${
                    activo ? "rotate-45" : ""
                  }`}
                />
              </button>
            </h3>
            {activo ? (
              <p className="lectura pb-6 text-[0.95rem] leading-relaxed text-tinta-suave">
                {item.respuesta}
              </p>
            ) : null}
          </div>
        );
      })}
    </div>
  );
}
