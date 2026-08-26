import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, Linkedin } from "lucide-react";

const AREAS = [
  "Derecho laboral",
  "Derecho de familia",
  "Accidentes y responsabilidad",
  "Derecho penal",
  "Pensiones y seguridad social",
  "Salud y EPS",
];

const RECURSOS = [
  { titulo: "Herramientas", to: "/herramientas" },
  { titulo: "Guías legales", to: "/guias" },
  { titulo: "Cobertura", to: "/cobertura" },
  { titulo: "Cómo funciona", to: "/como-funciona" },
] as const;

const LEGAL = [
  { titulo: "Términos y condiciones", to: "/terminos-y-condiciones" },
  { titulo: "Política de privacidad", to: "/politica-de-privacidad" },
  { titulo: "Tratamiento de datos", to: "/politica-de-tratamiento-de-datos" },
  { titulo: "Política de cookies", to: "/politica-de-cookies" },
  { titulo: "Contacto", to: "/contacto" },
] as const;

export function Footer() {
  return (
    <footer className="bg-tinta text-papel">
      <div className="contenedor grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <Link to="/" className="inline-flex" aria-label="Asesorías Jurídicas Colombia">
            <img
              src={logoClaro.url}
              alt="Asesorías Jurídicas Colombia"
              width={151}
              height={100}
              className="h-[100px] w-auto"
            />
          </Link>
          <p className="mt-6 max-w-xs text-sm leading-relaxed text-papel/70">
            Cuéntanos tu problema jurídico y lo perfilamos para conectarte con un abogado
            especialista verificado. Sin costo y confidencial.
          </p>
          <div className="mt-6 flex gap-3">
            {[
              { Icono: Instagram, nombre: "Instagram" },
              { Icono: Facebook, nombre: "Facebook" },
              { Icono: Linkedin, nombre: "LinkedIn" },
            ].map(({ Icono, nombre }) => (
              <a
                key={nombre}
                href="#"
                aria-label={nombre}
                className="flex h-9 w-9 items-center justify-center rounded-[6px] border border-papel/25 text-papel/80 transition-colors hover:border-papel hover:text-papel"
              >
                <Icono className="h-4 w-4" aria-hidden="true" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h2 className="eyebrow text-papel/60">Áreas</h2>
          <ul className="mt-5 space-y-3">
            {AREAS.map((a) => (
              <li key={a}>
                <Link to="/areas" className="text-sm text-papel/80 transition-colors hover:text-papel">
                  {a}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="eyebrow text-papel/60">Recursos</h2>
          <ul className="mt-5 space-y-3">
            {RECURSOS.map((r) => (
              <li key={r.to}>
                <Link to={r.to} className="text-sm text-papel/80 transition-colors hover:text-papel">
                  {r.titulo}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="eyebrow text-papel/60">Legal</h2>
          <ul className="mt-5 space-y-3">
            {LEGAL.map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="text-sm text-papel/80 transition-colors hover:text-papel">
                  {l.titulo}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-papel/15">
        <div className="contenedor py-6">
          <p className="text-[0.8rem] leading-relaxed text-papel/60">
            © 2026 Asesorías Jurídicas Colombia. Plataforma de conexión — no prestamos servicios
            jurídicos ni representamos a nadie ante autoridades.
          </p>
        </div>
      </div>
    </footer>
  );
}
