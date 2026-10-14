    
import Link from "next/link";
import { ArrowLeft, Building2, Search } from "lucide-react";

export const metadata = { title: "Empresas | Administración" };

export default function AdminEmpresasPage() {
  return (
    <div className="space-y-6">
      <Link href="/admin" className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-orange-600">
        <ArrowLeft size={17} /> Dashboard
      </Link>

      <div>
        <h1 className="text-2xl font-bold text-gray-950">Empresas</h1>
        <p className="mt-2 text-sm text-gray-500">Consulta y administra los perfiles empresariales.</p>
      </div>

      <div className="flex flex-col gap-3 sm:flex-row">
        <div className="relative flex-1">
          <Search size={18} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
          <input aria-label="Buscar empresa" placeholder="Buscar empresa..." className="w-full rounded-xl border border-gray-200 bg-white py-3 pl-10 pr-4 text-sm outline-none focus:border-orange-500" />
        </div>
        <select aria-label="Filtrar empresas por estado" defaultValue="todos" className="rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-gray-600">
          <option value="todos">Todos los estados</option>
          <option value="pendientes">Pendientes</option>
          <option value="verificadas">Verificadas</option>
          <option value="suspendidas">Suspendidas</option>
        </select>
      </div>

      <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[650px] text-left text-sm">
            <thead className="bg-gray-50 text-xs uppercase tracking-wide text-gray-500">
              <tr>
                <th className="px-5 py-4 font-semibold">Empresa</th>
                <th className="px-5 py-4 font-semibold">Categoría</th>
                <th className="px-5 py-4 font-semibold">Ubicación</th>
                <th className="px-5 py-4 font-semibold">Estado</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td colSpan={4} className="px-5 py-16 text-center">
                  <Building2 className="mx-auto text-gray-300" size={32} />
                  <p className="mt-3 font-semibold text-gray-700">Sin empresas cargadas</p>
                  <p className="mt-1 text-sm text-gray-400">Conectaremos aquí los perfiles reales.</p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
