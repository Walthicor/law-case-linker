import { useEffect, useState } from "react";

/** Botón flotante para subir rápido: mazo de juez con flecha hacia arriba. */
export function BotonSubir() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 700);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const subir = () => {
    const reduce =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({ top: 0, behavior: reduce ? "auto" : "smooth" });
  };

  return (
    <button
      type="button"
      onClick={subir}
      aria-label="Volver al inicio de la página"
      title="Subir"
      className="fixed bottom-20 left-4 z-40 flex h-12 w-12 items-center justify-center rounded-full border border-linea bg-papel text-esmeralda shadow-none transition-all duration-200 hover:border-esmeralda hover:bg-esmeralda-claro md:bottom-6 md:left-6 btn-pulso"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(12px)",
        pointerEvents: visible ? "auto" : "none",
      }}
      aria-hidden={!visible}
    >
      <svg
        aria-hidden="true"
        viewBox="0 0 32 32"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.1"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-7 w-7"
      >
        {/* Bloque/base de madera del mazo */}
        <path
          d="M8 26.5h16a1.5 1.5 0 0 1 1.5 1.5v1.2a1.5 1.5 0 0 1-1.5 1.5H8a1.5 1.5 0 0 1-1.5-1.5V28a1.5 1.5 0 0 1 1.5-1.5z"
          stroke="#8B6F4E"
          fill="rgba(139,111,78,0.12)"
        />
        <path d="M9 28h14" stroke="#8B6F4E" strokeWidth="1" opacity="0.6" />

        {/* Mango */}
        <path d="M16 21.5v-7" stroke="currentColor" strokeWidth="2.5" />

        {/* Cabeza del mazo con bandas decorativas */}
        <rect
          x="7"
          y="5"
          width="18"
          height="8"
          rx="2"
          fill="currentColor"
          fillOpacity="0.12"
        />
        <path d="M7 8h18" stroke="currentColor" strokeWidth="1" opacity="0.5" />
        <path d="M7 11h18" stroke="currentColor" strokeWidth="1" opacity="0.5" />

        {/* Flecha hacia arriba integrada, centrada */}
        <path d="M16 16.5V11" stroke="currentColor" strokeWidth="2.5" />
        <path d="M12.8 13.5L16 10.3l3.2 3.2" stroke="currentColor" strokeWidth="2.5" />
      </svg>
    </button>
  );
}
