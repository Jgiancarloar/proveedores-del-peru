
"use client";

import Link from "next/link";
import { useState } from "react";
import { Box, Menu, UserRound, X } from "lucide-react";

const navigation = [
  { label: "Categorías", href: "/categorias" },
  { label: "Empresas", href: "/empresas" },
  { label: "Cómo funciona", href: "/como-funciona" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-gray-100 bg-white/95 backdrop-blur-md">
      <div className="relative mx-auto flex h-[68px] max-w-[1240px] items-center justify-between gap-3 px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link
          href="/"
          className="group inline-flex items-center gap-3"
          aria-label="Proveedores del Perú, inicio"
        >
          <span className="flex size-11 items-center justify-center rounded-xl bg-orange-500 text-white shadow-sm shadow-orange-500/20 transition-transform group-hover:-translate-y-0.5">
            <Box size={25} strokeWidth={1.8} />
          </span>

          <span className="text-xl font-bold tracking-tight text-gray-950">
            Proveedores
            <span className="text-orange-500"> del Perú</span>
          </span>
        </Link>

        {/* Cobertura nacional */}
        <div className="hidden items-center gap-2 text-xs text-gray-500 xl:flex">
          <span className="size-2 rounded-full bg-green-500" />
          Empresas de todo el Perú
        </div>

        {/* Navegación de escritorio */}
        <nav className="hidden items-center gap-5 md:flex xl:gap-7">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-gray-600 transition-colors hover:text-orange-500"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Acciones */}
        <div className="flex shrink-0 items-center gap-1 sm:gap-2">
          {/* Tablet y escritorio */}
          <Link
            href="/login"
            className="hidden h-10 items-center justify-center gap-2 rounded-xl bg-orange-500 px-4 text-sm font-semibold text-white transition-colors hover:bg-orange-600 sm:flex"
          >
            <UserRound className="size-4" />
            Iniciar sesión
          </Link>

          {/* Móvil */}
          <Link
            href="/login"
            aria-label="Iniciar sesión"
            className="flex size-10 items-center justify-center rounded-xl bg-orange-500 text-white transition-colors hover:bg-orange-600 sm:hidden"
          >
            <UserRound className="size-5" />
          </Link>

          {/* Menú móvil */}
          <button
            type="button"
            aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
            className="flex size-10 items-center justify-center rounded-xl text-gray-700 transition-colors hover:bg-gray-100 md:hidden"
          >
            {menuOpen ? (
              <X className="size-5" />
            ) : (
              <Menu className="size-5" />
            )}
          </button>
        </div>

        {/* Menú desplegable superpuesto */}
        {menuOpen && (
          <>
            <button
              type="button"
              aria-label="Cerrar menú"
              onClick={() => setMenuOpen(false)}
              className="fixed inset-0 top-[68px] z-40 cursor-default bg-black/20 lg:hidden"
            />

            <nav className="absolute left-0 right-0 top-full z-50 border-b border-gray-100 bg-white px-4 py-3 shadow-lg lg:hidden sm:px-6">
              <div className="mx-auto flex max-w-[1240px] flex-col gap-1">
                {navigation.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    className="rounded-lg px-3 py-3 text-sm font-medium text-gray-700 transition-colors hover:bg-orange-50 hover:text-orange-600"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </nav>
          </>
        )}
      </div>
    </header>
  );
}
