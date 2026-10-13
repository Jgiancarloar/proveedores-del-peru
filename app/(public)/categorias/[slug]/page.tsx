
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowRight,
  BadgeCheck,
  Building2,
  MapPin,
} from "lucide-react";
import {
  categories,
  getCategoryBySlug,
} from "@/lib/categories-data";

import { companies as allCompanies } from "@/lib/companies-data";

interface CategoryPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return categories.map((category) => ({
    slug: category.slug,
  }));
}

export async function generateMetadata({
  params,
}: CategoryPageProps): Promise<Metadata> {
  const { slug } = await params;
  const category = getCategoryBySlug(slug);

  if (!category) {
    return { title: "Categoría no encontrada" };
  }

  return {
    title: category.name,
    description: category.description,
  };
}

export default async function CategoryDetailPage({
  params,
}: CategoryPageProps) {
  const { slug } = await params;
  const category = getCategoryBySlug(slug);

  if (!category) notFound();

  const Icon = category.icon;

  const companies = allCompanies
    .filter((company) => company.category === category.name)
    .sort((a, b) => {
      // Primero las empresas patrocinadas, ordenadas por oferta.
      if (a.bid > 0 && b.bid > 0) {
        return b.bid - a.bid;
      }

      if (a.bid > 0) return -1;
      if (b.bid > 0) return 1;

      // Las empresas gratuitas se ordenan alfabéticamente.
      return a.name.localeCompare(b.name, "es");
    });

  return (
    <main className="min-h-screen bg-gray-50/50">
      <div className="mx-auto max-w-[1100px] px-4 py-8 sm:px-6 lg:px-8">
        <Link
          href="/categorias"
          className="inline-flex items-center gap-2 text-sm text-gray-500 transition-colors hover:text-orange-600"
        >
          <ArrowLeft className="size-4" />
          Todas las categorías
        </Link>

        {/* Cabecera de categoría */}
        <section className="mt-7 rounded-2xl border border-gray-200 bg-white p-6 sm:p-8">
          <div className="flex items-start gap-4">
            <div className="flex size-14 shrink-0 items-center justify-center rounded-2xl bg-orange-50 text-orange-600 sm:size-16">
              <Icon className="size-7 sm:size-8" />
            </div>

            <div className="min-w-0 flex-1">
              <p className="text-xs font-semibold uppercase tracking-wider text-orange-600">
                Categoría de proveedores
              </p>

              <h1 className="mt-2 text-2xl font-semibold tracking-tight text-gray-950 sm:text-3xl">
                {category.name}
              </h1>

              <p className="mt-2 max-w-2xl text-sm leading-6 text-gray-500">
                {category.description}
              </p>

              <p className="mt-3 text-sm text-gray-400">
                {companies.length} empresas registradas
              </p>
            </div>
          </div>
        </section>

        {/* Empresas de la categoría */}
        <section className="mt-8">
          <div className="mb-4">
            <h2 className="text-xl font-semibold text-gray-950">
              Empresas de esta categoría
            </h2>

            <p className="mt-1 text-sm text-gray-500">
              Las empresas patrocinadas aparecen primero.
            </p>
          </div>

          <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white">
            {companies.map((company, index) => (
              <article
                key={company.id}
                className={`grid grid-cols-[48px_minmax(0,1fr)] items-center gap-3 px-3 py-4 transition-colors hover:bg-orange-50/40 sm:grid-cols-[36px_52px_minmax(0,1fr)_auto] sm:gap-4 sm:px-5 ${index !== companies.length - 1
                  ? "border-b border-gray-100"
                  : ""
                  }`}
              >
                {/* Posición e icono */}
                <div className="flex flex-col items-center gap-2 sm:contents">
                  <span className="text-center text-sm tabular-nums text-gray-400">
                    #{index + 1}
                  </span>

                  <div className="flex size-10 shrink-0 items-center justify-center rounded-xl border border-gray-100 bg-white text-orange-500 sm:size-12">
                    <Building2 className="size-5 sm:size-6" />
                  </div>
                </div>

                {/* Información de la empresa */}
                <div className="min-w-0">
                  <div className="flex min-w-0 flex-wrap items-center gap-1.5">
                    <h3 className="break-words text-sm font-semibold leading-snug text-gray-900 sm:text-base">
                      {company.name}
                    </h3>

                    {company.verified && (
                      <BadgeCheck
                        className="size-4 shrink-0 fill-blue-500 text-white"
                        aria-label="Empresa verificada"
                      />
                    )}
                  </div>

                  <p className="mt-1 hidden text-sm text-gray-500 sm:line-clamp-2 sm:block">
                    {company.description}
                  </p>

                  <div className="mt-1.5 flex flex-wrap items-center gap-x-2 gap-y-1.5 text-xs text-gray-500">
                    <span className="max-w-full rounded-md bg-gray-100 px-2 py-1 leading-snug">
                      {category.name}
                    </span>

                    <span className="inline-flex min-w-0 items-center gap-1">
                      <MapPin className="size-3.5 shrink-0" />
                      <span className="break-words">
                        {company.district}, {company.department}
                      </span>
                    </span>
                  </div>
                </div>

                {/* Patrocinio y perfil */}
                <div className="col-start-2 flex flex-row items-center justify-between gap-2 sm:col-start-auto sm:flex-col sm:items-end">
                  <Link
                    href={`/empresa/${company.slug}`}
                    className="inline-flex shrink-0 items-center gap-1 text-xs font-semibold text-orange-600 hover:text-orange-700 sm:text-sm"
                  >
                    Ver perfil
                    <ArrowRight className="size-3.5" />
                  </Link>

                  {company.bid > 0 && (
                    <span className="inline-flex shrink-0 items-center rounded-full bg-emerald-100 px-2.5 py-1 text-xs font-semibold text-emerald-700">
                      Patrocinado
                    </span>
                  )}
                </div>

              </article>
            ))}

            {companies.length === 0 && (
              <div className="px-5 py-12 text-center">
                <Building2 className="mx-auto size-8 text-gray-300" />

                <p className="mt-3 text-sm font-medium text-gray-700">
                  Todavía no hay empresas en esta categoría.
                </p>

                <p className="mt-1 text-sm text-gray-500">
                  Estamos trabajando para incorporar nuevos proveedores.
                </p>
              </div>
            )}
          </div>
        </section>
      </div>
    </main>
  );
}
