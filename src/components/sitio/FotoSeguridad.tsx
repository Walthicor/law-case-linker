import { ImagenJuridica } from "@/components/sitio/ImagenJuridica";
import { FOTOS_SEGURIDAD } from "@/lib/imagenes-juridicas";

export const FOTOS = FOTOS_SEGURIDAD;
export type ClaveFoto = keyof typeof FOTOS;
export const urlFoto = (clave: ClaveFoto, ancho: 600 | 1200) =>
  ancho === 600 ? FOTOS[clave].small : FOTOS[clave].src;

export function Foto({ clave, prioridad = false, sizes = "(max-width: 1023px) 100vw, 50vw", className = "" }: {
  clave: ClaveFoto;
  prioridad?: boolean;
  sizes?: string;
  className?: string;
}) {
  return <ImagenJuridica imagen={clave} prioridad={prioridad} sizes={sizes} className={className} />;
}
