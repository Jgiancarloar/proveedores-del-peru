
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import {
  ArrowLeft,
  BadgeCheck,
  Box,
  Building2,
  ChevronRight,
  CreditCard,
  LayoutDashboard,
  Menu,
  Tags,
  Users,
  X,
} from "lucide-react";

const navigation = [
  { label: "Dashboard", href: "/admin", icon: LayoutDashboard },
  { label: "Empresas", href: "/admin/empresas", icon: Building2 },
  { label: "Usuarios", href: "/admin/usuarios", icon: Users },
  { label: "Categorías", href: "/admin/categorias", icon: Tags },
  { label: "Patrocinios", href: "/admin/patrocinios", icon: CreditCard },
];

export default function AdminLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const isActive = (href: string) =>
    href === "/admin"
      ? pathname === href
      : pathname === href || pathname.startsWith(`${href}/`);

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      {menuOpen && (
        <button
          type="button"
          aria-label="Cerrar menú"
          onClick={() => setMenuOpen(false)}
          className="fixed inset-0 z-40 bg-gray-950/40 lg:hidden"
        />
      )}

      <aside
        className={`fixed inset-y-0 left-0 z-50 flex w-72 flex-col border-r border-gray-200 bg-white transition-transform duration-200 lg:translate-x-0 ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex h-20 items-center justify-between border-b border-gray-100 px-5">
          <Link href="/" className="inline-flex items-center gap-3" aria-label="Proveedores del Perú, inicio">
            <span className="flex size-10 items-center justify-center rounded-xl bg-orange-500 text-white">
              <Box size={24} strokeWidth={1.8} />
            </span>
            <span className="text-lg font-bold tracking-tight text-gray-950">
              Proveedores<span className="text-orange-500"> del Perú</span>
            </span>
          </Link>
          <button
            type="button"
            aria-label="Cerrar menú"
            onClick={() => setMenuOpen(false)}
            className="rounded-lg p-2 text-gray-500 hover:bg-gray-100 lg:hidden"
          >
            <X size={20} />
          </button>
        </div>

        <div className="mx-4 mt-5 rounded-xl border border-orange-100 bg-orange-50 p-3">
          <div className="flex items-center gap-2 text-orange-700">
            <BadgeCheck size={18} />
            <span className="text-sm font-semibold">Administración</span>
          </div>
          <p className="mt-1 text-xs text-orange-700/70">
            Gestión de la plataforma
          </p>
        </div>

        <p className="px-5 pb-3 pt-6 text-xs font-semibold uppercase tracking-wider text-gray-400">
          Menú principal
        </p>

        <nav className="flex-1 space-y-1 overflow-y-auto px-3">
          {navigation.map(({ label, href, icon: Icon }) => {
            const active = isActive(href);

            return (
              <Link
                key={href}
                href={href}
                onClick={() => setMenuOpen(false)}
                className={`flex items-center gap-3 rounded-xl px-3 py-3 text-sm font-medium transition ${
                  active
                    ? "bg-orange-50 text-orange-700"
                    : "text-gray-600 hover:bg-gray-50 hover:text-gray-950"
                }`}
              >
                <Icon size={19} strokeWidth={1.8} />
                <span className="flex-1">{label}</span>
                {active && <ChevronRight size={16} />}
              </Link>
            );
          })}
        </nav>

        <div className="border-t border-gray-100 p-4">
          <Link href="/" className="flex items-center gap-3 rounded-xl px-3 py-3 text-sm font-medium text-gray-600 hover:bg-gray-50 hover:text-orange-600">
            <ArrowLeft size={18} />
            Volver al sitio web
          </Link>
        </div>
      </aside>

      <div className="min-h-screen lg:pl-72">
        <header className="sticky top-0 z-30 flex h-16 items-center justify-between border-b border-gray-200 bg-white/95 px-4 backdrop-blur sm:px-7">
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => setMenuOpen(true)}
              aria-label="Abrir menú"
              className="rounded-lg p-2 text-gray-600 hover:bg-gray-100 lg:hidden"
            >
              <Menu size={21} />
            </button>
            <div>
              <p className="text-sm font-semibold text-gray-900">Administración</p>
              <p className="hidden text-xs text-gray-500 sm:block">
                Control de Proveedores del Perú
              </p>
            </div>
          </div>
          <span className="rounded-full bg-orange-50 px-3 py-1.5 text-xs font-semibold text-orange-700">
            Panel administrativo
          </span>
        </header>

        <main className="mx-auto w-full max-w-7xl p-4 sm:p-7 lg:p-9">
          {children}
        </main>
      </div>
    </div>
  );
}
