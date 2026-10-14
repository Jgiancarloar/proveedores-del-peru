
import Link from "next/link";
import { ArrowLeft, CreditCard, Search } from "lucide-react";

export const metadata = { title: "Patrocinios | Administración" };

export default function AdminPatrociniosPage() {
  return (
    <div className="space-y-6">
      <Link href="/admin" className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-orange-600">
        <ArrowLeft size={17} /> Dashboard
      </Link>

      <div>
        <h1 className="text-2xl font-bold text-gray-950">Patrocinios</h1>
        <p className="mt-2 text-sm text-gray-500">
          Supervisa las posiciones patrocinadas y los pagos de las empresas.
        </p>
      </div>

      <section className="grid gap-4 sm:grid-cols-2">
        <article className="rounded-2xl border border-gray-200 bg-white p-5">
          <p className="text-sm text-gray-500">Patrocinios activos</p>
          <p className="mt-3 text-3xl font-bold text-gray-950">—</p>
          <p className="mt-2 text-xs text-gray-400">Pendiente de conexión</p>
        </article>
        <article className="rounded-2xl border border-gray-200 bg-white p-5">
          <p className="text-sm text-gray-500">Ingresos por patrocinios</p>
          <p className="mt-3 text-3xl font-bold text-gray-950">—</p>
          <p className="mt-2 text-xs text-gray-400">Pendiente de conexión con los pagos</p>
        </article>
      </section>

      <div className="relative max-w-lg">
        <Search size={18} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
        <input aria-label="Buscar patrocinio" placeholder="Buscar empresa..." className="w-full rounded-xl border border-gray-200 bg-white py-3 pl-10 pr-4 text-sm outline-none focus:border-orange-500" />
      </div>

      <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[600px] text-left text-sm">
            <thead className="bg-gray-50 text-xs uppercase tracking-wide text-gray-500">
              <tr>
                <th className="px-5 py-4 font-semibold">Empresa</th>
                <th className="px-5 py-4 font-semibold">Posición</th>
                <th className="px-5 py-4 font-semibold">Importe</th>
                <th className="px-5 py-4 font-semibold">Estado</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td colSpan={4} className="px-5 py-16 text-center">
                  <CreditCard className="mx-auto text-gray-300" size={32} />
                  <p className="mt-3 font-semibold text-gray-700">Sin patrocinios registrados</p>
                  <p className="mt-1 text-sm text-gray-400">Los movimientos aparecerán al implementar el sistema de pagos.</p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
