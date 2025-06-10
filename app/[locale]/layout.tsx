// app/layout.tsx
import { use } from "react";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Invertuneles",
  description:
    "Nuestra empresa ofrece una agenda de asesores disponibles para atender cualquier necesidad que pueda tener. Nos especializamos en proporcionar servicios personalizados para asegurar que cada cliente reciba la atención que necesita. ¡No se pierda nuestros próximos eventos! Para mantenerse al día, síganos en Instagram o dé un like a nuestra página. Para más información y cotizaciones, no dude en ponerse en contacto con nosotros. Estamos aquí para ayudarle a encontrar soluciones efectivas y personalizadas. Su satisfacción es nuestra prioridad. ¡Esperamos poder servirle pronto!",
  keywords: ["acerca de nosotros", "servicios", "valores"],
  icons: {
    icon: "/",
  },
};

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>; // 👈 importante: params es ahora una promesa
};

// NOTE: EL rootlayout es un HOC (Higher order component) - por que se mandan componentes children
export default function RootLayout({ children, params }: Props) {
  const { locale } = use(params);

  return (
    <html lang={locale}>
      <body
        className={`
          min-h-screen flex flex-col      /* llena la altura y apila */
          ${geistSans.variable} ${geistMono.variable}
          antialiased
        `}
      >
        <Navbar locale={locale} />
        {children}
        <Footer locale={locale} />
        <WhatsAppButton />
      </body>
    </html>
  );
}
