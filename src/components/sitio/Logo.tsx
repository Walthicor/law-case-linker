import { Link } from "@tanstack/react-router";
import { cn } from "@/lib/utils";

export function Logo({ claro = false }: { claro?: boolean }) {
  return (
    <Link to="/" className="flex items-center gap-3" aria-label="Asesorías Jurídicas Colombia">
      <span
        aria-hidden="true"
        className="flex h-9 w-9 shrink-0 items-center justify-center rounded-[6px] bg-esmeralda font-display text-lg leading-none text-papel"
      >
        §
      </span>
      <span className="flex flex-col leading-none">
        <span
          className={cn(
            "text-[0.8rem] font-semibold tracking-[0.08em]",
            claro ? "text-papel/80" : "text-tinta-suave",
          )}
        >
          ASESORÍAS JURÍDICAS
        </span>
        <span
          className={cn(
            "font-display text-base font-semibold",
            claro ? "text-papel" : "text-tinta",
          )}
        >
          COLOMBIA
        </span>
      </span>
    </Link>
  );
}
