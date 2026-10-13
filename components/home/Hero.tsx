
import Link from "next/link";
import { ArrowRight, Search } from "lucide-react";

export default function Hero() {
  return (
    <section className="px-4 pb-7 pt-10 sm:px-6 sm:pb-9 sm:pt-14 lg:px-8 lg:pt-16">
      <div className="mx-auto max-w-[850px] text-center">
        <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-orange-100 bg-orange-50 px-3.5 py-1.5 text-xs font-medium text-orange-700">
          <span className="size-2 rounded-full bg-orange-500" />
          El directorio de proveedores del Perú
        </div>

        <h1 className="text-3xl font-semibold tracking-tight text-gray-950 sm:text-4xl lg:text-5xl lg:leading-[1.15]">
          Encuentra proveedores
          <span className="text-orange-500"> para lo que necesitas</span>
        </h1>

        <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-gray-500 sm:text-base sm:leading-7">
          Explora empresas de productos y servicios de todo el Perú.
          Encuentra el proveedor adecuado para tu próximo proyecto.
        </p>

        <form
          action="/empresas"
          method="GET"
          className="mx-auto mt-8 flex max-w-[760px] flex-col gap-3 sm:mt-9 sm:flex-row"
        >
          <label className="flex h-13 min-w-0 flex-1 items-center gap-3 rounded-xl border border-gray-200 bg-white px-4 transition-colors focus-within:border-orange-400 focus-within:ring-4 focus-within:ring-orange-500/10">
            <Search className="size-5 shrink-0 text-gray-400" />

            <input
              type="search"
              name="q"
              placeholder="Ej. cemento, puertas cortafuego, servicios IT..."
              aria-label="Producto, servicio o empresa que buscas"
              className="h-full w-full min-w-0 bg-transparent text-sm text-gray-900 outline-none placeholder:text-gray-400"
            />
          </label>

          <button
            type="submit"
            className="inline-flex h-13 items-center justify-center gap-2 rounded-xl bg-orange-500 px-8 text-sm font-semibold text-white shadow-sm shadow-orange-500/20 transition-colors hover:bg-orange-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600"
          >
            Buscar proveedores
            <ArrowRight className="size-4" />
          </button>
        </form>

        <div className="mt-5 flex flex-wrap items-center justify-center gap-x-2 gap-y-2 text-xs text-gray-500 sm:text-sm">
          <span className="font-medium text-gray-700">Búsquedas populares:</span>

          {[
            "Construcción",
            "Seguridad industrial",
            "Tecnología",
          ].map((term) => (
            <Link
              key={term}
              href={`/empresas?q=${encodeURIComponent(term)}`}
              className="rounded-full border border-gray-200 px-3 py-1.5 transition-colors hover:border-orange-200 hover:bg-orange-50 hover:text-orange-700"
            >
              {term}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
