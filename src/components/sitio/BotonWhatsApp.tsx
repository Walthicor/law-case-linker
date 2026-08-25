import { WHATSAPP_URL } from "@/lib/navegacion";
import { cn } from "@/lib/utils";

const R = 21;
const PERIMETRO = 2 * Math.PI * R;

export function BotonWhatsApp({ className }: { className?: string }) {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escribir por WhatsApp"
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
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="relative h-5 w-5"
      >
        <path d="M17.47 14.38c-.3-.15-1.75-.86-2.02-.96-.27-.1-.47-.15-.67.15-.2.3-.77.96-.94 1.16-.17.2-.35.22-.65.07-.3-.15-1.13-.42-2.15-1.33-.8-.71-1.33-1.59-1.48-1.89-.15-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.6-.92-2.19-.24-.57-.49-.5-.67-.5h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.01-1.04 2.46s1.06 2.86 1.21 3.06c.15.2 2.09 3.19 5.06 4.35 2.47.96 2.97.77 3.51.72.54-.05 1.75-.71 2-1.41.25-.7.25-1.28.17-1.41-.07-.13-.27-.2-.57-.35ZM12.05 21.5h-.01a9.4 9.4 0 0 1-4.79-1.31l-.34-.2-3.56.93.95-3.48-.22-.36a9.4 9.4 0 0 1-1.44-5.02c0-5.19 4.23-9.41 9.42-9.41a9.36 9.36 0 0 1 9.41 9.42c0 5.19-4.23 9.41-9.42 9.41ZM12.05 1.75C6.02 1.75 1.13 6.64 1.13 12.66c0 1.93.5 3.81 1.46 5.47L1 24l6.02-1.58a10.9 10.9 0 0 0 5.03 1.28h.01c6.02 0 10.92-4.89 10.92-10.91 0-2.92-1.14-5.66-3.2-7.72a10.83 10.83 0 0 0-7.72-3.2Z" />
      </svg>
    </a>
  );
}
