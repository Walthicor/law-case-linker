import { useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";

/**
 * Par de botones del hero con el efecto balanza.
 * Usa :has() cuando existe y, como fallback, clases aplicadas desde React.
 */
export function Balanza({ izquierda, derecha }: { izquierda: ReactNode; derecha: ReactNode }) {
  const [lado, setLado] = useState<"izq" | "der" | null>(null);

  return (
    <div
      className={cn(
        "balanza",
        lado === "izq" && "inclina-izq",
        lado === "der" && "inclina-der",
      )}
    >
      <div
        className="balanza-izq"
        onMouseEnter={() => setLado("izq")}
        onMouseLeave={() => setLado(null)}
      >
        {izquierda}
      </div>
      <div
        className="balanza-der"
        onMouseEnter={() => setLado("der")}
        onMouseLeave={() => setLado(null)}
      >
        {derecha}
      </div>
    </div>
  );
}
