
import Link from "next/link";
import {
  ArrowRight,
  Box,
  Building2,
  LockKeyhole,
  Mail,
  UserRound,
} from "lucide-react";

export const metadata = {
  title: "Crear cuenta | Proveedores del Perú",
  description:
    "Crea tu cuenta en Proveedores del Perú y conecta con nuevas oportunidades de negocio.",
};

export default function RegistroPage() {
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
              Empieza a conectar con nuevas oportunidades.
            </h1>

            <p className="mt-4 max-w-sm leading-7 text-orange-50">
              Crea tu cuenta y descubre empresas, productos y servicios de
              todo el Perú desde un solo lugar.
            </p>
          </div>

          <div className="relative mt-12 rounded-2xl border border-white/20 bg-white/10 p-5 backdrop-blur-sm">
            <div className="flex items-center gap-3">
              <div className="flex size-11 items-center justify-center rounded-xl bg-white/15">
                <Building2 size={23} />
              </div>

              <div>
                <p className="font-semibold">
                  Una plataforma, muchas oportunidades.
                </p>
                <p className="mt-1 text-sm text-orange-50">
                  Conectando negocios en todo el Perú.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Formulario de registro */}
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

            <div className="mb-7">
              <p className="text-sm font-semibold text-orange-600">
                ÚNETE A NUESTRA COMUNIDAD
              </p>

              <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900">
                Crear una cuenta
              </h2>

              <p className="mt-3 text-sm leading-6 text-gray-500">
                Regístrate gratis y empieza a descubrir nuevas oportunidades.
              </p>
            </div>

            <form className="space-y-4">
              {/* Nombre completo */}
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-medium text-gray-700"
                >
                  Nombre completo
                </label>

                <div className="relative">
                  <UserRound
                    size={19}
                    className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400"
                  />

                  <input
                    id="name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    placeholder="Tu nombre y apellido"
                    required
                    className="w-full rounded-xl border border-gray-200 bg-white py-3 pl-11 pr-4 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-orange-500 focus:ring-4 focus:ring-orange-500/10"
                  />
                </div>
              </div>

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
                <label
                  htmlFor="password"
                  className="mb-2 block text-sm font-medium text-gray-700"
                >
                  Contraseña
                </label>

                <div className="relative">
                  <LockKeyhole
                    size={19}
                    className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400"
                  />

                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="new-password"
                    placeholder="Crea una contraseña"
                    minLength={8}
                    required
                    className="w-full rounded-xl border border-gray-200 bg-white py-3 pl-11 pr-4 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-orange-500 focus:ring-4 focus:ring-orange-500/10"
                  />
                </div>

                <p className="mt-2 text-xs text-gray-400">
                  Utiliza al menos 8 caracteres.
                </p>
              </div>

              {/* Confirmar contraseña */}
              <div>
                <label
                  htmlFor="confirmPassword"
                  className="mb-2 block text-sm font-medium text-gray-700"
                >
                  Confirmar contraseña
                </label>

                <div className="relative">
                  <LockKeyhole
                    size={19}
                    className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400"
                  />

                  <input
                    id="confirmPassword"
                    name="confirmPassword"
                    type="password"
                    autoComplete="new-password"
                    placeholder="Repite tu contraseña"
                    minLength={8}
                    required
                    className="w-full rounded-xl border border-gray-200 bg-white py-3 pl-11 pr-4 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-orange-500 focus:ring-4 focus:ring-orange-500/10"
                  />
                </div>
              </div>

              {/* Términos */}
              <label className="flex items-start gap-3 pt-1 text-sm leading-5 text-gray-600">
                <input
                  type="checkbox"
                  name="terms"
                  required
                  className="mt-1 size-4 shrink-0 rounded border-gray-300 accent-orange-500 focus:ring-orange-500"
                />

                <span>
                  Acepto los{" "}
                  <Link
                    href="/terminos"
                    className="font-medium text-orange-600 transition hover:text-orange-700"
                  >
                    términos y condiciones
                  </Link>{" "}
                  y la política de privacidad.
                </span>
              </label>

              {/* Crear cuenta */}
              <button
                type="submit"
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-orange-500 px-5 py-3.5 text-sm font-semibold text-white transition hover:bg-orange-600 focus:outline-none focus:ring-4 focus:ring-orange-500/20"
              >
                Crear mi cuenta
                <ArrowRight size={18} />
              </button>
            </form>

            {/* Acceso al login */}
            <p className="mt-7 text-center text-sm text-gray-500">
              ¿Ya tienes una cuenta?{" "}
              <Link
                href="/login"
                className="font-semibold text-orange-600 transition hover:text-orange-700"
              >
                Inicia sesión
              </Link>
            </p>

            <p className="mt-6 text-center text-xs leading-5 text-gray-400">
              Tu cuenta te permitirá acceder a las funciones de la plataforma
              que estén disponibles.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
