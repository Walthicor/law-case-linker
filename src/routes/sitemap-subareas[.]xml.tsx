import { createFileRoute } from "@tanstack/react-router";
import { respuestaXml, sitemapDe } from "@/lib/sitemap";

export const Route = createFileRoute("/sitemap-subareas.xml")({
  server: {
    handlers: {
      GET: () => respuestaXml(sitemapDe("subareas")),
    },
  },
});
