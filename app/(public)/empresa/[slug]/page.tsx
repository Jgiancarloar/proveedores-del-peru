
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import CompanyProfile from "@/components/companies/CompanyProfile";
import { companies } from "@/lib/companies-data";

interface CompanyPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export function generateStaticParams() {
  return companies.map((company) => ({
    slug: company.slug,
  }));
}

export async function generateMetadata({
  params,
}: CompanyPageProps): Promise<Metadata> {
  const { slug } = await params;

  const company = companies.find((item) => item.slug === slug);

  if (!company) {
    return {
      title: "Empresa no encontrada",
    };
  }

  return {
    title: company.name,
    description: company.description,
    openGraph: {
      title: `${company.name} | Proveedores del Perú`,
      description: company.description,
      type: "website",
    },
  };
}

export default async function CompanyPage({
  params,
}: CompanyPageProps) {
  const { slug } = await params;

  const company = companies.find((item) => item.slug === slug);

  if (!company) {
    notFound();
  }

  return <CompanyProfile company={company} />;
}