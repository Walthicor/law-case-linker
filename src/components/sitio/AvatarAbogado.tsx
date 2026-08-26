import { cn } from "@/lib/utils";

type Props = {
  nombre: string;
  iniciales: string;
  /** Foto real del abogado. Si no existe, se usan las iniciales. Nunca fotos de stock. */
  foto?: string | undefined;
  /** Lado del cuadrado en px. */
  tamano?: number;
  className?: string;
};

export function AvatarAbogado({ nombre, iniciales, foto, tamano = 56, className }: Props) {
  const estilo = { width: tamano, height: tamano };

  if (foto) {
    return (
      <img
        src={foto}
        alt={`Fotografía de ${nombre}`}
        style={estilo}
        loading="lazy"
        className={cn("shrink-0 rounded-[6px] object-cover", className)}
      />
    );
  }

  return (
    <div
      aria-hidden="true"
      style={estilo}
      className={cn(
        "flex shrink-0 items-center justify-center rounded-[6px] bg-esmeralda font-mono font-semibold text-papel",
        className,
      )}
    >
      <span style={{ fontSize: Math.round(tamano * 0.34) }}>{iniciales}</span>
    </div>
  );
}
