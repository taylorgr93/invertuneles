// components/common/Hero.tsx
import Image, { ImageProps, StaticImageData } from "next/image";

type HeroProps = {
  src: StaticImageData | string;
  alt?: string;
  containerHeight?: string; // default 60 vh
  objectPosition?: string; // default "center 70%"
  priority?: boolean;
} & Omit<ImageProps, "src" | "alt">;

export default function Hero({
  src,
  alt = "Hero image",
  containerHeight = "h-[60vh]",
  objectPosition = "center 70%",
  priority = false,
  ...rest
}: HeroProps) {
  return (
    <div className={`relative w-full overflow-hidden ${containerHeight}`}>
      {/* Imagen de fondo */}
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        className={`object-cover object-[${objectPosition}]`}
        {...rest}
      />

      {/* Overlay degradado 40 % → 0 % (encima de la imagen) */}
      <div
        aria-hidden
        className="
          absolute inset-0
          z-10                     /* ← ¡pone el overlay por encima! */
          pointer-events-none
          bg-gradient-to-b
          from-black/40
          to-transparent
        "
      />
    </div>
  );
}

// Ejemplos rápidos de reutilización
/*    
    // En la home
    <Hero src="/images/greenhouse.webp" objectPosition="center 40%" /> 
    
    // Hero más alto 
    <Hero src="/images/team.jpg" height="h-[80vh]" />
    
    // Sin prioridad y con sizes responsive      
    <Hero src="/images/banner.webp" sizes="(max-width:768px) 100vw, 80vw" /> 
*/
