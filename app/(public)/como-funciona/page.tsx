
import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  Building2,
  CheckCircle2,
  ClipboardList,
  Compass,
  MapPin,
  Search,
  ShieldCheck,
  Store,
  Users,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Cómo funciona",
  description:
    "Descubre cómo encontrar proveedores de productos y servicios en Perú y cómo tu empresa puede formar parte de nuestro directorio.",
};

const buyerSteps = [
  {
    number: "01",
    icon: Search,
    title: "Encuentra lo que necesitas",
    description:
      "Explora nuestro directorio y busca empresas por nombre, categoría o ubicación.",
  },
  {
    number: "02",
    icon: Building2,
    title: "Conoce a los proveedores",
    description:
      "Revisa los perfiles de las empresas, sus productos, servicios, información y datos de contacto.",
  },
  {
    number: "03",
    icon: MessageCircleIcon,
    title: "Contacta directamente",
    description:
      "Comunícate con el proveedor para consultar disponibilidad, solicitar información o coordinar una compra.",
  },
];

const providerSteps = [
  {
    number: "01",
    icon: Store,
    title: "Forma parte del directorio",
    description:
      "Tu empresa podrá contar con un perfil para presentar su actividad y ayudar a los clientes a encontrarte.",
  },
  {
    number: "02",
    icon: ClipboardList,
    title: "Muestra lo que ofreces",
    description:
      "Presenta tus productos y servicios para que los interesados conozcan mejor tu oferta.",
  },
  {
    number: "03",
    icon: Users,
    title: "Conecta con potenciales clientes",
    description:
      "Los usuarios podrán encontrar tu empresa y comunicarse contigo a través de los datos de contacto publicados.",
  },
];

function MessageCircleIcon({ size = 24 }: { size?: number }) {
  return <Compass size={size} />;
}

export default function HowItWorksPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-gray-100 bg-orange-50/60">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-orange-100 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-orange-600">
              <span className="size-2 rounded-full bg-orange-500" />
              Cómo funciona
            </span>

            <h1 className="mt-6 text-3xl font-semibold tracking-tight text-gray-950 sm:text-5xl sm:leading-tight">
              Conecta con los proveedores que necesitas
            </h1>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-gray-600 sm:text-lg sm:leading-8">
              Un directorio para descubrir empresas, encontrar productos
              y servicios y conectar directamente con proveedores de
              todo el Perú.
            </p>

            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Link
                href="#clientes"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-orange-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-orange-600"
              >
                Busco un proveedor
                <ArrowRight size={17} />
              </Link>

              <Link
                href="#proveedores"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-gray-200 bg-white px-6 py-3 text-sm font-semibold text-gray-700 transition hover:border-orange-200 hover:text-orange-600"
              >
                Soy proveedor
                <ArrowRight size={17} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Proceso para clientes */}
      <section
        id="clientes"
        className="scroll-mt-24 px-4 py-16 sm:px-6 sm:py-20 lg:px-8"
      >
        <div className="mx-auto max-w-6xl">
          <div className="max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-[0.16em] text-orange-600">
              Para quienes buscan
            </span>

            <h2 className="mt-3 text-2xl font-semibold tracking-tight text-gray-950 sm:text-3xl">
              Encuentra, conoce y contacta
            </h2>

            <p className="mt-4 text-sm leading-7 text-gray-500 sm:text-base">
              Encuentra empresas según tus necesidades y comunícate
              directamente con ellas, sin complicaciones.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-3">
            {buyerSteps.map((step) => {
              const Icon = step.icon;

              return (
                <article
                  key={step.number}
                  className="rounded-2xl border border-gray-200 bg-white p-6 transition hover:border-orange-200 hover:shadow-lg hover:shadow-orange-950/[0.03] sm:p-7"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex size-12 items-center justify-center rounded-xl bg-orange-50 text-orange-600">
                      <Icon size={23} strokeWidth={1.7} />
                    </div>

                    <span className="text-sm font-semibold tabular-nums text-gray-300">
                      {step.number}
                    </span>
                  </div>

                  <h3 className="mt-6 text-lg font-semibold text-gray-950">
                    {step.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-gray-500">
                    {step.description}
                  </p>
                </article>
              );
            })}
          </div>

          <div className="mt-8">
            <Link
              href="/empresas"
              className="inline-flex items-center gap-2 text-sm font-semibold text-orange-600 transition hover:text-orange-700"
            >
              Explorar directorio de empresas
              <ArrowRight size={17} />
            </Link>
          </div>
        </div>
      </section>

      {/* Proceso para proveedores */}
      <section
        id="proveedores"
        className="scroll-mt-24 border-y border-gray-100 bg-gray-50/70 px-4 py-16 sm:px-6 sm:py-20 lg:px-8"
      >
        <div className="mx-auto max-w-6xl">
          <div className="max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-[0.16em] text-orange-600">
              Para empresas y profesionales
            </span>

            <h2 className="mt-3 text-2xl font-semibold tracking-tight text-gray-950 sm:text-3xl">
              Haz que más personas conozcan tu negocio
            </h2>

            <p className="mt-4 text-sm leading-7 text-gray-500 sm:text-base">
              Presenta tu empresa en un espacio donde los usuarios
              buscan proveedores de productos y servicios.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-3">
            {providerSteps.map((step) => {
              const Icon = step.icon;

              return (
                <article
                  key={step.number}
                  className="rounded-2xl border border-gray-200 bg-white p-6 transition hover:border-orange-200 hover:shadow-lg hover:shadow-orange-950/[0.03] sm:p-7"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex size-12 items-center justify-center rounded-xl bg-orange-50 text-orange-600">
                      <Icon size={23} strokeWidth={1.7} />
                    </div>

                    <span className="text-sm font-semibold tabular-nums text-gray-300">
                      {step.number}
                    </span>
                  </div>

                  <h3 className="mt-6 text-lg font-semibold text-gray-950">
                    {step.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-gray-500">
                    {step.description}
                  </p>
                </article>
              );
            })}
          </div>

          {/* Visibilidad */}
          <div className="mt-8 flex flex-col gap-4 rounded-2xl border border-orange-100 bg-orange-50/70 p-5 sm:flex-row sm:items-start sm:p-6">
            <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-white text-orange-600">
              <BadgeCheck size={23} />
            </div>

            <div>
              <h3 className="font-semibold text-gray-950">
                Más visibilidad para tu empresa
              </h3>

              <p className="mt-2 text-sm leading-6 text-gray-600">
                Los proveedores también podrán acceder a opciones de
                patrocinio para destacar su presencia en el directorio,
                de acuerdo con las condiciones de la plataforma.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Principios de la plataforma */}
      <section className="px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <div className="text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.16em] text-orange-600">
              Nuestra propuesta
            </span>

            <h2 className="mt-3 text-2xl font-semibold tracking-tight text-gray-950 sm:text-3xl">
              Un directorio pensado para conectar
            </h2>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
            <div className="flex items-start gap-3 rounded-xl border border-gray-100 p-5">
              <Search className="mt-0.5 size-5 shrink-0 text-orange-600" />

              <div>
                <h3 className="text-sm font-semibold text-gray-900">
                  Fácil de explorar
                </h3>
                <p className="mt-1 text-sm leading-6 text-gray-500">
                  Busca proveedores por nombre, categoría y ubicación.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 rounded-xl border border-gray-100 p-5">
              <ShieldCheck className="mt-0.5 size-5 shrink-0 text-orange-600" />

              <div>
                <h3 className="text-sm font-semibold text-gray-900">
                  Información visible
                </h3>
                <p className="mt-1 text-sm leading-6 text-gray-500">
                  Consulta los perfiles y la información publicada
                  por cada proveedor.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 rounded-xl border border-gray-100 p-5">
              <MapPin className="mt-0.5 size-5 shrink-0 text-orange-600" />

              <div>
                <h3 className="text-sm font-semibold text-gray-900">
                  Alcance nacional
                </h3>
                <p className="mt-1 text-sm leading-6 text-gray-500">
                  Descubre empresas y profesionales de distintas
                  regiones del Perú.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section className="px-4 pb-16 sm:px-6 sm:pb-20 lg:px-8">
        <div className="mx-auto max-w-5xl overflow-hidden rounded-2xl bg-gray-950 px-6 py-10 sm:px-10 sm:py-12">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div className="max-w-xl">
              <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                Tu próximo proveedor puede estar aquí
              </h2>

              <p className="mt-3 text-sm leading-6 text-gray-300 sm:text-base">
                Explora el directorio y encuentra empresas que
                puedan ayudarte con lo que necesitas.
              </p>
            </div>

            <Link
              href="/empresas"
              className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-orange-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-orange-600"
            >
              Explorar proveedores
              <ArrowRight size={17} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
