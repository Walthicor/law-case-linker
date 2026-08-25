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
      className="fixed bottom-20 left-4 z-40 flex h-12 w-12 items-center justify-center rounded-full border border-linea bg-papel text-esmeralda shadow-none transition-all duration-200 hover:border-esmeralda hover:bg-esmeralda-claro md:bottom-6 md:left-6"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(12px)",
        pointerEvents: visible ? "auto" : "none",
      }}
      aria-hidden={!visible}
    >
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-6 w-6"
      >
        {/* Mazo de juez */}
        <path d="M4.5 19.5h8" />
        <path d="M6.2 12.6l3.6 3.6" />
        <path d="M9.6 9.2l1.8-1.8 5 5-1.8 1.8z" />
        <path d="M13.1 5.9l2.2-2.2M17.9 10.7l2.2-2.2" />
        {/* Flecha hacia arriba */}
        <path d="M19 20v-5.6M16.7 16.6L19 14.2l2.3 2.4" />
      </svg>
    </button>
  );
}
