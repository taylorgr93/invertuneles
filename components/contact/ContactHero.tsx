/* components/ContactHero.tsx */
import Image from "next/image";

export default function ContactHero() {
  return (
    <div className="relative w-full h-[60vh] overflow-hidden">
      <Image
        src="/images/handshake.jpg"
        alt="A handshake"
        fill
        sizes="100vw"
        priority
        /* object-cover para que llene el marco
       object-[center_70%] → ancla en el 70 % de alto
       (enseña más la parte baja y recorta más arriba) */
        className="object-cover object-[center_70%]"
      />
    </div>
  );
}
