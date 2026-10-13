
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Layers3 } from "lucide-react";
import CategoryList from "@/components/categories/CategoryList";

export const metadata: Metadata = {
  title: "Categorías de proveedores",
  description:
    "Explora categorías de empresas y encuentra proveedores de productos y servicios en todo el Perú.",
};

export default function CategoriesPage() {
  return (
    <main className="min-h-screen bg-white">
      <div className="mx-auto max-w-[1240px] px-4 pt-8 sm:px-6 sm:pt-10 lg:px-8">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-gray-500 transition-colors hover:text-orange-600"
        >
          <ArrowLeft className="size-4" />
          Volver al inicio
        </Link>

        <section className="relative mt-7 overflow-hidden rounded-3xl border border-orange-100 bg-gradient-to-br from-orange-50 via-white to-white px-6 py-9 sm:px-10 sm:py-12">
          <div className="pointer-events-none absolute -right-12 -top-20 size-64 rounded-full bg-orange-100/50 blur-3xl" />

          <div className="relative max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-orange-200 bg-white/80 px-3 py-1.5 text-xs font-medium text-orange-700">
              <Layers3 className="size-3.5" />
              Directorio por sectores
            </div>

            <h1 className="mt-5 text-3xl font-semibold tracking-tight text-gray-950 sm:text-4xl lg:text-5xl">
              Explora categorías de{" "}
              <span className="text-orange-500">proveedores</span>
            </h1>

            <p className="mt-4 max-w-xl text-sm leading-6 text-gray-600 sm:text-base sm:leading-7">
              Encuentra empresas por su especialidad, compara
              alternativas y contacta directamente con proveedores
              de todo el Perú.
            </p>

            <Link
              href="/empresas"
              className="mt-6 inline-flex items-center gap-2 rounded-xl bg-orange-500 px-5 py-3 text-sm font-semibold text-white shadow-sm shadow-orange-500/20 transition-colors hover:bg-orange-600"
            >
              Ver todas las empresas
              <ArrowRight className="size-4" />
            </Link>
          </div>
        </section>
      </div>

      <div className="pt-9">
        <CategoryList />
      </div>
    </main>
  );
}
