import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { BotonWhatsApp } from "./BotonWhatsApp";

const RUTAS_EXCLUIDAS = ["/iniciar-caso", "/gracias"];

export function BarraCaptacion() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > window.innerHeight * 0.7);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (RUTAS_EXCLUIDAS.includes(pathname)) return null;

  return (
    <>
      {/* Móvil */}
      <div
        className="fixed inset-x-0 bottom-0 z-40 flex h-16 items-center gap-3 bg-tinta px-4 transition-transform duration-[240ms] md:hidden"
        style={{ transform: visible ? "translateY(0)" : "translateY(100%)" }}
        aria-hidden={!visible}
      >
        <BotonWhatsApp />
        <Link to="/iniciar-caso" className="btn-primario btn-pulso flex-1 py-3.5">
          Contar mi caso
        </Link>
      </div>

      {/* Escritorio */}
      <div
        className="fixed bottom-6 right-6 z-40 hidden items-center gap-3 rounded-full border border-linea bg-papel p-2 pl-5 transition-all duration-[240ms] md:flex"
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(12px)",
          pointerEvents: visible ? "auto" : "none",
        }}
        aria-hidden={!visible}
      >
        <span className="text-sm font-medium text-tinta">¿Dudas? Escríbenos</span>
        <BotonWhatsApp />
      </div>
    </>
  );
}
