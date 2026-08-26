import { useEffect, useState } from "react";
import { Link2, Mail, MessageCircle } from "lucide-react";

/** Compartir. WhatsApp primero: es el canal dominante en Colombia. */
export function CompartirGuia({ titulo }: { titulo: string }) {
  const [copiado, setCopiado] = useState(false);
  const [url, setUrl] = useState("");

  // Se lee después de hidratar para no romper el HTML del servidor.
  useEffect(() => setUrl(window.location.href), []);


  const copiar = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopiado(true);
      setTimeout(() => setCopiado(false), 2000);
    } catch {
      setCopiado(false);
    }
  };

  return (
    <div>
      <p className="eyebrow">Compartir</p>
      <div className="mt-3 flex flex-wrap gap-2">
        <a
          href={`https://wa.me/?text=${encodeURIComponent(`${titulo} ${url}`)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-[4px] border border-linea px-3 py-2 text-[0.85rem] text-tinta transition-colors hover:border-esmeralda hover:text-esmeralda"
        >
          <MessageCircle className="h-4 w-4" strokeWidth={1.7} aria-hidden="true" />
          WhatsApp
        </a>
        <a
          href={`mailto:?subject=${encodeURIComponent(titulo)}&body=${encodeURIComponent(url)}`}
          className="inline-flex items-center gap-2 rounded-[4px] border border-linea px-3 py-2 text-[0.85rem] text-tinta transition-colors hover:border-esmeralda hover:text-esmeralda"
        >
          <Mail className="h-4 w-4" strokeWidth={1.7} aria-hidden="true" />
          Correo
        </a>
        <button
          type="button"
          onClick={copiar}
          className="inline-flex items-center gap-2 rounded-[4px] border border-linea px-3 py-2 text-[0.85rem] text-tinta transition-colors hover:border-esmeralda hover:text-esmeralda"
        >
          <Link2 className="h-4 w-4" strokeWidth={1.7} aria-hidden="true" />
          {copiado ? "Copiado" : "Copiar enlace"}
        </button>
      </div>
    </div>
  );
}
