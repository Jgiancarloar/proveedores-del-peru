
import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  Building2,
  Eye,
  FileText,
  Package,
  Plus,
  Sparkles,
} from "lucide-react";

const stats = [
  { label: "Visitas al perfil", value: "—", note: "Pendiente de conexión", icon: Eye },
  { label: "Productos y servicios", value: "—", note: "Pendiente de conexión", icon: Package },
  { label: "Estado del perfil", value: "Pendiente", note: "Se definirá al publicar", icon: Building2 },
];

const shortcuts = [
  { title: "Completa tu empresa", description: "Añade los datos que verán tus clientes.", href: "/panel/empresa", icon: Building2 },
  { title: "Productos y servicios", description: "Organiza lo que ofrece tu negocio.", href: "/panel/productos-servicios", icon: Package },
  { title: "Mejora tu visibilidad", description: "Consulta las opciones de patrocinio.", href: "/panel/patrocinio", icon: Sparkles },
];

export default function PanelPage() {
  return (
    <div className="space-y-8">
      <section className="flex flex-col justify-between gap-5 sm:flex-row sm:items-center">
        <div>
          <p className="text-sm font-semibold text-orange-600">ÁREA DEL PROVEEDOR</p>
          <h1 className="mt-2 text-2xl font-bold tracking-tight text-gray-950 sm:text-3xl">
            Resumen de tu cuenta
          </h1>
          <p className="mt-2 text-sm leading-6 text-gray-500">
            Administra tu empresa y prepárala para llegar a más clientes.
          </p>
        </div>
        <Link href="/panel/empresa" className="inline-flex items-center justify-center gap-2 rounded-xl bg-orange-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-orange-600">
          <Plus size={18} /> Configurar mi empresa
        </Link>
      </section>

      <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {stats.map(({ label, value, note, icon: Icon }) => (
          <article key={label} className="rounded-2xl border border-gray-200 bg-white p-5 sm:p-6">
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="text-sm text-gray-500">{label}</p>
                <p className="mt-3 text-2xl font-bold text-gray-950">{value}</p>
              </div>
              <div className="flex size-11 items-center justify-center rounded-xl bg-orange-50 text-orange-600">
                <Icon size={22} />
              </div>
            </div>
            <p className="mt-4 text-xs text-gray-400">{note}</p>
          </article>
        ))}
      </section>

      <section className="grid gap-6 xl:grid-cols-[1.5fr_1fr]">
        <div className="rounded-2xl border border-gray-200 bg-white p-5 sm:p-7">
          <h2 className="text-lg font-bold text-gray-950">Accesos rápidos</h2>
          <p className="mt-1 text-sm text-gray-500">Continúa configurando tu presencia.</p>

          <div className="mt-6 space-y-3">
            {shortcuts.map(({ title, description, href, icon: Icon }) => (
              <Link key={href} href={href} className="group flex items-center gap-4 rounded-xl border border-gray-100 p-4 transition hover:border-orange-200 hover:bg-orange-50/40">
                <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-gray-50 text-gray-600 group-hover:bg-orange-100 group-hover:text-orange-600">
                  <Icon size={21} />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-sm font-semibold text-gray-900">{title}</p>
                  <p className="mt-1 text-xs leading-5 text-gray-500">{description}</p>
                </div>
                <ArrowRight size={18} className="shrink-0 text-gray-400 group-hover:text-orange-600" />
              </Link>
            ))}
          </div>
        </div>

        <div className="rounded-2xl border border-gray-200 bg-white p-5 sm:p-7">
          <div className="flex items-center gap-3">
            <FileText size={22} className="text-orange-500" />
            <h2 className="font-bold text-gray-950">Prepara tu perfil</h2>
          </div>
          <div className="mt-6 space-y-4">
            {[
              "Registrar los datos de tu empresa",
              "Añadir medios de contacto",
              "Publicar productos o servicios",
            ].map((task) => (
              <div key={task} className="flex items-start gap-3">
                <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full border border-gray-300" />
                <p className="text-sm leading-5 text-gray-600">{task}</p>
              </div>
            ))}
          </div>
          <div className="mt-7 rounded-xl bg-orange-50 p-4">
            <div className="flex items-center gap-2 text-orange-700">
              <BadgeCheck size={19} />
              <p className="text-sm font-semibold">Consejo</p>
            </div>
            <p className="mt-2 text-sm leading-6 text-orange-800/80">
              Mantén actualizados tus datos para facilitar el contacto con tus potenciales clientes.
            </p>
          </div>
        </div>
      </section>

      <p className="text-center text-xs text-gray-400">
        Las métricas estarán disponibles cuando conectemos los datos reales.
      </p>
    </div>
  );
}
