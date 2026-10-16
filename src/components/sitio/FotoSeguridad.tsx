/** Fotografías de la página de consultoría en seguridad (public/imagenes/seguridad). */

/* ── Fotografías (WebP 1200 y 600 px, menos de 70 KB cada una) ───── */

export const RUTA_FOTOS = "/imagenes/seguridad";

export const FOTOS = {
  "consultoria-en-seguridad-sala-de-analisis": {
    alt: "Analistas de consultoría en seguridad frente a pantallas con un mapa de riesgos de Colombia",
    titulo: "Sala de análisis de consultoría en seguridad",
  },
  "analisis-de-riesgos-de-seguridad": {
    alt: "Analista revisando una matriz de análisis de riesgos de seguridad y un mapa de zonas en un portátil",
    titulo: "Análisis de riesgos de seguridad",
  },
  "estudio-de-seguridad-empresa": {
    alt: "Cámara de seguridad y control de acceso en la entrada de un edificio empresarial",
    titulo: "Estudio de seguridad para empresas",
  },
  "plan-integral-de-seguridad-piscc": {
    alt: "Funcionarios de una alcaldía y un oficial de policía revisando el Plan Integral de Seguridad y Convivencia Ciudadana (PISCC)",
    titulo: "Formulación del PISCC con la alcaldía",
  },
  "investigacion-y-analisis-criminal": {
    alt: "Tablero de investigación y análisis criminal con mapa, fotografías y notas conectadas",
    titulo: "Investigación y análisis criminal",
  },
  "capacitacion-en-seguridad": {
    alt: "Capacitación en seguridad para directivos en un auditorio con presentación en pantalla",
    titulo: "Capacitación en seguridad para directivos",
  },
} as const;

export type ClaveFoto = keyof typeof FOTOS;

export const urlFoto = (clave: ClaveFoto, ancho: 600 | 1200) =>
  `${RUTA_FOTOS}/${clave}-${ancho}.webp`;

export function Foto({
  clave,
  prioridad = false,
  sizes = "(max-width: 1023px) 100vw, 50vw",
  className = "",
}: {
  clave: ClaveFoto;
  prioridad?: boolean;
  sizes?: string;
  className?: string;
}) {
  const f = FOTOS[clave];
  return (
    <img
      src={urlFoto(clave, 1200)}
      srcSet={`${urlFoto(clave, 600)} 600w, ${urlFoto(clave, 1200)} 1200w`}
      sizes={sizes}
      alt={f.alt}
      title={f.titulo}
      width={1200}
      height={800}
      loading={prioridad ? "eager" : "lazy"}
      decoding="async"
      fetchPriority={prioridad ? "high" : "auto"}
      className={`aspect-[3/2] w-full rounded-[6px] object-cover ${className}`}
    />
  );
}
