// app/api/inquiry/route.ts
import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  try {
    const { crop, location, name, phone } = await req.json();

    /*  ─ SMTP transport ─  */
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST, // ej. "smtp.gmail.com"
      port: Number(process.env.SMTP_PORT), // 465 SSL  ─o─ 587 TLS
      secure: false,
      requireTLS: true,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
      tls: {
        rejectUnauthorized: false, // Evita problemas en local con certificados
        // ciphers: "SSLv3", // recomendado por MSFT
      },
    });

    /*  ─ mensaje ─  */
    await transporter.sendMail({
      from: `"Invertúneles 👩‍🌾" <${process.env.SMTP_USER}>`,
      to: process.env.MAIL_TO, // tu correo destino
      subject: "Nuevo formulario de proyecto personalizado",
      html: `
        <h2>Datos del agricultor</h2>
        <ul>
          <li><b>Cultivo:</b> ${crop}</li>
          <li><b>Zona:</b> ${location}</li>
          <li><b>Nombre:</b> ${name}</li>
          <li><b>Teléfono:</b> ${phone}</li>
        </ul>
      `,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}
