
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Box,
  Building2,
  Compass,
  MapPin,
  Search,
} from "lucide-react";

const exploreLinks = [
  { label: "Inicio", href: "/" },
  { label: "Directorio de empresas", href: "/empresas" },
  { label: "Categorías", href: "/categorias" },
  { label: "Cómo funciona", href: "/como-funciona" },
];

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white">
      {/* Contenido principal */}
      <div className="mx-auto max-w-[1240px] px-4 pb-8 pt-12 sm:px-6 sm:pb-10 sm:pt-16 lg:px-8">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-[1.5fr_0.8fr_1fr] lg:gap-16">
          {/* Marca y propuesta de valor */}
          <div className="max-w-md">
            <Link
              href="/"
              className="group inline-flex items-center gap-3"
              aria-label="Proveedores del Perú, inicio"
            >
              <span className="flex size-11 items-center justify-center rounded-xl bg-orange-500 text-white shadow-sm shadow-orange-500/20 transition-transform group-hover:-translate-y-0.5">
                <Box size={25} strokeWidth={1.8} />
              </span>

              <span className="text-xl font-bold tracking-tight text-gray-950">
                Proveedores
                <span className="text-orange-500"> del Perú</span>
              </span>
            </Link>

            <p className="mt-5 text-sm leading-7 text-gray-500">
              El punto de encuentro entre quienes buscan soluciones y
              quienes las ofrecen. Descubre empresas, productos y
              servicios en todo el Perú.
            </p>

            <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-gray-100 bg-gray-50 px-3 py-2">
              <MapPin size={15} className="text-orange-500" />
              <span className="text-xs font-medium text-gray-600">
                Conectando proveedores en el Perú
              </span>
            </div>
          </div>

          {/* Navegación */}
          <div>
            <h2 className="text-sm font-semibold text-gray-950">
              Explora
            </h2>

            <nav
              aria-label="Explorar el sitio"
              className="mt-5 flex flex-col items-start gap-3.5"
            >
              {exploreLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="group inline-flex items-center gap-1.5 text-sm text-gray-500 transition-colors hover:text-orange-600"
                >
                  {link.label}
                  <ArrowUpRight
                    size={14}
                    className="opacity-0 transition-opacity group-hover:opacity-100"
                  />
                </Link>
              ))}
            </nav>
          </div>

          {/* Llamado a la acción */}
          <div>
            <div className="flex items-center gap-2">
              <div className="flex size-9 items-center justify-center rounded-lg bg-orange-50 text-orange-600">
                <Building2 size={19} />
              </div>

              <h2 className="text-sm font-semibold text-gray-950">
                Encuentra tu próximo proveedor
              </h2>
            </div>

            <p className="mt-4 text-sm leading-6 text-gray-500">
              Explora el directorio y encuentra empresas que se
              adapten a lo que tu negocio necesita.
            </p>

            <Link
              href="/empresas"
              className="mt-5 inline-flex items-center gap-2 rounded-xl bg-orange-500 px-4 py-3 text-sm font-semibold text-white transition-all hover:bg-orange-600 hover:shadow-md hover:shadow-orange-500/15"
            >
              Explorar empresas
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>

        {/* Separador */}
        <div className="my-10 border-t border-gray-100 sm:my-12" />

        {/* Mensaje de marca */}
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-start gap-3">
            <div className="mt-0.5 flex size-9 shrink-0 items-center justify-center rounded-lg bg-gray-50 text-gray-500">
              <Compass size={19} />
            </div>

            <div>
              <p className="text-sm font-semibold text-gray-800">
                Todo empieza encontrando al proveedor correcto.
              </p>

              <p className="mt-1 text-xs leading-5 text-gray-500">
                Una forma más sencilla de descubrir negocios y soluciones.
              </p>
            </div>
          </div>

          <Link
            href="/categorias"
            className="inline-flex shrink-0 items-center gap-2 text-sm font-semibold text-orange-600 transition-colors hover:text-orange-700"
          >
            Explorar categorías
            <Search size={16} />
          </Link>
        </div>

        {/* Copyright */}
        <div className="mt-8 flex flex-col gap-3 border-t border-gray-100 pt-5 sm:mt-10 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs leading-5 text-gray-400">
            © {new Date().getFullYear()} Proveedores del Perú.
            Todos los derechos reservados.
          </p>

          <p className="text-xs text-gray-400">
            Hecho para conectar negocios en el Perú.
          </p>
        </div>
      </div>
    </footer>
  );
}
