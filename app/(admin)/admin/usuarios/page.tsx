
import Link from "next/link";
import { ArrowLeft, Search, Users } from "lucide-react";

export const metadata = { title: "Usuarios | Administración" };

export default function AdminUsuariosPage() {
  return (
    <div className="space-y-6">
      <Link href="/admin" className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-orange-600">
        <ArrowLeft size={17} /> Dashboard
      </Link>

      <div>
        <h1 className="text-2xl font-bold text-gray-950">Usuarios</h1>
        <p className="mt-2 text-sm text-gray-500">Consulta las cuentas y los roles de la plataforma.</p>
      </div>

      <div className="relative max-w-lg">
        <Search size={18} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
        <input aria-label="Buscar usuario" placeholder="Buscar por nombre o correo..." className="w-full rounded-xl border border-gray-200 bg-white py-3 pl-10 pr-4 text-sm outline-none focus:border-orange-500" />
      </div>

      <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[550px] text-left text-sm">
            <thead className="bg-gray-50 text-xs uppercase tracking-wide text-gray-500">
              <tr>
                <th className="px-5 py-4 font-semibold">Usuario</th>
                <th className="px-5 py-4 font-semibold">Correo</th>
                <th className="px-5 py-4 font-semibold">Rol</th>
                <th className="px-5 py-4 font-semibold">Estado</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td colSpan={4} className="px-5 py-16 text-center">
                  <Users className="mx-auto text-gray-300" size={32} />
                  <p className="mt-3 font-semibold text-gray-700">Sin usuarios cargados</p>
                  <p className="mt-1 text-sm text-gray-400">Los usuarios aparecerán al conectar Supabase.</p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
