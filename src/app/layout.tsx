import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import { GoogleTagManager, GoogleAnalytics } from '@next/third-parties/google';
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
      <GoogleTagManager gtmId={process.env.GTA_ID!} />
      <GoogleAnalytics gaId={process.env.GTA_ID!} />
      <body className={roboto.className}>{children}</body>
    </html>
  );
}
