import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Logo } from "./Logo";
import { MENU, PILARES } from "@/lib/navegacion";
import { cn } from "@/lib/utils";

const RUTAS_CON_HERO_OSCURO = ["/"];

export function Header() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const [scrolled, setScrolled] = useState(false);
  const [abierto, setAbierto] = useState(false);
  const [areasAbierto, setAreasAbierto] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setAbierto(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = abierto ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [abierto]);

  const sobreHero = RUTAS_CON_HERO_OSCURO.includes(pathname) && !scrolled;

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 h-18 transition-colors duration-[240ms]",
        sobreHero
          ? "border-b border-transparent bg-transparent"
          : "border-b border-linea bg-papel/90 backdrop-blur-md",
      )}
    >
      <div className="contenedor flex h-18 items-center justify-between gap-6">
        <Logo claro={sobreHero} />

        <nav className="hidden items-center gap-6 lg:flex" aria-label="Navegación principal">
          {MENU.map((item) =>
            "dropdown" in item && item.dropdown ? (
              <div
                key={item.titulo}
                className="relative"
                onMouseEnter={() => setAreasAbierto(true)}
                onMouseLeave={() => setAreasAbierto(false)}
              >
                <Link
                  to={item.to}
                  className={cn(
                    "flex items-center gap-1 py-2 text-sm font-medium transition-colors",
                    sobreHero ? "text-papel/90 hover:text-papel" : "text-tinta hover:text-esmeralda",
                  )}
                  aria-expanded={areasAbierto}
                >
                  {item.titulo}
                  <ChevronDown className="h-4 w-4" aria-hidden="true" />
                </Link>
                {areasAbierto && (
                  <div className="absolute left-1/2 top-full w-[520px] -translate-x-1/2 pt-2">
                    <ul className="grid grid-cols-2 gap-x-6 gap-y-1 rounded-[6px] border border-linea bg-papel p-4">
                      {PILARES.map((p) => (
                        <li key={p.titulo}>
                          <Link
                            to={p.slug}
                            className="block rounded-[6px] px-2 py-1.5 text-sm text-tinta transition-colors hover:bg-esmeralda-claro hover:text-esmeralda"
                          >
                            {p.titulo}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={item.titulo}
                to={item.to}
                className={cn(
                  "py-2 text-sm font-medium transition-colors",
                  sobreHero ? "text-papel/90 hover:text-papel" : "text-tinta hover:text-esmeralda",
                )}
                activeProps={{ className: "font-semibold" }}
              >
                {item.titulo}
              </Link>
            ),
          )}
        </nav>

        <div className="hidden items-center gap-5 md:flex">
          <Link
            to="/unete"
            className={cn(
              "text-sm font-medium transition-colors",
              sobreHero ? "text-papel/80 hover:text-papel" : "text-tinta-suave hover:text-esmeralda",
            )}
          >
            Soy abogado
          </Link>
          <Link to="/iniciar-caso" className="btn-primario text-sm">
            Contar mi caso
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setAbierto(true)}
          aria-label="Abrir menú"
          className={cn(
            "flex h-10 w-10 items-center justify-center rounded-[6px] border md:hidden",
            sobreHero ? "border-papel/40 text-papel" : "border-linea text-tinta",
          )}
        >
          <Menu className="h-5 w-5" aria-hidden="true" />
        </button>
      </div>

      {abierto && (
        <div className="fixed inset-0 z-50 flex flex-col bg-papel md:hidden">
          <div className="contenedor flex h-18 items-center justify-between border-b border-linea">
            <Logo />
            <button
              type="button"
              onClick={() => setAbierto(false)}
              aria-label="Cerrar menú"
              className="flex h-10 w-10 items-center justify-center rounded-[6px] border border-linea text-tinta"
            >
              <X className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>
          <nav className="contenedor flex-1 overflow-y-auto py-6" aria-label="Navegación móvil">
            <ul className="flex flex-col">
              {MENU.map((item) => (
                <li key={item.titulo} className="border-b border-linea">
                  <Link
                    to={item.to}
                    className="block py-4 font-display text-xl font-semibold text-tinta"
                  >
                    {item.titulo}
                  </Link>
                </li>
              ))}
              <li className="border-b border-linea">
                <Link to="/unete" className="block py-4 text-base font-medium text-tinta-suave">
                  Soy abogado
                </Link>
              </li>
            </ul>
            <Link to="/iniciar-caso" className="btn-primario mt-8 w-full">
              Contar mi caso
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
