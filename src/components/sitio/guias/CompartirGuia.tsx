import { useState } from "react";
import { Link2, Mail, MessageCircle } from "lucide-react";

const BASE = "https://asesoriasjuridicas.co";

/**
 * Compartir. WhatsApp primero: es el canal dominante en Colombia.
 * La URL se arma con la ruta canónica (determinista en servidor y cliente).
 */
export function CompartirGuia({ titulo, ruta }: { titulo: string; ruta: string }) {
  const [copiado, setCopiado] = useState(false);
  const url = BASE + ruta;

  const copiar = async () => {
    try {
      await navigator.clipboard.writeText(url);
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
