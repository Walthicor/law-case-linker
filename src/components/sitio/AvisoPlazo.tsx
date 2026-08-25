import { AlarmClock } from "lucide-react";

type Props = { titulo: string; texto: string };

export function AvisoPlazo({ titulo, texto }: Props) {
  return (
    <div className="aviso-plazo flex gap-3">
      <AlarmClock className="mt-0.5 h-5 w-5 shrink-0 text-sello" aria-hidden="true" strokeWidth={1.7} />
      <div>
        <p className="font-mono text-[0.8rem] font-semibold uppercase tracking-[0.06em] text-sello">
          {titulo}
        </p>
        <p className="mt-2 text-[0.95rem] leading-relaxed text-tinta">{texto}</p>
      </div>
    </div>
  );
}
