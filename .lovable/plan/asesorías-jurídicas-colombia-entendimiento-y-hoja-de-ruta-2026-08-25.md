# Asesorías Jurídicas Colombia — entendimiento y hoja de ruta

Confirmado: no construyo nada todavía. Tú me pasas los prompts 01 a 24 uno por uno y yo ejecuto cada uno contra esta base compartida.

## Qué es el proyecto

Plataforma de captación y perfilamiento de casos jurídicos en Colombia (MARDIGITAL SAS). Capta por SEO y pauta, perfila el caso en un formulario de 3 pasos, lo califica 0–100 y lo entrega por correo. La clasificación y asignación al abogado la hace tu equipo fuera de la plataforma. Sin base de datos: el correo es el único registro.

Dos audiencias, sin mezclarse: el home habla al usuario con el problema, `/unete` habla al abogado. La única mezcla permitida es la sección final del home.

Barra de confianza sin cifras inventadas: tarjeta verificada, respuesta en 24 h hábiles, confidencialidad, sin costo. La tabla "lo que hacemos / lo que no hacemos" es a la vez conversión y blindaje legal.

## Arquitectura

Silos cerrados de cuatro niveles: pilar → subárea → herramienta → guías. Los enlaces circulan dentro del silo; el único cruce es pilar → pilar, máximo dos por página.

13 silos, ~130 páginas: home, `/iniciar-caso`, `/gracias`, `/areas` + 13 pilares + 60 subáreas, `/herramientas` + 5 herramientas, `/guias` + 33 guías, `/abogados` + perfiles, `/unete`, `/cobertura`, `/como-funciona`, `/contacto` y 4 legales.

URLs en minúscula, con guiones, sin tildes ni ñ, sin barra final, sin fechas. Canonical autorreferencial absoluto en todas.

Las 19 ciudades son un atributo, nunca una página: schema `areaServed`, pastillas en el home (etiquetas, no enlaces), `/cobertura`, campo del formulario con autocompletado DANE, mención contextual en cada pilar y filtro del directorio con `noindex`. Prohibido páginas por ciudad, ciudad × área, fichas GBP o direcciones por ciudad.

## Diseño

Concepto "el expediente": papel, tinta, sellos, radicados. Tokens papel / papel-hueso / tinta / tinta-suave / esmeralda / esmeralda-cl / esmeralda-lum / sello / sello-cl / linea, todos como variables semánticas del design system. El rojo `sello` solo para plazos y urgencia, nunca decorativo.

Tipografía: Fraunces (display), Public Sans (cuerpo), JetBrains Mono (radicados, cifras, artículos de ley), cargadas por `<link>` en el root. Contenedor 1200 px, lectura 680 px, escala de 8, radio 6 px, separación por borde de 1 px y casi sin sombras.

Cuatro efectos firmados: pulso (solo en 4 botones exactos), anillo (WhatsApp), balanza (par de botones del hero, con contrarrotación del texto), sello (envío del formulario, único momento maximalista, con `RADICADO` en mono).

Efectos de soporte solo con CSS + `IntersectionObserver`, sin librerías de animación. Prohibido parallax, contadores, partículas, gradientes animados, autotyping y carruseles automáticos. `prefers-reduced-motion` desactiva todo.

Video del hero: lo genero yo (macro de papel/tinta/sellos, movimiento lento, sin personas), lo comprimo con el pipeline ffmpeg indicado, poster WebP, y respeto todas las reglas de carga: nada en móvil, montaje tras `load` dentro de `requestIdleCallback`, sin video con reduced-motion, `saveData` o 2G, sin audio.

## Formulario, calificación y entrega

3 pasos, uno visible a la vez, 12 campos según la especificación, dos casillas de autorización separadas (Ley 1581 de 2012), descripción de 40–1000 caracteres con contador en mono y aviso de datos sensibles.

Calificación 0–100 con los pesos definidos (urgencia 30, estado 25, valor 25, documentos 10, calidad 10) y tiers A/B/C/D. Radicado `AJC-2026-XXXXX`, redirección a `/gracias?radicado=XXX`.

Correo: se construye ahora la lógica completa (validación, cálculo, radicado, formato de texto plano monoespaciado con asunto `[TIER A · 84] Área · Ciudad · Radicado`, enlace `wa.me`, e IP y fecha de las dos autorizaciones como prueba de habeas data). El envío real con Resend queda listo para conectar cuando tengas la clave API y el correo destino.

## SEO

Una página, una keyword, en cuatro lugares: H1, title, primeras 25 palabras y URL. Títulos ≤ 60 caracteres con la regla del sufijo condicional ` | Asesorías Jurídicas`; descripciones ≤ 120.

Herramientas gratis, sin registro y sin muro: son ~88.000 búsquedas/mes y el 60% del tráfico. El correo se pide una sola vez para el PDF, siempre con el escape "descárgalo sin dejar tu correo". La conversión vive en el bloque contextualizado debajo del resultado.

Schema por tipo de página según la tabla, nunca `AggregateRating`. Interlinking según la matriz, sin huérfanas, máximo 3 clics desde el home, anclas descriptivas.

Técnico: `noindex` en `/gracias`, filtros y legales salvo política de tratamiento; sitemap índice segmentado; LCP < 2,0 s móvil (el H1 es el LCP, texto puro); CLS < 0,05; INP < 200 ms; preload de Fraunces 600; contraste AA y un solo H1 por página.

## Puntos abiertos que necesito de ti

- Dominio definitivo (para canonicals, schema y sitemap).
- Clave de Resend y correo destino, cuando quieras activar el envío.
- WhatsApp, correo de contacto y NIT para footer, legales y schema.
- Los plazos de los 13 pilares están marcados como borradores: un abogado debe verificarlos y firmarlos antes de publicar.
- Nombre y tarjeta profesional del abogado que firma cada guía (requisito YMYL).

## Cómo trabajaremos

Ejecuto los prompts en orden, uno por mensaje, sin juntar tandas. Después de cada uno revisas el preview y seguimos. Yo mantengo la coherencia de tokens, silos, SEO e interlinking a lo largo de toda la construcción.
