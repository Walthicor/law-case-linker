import { IMAGENES_JURIDICAS, type ImagenJuridicaClave } from "@/lib/imagenes-juridicas";

export function ImagenJuridica({ imagen, className = "", prioridad = false, sizes = "(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 33vw" }: {
  imagen: ImagenJuridicaClave;
  className?: string;
  prioridad?: boolean;
  sizes?: string;
}) {
  const foto = IMAGENES_JURIDICAS[imagen];
  return <img src={foto.src} srcSet={`${foto.small} 300w, ${foto.src} 600w`} sizes={sizes} alt={foto.alt}
    width={600} height={400} loading={prioridad ? "eager" : "lazy"} decoding="async"
    fetchPriority={prioridad ? "high" : "auto"}
    className={`aspect-[3/2] w-full rounded-[6px] object-cover ${className}`} />;
}