// app/[locale]/layout.tsx
import { use } from "react";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import WelcomeGate from "@/components/common/WelcomeGate";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://invertuneles.com"),
  title: {
    default: "Invertuneles",
    template: "%s | Invertuneles",
  },
  description:
    "Empresa líder en túneles agrícolas, invernaderos y soluciones tecnológicas para cultivos. Asesoría especializada en agricultura protegida, berries y cultivos intensivos. Contacta con nuestros expertos.",
  keywords: [
    "túneles agrícolas",
    "invernaderos",
    "agricultura protegida",
    "cultivo de berries",
    "arandanos",
    "frambuesas",
    "fresas",
    "zarzamoras",
    "asesoría agrícola",
    "tecnología agrícola",
    "México",
    "Invertuneles",
  ],
  authors: [{ name: "Invertuneles" }],
  creator: "Invertuneles",
  publisher: "Invertuneles",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "es_MX",
    alternateLocale: ["en_US"],
    url: "https://invertuneles.com",
    siteName: "Invertuneles",
    title: "Invertuneles - Túneles Agrícolas y Soluciones para Cultivos",
    description:
      "Empresa líder en túneles agrícolas, invernaderos y soluciones tecnológicas para cultivos.",
    images: [
      {
        url: "/images/og-image.jpg", // Crea esta imagen 1200x630px
        width: 1200,
        height: 630,
        alt: "Invertuneles - Túneles Agrícolas",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Invertuneles - Túneles Agrícolas",
    description: "Soluciones profesionales en agricultura protegida",
    images: ["/images/og-image.jpg"],
  },
  verification: {
    // Add this after signing up to Google Search Console
    google: "7QiUlkc0LE3mlc_ao6LIypfQ76hPwErdvVjvmq2Q_YQ",
  },
  alternates: {
    canonical: "https://invertuneles.com",
    languages: {
      "es-MX": "https://invertuneles.com/es",
      "en-US": "https://invertuneles.com/en",
    },
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png", // opcional
  },
};

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>; // Important: params is now a promise
};

// NOTE: EL rootlayout es un HOC (Higher order component) - por que se mandan componentes children
export default function RootLayout({ children, params }: Props) {
  const { locale } = use(params);

  return (
    <html lang={locale}>
      <head>
        {/* JSON-LD para SEO estructurado */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Invertuneles",
              url: "https://invertuneles.com",
              logo: "https://invertuneles.com/logo.png",
              description:
                "Empresa líder en túneles agrícolas y soluciones para cultivos",
              address: {
                "@type": "PostalAddress",
                addressCountry: "MX",
              },
              sameAs: [
                // Agrega tus redes sociales aquí
                // "https://www.instagram.com/tu-instagram",
                // "https://www.facebook.com/tu-facebook",
              ],
            }),
          }}
        />
      </head>
      <body
        className={`
          min-h-screen flex flex-col      /* llena la altura y apila */
          ${geistSans.variable} ${geistMono.variable}
          antialiased bg-black
        `}
      >
        {/* gradiente solo arriba */}
        <div
          className="
            absolute top-0 left-0 w-full h-32
            bg-gradient-to-b from-black/80 via-black/40 to-transparent
            pointer-events-none z-10   /* por debajo del navbar, encima del vídeo */
          "
        />
        <Navbar locale={locale} />
        <WelcomeGate locale={locale} />
        {children}
        <Footer locale={locale} />
        <WhatsAppButton />
      </body>
    </html>
  );
}
