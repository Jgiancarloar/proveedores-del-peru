
import Link from "next/link";
import {
  ArrowRight,
  Box,
  LockKeyhole,
  Mail,
} from "lucide-react";

export const metadata = {
  title: "Iniciar sesión | Proveedores del Perú",
  description:
    "Ingresa a tu cuenta de Proveedores del Perú y encuentra nuevas oportunidades de negocio.",
};

export default function LoginPage() {
  return (
    <main className="min-h-[70vh] bg-gray-50 px-4 py-12 sm:py-16">
      <div className="mx-auto grid max-w-5xl overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm md:grid-cols-2">
        {/* Panel informativo */}
        <section className="relative hidden flex-col justify-between overflow-hidden bg-orange-500 p-10 text-white md:flex">
          <div className="absolute -right-20 -top-20 size-64 rounded-full border-[40px] border-white/10" />
          <div className="absolute -bottom-24 -left-16 size-72 rounded-full border-[45px] border-white/10" />

          <div className="relative">
            <Link
              href="/"
              className="group mb-10 inline-flex items-center gap-3"
              aria-label="Proveedores del Perú, inicio"
            >
              <span className="flex size-11 items-center justify-center rounded-xl bg-white text-orange-500 shadow-sm transition-transform group-hover:-translate-y-0.5">
                <Box size={25} strokeWidth={1.8} />
              </span>

              <span className="text-xl font-bold tracking-tight text-white">
                Proveedores
                <span className="text-orange-100"> del Perú</span>
              </span>
            </Link>

            <h1 className="max-w-sm text-3xl font-bold leading-tight">
              Conecta con oportunidades para hacer crecer tu negocio.
            </h1>

            <p className="mt-4 max-w-sm leading-7 text-orange-50">
              Encuentra proveedores, descubre empresas y haz que más clientes
              conozcan tus servicios.
            </p>
          </div>

          <div className="relative mt-12 rounded-2xl border border-white/20 bg-white/10 p-5 backdrop-blur-sm">
            <p className="text-lg font-semibold">
              Tu próximo gran contacto puede estar aquí.
            </p>
            <p className="mt-2 text-sm text-orange-50">
              Conectando negocios en todo el Perú.
            </p>
          </div>
        </section>

        {/* Formulario de inicio de sesión */}
        <section className="p-6 sm:p-10 lg:p-12">
          <div className="mx-auto max-w-md">
            {/* Logo para móvil */}
            <Link
              href="/"
              className="group mb-8 inline-flex items-center gap-3 md:hidden"
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

            <div className="mb-8">
              <p className="text-sm font-semibold text-orange-600">
                BIENVENIDO DE NUEVO
              </p>

              <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900">
                Iniciar sesión
              </h2>

              <p className="mt-3 text-sm leading-6 text-gray-500">
                Ingresa tus datos para acceder a tu cuenta.
              </p>
            </div>

            <form className="space-y-5">
              {/* Correo electrónico */}
              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-medium text-gray-700"
                >
                  Correo electrónico
                </label>

                <div className="relative">
                  <Mail
                    size={19}
                    className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400"
                  />

                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    placeholder="tucorreo@empresa.com"
                    required
                    className="w-full rounded-xl border border-gray-200 bg-white py-3 pl-11 pr-4 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-orange-500 focus:ring-4 focus:ring-orange-500/10"
                  />
                </div>
              </div>

              {/* Contraseña */}
              <div>
                <div className="mb-2 flex items-center justify-between gap-3">
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Contraseña
                  </label>

                  <Link
                    href="/recuperar-contrasena"
                    className="text-sm font-medium text-orange-600 transition hover:text-orange-700"
                  >
                    ¿La olvidaste?
                  </Link>
                </div>

                <div className="relative">
                  <LockKeyhole
                    size={19}
                    className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400"
                  />

                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    placeholder="Ingresa tu contraseña"
                    required
                    className="w-full rounded-xl border border-gray-200 bg-white py-3 pl-11 pr-4 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-orange-500 focus:ring-4 focus:ring-orange-500/10"
                  />
                </div>
              </div>

              {/* Botón de acceso */}
              <button
                type="submit"
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-orange-500 px-5 py-3.5 text-sm font-semibold text-white transition hover:bg-orange-600 focus:outline-none focus:ring-4 focus:ring-orange-500/20"
              >
                Iniciar sesión
                <ArrowRight size={18} />
              </button>
            </form>

            {/* Registro */}
            <div className="my-7 flex items-center gap-4">
              <div className="h-px flex-1 bg-gray-200" />

              <span className="whitespace-nowrap text-xs text-gray-400">
                ¿Aún no tienes cuenta?
              </span>

              <div className="h-px flex-1 bg-gray-200" />
            </div>

            <Link
              href="/registro"
              className="flex w-full items-center justify-center rounded-xl border border-gray-200 px-5 py-3.5 text-sm font-semibold text-gray-700 transition hover:border-orange-300 hover:bg-orange-50 hover:text-orange-700"
            >
              Crear una cuenta
            </Link>

            <p className="mt-8 text-center text-xs leading-5 text-gray-400">
              Próximamente podrás gestionar tu cuenta y conectar con más
              oportunidades de negocio desde nuestra plataforma.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
