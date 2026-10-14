
import Link from "next/link";
import { ArrowLeft, Bell, LockKeyhole, Settings, UserRound } from "lucide-react";

export const metadata = { title: "Configuración | Proveedores del Perú" };

const settings = [
  { icon: UserRound, title: "Datos personales", description: "Nombre y datos básicos de tu cuenta." },
  { icon: LockKeyhole, title: "Seguridad", description: "Cambio de contraseña y protección del acceso." },
  { icon: Bell, title: "Notificaciones", description: "Preferencias para futuras notificaciones." },
];

export default function ConfiguracionPage() {
  return (
    <div className="space-y-6">
      <Link href="/panel" className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-orange-600">
        <ArrowLeft size={17} /> Volver al panel
      </Link>

      <div>
        <h1 className="text-2xl font-bold text-gray-950">Configuración</h1>
        <p className="mt-2 text-sm text-gray-500">Administra las preferencias de tu cuenta.</p>
      </div>

      <div className="space-y-4">
        {settings.map(({ icon: Icon, title, description }) => (
          <section key={title} className="flex items-start gap-4 rounded-2xl border border-gray-200 bg-white p-5 sm:p-6">
            <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-orange-50 text-orange-600">
              <Icon size={22} />
            </div>
            <div className="flex-1">
              <h2 className="font-semibold text-gray-900">{title}</h2>
              <p className="mt-2 text-sm leading-6 text-gray-500">{description}</p>
              <p className="mt-3 text-xs text-gray-400">Disponible cuando conectemos la cuenta.</p>
            </div>
            <Settings size={18} className="text-gray-300" />
          </section>
        ))}
      </div>
    </div>
  );
}
