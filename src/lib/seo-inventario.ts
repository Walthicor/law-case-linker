/**
 * Inventario SEO del sitio: una sola fuente para los `head()` de las rutas,
 * los sitemaps y el script `seo:check`.
 *
 * Regla: si una página existe, aparece aquí. Si no aparece, el chequeo la
 * reporta como huérfana.
 */

import { OG, tituloSeo, recortar, type SeoPagina } from "./seo";
import { PILARES } from "./pilares";
import { CONTENIDO_GUIAS, todasLasGuias } from "./guias";
import { ABOGADOS, AREAS_ABOGADO } from "./abogados";
import { CONTENIDO_SUBAREAS } from "./subareas";

/** Fecha de la última revisión editorial del sitio (páginas sin fecha propia). */
export const ULTIMA_REVISION = "2026-08-26";

export type Grupo = "paginas" | "areas" | "subareas" | "herramientas" | "guias" | "abogados";

export type EntradaSeo = SeoPagina & {
  grupo: Grupo;
  /** Prioridad del sitemap. */
  prioridad: number;
  /** ISO corto (YYYY-MM-DD). */
  lastmod: string;
  /** ¿La página emite JSON-LD propio? */
  schema: boolean;
  /** Excluida del sitemap (noindex). */
  fueraDelSitemap?: boolean;
};

const NOINDEX = "noindex, follow";

/* ── Páginas fijas ────────────────────────────────────────────────── */

export const PAGINAS = {
  home: {
    titulo: "Asesorías jurídicas en Colombia | Abogados especialistas",
    descripcion:
      "Leemos tu caso y te conectamos con un abogado con tarjeta verificada en tu ciudad. Sin costo para ti.",
    ruta: "/",
    tipo: "website",
    imagen: OG.base,
    grupo: "paginas",
    prioridad: 1.0,
    lastmod: ULTIMA_REVISION,
    schema: true,
  },
  areas: {
    titulo: tituloSeo("Áreas de práctica"),
    descripcion:
      "Las 13 áreas del derecho en las que te conectamos con un abogado especialista verificado en Colombia.",
    ruta: "/areas",
    imagen: OG.areas,
    grupo: "paginas",
    prioridad: 0.8,
    lastmod: ULTIMA_REVISION,
    schema: true,
  },
  herramientas: {
    titulo: "Herramientas jurídicas gratuitas 2026 | Sin registro",
    descripcion:
      "Calculadoras y generadores gratis: liquidación laboral, cuota alimentaria, petición, tutela y arriendo.",
    ruta: "/herramientas",
    imagen: OG.herramientas,
    grupo: "paginas",
    prioridad: 0.9,
    lastmod: ULTIMA_REVISION,
    schema: true,
  },
  guias: {
    titulo: "Guías legales de Colombia | Respuestas claras",
    descripcion:
      "Respuestas claras a las dudas jurídicas más comunes en Colombia: qué dice la ley, plazos y paso a paso.",
    ruta: "/guias",
    imagen: OG.guias,
    grupo: "paginas",
    prioridad: 0.8,
    lastmod: ULTIMA_REVISION,
    schema: true,
  },
  abogados: {
    titulo: "Abogados verificados con tarjeta profesional vigente",
    descripcion:
      "Directorio de abogados con tarjeta confirmada ante el Consejo Superior de la Judicatura.",
    ruta: "/abogados",
    imagen: OG.abogados,
    grupo: "paginas",
    prioridad: 0.7,
    lastmod: ULTIMA_REVISION,
    schema: true,
  },
  cobertura: {
    titulo: "Cobertura: abogados en 19 ciudades de Colombia",
    descripcion:
      "Conectamos con abogados verificados en Bogotá, Medellín, Cali y 16 ciudades más del país.",
    ruta: "/cobertura",
    grupo: "paginas",
    prioridad: 0.7,
    lastmod: ULTIMA_REVISION,
    schema: true,
  },
  comoFunciona: {
    titulo: "Cómo funciona: de tu problema al abogado correcto",
    descripcion:
      "Los cuatro pasos en detalle, qué hacemos y qué no, cómo verificamos y las dudas frecuentes.",
    ruta: "/como-funciona",
    grupo: "paginas",
    prioridad: 0.7,
    lastmod: ULTIMA_REVISION,
    schema: true,
  },
  iniciarCaso: {
    titulo: tituloSeo("Contar mi caso en 3 pasos"),
    descripcion:
      "Cuéntanos tu caso en 3 pasos y te conectamos con un abogado especialista verificado. Confidencial.",
    ruta: "/iniciar-caso",
    grupo: "paginas",
    prioridad: 0.9,
    lastmod: ULTIMA_REVISION,
    schema: false,
  },
  unete: {
    titulo: "Únete a la red de abogados | Asesorías Jurídicas",
    descripcion:
      "Recibe casos ya perfilados en tu área y tu ciudad. Sin exclusividad y sin cuotas de permanencia.",
    ruta: "/unete",
    grupo: "paginas",
    prioridad: 0.7,
    lastmod: ULTIMA_REVISION,
    schema: true,
  },
  contacto: {
    titulo: tituloSeo("Contacto"),
    descripcion:
      "Escríbenos por WhatsApp, correo o formulario. Respondemos en 24 horas hábiles.",
    ruta: "/contacto",
    grupo: "paginas",
    prioridad: 0.5,
    lastmod: ULTIMA_REVISION,
    schema: false,
  },
  tratamiento: {
    titulo: "Política de tratamiento de datos personales",
    descripcion:
      "Cómo tratamos tus datos según la Ley 1581 de 2012: finalidades, datos sensibles, derechos y plazos.",
    ruta: "/politica-de-tratamiento-de-datos",
    grupo: "paginas",
    prioridad: 0.4,
    lastmod: ULTIMA_REVISION,
    schema: false,
  },
  privacidad: {
    titulo: tituloSeo("Política de privacidad"),
    descripcion: "Versión resumida y legible de cómo tratamos tu información personal.",
    ruta: "/politica-de-privacidad",
    grupo: "paginas",
    prioridad: 0.3,
    lastmod: ULTIMA_REVISION,
    schema: false,
    robots: NOINDEX,
    fueraDelSitemap: true,
  },
  terminos: {
    titulo: tituloSeo("Términos y condiciones"),
    descripcion: "Condiciones de uso de la plataforma Asesorías Jurídicas Colombia.",
    ruta: "/terminos-y-condiciones",
    grupo: "paginas",
    prioridad: 0.3,
    lastmod: ULTIMA_REVISION,
    schema: false,
    robots: NOINDEX,
    fueraDelSitemap: true,
  },
  cookies: {
    titulo: tituloSeo("Política de cookies"),
    descripcion: "Qué cookies usamos, para qué sirven y cuánto duran.",
    ruta: "/politica-de-cookies",
    grupo: "paginas",
    prioridad: 0.3,
    lastmod: ULTIMA_REVISION,
    schema: false,
    robots: NOINDEX,
    fueraDelSitemap: true,
  },
  gracias: {
    titulo: tituloSeo("Recibimos tu caso"),
    descripcion: "Recibimos tu caso. Te contactamos en 24 horas hábiles.",
    ruta: "/gracias",
    grupo: "paginas",
    prioridad: 0.1,
    lastmod: ULTIMA_REVISION,
    schema: false,
    robots: "noindex, nofollow",
    fueraDelSitemap: true,
  },
} satisfies Record<string, EntradaSeo>;

/* ── Herramientas ─────────────────────────────────────────────────── */

export const HERRAMIENTAS_SEO = {
  liquidacion: {
    titulo: "Calculadora de liquidación laboral 2026 | Gratis",
    descripcion:
      "Calcula cesantías, intereses, prima, vacaciones e indemnización según el Código del Trabajo.",
    ruta: "/herramientas/calculadora-liquidacion-laboral",
  },
  alimentos: {
    titulo: "Calculadora de cuota alimentaria 2026 | Gratis",
    descripcion:
      "Estima la cuota de alimentos según ingresos, número de hijos y gastos acreditados. Sin registro.",
    ruta: "/herramientas/calculadora-cuota-alimentaria",
  },
  peticion: {
    titulo: "Generador de derecho de petición 2026 | Gratis",
    descripcion:
      "Redacta tu derecho de petición con la estructura de la Ley 1755 de 2015 y descárgalo en PDF.",
    ruta: "/herramientas/derecho-de-peticion",
  },
  tutela: {
    titulo: "Generador de acción de tutela 2026 | Gratis",
    descripcion:
      "Arma tu escrito de tutela con los requisitos del Decreto 2591 de 1991 y descárgalo en PDF.",
    ruta: "/herramientas/accion-de-tutela",
  },
  arrendamiento: {
    titulo: "Contrato de arrendamiento 2026 | Gratis",
    descripcion:
      "Genera tu contrato de arrendamiento de vivienda urbana según la Ley 820 de 2003 en PDF.",
    ruta: "/herramientas/contrato-de-arrendamiento",
  },
} as const;

export function seoHerramienta(clave: keyof typeof HERRAMIENTAS_SEO): SeoPagina {
  const h = HERRAMIENTAS_SEO[clave];
  return { ...h, tipo: "website", imagen: OG.herramientas };
}

/* ── Constructores para rutas dinámicas ───────────────────────────── */

export function seoPilar(p: { slug: string; area: string }): SeoPagina {
  return {
    titulo: tituloSeo(`Abogados ${p.area} en Colombia`),
    descripcion: recortar(
      `¿Buscas abogado ${p.area} en Colombia? Cuéntanos tu caso y te conectamos con un especialista.`,
      120,
    ),
    ruta: `/areas/${p.slug}`,
    tipo: "website",
    imagen: OG.areas,
  };
}

export function seoSubarea(d: {
  title: string;
  description: string;
  silo: string;
  subarea: string;
}): SeoPagina {
  return {
    titulo: recortar(d.title, 60),
    descripcion: recortar(d.description, 120),
    ruta: `/areas/${d.silo}/${d.subarea}`,
    tipo: "article",
    imagen: OG.areas,
  };
}

export function seoGuia(g: { title: string; description: string; slug: string }): SeoPagina {
  return {
    titulo: recortar(g.title, 60),
    descripcion: recortar(g.description, 120),
    ruta: `/guias/${g.slug}`,
    tipo: "article",
    imagen: OG.guias,
  };
}

export function seoAbogado(a: {
  slug: string;
  nombre: string;
  areas: string[];
  ciudad: string;
  tarjeta: string;
  aniosExperiencia: number;
}): SeoPagina {
  const area = (AREAS_ABOGADO[a.areas[0] ?? ""] ?? "derecho").toLowerCase();
  return {
    titulo: recortar(`${a.nombre}, abogado de ${area} en ${a.ciudad}`, 60),
    descripcion: recortar(
      `Perfil de ${a.nombre}, T.P. ${a.tarjeta}, con ${a.aniosExperiencia} años de ejercicio en ${a.ciudad}.`,
      120,
    ),
    ruta: `/abogados/${a.slug}`,
    tipo: "profile",
    imagen: OG.abogados,
  };
}

/* ── Inventario completo ──────────────────────────────────────────── */

export function inventarioSeo(): EntradaSeo[] {
  const lista: EntradaSeo[] = Object.values(PAGINAS);

  for (const clave of Object.keys(HERRAMIENTAS_SEO) as (keyof typeof HERRAMIENTAS_SEO)[]) {
    lista.push({
      ...seoHerramienta(clave),
      grupo: "herramientas",
      prioridad: 0.9,
      lastmod: ULTIMA_REVISION,
      schema: true,
    });
  }

  for (const p of PILARES) {
    lista.push({
      ...seoPilar(p),
      grupo: "areas",
      prioridad: 0.8,
      lastmod: ULTIMA_REVISION,
      schema: true,
    });
    for (const s of p.subareas) {
      const real = CONTENIDO_SUBAREAS[`${p.slug}/${s.slug}`];
      lista.push({
        ...seoSubarea({
          title: real?.title ?? s.titulo,
          description:
            real?.description ?? `${s.titulo} en Colombia: qué dice la ley y qué puedes hacer.`,
          silo: p.slug,
          subarea: s.slug,
        }),
        grupo: "subareas",
        prioridad: 0.7,
        lastmod: ULTIMA_REVISION,
        schema: true,
      });
    }
  }

  for (const g of todasLasGuias()) {
    const contenido = CONTENIDO_GUIAS[g.slug];
    lista.push({
      ...seoGuia({
        title: contenido?.title ?? g.titulo,
        // Sin contenido propio todavía: descripción derivada del título, nunca
        // el extracto genérico (produciría descripciones duplicadas).
        description:
          contenido?.description ?? `${g.titulo}: qué dice la ley, plazos y paso a paso en Colombia.`,
        slug: g.slug,
      }),
      grupo: "guias",
      prioridad: 0.7,
      lastmod: (contenido?.actualizada ?? ULTIMA_REVISION).slice(0, 10),
      schema: true,
    });
  }

  for (const a of ABOGADOS) {
    lista.push({
      ...seoAbogado(a),
      grupo: "abogados",
      prioridad: 0.6,
      lastmod: ULTIMA_REVISION,
      schema: true,
    });
  }

  return lista;
}

export function entradasSitemap(grupo: Grupo): EntradaSeo[] {
  return inventarioSeo().filter((e) => e.grupo === grupo && e.fueraDelSitemap !== true);
}
