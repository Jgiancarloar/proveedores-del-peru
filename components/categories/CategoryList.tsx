
"use client";

import { useMemo, useState } from "react";
import { Search, SlidersHorizontal } from "lucide-react";
import CategoryCard from "@/components/categories/CategoryCard";
import { categories } from "@/lib/categories-data";

export default function CategoryList() {
  const [query, setQuery] = useState("");

  const filteredCategories = useMemo(() => {
    const normalizedQuery = query.trim().toLocaleLowerCase("es");

    if (!normalizedQuery) return categories;

    return categories.filter((category) =>
      `${category.name} ${category.description}`
        .toLocaleLowerCase("es")
        .includes(normalizedQuery),
    );
  }, [query]);

  return (
    <section className="mx-auto max-w-[1240px] px-4 pb-16 sm:px-6 lg:px-8">
      <div className="mb-7 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-lg font-semibold text-gray-950">
            Explora por sector
          </h2>

          <p className="mt-1 text-sm text-gray-500">
            Encuentra empresas especializadas en lo que necesitas.
          </p>
        </div>

        <p className="text-sm text-gray-400">
          {filteredCategories.length}{" "}
          {filteredCategories.length === 1
            ? "categoría"
            : "categorías"}
        </p>
      </div>

      <div className="relative mb-7 max-w-xl">
        <Search className="pointer-events-none absolute left-4 top-1/2 size-5 -translate-y-1/2 text-gray-400" />

        <input
          type="search"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Buscar una categoría..."
          aria-label="Buscar categorías"
          className="h-12 w-full rounded-xl border border-gray-200 bg-white pl-12 pr-12 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-orange-400 focus:ring-4 focus:ring-orange-500/10"
        />

        <SlidersHorizontal className="pointer-events-none absolute right-4 top-1/2 size-4 -translate-y-1/2 text-gray-400" />
      </div>

      {filteredCategories.length > 0 ? (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filteredCategories.map((category) => (
            <CategoryCard
              key={category.id}
              category={category}
            />
          ))}
        </div>
      ) : (
        <div className="rounded-2xl border border-dashed border-gray-200 px-6 py-16 text-center">
          <Search className="mx-auto size-8 text-gray-300" />

          <h3 className="mt-4 font-semibold text-gray-900">
            No encontramos esa categoría
          </h3>

          <p className="mt-2 text-sm text-gray-500">
            Prueba con otro término de búsqueda.
          </p>

          <button
            type="button"
            onClick={() => setQuery("")}
            className="mt-5 text-sm font-semibold text-orange-600 hover:text-orange-700"
          >
            Ver todas las categorías
          </button>
        </div>
      )}
    </section>
  );
}
