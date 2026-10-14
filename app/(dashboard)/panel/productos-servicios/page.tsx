
import Link from "next/link";
import { ArrowLeft, Package, Plus } from "lucide-react";

export const metadata = { title: "Productos y servicios | Proveedores del Perú" };

export default function ProductosServiciosPage() {
  return (
    <div className="space-y-6">
      <Link href="/panel" className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-orange-600">
        <ArrowLeft size={17} /> Volver al panel
      </Link>

      <section className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-950">Productos y servicios</h1>
          <p className="mt-2 text-sm text-gray-500">
            Gestiona lo que ofreces a tus potenciales clientes.
          </p>
        </div>
        <button type="button" disabled title="Disponible próximamente" className="inline-flex items-center justify-center gap-2 rounded-xl bg-orange-500 px-5 py-3 text-sm font-semibold text-white opacity-60">
          <Plus size={18} /> Añadir publicación
        </button>
      </section>

      <section className="flex min-h-80 flex-col items-center justify-center rounded-2xl border border-dashed border-gray-300 bg-white px-6 py-12 text-center">
        <div className="flex size-16 items-center justify-center rounded-2xl bg-orange-50 text-orange-600">
          <Package size={30} />
        </div>
        <h2 className="mt-5 text-lg font-bold text-gray-900">Todavía no tienes publicaciones</h2>
        <p className="mt-2 max-w-md text-sm leading-6 text-gray-500">
          Próximamente podrás publicar y administrar productos y servicios desde aquí.
        </p>
      </section>
    </div>
  );
}
