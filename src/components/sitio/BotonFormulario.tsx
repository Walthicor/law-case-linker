import { Link } from "@tanstack/react-router";
import { cn } from "@/lib/utils";
import { IconoFormulario } from "./IconoFormulario";

const R = 21;
const PERIMETRO = 2 * Math.PI * R;

/** Botón circular que lleva al formulario del caso. */
export function BotonFormulario({ className }: { className?: string }) {
  return (
    <Link
      to="/iniciar-caso"
      aria-label="Ir al formulario del caso"
      className={cn(
        "btn-anillo relative flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-esmeralda text-papel transition-colors hover:bg-esmeralda/90",
        className,
      )}
    >
      <svg
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 h-full w-full -rotate-90"
        viewBox="0 0 48 48"
      >
        <circle
          className="trazo"
          cx="24"
          cy="24"
          r={R}
          fill="none"
          stroke="var(--esmeralda-lum)"
          strokeWidth="1.5"
          strokeDasharray={PERIMETRO}
          strokeDashoffset={PERIMETRO}
        />
      </svg>
      <IconoFormulario className="relative h-5 w-5" />
    </Link>
  );
}
