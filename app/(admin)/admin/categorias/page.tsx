
import Link from "next/link";
import { ArrowLeft, Plus, Tags } from "lucide-react";

export const metadata = { title: "Categorías | Administración" };

export default function AdminCategoriasPage() {
  return (
    <div className="space-y-6">
      <Link href="/admin" className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-orange-600">
        <ArrowLeft size={17} /> Dashboard
      </Link>

      <section className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-950">Categorías</h1>
          <p className="mt-2 text-sm text-gray-500">Organiza las categorías del directorio.</p>
        </div>
        <button type="button" disabled title="Disponible al conectar la base de datos" className="inline-flex items-center justify-center gap-2 rounded-xl bg-orange-500 px-5 py-3 text-sm font-semibold text-white opacity-60">
          <Plus size={18} /> Nueva categoría
        </button>
      </section>

      <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[500px] text-left text-sm">
            <thead className="bg-gray-50 text-xs uppercase tracking-wide text-gray-500">
              <tr>
                <th className="px-5 py-4 font-semibold">Categoría</th>
                <th className="px-5 py-4 font-semibold">Slug</th>
                <th className="px-5 py-4 font-semibold">Estado</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td colSpan={3} className="px-5 py-16 text-center">
                  <Tags className="mx-auto text-gray-300" size={32} />
                  <p className="mt-3 font-semibold text-gray-700">Categorías pendientes de conexión</p>
                  <p className="mt-1 text-sm text-gray-400">Después conectaremos esta vista con tus categorías actuales.</p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
