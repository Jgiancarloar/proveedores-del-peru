
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Building2 } from "lucide-react";
import CompanyDirectory from "@/components/companies/CompanyDirectory";

export const metadata: Metadata = {
  title: "Directorio de empresas",
  description:
    "Encuentra proveedores de productos y servicios en todo el Perú. Busca por categoría, ubicación y nombre de empresa.",
};

export default function CompaniesPage() {
  return (
    <main className="min-h-screen bg-gray-50/50">
      <div className="mx-auto max-w-[1240px] px-4 py-8 sm:px-6 sm:py-10 lg:px-8">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-gray-500 transition-colors hover:text-orange-600"
        >
          <ArrowLeft className="size-4" />
          Volver al inicio
        </Link>

        <header className="mb-8 mt-7">
          <div className="flex items-center gap-3">
            <div className="flex size-12 items-center justify-center rounded-xl bg-orange-50 text-orange-600">
              <Building2 className="size-6" />
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-orange-600">
                Directorio nacional
              </p>

              <h1 className="mt-1 text-2xl font-semibold tracking-tight text-gray-950 sm:text-3xl">
                Encuentra tu proveedor ideal
              </h1>
            </div>
          </div>

          <p className="mt-4 max-w-2xl text-sm leading-6 text-gray-500 sm:text-base">
            Explora empresas de todo el Perú. Filtra por categoría,
            departamento y especialidad para encontrar lo que necesitas.
          </p>
        </header>

        <CompanyDirectory />
      </div>
    </main>
  );
}
