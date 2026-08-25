import { cn } from "@/lib/utils";

/** Icono lineal de formulario/expediente. Se usa en todos los CTA. */
export function IconoFormulario({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={cn("h-[18px] w-[18px] shrink-0", className)}
    >
      <rect x="4" y="3" width="16" height="18" rx="2" />
      <path d="M8 8h8M8 12h8M8 16h5" />
      <path d="M16 15.5l1 1 2-2" />
    </svg>
  );
}
