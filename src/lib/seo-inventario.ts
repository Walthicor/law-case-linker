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
    titulo: "Abogados en Colombia: encuentra tu abogado sin costo",
    descripcion:
      "Cuéntanos tu caso y te conectamos con un abogado verificado en tu ciudad. Laboral, familia, penal y más.",
    ruta: "/",
    tipo: "website",
    imagen: OG.social,
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
    titulo: "Red de abogados en Colombia | Asesorías Jurídicas",
    descripcion:
      "Así conformamos la red: cada abogado se verifica con su tarjeta profesional antes de recibir casos.",
    ruta: "/abogados",
    imagen: OG.abogados,
    grupo: "paginas",
    prioridad: 0.5,
    lastmod: "2026-10-16",
    schema: true,
    // Sin fichas publicadas todavía: no se indexa hasta tener abogados reales.
    robots: NOINDEX,
    fueraDelSitemap: true,
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
    schema: true,
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
  consultoriaSeguridad: {
    titulo: "Consultoría en seguridad: estudios de seguridad y PISCC",
    descripcion:
      "Estudios de seguridad, análisis de riesgos y Plan Integral de Seguridad (PISCC) para empresas y alcaldías.",
    ruta: "/consultoria-en-seguridad",
    imagen: "/imagenes/seguridad/og-consultoria-en-seguridad.jpg",
    grupo: "paginas",
    prioridad: 0.8,
    lastmod: "2026-10-16",
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
    schema: true,
  },
  tratamiento: {
    titulo: "Política de tratamiento de datos personales",
    descripcion:
      "Cómo tratamos tus datos según la Ley 1581 de 2012: finalidades, datos sensibles, derechos y plazos.",
    ruta: "/politica-de-tratamiento-de-datos",
    grupo: "paginas",
    prioridad: 0.4,
    lastmod: ULTIMA_REVISION,
    schema: true,
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
    titulo: "Liquidación laboral 2026: calcula tu liquidación gratis",
    descripcion:
      "Calcula cesantías, intereses, prima, vacaciones e indemnización según el Código del Trabajo.",
    ruta: "/herramientas/calculadora-liquidacion-laboral",
  },
  alimentos: {
    titulo: "Cuota alimentaria 2026: calcula cuánto es | Gratis",
    descripcion:
      "Estima la cuota de alimentos según ingresos, número de hijos y gastos acreditados. Sin registro.",
    ruta: "/herramientas/calculadora-cuota-alimentaria",
  },
  peticion: {
    titulo: "Derecho de petición: formato y modelo gratis 2026",
    descripcion:
      "Redacta tu derecho de petición con la estructura de la Ley 1755 de 2015 y descárgalo en PDF.",
    ruta: "/herramientas/derecho-de-peticion",
  },
  tutela: {
    titulo: "Acción de tutela: formato y modelo gratis 2026",
    descripcion:
      "Arma tu escrito de tutela con los requisitos del Decreto 2591 de 1991 y descárgalo en PDF.",
    ruta: "/herramientas/accion-de-tutela",
  },
  arrendamiento: {
    titulo: "Contrato de arrendamiento 2026: formato gratis en PDF",
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

/**
 * Palabra clave principal de cada área, elegida con el Planificador de palabras
 * clave de Google Ads (Colombia, oct 2026). Volumen mensual entre paréntesis.
 */
const SEO_PILARES: Record<string, { titulo: string; descripcion: string }> = {
  laboral: {
    titulo: "Abogado laboral en Colombia: consulta tu caso", // abogado laboral (1K–10K)
    descripcion: "Abogado laboral para despidos, liquidación, acoso laboral e indemnizaciones. Cuéntanos tu caso.",
  },
  "riesgos-laborales": {
    titulo: "Abogado de accidente laboral y ARL en Colombia", // accidente laboral (1K–10K)
    descripcion: "Accidente de trabajo, dictamen de la ARL o culpa patronal: te conectamos con un abogado especialista.",
  },
  familia: {
    titulo: "Abogado de familia en Colombia: divorcio y alimentos", // abogado de familia (1K–10K)
    descripcion: "Divorcio, cuota alimentaria, custodia y sucesiones. Te conectamos con un abogado de familia verificado.",
  },
  penal: {
    titulo: "Abogado penalista en Colombia: defensa y denuncias", // abogado penalista (1K–10K)
    descripcion: "Denuncias, citaciones de la Fiscalía y defensa penal. Te conectamos con un abogado penalista verificado.",
  },
  pensiones: {
    titulo: "Abogado de pensiones en Colombia | Colpensiones", // abogado de pensiones (100–1K)
    descripcion: "Pensión negada, historia laboral o traslado de régimen: te conectamos con un abogado de pensiones.",
  },
  salud: {
    titulo: "Abogado de salud y tutela contra la EPS en Colombia",
    descripcion: "Cirugías, medicamentos o incapacidades negadas por la EPS: te conectamos con un abogado de salud.",
  },
  civil: {
    titulo: "Abogado civil en Colombia: contratos y cobro de deudas", // abogado civil (100–1K)
    descripcion: "Incumplimiento de contratos, cobro de deudas y procesos ejecutivos. Te conectamos con un abogado civil.",
  },
  inmobiliario: {
    titulo: "Abogado inmobiliario en Colombia: arriendos y compra", // abogado inmobiliario (100–1K)
    descripcion: "Arrendamientos, restitución de inmueble y compraventa de vivienda. Te conectamos con un abogado.",
  },
  comercial: {
    titulo: "Abogado comercial y empresarial en Colombia", // abogado comercial (100–1K)
    descripcion: "Constitución de SAS, contratos comerciales y conflictos entre socios. Te conectamos con un abogado.",
  },
  consumidor: {
    titulo: "Abogado del consumidor: demanda ante la SIC", // demanda sic (1K–10K)
    descripcion: "Garantías, cláusulas abusivas y publicidad engañosa: cómo demandar ante la SIC con un abogado.",
  },
  insolvencia: {
    titulo: "Insolvencia de persona natural: abogado en Colombia", // insolvencia persona natural (100–1K)
    descripcion: "Deudas impagables, embargos y reportes en Datacrédito. Te conectamos con un abogado de insolvencia.",
  },
  administrativo: {
    titulo: "Abogado administrativo en Colombia | Demandas al Estado", // abogado administrativo (100–1K)
    descripcion: "Actos administrativos, reparación directa y derechos de petición. Te conectamos con un abogado.",
  },
  transito: {
    titulo: "Abogado de tránsito en Colombia: choques y comparendos", // abogado de transito (100–1K)
    descripcion: "Accidentes de tránsito, SOAT y comparendos. Te conectamos con un abogado de tránsito verificado.",
  },
  "propiedad-intelectual": {
    titulo: "Registro de marca en Colombia: abogado de marcas", // registro de marca (1K–10K)
    descripcion: "Registra tu marca ante la SIC o defiéndela si la copian. Te conectamos con un abogado de marcas.",
  },
  migratorio: {
    titulo: "Abogado migratorio en Colombia: visas y nacionalidad", // abogado migratorio (100–1K)
    descripcion: "Visas, cédula de extranjería y nacionalidad colombiana. Te conectamos con un abogado migratorio.",
  },
};

export function seoPilar(p: { slug: string; area: string }): SeoPagina {
  const propio = SEO_PILARES[p.slug];
  return {
    titulo: propio ? recortar(propio.titulo, 60) : tituloSeo(`Abogados ${p.area} en Colombia`),
    descripcion: recortar(
      propio?.descripcion ??
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
      // Guía aún en borrador: no se indexa hasta tener contenido propio.
      ...(contenido ? {} : { robots: NOINDEX, fueraDelSitemap: true }),
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
