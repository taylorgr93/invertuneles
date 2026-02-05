// app/contact/page.tsx
import { use } from "react";
import type { Metadata } from "next";
import { makeT } from "@/lib/makeT";
import { tArray } from "@/lib/tArray";
import { PageProps } from "@/types/page";
import { getTranslations, Dict } from "@/lib/getTranslations";
import Hero from "@/components/common/Hero";
import Divider from "@/components/common/Divider";
import heroContact from "@/public/images/contact/handshake.webp";
import ContactAdvisors from "@/components/contact/ContactAdvisors";

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { locale } = await params;

  const titles = {
    es: "Contacto - Invertuneles",
    en: "Contact - Invertuneles",
  };

  const descriptions = {
    es: "Contáctanos para obtener asesoría personalizada sobre túneles agrícolas y soluciones para cultivo de berries. Agenda una cita con nuestros expertos.",
    en: "Contact us for personalized advice on agricultural tunnels and berry cultivation solutions. Schedule an appointment with our experts.",
  };

  return {
    title: titles[locale as "es" | "en"],
    description: descriptions[locale as "es" | "en"],
    alternates: {
      canonical: `https://invertuneles.com/${locale}/contact`,
      languages: {
        "es-MX": "https://invertuneles.com/es/contact",
        "en-US": "https://invertuneles.com/en/contact",
      },
    },
  };
}

export default function ContactPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = use(params);
  const translations: Dict = use(getTranslations(locale));
  const t = makeT(translations);

  const title = t("contact.advisors.title");
  const paragraphs = tArray(translations, "contact.advisors.paragraphs");

  return (
    <div className="bg-black">
      {/* <span className="text-7xl">{t("pages.contact")}</span> */}
      <Hero
        src={heroContact}
        alt="A handshake"
        priority
        // sizes="100vw"
        sizes="(max-width:768px) 100vw, (max-width:1280px) 75vw, 1920px"
        placeholder="blur"
      />
      <Divider />
      <ContactAdvisors
        title={title}
        paragraphs={paragraphs}
        advisors={[
          {
            id: 1,
            name: "Ricardo Galván",
            role: "Ventas",
            card: "/images/contact/sellers/vendedores-qr-02.webp",
          },
          {
            id: 2,
            name: "Francisco Prado",
            role: "Operaciones / Diseño de Proyectos",
            card: "/images/contact/sellers/vendedores-qr-04.webp",
          },
          {
            id: 3,
            name: "Salvador Flores",
            role: "Ventas",
            card: "/images/contact/sellers/vendedores-qr-06.webp",
          },
          {
            id: 4,
            name: "José Vega",
            role: "Ventas",
            card: "/images/contact/sellers/vendedores-qr-07.webp",
          },
          {
            id: 5,
            name: "Oscar Servín",
            role: "Ventas",
            card: "/images/contact/sellers/vendedores-qr-08.webp",
          },
          // {
          //   id: 6,
          //   name: "Francisco Guillén",
          //   role: "Asesor de Ventas / Instalación",
          //   card: "/images/contact/sellers/vendedores-qr-03.webp",
          // },
        ]}
      />
      <Divider />
    </div>
  );
}
