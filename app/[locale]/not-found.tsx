// app/[locale]/not-found.tsx  o  app/not-found.tsx
import Link from "next/link";
import { headers } from "next/headers";

export default async function NotFound() {
  /* 1️⃣  Esperar, por si devuelve una promesa */
  const hdrsPromise = headers();
  const hdrs = hdrsPromise instanceof Promise ? await hdrsPromise : hdrsPromise;

  /* 2️⃣  Ahora SÍ podemos llamar .get() sin advertencias */
  const path = hdrs.get("x-matched-path") ?? hdrs.get("x-invoke-path") ?? "";

  const locale = path.split("/")[1] || "es"; // fallback

  return (
    <div className="flex h-screen flex-col items-center justify-center gap-8 bg-black text-white">
      <h1 className="text-7xl font-extrabold text-green-500 drop-shadow-lg">
        404
      </h1>

      <p className="text-2xl text-center">
        Esta página no existe.
        <br />
        This page could not be found.
      </p>

      <Link
        href={`/${locale}`}
        className="rounded-lg bg-green-600 px-8 py-4 text-xl font-semibold transition hover:bg-green-500"
      >
        Volver al inicio
      </Link>
    </div>
  );
}
