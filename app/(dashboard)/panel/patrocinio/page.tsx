
import Link from "next/link";
import { ArrowLeft, BadgeCheck, Crown, Eye, TrendingUp } from "lucide-react";

export const metadata = { title: "Patrocinio | Proveedores del Perú" };

const benefits = [
  { icon: TrendingUp, title: "Mayor visibilidad", description: "Opciones para destacar tu empresa en el directorio." },
  { icon: Eye, title: "Más exposición", description: "Facilita que los usuarios descubran tu perfil." },
  { icon: BadgeCheck, title: "Perfil completo", description: "Presenta claramente tus datos y servicios." },
];

export default function PatrocinioPage() {
  return (
    <div className="space-y-6">
      <Link href="/panel" className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-orange-600">
        <ArrowLeft size={17} /> Volver al panel
      </Link>

      <div>
        <p className="text-sm font-semibold text-orange-600">MÁS VISIBILIDAD</p>
        <h1 className="mt-2 text-2xl font-bold text-gray-950">Patrocinio</h1>
        <p className="mt-2 text-sm text-gray-500">
          Consulta las futuras opciones de promoción para tu empresa.
        </p>
      </div>

      <section className="overflow-hidden rounded-2xl bg-orange-500 p-6 text-white sm:p-9">
        <div className="flex size-12 items-center justify-center rounded-xl bg-white/15">
          <Crown size={27} />
        </div>
        <h2 className="mt-5 text-2xl font-bold">Haz que tu empresa destaque</h2>
        <p className="mt-3 max-w-xl text-sm leading-6 text-orange-50">
          Las posiciones patrocinadas permitirán destacar empresas en el directorio.
          Las tarifas y reglas de contratación se definirán antes de habilitar los pagos.
        </p>
        <span className="mt-6 inline-flex rounded-lg bg-white/15 px-4 py-2 text-sm font-semibold">
          Próximamente disponible
        </span>
      </section>

      <section className="grid gap-4 md:grid-cols-3">
        {benefits.map(({ icon: Icon, title, description }) => (
          <article key={title} className="rounded-2xl border border-gray-200 bg-white p-5">
            <Icon size={24} className="text-orange-500" />
            <h3 className="mt-4 font-bold text-gray-900">{title}</h3>
            <p className="mt-2 text-sm leading-6 text-gray-500">{description}</p>
          </article>
        ))}
      </section>
    </div>
  );
}
