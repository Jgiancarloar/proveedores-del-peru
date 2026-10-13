
"use client";

import { useMemo, useState } from "react";
import { Search, SlidersHorizontal, X } from "lucide-react";
import CompanyCard from "@/components/companies/CompanyCard";
import {
  companies,
  companyCategories,
} from "@/lib/companies-data";

const PAGE_SIZE = 12;

export default function CompanyDirectory() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("");
  const [department, setDepartment] = useState("");
  const [province, setProvince] = useState("");
  const [district, setDistrict] = useState("");
  const [sort, setSort] = useState("name");
  const [page, setPage] = useState(1);

  // Departamentos disponibles
  const availableDepartments = useMemo(
    () =>
      [...new Set(companies.map((company) => company.department))]
        .filter(Boolean)
        .sort((a, b) => a.localeCompare(b, "es")),
    [],
  );

  // Provincias correspondientes al departamento seleccionado
  const availableProvinces = useMemo(
    () =>
      [
        ...new Set(
          companies
            .filter(
              (company) =>
                !department || company.department === department,
            )
            .map((company) => company.province),
        ),
      ]
        .filter(Boolean)
        .sort((a, b) => a.localeCompare(b, "es")),
    [department],
  );

  // Distritos correspondientes a la provincia y departamento
  const availableDistricts = useMemo(
    () =>
      [
        ...new Set(
          companies
            .filter(
              (company) =>
                (!department || company.department === department) &&
                (!province || company.province === province),
            )
            .map((company) => company.district),
        ),
      ]
        .filter(Boolean)
        .sort((a, b) => a.localeCompare(b, "es")),
    [department, province],
  );

  const filteredCompanies = useMemo(() => {
    const normalizedQuery = query.trim().toLocaleLowerCase("es");

    return companies
      .filter((company) => {
        const searchableText = [
          company.name,
          company.description,
          company.category,
          company.department,
          company.province,
          company.district,
        ]
          .join(" ")
          .toLocaleLowerCase("es");

        return (
          (!normalizedQuery ||
            searchableText.includes(normalizedQuery)) &&
          (!category || company.category === category) &&
          (!department || company.department === department) &&
          (!province || company.province === province) &&
          (!district || company.district === district)
        );
      })
      .sort((a, b) => {
        if (sort === "name-desc") {
          return b.name.localeCompare(a.name, "es");
        }

        return a.name.localeCompare(b.name, "es");
      });
  }, [query, category, department, province, district, sort]);

  const totalPages = Math.ceil(
    filteredCompanies.length / PAGE_SIZE,
  );

  const currentPage = Math.min(page, Math.max(totalPages, 1));

  const visibleCompanies = filteredCompanies.slice(
    (currentPage - 1) * PAGE_SIZE,
    currentPage * PAGE_SIZE,
  );

  const hasFilters = Boolean(
    query || category || department || province || district,
  );

  function resetFilters() {
    setQuery("");
    setCategory("");
    setDepartment("");
    setProvince("");
    setDistrict("");
    setSort("name");
    setPage(1);
  }

  return (
    <div>
      {/* Buscador y filtros */}
      <div className="rounded-2xl border border-gray-200 bg-white p-4 sm:p-5">
        <div className="relative">
          <Search className="pointer-events-none absolute left-4 top-1/2 size-5 -translate-y-1/2 text-gray-400" />

          <input
            type="search"
            value={query}
            onChange={(event) => {
              setQuery(event.target.value);
              setPage(1);
            }}
            placeholder="Buscar empresa, producto o servicio..."
            aria-label="Buscar proveedores"
            className="h-12 w-full rounded-xl border border-gray-200 bg-gray-50 pl-12 pr-4 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-orange-400 focus:bg-white focus:ring-4 focus:ring-orange-500/10"
          />
        </div>

        <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {/* Categoría */}
          <label className="min-w-0">
            <span className="mb-1.5 block text-xs font-medium text-gray-600">
              Categoría
            </span>

            <select
              value={category}
              onChange={(event) => {
                setCategory(event.target.value);
                setPage(1);
              }}
              className="h-11 w-full rounded-xl border border-gray-200 bg-white px-3 text-sm text-gray-700 outline-none focus:border-orange-400 focus:ring-4 focus:ring-orange-500/10"
            >
              <option value="">Todas las categorías</option>
              {companyCategories.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </label>

          {/* Departamento */}
          <label className="min-w-0">
            <span className="mb-1.5 block text-xs font-medium text-gray-600">
              Departamento
            </span>

            <select
              value={department}
              onChange={(event) => {
                setDepartment(event.target.value);
                setProvince("");
                setDistrict("");
                setPage(1);
              }}
              className="h-11 w-full rounded-xl border border-gray-200 bg-white px-3 text-sm text-gray-700 outline-none focus:border-orange-400 focus:ring-4 focus:ring-orange-500/10"
            >
              <option value="">Todo el Perú</option>
              {availableDepartments.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </label>

          {/* Provincia */}
          <label className="min-w-0">
            <span className="mb-1.5 block text-xs font-medium text-gray-600">
              Provincia
            </span>

            <select
              value={province}
              onChange={(event) => {
                setProvince(event.target.value);
                setDistrict("");
                setPage(1);
              }}
              disabled={availableProvinces.length === 0}
              className="h-11 w-full rounded-xl border border-gray-200 bg-white px-3 text-sm text-gray-700 outline-none focus:border-orange-400 focus:ring-4 focus:ring-orange-500/10 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:opacity-60"
            >
              <option value="">Todas las provincias</option>
              {availableProvinces.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </label>

          {/* Distrito */}
          <label className="min-w-0">
            <span className="mb-1.5 block text-xs font-medium text-gray-600">
              Distrito
            </span>

            <select
              value={district}
              onChange={(event) => {
                setDistrict(event.target.value);
                setPage(1);
              }}
              disabled={availableDistricts.length === 0}
              className="h-11 w-full rounded-xl border border-gray-200 bg-white px-3 text-sm text-gray-700 outline-none focus:border-orange-400 focus:ring-4 focus:ring-orange-500/10 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:opacity-60"
            >
              <option value="">Todos los distritos</option>
              {availableDistricts.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </label>

          {/* Orden alfabético */}
          <label className="min-w-0">
            <span className="mb-1.5 block text-xs font-medium text-gray-600">
              Ordenar por
            </span>

            <select
              value={sort}
              onChange={(event) => {
                setSort(event.target.value);
                setPage(1);
              }}
              className="h-11 w-full rounded-xl border border-gray-200 bg-white px-3 text-sm text-gray-700 outline-none focus:border-orange-400 focus:ring-4 focus:ring-orange-500/10"
            >
              <option value="name">Nombre A-Z</option>
              <option value="name-desc">Nombre Z-A</option>
            </select>
          </label>

          {/* Limpiar */}
          <div className="flex items-end">
            <button
              type="button"
              onClick={resetFilters}
              disabled={!hasFilters && sort === "name"}
              className="inline-flex h-11 w-full items-center justify-center gap-2 rounded-xl border border-gray-200 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-40"
            >
              <X className="size-4" />
              Limpiar filtros
            </button>
          </div>
        </div>
      </div>

      {/* Resultados */}
      <div className="mb-5 mt-7 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-lg font-semibold text-gray-950">
            Directorio de empresas
          </h2>

          <p className="mt-1 text-sm text-gray-500">
            {filteredCompanies.length}{" "}
            {filteredCompanies.length === 1
              ? "proveedor encontrado"
              : "proveedores encontrados"}
          </p>
        </div>

        <div className="inline-flex items-center gap-2 text-xs text-gray-400">
          <SlidersHorizontal className="size-4" />
          Filtros y resultados
        </div>
      </div>

      {/* Empresas */}
      {visibleCompanies.length > 0 ? (
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
          {visibleCompanies.map((company) => (
            <CompanyCard key={company.id} company={company} />
          ))}
        </div>
      ) : (
        <div className="rounded-2xl border border-dashed border-gray-200 bg-white px-6 py-16 text-center">
          <Search className="mx-auto size-9 text-gray-300" />

          <h3 className="mt-4 text-base font-semibold text-gray-900">
            No encontramos proveedores
          </h3>

          <p className="mt-2 text-sm text-gray-500">
            Prueba con otra búsqueda o modifica los filtros.
          </p>

          <button
            type="button"
            onClick={resetFilters}
            className="mt-5 rounded-xl bg-orange-500 px-4 py-2.5 text-sm font-semibold text-white hover:bg-orange-600"
          >
            Limpiar filtros
          </button>
        </div>
      )}

      {/* Paginación de 12 empresas */}
      {totalPages > 1 && (
        <nav
          aria-label="Paginación del directorio"
          className="mt-8 flex flex-wrap items-center justify-center gap-2"
        >
          <button
            type="button"
            disabled={currentPage === 1}
            onClick={() => setPage((current) => current - 1)}
            className="cursor-pointer rounded-lg border border-gray-200 px-3 py-2 text-sm text-gray-600 hover:bg-gray-50 disabled:opacity-40"
          >
            Anterior
          </button>

          {Array.from(
            { length: totalPages },
            (_, index) => index + 1,
          ).map((pageNumber) => (
            <button
              key={pageNumber}
              type="button"
              aria-current={
                currentPage === pageNumber ? "page" : undefined
              }
              onClick={() => setPage(pageNumber)}
              className={`cursor-pointer size-10 rounded-lg text-sm font-medium transition-colors ${
                currentPage === pageNumber
                  ? "bg-orange-500 text-white"
                  : "border border-gray-200 text-gray-600 hover:bg-orange-50"
              }`}
            >
              {pageNumber}
            </button>
          ))}

          <button
            type="button"
            disabled={currentPage === totalPages}
            onClick={() => setPage((current) => current + 1)}
            className="cursor-pointer rounded-lg border border-gray-200 px-3 py-2 text-sm text-gray-600 hover:bg-gray-50 disabled:opacity-40"
          >
            Siguiente
          </button>
        </nav>
      )}
    </div>
  );
}