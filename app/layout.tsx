
import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Proveedores del Perú | Encuentra proveedores",
    template: "%s | Proveedores del Perú",
  },
  description:
    "Encuentra empresas proveedoras de productos y servicios en todo el Perú. Busca por categoría, ubicación y especialidad.",
  metadataBase: new URL("https://www.proveedoresdelperu.com"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${outfit.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
