
import Link from "next/link";
import { Box } from "lucide-react";

const footerLinks = [
  { label: "Inicio", href: "/" },
  { label: "Empresas", href: "/empresas" },
  { label: "Categorías", href: "/categorias" },
  { label: "Cómo funciona", href: "/como-funciona" },
];

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-gray-50">
      <div className="mx-auto max-w-[1240px] px-4 py-10 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
          {/* Marca */}
          <div className="max-w-sm">
            <Link
              href="/"
              className="inline-flex items-center gap-2"
              aria-label="Proveedores del Perú, inicio"
            >
              <Box
                className="size-7 text-orange-500"
                strokeWidth={1.8}
              />

              <span className="text-lg font-bold tracking-tight text-gray-950">
                Proveedores
                <span className="text-orange-500"> del Perú</span>
              </span>
            </Link>

            <p className="mt-3 text-sm leading-6 text-gray-500">
              Encuentra proveedores de productos y servicios en todo el Perú.
              Conectamos empresas con personas y negocios que necesitan sus
              soluciones.
            </p>
          </div>

          {/* Navegación */}
          <div>
            <h2 className="text-sm font-semibold text-gray-900">
              Explora
            </h2>

            <nav
              aria-label="Navegación del pie de página"
              className="mt-3 flex flex-col items-start gap-3"
            >
              {footerLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-gray-500 transition-colors hover:text-orange-600"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 border-t border-gray-200 pt-5">
          <p className="text-xs text-gray-400">
            © {new Date().getFullYear()} Proveedores del Perú. Todos los
            derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
