
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  BadgeCheck,
  Building2,
  Globe,
  Mail,
  MapPin,
  Package,
  Phone,
  Wrench,
} from "lucide-react";

import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandTiktok,
  IconBrandWhatsapp,
} from "@tabler/icons-react";

import type { Company } from "@/lib/companies-data";

interface CompanyProfileProps {
  company: Company;
}

const demoContact = {
  whatsapp: "51999999999",
  phone: "+51 999 999 999",
  email: "contacto@ejemplo.com",
  website: "https://example.com",
  facebook: "https://www.facebook.com/",
  instagram: "https://www.instagram.com/",
  tiktok: "https://www.tiktok.com/",
};

const demoServices = [
  "Servicio 1",
  "Servicio 2",
];

const demoProducts = [
  "Producto 1",
  "Producto 2",
];

export default function CompanyProfile({
  company,
}: CompanyProfileProps) {
  const whatsapp = company.whatsapp || demoContact.whatsapp;
  const phone = company.phone || demoContact.phone;
  const email = company.email || demoContact.email;

  const website = company.website || demoContact.website;

  const websiteUrl = website.startsWith("http")
    ? website
    : `https://${website}`;

  const whatsappUrl = `https://wa.me/${whatsapp.replace(/\D/g, "")}`;

  const socialLinks = [
    {
      name: "Facebook",
      href: demoContact.facebook,
      icon: IconBrandFacebook,
    },
    {
      name: "Instagram",
      href: demoContact.instagram,
      icon: IconBrandInstagram,
    },
    {
      name: "TikTok",
      href: demoContact.tiktok,
      icon: IconBrandTiktok,
    },
    {
      name: "WhatsApp",
      href: whatsappUrl,
      icon: IconBrandWhatsapp,
    },
  ];

  return (
    <main className="min-h-screen bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        {/* Volver al listado */}
        <Link
          href="/empresas"
          className="mb-6 inline-flex items-center gap-2 text-sm font-medium text-gray-600 transition hover:text-orange-600"
        >
          <ArrowLeft size={18} />
          Volver a proveedores
        </Link>

        {/* Encabezado del proveedor */}
        <section className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm sm:p-8">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-start">
            <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl bg-orange-50 text-orange-600">
              <Building2 size={36} strokeWidth={1.6} />
            </div>

            <div className="min-w-0 flex-1">
              <div className="flex flex-wrap items-center gap-2">
                <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
                  {company.name}
                </h1>

                {company.verified && (
                  <span className="inline-flex items-center gap-1 rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700">
                    <BadgeCheck size={15} />
                    Verificado
                  </span>
                )}

                {company.bid > 0 && (
                  <span className="rounded-full bg-green-50 px-3 py-1 text-xs font-semibold text-green-700">
                    Patrocinado
                  </span>
                )}
              </div>

              <p className="mt-3 text-sm leading-6 text-gray-600 sm:text-base">
                {company.description}
              </p>

              <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-gray-500">
                <span className="inline-flex items-center gap-1.5">
                  <Building2 size={16} />
                  {company.category}
                </span>

                <span className="inline-flex items-center gap-1.5">
                  <MapPin size={16} />
                  {[
                    company.district,
                    company.province,
                    company.department,
                  ]
                    .filter(Boolean)
                    .join(", ")}
                </span>
              </div>

              {/* Redes sociales */}
              <div className="mt-5 flex flex-wrap items-center gap-3">
                <span className="mr-1 text-sm font-medium text-gray-700">
                  Encuéntranos:
                </span>

                {socialLinks.map(({ name, href, icon: Icon }) => (
                  <a
                    key={name}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={name}
                    title={name}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 text-gray-600 transition hover:border-orange-200 hover:bg-orange-50 hover:text-orange-600"
                  >
                    <Icon size={20} stroke={1.8} />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Contenido del perfil */}
        <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {/* Información principal */}
          <div className="space-y-6 lg:col-span-2">
            {/* Acerca de la empresa */}
            <section className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm sm:p-7">
              <h2 className="text-lg font-bold text-gray-900">
                Acerca de nosotros
              </h2>

              <p className="mt-3 text-sm leading-7 text-gray-600 sm:text-base">
                {company.description}
              </p>

              <p className="mt-3 text-sm leading-7 text-gray-600 sm:text-base">
                Somos proveedores de productos y servicios para nuestros
                clientes. Contáctanos para conocer más sobre nuestra
                oferta y encontrar una solución para tus necesidades.
              </p>
            </section>

            {/* Listas simples de servicios y productos */}
            <section className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm sm:p-7">
              <h2 className="text-lg font-bold text-gray-900">
                Productos y servicios
              </h2>

              <p className="mt-2 text-sm text-gray-500">
                Conoce los productos y servicios que ofrecemos.
              </p>

              {/* Servicios */}
              <div className="mt-6">
                <h3 className="flex items-center gap-2 text-base font-semibold text-gray-800">
                  <Wrench size={19} className="text-orange-600" />
                  Servicios que ofrecemos
                </h3>

                <ul className="mt-3 list-disc space-y-2 pl-6 text-sm leading-6 text-gray-600 sm:text-base">
                  {demoServices.map((service) => (
                    <li key={service}>{service}</li>
                  ))}
                </ul>
              </div>

              <div className="my-6 border-t border-gray-100" />

              {/* Productos */}
              <div>
                <h3 className="flex items-center gap-2 text-base font-semibold text-gray-800">
                  <Package size={19} className="text-orange-600" />
                  Productos que ofrecemos
                </h3>

                <ul className="mt-3 list-disc space-y-2 pl-6 text-sm leading-6 text-gray-600 sm:text-base">
                  {demoProducts.map((product) => (
                    <li key={product}>{product}</li>
                  ))}
                </ul>
              </div>
            </section>

            {/* Información del proveedor */}
            <section className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm sm:p-7">
              <h2 className="text-lg font-bold text-gray-900">
                Información del proveedor
              </h2>

              <dl className="mt-4 divide-y divide-gray-100">
                <div className="flex flex-col gap-1 py-3 sm:flex-row sm:justify-between sm:gap-4">
                  <dt className="text-sm text-gray-500">Empresa</dt>
                  <dd className="text-sm font-medium text-gray-900 sm:text-right">
                    {company.name}
                  </dd>
                </div>

                <div className="flex flex-col gap-1 py-3 sm:flex-row sm:justify-between sm:gap-4">
                  <dt className="text-sm text-gray-500">Categoría</dt>
                  <dd className="text-sm font-medium text-gray-900 sm:text-right">
                    {company.category}
                  </dd>
                </div>

                <div className="flex flex-col gap-1 py-3 sm:flex-row sm:justify-between sm:gap-4">
                  <dt className="text-sm text-gray-500">Departamento</dt>
                  <dd className="text-sm font-medium text-gray-900 sm:text-right">
                    {company.department}
                  </dd>
                </div>

                <div className="flex flex-col gap-1 py-3 sm:flex-row sm:justify-between sm:gap-4">
                  <dt className="text-sm text-gray-500">Provincia</dt>
                  <dd className="text-sm font-medium text-gray-900 sm:text-right">
                    {company.province}
                  </dd>
                </div>

                <div className="flex flex-col gap-1 py-3 sm:flex-row sm:justify-between sm:gap-4">
                  <dt className="text-sm text-gray-500">Distrito</dt>
                  <dd className="text-sm font-medium text-gray-900 sm:text-right">
                    {company.district}
                  </dd>
                </div>
              </dl>
            </section>
          </div>

          {/* Información de contacto */}
          <aside className="space-y-6">
            <section className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm sm:p-6">
              <h2 className="text-lg font-bold text-gray-900">
                Contactar al proveedor
              </h2>

              <p className="mt-2 text-sm leading-6 text-gray-500">
                Comunícate directamente con la empresa para solicitar
                información sobre sus productos y servicios.
              </p>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl bg-green-600 px-4 py-3 text-sm font-semibold text-white transition hover:bg-green-700"
              >
                <IconBrandWhatsapp size={20} />
                Contactar por WhatsApp
              </a>

              <div className="mt-5 space-y-4">
                <a
                  href={`tel:${phone.replace(/[^\d+]/g, "")}`}
                  className="flex items-start gap-3 text-sm text-gray-600 transition hover:text-orange-600"
                >
                  <Phone
                    size={19}
                    className="mt-0.5 shrink-0 text-orange-600"
                  />
                  <span className="break-all">{phone}</span>
                </a>

                <a
                  href={`mailto:${email}`}
                  className="flex items-start gap-3 text-sm text-gray-600 transition hover:text-orange-600"
                >
                  <Mail
                    size={19}
                    className="mt-0.5 shrink-0 text-orange-600"
                  />
                  <span className="break-all">{email}</span>
                </a>

                <a
                  href={websiteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 text-sm text-gray-600 transition hover:text-orange-600"
                >
                  <Globe
                    size={19}
                    className="mt-0.5 shrink-0 text-orange-600"
                  />
                  <span className="break-all">
                    {website.replace(/^https?:\/\//, "").replace(/\/$/, "")}
                  </span>
                </a>
              </div>
            </section>

            {/* Llamado a la acción */}
            <section className="rounded-2xl bg-orange-50 p-5 sm:p-6">
              <h2 className="text-base font-bold text-gray-900">
                ¿Buscas otro proveedor?
              </h2>

              <p className="mt-2 text-sm leading-6 text-gray-600">
                Explora nuestro directorio y encuentra más empresas
                y profesionales en Perú.
              </p>

              <Link
                href="/empresas"
                className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-orange-700 transition hover:text-orange-800"
              >
                Explorar proveedores
                <ArrowRight size={17} />
              </Link>
            </section>
          </aside>
        </div>
      </div>
    </main>
  );
}
