// components/common/Hero.tsx
import Image, { ImageProps, StaticImageData } from "next/image";

type HeroProps = {
  src: StaticImageData | string; // imagen obligatoria
  alt?: string; // alt opcional → “Hero image” por defecto
  containerHeight?: string; // alto tailwind: "h-[60vh]" (default)
  objectPosition?: string; // p.ej. "center 70%" (default como antes)
  priority?: boolean; // pasar a <Image>
} & Omit<ImageProps, "src" | "alt">; // permite `sizes`, etc.

export default function Hero({
  src,
  alt = "Hero image",
  containerHeight = "h-[60vh]",
  objectPosition = "center 70%",
  priority = false,
  ...rest // p. ej. sizes
}: HeroProps) {
  return (
    <div className={`relative w-full ${containerHeight} overflow-hidden`}>
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        className={`object-cover object-[${objectPosition}]`}
        {...rest}
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
