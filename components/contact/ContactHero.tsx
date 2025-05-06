/* components/ContactHero.tsx */
import Image from "next/image";

export default function ContactHero() {
  return (
    <div className="relative w-full h-[35vh] sm:h-[50vh] lg:h-[60vh]">
      <Image
        src="/images/handshake.jpg"
        alt="A handshake"
        fill /* hace que la imagen use position:absolute y llene el contenedor */
        priority /* opcional: precarga la imagen porque es above‑the‑fold */
        className="object-cover" /* <–– recorta para cubrir todo el contenedor */
        sizes="100vw" /* indica a Next que siempre ocupa el 100 % del viewport */
      />
    </div>
  );
}
