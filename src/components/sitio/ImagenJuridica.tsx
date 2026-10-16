import { CATALOGO_IMAGENES, type CatalogoImagenClave } from "@/lib/imagenes-juridicas";

export function ImagenJuridica({ imagen, className = "", prioridad = false, sizes = "(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 33vw" }: {
  imagen: CatalogoImagenClave;
  className?: string;
  prioridad?: boolean;
  sizes?: string;
}) {
  const foto = CATALOGO_IMAGENES[imagen];
  const width = "width" in foto ? foto.width : 600;
  const height = "height" in foto ? foto.height : 400;
  return <img src={foto.src} srcSet={`${foto.small} ${width / 2}w, ${foto.src} ${width}w`} sizes={sizes} alt={foto.alt}
    width={width} height={height} loading={prioridad ? "eager" : "lazy"} decoding="async"
    fetchPriority={prioridad ? "high" : "auto"}
    className={`aspect-[3/2] w-full rounded-[6px] object-cover ${className}`} />;
}