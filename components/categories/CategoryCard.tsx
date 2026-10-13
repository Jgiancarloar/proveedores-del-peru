
import Link from "next/link";
import { ArrowRight, BadgeCheck } from "lucide-react";
import {
  getCategoryCompanies,
  type Category,
} from "@/lib/categories-data";

interface CategoryCardProps {
  category: Category;
}

export default function CategoryCard({
  category,
}: CategoryCardProps) {
  const Icon = category.icon;
  const companies = getCategoryCompanies(category).slice(0, 3);

  return (
    <article className="flex min-w-0 flex-col rounded-2xl border border-gray-200 bg-white p-5 transition-all duration-200 hover:border-orange-200 hover:shadow-lg hover:shadow-orange-950/[0.04] sm:p-6">
      <Link
        href={`/categorias/${category.slug}`}
        className="group flex items-start gap-3"
      >
        <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-orange-50 text-orange-600 transition-colors group-hover:bg-orange-100">
          <Icon className="size-6" strokeWidth={1.7} />
        </div>

        <div className="min-w-0 flex-1">
          <h2 className="text-base font-semibold tracking-tight text-gray-950 transition-colors group-hover:text-orange-600">
            {category.name}
          </h2>

          <p className="mt-1 text-xs leading-5 text-gray-500">
            {category.description}
          </p>

          <p className="mt-2 text-xs font-medium text-gray-400">
            {category.companiesCount} empresas
          </p>
        </div>
      </Link>

      <div className="my-5 border-t border-gray-100" />

      <div className="flex flex-1 flex-col gap-4">
        {companies.map((company, index) => (
          <Link
            key={company.id}
            href={`/empresa/${company.slug}`}
            className="group/company flex min-w-0 items-center gap-3"
          >
            <span className="w-4 shrink-0 text-xs tabular-nums text-gray-400">
              {index + 1}.
            </span>

            <span className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-gray-50 text-gray-500 transition-colors group-hover/company:bg-orange-50 group-hover/company:text-orange-600">
              <Icon className="size-4" />
            </span>

            <span className="min-w-0 flex-1 truncate text-sm font-medium text-gray-700 transition-colors group-hover/company:text-orange-600">
              {company.name}
            </span>

            {company.verified && (
              <BadgeCheck
                className="size-4 shrink-0 fill-blue-500 text-white"
                aria-label="Empresa verificada"
              />
            )}
          </Link>
        ))}
      </div>

      <Link
        href={`/categorias/${category.slug}`}
        className="mt-5 inline-flex items-center justify-between border-t border-gray-100 pt-4 text-sm font-semibold text-orange-600 transition-colors hover:text-orange-700"
      >
        Explorar categoría
        <ArrowRight className="size-4" />
      </Link>
    </article>
  );
}
