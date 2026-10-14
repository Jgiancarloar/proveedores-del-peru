
import Link from "next/link";
import { ArrowRight, BadgeCheck, Building2, CreditCard, Tags, Users } from "lucide-react";

const stats = [
  { label: "Empresas registradas", value: "—", detail: "Pendiente de conexión", icon: Building2 },
  { label: "Usuarios", value: "—", detail: "Pendiente de conexión", icon: Users },
  { label: "Empresas verificadas", value: "—", detail: "Pendiente de conexión", icon: BadgeCheck },
  { label: "Patrocinios activos", value: "—", detail: "Pendiente de conexión", icon: CreditCard },
];

const modules = [
  { title: "Gestionar empresas", description: "Consultar y administrar los perfiles empresariales.", href: "/admin/empresas", icon: Building2 },
  { title: "Gestionar usuarios", description: "Consultar las cuentas de la plataforma.", href: "/admin/usuarios", icon: Users },
  { title: "Gestionar categorías", description: "Organizar las categorías del directorio.", href: "/admin/categorias", icon: Tags },
  { title: "Gestionar patrocinios", description: "Consultar las posiciones patrocinadas y pagos.", href: "/admin/patrocinios", icon: CreditCard },
];

export default function AdminPage() {
  return (
    <div className="space-y-8">
      <section>
        <p className="text-sm font-semibold text-orange-600">CENTRO DE CONTROL</p>
        <h1 className="mt-2 text-2xl font-bold tracking-tight text-gray-950 sm:text-3xl">
          Dashboard administrativo
        </h1>
        <p className="mt-2 text-sm leading-6 text-gray-500">
          Administra las empresas, los usuarios y las opciones comerciales de la plataforma.
        </p>
      </section>

      <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {stats.map(({ label, value, detail, icon: Icon }) => (
          <article key={label} className="rounded-2xl border border-gray-200 bg-white p-5">
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="text-sm text-gray-500">{label}</p>
                <p className="mt-3 text-3xl font-bold text-gray-950">{value}</p>
              </div>
              <div className="flex size-11 items-center justify-center rounded-xl bg-orange-50 text-orange-600">
                <Icon size={22} />
              </div>
            </div>
            <p className="mt-3 text-xs text-gray-400">{detail}</p>
          </article>
        ))}
      </section>

      <section className="rounded-2xl border border-gray-200 bg-white p-5 sm:p-7">
        <div>
          <h2 className="text-lg font-bold text-gray-950">Gestión de la plataforma</h2>
          <p className="mt-1 text-sm text-gray-500">Accede a cada módulo administrativo.</p>
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {modules.map(({ title, description, href, icon: Icon }) => (
            <Link key={href} href={href} className="group flex items-start gap-4 rounded-xl border border-gray-200 p-5 transition hover:border-orange-200 hover:bg-orange-50/30">
              <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-orange-50 text-orange-600">
                <Icon size={22} />
              </div>
              <div className="min-w-0 flex-1">
                <h3 className="font-semibold text-gray-900">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-gray-500">{description}</p>
                <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-orange-600">
                  Abrir módulo <ArrowRight size={16} className="transition group-hover:translate-x-1" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <p className="text-center text-xs text-gray-400">
        Las métricas aparecerán cuando conectemos los datos reales.
      </p>
    </div>
  );
}
