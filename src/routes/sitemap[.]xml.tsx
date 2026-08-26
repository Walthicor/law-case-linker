import { createFileRoute } from "@tanstack/react-router";
import { respuestaXml, sitemapIndice } from "@/lib/sitemap";

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: () => respuestaXml(sitemapIndice()),
    },
  },
});
