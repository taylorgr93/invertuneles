// app/contact/page.tsx
import { use } from "react";
import type { Metadata } from "next";
import { makeT } from "@/lib/makeT";
import { getTranslations, Dict } from "@/lib/getTranslations";
import Hero from "@/components/common/Hero";
import Divider from "@/components/common/Divider";
import heroContact from "@/public/images/contact/handshake.webp";
import ContactAdvisors from "@/components/contact/ContactAdvisors";
import { tArray } from "@/lib/tArray";

export const metadata: Metadata = {
  title: "Invertuneles",
  description:
    "Nuestra empresa ofrece una agenda de asesores disponibles para atender cualquier necesidad que pueda tener. Nos especializamos en proporcionar servicios personalizados para asegurar que cada cliente reciba la atención que necesita. ¡No se pierda nuestros próximos eventos! Para mantenerse al día, síganos en Instagram o dé un like a nuestra página. Para más información y cotizaciones, no dude en ponerse en contacto con nosotros. Estamos aquí para ayudarle a encontrar soluciones efectivas y personalizadas. Su satisfacción es nuestra prioridad. ¡Esperamos poder servirle pronto!",
  keywords: ["acerca de", "acerca de nosotros", "..."],
};

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
