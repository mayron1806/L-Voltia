import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";

const roboto = Roboto({ weight: ["400", "700"], subsets: ["latin"] });

export const metadata: Metadata = {
  title: "L-Voltia / Whatsapp com super poderes",
  description: "Transforme seu WhatsApp em uma máquina de vendas 100% automatizada e deixe seus concorrentes para trás!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br" style={{ scrollBehavior: 'smooth' }}>
      <body className={roboto.className}>{children}</body>
    </html>
  );
}
