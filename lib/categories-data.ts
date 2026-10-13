
import type { LucideIcon } from "lucide-react";
import {
  Building2,
  BriefcaseBusiness,
  Code2,
  Factory,
  HardHat,
  HeartPulse,
  Monitor,
  ShieldCheck,
  Truck,
  Wrench,
} from "lucide-react";

export interface CategoryCompany {
  id: string;
  name: string;
  slug: string;
  bid: number;
  verified: boolean;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  description: string;
  icon: LucideIcon;
  companiesCount: number;
  companies: CategoryCompany[];
}

export const categories: Category[] = [
  {
    id: "1",
    name: "Construcción",
    slug: "construccion",
    description: "Materiales, obras y soluciones para tus proyectos.",
    icon: HardHat,
    companiesCount: 128,
    companies: [
      { id: "c1", name: "Cementos Andinos SAC", slug: "cementos-andinos", bid: 1800, verified: true },
      { id: "c2", name: "Aceros del Pacífico", slug: "aceros-del-pacifico", bid: 250, verified: false },
      { id: "c3", name: "Drywall Express", slug: "drywall-express", bid: 0, verified: true },
    ],
  },
  {
    id: "2",
    name: "Seguridad industrial",
    slug: "seguridad-industrial",
    description: "Equipos de protección, seguridad y prevención.",
    icon: ShieldCheck,
    companiesCount: 86,
    companies: [
      { id: "s1", name: "Puertas Seguras Perú", slug: "puertas-seguras-peru", bid: 5000, verified: true },
      { id: "s2", name: "FireStop SAC", slug: "firestop", bid: 950, verified: true },
      { id: "s3", name: "Protección Integral", slug: "proteccion-integral", bid: 0, verified: false },
    ],
  },
  {
    id: "3",
    name: "Tecnología",
    slug: "tecnologia",
    description: "Software, equipos y soluciones tecnológicas.",
    icon: Code2,
    companiesCount: 94,
    companies: [
      { id: "t1", name: "Nexo Digital", slug: "nexo-digital", bid: 750, verified: true },
      { id: "t2", name: "Soluciones TI Perú", slug: "soluciones-ti-peru", bid: 0, verified: false },
      { id: "t3", name: "Data Center Perú", slug: "data-center-peru", bid: 0, verified: true },
    ],
  },
  {
    id: "4",
    name: "Industria y manufactura",
    slug: "industria-manufactura",
    description: "Fabricación, maquinaria y suministros industriales.",
    icon: Factory,
    companiesCount: 72,
    companies: [
      { id: "i1", name: "Industrias del Sur", slug: "industrias-del-sur", bid: 1200, verified: true },
      { id: "i2", name: "Metalúrgica Nacional", slug: "metalurgica-nacional", bid: 0, verified: false },
      { id: "i3", name: "Manufacturas Perú", slug: "manufacturas-peru", bid: 0, verified: false },
    ],
  },
  {
    id: "5",
    name: "Transporte y logística",
    slug: "transporte-logistica",
    description: "Transporte de carga, distribución y almacenamiento.",
    icon: Truck,
    companiesCount: 63,
    companies: [
      { id: "l1", name: "Logística Nacional", slug: "logistica-nacional", bid: 600, verified: true },
      { id: "l2", name: "Carga Express Perú", slug: "carga-express-peru", bid: 0, verified: false },
      { id: "l3", name: "Almacenes del Perú", slug: "almacenes-del-peru", bid: 0, verified: true },
    ],
  },
  {
    id: "6",
    name: "Servicios profesionales",
    slug: "servicios-profesionales",
    description: "Consultoría, asesoría y servicios especializados.",
    icon: BriefcaseBusiness,
    companiesCount: 115,
    companies: [
      { id: "p1", name: "Consultores Asociados", slug: "consultores-asociados", bid: 450, verified: true },
      { id: "p2", name: "Gestión Empresarial Perú", slug: "gestion-empresarial-peru", bid: 0, verified: false },
      { id: "p3", name: "Asesoría Integral", slug: "asesoria-integral", bid: 0, verified: true },
    ],
  },
  {
    id: "7",
    name: "Salud",
    slug: "salud",
    description: "Equipamiento médico, suministros y servicios de salud.",
    icon: HeartPulse,
    companiesCount: 48,
    companies: [
      { id: "h1", name: "Equipos Médicos Perú", slug: "equipos-medicos-peru", bid: 300, verified: true },
      { id: "h2", name: "Suministros Clínicos", slug: "suministros-clinicos", bid: 0, verified: false },
      { id: "h3", name: "Salud Integral SAC", slug: "salud-integral", bid: 0, verified: true },
    ],
  },
  {
    id: "8",
    name: "Electricidad y electrónica",
    slug: "electricidad-electronica",
    description: "Componentes eléctricos, instalaciones y automatización.",
    icon: Wrench,
    companiesCount: 57,
    companies: [
      { id: "e1", name: "Electro Perú", slug: "electro-peru", bid: 200, verified: true },
      { id: "e2", name: "Automatización Industrial", slug: "automatizacion-industrial", bid: 0, verified: false },
      { id: "e3", name: "Componentes Eléctricos SAC", slug: "componentes-electricos", bid: 0, verified: true },
    ],
  },
  {
    id: "9",
    name: "Informática y equipos",
    slug: "informatica-equipos",
    description: "Computadoras, periféricos y equipamiento tecnológico.",
    icon: Monitor,
    companiesCount: 69,
    companies: [
      { id: "m1", name: "CompuMarket Perú", slug: "compumarket-peru", bid: 350, verified: true },
      { id: "m2", name: "Equipos Corporativos", slug: "equipos-corporativos", bid: 0, verified: false },
      { id: "m3", name: "Tecnología Empresarial", slug: "tecnologia-empresarial", bid: 0, verified: true },
    ],
  },
  {
    id: "10",
    name: "Servicios generales",
    slug: "servicios-generales",
    description: "Mantenimiento, limpieza y servicios para empresas.",
    icon: Building2,
    companiesCount: 103,
    companies: [
      { id: "g1", name: "Servicios Integrales SAC", slug: "servicios-integrales", bid: 180, verified: true },
      { id: "g2", name: "Mantenimiento Total", slug: "mantenimiento-total", bid: 0, verified: false },
      { id: "g3", name: "Soluciones Generales Perú", slug: "soluciones-generales-peru", bid: 0, verified: true },
    ],
  },
];

export function getCategoryBySlug(slug: string) {
  return categories.find((category) => category.slug === slug);
}

export function getCategoryCompanies(category: Category) {
  return [...category.companies].sort((a, b) => {
    if (a.bid > 0 && b.bid === 0) return -1;
    if (a.bid === 0 && b.bid > 0) return 1;
    if (a.bid > 0 && b.bid > 0 && a.bid !== b.bid) {
      return b.bid - a.bid;
    }

    return a.name.localeCompare(b.name, "es");
  });
}
