
import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  Building2,
  MapPin,
} from "lucide-react";
import { companies } from "@/lib/companies-data";

function shuffleCompanies<T>(items: T[]): T[] {
  const shuffled = [...items];

  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }

  return shuffled;
}

export default function MainRanking() {
  const sponsored = companies
    .filter((company) => company.bid > 0)
    .sort((a, b) => b.bid - a.bid || a.name.localeCompare(b.name, "es"));

  const freeCompanies = shuffleCompanies(
    companies.filter((company) => company.bid <= 0)
  );

  const ranking = [...sponsored, ...freeCompanies].slice(0, 50);

  return (
    <section className="px-4 pb-14 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl">
        <div className="mb-5 flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
          <div>
            <div className="flex items-center gap-2">
              <span className="relative flex size-2.5">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex size-2.5 rounded-full bg-emerald-500" />
              </span>

              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-orange-600">
                Ranking principal
              </p>
            </div>

            <h2 className="mt-2 text-2xl font-semibold tracking-tight text-gray-950 sm:text-3xl">
              Empresas destacadas
            </h2>
          </div>

          <Link
            href="/empresas"
            className="inline-flex w-fit items-center gap-2 text-sm font-semibold text-orange-600 hover:text-orange-700"
          >
            Ver todas las empresas
            <ArrowRight className="size-4" />
          </Link>
        </div>

        <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white">

          
{ranking.map((company, index) => {
  const position = index + 1;

  const podiumStyle =
    position === 1
      ? "bg-orange-200/50"
      : position === 2
        ? "bg-orange-100/50"
        : position === 3
          ? "bg-orange-50/50"
          : "bg-white";

  return (
    <article
      key={company.id}
      className={`group grid grid-cols-[48px_minmax(0,1fr)] items-stretch gap-3 px-3 py-4 transition-colors hover:bg-orange-50/70 sm:grid-cols-[36px_56px_minmax(0,1fr)] sm:items-center sm:gap-4 sm:px-5 ${
        index !== ranking.length - 1 ? "border-b border-gray-100" : ""
      } ${podiumStyle}`}
    >
      {/* Posición e icono */}
      <div className="flex flex-col items-center justify-center gap-2 sm:contents">
        <span
          className={`text-center text-sm font-semibold tabular-nums ${
            position <= 3 ? "text-orange-700" : "text-gray-400"
          }`}
        >
          #{position}
        </span>

        <div className="flex size-10 shrink-0 items-center justify-center rounded-xl border border-gray-200/70 bg-white/90 text-orange-500 sm:size-14">
          <Building2
            className="size-5 sm:size-7"
            strokeWidth={1.6}
          />
        </div>
      </div>

      {/* Información completa de la empresa */}
      <div className="flex min-w-0 flex-col justify-center sm:col-start-3">
        {/* Nombre */}
        <div className="flex min-w-0 flex-wrap items-center gap-1.5">
          <h3 className="break-words text-sm font-semibold leading-snug text-gray-950 sm:text-base">
            {company.name}
          </h3>

          {company.verified && (
            <BadgeCheck
              className="size-4 shrink-0 fill-blue-500 text-white"
              aria-label="Empresa verificada"
            />
          )}
        </div>

        {/* Descripción: solo escritorio */}
        <p className="mt-1 hidden text-sm text-gray-500 sm:line-clamp-2 sm:block">
          {company.description}
        </p>

        {/* Categoría */}
        <div className="mt-1.5">
          <span className="inline-block max-w-full rounded-md bg-gray-100 px-2 py-1 text-xs leading-snug text-gray-500">
            {company.category}
          </span>
        </div>

        {/* Ubicación */}
        <div className="mt-1.5 flex min-w-0 items-center gap-1 text-xs text-gray-500">
          <MapPin className="size-3.5 shrink-0" />

          <span className="break-words">
            {[company.district, company.department]
              .filter(Boolean)
              .join(", ")}
          </span>
        </div>

        {/* Patrocinio y botón: siempre al final */}
        <div className="mt-3 flex w-full items-center justify-between gap-2">
          <div className="min-w-0">
            {company.bid > 0 && (
              <span className="inline-flex items-center rounded-full bg-emerald-100 px-2.5 py-1 text-xs font-semibold text-emerald-700">
                Patrocinado
              </span>
            )}
          </div>

          <Link
            href={`/empresa/${company.slug}`}
            className="ml-auto inline-flex shrink-0 items-center gap-1 text-xs font-medium text-orange-600 hover:text-orange-700 sm:text-sm"
          >
            Ver perfil
            <ArrowRight className="size-3.5" />
          </Link>
        </div>
      </div>
    </article>
  );
})}


        </div>

        <p className="mt-3 text-xs text-gray-400">
          Datos ficticios de demostración. El ranking real se conectará a
          Supabase.
        </p>
      </div>
    </section>
  );
}
