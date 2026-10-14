
import Link from "next/link";
import { ArrowLeft, Building2, Save } from "lucide-react";

export const metadata = { title: "Mi empresa | Proveedores del Perú" };

function Field({
  label,
  name,
  placeholder,
  type = "text",
  required = false,
}: {
  label: string;
  name: string;
  placeholder: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label htmlFor={name} className="mb-2 block text-sm font-medium text-gray-700">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        required={required}
        className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-orange-500 focus:ring-4 focus:ring-orange-500/10"
      />
    </div>
  );
}

export default function MiEmpresaPage() {
  return (
    <div className="mx-auto max-w-4xl space-y-6">
      <Link href="/panel" className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-orange-600">
        <ArrowLeft size={17} /> Volver al panel
      </Link>

      <div>
        <h1 className="text-2xl font-bold text-gray-950">Mi empresa</h1>
        <p className="mt-2 text-sm text-gray-500">
          Completa la información que verán tus potenciales clientes.
        </p>
      </div>

      <form action="/panel/empresa" method="get" className="space-y-6">
        <section className="rounded-2xl border border-gray-200 bg-white p-5 sm:p-7">
          <div className="mb-6 flex items-center gap-3">
            <Building2 size={23} className="text-orange-500" />
            <h2 className="font-bold">Información general</h2>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            <Field label="Nombre comercial" name="name" placeholder="Nombre de tu empresa" required />
            <Field label="Sitio web" name="website" placeholder="https://tuempresa.com" />
            <Field label="Categoría" name="category" placeholder="Ej. Construcción" required />
            <Field label="Departamento" name="department" placeholder="Ej. Lima" required />
            <Field label="Provincia" name="province" placeholder="Ej. Lima" required />
            <Field label="Distrito" name="district" placeholder="Ej. Surco" />
            <Field label="Teléfono" name="phone" placeholder="Número de contacto" />
            <Field label="WhatsApp" name="whatsapp" placeholder="Número con código de país" />
            <div className="sm:col-span-2">
              <Field label="Correo de contacto" name="email" type="email" placeholder="contacto@tuempresa.com" />
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="description" className="mb-2 block text-sm font-medium text-gray-700">
                Descripción
              </label>
              <textarea
                id="description"
                name="description"
                rows={5}
                placeholder="Describe tu empresa, experiencia y servicios..."
                className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none focus:border-orange-500 focus:ring-4 focus:ring-orange-500/10"
              />
            </div>
          </div>
        </section>

        <div className="flex justify-end">
          <button type="button" disabled title="Disponible al conectar la base de datos" className="inline-flex items-center gap-2 rounded-xl bg-orange-500 px-5 py-3 text-sm font-semibold text-white opacity-60">
            <Save size={17} /> Guardar cambios
          </button>
        </div>
      </form>
      <p className="text-xs text-gray-400">Los cambios todavía no se guardan.</p>
    </div>
  );
}
