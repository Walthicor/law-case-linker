import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { SITIO } from "@/lib/seo";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  useRouterState,
  HeadContent,
  Scripts,
  type ErrorComponentProps,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { cn } from "@/lib/utils";
import { Header } from "@/components/sitio/Header";
import { Footer } from "@/components/sitio/Footer";
import { BarraCaptacion } from "@/components/sitio/BarraCaptacion";
import { BotonSubir } from "@/components/sitio/BotonSubir";
import { BannerCookies } from "@/components/sitio/BannerCookies";
import { Analitica } from "@/components/sitio/Analitica";
import { areaServedSchema } from "@/lib/cobertura";

/** Verificación de Google Search Console por meta tag. */
const VERIFICACION_GSC =
  (import.meta.env["VITE_GSC_VERIFICACION"] as string | undefined) ||
  "KBEVJB3-YzXP3_n--KfeU6Nx7B4tiiOrXExfC8JchhE";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: ErrorComponentProps) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "author", content: "MARDIGITAL SAS" },
      { name: "theme-color", content: "#FBFAF7" },
      ...(VERIFICACION_GSC
        ? [{ name: "google-site-verification", content: VERIFICACION_GSC }]
        : []),
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/favicon.png", type: "image/png" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      // Fraunces 600 es la fuente del H1 (el LCP): se precarga el archivo.
      {
        rel: "preload",
        as: "font",
        type: "font/woff2",
        href: "https://fonts.gstatic.com/s/fraunces/v31/6NUh8FyLNQOQZAnv9ZwNjucMHVn85Ni7emAe9lKqZTnbB-gzTK0K1ChJdt3Fa9U.woff2",
        crossOrigin: "anonymous",
      },
      {
        rel: "preload",
        as: "style",
        href: "https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,600&family=Public+Sans:wght@400;500;600&family=JetBrains+Mono:wght@500&display=swap",
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,600&family=Public+Sans:wght@400;500;600&family=JetBrains+Mono:wght@500&display=swap",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify([
          {
            "@context": "https://schema.org",
            "@type": "Organization",
            "@id": `${SITIO}/#organizacion`,
            name: "Asesorías Jurídicas Colombia",
            legalName: "MARDIGITAL SAS",
            url: `${SITIO}/`,
            logo: `${SITIO}/favicon.png`,
            description:
              "Conectamos personas y empresas con abogados verificados en 19 ciudades de Colombia, en las 13 áreas del derecho.",
            sameAs: [
              "https://www.linkedin.com/company/asesorias-juridicas-colombia",
              "https://www.facebook.com/asesoriasjuridicascolombia",
            ],
            contactPoint: [
              {
                "@type": "ContactPoint",
                contactType: "customer support",
                email: "datos@asesoriasjuridicas.com",
                availableLanguage: ["es"],
                areaServed: "CO",
              },
            ],
            areaServed: areaServedSchema(),
          },
          {
            "@context": "https://schema.org",
            "@type": "WebSite",
            "@id": `${SITIO}/#sitio`,
            url: `${SITIO}/`,
            name: "Asesorías Jurídicas Colombia",
            inLanguage: "es-CO",
            publisher: { "@id": `${SITIO}/#organizacion` },
            potentialAction: {
              "@type": "SearchAction",
              target: {
                "@type": "EntryPoint",
                urlTemplate: `${SITIO}/guias?q={search_term_string}`,
              },
              "query-input": "required name=search_term_string",
            },
          },
        ]),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="es-CO">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  // El formulario de caso y la confirmación no tienen salidas: sin navegación, sin barra ni botones flotantes.
  const sinCromo = pathname === "/iniciar-caso" || pathname === "/gracias";
  // El home tiene hero oscuro a sangre bajo el header transparente; el resto necesita
  // dejar libre la altura del header fijo (h-18 = 4.5rem) para que no tape el contenido.
  const bajoHeader = !sinCromo && pathname !== "/";

  return (
    <QueryClientProvider client={queryClient}>
      <a href="#contenido" className="saltar-al-contenido">
        Saltar al contenido
      </a>
      {!sinCromo && <Header />}
      <main
        id="contenido"
        className={cn(
          "min-h-screen",
          !sinCromo && "pb-16 md:pb-0",
          bajoHeader && "pt-18",
        )}
      >
        {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
        <Outlet />
      </main>
      {!sinCromo && (
        <>
          <Footer />
          <BarraCaptacion />
          <BotonSubir />
        </>
      )}
      <BannerCookies />
      <Analitica />
    </QueryClientProvider>
  );
}
