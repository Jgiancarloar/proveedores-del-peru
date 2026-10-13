
import Link from "next/link";
import {
  BadgeCheck,
  Building2,
  MapPin,
} from "lucide-react";
import { IconBrandWhatsapp } from "@tabler/icons-react";
import type { Company } from "@/lib/companies-data";

interface CompanyCardProps {
  company: Company;
}

export default function CompanyCard({
  company,
}: CompanyCardProps) {
  const location = [
    company.district,
    company.province,
    company.department,
  ]
    .filter(Boolean)
    .join(", ");

  const whatsappNumber = company.whatsapp?.replace(/\D/g, "");
  const whatsappUrl = whatsappNumber
    ? `https://wa.me/${whatsappNumber}`
    : undefined;

  return (
    <article className="group rounded-2xl border border-gray-200 bg-white p-5 transition-all hover:border-orange-200 hover:shadow-lg hover:shadow-orange-950/[0.04] sm:p-6">
      {/* Encabezado */}
      <div className="flex items-start gap-4">
        <div className="flex size-12 shrink-0 items-center justify-center rounded-xl border border-gray-100 bg-gray-50 text-orange-500 transition-colors group-hover:bg-orange-50 sm:size-14">
          <Building2 className="size-6" strokeWidth={1.7} />
        </div>

        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-1.5">
            <Link
              href={`/empresa/${company.slug}`}
              className="text-base font-semibold text-gray-950 transition-colors hover:text-orange-600"
            >
              {company.name}
            </Link>

            {company.verified && (
              <BadgeCheck
                className="size-4 shrink-0 fill-blue-500 text-white"
                aria-label="Empresa verificada"
              />
            )}
          </div>

          <p className="mt-1 text-xs font-medium text-orange-600">
            {company.category}
          </p>
        </div>
      </div>

      {/* Descripción */}
      <p className="mt-4 line-clamp-2 min-h-10 text-sm leading-5 text-gray-500">
        {company.description}
      </p>

      {/* Ubicación */}
      {location && (
        <div className="mt-4 flex items-start gap-1.5 text-xs text-gray-500">
          <MapPin className="mt-0.5 size-4 shrink-0 text-gray-400" />
          <span>{location}</span>
        </div>
      )}

      {/* Estado y acciones */}
      <div className="mt-5 flex items-center justify-between gap-3 border-t border-gray-100 pt-4">
        <div>
          {company.bid > 0 && (
            <span className="inline-flex items-center rounded-full bg-green-50 px-2.5 py-1 text-xs font-medium text-green-700">
              Patrocinado
            </span>
          )}
        </div>

        <div className="ml-auto flex shrink-0 items-center gap-2">
          <a
            href="#"
            onClick={(event) => event.preventDefault()}
            aria-label={`WhatsApp de ${company.name}`}
            title="WhatsApp próximamente"
            className="flex size-9 items-center justify-center rounded-lg bg-[#25D366] text-white transition-colors hover:opacity-80"
          >
            <IconBrandWhatsapp size={21} stroke={1.8} />
          </a>

          <Link
            href={`/empresa/${company.slug}`}
            className="rounded-lg bg-orange-500 px-3.5 py-2.5 text-xs font-semibold text-white transition-colors hover:bg-orange-600"
          >
            Ver empresa
          </Link>
        </div>
      </div>

    </article>
  );
}