import type { ReactNode } from "react";

/**
 * Contenedor que simula una hoja carta (8.5 × 11) para la previsualización
 * en vivo del documento. Serif de sistema a 11pt escalado.
 */
export function HojaCarta({ children }: { children: ReactNode }) {
  return (
    <div className="hoja-imprimible aspect-[8.5/11] w-full overflow-y-auto rounded-[2px] bg-white shadow-[0_2px_24px_rgba(18,33,43,0.12)]">
      <div className="hoja-texto px-[8%] py-[7%]">{children}</div>
    </div>
  );
}

export function HojaTitulo({ children }: { children: ReactNode }) {
  return <p className="mt-[1.6em] font-semibold uppercase tracking-[0.06em]">{children}</p>;
}

export function HojaParrafo({ children }: { children: ReactNode }) {
  return <p className="mt-[0.9em] whitespace-pre-line text-justify">{children}</p>;
}

/** Texto pendiente de escribir: se muestra en gris claro dentro de la hoja. */
export function Pendiente({ children }: { children: ReactNode }) {
  return <span className="text-[#a8a29a]">{children}</span>;
}
