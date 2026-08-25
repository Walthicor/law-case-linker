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
        viewBox="0 0 40 40"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-7 w-7"
      >
        {/* Base de madera del mazo */}
        <path d="M10 32 h20 a2 2 0 0 1 2 2 v2 a2 2 0 0 1 -2 2 h-20 a2 2 0 0 1 -2 -2 v-2 a2 2 0 0 1 2 -2 z" stroke="#8B6F4E" fill="rgba(139,111,78,0.12)" />
        <path d="M12 34 h16" stroke="#8B6F4E" strokeWidth="1" opacity="0.6" />

        {/* Mango del mazo */}
        <path d="M18 24 v-9" stroke="currentColor" strokeWidth="2.6" />

        {/* Cabeza del mazo (forma clásica con bandas) */}
        <rect x="9" y="7" width="22" height="10" rx="3" fill="currentColor" fillOpacity="0.12" />
        <path d="M9 10 h22" stroke="currentColor" strokeWidth="1" opacity="0.5" />
        <path d="M9 14 h22" stroke="currentColor" strokeWidth="1" opacity="0.5" />

        {/* Flecha hacia arriba integrada */}
        <path d="M20 17 v-5" stroke="currentColor" strokeWidth="2.6" />
        <path d="M16.5 14 L20 10.5 L23.5 14" stroke="currentColor" strokeWidth="2.6" />
      </svg>
    </button>
  );
}
