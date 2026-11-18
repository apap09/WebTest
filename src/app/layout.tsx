import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Atelier N°9 — Digital Creative Studio",
  description: "A modern creative studio crafting digital identities, products, and experiences.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
